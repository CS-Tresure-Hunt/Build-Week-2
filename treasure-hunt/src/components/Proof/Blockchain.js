import React from "react";
import SHA256 from "crypto-js/sha256";
import axios from "axios";

class Blockchain extends React.Component {
  state = {
    proof: 0,
    difficulty: 2,
    coinsMined: 0
  };

  proofOfWork = lastProof => {
    let proof = this.state.proof;

    do {
      proof += 1;
      console.log(`Proof found: ${proof}`);
    } while (this.validProof(lastProof, proof) === false);

    return proof;
  };

  validProof = (lastProof, proof) => {
    // needs work
  };

  getProof = () => {
    axios
      .get("https://lambda-treasure-hunt.herokuapp.com/api/bc/last_proof/", {
        headers: {
          Authorization: `Token ${localStorage.token}`
        }
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          proof: res.data.proof,
          difficulty: res.data.difficulty
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  mineCoin = () => {
    let lastProof = this.state.proof;
    let newProof = this.proofOfWork(lastProof);

    axios
      .post(
        "https://lambda-treasure-hunt.herokuapp.com/api/bc/mine/",
        {
          proof: newProof
        },
        {
          headers: {
            Authorization: `Token ${localStorage.token}`
          }
        }
      )
      .then(res => {
        if (res.data.message === "New Block Forged") {
          console.log("Ya got one");
        }
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <div>
        <h1>Blockchain</h1>
        <button onClick={this.getProof}>Get Proof</button>
        <button onClick={this.mineCoin}>Mine Your Coin!!</button>
      </div>
    );
  }
}
export default Blockchain;
