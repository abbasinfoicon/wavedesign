
/*=====================================================================
    ==========================  Scroll-Preloader  =========================
    ========================================================================*/

var progressPath = document.querySelector('.progress-wrap path');
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
}
updateProgress();
$(window).scroll(updateProgress);
var offset = 50;
var duration = 550;
jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
    } else {
        jQuery('.progress-wrap').removeClass('active-progress');
    }
});
jQuery('.progress-wrap').on('click', function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, duration);
    return false;
})

// Preloader
var win = $(window);
win.on('load', function () {
    $('#pre-loader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

if ($(window).width() > 991) {
    new WOW().init();
}
/*========================================================================================================
================================ Sticky header ===================================================================
===========================================================================================================*/

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 80) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 700) {
        $('.mainNav').addClass('sticky');
    } else {
        $('.mainNav').removeClass('sticky');
    }
});

/*=====================================================================
    ==========================  ScrollToptoBottom  =========================
    ========================================================================*/

$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
});
$('#scroll').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});




/*========================================================================================================
================================ slider-home owlCarousel ===================================================================
===========================================================================================================*/

$('.slider-home').owlCarousel({
    loop: true,
    autoplay: false,
    nav: false,
    dots: false,
    items: 1,
    margin: 0,
    touchDrag: false,
    mouseDrag: false,
    animateIn: 'fadeIn', // add this
    animateOut: 'fadeOut' // and this
});


$('.client-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    nav: false,
    dots: false,
    margin: 30,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
});

$('.testimonial-carousel').owlCarousel({
    loop: false,
    nav: true,
    dots: true,
    items: 1,
    margin: 0,
    autoplayTimeout: 4000,
    smartSpeed: 400,
});

$('.ratings-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    dots: false,
    margin: 0,
    autoplayTimeout: 4000,
    smartSpeed: 400,
    center: true,
    touchDrag: false,
    mouseDrag: false,
    center: true,
    stagePadding: 300,
    items: 1,
});





$("#color_change p").click(function () {
    $("#color_change").toggleClass("show");
    $(this).find('i').toggleClass('fa-fill-drip fa-xmark')
})

$(".navbar-toggler").click(function () {
    $(this).find('i').toggleClass('fa-bars fa-xmark')
})

// themes color change
$(".themeChange").click(function () {
    $(this).toggleClass('light');
    $("body").toggleClass('light');
})
