import Common from "./common/common";

import Menu from "./macros/menu";
import HeaderFixed from "./macros/headerFixed";
import Faq from "./macros/faq";

// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {
  // COMMON
  Common.initLoad();

  // MACROS
  Menu.init();
  HeaderFixed.init();
  Faq.init();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
