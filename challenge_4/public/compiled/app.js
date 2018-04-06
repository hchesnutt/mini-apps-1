'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      game: new Game({
        frames: [],
        currFrame: new Frame(null)
      })
    };
    return _this;
  }

  _createClass(App, [{
    key: 'onPinsClick',
    value: function onPinsClick(e) {
      var event = Object.assign({}, e);
      var game = this.state.game;
      var pinsDown = parseInt(event.target.innerText);
      var newGame = new Game(game);

      if (event.target.localName !== 'td') return;
      if (!this.validPinsDown(pinsDown)) return;

      newGame.handleRoll(pinsDown);

      this.setState({
        game: newGame
      });
    }
  }, {
    key: 'validPinsDown',
    value: function validPinsDown(pinsDown) {
      var currFrame = this.state.game.currFrame;
      return pinsDown <= currFrame.remainingPins;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(ScoreBoard, { game: this.state.game }),
        React.createElement(PinInput, { onPinsClick: this.onPinsClick.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

var PinInput = function PinInput(_ref) {
  var onPinsClick = _ref.onPinsClick;
  return React.createElement(
    'div',
    null,
    'Bowl!',
    React.createElement(
      'table',
      { onClick: onPinsClick },
      React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          '0'
        ),
        React.createElement(
          'td',
          null,
          '1'
        ),
        React.createElement(
          'td',
          null,
          '2'
        )
      ),
      React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          '3'
        ),
        React.createElement(
          'td',
          null,
          '4'
        ),
        React.createElement(
          'td',
          null,
          '5'
        )
      ),
      React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          '6'
        ),
        React.createElement(
          'td',
          null,
          '7'
        ),
        React.createElement(
          'td',
          null,
          '8'
        )
      ),
      React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          '9'
        ),
        React.createElement(
          'td',
          null,
          '10'
        )
      )
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJnYW1lIiwiR2FtZSIsImZyYW1lcyIsImN1cnJGcmFtZSIsIkZyYW1lIiwiZSIsImV2ZW50IiwiT2JqZWN0IiwiYXNzaWduIiwicGluc0Rvd24iLCJwYXJzZUludCIsInRhcmdldCIsImlubmVyVGV4dCIsIm5ld0dhbWUiLCJsb2NhbE5hbWUiLCJ2YWxpZFBpbnNEb3duIiwiaGFuZGxlUm9sbCIsInNldFN0YXRlIiwicmVtYWluaW5nUGlucyIsIm9uUGluc0NsaWNrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUGluSW5wdXQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDVkMsWUFBTSxJQUFJQyxJQUFKLENBQVM7QUFDYkMsZ0JBQVEsRUFESztBQUViQyxtQkFBVyxJQUFJQyxLQUFKLENBQVUsSUFBVjtBQUZFLE9BQVQ7QUFESSxLQUFiO0FBRmlCO0FBUWxCOzs7O2dDQUNXQyxDLEVBQUc7QUFDYixVQUFNQyxRQUFRQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkgsQ0FBbEIsQ0FBZDtBQUNBLFVBQU1MLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxJQUF4QjtBQUNBLFVBQU1TLFdBQVdDLFNBQVNKLE1BQU1LLE1BQU4sQ0FBYUMsU0FBdEIsQ0FBakI7QUFDQSxVQUFJQyxVQUFVLElBQUlaLElBQUosQ0FBU0QsSUFBVCxDQUFkOztBQUVBLFVBQUlNLE1BQU1LLE1BQU4sQ0FBYUcsU0FBYixLQUEyQixJQUEvQixFQUFxQztBQUNyQyxVQUFJLENBQUMsS0FBS0MsYUFBTCxDQUFtQk4sUUFBbkIsQ0FBTCxFQUFtQzs7QUFFbkNJLGNBQVFHLFVBQVIsQ0FBbUJQLFFBQW5COztBQUVBLFdBQUtRLFFBQUwsQ0FBYztBQUNaakIsY0FBTWE7QUFETSxPQUFkO0FBR0Q7OztrQ0FFYUosUSxFQUFVO0FBQ3RCLFVBQU1OLFlBQVksS0FBS0osS0FBTCxDQUFXQyxJQUFYLENBQWdCRyxTQUFsQztBQUNBLGFBQU9NLFlBQVlOLFVBQVVlLGFBQTdCO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsVUFBRCxJQUFZLE1BQU0sS0FBS25CLEtBQUwsQ0FBV0MsSUFBN0IsR0FERjtBQUVFLDRCQUFDLFFBQUQsSUFBVSxhQUFhLEtBQUttQixXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUF2QjtBQUZGLE9BREY7QUFNRDs7OztFQXRDZUMsTUFBTUMsUzs7QUF5Q3hCLElBQU1DLFdBQVcsU0FBWEEsUUFBVztBQUFBLE1BQUdKLFdBQUgsUUFBR0EsV0FBSDtBQUFBLFNBQ2Y7QUFBQTtBQUFBO0FBQUE7QUFFRTtBQUFBO0FBQUEsUUFBTyxTQUFTQSxXQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixPQURGO0FBTUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGLE9BTkY7QUFXRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEYsT0FYRjtBQWdCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFoQkY7QUFGRixHQURlO0FBQUEsQ0FBakI7O0FBMkJBSyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICBnYW1lOiBuZXcgR2FtZSh7XG4gICAgICAgICBmcmFtZXM6IFtdLCBcbiAgICAgICAgIGN1cnJGcmFtZTogbmV3IEZyYW1lKG51bGwpLFxuICAgICAgIH0pLFxuICAgIH07XG4gIH1cbiAgb25QaW5zQ2xpY2soZSkge1xuICAgIGNvbnN0IGV2ZW50ID0gT2JqZWN0LmFzc2lnbih7fSwgZSk7XG4gICAgY29uc3QgZ2FtZSA9IHRoaXMuc3RhdGUuZ2FtZTtcbiAgICBjb25zdCBwaW5zRG93biA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5pbm5lclRleHQpO1xuICAgIGxldCBuZXdHYW1lID0gbmV3IEdhbWUoZ2FtZSk7XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmxvY2FsTmFtZSAhPT0gJ3RkJykgcmV0dXJuO1xuICAgIGlmICghdGhpcy52YWxpZFBpbnNEb3duKHBpbnNEb3duKSkgcmV0dXJuO1xuXG4gICAgbmV3R2FtZS5oYW5kbGVSb2xsKHBpbnNEb3duKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZ2FtZTogbmV3R2FtZVxuICAgIH0pO1xuICB9XG4gIFxuICB2YWxpZFBpbnNEb3duKHBpbnNEb3duKSB7XG4gICAgY29uc3QgY3VyckZyYW1lID0gdGhpcy5zdGF0ZS5nYW1lLmN1cnJGcmFtZTtcbiAgICByZXR1cm4gcGluc0Rvd24gPD0gY3VyckZyYW1lLnJlbWFpbmluZ1BpbnM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTY29yZUJvYXJkIGdhbWU9e3RoaXMuc3RhdGUuZ2FtZX0vPlxuICAgICAgICA8UGluSW5wdXQgb25QaW5zQ2xpY2s9e3RoaXMub25QaW5zQ2xpY2suYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IFBpbklucHV0ID0gKHsgb25QaW5zQ2xpY2sgfSkgPT4gKFxuICA8ZGl2PlxuICAgIEJvd2whXG4gICAgPHRhYmxlIG9uQ2xpY2s9e29uUGluc0NsaWNrfT5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPjA8L3RkPlxuICAgICAgICA8dGQ+MTwvdGQ+XG4gICAgICAgIDx0ZD4yPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD4zPC90ZD5cbiAgICAgICAgPHRkPjQ8L3RkPlxuICAgICAgICA8dGQ+NTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+NjwvdGQ+XG4gICAgICAgIDx0ZD43PC90ZD5cbiAgICAgICAgPHRkPjg8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPjk8L3RkPlxuICAgICAgICA8dGQ+MTA8L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbik7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpIl19