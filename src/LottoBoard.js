import React, { Component } from "react";
import LottoBall from "./LottoBall";
import "./styles.css";
class LottoBoard extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40
  };
  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.maxBalls })
    };

    this.handleCLick = this.handleCLick.bind(this);
  }

  generate() {
    this.setState((currState) => ({
      nums: currState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  }

  handleCLick() {
    this.generate();
  }

  render() {
    return (
      <div className="boardMain">
        <h1>{this.props.title}</h1>
        <div className="boardWrapper">
          {this.state.nums.map((n) => (
            <LottoBall num={n} />
          ))}
        </div>
        <button onClick={this.handleCLick}>Generate</button>
      </div>
    );
  }
}

export default LottoBoard;
