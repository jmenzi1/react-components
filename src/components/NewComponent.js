import React, { Component } from "react";

class MyComponent extends Component {
    render() {
        return <div>Hello World!</div>
    }
}
export default MyComponent;

renderComments(comments) {
    if(comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4> 
                {comments.map(comments) => {
                    return(
                        <div key={comment.id}>
                            <p>{comment.text},
                                {comment.author},
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </p>
                        </div>
                    );
                }}}
            </div>
        );
    } return <div />
}