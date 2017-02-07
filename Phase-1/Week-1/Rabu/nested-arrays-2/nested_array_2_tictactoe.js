function tic_tac_toe_board() {
  // ...
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

  var board = [
    [ [], [], [] ],
    [ [], [], [] ],
    [ [], [], [] ],
  ];

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var rand = Math.random() * 10;
      if (rand > 5) {
        board[i][j] = xo_random[xo_random.length-1];
        xo_random.splice(xo_random.length-1, 1);
      }
      else {
        board[i][j] = xo_random[0];
        xo_random.splice(0, 1);
      }
    }
  }

  return display(board);
}

function display(board) {
  for (var i = 0; i < board.length; i++) {
    var row = "";
    for (var j = 0; j < board[i].length; j++) {
      row += "|" + board[i][j];
    }
    console.log(row);
  }
  return "";
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
