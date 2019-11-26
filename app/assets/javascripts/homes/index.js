Paloma.controller("Homes", {
  index: function() {
    navLink = document.querySelector(".nav-link");

    mediumDevise = window.matchMedia("(max-width: 768px)")

    function lessThanMd(e) {
      if (e.matches) {
        navLink.classList.remove("container")
        navLink.classList.add("container-fluid")
      } else {
        navLink.classList.add("container")
        navLink.classList.remove("container-fluid")
      }  
    }

    mediumDevise.addListener(lessThanMd)
  }
});
