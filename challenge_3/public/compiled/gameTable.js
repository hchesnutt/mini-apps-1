"use strict";

var GameTable = function GameTable(_ref) {
  var board = _ref.board,
      onColumnClick = _ref.onColumnClick;

  return React.createElement(
    "table",
    null,
    React.createElement(
      "tbody",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          React.createElement(
            "button",
            { id: "1", onClick: onColumnClick },
            "Place"
          )
        ),
        React.createElement(
          "th",
          null,
          React.createElement(
            "button",
            { id: "2", onClick: onColumnClick },
            "Place"
          )
        ),
        React.createElement(
          "th",
          null,
          React.createElement(
            "button",
            { id: "3", onClick: onColumnClick },
            "Place"
          )
        ),
        React.createElement(
          "th",
          null,
          React.createElement(
            "button",
            { id: "4", onClick: onColumnClick },
            "Place"
          )
        )
      ),
      board.map(function (row) {
        return React.createElement(
          "tr",
          null,
          row.map(function (square) {
            return React.createElement(
              "td",
              null,
              square
            );
          })
        );
      })
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9nYW1lVGFibGUuanN4Il0sIm5hbWVzIjpbIkdhbWVUYWJsZSIsImJvYXJkIiwib25Db2x1bW5DbGljayIsIm1hcCIsInJvdyIsInNxdWFyZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVksT0FBNEI7QUFBQSxNQUExQkMsS0FBMEIsUUFBMUJBLEtBQTBCO0FBQUEsTUFBbkJDLGFBQW1CLFFBQW5CQSxhQUFtQjs7QUFDNUMsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsY0FBUSxJQUFHLEdBQVgsRUFBZSxTQUFTQSxhQUF4QjtBQUFBO0FBQUE7QUFBSixTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGNBQVEsSUFBRyxHQUFYLEVBQWUsU0FBU0EsYUFBeEI7QUFBQTtBQUFBO0FBQUosU0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxjQUFRLElBQUcsR0FBWCxFQUFlLFNBQVNBLGFBQXhCO0FBQUE7QUFBQTtBQUFKLFNBSEY7QUFJRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsY0FBUSxJQUFHLEdBQVgsRUFBZSxTQUFTQSxhQUF4QjtBQUFBO0FBQUE7QUFBSjtBQUpGLE9BREY7QUFRSUQsWUFBTUUsR0FBTixDQUFVO0FBQUEsZUFDUjtBQUFBO0FBQUE7QUFFSUMsY0FBSUQsR0FBSixDQUFRO0FBQUEsbUJBQVc7QUFBQTtBQUFBO0FBQUtFO0FBQUwsYUFBWDtBQUFBLFdBQVI7QUFGSixTQURRO0FBQUEsT0FBVjtBQVJKO0FBREYsR0FERjtBQXNCRCxDQXZCRCIsImZpbGUiOiJnYW1lVGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHYW1lVGFibGUgPSAoe2JvYXJkLCBvbkNvbHVtbkNsaWNrfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDx0YWJsZT5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD48YnV0dG9uIGlkPVwiMVwiIG9uQ2xpY2s9e29uQ29sdW1uQ2xpY2t9PlBsYWNlPC9idXR0b24+PC90aD5cbiAgICAgICAgICA8dGg+PGJ1dHRvbiBpZD1cIjJcIiBvbkNsaWNrPXtvbkNvbHVtbkNsaWNrfT5QbGFjZTwvYnV0dG9uPjwvdGg+XG4gICAgICAgICAgPHRoPjxidXR0b24gaWQ9XCIzXCIgb25DbGljaz17b25Db2x1bW5DbGlja30+UGxhY2U8L2J1dHRvbj48L3RoPlxuICAgICAgICAgIDx0aD48YnV0dG9uIGlkPVwiNFwiIG9uQ2xpY2s9e29uQ29sdW1uQ2xpY2t9PlBsYWNlPC9idXR0b24+PC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAge1xuICAgICAgICAgIGJvYXJkLm1hcChyb3cgPT4gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcm93Lm1hcChzcXVhcmUgPT4gKDx0ZD57c3F1YXJlfTwvdGQ+KSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKVxuICAgICAgICB9XG5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKVxufTsiXX0=