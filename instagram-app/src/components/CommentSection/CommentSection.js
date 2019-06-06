import React, { Component } from "react";
import styled from "styled-components";
import CommentsYo from "./CommentsYo";

const CommentForm = styled.form``;

const CommentInput = styled.input`
  border: 1px solid gray;
  width: 635px;
  padding: 10px 1px;
`;

const TimeStamp = styled.p`
  font-size: 0.7rem;
  font-color: gray;
`;

class CommentSection extends Component {
  state = {
    comments: this.props.comments,
    newComment: ""
  };

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      username: "Kayla",
      text: this.state.newComment
    };

    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: ""
    });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => {
          return (
            <>
              <CommentsYo comment={comment} />
            </>
          );
        })}
        <TimeStamp>{this.props.timestamp}</TimeStamp>
        <CommentForm onSubmit={this.addNewComment}>
          <CommentInput
            type="text"
            name="newComment"
            value={this.state.newComment}
            onChange={this.changeHandler}
            placeholder="Add a comment..."
          />
        </CommentForm>
      </div>
    );
  }
}
export default CommentSection;

// import React, { Component } from "react";
// import Comment from "../Comment";

// export class CommentSection extends Component {
//   state = {
//     comments: ""
//   };

//   onChange = e => this.setState({ comments: e.target.value });
//   onSubmit = e => {
//     e.preventDefault();
//     this.props.addComment(this.state.comments);
//     this.setState({ comments: "" });
//   };

//   render() {
//     return (
//       <div class="comment-section">
//         {this.props.comments.map(comment => (
//           <Comment comments={comment} key={comment.id} />
//         ))}

//         <div class="timeStamp"> {this.props.timestamp} </div>
//         <div>
//           <form onSubmit={this.onSubmit}>
//             <input
//               type="text"
//               placeholder="Add a comment..."
//               value={this.state.comments}
//               onChange={this.onChange}
//             />
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default CommentSection;
