class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       game: new Game({
         frames: [], 
         currFrame: new Frame(null),
       }),
    };
  }
  onPinsClick(e) {
    const event = Object.assign({}, e);
    if (event.target.localName !== 'td') return;

    const game = this.state.game;
    const pinsDown = parseInt(event.target.innerText);
    let newGame = new Game(game);
    
    newGame.handleRoll(pinsDown);

    this.setState({
      game: newGame
    });
  }
  render() {
    return (
      <div>
        <ScoreBoard pinsPerBall={this.state.pinsPerBall}/>
        <PinInput onPinsClick={this.onPinsClick.bind(this)}/>
      </div>
    )
  }
}

const ScoreBoard = props => (
  <div>
    
  </div>
);

const PinInput = ({ onPinsClick }) => (
  <div>
    Bowl!
    <table onClick={onPinsClick}>
      <tr>
        <td>0</td>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
      <tr>
        <td>6</td>
        <td>7</td>
        <td>8</td>
      </tr>
      <tr>
        <td>9</td>
        <td>10</td>
      </tr>
    </table>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'))