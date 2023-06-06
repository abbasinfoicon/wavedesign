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
      var tween = new TimelineMax().to($(this).find(animation.selector), 1, { y: animation.y, ease: Linear.easeNone });

      new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.5,
        duration: "100%"
      }).setTween(tween).addTo(controller);
    });
  });
});