import React from 'react'

const Comment = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.autor}
                    </a>
                <div className="metadata">
                    <span className="date">{props.data}</span>
                </div>
                <div className="text">{props.coment} </div>
            </div>
        </div>
    )
}

export default Comment