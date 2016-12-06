var config = {
  gameSpeed: 150,
  score: 0,
  snakeDirection: 4,
  boardRows: 15,
  boardColumns: 7,
  obstaclesAmount: 3,
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
  // createObstacle();
  // createBonus();
  $('#game-cell_14_3').addClass('kiter');
  setTimeout(updateGame(), 1000);
  //updateGame();
}

function generateObstacle() {
  return {
    rowPos: -1,
    colPos: Math.floor(Math.random() * (config.boardColumns - 1))
  }
}

function setObstacleOnCell() {

  var obstacle = {
    rowPos: 1,
    colPos: Math.floor(Math.random() * (config.boardColumns - 1))
  }
  // $obstacle_cell = $('#game-cell_' + obstacle.rowPos + '_' + obstacle.colPos);
  // console.log($obstacle_cell);
  return obstacle;

}

// function createObstacle() {
//   for (var i = 0; i < config.obstaclesAmount; i++) {
//     setObstacleOnCell()
//     var obst = $obstacle_cell;
//     obst.addClass('obstacle').addClass(''+i+'');
//     updateGame();
//   }
// }

// function createBonus () {
//   var gameBoardArea = $('.cell');
//   for (var i = 0; i < gameBoardArea.length; i++) {
//     if (!gameBoardArea.eq(i).hasClass('obstacle')) {
//       setObstacleOnCell().addClass('bonus');
//       break;
//     }
//   }
// }

function updateGame() {
  var temp_obst = [];
  for (var i = 0; i < config.obstaclesAmount; i += 1) {
    temp_obst.push(setObstacleOnCell());
  }
  console.log(temp_obst);
  setInterval(function () {
    for (var j = 0; j < temp_obst.length; j += 1) {
      var $old_cell = $('#game-cell_' + temp_obst[j].rowPos + '_' + temp_obst[j].colPos);
      $old_cell.removeClass('obstacle');
      temp_obst[j].rowPos += 1;
      var $new_cell = $('#game-cell_' + temp_obst[j].rowPos + '_' + temp_obst[j].colPos);
      $new_cell.addClass('obstacle');
      if(temp_obst[j].rowPos === 10){
        temp_obst.push(setObstacleOnCell());
      }
    }
  }, 200);



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