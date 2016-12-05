/**
 * Created by tgola on 30.11.16.
 */

$(window).on('load resize scroll', parabole_tanczo);

function parabole_tanczo() {

  var fala1 = {
    marginBottom: $(document).scrollTop() * 0.15,
    marginLeft: ($(document).scrollTop() -1500) * 0.5
  };

  $('.fala-1').stop().css(fala1);

  var fala2 = {
    paddingTop: ($(document).scrollTop() +35) * 0.15,
    marginLeft: (-1*$(document).scrollTop() -1500) * 0.8
  };

  $('.fala-2').stop().css(fala2);

  var fala3 = {
    paddingTop: ($(document).scrollTop() +150) * 0.15,
    marginLeft: ($(document).scrollTop() -1500) * 1.3
  };

  $('.fala-3').stop().css(fala3);

}
