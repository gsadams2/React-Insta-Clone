import React, { Component } from "react";

export class PostBody extends Component {
  render() {
    return (
      <>
        <div>
          <img class="instaPost" src={this.props.img} alt="Insta Post Yo" />
        </div>

        <i className="far fa-heart fa-lg" />

        <i class="far fa-comment" />

        <div class="likes">
          <h6>{this.props.likes} likes</h6>
        </div>
      </>
    );
  }
}

export default PostBody;
