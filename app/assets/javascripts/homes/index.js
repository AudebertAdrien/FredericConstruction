Paloma.controller("Homes", {
  index: function() {

    //Navbar transparent to color on Home page
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
    ////////////////////////////////

/*
    navbarToggler = document.querySelector(".navbar-toggler");
    navbarCollapse = document.querySelector("#navbarNav")
    navbarContact = document.querySelector(".navbar-contact");

    navAppendChild = document.querySelector(".nav-append-child");
    col2 = navAppendChild.querySelector(".col:nth-child(2)");

    isToggler = function() {
      if (!navbarCollapse.classList.contains("show")) {
        navbarContact.parentElement.removeChild(navbarContact);
      } else {
        navbarContact.style.display = "none";
        col2.classList.remove("justify-content-between");
        col2.classList.add("justify-content-end");
        col2.insertAdjacentElement("afterbegin", navbarContact);
        navbarContact.classList.add("contact-appear")
      }
    };

    navbarToggler.addEventListener("click", isToggler);
*/
  }
});
