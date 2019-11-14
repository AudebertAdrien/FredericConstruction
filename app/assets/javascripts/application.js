// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

//= require jquery
//= require popper
//= require bootstrap.min
//= require js/main

$('document').ready(function() {
    //Variable
    heightBgHome = $('#bg-home-top')[0].getBoundingClientRect().height;
    navbar = $('.navbar')
    hasScrollclass = navbar.hasClass("navbar-blue container")
    
    //Fonction
    onscroll = function(){
        if((window.pageYOffset > heightBgHome - 106) && !navbar.hasClass("navbar-blue")){
            navbar.addClass("navbar-blue")
        }else if ((window.pageYOffset < heightBgHome -106) && navbar.hasClass("navbar-blue")){
            navbar.removeClass("navbar-blue")
        }
    }

    //Fonction Call
    $('window').scroll(onscroll)
});