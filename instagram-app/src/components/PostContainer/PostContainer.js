import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends Component {
  render() {
    return (
      <div className="post-container">
        {this.props.filteredPosts.length === 0
          ? this.props.data.map(post => {
              return (
                <>
                  <header>
                    <img src={post.thumbnailUrl} alt="thumbnail" />
                    <h3>{post.username}</h3>
                  </header>

                  <img src={post.imageUrl} alt={post.id} />

                  <section className="likebar">{post.likes} likes</section>

                  <CommentSection
                    comments={post.comments}
                    timestamp={post.timestamp}
                  />
                </>
              );
            })
          : this.props.filteredPosts.map(post => {
              return (
                <>
                  <header>
                    <img src={post.thumbnailUrl} alt="thumbnail" />
                    <h3>{post.username}</h3>
                  </header>

                  <img src={post.imageUrl} alt={post.id} />

                  <section className="likebar">{post.likes} likes</section>

                  <CommentSection
                    comments={post.comments}
                    timestamp={post.timestamp}
                  />
                </>
              );
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
