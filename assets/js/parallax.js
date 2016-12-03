/**
 * Created by tgola on 30.11.16.
 */

$(window).on('scroll', parabole_tanczo);

function parabole_tanczo() {

  $('.fala-1').stop().css({
    bottom: ($(document).scrollTop()) * 0.5,
    left: ($(document).scrollTop()) * 0.5

  });

  $('.fala-2').stop().css({
    bottom: ($(document).scrollTop()) * 0.3,
    right: ($(document).scrollTop()) * 0.3
  });

  $('.fala-3').stop().css({
    bottom: ($(document).scrollTop()) * 0.15,
    left: ($(document).scrollTop()) * 0.15
  });

}
