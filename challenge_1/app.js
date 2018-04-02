var currPlayer = 1;
var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var placeCount = 0;
var boardState = 'playing';
var pieces = {
  1: 'O',
  0: '_',
  '-1': 'X'
};
var outcomes = {
  1: 'O Wins! X lost. Shame, this game should always be a draw. Go study.',
  0: 'Nice, you both forced a draw. This is the expected outcome.',
  '-1': 'X Wins! O lost. Shame on you, any self-respecting adult should be able to force a draw.',
  new: ''
};

var table = document.getElementById('table');
table.addEventListener('click', function (e) {
  // get target element and coordinates
  var coordinates = e.target.id.split(',');
  onClickPiece(coordinates);
  renderTable();

});

var refresh = document.getElementById('refresh');
refresh.addEventListener('click', function(e) {
  refreshGame();
})

// resets game state
var refreshGame = function() {
  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  placeCount = 0;
  currPlayer = 1;
  setGameState('new', 'playing');
  renderTable();
}

// handles a given game endstate
var setGameState = function (winType, gameState) {
  var endNode = document.getElementById('end');
  endNode.innerHTML = outcomes[winType];
  boardState = gameState;
}

var onClickPiece = function (coordinates) {
  if (boardState !== 'playing') {
    return;
  }

  // if valid location, toggle square, switch player
  if (board[coordinates[0]][coordinates[1]] === 0) {
    toggleSquare(currPlayer, coordinates);
    currPlayer = currPlayer * -1;
    placeCount++;
    checkForWin();
  }
}

// toggles a square at a coordinates
var toggleSquare = function (player, coordinates) {
  board[coordinates[0]][coordinates[1]] = player;
};

// Checks for Win
var checkForWin = function () {
  if (placeCount === 9) setGameState(0, 'end');
  // if any of the checks return anything other than 0
  var result = 0;
  var rows = checkRows();
  var columns = checkColumns();
  var diagonals = checkDiagonals();
  if (rows !== 0) result = rows;
  if (columns !== 0) result = columns;
  if (diagonals !== 0) result = diagonals;
  if (result !== 0) setGameState(result, 'end');
};

// returns player that won, or 0 if no win
var checkRows = function () {
  for (var i = 0; i < board.length; i++) {
    var result = board[i].reduce((accumulator, value) => accumulator + value, 0)
    if (result === 3 || result === -3) return result / 3;
  }
  return 0;
}

// returns player that won, or 0 if no win
var checkColumns = function () {
  for (var i = 0; i < board.length; i++) {
    var result = 0;
    for (var j = 0; j < board.length; j++) {
      result += board[j][i];
    }
    if (result === 3 || result === -3) return result / 3
  }
  return 0;
}

// returns player that won, or 0 if no win
var checkDiagonals = function () {
  var majorDiag = 0;
  var minorDiag = 0;
  for (var i = 0; i < board.length; i++) {
    majorDiag += board[i][i];
  }
  for (var i = board.length - 1; i >= 0; i--) {
    minorDiag += board[i][i];
  }
  if (majorDiag === 3 || majorDiag === -3) return majorDiag / 3;
  if (minorDiag === 3 || minorDiag === -3) return minorDiag / 3;
  return 0;
}

// for each -1 places an 'X' in the appropriate square, 1 gets 'O', 0 gets '_'
var renderTable = function () {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      // select node at (row, col), set based on board value
      // var square = document.getElementById(`${row},${col}`);
      var square = document.getElementById(`${i},${j}`);
      square.innerHTML = getPiece(i, j);
    }
  }
};

var getPiece = function (x, y) {
  return pieces[board[x][y]];
};


// initialization
renderTable();