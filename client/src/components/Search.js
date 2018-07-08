import React, {Component} from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm"
import ResultCard from "./ResultCard"
import Saved from "./Saved"

class Search extends Component {
    state = {
        topic: "",
        beginDate: "",
        endDate: "",
        results: [],
        saved: []
    }

    handleFormSubmit = event => {
        event.preventDefault()
        API.getNYTArticles(this.state.topic, this.state.beginDate, this.state.endDate)
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

    loadSaved = () => {
        API.getSaved()
        .then(res => 
            this.setState({saved: res.data})
        )
        .catch(err => console.log(err));
    }

    deleteArticle = id => {
        API.deleteArticle(id)
        .then (res => this.loadSaved())
        .catch(err => console.log(err));
    }


    componentDidMount(){
        this.loadSaved();
    }

    saveArticle = (title, author, url, date) => {
        console.log(title, author, url, date)
        const articleData = {
            title: title,
            author: author,
            url: url,
            date: date
        }
        API.saveArticle(articleData)
        .then(res => this.loadSaved())
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
            
                <div className="row justify-content-center">
                    <div className="col-md-10">
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
                
                <ResultCard
                    results = {this.state.results}
                    saveArticle = {this.saveArticle}
                />
                <br/>
                <Saved
                    saved = {this.state.saved}
                    deleteArticle = {this.deleteArticle}
                />
            
            </div>
        )
    }
}

export default Search;