export default function History({ history, onChangeHistory }) {
  return (
    <div className="history">
      <h2>History</h2>
      <ul className="history-container">
        {history.map((_, move) => (
          <li key={move}>
            <button onClick={() => onChangeHistory(move)}>
              {move > 0 ? `Go to move # ${move}` : `Go to game start`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
