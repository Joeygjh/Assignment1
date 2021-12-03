$(document).ready(function(){
    $(window).scroll(function(){
        // JS whereby when scrolling down, The header on top will change background and color of the text
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // This is for the scroll-up button to show up when I scroll down the page and hide it when I am at the home page
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // This is for when clicking on the scroll-up button, it will automatic scroll back up to the home
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        
        // Setting scroll to auto when I click on the scroll-up button
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // When clicking on menu item on mobile view, it will enable smooth scrolling
        $('html').css("scrollBehavior", "smooth");
    });
    // This is for toggling the menu button when in mobile view
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // Typing animation for the Home page and about page
    var typed = new Typed(".typing", {
        strings: ["Ngee Ann polytechnic student", "from schoool of ICT", "Programmer"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Student"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });
    // For the Achievements page (to auto rotate between pictures etc)
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1500,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
