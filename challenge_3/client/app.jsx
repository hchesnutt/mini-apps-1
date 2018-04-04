class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [
        [0, 0, 0, 0], 
        [0, 0, 0, 0], 
        [0, 0, 0, 0], 
        [0, 0, 0, 0]],
      turn: 'black',
      players: {
        black: '0',
        red: 'X',
      }
    }
  }
  // Click Hanlers
  onColumnClick(e) {
    let columnNumber = e.target.id;
    placeInColumn(columnNumber);
  }

  // ### DIRECTOR FUNCTIONS ### (get called by handlers)
  placeInColumn(col) {
    addToColumn(col);
    checkForWin();
    handleWin();
  }
  
  // ### WORKER FUNCTIONS ### (get called by director functions)
  addToColumn() {
    
  }
  checkForWin() {
    
  }
  handleWin() {

  }

  render() {
    return (
      <div>
        <h1>Connect Poor</h1>
        <h2>the worst Connect Four game in all the web</h2>
        <GameTable board={this.state.board} onColumnClick={this.onColumnClick.bind(this)} />
      </div>
    )
  }
}