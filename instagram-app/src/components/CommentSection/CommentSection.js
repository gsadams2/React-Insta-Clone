import React, { Component } from "react";

export class CommentSection extends Component {
  render() {
    return (
      <div class="comments">
        <div class="usernameComment">
          <p>{this.props.comments.username} &nbsp; </p>{" "}
        </div>
        <div class="textComment">
          <p>{this.props.comments.text} </p>{" "}
        </div>
      </div>
    );
  }
}

export default CommentSection;
