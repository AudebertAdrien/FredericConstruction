Paloma.controller("Homes", {
  index: function() {
    navbar = document.querySelector(".navbar");
    heightBgHome = document
      .querySelector("#bg-home-top")
      .getBoundingClientRect().height;
    hasScrollclass = navbar.classList.contains("navbar-color-js");

    onScroll = function() {
      if (window.pageYOffset > heightBgHome - 106 && !hasScrollclass) {
        navbar.classList.add("navbar-color-js");
        hasScrollclass = true;
      } else if (window.pageYOffset < heightBgHome - 106 && hasScrollclass) {
        navbar.classList.remove("navbar-color-js");
        hasScrollclass = false;
      }
    };
    window.addEventListener("scroll", onScroll);

    navbarToggler = document.querySelector(".navbar-toggler");
    navbarCollapse = document.querySelector("#navbarNav")

    navbarContact = document.querySelector(".navbar-contact");

    navAppendChild = document.querySelector(".nav-append-child");

    isToggler = function() {
      if (!navbarCollapse.classList.contains("show")) {
        navbarContact.parentElement.removeChild(navbarContact);
        navAppendChild.appendChild(navbarContact);
      } else {
        navAppendChild.removeChild(navbarContact);
        col2 = navAppendChild.querySelector(".col:nth-child(2)");
        col2.insertAdjacentElement("afterbegin", navbarContact);
      }
    };

    navbarToggler.addEventListener("click", isToggler);
  }
});
