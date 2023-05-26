$(function () {
    var controller = new ScrollMagic.Controller();
    var containerScene = new ScrollMagic.Scene({
      triggerElement: '.aboutSecvice_child', duration: '100%'
    })
      .setClassToggle('.leftNewbtn', 'active')
    //   .addIndicators()
      .addTo(controller);
  });