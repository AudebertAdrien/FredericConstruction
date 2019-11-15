window.addEventListener('load', function () {
    //Declaration
    navbar = document.querySelector('.navbar')

    if (window.location.pathname === "/"){
        heightBgHome = $('#bg-home-top')[0].getBoundingClientRect().height;
        hasScrollclass = navbar.hasClass("navbar-blue container")
        
        onscroll = function(){
            if((window.pageYOffset > heightBgHome - 106) && !navbar.hasClass("navbar-blue")){
                navbar.addClass("navbar-blue")
            }else if ((window.pageYOffset < heightBgHome -106) && navbar.hasClass("navbar-blue")){
                navbar.removeClass("navbar-blue")
            }
        }
        $('window').scroll(onscroll)

    }else if (window.location.pathname === "/maconneries"){
        navbar.classList.remove("fixed-top")
        navbar.classList.add("navbar-blue", "mb-5")
        
    }else if (window.location.pathname === "/contacts"){
        navbar.classList.remove("fixed-top")
        navbar.classList.add("navbar-blue", "mb-5")
    }
});