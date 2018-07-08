import React, { Component } from "react";
import API from "../utils/API";

class Saved extends Component {
    state = {
        articles: []
    }

    componentDidMount(){
        this.loadArticles();
    }

    loadArticles = () => {
        API.getSaved()
        .then(res =>
            this.setState({articles: res.data})
        )
    }

    render() {
        return (
            <div className="row justify-content-center results">
                    <div className="col-sm-10">
                        <div className="card">
                            <h5 className="card-header">Saved</h5>
                            <div className="card-body text-left">  
                                {this.state.articles.map(article => (
                                    <a href={article.url}>
                                    <h5 className="title">{article.title}</h5>
                                </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Saved;