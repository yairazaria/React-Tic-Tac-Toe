import React, { Component } from "react";
import "../App.css";
import Status from "./StatusComponent";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    };
  }

  checkWinner = () => {
    let winLine = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ];

    this.checkMatch(winLine);
  };

  checkMatch = winLine => {
    for (let i = 0; i < winLine.length; i++) {
      const [a, b, c] = winLine[i];
      let board = this.state.board;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        this.setState({
          winner: this.state.player
        });
      }
    }
  };

  handleClick = index => {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board;

      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player;

        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X",
          winner: this.state.winner
        });

        this.checkWinner();
      }
    }
  };

  setPlayer = player => {
    this.setState({
      player
    });
  };

  renderBox = () => {
    return this.state.board.map((box, index) => (
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}
      </div>
    ));
  };

  handleReset = () => {
    this.setState({
      board: Array(9).fill(null),
      player: null,
      winner: null
    });
  };

  render() {
    return (
      <div className="continer">
        <h1 className="h1">Welcome to tic tac toe Game</h1>
        <h2 className="h2">Choose player and click to Start</h2>
        {this.state.winner ? (
          <button onClick={() => this.handleReset()}>Reset</button>
        ) : (
          ""
        )}
        <Status
          player={this.state.player}
          setPlayer={e => this.setPlayer(e)}
          winner={this.state.winner}
        />
        <div className="board">{this.renderBox()}</div>
      </div>
    );
  }
}
