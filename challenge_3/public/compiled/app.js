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
      board: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      turn: 'black',
      players: {
        black: '0',
        red: 'X'
      }
    };
    return _this;
  }
  // Click Hanlers


  _createClass(App, [{
    key: 'onColumnClick',
    value: function onColumnClick(e) {
      var columnNumber = e.target.id;
      placeInColumn(columnNumber);
    }

    // ### DIRECTOR FUNCTIONS ### (get called by handlers)

  }, {
    key: 'placeInColumn',
    value: function placeInColumn(col) {
      addToColumn(col);
      checkForWin();
      handleWin();
    }

    // ### WORKER FUNCTIONS ### (get called by director functions)

  }, {
    key: 'addToColumn',
    value: function addToColumn() {}
  }, {
    key: 'checkForWin',
    value: function checkForWin() {}
  }, {
    key: 'handleWin',
    value: function handleWin() {}
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Connect Poor'
        ),
        React.createElement(
          'h2',
          null,
          'the worst Connect Four game in all the web'
        ),
        React.createElement(GameTable, { board: this.state.board, onColumnClick: this.onColumnClick.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJib2FyZCIsInR1cm4iLCJwbGF5ZXJzIiwiYmxhY2siLCJyZWQiLCJlIiwiY29sdW1uTnVtYmVyIiwidGFyZ2V0IiwiaWQiLCJwbGFjZUluQ29sdW1uIiwiY29sIiwiYWRkVG9Db2x1bW4iLCJjaGVja0ZvcldpbiIsImhhbmRsZVdpbiIsIm9uQ29sdW1uQ2xpY2siLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxDQUNMLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQURLLEVBRUwsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBRkssRUFHTCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FISyxFQUlMLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUpLLENBREk7QUFNWEMsWUFBTSxPQU5LO0FBT1hDLGVBQVM7QUFDUEMsZUFBTyxHQURBO0FBRVBDLGFBQUs7QUFGRTtBQVBFLEtBQWI7QUFGaUI7QUFjbEI7QUFDRDs7Ozs7a0NBQ2NDLEMsRUFBRztBQUNmLFVBQUlDLGVBQWVELEVBQUVFLE1BQUYsQ0FBU0MsRUFBNUI7QUFDQUMsb0JBQWNILFlBQWQ7QUFDRDs7QUFFRDs7OztrQ0FDY0ksRyxFQUFLO0FBQ2pCQyxrQkFBWUQsR0FBWjtBQUNBRTtBQUNBQztBQUNEOztBQUVEOzs7O2tDQUNjLENBRWI7OztrQ0FDYSxDQUViOzs7Z0NBQ1csQ0FFWDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkY7QUFHRSw0QkFBQyxTQUFELElBQVcsT0FBTyxLQUFLZCxLQUFMLENBQVdDLEtBQTdCLEVBQW9DLGVBQWUsS0FBS2MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBbkQ7QUFIRixPQURGO0FBT0Q7Ozs7RUFoRGVDLE1BQU1DLFMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYm9hcmQ6IFtcbiAgICAgICAgWzAsIDAsIDAsIDBdLCBcbiAgICAgICAgWzAsIDAsIDAsIDBdLCBcbiAgICAgICAgWzAsIDAsIDAsIDBdLCBcbiAgICAgICAgWzAsIDAsIDAsIDBdXSxcbiAgICAgIHR1cm46ICdibGFjaycsXG4gICAgICBwbGF5ZXJzOiB7XG4gICAgICAgIGJsYWNrOiAnMCcsXG4gICAgICAgIHJlZDogJ1gnLFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBDbGljayBIYW5sZXJzXG4gIG9uQ29sdW1uQ2xpY2soZSkge1xuICAgIGxldCBjb2x1bW5OdW1iZXIgPSBlLnRhcmdldC5pZDtcbiAgICBwbGFjZUluQ29sdW1uKGNvbHVtbk51bWJlcik7XG4gIH1cblxuICAvLyAjIyMgRElSRUNUT1IgRlVOQ1RJT05TICMjIyAoZ2V0IGNhbGxlZCBieSBoYW5kbGVycylcbiAgcGxhY2VJbkNvbHVtbihjb2wpIHtcbiAgICBhZGRUb0NvbHVtbihjb2wpO1xuICAgIGNoZWNrRm9yV2luKCk7XG4gICAgaGFuZGxlV2luKCk7XG4gIH1cbiAgXG4gIC8vICMjIyBXT1JLRVIgRlVOQ1RJT05TICMjIyAoZ2V0IGNhbGxlZCBieSBkaXJlY3RvciBmdW5jdGlvbnMpXG4gIGFkZFRvQ29sdW1uKCkge1xuICAgIFxuICB9XG4gIGNoZWNrRm9yV2luKCkge1xuICAgIFxuICB9XG4gIGhhbmRsZVdpbigpIHtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Q29ubmVjdCBQb29yPC9oMT5cbiAgICAgICAgPGgyPnRoZSB3b3JzdCBDb25uZWN0IEZvdXIgZ2FtZSBpbiBhbGwgdGhlIHdlYjwvaDI+XG4gICAgICAgIDxHYW1lVGFibGUgYm9hcmQ9e3RoaXMuc3RhdGUuYm9hcmR9IG9uQ29sdW1uQ2xpY2s9e3RoaXMub25Db2x1bW5DbGljay5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19