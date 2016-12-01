(function() {
  var slidePos = 0,
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