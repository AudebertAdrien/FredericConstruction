Paloma.controller("Homes", {
  index: function() {
    navbar = document.querySelector(".navbar");
    heightBgHome = document
      .querySelector("#bg-home-top")
      .getBoundingClientRect().height;
    hasScrollclass = navbar.classList.contains("navbar-color-js");

    onScroll = function() {
      if (window.pageYOffset > heightBgHome - navbar.offsetHeight && !hasScrollclass) {
        navbar.classList.add("navbar-color-js");
        hasScrollclass = true;
      } else if (window.pageYOffset < heightBgHome - navbar.offsetHeight  && hasScrollclass) {
        navbar.classList.remove("navbar-color-js");
        hasScrollclass = false;
      }
    };
    window.addEventListener("scroll", onScroll);
  }
});
