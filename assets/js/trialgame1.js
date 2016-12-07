var config = {
  gameSpeed: 300,
  score: 0,
  snakeDirection: 4,
  boardRows: 15,
  boardColumns: 7,
  obstaclesAmount: 5,
  obstaclesFinishRow: 8,
  surferInitPosRow: 14,
  surferInitPosCol: 5,
  surferInitDir: 0
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
  $('#game-cell_' + config.surferInitPosRow + '_' + config.surferInitPosCol).addClass('kiter');
  updateGame();

}

function generateObstacleandBonusPosition() {
  return {
    rowPos: -1,
    colPos: Math.floor(Math.random() * (config.boardColumns - 1))
  }
}

function createObstaclesCollection() {
  var woodCollection = [];
  for (var i = 0; i < config.obstaclesAmount; i++) {
    woodCollection.push(generateObstacleandBonusPosition());
  }
  return woodCollection;
}

var woodCollection = createObstaclesCollection();
var bonus = createObstaclesCollection()[0];

function moveObstacles() {
  for (var j = 0; j < woodCollection.length; j++) {
    var previousPos = $('#game-cell_' + woodCollection[j].rowPos + '_' + woodCollection[j].colPos); //czy da się to jakoś ulepszyć
    previousPos.removeClass('obstacle');
    woodCollection[j].rowPos += 1;
    var nextPos = $('#game-cell_' + woodCollection[j].rowPos + '_' + woodCollection[j].colPos);
    nextPos.addClass('obstacle');
    if (woodCollection[j].rowPos === config.obstaclesFinishRow) {
      woodCollection.push(generateObstacleandBonusPosition());
    }
  }
}

function moveBonus() {
  var bonusNode = $('#game-cell_' + bonus.rowPos + '_' + bonus.colPos).removeClass('bonus');
  bonusNode = $('#game-cell_' + (bonus.rowPos += 1) + '_' + bonus.colPos).addClass('bonus');
  if (bonus.rowPos === config.boardRows + 4) {                                         //problem kumulacja komórek w razie liczby 10
    bonus = createObstaclesCollection()[0];
  }
}

function controlSurfer() {                                                                      //przesuwa się z nieskończoność

  $('#game-cell_' + config.surferInitPosRow + '_' + config.surferInitPosCol).removeClass('kiter');

  switch (config.surferInitDir) {
    case 2:
      config.surferInitPosCol = config.surferInitPosCol - 1;
      config.surferInitDir = 0;
      break; // Left

    case 4:
      config.surferInitPosCol = config.surferInitPosCol + 1;
      config.surferInitDir = 0;
      break;  // Right
  }

  $('#game-cell_' + config.surferInitPosRow + '_' + config.surferInitPosCol).addClass('kiter');
}

// function gameOver {
//   if()
// }

function updateGame() {
  setInterval(moveObstacles, config.gameSpeed);
  setInterval(moveBonus, config.gameSpeed);
  setInterval(controlSurfer, 0);
}


$(document).keydown(function (e) {
  if (e.keyCode === controls.LEFT_ARROW) {
    config.surferInitDir = directions.LEFT;
  } else if (e.keyCode === controls.RIGHT_ARROW) {
    config.surferInitDir = directions.RIGHT;
  }
});

startGame();