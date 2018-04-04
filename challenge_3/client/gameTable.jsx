const GameTable = ({board, onColumnClick}) => {
  return (
    <table>
      <tbody>
        <tr>
          <th><button id="1" onClick={onColumnClick}>Place</button></th>
          <th><button id="2" onClick={onColumnClick}>Place</button></th>
          <th><button id="3" onClick={onColumnClick}>Place</button></th>
          <th><button id="4" onClick={onColumnClick}>Place</button></th>
        </tr>
        {
          board.map(row => (
            <tr>
              {
                row.map(square => (<td>{square}</td>))
              }
            </tr>
          ))
        }

      </tbody>
    </table>
  )
};