import React, { Component } from "react";

export class PostHeader extends Component {
  render() {
    return (
      <>
        <div class="userID">
          <img class="thumbnail" src={this.props.thumbnail} alt="thumnail" />
          <p>{this.props.usernames}</p>
        </div>
      </>
    );
  }
}

export default PostHeader;
