/**
 * Created by tgola on 30.11.16.
 */

$(window).on('load resize scroll', parabole_tanczo);

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
