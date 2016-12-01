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
  $dotBtns.each().on('click', currentSlide);


  function addListenersToDotsAndArrows() {
    prevSlideBtn.addEventListener('click', backSlide);
    nextSlideBtn.addEventListener('click', nextSlide);
    for (var i = 0; i < dotBtns.length; i++) {
      dotBtns[i].addEventListener('click', function () {
        currentSlide(i);
      });
    }
  }

  function backSlide() {
    clearInterval(slidesInterval);
    displaySlides(slidePos += -1);
  }

  function nextSlide() {
    clearInterval(slidesInterval);
    displaySlides(slidePos += 1);
  }

  function currentSlide(currentSlidePos) {
    displaySlides(currentSlidePos);
  }

  function setupInitialStateOfSlides() {
      $featureSlides.each().css('display = "none";
      dotBtns[i].className = dotBtns[i].className.replace(" active", "");
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
})();;