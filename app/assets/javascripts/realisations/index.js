Paloma.controller("Realisations", {
  index: function() {
    navbar = document.querySelector("nav");
    navLink = document.querySelector(".line-link");
    blockLogoContact = document.querySelector(".blockLogoContact");
    navbarToggler = document.querySelector(".navbar-toggler")
    mediumDevise = window.matchMedia("(max-width: 767px)");
    cardDescritption = document.querySelectorAll(".card-description");
    main = document.querySelector(".main");


    // add flex to the main for this uniq page
    main.classList.add("main-flex")

    // Navbar fluid for resize
    function resizeLowerMd(e) {
      if (e.matches) {
        navLink.classList.remove("container")
        navLink.classList.add("container-fluid")
      } else {
        navLink.classList.add("container")
        navLink.classList.remove("container-fluid")
      }
    }

    mediumDevise.addListener(resizeLowerMd)

    // Navbar for mobile
    function navbarMobile(e) {
      if (e.matches) {
        blockLogoContact.style.display = "none";
        navbar.classList.remove("bg-light", "shadow", "sticky-top");
        navbar.classList.add("bg-transparent", "fixed-top", "pt-3");
      } else {
        navbar.classList.remove("bg-transparent", "fixed-top", "pt-3");
        navbar.classList.add("bg-light", "shadow", "sticky-top");

        blockLogoContact.style.display = "flex";
      }
    }
    navbarMobile(mediumDevise)
    mediumDevise.addListener(navbarMobile);

    // Navbar fluid if orientationchange
    window.addEventListener("orientationchange", function(e) {
      if (screen.orientation.angle == 90) {
        navLink.classList.remove("container");
        navLink.classList.add("container-fluid");
      } else {
        navLink.classList.remove("container-fluid");
        navLink.classList.add("container");
      }
    });

    // Nabbar collaspse bg-color
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

    // Realisations card maximum length
    for (i = 0; i < cardDescritption.length; i++){
      if (cardDescritption[i].textContent.length > 55){
        cardDescritption[i].classList.add("ellipsis")
      }
    }
  },

  show: function() {
    main = document.querySelector(".main");

    // add flex to the main for this uniq page
    main.classList.add("main-flex");
  }
  
});
