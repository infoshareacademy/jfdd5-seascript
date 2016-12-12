/**
 * Created by mpietrzyk on 12.12.16.
 */
var $sections = $('section');
var $nav = $('nav');
var $navHeight = $nav.outerHeight();
var $button = $nav.find('button');
var ul = $nav.find('ul');

$(window).on('scroll', function () {
  var currentPos = $(this).scrollTop();

  if ($(document).scrollTop() > 0) {
    $nav.addClass('section-look');
    $nav.find('a').parent().removeClass('active-item');
    $nav.find('a').parent().removeClass('grow');
    $nav.find('a').parent().addClass('shrink');
  } else {
    $nav.removeClass('section-look');
    $nav.find('a').parent().removeClass('shrink');
    $nav.find('a').parent().addClass('grow');
  }

  $sections.each(function () {
    var top = $(this).offset().top - $navHeight;
    var bottom = top + $(this).outerHeight();

    if (currentPos >= top && currentPos <= bottom) {
      $nav.find('a').parent().removeClass('active-item');
      // $(this).addClass('active-item');
      $nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active-item');
    }
  });
});

$(window).resize(function () {
  if ($(window).width() > 800) {
    ul.css('display', '')
  } else {
    $(document).on('click', 'a[href^="#"]', function (e) {
      var id = $(this).attr('href');
      e.preventDefault();
      var pos = $(id).offset().top;
      $('body, html').stop().animate({scrollTop: pos}, 1500, 'easeOutQuad');
      ul.slideToggle(300);
    });
  }
});

$(document).on('click', 'a[href^="#"]', function (e) {
  var id = $(this).attr('href');
  e.preventDefault();
  var pos = $(id).offset().top;
  $('body, html').stop().animate({scrollTop: pos}, 1500, 'easeOutQuad');
});

$($button).on('click', function () {
  ul.slideToggle(300);
});