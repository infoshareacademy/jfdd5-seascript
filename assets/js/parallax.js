/**
 * Created by tgola on 30.11.16.
 */

$(window).on('load resize scroll', parabole_tanczo);

function parabole_tanczo() {

  var fala1 = {
    paddingTop: (-1*$(document).scrollTop() +300) * 0.255,
    marginLeft: ($(document).scrollTop() -1000) * 1.2
  };

  $('.fala-1').stop().css(fala1);

  var fala2 = {
    paddingTop: (-1*$(document).scrollTop() +300) * 0.355,
    marginLeft: (-1*$(document).scrollTop() -1000) * 2
  };

  $('.fala-2').stop().css(fala2);

  var fala3 = {
    paddingTop: (-1*$(document).scrollTop() +300) * 0.555,
    marginLeft: ($(document).scrollTop() -1000) * 3
  };

  $('.fala-3').stop().css(fala3);

}
