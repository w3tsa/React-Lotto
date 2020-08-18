import React, { Component } from "react";
import "./styles.css";
class LottoBall extends Component {
  render() {
    return (
      <div className="LottoBallWrapper">
        <h1 id="circle">{this.props.num}</h1>
      </div>
    );
  }
}

export default LottoBall;
