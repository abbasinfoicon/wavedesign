const circleType = new CircleType(document.getElementById('showreel')).radius(65);

$(window).scroll(function() {
  var off = $(window).scrollTop();
  off *= 0.4;
  gsap.to('.circular-text', {
    ease: "power3.out", transform: 'rotate('+off+'deg)'
  });
  // $(".circular-text").css({
  //   'transform': 'rotate('+off+'deg)'
  // });
});