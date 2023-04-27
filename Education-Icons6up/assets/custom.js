// initialize product scroller splideJs
advanceArrows("Spotlight-products");
function advanceArrows(idx) {
  var splideElement = "#" + idx;
  var splideDefaultOptions = {
    arrows: true,
    type: "slide",
    start: 0,
    focus: 0,
    pagination: false,
    rewindSpeed: 500,
    speed: 500,
    pauseOnHover: true,
    perPage: 6,
    perMove: 1,
    omitEnd: true,
    breakpoints: {
      375: {
        arrows: false,
        perPage: 1.75,
      },
      576: {
        arrows: false,
        perPage: 1.75,
      },
      991: {
        arrows: false,
        perPage: 2.75,
      },
      992: {
        arrows: false,
        perPage: 3.75,
      },
      1024: {
        arrows: false,
        perPage: 4.75,
      },
      1200: {
        perPage: 6,
      },
      1440: {
        perPage: 6,
      },
    },
  };
  new Splide(splideElement, splideDefaultOptions).mount();
}

/* ************************************************************************************** */
//for tab sweater & loader added
document.addEventListener("DOMContentLoaded", function () {
  advanceArrows("Spotlight-products");
});
