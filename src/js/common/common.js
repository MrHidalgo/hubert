const Common = (function() {
  const preventBehavior = () => {
    const link = document.querySelectorAll("a");

    link.forEach((val, idx) => {
      val.addEventListener("click", (ev) => {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };

  const initEventListeners = function() {};
  const initLoad = function() {
    preventBehavior();
  };
  return {
    initLoad: initLoad
  };
})();

export default Common;
