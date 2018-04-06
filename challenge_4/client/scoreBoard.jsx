class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const frames = this.props.game.frames;
    let rolls = [];
    for (let i = 0; i < frames.length; i++) {
      rolls.push(frames[i].rolls[0]);
      rolls.push(frames[i].rolls[1]);
    }
    let cumulativeScores = [];
    if (frames.length > 0) {
      frames.reduce((total, frame) => {
        if (frame.score === null) return '';
        total += frame.score;
        cumulativeScores.push(total);
        return total;
      }, 0);
    }
    
    return (
      <div id="score-board">Frame
        <table>
          <tr>
            {/* {for each frame, render a table header with the frame number, colspan 2} */}
            {frames.map((frame, index) => (
              <th colspan="2">{index + 1}</th>
            ))}
          </tr>
          <tr>
            {/* for each frame render  the first throw and the second throw*/}
            {rolls.map(rollValue => (
              <td>{rollValue}</td>
            ))}
          </tr>
          <tr>
            {/* for each frame, render the score if not null */}
            {cumulativeScores.map(totalScore => {
              return (<td colspan="2">{totalScore}</td>)
            })}
          </tr>
        </table>
      </div>
    )
  }
}