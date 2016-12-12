$(document).ready(function() {
  $('html').on('submit','#newsletter',function(e){
    e.preventDefault();
  })
});


var $formularzChekbox = $('.newsletter-checkbox');
$formularzChekbox.on('change', function () {

  function detectmob1() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    }
    else {
      return false;
    }
  }

  if (detectmob1() === false) {
  $('.newsletter-button').on('click', function () {

    $('#game-container').slideToggle(300);
  })}
});

$(document).ready(function(){
  $('#contact-form').mousemove(function(e){
    var x = -50 -(e.pageX + this.offsetLeft)/40;
    var y = -50 -(e.pageY + this.offsetTop)/40;
    $('body').css('background-position', x + 'px ' + y + 'px');
  });
});