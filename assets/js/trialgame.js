var config = {
  gameSpeed: 150,
  score: 0,
  snakeDirection: 4,
  boardRows: 20,
  boardColumns: 6,
  obstaclesAmount: 3
};

var controls = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  UP_ARROW: 38,
  DOWN_ARROW: 40
};

var directions = {
  DOWN: 1,
  LEFT: 2,
  UP: 3,
  RIGHT: 4
};

/*
 Function, which creates field of game
 You can adjust field of game in params a and b
 where:
 a = rows;
 b = columns;
 */
function createGameBoard() {
  var $gameBoard = $('<table>');
  for (var i = 0; i < config.boardRows; i++) {
    var $gameBoardHeight = $('<tr>');
    var $gameBoardWidth;
    $gameBoard.append($gameBoardHeight);
    for (var j = 0; j < config.boardColumns; j++) {
      $gameBoardWidth = $('<td id=game-cell_' + i + '_' + j + '>');
      $gameBoardWidth.addClass('cell');
      $gameBoardHeight.append($gameBoardWidth);
    }
  }

  $('#gameboard-container').append($gameBoard);
}

function startGame() {
  createGameBoard(config.boardRows, config.boardColumns);
  createObstacle();
  createBonus();
  $('#game-cell_19_2').addClass('kiter');
}

function generateObstacle() {
  return {
    xPos: Math.floor(Math.random() * (config.boardRows - 1)),
    yPos: Math.floor(Math.random() * (config.boardColumns - 1))
  }
}

function setObstacleOnCell() {
  return $('#game-cell_' + generateObstacle().xPos + '_' + generateObstacle().yPos);
}

function createObstacle() {
  for (var i = 0; i < config.obstaclesAmount; i++) {
    setObstacleOnCell().addClass('obstacle');
  }
}

function createBonus () {
  var gameBoardArea = $('.cell');
  for (var i = 0; i < gameBoardArea.length; i++) {
    if (!gameBoardArea.eq(i).hasClass('obstacle')) {
      setObstacleOnCell().addClass('bonus');
      break;
    }
  }
}

function updateGame () {




}

$(document).keydown(function(e) {
  if (e.keyCode === controls.LEFT_ARROW) {
    snake_direction = directions.LEFT;
  } else if (e.keyCode === controls.UP_ARROW) {
    snake_direction = directions.UP;
  } else if (e.keyCode === controls.RIGHT_ARROW) {
    snake_direction = directions.RIGHT;
  } else if (e.keyCode === controls.DOWN_ARROW) {
    snake_direction = directions.DOWN;
  }
});

startGame();