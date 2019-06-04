import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";

export class PostContainer extends Component {
  render() {
    return (
      <div>
        <div class="post">
          <div class="userID">
            <img
              class="thumbnail"
              src={this.props.post.thumbnailUrl}
              alt="thumnail"
            />
            <p>{this.props.post.username}</p>
          </div>
          <div>
            <img
              class="instaPost"
              src={this.props.post.imageUrl}
              alt="Insta Post Yo"
            />
          </div>
          <div class="likes">
            <h6>{this.props.post.likes} likes</h6>
          </div>
        </div>
        <div class="comment-section">
          {this.props.post.comments.map(comment => (
            <CommentSection comments={comment} key={comment.id} />
          ))}
        </div>
        <div class="timeStamp"> {this.props.post.timestamp} </div>
        <div>
          <input type="text" placeholder="Add a comment..." />
        </div>
      </div>
    );
  }
}

export default PostContainer;
