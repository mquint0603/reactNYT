import React from "react";

const Result = props => (
    <div className="wrapper">
        
        <a href={props.url}>
            <h5 className="title">{props.headline}</h5>
        </a>
        <p className="snippet">{props.snippet}</p>
        <button className="btn btn-success save-btn" id={props.id}>Save</button>
        <hr/>
    </div>

);

export default Result;