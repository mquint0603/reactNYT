import React, {Component} from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm"
import Result from "./Result"

class Search extends Component {
    state = {
        topic: "",
        beginDate: "",
        endDate: "",
        results: []
    }

    handleFormSubmit = event => {
        event.preventDefault()
        API.getArticles(this.state.topic, this.state.beginDate, this.state.endDate)
        .then(res => {
            this.setState({results: res.data.response.docs, topic: "", beginDate: "", endDate: ""})
            console.log(this.state.results)
        })
    }

    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;
        // Set the state for the appropriate input field
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="container">
            
                <div className="row justify-content-center">
                    <div className="col-sm-10">
                        <div className="card">
                            <h5 className="card-header">Search</h5>
                            <div className="card-body">  
                                <SearchForm
                                    handleFormSubmit={this.handleFormSubmit}
                                    handleInputChange={this.handleInputChange}
                                    topic = {this.state.topic}
                                    start = {this.state.beginDate}
                                    end = {this.state.endDate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row justify-content-center results">
                    <div className="col-sm-10">
                        <div className="card">
                            <h5 className="card-header">Results</h5>
                            <div className="card-body text-left">  
                                {this.state.results.map(result => (
                                    <Result
                                        key = {result._id}
                                        id = {result._id}
                                        headline = {result.headline.main}
                                        url = {result.web_url}
                                        snippet = {result.snippet}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default Search;