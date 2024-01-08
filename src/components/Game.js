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

function Board() {
  return (
    <div className="board">
      <div className="table-container">
        <table>
          <tr>
            <td></td>
            <td className="vert"></td>
            <td></td>
          </tr>
          <tr>
            <td className="hori"></td>
            <td className="vert hori"></td>
            <td className="hori"></td>
          </tr>
          <tr>
            <td></td>
            <td className="vert"></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

function History() {
  return (
    <div className="history">
      <h2>History</h2>
    </div>
  );
}
