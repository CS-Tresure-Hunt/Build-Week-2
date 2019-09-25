import React, { Component } from "react";
import axios from "axios";
import MapData from "./MapData";

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
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/move/",
        {
          headers: {
            Authorization: `Token ${localStorage.token}`
          }
        },
        {
          direction: direction
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
    return (
      <div className="Map">
        <MapData
          signOut={this.props.signOut}
          playerStats={this.playerStats}
          playerStatus={this.state.playerStatus}
          takeItem={this.takeItem}
          exits={this.state.exits}
          roomData={this.state.roomData}
          movePlayer={this.movePlayer}
          players={this.state.players}
          items={this.state.items}
          pray={this.pray}
        />
      </div>
    );
  }
}

export default Map;
