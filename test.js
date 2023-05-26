$(function () {
  var controller = new ScrollMagic.Controller();
  var containerScene = new ScrollMagic.Scene({
    triggerElement: '#container', duration: '50%'
  })
    .setClassToggle('#block', 'modifier1')
    .addIndicators()
    .addTo(controller);
});