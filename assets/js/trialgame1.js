var config = {
  gameSpeed: 300,
  score: 0,
  snakeDirection: 4,
  boardRows: 10,
  boardColumns: 9,
  obstaclesAmount: 7,
  obstaclesFinishRow: 8,
  surferInitPos: {
    rowPos: 9,
    colPos: 3
  },
  surferInitDir: "none"
};

var controls = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

var directions = {
  LEFT: -1,
  RIGHT: 1
};

var woodCollection = createObstaclesCollection();
var bonus = createBonus();

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
  createElementNode(config.surferInitPos).addClass('kiter');
  setInterval(colorBoard, 0);
  setInterval(controlSurfer, 0);
}

var gameInterval = setInterval(function () {
  moveObstacles();
  moveBonus();
  collisionWithWood();
  collectBonus();
  increaseScore();
}, config.gameSpeed);

function generateElementPosition() {
  return {
    rowPos: -1,
    colPos: Math.floor(Math.random() * (config.boardColumns - 1))
  }
}

function createObstaclesCollection() {
  var woodCollection = [];
  for (var i = 0; i < config.obstaclesAmount; i++) {
    woodCollection.push(generateElementPosition());
  }
  return woodCollection;
}

function createBonus() {
  return generateElementPosition();
}

function createElementNode(element) {
  return $('#game-cell_' + element.rowPos + '_' + element.colPos);
}

function updateElementNode(element) {
  return $('#game-cell_' + (element.rowPos += 1) + '_' + element.colPos);
}

function moveObstacles() {
  $.each(woodCollection, function (index, obstacle) {
    createElementNode(obstacle).removeClass('obstacle');
    obstacle.rowPos += 1;

    createElementNode(obstacle).addClass('obstacle');
    if (obstacle.rowPos === config.obstaclesFinishRow) {
      woodCollection.push(generateElementPosition());
    }
  });
}

function moveBonus() {
  createElementNode(bonus).removeClass('bonus');
  updateElementNode(bonus).addClass('bonus').removeClass('obstacle');
  if (bonus.rowPos === config.boardRows + 4) {
    bonus = createBonus();
  }
}

function moveSurfer(value) {
  config.surferInitPos.colPos = config.surferInitPos.colPos + value;
  config.surferInitDir = "none";
}

function controlSurfer() {
  createElementNode(config.surferInitPos).removeClass('kiter');
  switch (config.surferInitDir) {
    case directions.LEFT:
      moveSurfer(directions.LEFT);
      break;
    case directions.RIGHT:
      moveSurfer(directions.RIGHT);
      break;
    default:
      config.surferInitDir = "none";
  }
  createElementNode(config.surferInitPos).addClass('kiter');
}

function collisionWithWood() {
  var $surferCell = $('.kiter');
  if ($surferCell.hasClass('obstacle')) {
    gameOver();
    showGameOverPopUp();
  }
}

function showGameOverPopUp() {
  $('#game-over-popup').css({'top': 300 + 'px'});
  $('#final-score').text(config.score + 10);
}

function colorBoard() {
  var cellRow = Math.floor(Math.random() * (config.boardRows));
  var cellCol = Math.floor(Math.random() * (config.boardColumns));

  var PickedCell = $('#game-cell_' + cellRow + '_' + cellCol);

  PickedCell.animate({
    backgroundColor: '#008dcd'
  }, {
    duration: 500,
    complete: function () {
      PickedCell.animate({
        backgroundColor: '#007bb4'
      }, {
        duration: 1500,
        complete: function () {
          PickedCell.animate({
            backgroundColor: '#009fe7'
          }, {
            duration: 1000,
            complete: function () {
              PickedCell.animate({
                backgroundColor: '#008dcd'
              }, {
                duration: 1500
              })
            }
          })
        }
      })
    }
  })
}

function collectBonus() {
  var $surferCell = $('.kiter');
  if ($surferCell.hasClass('bonus')) {
    console.log('śmigasz Wojk');
    config.score = config.score + 200;
  }
}

function increaseScore() {
  config.score = config.score + 10;
  $('#current-score').text(config.score);
}

function gameOver() {
  clearInterval(gameInterval);
}

function setControls() {
  $(document).keydown(function (e) {
    if (e.keyCode === controls.LEFT_ARROW) {
      config.surferInitDir = directions.LEFT;
    }

    else if (e.keyCode === controls.RIGHT_ARROW) {
      config.surferInitDir = directions.RIGHT;
    }
  });
}

setControls();
startGame();
