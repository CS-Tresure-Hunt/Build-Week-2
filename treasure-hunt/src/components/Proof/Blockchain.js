import React from "react";
import SHA256 from "crypto-js/sha256";
import axios from "axios";

class Blockchain extends React.Component {
  state = {
    proof: 0,
    difficulty: 0,
    coinsMined: 0
  };

  proofOfWork = lastProof => {
    let proof = this.state.proof;

    do {
      proof += Math.floor(Math.random(1, 21) * 5);
      console.log(`Proof found: ${proof}`);
    } while (this.validProof(lastProof, proof) === false);

    return proof;
  };

  validProof = (lastProof, proof) => {
    let guess = encodeURI(`${lastProof}${proof}`);
    let guess_hash = `${SHA256(guess)}`;
    let leadingZeros = guess_hash;

    return (
      guess_hash.substring(0, this.state.difficulty) ===
      `${leadingZeros.padStart(this.state.difficulty + 1, "0")}`
    );
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
        console.log("Successfully Mined a coin!", res.data);
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
