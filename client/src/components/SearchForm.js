import React from "react";

const SearchForm = props => (
    <form className="search">
        <div className="form-group row text-left">
            <label htmlFor="topic" className="col-md-2 col-form-label">Topic:</label>
            <div className="col-md-10">
                <input
                    value={props.topic}
                    onChange={props.handleInputChange}
                    name="topic"
                    type="text"
                    className="form-control"
                    id="topic"
                />            
            </div>
        </div>
        <div className="form-group row text-left">
            <label htmlFor="beginDate" className="col-md-2 col-form-label">Start Year:</label>
            <div className="col-md-10">
                <input
                    value={props.start}
                    onChange={props.handleInputChange}
                    name="beginDate"
                    type="text"
                    className="form-control"
                    id="beginDate"
                />            
            </div>
        </div>
        <div className="form-group row text-left">
            <label htmlFor="endDate" className="col-md-2 col-form-label">End Year:</label>
            <div className="col-md-10">
                <input
                    value={props.end}
                    onChange={props.handleInputChange}
                    name="endDate"
                    type="text"
                    className="form-control"
                    id="endDate"
                />            
            </div>
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