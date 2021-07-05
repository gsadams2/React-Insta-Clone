import React from "react";

class Login extends React.Component {
  toggle = e => {
    if (localStorage.getItem("loggedIn")) {
      localStorage.removeItem("loggedIn");
    } else {
      localStorage.setItem("loggedIn", true);
    }
    document.location.reload(true);
  };

  render() {
    return (
      <div>
        <input placeholder="Username" type="text" />
        <input placeholder="Password" type="text" />
        <button onClick={this.toggle}>Login</button>
      </div>
    );
  }
}

export default Login;
