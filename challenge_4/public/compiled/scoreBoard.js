"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScoreBoard = function (_React$Component) {
  _inherits(ScoreBoard, _React$Component);

  function ScoreBoard(props) {
    _classCallCheck(this, ScoreBoard);

    return _possibleConstructorReturn(this, (ScoreBoard.__proto__ || Object.getPrototypeOf(ScoreBoard)).call(this, props));
  }

  _createClass(ScoreBoard, [{
    key: "render",
    value: function render() {
      var frames = this.props.game.frames;
      var rolls = [];
      for (var i = 0; i < frames.length; i++) {
        rolls.push(frames[i].rolls[0]);
        rolls.push(frames[i].rolls[1]);
      }
      var cumulativeScores = [];
      if (frames.length > 0) {
        frames.reduce(function (total, frame) {
          if (frame.score === null) return '';
          total += frame.score;
          cumulativeScores.push(total);
          return total;
        }, 0);
      }

      return React.createElement(
        "div",
        { id: "score-board" },
        "Frame",
        React.createElement(
          "table",
          null,
          React.createElement(
            "tr",
            null,
            frames.map(function (frame, index) {
              return React.createElement(
                "th",
                { colspan: "2" },
                index + 1
              );
            })
          ),
          React.createElement(
            "tr",
            null,
            rolls.map(function (rollValue) {
              return React.createElement(
                "td",
                null,
                rollValue
              );
            })
          ),
          React.createElement(
            "tr",
            null,
            cumulativeScores.map(function (totalScore) {
              return React.createElement(
                "td",
                { colspan: "2" },
                totalScore
              );
            })
          )
        )
      );
    }
  }]);

  return ScoreBoard;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zY29yZUJvYXJkLmpzeCJdLCJuYW1lcyI6WyJTY29yZUJvYXJkIiwicHJvcHMiLCJmcmFtZXMiLCJnYW1lIiwicm9sbHMiLCJpIiwibGVuZ3RoIiwicHVzaCIsImN1bXVsYXRpdmVTY29yZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsImZyYW1lIiwic2NvcmUiLCJtYXAiLCJpbmRleCIsInJvbGxWYWx1ZSIsInRvdGFsU2NvcmUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQ1AsVUFBTUMsU0FBUyxLQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JELE1BQS9CO0FBQ0EsVUFBSUUsUUFBUSxFQUFaO0FBQ0EsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILE9BQU9JLE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QztBQUN0Q0QsY0FBTUcsSUFBTixDQUFXTCxPQUFPRyxDQUFQLEVBQVVELEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBWDtBQUNBQSxjQUFNRyxJQUFOLENBQVdMLE9BQU9HLENBQVAsRUFBVUQsS0FBVixDQUFnQixDQUFoQixDQUFYO0FBQ0Q7QUFDRCxVQUFJSSxtQkFBbUIsRUFBdkI7QUFDQSxVQUFJTixPQUFPSSxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCSixlQUFPTyxNQUFQLENBQWMsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQzlCLGNBQUlBLE1BQU1DLEtBQU4sS0FBZ0IsSUFBcEIsRUFBMEIsT0FBTyxFQUFQO0FBQzFCRixtQkFBU0MsTUFBTUMsS0FBZjtBQUNBSiwyQkFBaUJELElBQWpCLENBQXNCRyxLQUF0QjtBQUNBLGlCQUFPQSxLQUFQO0FBQ0QsU0FMRCxFQUtHLENBTEg7QUFNRDs7QUFFRCxhQUNFO0FBQUE7QUFBQSxVQUFLLElBQUcsYUFBUjtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBRUdSLG1CQUFPVyxHQUFQLENBQVcsVUFBQ0YsS0FBRCxFQUFRRyxLQUFSO0FBQUEscUJBQ1Y7QUFBQTtBQUFBLGtCQUFJLFNBQVEsR0FBWjtBQUFpQkEsd0JBQVE7QUFBekIsZUFEVTtBQUFBLGFBQVg7QUFGSCxXQURGO0FBT0U7QUFBQTtBQUFBO0FBRUdWLGtCQUFNUyxHQUFOLENBQVU7QUFBQSxxQkFDVDtBQUFBO0FBQUE7QUFBS0U7QUFBTCxlQURTO0FBQUEsYUFBVjtBQUZILFdBUEY7QUFhRTtBQUFBO0FBQUE7QUFFR1AsNkJBQWlCSyxHQUFqQixDQUFxQixzQkFBYztBQUNsQyxxQkFBUTtBQUFBO0FBQUEsa0JBQUksU0FBUSxHQUFaO0FBQWlCRztBQUFqQixlQUFSO0FBQ0QsYUFGQTtBQUZIO0FBYkY7QUFERixPQURGO0FBd0JEOzs7O0VBOUNzQkMsTUFBTUMsUyIsImZpbGUiOiJzY29yZUJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2NvcmVCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGZyYW1lcyA9IHRoaXMucHJvcHMuZ2FtZS5mcmFtZXM7XG4gICAgbGV0IHJvbGxzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJvbGxzLnB1c2goZnJhbWVzW2ldLnJvbGxzWzBdKTtcbiAgICAgIHJvbGxzLnB1c2goZnJhbWVzW2ldLnJvbGxzWzFdKTtcbiAgICB9XG4gICAgbGV0IGN1bXVsYXRpdmVTY29yZXMgPSBbXTtcbiAgICBpZiAoZnJhbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZyYW1lcy5yZWR1Y2UoKHRvdGFsLCBmcmFtZSkgPT4ge1xuICAgICAgICBpZiAoZnJhbWUuc2NvcmUgPT09IG51bGwpIHJldHVybiAnJztcbiAgICAgICAgdG90YWwgKz0gZnJhbWUuc2NvcmU7XG4gICAgICAgIGN1bXVsYXRpdmVTY29yZXMucHVzaCh0b3RhbCk7XG4gICAgICAgIHJldHVybiB0b3RhbDtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cInNjb3JlLWJvYXJkXCI+RnJhbWVcbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHsvKiB7Zm9yIGVhY2ggZnJhbWUsIHJlbmRlciBhIHRhYmxlIGhlYWRlciB3aXRoIHRoZSBmcmFtZSBudW1iZXIsIGNvbHNwYW4gMn0gKi99XG4gICAgICAgICAgICB7ZnJhbWVzLm1hcCgoZnJhbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiMlwiPntpbmRleCArIDF9PC90aD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgey8qIGZvciBlYWNoIGZyYW1lIHJlbmRlciAgdGhlIGZpcnN0IHRocm93IGFuZCB0aGUgc2Vjb25kIHRocm93Ki99XG4gICAgICAgICAgICB7cm9sbHMubWFwKHJvbGxWYWx1ZSA9PiAoXG4gICAgICAgICAgICAgIDx0ZD57cm9sbFZhbHVlfTwvdGQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHsvKiBmb3IgZWFjaCBmcmFtZSwgcmVuZGVyIHRoZSBzY29yZSBpZiBub3QgbnVsbCAqL31cbiAgICAgICAgICAgIHtjdW11bGF0aXZlU2NvcmVzLm1hcCh0b3RhbFNjb3JlID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuICg8dGQgY29sc3Bhbj1cIjJcIj57dG90YWxTY29yZX08L3RkPilcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0=