// tab carousal js
// initialize product scroller
advanceArrows("Spotlight-DryFood-product");
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
        perPage: 1,
      },
      576: {
        perPage: 1,
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
  advanceArrows("Spotlight-DryFood-product");
});
/* we don't need to this code when we are not using the tab buttons
// for dog filter function
function filterProducts(c) {
  var x, i;
  x = document.getElementsByClassName("citrusSpotlight__Product");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "citrusTabShow");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], " citrusTabShow");
  }
  advanceArrows(c);
}
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
document.addEventListener("DOMContentLoaded", function () {
  // for dog active class filter
  var dogBtnContainer = document.getElementById("citrusSpotlightTabId");
  var dogBtns = dogBtnContainer.getElementsByClassName(
    "citrusSpotlight__tab_item"
  );
  addActiveClass(dogBtns, "citrusSpotlight__active_tab");
});
function addActiveClass(element, activeClass) {
  for (var i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function () {
      var current = document.getElementsByClassName(activeClass);
      current[0].className = current[0].className.replace(
        " " + activeClass,
        ""
      );
      this.className += " " + activeClass;
    });
  }
}*/

// accordion js

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
