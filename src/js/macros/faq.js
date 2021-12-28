const Faq = (function() {
  const init = function() {
    $('.faq__collapse-head').on('click', (ev) => {
      $(ev.currentTarget).toggleClass('is-active');
      $(ev.currentTarget).siblings('.faq__collapse-body').slideToggle(350);
    });
  };
  return {
    init: init
  };

})();

export default Faq;
