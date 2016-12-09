/**
 * Created by tgola on 30.11.16.
 */
function detectmob() {
  if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ){
    return true;
  }
  else {
    return false;
  }
}

if (detectmob() === false) {
  $(window).on('load resize scroll', parabole_tanczo);
}

function parabole_tanczo() {

  var fala1 = {
    paddingTop: (-1*$(document).scrollTop() +50),
    marginLeft: ($(document).scrollTop() +1000) * 0.3
  };

  $('.fala-1').stop().css(fala1);

  var fala2 = {
    paddingTop: (-1*$(document).scrollTop() +50),
    marginLeft: (-1*$(document).scrollTop() -1000) * 0.4
  };

  $('.fala-2').stop().css(fala2);

  var fala3 = {
    paddingTop: (-1*$(document).scrollTop() +50),
    marginLeft: ($(document).scrollTop() +1000) * 0.5
  };

  $('.fala-3').stop().css(fala3);

}
