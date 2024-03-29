import { useState } from "react";

import Board from "./Board.js";
import History from "./History.js";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares);
  const gameStatus = calculateGameStatus(xIsNext, currentSquares, winner);

  function handlePlay(i) {
    if (winner || currentSquares[i]) {
      return;
    }

    const nextSquares = currentSquares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleChangeHistory(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="game">
      <div className="status">
        <h2>{gameStatus}</h2>
      </div>
      <Board squares={currentSquares} onPlay={(i) => handlePlay(i)} />
      <History
        history={history}
        onChangeHistory={(i) => handleChangeHistory(i)}
      />
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function calculateGameStatus(xIsNext, currentSquares, winner) {
  if (winner) {
    return xIsNext ? "Winner: O" : "Winner: X";
  }

  if (currentSquares.every((value) => value !== null)) {
    return "No Winner";
  }

  return xIsNext ? "X is next" : "O is next";
}
