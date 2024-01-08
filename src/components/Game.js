import Board from "./Board.js";
import History from "./History.js";

export default function Game() {
  return (
    <div className="game">
      <div className="status">
        <h2>Game status</h2>
      </div>
      <Board />
      <History />
    </div>
  );
}
