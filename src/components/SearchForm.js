import React from "react";

const SearchForm = props => (
    <form className="search">
        <div className="form-group">
            <label htmlFor="topic">Topic:</label>
            <input
                value={props.topic}
                onChange={props.handleInputChange}
                name="topic"
                type="text"
                className="form-control"
                id="topic"
            />            
        </div>
        <div className="form-group">
            <label htmlFor="beginDate">Start Date:</label>
            <input
                value={props.start}
                onChange={props.handleInputChange}
                name="beginDate"
                type="text"
                className="form-control"
                id="beginDate"
            />            
        </div>
        <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input
                value={props.end}
                onChange={props.handleInputChange}
                name="endDate"
                type="text"
                className="form-control"
                id="endDate"
            />            
        </div>
            <button
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn btn-success"
            >
                Search
            </button>
    </form>
)

export default SearchForm;