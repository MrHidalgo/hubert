const Menu = (function() {
  const initHamburger = () => {

    const btn = document.querySelector("[hamburger-js]"),
      btnClose = document.querySelector('.menu__close'),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

    /**
     * @description
     */
    btn.addEventListener("click", (ev) => {
      const elem = ev.currentTarget;

      elem.classList.add("is-active");
      mobileContainer.classList.add("is-open");

      hideScrollContainer.forEach((val, idx) => {
        val.classList.add("is-hideScroll");
      });

    });

    btnClose.addEventListener('click', (ev) => {
      btn.classList.remove("is-active");

      hideScrollContainer.forEach((val, idx) => {
        val.classList.remove("is-hideScroll");
      });

      mobileContainer.classList.add("is-animated");
      mobileContainer.classList.remove("is-open");

      setTimeout((ev) => mobileContainer.classList.remove("is-animated"), 300);
    });

  };

  const menuToggle = () => {
    $('.menu__btn').hover(
      (ev) => {
        const el = $(ev.currentTarget),
          elID = el.attr('data-id');

        if($(window).width() >= 768) {
          $('.menu__btn').removeClass('is-hover');
          el.addClass('is-hover');

          $('.menu__content').hide();
          $('.menu__content[data-content-id="' + elID + '"]').fadeIn(500);
        }
      },
      (ev) => {},
    );

    $('.menu__link-wrapper').hover(
      (ev) => {},
      (ev) => {
        if($(window).width() >= 768) {
          $('.menu__btn').removeClass('is-hover');
          $('.menu__content').hide();
        }
      }
    );
  };

  const init = function() {
    initHamburger();
    menuToggle();
  };
  return {
    init: init
  };

})();

export default Menu;
