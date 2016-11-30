var sections = $('section');
var nav = $('nav');
var nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').parent().removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    }
  });
});

$(document).on('click', 'a[href^="#"]', function (e) {
  var id = $(this).attr('href');
  e.preventDefault();
  var pos = $(id).offset().top;
  $('body, html').stop().animate({scrollTop: pos}, 1500, 'easeOutQuad');
});




