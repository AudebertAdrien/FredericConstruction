window.addEventListener('load', function () {
    navbar = document.querySelector('.navbar');
    heightBgHome = document.querySelector("#bg-home-top").getBoundingClientRect().height;
    hasScrollclass = navbar.classList.contains("navbar-blue");
        
    onScroll = function(){
        if((window.pageYOffset > heightBgHome - 106) && !hasScrollclass){
            navbar.classList.add("navbar-blue");
        }else if ((window.pageYOffset < heightBgHome -106) && hasScrollclass){
            navbar.classList.remove("navbar-blue");
        }
    }
    window.addEventListener('scroll', onScroll);
});
