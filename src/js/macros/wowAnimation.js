const WowAnimation = (function() {
  const init = function() {
    if ($("[parallax-js]").length) {
      $(function () {
        $.stellar({
          horizontalScrolling: false,
          verticalScrolling: true,

          horizontalOffset: 0,
          verticalOffset: 0,

          responsive: false,

          scrollProperty: 'scroll',

          positionProperty: 'transform',

          parallaxBackgrounds: true,
          parallaxElements: true,

          hideDistantElements: false,

          hideElement: function($elem) { $elem.hide(); },
          showElement: function($elem) { $elem.show(); }
        });
      });
    }

    var wow = new WOW({
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 50,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    });

    wow.init();
  };
  return {
    init: init
  };

})();

export default WowAnimation;
