$(function () {
  var additionalTopMarginTeamSection = 200,
      fadeInSpeed = 400,
      offsetTopTeamSection = $('#team').offset().top - additionalTopMarginTeamSection,
      $teamPhotoContainer = $('.team-photo-container');

  function fadeInPhoto(i) {
    $teamPhotoContainer.eq(i)
      .delay($(this).data('delay'))
      .animate({'opacity': '1'}, fadeInSpeed);
  }

  function isTeamSectionInView() {
    return $(this).scrollTop() > offsetTopTeamSection;
  }

  function fadeInTeamPhotos() {
    if (isTeamSectionInView()) {
      console.log("ja tez");
      $teamPhotoContainer.each(fadeInPhoto);
    }
  }

  $(window).on('scroll', fadeInTeamPhotos);
});