import React, { Component } from "react";

import CommentSection from "../CommentSection/CommentSection";
export class Card extends Component {
  state = {
    likes: this.props.post.likes,
    liked: false
  };

  addLike = e => {
    if (this.state.liked === false) {
      this.setState({
        liked: true,
        likes: this.props.post.likes + 1
      });
    } else {
      this.setState({
        likes: this.props.post.likes,
        liked: false
      });
    }
  };
  render() {
    return (
      <div className="post-container">
        <header>
          <img
            className="thumbnail"
            src={this.props.post.thumbnailUrl}
            alt="thumbnail"
          />
          <h3>{this.props.post.username}</h3>
        </header>
        <img
          className="main-image"
          src={this.props.post.imageUrl}
          alt={this.props.post.id}
        />
        <div>
          <i
            className={this.state.liked ? "fas fa-heart red" : "far fa-heart"}
            onClick={this.addLike}
          />

          <i className="far fa-comment" />

          <section className="likebar">{this.state.likes} likes</section>
        </div>
        <CommentSection
          comments={this.props.post.comments}
          timestamp={this.props.post.timestamp}
        />
      </div>
    );
  }
}

export default Card;
