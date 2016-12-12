(function () {
  var slidePos = 1,
    $featureSlides = $(".feature-slide"),
    $dotBtns = $(".dot-slide"),
    $prevSlideBtn = $(".prev-slide"),
    $nextSlideBtn = $(".next-slide"),
    numberOfSlides = $featureSlides.length,
    $slidesInterval,
    additionalTopMarginFeatureSection = 200,
    offsetFeaturesSection = $('#features').offset().top - additionalTopMarginFeatureSection,
    isSectionInView = false,
    screenBreakPoint = 992;

  addEventsToDotsAndArrows();

  function isWindowSmallerThanBreakPoint() {
    return screenBreakPoint > window.innerWidth;
  }

  $(window).on('resize', function () {
    if (!isWindowSmallerThanBreakPoint()) {
      displaySlides();
      $(window).on('scroll', activateSlideshow);
    }
    if (isWindowSmallerThanBreakPoint()) {
      $featureSlides.css('display', 'block');
    }
  });

  $(window).on('load', function () {
    if (!isWindowSmallerThanBreakPoint()) {
      displaySlides();
      $(window).on('scroll', activateSlideshow);
    }
  });

  function isFeaturesSectionInView() {
    return $(this).scrollTop() > offsetFeaturesSection;
  }

  function addEventsToDotsAndArrows() {
    $prevSlideBtn.on('click', backSlide);
    $nextSlideBtn.on('click', nextSlide);
    $.each($dotBtns, function (index) {
      $(this).data('dot-index', (index + 1));
      $(this).click(function () {
        var dotIndex = $(this).data('dot-index');
        currentSlide(dotIndex);
      });
    });
  }

  function backSlide() {
    slidePos = slidePos - 1;
    clearInterval($slidesInterval);
    displaySlides();
  }

  function nextSlide() {
    slidePos = slidePos + 1;
    clearInterval($slidesInterval);
    displaySlides();
  }

  function currentSlide(currentSlidePos) {
    clearInterval($slidesInterval);
    slidePos = currentSlidePos;
    displaySlides();
  }

  function setupInitialStateOfSlides() {
    if (!isWindowSmallerThanBreakPoint()) {
      $featureSlides.each(function () {
        $(this).css('display', 'none')
      });
      $dotBtns.each(function () {
        $(this).removeClass('active');
      });
    }
  }

  function activateSlide() {
    if (slidePos > numberOfSlides) {
      slidePos = 1;
    }

    var currentSlideNumber = slidePos - 1;
    $featureSlides.eq(currentSlideNumber).css('display', 'block');
    $dotBtns.eq(currentSlideNumber).addClass('active');
  }

  function displaySlides() {
    if (isWindowSmallerThanBreakPoint()) {
      return;
    }

    setupInitialStateOfSlides();
    activateSlide();

    if (slidePos < 1) {
      slidePos = numberOfSlides;
    }
  }

  function automaticSlidesDisplay() {
    setupInitialStateOfSlides();
    slidePos = slidePos + 1;
    activateSlide();
  }

  function activateSlideshow() {
    if (isWindowSmallerThanBreakPoint()) {
      return;
    }

    if (isFeaturesSectionInView() && !isSectionInView) {
      isSectionInView = true;
      $slidesInterval = setInterval(automaticSlidesDisplay, 3000);
    }
  }
})();



