'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(_ref) {
    var frames = _ref.frames,
        currFrame = _ref.currFrame;

    _classCallCheck(this, Game);

    this.frames = frames;
    this.currFrame = currFrame;
    this.priorFrame = this.frames[this.frames.length - 1];
  }

  _createClass(Game, [{
    key: 'handleRoll',
    value: function handleRoll(pins) {
      var currFrame = this.currFrame;
      // add pins to Frame
      currFrame.addRoll(pins);
      // score appropriate frames
      this.scoreFrames();
      // if currFrame had two rolls add to frames and create new frame as currFrame, reset priorFrame
      if (currFrame.rolls[0] !== null && currFrame.rolls[1] !== null) {
        this.addToFrames(currFrame);
        this.resetPriorFrame();
        this.resetCurrFrame(this.priorFrame);
      }
      console.log('frames: ', this.frames);
    }
  }, {
    key: 'resetPriorFrame',
    value: function resetPriorFrame() {
      this.priorFrame = this.frames[this.frames.length - 1];
    }
  }, {
    key: 'resetCurrFrame',
    value: function resetCurrFrame() {
      this.currFrame = new Frame(this.currFrame);
    }
  }, {
    key: 'addToFrames',
    value: function addToFrames(currFrame) {
      this.frames.push(currFrame);
    }
  }, {
    key: 'scoreFrames',
    value: function scoreFrames() {
      var currFrame = this.currFrame;
      var priorFrame = this.priorFrame;

      // if remainingPins > 0
      if (currFrame.remainingPins > 0) {
        // if second throw -> set score
        if (currFrame.rolls[1] !== null) currFrame.score = currFrame.rolls[0] + currFrame.rolls[1];
      }
      if (!priorFrame) return;
      // if priorFrame remainingPins is 0
      if (priorFrame.remainingPins === 0) {
        // if first throw -> wait for curr second throw to finish, set score to all 4 throws
        if (priorFrame.rolls[1] !== null) {
          priorFrame.score = 10 + currFrame.rolls[0] + currFrame.rolls[1];
        } else {
          // else set score to all three throws
          priorFrame.score = 10 + currFrame.rolls[0];
        }
      }
    }
  }]);

  return Game;
}();

