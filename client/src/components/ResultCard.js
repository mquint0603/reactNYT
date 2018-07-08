import React from "react";
import Result from "./Result"

const ResultCard = props => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="card">
                    <h5 className="card-header">Results</h5>
                    <div className="card-body text-left results">  
                        {props.results.map(result => (
                            <Result
                                key = {result._id}
                                id = {result._id}
                                headline = {result.headline.main}
                                author = {result.byline.original}
                                date = {result.pub_date}
                                url = {result.web_url}
                                snippet = {result.snippet}
                                saveArticle = {props.saveArticle}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultCard;