import React, { Component } from "react";
import "./App.css";
import Game from "./components/Game/Game";
import { withRouter } from "react-router-dom";
import SignIn from "./components/Login/SignIn";
import auth from "./components/Login/auth";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}
const Auth = withRouter(auth(Game)(SignIn));

export default App;
