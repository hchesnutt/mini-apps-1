"use strict";

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
    key: "handleRoll",
    value: function handleRoll(pins) {
      var currFrame = this.currFrame;
      // add pins to Frame
      currFrame.addRoll(pins);
      // score appropriate frames
      this.scoreFrames();
      // if currFrame had two rolls add to frames and create new frame as currFrame, reset priorFrame
      if (currFrame.remainingPins === 0 || currFrame.rolls[0] !== null && currFrame.rolls[1] !== null) {
        this.addToFrames(currFrame);
        this.resetPriorFrame();
        this.resetCurrFrame(this.priorFrame);
      }
    }
  }, {
    key: "resetPriorFrame",
    value: function resetPriorFrame() {
      this.priorFrame = this.frames[this.frames.length - 1];
    }
  }, {
    key: "resetCurrFrame",
    value: function resetCurrFrame() {
      this.currFrame = new Frame(this.currFrame);
    }
  }, {
    key: "addToFrames",
    value: function addToFrames(currFrame) {
      this.frames.push(currFrame);
    }
  }, {
    key: "scoreFrames",
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
        // STRIKE if first throw -> wait for curr second throw to finish, set score to all 4 throws
        if (priorFrame.rolls[1] !== null) {
          priorFrame.score = 10 + currFrame.rolls[0] + currFrame.rolls[1];
        } else {
          // else set score to all three throws
          priorFrame.score = 20 + currFrame.rolls[0];
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
    key: "addRoll",
    value: function addRoll(pins) {
      // set remaining pins
      this.remainingPins -= pins;
      // set ThrowPins
      this.rolls[0] === null ? this.rolls[0] = pins : this.rolls[1] = pins;
    }
  }]);

  return Frame;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9nYW1lLmpzeCJdLCJuYW1lcyI6WyJHYW1lIiwiZnJhbWVzIiwiY3VyckZyYW1lIiwicHJpb3JGcmFtZSIsImxlbmd0aCIsInBpbnMiLCJhZGRSb2xsIiwic2NvcmVGcmFtZXMiLCJyZW1haW5pbmdQaW5zIiwicm9sbHMiLCJhZGRUb0ZyYW1lcyIsInJlc2V0UHJpb3JGcmFtZSIsInJlc2V0Q3VyckZyYW1lIiwiRnJhbWUiLCJwdXNoIiwic2NvcmUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxJO0FBQ0osc0JBQW1DO0FBQUEsUUFBckJDLE1BQXFCLFFBQXJCQSxNQUFxQjtBQUFBLFFBQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQTs7QUFDakMsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQUtGLE1BQUwsQ0FBWSxLQUFLQSxNQUFMLENBQVlHLE1BQVosR0FBcUIsQ0FBakMsQ0FBbEI7QUFDRDs7OzsrQkFFVUMsSSxFQUFNO0FBQ2YsVUFBSUgsWUFBWSxLQUFLQSxTQUFyQjtBQUNBO0FBQ0FBLGdCQUFVSSxPQUFWLENBQWtCRCxJQUFsQjtBQUNBO0FBQ0EsV0FBS0UsV0FBTDtBQUNBO0FBQ0EsVUFBSUwsVUFBVU0sYUFBVixLQUE0QixDQUE1QixJQUNFTixVQUFVTyxLQUFWLENBQWdCLENBQWhCLE1BQXVCLElBQXZCLElBQStCUCxVQUFVTyxLQUFWLENBQWdCLENBQWhCLE1BQXVCLElBRDVELEVBQ21FO0FBQ2pFLGFBQUtDLFdBQUwsQ0FBaUJSLFNBQWpCO0FBQ0EsYUFBS1MsZUFBTDtBQUNBLGFBQUtDLGNBQUwsQ0FBb0IsS0FBS1QsVUFBekI7QUFDRDtBQUNGOzs7c0NBRWlCO0FBQ2hCLFdBQUtBLFVBQUwsR0FBa0IsS0FBS0YsTUFBTCxDQUFZLEtBQUtBLE1BQUwsQ0FBWUcsTUFBWixHQUFxQixDQUFqQyxDQUFsQjtBQUNEOzs7cUNBRWdCO0FBQ2YsV0FBS0YsU0FBTCxHQUFpQixJQUFJVyxLQUFKLENBQVUsS0FBS1gsU0FBZixDQUFqQjtBQUNEOzs7Z0NBRVdBLFMsRUFBVztBQUNyQixXQUFLRCxNQUFMLENBQVlhLElBQVosQ0FBaUJaLFNBQWpCO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQUlBLFlBQVksS0FBS0EsU0FBckI7QUFDQSxVQUFJQyxhQUFhLEtBQUtBLFVBQXRCOztBQUVBO0FBQ0EsVUFBSUQsVUFBVU0sYUFBVixHQUEwQixDQUE5QixFQUFpQztBQUMvQjtBQUNBLFlBQUlOLFVBQVVPLEtBQVYsQ0FBZ0IsQ0FBaEIsTUFBdUIsSUFBM0IsRUFDQVAsVUFBVWEsS0FBVixHQUFrQmIsVUFBVU8sS0FBVixDQUFnQixDQUFoQixJQUFxQlAsVUFBVU8sS0FBVixDQUFnQixDQUFoQixDQUF2QztBQUNEO0FBQ0QsVUFBSSxDQUFDTixVQUFMLEVBQWlCO0FBQ2pCO0FBQ0EsVUFBSUEsV0FBV0ssYUFBWCxLQUE2QixDQUFqQyxFQUFvQztBQUNoQztBQUNBLFlBQUlMLFdBQVdNLEtBQVgsQ0FBaUIsQ0FBakIsTUFBd0IsSUFBNUIsRUFBa0M7QUFDaENOLHFCQUFXWSxLQUFYLEdBQW1CLEtBQUtiLFVBQVVPLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBTCxHQUEwQlAsVUFBVU8sS0FBVixDQUFnQixDQUFoQixDQUE3QztBQUNELFNBRkQsTUFFTztBQUNMO0FBQ0FOLHFCQUFXWSxLQUFYLEdBQW1CLEtBQUtiLFVBQVVPLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBeEI7QUFDRDtBQUNKO0FBQ0Y7Ozs7OztJQUdHSSxLO0FBQ0osaUJBQVlWLFVBQVosRUFBd0I7QUFBQTs7QUFDdEIsU0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLSyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FBYjtBQUNBLFNBQUtNLEtBQUwsR0FBYSxJQUFiO0FBQ0Q7Ozs7NEJBRU9WLEksRUFBTTtBQUNaO0FBQ0EsV0FBS0csYUFBTCxJQUFzQkgsSUFBdEI7QUFDQTtBQUNBLFdBQUtJLEtBQUwsQ0FBVyxDQUFYLE1BQWtCLElBQWxCLEdBQXlCLEtBQUtBLEtBQUwsQ0FBVyxDQUFYLElBQWdCSixJQUF6QyxHQUFnRCxLQUFLSSxLQUFMLENBQVcsQ0FBWCxJQUFnQkosSUFBaEU7QUFDRCIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKHsgZnJhbWVzLCBjdXJyRnJhbWUgfSkge1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgIHRoaXMuY3VyckZyYW1lID0gY3VyckZyYW1lO1xuICAgIHRoaXMucHJpb3JGcmFtZSA9IHRoaXMuZnJhbWVzW3RoaXMuZnJhbWVzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgaGFuZGxlUm9sbChwaW5zKSB7XG4gICAgbGV0IGN1cnJGcmFtZSA9IHRoaXMuY3VyckZyYW1lXG4gICAgLy8gYWRkIHBpbnMgdG8gRnJhbWVcbiAgICBjdXJyRnJhbWUuYWRkUm9sbChwaW5zKTtcbiAgICAvLyBzY29yZSBhcHByb3ByaWF0ZSBmcmFtZXNcbiAgICB0aGlzLnNjb3JlRnJhbWVzKCk7XG4gICAgLy8gaWYgY3VyckZyYW1lIGhhZCB0d28gcm9sbHMgYWRkIHRvIGZyYW1lcyBhbmQgY3JlYXRlIG5ldyBmcmFtZSBhcyBjdXJyRnJhbWUsIHJlc2V0IHByaW9yRnJhbWVcbiAgICBpZiAoY3VyckZyYW1lLnJlbWFpbmluZ1BpbnMgPT09IDAgXG4gICAgICB8fCAoY3VyckZyYW1lLnJvbGxzWzBdICE9PSBudWxsICYmIGN1cnJGcmFtZS5yb2xsc1sxXSAhPT0gbnVsbCkpIHtcbiAgICAgIHRoaXMuYWRkVG9GcmFtZXMoY3VyckZyYW1lKTtcbiAgICAgIHRoaXMucmVzZXRQcmlvckZyYW1lKCk7XG4gICAgICB0aGlzLnJlc2V0Q3VyckZyYW1lKHRoaXMucHJpb3JGcmFtZSk7XG4gICAgfVxuICB9XG4gIFxuICByZXNldFByaW9yRnJhbWUoKSB7XG4gICAgdGhpcy5wcmlvckZyYW1lID0gdGhpcy5mcmFtZXNbdGhpcy5mcmFtZXMubGVuZ3RoIC0gMV07XG4gIH1cblxuICByZXNldEN1cnJGcmFtZSgpIHtcbiAgICB0aGlzLmN1cnJGcmFtZSA9IG5ldyBGcmFtZSh0aGlzLmN1cnJGcmFtZSlcbiAgfVxuXG4gIGFkZFRvRnJhbWVzKGN1cnJGcmFtZSkge1xuICAgIHRoaXMuZnJhbWVzLnB1c2goY3VyckZyYW1lKTtcbiAgfVxuXG4gIHNjb3JlRnJhbWVzKCkge1xuICAgIGxldCBjdXJyRnJhbWUgPSB0aGlzLmN1cnJGcmFtZTsgXG4gICAgbGV0IHByaW9yRnJhbWUgPSB0aGlzLnByaW9yRnJhbWU7XG5cbiAgICAvLyBpZiByZW1haW5pbmdQaW5zID4gMFxuICAgIGlmIChjdXJyRnJhbWUucmVtYWluaW5nUGlucyA+IDApIHtcbiAgICAgIC8vIGlmIHNlY29uZCB0aHJvdyAtPiBzZXQgc2NvcmVcbiAgICAgIGlmIChjdXJyRnJhbWUucm9sbHNbMV0gIT09IG51bGwpXG4gICAgICBjdXJyRnJhbWUuc2NvcmUgPSBjdXJyRnJhbWUucm9sbHNbMF0gKyBjdXJyRnJhbWUucm9sbHNbMV07XG4gICAgfVxuICAgIGlmICghcHJpb3JGcmFtZSkgcmV0dXJuO1xuICAgIC8vIGlmIHByaW9yRnJhbWUgcmVtYWluaW5nUGlucyBpcyAwXG4gICAgaWYgKHByaW9yRnJhbWUucmVtYWluaW5nUGlucyA9PT0gMCkge1xuICAgICAgICAvLyBTVFJJS0UgaWYgZmlyc3QgdGhyb3cgLT4gd2FpdCBmb3IgY3VyciBzZWNvbmQgdGhyb3cgdG8gZmluaXNoLCBzZXQgc2NvcmUgdG8gYWxsIDQgdGhyb3dzXG4gICAgICAgIGlmIChwcmlvckZyYW1lLnJvbGxzWzFdICE9PSBudWxsKSB7XG4gICAgICAgICAgcHJpb3JGcmFtZS5zY29yZSA9IDEwICsgY3VyckZyYW1lLnJvbGxzWzBdICsgY3VyckZyYW1lLnJvbGxzWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGVsc2Ugc2V0IHNjb3JlIHRvIGFsbCB0aHJlZSB0aHJvd3NcbiAgICAgICAgICBwcmlvckZyYW1lLnNjb3JlID0gMjAgKyBjdXJyRnJhbWUucm9sbHNbMF07XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcihwcmlvckZyYW1lKSB7XG4gICAgdGhpcy5wcmlvckZyYW1lID0gcHJpb3JGcmFtZTtcbiAgICB0aGlzLnJlbWFpbmluZ1BpbnMgPSAxMDtcbiAgICB0aGlzLnJvbGxzID0gW251bGwsIG51bGxdXG4gICAgdGhpcy5zY29yZSA9IG51bGw7XG4gIH1cblxuICBhZGRSb2xsKHBpbnMpIHtcbiAgICAvLyBzZXQgcmVtYWluaW5nIHBpbnNcbiAgICB0aGlzLnJlbWFpbmluZ1BpbnMgLT0gcGlucztcbiAgICAvLyBzZXQgVGhyb3dQaW5zXG4gICAgdGhpcy5yb2xsc1swXSA9PT0gbnVsbCA/IHRoaXMucm9sbHNbMF0gPSBwaW5zIDogdGhpcy5yb2xsc1sxXSA9IHBpbnM7XG4gIH1cbn0iXX0=