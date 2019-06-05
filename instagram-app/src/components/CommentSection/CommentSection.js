import React, { Component } from "react";
import Comment from "../Comment";

export class CommentSection extends Component {
  state = {
    comments: ""
  };

  onChange = e => this.setState({ comments: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state.comments);
    this.setState({ comments: "" });
  };

  render() {
    return (
      <div class="comment-section">
        {this.props.comments.map(comment => (
          <Comment comments={comment} key={comment.id} />
        ))}

        <div class="timeStamp"> {this.props.timestamp} </div>
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Add a comment..."
              value={this.state.comments}
              onChange={this.onChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CommentSection;
