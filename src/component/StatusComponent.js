import React, { Component } from "react";
import Player from "./PlayerComponent";

export default class Status extends Component {
  handleSetPlayer = e => {
    this.props.setPlayer(e);
  };

  macthStatus = () => {
    if (this.props.winner) {
      return <h2>The Winner is : {this.props.winner}</h2>;
    } else{
      return this.props.player ? (
        <h2>Next Player is : {this.props.player}</h2>
      ) : (
        <Player player={e => this.handleSetPlayer(e)} />
      )
    }
  };
  render() {
    return <span> {this.macthStatus()} </span>;
  }
}
