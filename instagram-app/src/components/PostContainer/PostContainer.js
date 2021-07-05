import React, { Component } from "react";
import "./PostContainer.css";
import Card from "./Card";

class PostContainer extends Component {
  render() {
    return (
      <div>
        {this.props.filteredPosts.length === 0
          ? this.props.data.map(post => {
              return <Card post={post} />;
            })
          : this.props.filteredPosts.map(post => {
              return <Card post={post} />;
            })}
      </div>
    );
  }
}

export default PostContainer;

// import React, { Component } from "react";
// import CommentSection from "../CommentSection/CommentSection";
// import PostHeader from "../PostHeader";
// import PostBody from "../PostBody";

// export class PostContainer extends Component {
//   render() {
//     return (
//       <div>
//         <PostHeader
//           thumbnail={this.props.post.thumbnailUrl}
//           usernames={this.props.post.username}
//         />
//         <PostBody
//           img={this.props.post.imageUrl}
//           likes={this.props.post.likes}
//         />
//         <CommentSection
//           comments={this.props.post.comments}
//           timestamp={this.props.post.timestamp}
//         />
//       </div>
//     );
//   }
// }

// export default PostContainer;
