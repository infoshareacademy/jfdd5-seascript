var sections = $('section');
var nav = $('nav');
var nav_height = nav.outerHeight();
var button = nav.find('button')

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  if($(document).scrollTop() > 0){;
    nav.addClass('section-look');
    nav.find('a').parent().removeClass('active-item');
    nav.find('a').parent().removeClass('grow');
    nav.find('a').parent().addClass('shrink');
  }
  else{
    nav.removeClass('section-look');
    nav.find('a').parent().removeClass('shrink');
    nav.find('a').parent().addClass('grow');
  }

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').parent().removeClass('active-item');
      // $(this).addClass('active-item');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active-item');
    }
  });
});

$(document).on('click', 'a[href^="#"]', function (e) {
  var id = $(this).attr('href');
  e.preventDefault();
  var pos = $(id).offset().top;
  $('body, html').stop().animate({scrollTop: pos}, 1500, 'easeOutQuad');
});

$(button).on('click', function(){
  var ul = nav.find('ul');
  var li = nav.find('li.menu-link');
  ul.slideToggle(300);
});




