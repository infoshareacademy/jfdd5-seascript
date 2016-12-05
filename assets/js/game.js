// function range(size) {
//   var result = [];
//   for (var i = 0; i < size; i += 1) {
//     result.push(i);
//   }
//   return result;
// }
//
// function $makeBoard(selector, width, height) {
//   return $(selector).empty().append(
//     $('<table>').append(
//       range(height).map(function (y) {
//         return $('<tr>').append(
//           range(width).map(function (x) {
//             return $('<td>').addClass('cell');
//           })
//         );
//       })
//     )
//   );
// }
//
// $makeBoard('table', 10, 10);


// find container
var $container = $('#app');
// var container = document.getElementById('app');
console.log($container);

function times(howMany, action) {
  for (var i = 0; i < howMany; i += 1) {
    action(i);
  }
}

function $makeBoard () {
// create table
  var $table = $('<table>');

//append table do DOM
  $container.append($table);

  var $tr, $td;

  times(10, function (y) {
    //create new row
    $tr = $('<tr>');
    $table.append($tr);
    times(5, function (x) {
      $td = $('<td>');
      $td.addClass('cell');
      $tr.append($td);
    })
  })
}

$makeBoard ();