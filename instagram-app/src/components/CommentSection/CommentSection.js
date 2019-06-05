import React, { Component } from "react";

class CommentSection extends Component {
  state = {
    comments: this.props.comments,
    newComment: ""
  };

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      username: "George",
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
              <h3>{comment.username}</h3>
              <p>{comment.text}</p>
            </>
          );
        })}

        <p className="timestamp">{this.props.timestamp}</p>
        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            name="newComment"
            value={this.state.newComment}
            onChange={this.changeHandler}
            placeholder="add a comment..."
          />
        </form>
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
