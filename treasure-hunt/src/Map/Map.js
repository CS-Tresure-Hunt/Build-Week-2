import React, { Component } from "react";
import axios from "axios";

export class Map extends Component {
  state = {
    roomData: [],
    players: [],
    exits: [],
    items: [],
    currentRoom: [],
    playerStatus: []
  };

  componentDidMount = () => {
    this.playerRoom();
  };

  playerRoom = () => {
    axios
      .get("https://lambda-treasure-hunt.herokuapp.com/api/adv/init/", {
        headers: {
          Authorization: `Token ${localStorage.token}`
        }
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          exits: res.data.exits,
          roomData: res.data,
          players: res.data.players,
          items: res.data.items,
          currentRoom: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  takeItem = item => {
    axios
      .post(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/take/",
        {
          name: item
        },
        {
          headers: {
            Authorization: `Token ${localStorage.token}`
          }
        }
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          exits: res.data.exits,
          roomData: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  movePlayer = direction => {
    axios
      .post(
        `https://treasure-hunt-legend.herokuapp.com/traverse/${direction}`,
        {},
        {
          headers: {
            Authorization: `Token ${localStorage.token}`
          }
        }
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          exits: res.data.exits,
          roomData: res.data,
          currentRoom: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  playerStats = () => {
    axios
      .post(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/status/",
        {},
        {
          headers: {
            Authorization: `Token ${localStorage.token}`
          }
        }
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          roomData: res.data
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  pray = () => {
    axios
      .post(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/pray/",
        {},
        {
          headers: {
            Authorization: `Token ${localStorage.token}`
          }
        }
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          roomData: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return <div className="Map">Map</div>;
  }
}

export default Map;
