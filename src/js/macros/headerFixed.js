const headerFixed = (function() {
  const initHeaderFixed = () => {
    const getCurrentScroll = () => window.pageYOffset || document.documentElement.scrollTop;
    const shrinkHeader = 80;

    let scroll = getCurrentScroll();

    (scroll >= shrinkHeader) ? $('#header').addClass('is-fixed') : $('#header').removeClass('is-fixed');

    $(window).scroll(() => {
      let scroll = getCurrentScroll();

      (scroll >= shrinkHeader) ? $('#header').addClass('is-fixed') : $('#header').removeClass('is-fixed');
    });
  };

  const init = function() {
    initHeaderFixed();
  };
  return {
    init: init
  };

})();

export default headerFixed;
