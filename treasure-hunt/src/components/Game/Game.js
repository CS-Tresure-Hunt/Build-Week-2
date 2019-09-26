import React, { Component } from "react";
import axios from "axios";
import Controls from "../Controls/Controls";
import Blockchain from "../Proof/Blockchain";

export class Game extends Component {
  state = {
    roomData: [],
    players: [],
    exits: [],
    items: [],
    currentRoom: [],
    playerStatus: [],
    name: localStorage.getItem("name")
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
        `https://lambda-treasure-hunt.herokuapp.com/api/adv/move/`,
        { direction: direction },
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

  nameChange = name => {
    console.log(name);
    axios
      .post(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/",
        {
          name: name,
          confirm: "aye"
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
          roomData: res.data
        });
      })
      .catch(err => {
        console.log(err);
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

  sell = () => {
    axios
      .post(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/",
        {
          name: "tiny treasure",
          confirm: "yes"
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
          roomData: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getTrueName = () => {
    axios
      .post(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/",
        {
          confirm: "aye",
          name: this.state.name
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
          roomData: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    console.log(this.props);

    return (
      <div className="Main">
        <Controls
          signOut={this.props.signOut}
          playerStats={this.playerStats}
          playerStatus={this.state.playerStatus}
          takeItem={this.takeItem}
          exits={this.state.exits}
          roomData={this.state.roomData}
          movePlayer={this.movePlayer}
          players={this.state.players}
          items={this.state.items}
          nameChange={this.nameChange}
          name={this.state.name}
          pray={this.pray}
          sell={this.sell}
          getTrueName={this.getTrueName}
        />
        <Blockchain />
      </div>
    );
  }
}

export default Game;
