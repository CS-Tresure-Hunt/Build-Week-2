import React from "react";
import axios from "axios";

const url = "https://lambda-treasure-hunt.herokuapp.com/api/adv/";

const auth = Game => SignIn =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        token: "",
        loggedIn: false
      };
    }

    componentDidMount() {}

    handleChanges = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    //requires name and token
    logIn = e => {
      e.persist();
      return axios
        .get(`${url}init/`, {
          headers: {
            Authorization: `Token ${this.state.token}`
          }
        })
        .then(res => {
          console.log(res.data);
          if (res.status === 200) {
            setTimeout(() => {
              localStorage.setItem("token", this.state.token);
              localStorage.setItem("name", this.state.name);
              this.setState({
                loggedIn: true
              });
            }, 1000);
          }
        })
        .catch(err => {
          console.log(err);
        });
    };

    logOut = e => {
      e.preventDefault();
      window.localStorage.clear();
      this.setState({
        loggedIn: false
      });
    };

    render() {
      if (localStorage.getItem("token")) {
        return (
          <Game
            logOut={this.logOut}
            loggedIn={this.state.loggedIn}
            name={this.state.name}
          />
        );
      } else {
        return (
          <SignIn
            handleChanges={this.handleChanges}
            logIn={this.logIn}
            name={this.state.name}
            token={this.state.token}
          />
        );
      }
    }
  };

export default auth;
