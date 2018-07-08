import React from "react";

const Saved = props => {

    return (
        <div className="row justify-content-center saved">
            <div className="col-md-10">
                <div className="card">
                    <h5 className="card-header">Saved</h5>
                    <div className="card-body text-left">  
                        {props.saved.map(article => (
                            <div key={article._id}>
                                <a href={article.url}>
                                    <h5 className="saved-title">{article.title}</h5>
                                </a>
                                <button className="btn btn-danger btn-sm del-btn" id={article._id} onClick={() => props.deleteArticle(article._id)}>Delete</button>
                                <hr/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Saved;