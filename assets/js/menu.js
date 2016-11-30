/**
 * Created by mpietrzyk on 30.11.16.
 */


$(document).on('click', 'a[href^="#"]', function(e) {
  var id = $(this).attr('href');
  e.preventDefault();
  var pos = $(id).offset().top;
  console.log(pos);
  $('body, html').animate({scrollTop: pos}, 1500, 'easeOutQuad');
});