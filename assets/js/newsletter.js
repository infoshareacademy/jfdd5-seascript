$(document).ready(function() {
  $('html').on('submit','#newsletter',function(e){
    e.preventDefault();
  })
});


var $formularzChekbox = $('.newsletter-checkbox');
$formularzChekbox.on('change', function () {

  $('.newsletter-button').on('click', function () {

    $('#game-container').slideToggle(300);
  })
});
