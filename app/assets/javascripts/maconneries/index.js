Paloma.controller("Maconneries", {
  index: function() {
    navbar = document.querySelector(".navbar");
    jsOrder = document.querySelector(".js-order")

    navbar.classList.remove("fixed-top");
    navbar.classList.add("navbar-blue");
  }
});