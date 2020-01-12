$(function () {

    // Variables
    let header = $("#header");
    let intro = $("#intro");
    let introHeight = intro.innerHeight();
    let scrollPosition = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    // Fixed header
    checkScroll(scrollPosition, introHeight);

    // Event on scroll for fixed header
    $(window).on("scroll resize", function () {
        introHeight = intro.innerHeight();
        scrollPosition = $(this).scrollTop();

        checkScroll(scrollPosition, introHeight);
    });

    function checkScroll(scrollPosition, introHeight) {
        if (scrollPosition > introHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elemmentId = $(this).data('scroll');
        let elementOffset = $(elemmentId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 58
        }, 600);
    });

    // Nav Toggle
    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    // Reviews
    // https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider")

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});