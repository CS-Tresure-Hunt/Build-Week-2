import React, { Component } from "react";

export class SignIn extends Component {
  render() {
    return (
      <div className="loginWrapper">
        <div className="loginTitleContainer">
          <h4>Welcome to</h4>
          <h1>Treasure Hunt</h1>
        </div>
        <form type="submit">
          <div className="inputContainer">
            <input
              type="text"
              value={this.props.name}
              name="name"
              onChange={this.props.handleChanges}
              placeholder="Name..."
            />
          </div>
          <div className="inputContainer">
            <input
              type="text"
              value={this.props.token}
              name="token"
              onChange={this.props.handleChanges}
              placeholder="Token..."
            />
          </div>
        </form>
        <div className="loginButtonContainer">
          <button onClick={this.props.signIn}>Login</button>
        </div>
      </div>
    );
  }
}

export default SignIn;
