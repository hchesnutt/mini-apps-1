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
      if (event.target.localName !== 'td') return;

      var game = this.state.game;
      var pinsDown = parseInt(event.target.innerText);
      var newGame = new Game(game);

      newGame.handleRoll(pinsDown);

      this.setState({
        game: newGame
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(ScoreBoard, { pinsPerBall: this.state.pinsPerBall }),
        React.createElement(PinInput, { onPinsClick: this.onPinsClick.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

var ScoreBoard = function ScoreBoard(props) {
  return React.createElement('div', null);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJnYW1lIiwiR2FtZSIsImZyYW1lcyIsImN1cnJGcmFtZSIsIkZyYW1lIiwiZSIsImV2ZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidGFyZ2V0IiwibG9jYWxOYW1lIiwicGluc0Rvd24iLCJwYXJzZUludCIsImlubmVyVGV4dCIsIm5ld0dhbWUiLCJoYW5kbGVSb2xsIiwic2V0U3RhdGUiLCJwaW5zUGVyQmFsbCIsIm9uUGluc0NsaWNrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiU2NvcmVCb2FyZCIsIlBpbklucHV0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1ZDLFlBQU0sSUFBSUMsSUFBSixDQUFTO0FBQ2JDLGdCQUFRLEVBREs7QUFFYkMsbUJBQVcsSUFBSUMsS0FBSixDQUFVLElBQVY7QUFGRSxPQUFUO0FBREksS0FBYjtBQUZpQjtBQVFsQjs7OztnQ0FDV0MsQyxFQUFHO0FBQ2IsVUFBTUMsUUFBUUMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JILENBQWxCLENBQWQ7QUFDQSxVQUFJQyxNQUFNRyxNQUFOLENBQWFDLFNBQWIsS0FBMkIsSUFBL0IsRUFBcUM7O0FBRXJDLFVBQU1WLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxJQUF4QjtBQUNBLFVBQU1XLFdBQVdDLFNBQVNOLE1BQU1HLE1BQU4sQ0FBYUksU0FBdEIsQ0FBakI7QUFDQSxVQUFJQyxVQUFVLElBQUliLElBQUosQ0FBU0QsSUFBVCxDQUFkOztBQUVBYyxjQUFRQyxVQUFSLENBQW1CSixRQUFuQjs7QUFFQSxXQUFLSyxRQUFMLENBQWM7QUFDWmhCLGNBQU1jO0FBRE0sT0FBZDtBQUdEOzs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLFVBQUQsSUFBWSxhQUFhLEtBQUtmLEtBQUwsQ0FBV2tCLFdBQXBDLEdBREY7QUFFRSw0QkFBQyxRQUFELElBQVUsYUFBYSxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUF2QjtBQUZGLE9BREY7QUFNRDs7OztFQS9CZUMsTUFBTUMsUzs7QUFrQ3hCLElBQU1DLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQ2pCLGdDQURpQjtBQUFBLENBQW5COztBQU1BLElBQU1DLFdBQVcsU0FBWEEsUUFBVztBQUFBLE1BQUdMLFdBQUgsUUFBR0EsV0FBSDtBQUFBLFNBQ2Y7QUFBQTtBQUFBO0FBQUE7QUFFRTtBQUFBO0FBQUEsUUFBTyxTQUFTQSxXQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixPQURGO0FBTUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGLE9BTkY7QUFXRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEYsT0FYRjtBQWdCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFoQkY7QUFGRixHQURlO0FBQUEsQ0FBakI7O0FBMkJBTSxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICBnYW1lOiBuZXcgR2FtZSh7XG4gICAgICAgICBmcmFtZXM6IFtdLCBcbiAgICAgICAgIGN1cnJGcmFtZTogbmV3IEZyYW1lKG51bGwpLFxuICAgICAgIH0pLFxuICAgIH07XG4gIH1cbiAgb25QaW5zQ2xpY2soZSkge1xuICAgIGNvbnN0IGV2ZW50ID0gT2JqZWN0LmFzc2lnbih7fSwgZSk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5sb2NhbE5hbWUgIT09ICd0ZCcpIHJldHVybjtcblxuICAgIGNvbnN0IGdhbWUgPSB0aGlzLnN0YXRlLmdhbWU7XG4gICAgY29uc3QgcGluc0Rvd24gPSBwYXJzZUludChldmVudC50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICBsZXQgbmV3R2FtZSA9IG5ldyBHYW1lKGdhbWUpO1xuICAgIFxuICAgIG5ld0dhbWUuaGFuZGxlUm9sbChwaW5zRG93bik7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGdhbWU6IG5ld0dhbWVcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTY29yZUJvYXJkIHBpbnNQZXJCYWxsPXt0aGlzLnN0YXRlLnBpbnNQZXJCYWxsfS8+XG4gICAgICAgIDxQaW5JbnB1dCBvblBpbnNDbGljaz17dGhpcy5vblBpbnNDbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgU2NvcmVCb2FyZCA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICBcbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBQaW5JbnB1dCA9ICh7IG9uUGluc0NsaWNrIH0pID0+IChcbiAgPGRpdj5cbiAgICBCb3dsIVxuICAgIDx0YWJsZSBvbkNsaWNrPXtvblBpbnNDbGlja30+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD4wPC90ZD5cbiAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICA8dGQ+MjwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+MzwvdGQ+XG4gICAgICAgIDx0ZD40PC90ZD5cbiAgICAgICAgPHRkPjU8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPjY8L3RkPlxuICAgICAgICA8dGQ+NzwvdGQ+XG4gICAgICAgIDx0ZD44PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD45PC90ZD5cbiAgICAgICAgPHRkPjEwPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG4pO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSJdfQ==