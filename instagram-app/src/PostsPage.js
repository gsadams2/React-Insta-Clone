import React from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class PostsPage extends React.Component {
  state = {
    data: [],
    filteredPosts: []
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  searchFilter = e => {
    const filtered = this.state.data.filter(post =>
      post.username.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ filteredPosts: filtered });
  };

  render() {
    console.log("render", this.state.data);
    return (
      <div className="App">
        <SearchBar
          newSearch={this.state.search}
          searchFilter={this.searchFilter}
        />

        <PostContainer
          data={this.state.data}
          filteredPosts={this.state.filteredPosts}
          searchFilter={this.searchFilter}
        />
      </div>
    );
  }
}
export default PostsPage;

// import React from "react";
// import "./App.css";
// import dummyData from "./dummy-data";
// import PostContainer from "./components/PostContainer/PostContainer";
// import SearchBar from "./components/SearchBar/SearchBar";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: dummyData
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <SearchBar />

//         {this.state.data.map(post => (
//           <PostContainer post={post} key={post.id} />
//         ))}
//       </div>
//     );
//   }
// }

// export default App;
