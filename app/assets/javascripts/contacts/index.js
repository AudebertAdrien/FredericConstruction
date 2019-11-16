Paloma.controller("Contacts", {
  index: function() {
    navbar = document.querySelector(".navbar");
    navbar.classList.remove("fixed-top");
    navbar.classList.add("navbar-blue");
  }
});
