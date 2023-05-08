
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

    if (scroll > 0) {
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
    autoplay: true,
    nav: false,
    dots: false,
    items: 1,
    margin: 0,
    touchDrag: false,
    mouseDrag: false,
    animateIn: 'fadeIn', // add this
    animateOut: 'fadeOut' // and this
});

$('.text-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 1900,
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
    autoplay: true,
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
        },
        1366: {
            items: 7
        }
    }
});


// themes color change
$(".themeChange").click(function () {
    $(this).toggleClass('light');
    $("body").toggleClass('light');
})

$('input#switch').change(function () {
    $(this).parents('.unlock-skill').toggleClass('active');
    $(this).parents('.unlock').find('.center').toggleClass('active');
});

// $('.about-content h3').hover(function () {
//     $(this).addClass('color');
// });


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    let aboutElement = $('.about');
    let aboutOffset = aboutElement.offset().top;
    let aboutHeight = aboutElement.outerHeight();
    let h3Color = aboutOffset - (aboutHeight * 0.8);

    if (scroll > h3Color) {
        $('.about-content h3').each(function (i) {
            var heading = $(this);
            setTimeout(function () {
                heading.addClass('color');
            }, 500 * i);
        });
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    let cusHgt = $('.prgass').offset().top - 300;

    if (scroll > cusHgt) {
        $('.prgass-section').addClass('active');
        $('.prgass-row .col-md-3').each(function (i) {
            var row = $(this);
            setTimeout(function () {
                row.addClass('act_dot');
            }, 300 * i);

        });
    } 
});