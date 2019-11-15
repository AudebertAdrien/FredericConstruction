window.addEventListener('load', function () {
    //Declaration
    navbar = document.querySelector('.navbar')

    if (window.location.pathname === "/"){
        heightBgHome = document.querySelector("#bg-home-top").getBoundingClientRect().height;
        hasScrollclass = navbar.classList.contains("navbar-blue")
        
        onscroll = function(){
            if((window.pageYOffset > heightBgHome - 106) && !hasScrollclass){
                navbar.classList.add("navbar-blue")
            }else if ((window.pageYOffset < heightBgHome -106) && hasScrollclass){
                navbar.classList.remove("navbar-blue")
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