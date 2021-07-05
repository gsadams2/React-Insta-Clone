import React, { Component } from "react";
import withAuthenticate from "./components/authentication/withAuthenticate";
import "./App.css";
import PostsPage from "../src/PostsPage";
import Login from "./components/Login/Login";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends Component {
  render() {
    return <ComponentFromWithAuthenticate />;
  }
}

export default App;