var Frame = function () {
  function Frame(priorFrame) {
    _classCallCheck(this, Frame);

    this.priorFrame = priorFrame;
    this.remainingPins = 10;
    this.rolls = [null, null];
    this.score = null;
  }

  _createClass(Frame, [{
    key: 'addRoll',
    value: function addRoll(pins) {
      // set remaining pins
      this.remainingPins -= pins;
      // set ThrowPins
      this.rolls[0] === null ? this.rolls[0] = pins : this.rolls[1] = pins;
      console.log('addRoll This Frame after:', this);
    }
  }]);

  return Frame;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9nYW1lLmpzeCJdLCJuYW1lcyI6WyJHYW1lIiwiZnJhbWVzIiwiY3VyckZyYW1lIiwicHJpb3JGcmFtZSIsImxlbmd0aCIsInBpbnMiLCJhZGRSb2xsIiwic2NvcmVGcmFtZXMiLCJyb2xscyIsImFkZFRvRnJhbWVzIiwicmVzZXRQcmlvckZyYW1lIiwicmVzZXRDdXJyRnJhbWUiLCJjb25zb2xlIiwibG9nIiwiRnJhbWUiLCJwdXNoIiwicmVtYWluaW5nUGlucyIsInNjb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsSTtBQUNKLHNCQUFtQztBQUFBLFFBQXJCQyxNQUFxQixRQUFyQkEsTUFBcUI7QUFBQSxRQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQUE7O0FBQ2pDLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFLRixNQUFMLENBQVksS0FBS0EsTUFBTCxDQUFZRyxNQUFaLEdBQXFCLENBQWpDLENBQWxCO0FBQ0Q7Ozs7K0JBRVVDLEksRUFBTTtBQUNmLFVBQUlILFlBQVksS0FBS0EsU0FBckI7QUFDQTtBQUNBQSxnQkFBVUksT0FBVixDQUFrQkQsSUFBbEI7QUFDQTtBQUNBLFdBQUtFLFdBQUw7QUFDQTtBQUNBLFVBQUlMLFVBQVVNLEtBQVYsQ0FBZ0IsQ0FBaEIsTUFBdUIsSUFBdkIsSUFBK0JOLFVBQVVNLEtBQVYsQ0FBZ0IsQ0FBaEIsTUFBdUIsSUFBMUQsRUFBZ0U7QUFDOUQsYUFBS0MsV0FBTCxDQUFpQlAsU0FBakI7QUFDQSxhQUFLUSxlQUFMO0FBQ0EsYUFBS0MsY0FBTCxDQUFvQixLQUFLUixVQUF6QjtBQUNEO0FBQ0RTLGNBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLEtBQUtaLE1BQTdCO0FBRUQ7OztzQ0FFaUI7QUFDaEIsV0FBS0UsVUFBTCxHQUFrQixLQUFLRixNQUFMLENBQVksS0FBS0EsTUFBTCxDQUFZRyxNQUFaLEdBQXFCLENBQWpDLENBQWxCO0FBQ0Q7OztxQ0FFZ0I7QUFDZixXQUFLRixTQUFMLEdBQWlCLElBQUlZLEtBQUosQ0FBVSxLQUFLWixTQUFmLENBQWpCO0FBQ0Q7OztnQ0FFV0EsUyxFQUFXO0FBQ3JCLFdBQUtELE1BQUwsQ0FBWWMsSUFBWixDQUFpQmIsU0FBakI7QUFDRDs7O2tDQUVhO0FBQ1osVUFBSUEsWUFBWSxLQUFLQSxTQUFyQjtBQUNBLFVBQUlDLGFBQWEsS0FBS0EsVUFBdEI7O0FBRUE7QUFDQSxVQUFJRCxVQUFVYyxhQUFWLEdBQTBCLENBQTlCLEVBQWlDO0FBQy9CO0FBQ0EsWUFBSWQsVUFBVU0sS0FBVixDQUFnQixDQUFoQixNQUF1QixJQUEzQixFQUNBTixVQUFVZSxLQUFWLEdBQWtCZixVQUFVTSxLQUFWLENBQWdCLENBQWhCLElBQXFCTixVQUFVTSxLQUFWLENBQWdCLENBQWhCLENBQXZDO0FBQ0Q7QUFDRCxVQUFJLENBQUNMLFVBQUwsRUFBaUI7QUFDakI7QUFDQSxVQUFJQSxXQUFXYSxhQUFYLEtBQTZCLENBQWpDLEVBQW9DO0FBQ2hDO0FBQ0EsWUFBSWIsV0FBV0ssS0FBWCxDQUFpQixDQUFqQixNQUF3QixJQUE1QixFQUFrQztBQUNoQ0wscUJBQVdjLEtBQVgsR0FBbUIsS0FBS2YsVUFBVU0sS0FBVixDQUFnQixDQUFoQixDQUFMLEdBQTBCTixVQUFVTSxLQUFWLENBQWdCLENBQWhCLENBQTdDO0FBQ0QsU0FGRCxNQUVPO0FBQ0w7QUFDQUwscUJBQVdjLEtBQVgsR0FBbUIsS0FBS2YsVUFBVU0sS0FBVixDQUFnQixDQUFoQixDQUF4QjtBQUNEO0FBQ0o7QUFDRjs7Ozs7O0lBR0dNLEs7QUFDSixpQkFBWVgsVUFBWixFQUF3QjtBQUFBOztBQUN0QixTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUthLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxTQUFLUixLQUFMLEdBQWEsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFiO0FBQ0EsU0FBS1MsS0FBTCxHQUFhLElBQWI7QUFDRDs7Ozs0QkFFT1osSSxFQUFNO0FBQ1o7QUFDQSxXQUFLVyxhQUFMLElBQXNCWCxJQUF0QjtBQUNBO0FBQ0EsV0FBS0csS0FBTCxDQUFXLENBQVgsTUFBa0IsSUFBbEIsR0FBeUIsS0FBS0EsS0FBTCxDQUFXLENBQVgsSUFBZ0JILElBQXpDLEdBQWdELEtBQUtHLEtBQUwsQ0FBVyxDQUFYLElBQWdCSCxJQUFoRTtBQUNBTyxjQUFRQyxHQUFSLENBQVksMkJBQVosRUFBeUMsSUFBekM7QUFDRCIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKHsgZnJhbWVzLCBjdXJyRnJhbWUgfSkge1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgIHRoaXMuY3VyckZyYW1lID0gY3VyckZyYW1lO1xuICAgIHRoaXMucHJpb3JGcmFtZSA9IHRoaXMuZnJhbWVzW3RoaXMuZnJhbWVzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgaGFuZGxlUm9sbChwaW5zKSB7XG4gICAgbGV0IGN1cnJGcmFtZSA9IHRoaXMuY3VyckZyYW1lXG4gICAgLy8gYWRkIHBpbnMgdG8gRnJhbWVcbiAgICBjdXJyRnJhbWUuYWRkUm9sbChwaW5zKTtcbiAgICAvLyBzY29yZSBhcHByb3ByaWF0ZSBmcmFtZXNcbiAgICB0aGlzLnNjb3JlRnJhbWVzKCk7XG4gICAgLy8gaWYgY3VyckZyYW1lIGhhZCB0d28gcm9sbHMgYWRkIHRvIGZyYW1lcyBhbmQgY3JlYXRlIG5ldyBmcmFtZSBhcyBjdXJyRnJhbWUsIHJlc2V0IHByaW9yRnJhbWVcbiAgICBpZiAoY3VyckZyYW1lLnJvbGxzWzBdICE9PSBudWxsICYmIGN1cnJGcmFtZS5yb2xsc1sxXSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hZGRUb0ZyYW1lcyhjdXJyRnJhbWUpO1xuICAgICAgdGhpcy5yZXNldFByaW9yRnJhbWUoKTtcbiAgICAgIHRoaXMucmVzZXRDdXJyRnJhbWUodGhpcy5wcmlvckZyYW1lKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2ZyYW1lczogJywgdGhpcy5mcmFtZXMpXG4gICAgXG4gIH1cbiAgXG4gIHJlc2V0UHJpb3JGcmFtZSgpIHtcbiAgICB0aGlzLnByaW9yRnJhbWUgPSB0aGlzLmZyYW1lc1t0aGlzLmZyYW1lcy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIHJlc2V0Q3VyckZyYW1lKCkge1xuICAgIHRoaXMuY3VyckZyYW1lID0gbmV3IEZyYW1lKHRoaXMuY3VyckZyYW1lKVxuICB9XG5cbiAgYWRkVG9GcmFtZXMoY3VyckZyYW1lKSB7XG4gICAgdGhpcy5mcmFtZXMucHVzaChjdXJyRnJhbWUpO1xuICB9XG5cbiAgc2NvcmVGcmFtZXMoKSB7XG4gICAgbGV0IGN1cnJGcmFtZSA9IHRoaXMuY3VyckZyYW1lOyBcbiAgICBsZXQgcHJpb3JGcmFtZSA9IHRoaXMucHJpb3JGcmFtZTtcblxuICAgIC8vIGlmIHJlbWFpbmluZ1BpbnMgPiAwXG4gICAgaWYgKGN1cnJGcmFtZS5yZW1haW5pbmdQaW5zID4gMCkge1xuICAgICAgLy8gaWYgc2Vjb25kIHRocm93IC0+IHNldCBzY29yZVxuICAgICAgaWYgKGN1cnJGcmFtZS5yb2xsc1sxXSAhPT0gbnVsbClcbiAgICAgIGN1cnJGcmFtZS5zY29yZSA9IGN1cnJGcmFtZS5yb2xsc1swXSArIGN1cnJGcmFtZS5yb2xsc1sxXTtcbiAgICB9XG4gICAgaWYgKCFwcmlvckZyYW1lKSByZXR1cm47XG4gICAgLy8gaWYgcHJpb3JGcmFtZSByZW1haW5pbmdQaW5zIGlzIDBcbiAgICBpZiAocHJpb3JGcmFtZS5yZW1haW5pbmdQaW5zID09PSAwKSB7XG4gICAgICAgIC8vIGlmIGZpcnN0IHRocm93IC0+IHdhaXQgZm9yIGN1cnIgc2Vjb25kIHRocm93IHRvIGZpbmlzaCwgc2V0IHNjb3JlIHRvIGFsbCA0IHRocm93c1xuICAgICAgICBpZiAocHJpb3JGcmFtZS5yb2xsc1sxXSAhPT0gbnVsbCkge1xuICAgICAgICAgIHByaW9yRnJhbWUuc2NvcmUgPSAxMCArIGN1cnJGcmFtZS5yb2xsc1swXSArIGN1cnJGcmFtZS5yb2xsc1sxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBlbHNlIHNldCBzY29yZSB0byBhbGwgdGhyZWUgdGhyb3dzXG4gICAgICAgICAgcHJpb3JGcmFtZS5zY29yZSA9IDEwICsgY3VyckZyYW1lLnJvbGxzWzBdO1xuICAgICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3IocHJpb3JGcmFtZSkge1xuICAgIHRoaXMucHJpb3JGcmFtZSA9IHByaW9yRnJhbWU7XG4gICAgdGhpcy5yZW1haW5pbmdQaW5zID0gMTA7XG4gICAgdGhpcy5yb2xscyA9IFtudWxsLCBudWxsXVxuICAgIHRoaXMuc2NvcmUgPSBudWxsO1xuICB9XG5cbiAgYWRkUm9sbChwaW5zKSB7XG4gICAgLy8gc2V0IHJlbWFpbmluZyBwaW5zXG4gICAgdGhpcy5yZW1haW5pbmdQaW5zIC09IHBpbnM7XG4gICAgLy8gc2V0IFRocm93UGluc1xuICAgIHRoaXMucm9sbHNbMF0gPT09IG51bGwgPyB0aGlzLnJvbGxzWzBdID0gcGlucyA6IHRoaXMucm9sbHNbMV0gPSBwaW5zO1xuICAgIGNvbnNvbGUubG9nKCdhZGRSb2xsIFRoaXMgRnJhbWUgYWZ0ZXI6JywgdGhpcyk7XG4gIH1cbn0iXX0=