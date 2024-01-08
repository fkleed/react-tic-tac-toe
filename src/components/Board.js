export default function Board() {
  return (
    <div className="board">
      <div className="table-container">
        <table>
          <tr>
            <td>
              <TableItem />
            </td>
            <td className="vert">
              <TableItem />
            </td>
            <td>
              <TableItem />
            </td>
          </tr>
          <tr>
            <td className="hori">
              <TableItem />
            </td>
            <td className="vert hori">
              <TableItem />
            </td>
            <td className="hori">
              <TableItem />
            </td>
          </tr>
          <tr>
            <td>
              <TableItem />
            </td>
            <td className="vert">
              <TableItem />
            </td>
            <td>
              <TableItem />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

function TableItem() {
  return <div className="table-item">X</div>;
}
