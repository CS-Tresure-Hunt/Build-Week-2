import React, { Component } from "react";

export class MapData extends Component {
  state = {
    coolDown: 0
  };
  componentDidMount() {
    console.log(this.props.roomData);
    this.setState({
      coolDown: this.props.roomData.cooldown
    });
    this.myInterval = setInterval(() => {
      if (this.state.coolDown > 0.5) {
        this.setState({
          coolDown: this.state.coolDown - 1
        });
      }
      if (this.state.coolDown === 0.5) {
        this.setState({
          coolDown: this.state.coolDown - 0.5
        });
      }
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.roomData.cooldown !== prevProps.roomData.cooldown) {
      this.setState({
        coolDown: this.props.roomData.cooldown
      });
    }
  }

  render() {
    const dir = ["n", "s", "e", "w"];
    return (
      <div className="mapDataWrapper">
        <h2>Data</h2>
        <div className="roomAndCoords">
          <h1>Room {this.props.roomData.room_id}</h1>
          <h1>{this.props.roomData.coordinates}</h1>
        </div>
        <div className="title-description">
          <h3>{this.props.roomData.title}</h3>
          <p>{this.props.roomData.description}</p>
          <div className="roomData-items">
            <h3>Items</h3>
            <p>There are {this.props.items.length} items in this room</p>
            {this.props.items.map(item => {
              return (
                <button
                  className="grab-button"
                  onClick={() => this.props.takeItem(item)}
                >
                  Grab: {item}
                </button>
              );
            })}
          </div>
          <div className="roomData-players">
            <h3>Players</h3>
            <p>There are {this.props.players.length} players in this room</p>
          </div>
        </div>

        <div className="game-buttons">
          <h3 className="player-message">{this.props.roomData.messages}</h3>
          <h3>{this.props.roomData.errors}</h3>
          <h2 id="timer">Cool Down: {this.state.coolDown}</h2>

          <div className="directionButtons">
            <button
              className={
                this.props.exits.includes(dir[0])
                  ? "button availableButton"
                  : "button regularButton"
              }
              onClick={() => {
                this.props.movePlayer(dir[0]);
              }}
            >
              N
            </button>
            <button
              className={
                this.props.exits.includes(dir[1])
                  ? "button availableButton"
                  : "button regularButton"
              }
              onClick={() => {
                this.props.movePlayer(dir[1]);
              }}
            >
              S
            </button>
            <button
              className={
                this.props.exits.includes(dir[2])
                  ? "button availableButton"
                  : "button regularButton"
              }
              onClick={() => {
                this.props.movePlayer(dir[2]);
              }}
            >
              E
            </button>
            <button
              className={
                this.props.exits.includes(dir[3])
                  ? "button availableButton"
                  : "button regularButton"
              }
              onClick={() => {
                this.props.movePlayer(dir[3]);
              }}
            >
              W
            </button>
          </div>
          <div className="logout">
            <button onClick={this.props.signOut}>Log Out</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MapData;
