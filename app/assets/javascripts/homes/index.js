Paloma.controller("Homes", {
  index: function() {
    navbar = document.querySelector(".navbar");
    heightBgHome = document.querySelector("#bg-home-top").getBoundingClientRect().height;
    hasScrollclass = navbar.classList.contains("navbar-blue");

    onScroll = function() {
      if (window.pageYOffset > heightBgHome - 106 && !hasScrollclass) {
        navbar.classList.add("navbar-blue");
        hasScrollclass = true;
      } else if (window.pageYOffset < heightBgHome - 106 && hasScrollclass) {
        navbar.classList.remove("navbar-blue");
        hasScrollclass = false;
      }
    };
    window.addEventListener("scroll", onScroll);
  }
});
