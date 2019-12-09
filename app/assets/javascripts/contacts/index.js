Paloma.controller("Contacts", {
  index: function() {
    
    navbar = document.querySelector("nav");
    navLink = document.querySelector(".line-link");
    blockLogoContact = document.querySelector(".blockLogoContact");
    navbarToggler = document.querySelector(".navbar-toggler")
    mediumDevise = window.matchMedia("(max-width: 768px)");

    // Initialization navbar
    blockLogoContact.style.display = "none";
    navbar.classList.remove("bg-light", "shadow", "sticky-top");
    navbar.classList.add("bg-transparent", "fixed-top", "mt-3");
    //

    function lessThan(e) {
      if (e.matches) {
        blockLogoContact.style.display = "none";
        navbar.classList.remove("bg-light", "shadow", "sticky-top");
        navbar.classList.add("bg-transparent", "fixed-top", "mt-3");
      } else {
        navbar.classList.remove("bg-transparent", "fixed-top", "mt-3");
        navbar.classList.add("bg-light", "shadow", "sticky-top");

        blockLogoContact.style.display = "flex";
      }
    }

    mediumDevise.addListener(lessThan);


    window.addEventListener("orientationchange", function(e) {
      if (screen.orientation.angle == 90) {
        navLink.classList.remove("container");
        navLink.classList.add("container-fluid");
      } else {
        navLink.classList.remove("container-fluid");
        navLink.classList.add("container");
      }
    });

    
    function navbarCollaspse() {
      if (navbar.style.backgroundColor == ""){
        navbar.classList.remove("bg-transparent")
        navbar.style.backgroundColor = "#FFF"
      } else {
        navbar.style.backgroundColor = ""
        navbar.classList.add("bg-transparent")
      }
    }
    navbarToggler.addEventListener("click", navbarCollaspse)
  }
});
