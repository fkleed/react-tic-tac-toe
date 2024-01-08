export default function Board({ squares, onPlay }) {
  return (
    <div className="board">
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <td>
                <Square value={squares[0]} onSquareClick={() => onPlay(0)} />
              </td>
              <td className="vert">
                <Square value={squares[1]} onSquareClick={() => onPlay(1)} />
              </td>
              <td>
                <Square value={squares[2]} onSquareClick={() => onPlay(2)} />
              </td>
            </tr>
            <tr>
              <td className="hori">
                <Square value={squares[3]} onSquareClick={() => onPlay(3)} />
              </td>
              <td className="vert hori">
                <Square value={squares[4]} onSquareClick={() => onPlay(4)} />
              </td>
              <td className="hori">
                <Square value={squares[5]} onSquareClick={() => onPlay(5)} />
              </td>
            </tr>
            <tr>
              <td>
                <Square value={squares[6]} onSquareClick={() => onPlay(6)} />
              </td>
              <td className="vert">
                <Square value={squares[7]} onSquareClick={() => onPlay(7)} />
              </td>
              <td>
                <Square value={squares[8]} onSquareClick={() => onPlay(8)} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button className="table-item" onClick={onSquareClick}>
      {value}
    </button>
  );
}
