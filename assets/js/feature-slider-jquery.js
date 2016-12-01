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
    $slidePos = $slidePos - 1;
    clearInterval($slidesInterval);
    displaySlides($slidePos);
  }

  function nextSlide() {
    $slidePos = $slidePos + 1;
    clearInterval($slidesInterval);
    displaySlides($slidePos);
  }

  //nie rozumiem jak działa ta funkcja//
  function currentSlide(currentSlidePos) {
    clearInterval($slidesInterval);
    $slidePos = currentSlidePos;
    displaySlides(currentSlidePos);
  }

  function setupInitialStateOfSlides() {
      $featureSlides.each(function() {
        $(this).css('display', 'none')
        });
      $dotBtns.each(function() {
        $(this).removeClass('active');
      });
  }

  function displaySlides(currentSlidePos) {
    setupInitialStateOfSlides();

    if (currentSlidePos > $numberOfSlides) {
      $slidePos = 1;
    }

    if (currentSlidePos < 1) {
      $slidePos = $numberOfSlides;
    }

    var currentSlideNumber = $slidePos - 1;
    $featureSlides[currentSlideNumber].css('display', 'block');
    $dotBtns[currentSlideNumber].addClass('active');
  }

  function automaticSlidesDisplay() {
    setupInitialStateOfSlides();
    $slidePos = $slidePos + 1; //? //

    if ($slidePos > $numberOfSlides) {
      $slidePos = 1;
    }

    var currentSlideNumber = $slidePos - 1;
    $featureSlides[currentSlideNumber].css('display', 'block');
    $dotBtns[currentSlideNumber].addClass('active');
  }

  displaySlides($slidePos);
})();