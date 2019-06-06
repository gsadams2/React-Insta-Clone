import React, { Component } from "react";
import styled from "styled-components";

import CommentSection from "../CommentSection/CommentSection";

const CardHeader = styled.header`
  display: flex;
  align-items: center;
  margin-left: 2%;
`;

const ThumbNail = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 2%;
`;

const LikeSection = styled.div`
  margin-left: 2%;
  position: absolute;
  left: 4%;
`;

const LikeBar = styled.section`
  font-weight: bold;
`;

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
        <CardHeader>
          <ThumbNail
            className="thumbnail"
            src={this.props.post.thumbnailUrl}
            alt="thumbnail"
          />
          <h3>{this.props.post.username}</h3>
        </CardHeader>
        <img
          className="main-image"
          src={this.props.post.imageUrl}
          alt={this.props.post.id}
        />
        <LikeSection>
          <i
            className={
              this.state.liked ? "fas fa-heart red" : "far fa-heart fa-lg"
            }
            onClick={this.addLike}
          />

          <i className="far fa-comment fa-lg" />

          <LikeBar>{this.state.likes} likes</LikeBar>
        </LikeSection>
        <CommentSection
          comments={this.props.post.comments}
          timestamp={this.props.post.timestamp}
        />
      </div>
    );
  }
}

export default Card;
