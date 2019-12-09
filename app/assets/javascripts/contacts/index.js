Paloma.controller("Contacts", {
  index: function() {

    blockLogoContact = document.querySelector(".blockLogoContact")
    nav = document.querySelector("nav")

    nav.classList.remove("bg-light", "shadow")
    nav.classList.add("bg-transparent")

    blockLogoContact.style.display = "none"
  }
});
