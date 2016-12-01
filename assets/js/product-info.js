/**
 * Created by maciej on 30.11.16.
 */

$(document).ready(function () {
  var $featurePhotos = $('.feature-photo');
  var $window = $(window);
  $window.on('scroll load', check_if_in_view);

  function check_if_in_view() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var window_bottom_position = (windowTopPosition + windowHeight);

    $.each($featurePhotos, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= windowTopPosition) &&
        (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }
});
