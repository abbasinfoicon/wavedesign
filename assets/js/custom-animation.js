$(function () {
  var controller = new ScrollMagic.Controller();

  var containerScene = new ScrollMagic.Scene({
    triggerElement: '.aboutSecvice_child',
    duration: '100%'
  }).setClassToggle('.leftNewbtn', 'active').addTo(controller);

  var animations = [
    { selector: ".agencyPra-box1", y: -180 },
    { selector: ".agencyPra-box2", y: -572 },
    { selector: ".agencyPra-box3", y: -180 }
  ];

  animations.forEach(function (animation) {
    $(".agencyPra").each(function () {
      var tween = new TimelineMax().to($(this).find(animation.selector), 1, { y: animation.y, ease: Power0.easeInOut });

      new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.5,
        duration: "100%"
      }).setTween(tween).addTo(controller);
    });
  });

  $(".blogPage").each(function () {
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      duration: '80%'
    })
      .setTween($(this).find('.customWidth'), { maxWidth: '100%', ease: Linear.easeNone })
      .addTo(controller); // Optional: .addIndicators() Adds indicators for debugging purposes
  });

  $(".blogPage-sec").each(function () {
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.7,
      duration: '100%'
    })
      .setTween($(this).find('.img-style'), { maxWidth: '100%', ease: Linear.easeNone })
      .addTo(controller); // Optional: .addIndicators() Adds indicators for debugging purposes
  });

  $(".work-sec").each(function () {
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 1,
      duration: '80%'
    })
      .setTween($(this).find('.work-sec-box'), { width: '100%', ease: Linear.easeNone })
      .addTo(controller); // Optional: .addIndicators() Adds indicators for debugging purposes
  });


});

// $(".blogPage").each(function () {
//   var tl = new TimelineMax();
//   var child = $(this).find(".blogPage img");
//   tl.to(child, 1, { y: -180, ease: Linear.easeNone });

//   var scene = new ScrollMagic.Scene({
//     triggerElement: '.blogPage',
//     triggerHook: 0.5,
//     duration: "100%"
//   })
//     .setTween(tl)
//     .addIndicators()
//     .addTo(controller);
// });