/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/common */ "./src/js/common/common.js");
/* harmony import */ var _macros_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./macros/menu */ "./src/js/macros/menu.js");
/* harmony import */ var _macros_headerFixed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./macros/headerFixed */ "./src/js/macros/headerFixed.js");
/* harmony import */ var _macros_faq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macros/faq */ "./src/js/macros/faq.js");
/* harmony import */ var _macros_wowAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./macros/wowAnimation */ "./src/js/macros/wowAnimation.js");




 // EVENT LISTENER - LOAD
// ========================================

window.addEventListener('load', function (ev) {
  // COMMON
  _common_common__WEBPACK_IMPORTED_MODULE_0__["default"].initLoad(); // MACROS

  _macros_menu__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  _macros_headerFixed__WEBPACK_IMPORTED_MODULE_2__["default"].init();
  _macros_faq__WEBPACK_IMPORTED_MODULE_3__["default"].init();
  _macros_wowAnimation__WEBPACK_IMPORTED_MODULE_4__["default"].init();
}, false); // EVENT LISTENER - SCROLL
// ========================================

window.addEventListener('scroll', function (ev) {}, false);

/***/ }),

/***/ "./src/js/common/common.js":
/*!*********************************!*\
  !*** ./src/js/common/common.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Common = function () {
  var preventBehavior = function preventBehavior() {
    var link = document.querySelectorAll("a");
    link.forEach(function (val, idx) {
      val.addEventListener("click", function (ev) {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };

  var initEventListeners = function initEventListeners() {};

  var initLoad = function initLoad() {
    preventBehavior();
  };

  return {
    initLoad: initLoad
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Common);

/***/ }),

/***/ "./src/js/macros/faq.js":
/*!******************************!*\
  !*** ./src/js/macros/faq.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Faq = function () {
  var init = function init() {
    $('.faq__collapse-head').on('click', function (ev) {
      $(ev.currentTarget).toggleClass('is-active');
      $(ev.currentTarget).siblings('.faq__collapse-body').slideToggle(350);
    });
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Faq);

/***/ }),

/***/ "./src/js/macros/headerFixed.js":
/*!**************************************!*\
  !*** ./src/js/macros/headerFixed.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var headerFixed = function () {
  var initHeaderFixed = function initHeaderFixed() {
    var getCurrentScroll = function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    };

    var shrinkHeader = 80;
    var scroll = getCurrentScroll();
    scroll >= shrinkHeader ? $('#header').addClass('is-fixed') : $('#header').removeClass('is-fixed');
    $(window).scroll(function () {
      var scroll = getCurrentScroll();
      scroll >= shrinkHeader ? $('#header').addClass('is-fixed') : $('#header').removeClass('is-fixed');
    });
  };

  var init = function init() {
    initHeaderFixed();
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (headerFixed);

/***/ }),

/***/ "./src/js/macros/menu.js":
/*!*******************************!*\
  !*** ./src/js/macros/menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Menu = function () {
  var initHamburger = function initHamburger() {
    var btn = document.querySelector("[hamburger-js]"),
        btnClose = document.querySelector('.menu__close'),
        hideScrollContainer = document.querySelectorAll("html, body"),
        mobileContainer = document.querySelector("[mobile-block-js]");
    /**
     * @description
     */

    btn.addEventListener("click", function (ev) {
      var elem = ev.currentTarget;
      elem.classList.add("is-active");
      mobileContainer.classList.add("is-open");
      hideScrollContainer.forEach(function (val, idx) {
        val.classList.add("is-hideScroll");
      });
    });
    btnClose.addEventListener('click', function (ev) {
      btn.classList.remove("is-active");
      hideScrollContainer.forEach(function (val, idx) {
        val.classList.remove("is-hideScroll");
      });
      mobileContainer.classList.add("is-animated");
      mobileContainer.classList.remove("is-open");
      setTimeout(function (ev) {
        return mobileContainer.classList.remove("is-animated");
      }, 300);
    });
  };

  var menuToggle = function menuToggle() {
    $('.menu__btn').hover(function (ev) {
      var el = $(ev.currentTarget),
          elID = el.attr('data-id');

      if ($(window).width() >= 768) {
        $('.menu__btn').removeClass('is-hover');
        el.addClass('is-hover');
        $('.menu__content').hide();
        $('.menu__content[data-content-id="' + elID + '"]').fadeIn(500);
      }
    }, function (ev) {});
    $('.menu__link-wrapper').hover(function (ev) {}, function (ev) {
      if ($(window).width() >= 768) {
        $('.menu__btn').removeClass('is-hover');
        $('.menu__content').hide();
      }
    });
  };

  var init = function init() {
    initHamburger();
    menuToggle();
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/js/macros/wowAnimation.js":
/*!***************************************!*\
  !*** ./src/js/macros/wowAnimation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var WowAnimation = function () {
  var init = function init() {
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
          hideElement: function hideElement($elem) {
            $elem.hide();
          },
          showElement: function showElement($elem) {
            $elem.show();
          }
        });
      });
    }

    var wow = new WOW({
      boxClass: 'wow',
      // animated element css class (default is wow)
      animateClass: 'animated',
      // animation css class (default is animated)
      offset: 50,
      // distance to the element when triggering the animation (default is 0)
      mobile: true,
      // trigger animations on mobile devices (default is true)
      live: true,
      // act on asynchronously loaded content (default is true)
      callback: function callback(box) {// the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,
      // optional scroll container selector, otherwise use window,
      resetAnimation: true // reset animation on end (default is true)

    });
    wow.init();
  };

  return {
    init: init
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (WowAnimation);

/***/ })

/******/ });