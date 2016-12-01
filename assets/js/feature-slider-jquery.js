(function() {
  var $slidePos = 0,
    $featureSlides = $(".feature-slide"),
    $dotBtns = $(".dot-slide"),
    $prevSlideBtn = $(".prev-slide")[0],
    $nextSlideBtn = $(".next-slide")[0],
    $numberOfSlides = $featureSlides.length,
    $slidesInterval =  setInterval(automaticSlidesDisplay, 3000);


  $prevSlideBtn.on('click', backSlide);
  $nextSlideBtn.on('click', nextSlide);
  $dotBtns.each(function() {
    $(this).on('click', currentSlide);
  });



  function backSlide() {
    clearInterval(slidesInterval);
    displaySlides(slidePos += -1);
  }

  function nextSlide() {
    clearInterval(slidesInterval);
    displaySlides(slidePos += 1);
  }

  function currentSlide(currentSlidePos) {
    clearInterval(slidesInterval);
    slidePos = currentSlidePos;
    displaySlides(currentSlidePos);
  }

  function setupInitialStateOfSlides() {
    for (var i = 0; i < numberOfSlides; i++) {
      featureSlides[i].style.display = "none";
      dotBtns[i].className = dotBtns[i].className.replace(" active", "");
    }
  }

  function displaySlides(currentSlidePos) {
    if (currentSlidePos > numberOfSlides) {
      slidePos = 1;
    }

    setupInitialStateOfSlides();
    if (currentSlidePos < 1) {
      slidePos = numberOfSlides;
    }

    featureSlides[slidePos - 1].style.display = "block";
    dotBtns[slidePos - 1].className += " active";
  }

  function automaticSlidesDisplay() {
    setupInitialStateOfSlides();
    slidePos++;
    if (slidePos > numberOfSlides) {
      slidePos = 1;
    }

    featureSlides[slidePos - 1].style.display = "block";
    dotBtns[slidePos - 1].className += " active";
  }


  addListenersToDotsAndArrows();
  displaySlides(slidePos);
})();