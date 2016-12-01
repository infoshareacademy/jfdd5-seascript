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
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($featurePhotos, function() {
      var $element = $(this);
      var elementHeight = $element.outerHeight();
      var elementTopPosition = $element.offset().top;
      var elementBottomPosition = (elementTopPosition + elementHeight);

      //check to see if this current container is within viewport
      if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }
});
