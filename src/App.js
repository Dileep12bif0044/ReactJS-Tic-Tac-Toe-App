import React, { Component } from 'react';
import './App.css';
import Player from './components/ChoosePlayer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board : Array(9).fill(null),
      player : null,
      winner : null
    };
  }

  checkWinner() {
    let winLines = [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6'],
    ];
    for (let index = 0; index < winLines.length; index++) {
      let [a, b, c] = winLines[index];
      if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
        alert("You Won the Game :)");
        this.setState({
          winner : this.state.player
        });
      }
    }
  }

  handleClick(index) {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board;

      console.log("before", this.state.player);

      if (this.state.board[index] === null ) {
        newBoard[index] = this.state.player;
        this.setState({
          board : newBoard,
          player: this.state.player === "X" ? "0":"X"
        });
      }
      console.log("after", this.state.player);
      this.checkWinner();
    }
  }

  renderBoxes() {
    return (
      this.state.board.map(
      (box, index) => 
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}
      </div>
      )
    )
  }
  setPlayer(player) {
    this.setState({
      player:player
    });
  }

  render() {
    
    let status = this.state.player ? <h2>Next Player is: {this.state.player} </h2>: <Player player={(e) => this.setPlayer(e)} />
    return (
      <div className="container">
        <h1>Welcome to Tic tac toe App</h1>
        {status}
        <div className="board">
          {this.renderBoxes()}
        </div>
      </div>
    );
  }
}

export default App;
