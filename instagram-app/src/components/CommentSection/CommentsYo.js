import React, { Component } from "react";
import styled from "styled-components";

const CommentsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10%;
  margin-left: 1.5%;
`;

class CommentsYo extends Component {
  render() {
    return (
      <CommentsDiv>
        <h3>{this.props.comment.username} &nbsp; &nbsp; </h3>
        <p>{this.props.comment.text}</p>
      </CommentsDiv>
    );
  }
}

export default CommentsYo;
