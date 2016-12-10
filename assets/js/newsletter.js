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

$(document).ready(function(){
  $('#contact-form').mousemove(function(e){
    var x = -50 -(e.pageX + this.offsetLeft)/40;
    var y = -50 -(e.pageY + this.offsetTop)/40;
    $('body').css('background-position', x + 'px ' + y + 'px');
  });
});