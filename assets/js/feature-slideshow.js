/**
 * Created by Agnieszka on 2016-12-01.
 */
(function() {
  var slidePos = 1,
    featureSlides = document.getElementsByClassName("feature-slide"),
    dotBtns = document.getElementsByClassName("dot-slide"),
    prevSlideBtn = document.getElementsByClassName("prev-slide")[0],
    nextSlideBtn = document.getElementsByClassName("next-slide")[0],
    numberOfSlides = featureSlides.length,
    slidesInterval =  setInterval(automaticSlidesDisplay, 3000);

  function addListenersToDotsAndArrows() {
    prevSlideBtn.addEventListener('click', backSlide);
    nextSlideBtn.addEventListener('click', nextSlide);
    for (var i = 0; i < dotBtns.length; i++) {
      var currentDot = dotBtns[i];
      currentDot.setAttribute("data-dot-index", (i + 1));
      currentDot.addEventListener('click', function(event) {
        var dot = event.currentTarget;
        var dotNumber = dot.getAttribute("data-dot-index");
        currentSlide(dotNumber);
      });
    }
  }

  function backSlide() {
    slidePos = slidePos - 1;
    clearInterval(slidesInterval);
    displaySlides();
  }

  function nextSlide() {
    slidePos = slidePos + 1;
    clearInterval(slidesInterval);
    displaySlides();
  }

  function currentSlide(currentSlidePos) {
    clearInterval(slidesInterval);
    slidePos = currentSlidePos;
    displaySlides();
  }

  function setupInitialStateOfSlides() {
    for (var i = 0; i < numberOfSlides; i++) {
      featureSlides[i].style.display = "none";
      dotBtns[i].className = dotBtns[i].className.replace(" active", "");
    }
  }

  function activateSlide() {
    if (slidePos > numberOfSlides) {
      slidePos = 1;
    }

    var currentSlideNumber = slidePos - 1;
    featureSlides[currentSlideNumber].style.display = "block";
    dotBtns[currentSlideNumber].className += " active";
  }

  function displaySlides() {
    setupInitialStateOfSlides();
    if (slidePos < 1) {
      slidePos = numberOfSlides;
    }

    activateSlide();
  }

  function automaticSlidesDisplay() {
    setupInitialStateOfSlides();
    slidePos = slidePos + 1;
    activateSlide();
  }

  addListenersToDotsAndArrows();
  displaySlides();

  var additionalTopMarginFeatureSection = 200,
    offsetFeaturesSection = $('#features').offset().top - additionalTopMarginFeatureSection,
    isAlreadyInView = false;

  function isFeaturesSectionInView() {
    return $(this).scrollTop() > offsetFeaturesSection;
  }

  function activateSlideshow() {
    if (isFeaturesSectionInView() && !isAlreadyInView) {
      isAlreadyInView = true;
      $slidesInterval =  setInterval(automaticSlidesDisplay, 3000);
      console.log("xxx");
    }
  }

  $(window).on('scroll', activateSlideshow);
})();