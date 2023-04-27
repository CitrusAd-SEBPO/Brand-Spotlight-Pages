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
        perPage: 2,
      },
      576: {
        perPage: 2,
      },
      991: {
        perPage: 3,
      },
      992: {
        perPage: 3,
      },
      1024: {
        perPage: 6,
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

/*/============================================================== /*/
// accordion js
/*/============================================================== /*/

const accordionItems = document.querySelectorAll(
  ".citrusSpotlight__accordion-item"
);

accordionItems.forEach((item) => {
  const title = item.querySelector(".citrusSpotlight__accordion-icon");
  const content = item.querySelector(".citrusSpotlight__accordion-content");

  title.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all accordion items except the clicked one
    accordionItems.forEach((item) => {
      if (item !== this) {
        item.classList.remove("active");
      }
    });

    if (!isActive) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});
