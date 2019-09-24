import React, { Component } from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import Map from "./Map/Map";
import SignIn from "./Login/SignIn";
import auth from "./Login/auth";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}

const Auth = withRouter(auth(Map)(SignIn));

export default App;
