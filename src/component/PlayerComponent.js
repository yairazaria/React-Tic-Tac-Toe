import React, { Component } from "react";

export default class Player extends Component {
  handelForm = e => {
    e.preventDefault();
    this.props.player(e.target.player.value);
  };

  render() {
    return (
      <form onSubmit={e => this.handelForm(e)}>
        <label>
          <strong>Player X</strong> 
          <input type="radio" name="player" value="X" />
        </label>
        <label>
        <strong>Player O</strong>
          <input type="radio" name="player" value="O" />
        </label>
        <input type="submit" value="Start" />
      </form>
    );
  }
}
