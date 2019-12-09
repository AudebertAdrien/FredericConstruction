Paloma.controller("Contacts", {
  index: function() {

    navbar = document.querySelector("nav")
    blockLogoContact = document.querySelector(".blockLogoContact")
    mediumDevise = window.matchMedia("(max-width: 768px)")
    
    // Initialisation navbar 
    blockLogoContact.style.display = "none"  
    navbar.classList.remove("bg-light", "shadow", "sticky-top")
    navbar.classList.add("bg-transparent", "fixed-top", "mt-3")
    //

    function lessThan(e){
      if(e.matches){
        blockLogoContact.style.display = "none"  
        navbar.classList.remove("bg-light", "shadow", "sticky-top")
        navbar.classList.add("bg-transparent", "fixed-top", "mt-3")    
      } else {
        navbar.classList.remove("bg-transparent", "fixed-top", "mt-3")
        navbar.classList.add("bg-light", "shadow", "sticky-top")
    
        blockLogoContact.style.display = "flex"  
      } 
    }

    mediumDevise.addListener(lessThan)



    //navbarToggler = document.querySelector(".navbar-toggler")
  /*
    function navbarCollaspse() {
      if (navbarToggler.classList.contains("collapsed")){
        console.log("true")
      } else {
        console.log("false")
      }
    }
  */
  }
});
