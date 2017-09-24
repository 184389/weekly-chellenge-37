jQuery(document).ready(function($){
    var scrollTopBtn = $('#scroll-top-btn'),
        topMenu = $('#top-menu'),
        mainMenu = $('#main-menu'),
        hamburgerMenu = $('.hamburger'),
        menuMobileNavOffer=$('nav#menu-offer'),
        toggleMenuMobileOffer=$('#title-menu-offer'),
        menuMobileOffer=$('.menu-mobile-offer'),
        arrow=$('span.arrow'),
        menuHref=$('.menu-mobile ul li a')
        ;
    //
    //
    scrollTopBtn.on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
    menuHref.on('click', function () {
        var tempHref;
        if($("body").hasClass('home')){
            tempHref=$(this).attr('href');
            tempHref=tempHref.substr(1, tempHref.length);
        }
        smoothScroll(tempHref);
    });
    $('.button-offer a').on('click', function () {
        var tempHref;
        if($("body").hasClass('home')){
            tempHref=$(this).attr('href');
            tempHref=tempHref.substr(1, tempHref.length);
        }
        smoothScroll(tempHref);
    });
    //
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 45) {
            scrollTopBtn.addClass('active');
            // topMenu.addClass('active');
        }else {
            scrollTopBtn.removeClass('active');
            // topMenu.removeClass('active');
        }
    });



    hamburgerMenu.on('click', function() {
        hamburgerMenu.toggleClass('active');
        if(hamburgerMenu.hasClass('active')) {
            mainMenu.addClass('active');
            scrollTopBtn.addClass('hidden');
        } else {
            mainMenu.removeClass('active');
            scrollTopBtn.removeClass('hidden');
        }
    });

    toggleMenuMobileOffer.on('click', function() {
        menuMobileNavOffer.toggleClass('active');
        if(menuMobileNavOffer.hasClass('active')) {
            menuMobileOffer.addClass('active');
            arrow.removeClass('down');
            arrow.addClass('up');
        } else {
            menuMobileNavOffer.removeClass('active');
            menuMobileOffer.removeClass('active');
            arrow.removeClass('up');
            arrow.addClass('down');
        }
    });

    function smoothScroll(id) {
        $('html, body').animate({
            scrollTop: ($(id).offset().top -70)
        }, 500);
        return false;
    }

});