/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/DOMConstructor.js":
/*!**********************************!*\
  !*** ./src/js/DOMConstructor.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DOMConstructor = /*#__PURE__*/_createClass(function DOMConstructor(type, id, classArray, content) {
  var _this = this;
  _classCallCheck(this, DOMConstructor);
  _defineProperty(this, "setElement", function () {
    _this.element = document.createElement(_this.type);
    if (_this.id) {
      _this.element.id = _this.id;
    }
    if (_this.classArray) {
      var _iterator = _createForOfIteratorHelper(_this.classArray),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var className = _step.value;
          _this.element.classList.add(className);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (_this.content) {
      _this.element.innerText = _this.content;
    }
    return _this.element;
  });
  if (!type) return;
  this.type = type;
  this.id = id;
  this.classArray = classArray;
  this.content = content;
  this.element = '';
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMConstructor);

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMConstructor */ "./src/js/DOMConstructor.js");
/* harmony import */ var _css_contact_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/contact.css */ "./src/css/contact.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



// Define a ContactPage class
var ContactPage = /*#__PURE__*/function () {
  function ContactPage() {
    _classCallCheck(this, ContactPage);
  }
  _createClass(ContactPage, [{
    key: "init",
    value:
    // Define an init method to initialize the class
    function init() {
      this.cacheDom(); // Cache DOM elements
      this.render(); // Render the contact page
    }

    // Define a cacheDom method to cache DOM elements
  }, {
    key: "cacheDom",
    value: function cacheDom() {
      this.content = document.querySelector('.content'); // Get the content element
      // Create new DOM elements using the DOMConstructor class
      this.div = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('div', null, null, null, null);
      this.h1 = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('h1', null, null, null, null);
      this.form = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('form', null, null, null, null);
      this.input = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('input', null, null, null, null);
      this.textarea = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('textarea', null, null, null, null);
      this.button = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('button', null, null, null, null);
    }

    // Define a render method to create and add elements to the page
  }, {
    key: "render",
    value: function render() {
      var container = this.div.setElement(); // Create a div container element
      container.classList.add('formContainer'); // Add a class to the container

      var title = this.h1.setElement(); // Create an h1 title element
      title.classList.add('formTitle'); // Add a class to the title element
      title.innerText = 'Contact Us!!!'; // Set the title text

      var form = this.form.setElement(); // Create a form element
      form.classList.add('formContact'); // Add a class to the form

      var name = this.input.setElement(); // Create an input element for the name
      name.type = 'text'; // Set the input type to text
      name.placeholder = 'Name'; // Set the input placeholder text

      var surname = this.input.setElement(); // Create an input element for the surname
      surname.type = 'text'; // Set the input type to text
      surname.placeholder = 'Last Name'; // Set the input placeholder text

      var email = this.input.setElement(); // Create an input element for the email
      email.type = 'email'; // Set the input type to email
      email.placeholder = 'Email'; // Set the input placeholder text

      var phone = this.input.setElement(); // Create an input element for the phone number
      phone.type = 'tel'; // Set the input type to tel
      phone.placeholder = 'Phone Number'; // Set the input placeholder text

      var subject = this.textarea.setElement(); // Create a textarea element for the subject
      // Set the input attributes
      subject.setAttribute('rows', '5');
      subject.placeholder = 'Subject';
      var submit = this.button.setElement(); // Create a submit button element
      var divButton = this.div.setElement();
      divButton.classList.add('buttonForm');
      submit.classList.add('submitButton'); // Add a class to the button
      submit.type = 'submit'; // Set the button type to submit
      submit.innerText = 'Submit';
      divButton.appendChild(submit);

      // Append the input elements to the form
      form.appendChild(name);
      form.appendChild(surname);
      form.appendChild(email);
      form.appendChild(phone);
      form.appendChild(subject);
      form.appendChild(divButton);

      // Append the title and form to the container
      container.appendChild(title);
      container.appendChild(form);

      // Append the container to the content element
      this.content.appendChild(container);
    }
  }]);
  return ContactPage;
}(); // Create a new instance of the ContactPage class and export it
var contact = new ContactPage();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMConstructor */ "./src/js/DOMConstructor.js");
/* harmony import */ var _css_header_footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/header-footer.css */ "./src/css/header-footer.css");


var footerBar = function () {
  var footer, p, content;
  var pContent = "Made by\n    <a href=\"https://github.com/CristofherPablo\" target=\"_blank\"\n      >Cristofher Guersoni</a> for <a href=\"https://www.theodinproject.com/paths\" target=\"_blank\">Odin Project</a>";
  function init() {
    cacheDOM();
    render();
  }
  function cacheDOM() {
    footer = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('footer', null, ['footer'], null);
    p = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('p', null, null, null);
    content = document.querySelector('.content');
  }
  function render() {
    footer = footer.setElement();
    p = p.setElement();
    p.innerHTML = pContent;
    footer.appendChild(p);
    content.appendChild(footer);
  }
  return {
    init: init
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerBar);

/***/ }),

/***/ "./src/js/header-menu.js":
/*!*******************************!*\
  !*** ./src/js/header-menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMConstructor */ "./src/js/DOMConstructor.js");
/* harmony import */ var _css_header_footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/header-footer.css */ "./src/css/header-footer.css");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");



var headerMenu = function () {
  var content, header, logo, ul, liHome, liMenu, liContact, logoTxt, aLogo;
  function init() {
    cacheDOM();
    render();
  }
  function cacheDOM() {
    content = document.querySelector('.content');
    header = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('header', 'headerMenu', null, null);
    //logo elements 
    aLogo = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('a', 'logoHome', ['headerLogo'], null);
    logo = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('img', null, ['logoImg'], null);
    logoTxt = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('p', null, null, "Funny Donuts'");
    // nav elements 
    ul = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('ul', 'menu', null, null);
    liHome = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('li', 'btnHome', null, 'Home');
    liMenu = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('li', 'btnMenu', null, 'Menu');
    liContact = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('li', 'btnContact', null, 'Contact Us');
  }
  function render() {
    // Setting the Logo Img and text
    logo = logo.setElement();
    logo.setAttribute('src', _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__);
    logoTxt = logoTxt.setElement();
    aLogo = aLogo.setElement();
    aLogo.appendChild(logo);
    aLogo.appendChild(logoTxt);

    //Setting the navbar menu 
    ul = ul.setElement();
    ul.appendChild(liHome.setElement());
    ul.appendChild(liMenu.setElement());
    ul.appendChild(liContact.setElement());

    // append it all to the header 
    header = header.setElement();
    header.appendChild(aLogo);
    header.appendChild(ul);

    // appending the header to the content container
    content.appendChild(header);
  }
  return {
    init: init
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerMenu);

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/home.css */ "./src/css/home.css");
/* harmony import */ var _DOMConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMConstructor */ "./src/js/DOMConstructor.js");
/* harmony import */ var _assets_slide1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/slide1.jpg */ "./src/assets/slide1.jpg");
/* harmony import */ var _assets_slide2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/slide2.jpg */ "./src/assets/slide2.jpg");
/* harmony import */ var _assets_slide3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/slide3.jpg */ "./src/assets/slide3.jpg");
/* harmony import */ var _assets_slide4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/slide4.jpg */ "./src/assets/slide4.jpg");






var homePage = function () {
  var content, input, div, img, label, p, btn;
  var slidesImg = [_assets_slide1_jpg__WEBPACK_IMPORTED_MODULE_2__, _assets_slide2_jpg__WEBPACK_IMPORTED_MODULE_3__, _assets_slide3_jpg__WEBPACK_IMPORTED_MODULE_4__, _assets_slide4_jpg__WEBPACK_IMPORTED_MODULE_5__];
  function init() {
    cacheDOM();
    render();
    autoSlide();
    //getHeight();
  }

  function cacheDOM() {
    content = document.querySelector('.content');
    div = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_1__["default"]('div', null, null, null, null);
    input = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_1__["default"]('input', null, null, null, null);
    img = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_1__["default"]('img', null, null, null, null);
    label = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_1__["default"]('label', null, null, null, null);
    p = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_1__["default"]('label', null, null, null, null);
    btn = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_1__["default"]('button', null, null, null, null);
  }
  function render() {
    //setting the main carousel
    var divCarousel = div.setElement();
    divCarousel.classList.add('slider');

    // setting up the inner container
    var divSlider = div.setElement();
    divSlider.classList.add('slides');

    //setting the four inputs and appending to the carousel
    for (var i = 0; i < 4; i++) {
      var inputElement = void 0;
      inputElement = input.setElement();
      inputElement.type = 'radio';
      inputElement.name = 'radio-btn';
      inputElement.id = 'radio' + (i + 1);
      divSlider.appendChild(inputElement);
    }

    //setting the four slides and appending to the slider container

    for (var _i = 0; _i < 4; _i++) {
      var divSlideContainer = void 0,
        divSlide = void 0,
        imgSlide = void 0,
        btnSlide = void 0,
        pSlide = void 0;

      //setting the container for the img
      divSlideContainer = div.setElement();
      divSlideContainer.classList.add('slide');
      if (_i === 0) {
        //setting an extra class for the first slide
        divSlideContainer.classList.add('first');
        // setting the button and small description
        divSlide = div.setElement();
        divSlide.classList.add('innerDiv');
        btnSlide = btn.setElement();
        btnSlide.innerText = 'Order From The Menu';
        pSlide = p.setElement();
        pSlide.innerText = 'The Best Donuts from town!!';
        divSlide.appendChild(pSlide);
        divSlide.appendChild(btnSlide);
        divSlideContainer.appendChild(divSlide);
      }

      //setting the image
      divSlideContainer.style.backgroundImage = 'url(' + slidesImg[_i] + ')';
      //imgSlide = img.setElement();
      //imgSlide.setAttribute('src', slidesImg[i]);
      //appending the img
      //divSlideContainer.appendChild(imgSlide);
      //appending to the slider
      divSlider.appendChild(divSlideContainer);
    }

    //navigation auto buttons

    var divNavigation = div.setElement();
    divNavigation.classList.add('navigation-auto');
    for (var _i2 = 0; _i2 < 4; _i2++) {
      var divAuto = div.setElement();
      divAuto.classList.add('auto-btn' + (_i2 + 1));
      divNavigation.appendChild(divAuto);
    }
    divSlider.appendChild(divNavigation);
    divCarousel.appendChild(divSlider);
    // setting the manual buttons to navigate the slides

    var divManual = div.setElement();
    divManual.classList.add('navigation-manual');
    for (var _i3 = 0; _i3 < 4; _i3++) {
      var labelManual = label.setElement();
      labelManual.setAttribute('for', 'radio' + (_i3 + 1));
      labelManual.classList.add('manual-btn');
      divManual.appendChild(labelManual);
    }
    divCarousel.appendChild(divManual);
    content.appendChild(divCarousel);
  }
  function autoSlide() {
    var countSlide = 1;
    document.getElementById('radio1').checked = true;
    var intervalSlide = null;
    if (document.getElementById("radio".concat(countSlide))) {
      startAutoSlide();
    }
    function startAutoSlide() {
      intervalSlide = setInterval(function () {
        nextImage();
      }, 4000);
    }
    function stopAutoSlide() {
      clearInterval(intervalSlide);
    }
    function nextImage() {
      countSlide++;
      if (countSlide > 4) {
        countSlide = 1;
      }
      var radioBtn = document.getElementById("radio".concat(countSlide));
      if (radioBtn) {
        radioBtn.checked = true;
      } else {
        stopAutoSlide();
      }
    }
  }
  function getHeight() {
    var slides = document.querySelector('.slides');
    var slider = document.querySelector('.slider');
    var heightHeader = document.querySelector('header').offsetHeight;
    slides.style.height = window.innerHeight - heightHeader - 50.4 + 'px';
    slider.style.height = window.innerHeight - heightHeader - 50.4 + 'px';
  }
  return {
    init: init,
    getHeight: getHeight
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMConstructor */ "./src/js/DOMConstructor.js");
/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/menu.css */ "./src/css/menu.css");
/* harmony import */ var _assets_caramel_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/caramel.jpg */ "./src/assets/caramel.jpg");
/* harmony import */ var _assets_coconut_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/coconut.jpg */ "./src/assets/coconut.jpg");
/* harmony import */ var _assets_nutella_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/nutella.jpg */ "./src/assets/nutella.jpg");
/* harmony import */ var _assets_darkchocolate_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/darkchocolate.jpg */ "./src/assets/darkchocolate.jpg");
/* harmony import */ var _assets_oreo_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/oreo.jpg */ "./src/assets/oreo.jpg");
/* harmony import */ var _assets_pistachio_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/pistachio.jpg */ "./src/assets/pistachio.jpg");
/* harmony import */ var _assets_plain_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/plain.jpg */ "./src/assets/plain.jpg");
/* harmony import */ var _assets_sakura_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/sakura.jpg */ "./src/assets/sakura.jpg");
/* harmony import */ var _assets_strawberry_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/strawberry.jpg */ "./src/assets/strawberry.jpg");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



//import of the pictures to be used









var MenuAssets = /*#__PURE__*/function () {
  function MenuAssets() {
    _classCallCheck(this, MenuAssets);
    this.menuArray = [{
      picture: "".concat(_assets_caramel_jpg__WEBPACK_IMPORTED_MODULE_2__),
      name: 'Caramel',
      description: 'Raised ring with caramel frosting and sprinkled with powdered sugar'
    }, {
      picture: "".concat(_assets_coconut_jpg__WEBPACK_IMPORTED_MODULE_3__),
      name: 'Coconut',
      description: 'Raised ring with coconut topping and filled with coconut cream'
    }, {
      picture: "".concat(_assets_nutella_jpg__WEBPACK_IMPORTED_MODULE_4__),
      name: 'Nutella',
      description: 'Raised ring with chocolate frosting, filled with nutella and colorful sprinkles'
    }, {
      picture: "".concat(_assets_darkchocolate_jpg__WEBPACK_IMPORTED_MODULE_5__),
      name: 'Dark Chocolate',
      description: 'Raised ring with dark chocolate topping and squared chocolate sprinkles'
    }, {
      picture: "".concat(_assets_oreo_jpg__WEBPACK_IMPORTED_MODULE_6__),
      name: 'Oreo',
      description: 'Raised ring with oreo topping with oreo bites and chocolate dough'
    }, {
      picture: "".concat(_assets_pistachio_jpg__WEBPACK_IMPORTED_MODULE_7__),
      name: 'Pistachio',
      description: 'Raised ring with pistachio topping and colorful sprinkles'
    }, {
      picture: "".concat(_assets_plain_jpg__WEBPACK_IMPORTED_MODULE_8__),
      name: 'Original',
      description: 'Raised ring with glaze'
    }, {
      picture: "".concat(_assets_sakura_jpg__WEBPACK_IMPORTED_MODULE_9__),
      name: 'Sakura',
      description: 'Raised ring with Sakura frosting and sprinkled Sakura seeds'
    }, {
      picture: "".concat(_assets_strawberry_jpg__WEBPACK_IMPORTED_MODULE_10__),
      name: 'Strawberry',
      description: 'Raised ring with Strawberry frosting and sprinkled Strawberry bites and white sprinkles'
    }];
  }
  _createClass(MenuAssets, [{
    key: "init",
    value: function init() {
      this.cacheDOM();
      this.render();
    }
  }, {
    key: "cacheDOM",
    value: function cacheDOM() {
      this.content = document.querySelector('.content');
      this.container = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('section', null, ['containerMenu'], null, null);
      this.container = this.container.setElement();
      this.div = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('div', null, null, null, null);
      this.img = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('img', null, null, null, null);
      this.p = new _DOMConstructor__WEBPACK_IMPORTED_MODULE_0__["default"]('p', null, null, null, null);
    }
  }, {
    key: "render",
    value: function render() {
      var _iterator = _createForOfIteratorHelper(this.menuArray),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var element = _step.value;
          var div = this.div.setElement();
          div.classList.add('menuCard');

          //make a flip card structure
          var flipContainer = this.div.setElement();
          flipContainer.classList.add('flipContainer');
          var flipDiv = this.div.setElement();
          flipDiv.classList.add('flipCard');
          var innerCard = this.div.setElement();
          innerCard.classList.add('innerCard');
          var img = this.img.setElement();
          img.setAttribute('src', element.picture);
          var backCard = this.div.setElement();
          backCard.classList.add('backCard');
          var pBack = this.p.setElement();
          pBack.innerText = element.description;
          innerCard.appendChild(img);
          backCard.appendChild(pBack);
          flipDiv.appendChild(innerCard);
          flipDiv.appendChild(backCard);
          flipContainer.appendChild(flipDiv);

          //setting the product name
          var p = this.p.setElement();
          p.innerText = element.name;

          //appending all the cards
          div.appendChild(flipContainer);
          div.appendChild(p);
          this.container.appendChild(div);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.content.appendChild(this.container);
    }
  }]);
  return MenuAssets;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuAssets);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/contact.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/contact.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".formContainer {\r\n  flex: 1 1 auto;\r\n  width: 700px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.formContainer h1 {\r\n  font-family: var(--dancingFont);\r\n  font-size: 3rem;\r\n  color: #ff34b3;\r\n}\r\n\r\n.formContact {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 10px;\r\n  background-color: #ffd3ea;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\ntextarea {\r\n  grid-column: span 2;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  padding: 8px;\r\n  border: none;\r\n  background-color: #ffe2f1;\r\n  color: #ff34b3;\r\n  border-radius: 5px;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n  outline: none !important;\r\n  border: 1px solid #ff34b3;\r\n  box-shadow: 0 0 10px #ffd3ea;\r\n}\r\n\r\n.buttonForm {\r\n  grid-column: span 2;\r\n  padding: 5px;\r\n}\r\n\r\n.buttonForm button {\r\n  padding: 8px 20px;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  background-color: #e4ffff;\r\n  color: #ff34b3;\r\n  transition: 1s;\r\n}\r\n\r\n.buttonForm button:hover {\r\n  background-color: #ff34b3;\r\n  color: #e4ffff;\r\n}\r\n\r\n/* changing the placeholder color */\r\n::placeholder {\r\n  color: #50c878;\r\n  opacity: 1; /* Firefox */\r\n}\r\n\r\n:-ms-input-placeholder {\r\n  /* Internet Explorer 10-11 */\r\n  color: #8c9595;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  /* Microsoft Edge */\r\n  color: #8c9595;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/contact.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,YAAY;EACZ,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;EAC/B,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,yBAAyB;EACzB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,kBAAkB;AACpB;;AAEA;;EAEE,wBAAwB;EACxB,yBAAyB;EACzB,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA,mCAAmC;AACnC;EACE,cAAc;EACd,UAAU,EAAE,YAAY;AAC1B;;AAEA;EACE,4BAA4B;EAC5B,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB","sourcesContent":[".formContainer {\r\n  flex: 1 1 auto;\r\n  width: 700px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.formContainer h1 {\r\n  font-family: var(--dancingFont);\r\n  font-size: 3rem;\r\n  color: #ff34b3;\r\n}\r\n\r\n.formContact {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 10px;\r\n  background-color: #ffd3ea;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\ntextarea {\r\n  grid-column: span 2;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  padding: 8px;\r\n  border: none;\r\n  background-color: #ffe2f1;\r\n  color: #ff34b3;\r\n  border-radius: 5px;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n  outline: none !important;\r\n  border: 1px solid #ff34b3;\r\n  box-shadow: 0 0 10px #ffd3ea;\r\n}\r\n\r\n.buttonForm {\r\n  grid-column: span 2;\r\n  padding: 5px;\r\n}\r\n\r\n.buttonForm button {\r\n  padding: 8px 20px;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  background-color: #e4ffff;\r\n  color: #ff34b3;\r\n  transition: 1s;\r\n}\r\n\r\n.buttonForm button:hover {\r\n  background-color: #ff34b3;\r\n  color: #e4ffff;\r\n}\r\n\r\n/* changing the placeholder color */\r\n::placeholder {\r\n  color: #50c878;\r\n  opacity: 1; /* Firefox */\r\n}\r\n\r\n:-ms-input-placeholder {\r\n  /* Internet Explorer 10-11 */\r\n  color: #8c9595;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  /* Microsoft Edge */\r\n  color: #8c9595;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header-footer.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header-footer.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Header basic setup  */\r\n#headerMenu {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  padding: 0px 30px 0px 10px;\r\n  background-color: var(--backGround);\r\n}\r\n\r\n/* Logo Img and Name setup */\r\n.headerLogo {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.headerLogo img {\r\n  width: 110px;\r\n}\r\n\r\n.headerLogo p {\r\n  font-size: 1.8rem;\r\n}\r\n\r\n/* Main navbar menu setup */\r\nheader ul,\r\nheader li {\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n}\r\n\r\n#menu {\r\n  display: flex;\r\n  gap: 20px;\r\n  justify-content: center;\r\n}\r\n\r\n#menu li {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 150px;\r\n  height: 40px;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n  transition: 0.3s all;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#menu li:hover {\r\n  border: 2px solid var(--border);\r\n}\r\n\r\n.activePage {\r\n  background-color: var(--border);\r\n  color: var(--text-color);\r\n}\r\n\r\n/* Footer setup */\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--footer-background);\r\n  color: var(--text-color);\r\n}\r\n\r\nfooter a {\r\n  text-decoration: none;\r\n  color: var(--text-color);\r\n  cursor: pointer;\r\n  transition: .3s all;\r\n}\r\n\r\nfooter a:hover{\r\n    color: rgba(255, 255, 255, 0.7);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/header-footer.css"],"names":[],"mappings":"AAAA,wBAAwB;AACxB;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,sBAAsB;EACtB,0BAA0B;EAC1B,mCAAmC;AACrC;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA,2BAA2B;AAC3B;;EAEE,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;EAC/B,wBAAwB;AAC1B;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,0CAA0C;EAC1C,wBAAwB;AAC1B;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,eAAe;EACf,mBAAmB;AACrB;;AAEA;IACI,+BAA+B;AACnC","sourcesContent":["/* Header basic setup  */\r\n#headerMenu {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  padding: 0px 30px 0px 10px;\r\n  background-color: var(--backGround);\r\n}\r\n\r\n/* Logo Img and Name setup */\r\n.headerLogo {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.headerLogo img {\r\n  width: 110px;\r\n}\r\n\r\n.headerLogo p {\r\n  font-size: 1.8rem;\r\n}\r\n\r\n/* Main navbar menu setup */\r\nheader ul,\r\nheader li {\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n}\r\n\r\n#menu {\r\n  display: flex;\r\n  gap: 20px;\r\n  justify-content: center;\r\n}\r\n\r\n#menu li {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 150px;\r\n  height: 40px;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n  transition: 0.3s all;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#menu li:hover {\r\n  border: 2px solid var(--border);\r\n}\r\n\r\n.activePage {\r\n  background-color: var(--border);\r\n  color: var(--text-color);\r\n}\r\n\r\n/* Footer setup */\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--footer-background);\r\n  color: var(--text-color);\r\n}\r\n\r\nfooter a {\r\n  text-decoration: none;\r\n  color: var(--text-color);\r\n  cursor: pointer;\r\n  transition: .3s all;\r\n}\r\n\r\nfooter a:hover{\r\n    color: rgba(255, 255, 255, 0.7);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/home.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".slider {\r\n  flex: 1 1 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.slides {\r\n  flex: 1 1 auto;\r\n  width: 400%;\r\n  display: flex;\r\n}\r\n\r\n.slides input {\r\n  display: none;\r\n}\r\n\r\n.slide {\r\n  width: 25%;\r\n  position: relative;\r\n  transition: 2s;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.navigation-manual {\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 60px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.manual-btn {\r\n  border: 2px solid #fff;\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  transition: 1s;\r\n}\r\n\r\n.manual-btn:not(:last-child) {\r\n  margin-right: 40px;\r\n}\r\n\r\n.manual-btn:hover {\r\n  background-color: #fff;\r\n}\r\n\r\n#radio1:checked ~ .first {\r\n  margin-left: 0;\r\n}\r\n\r\n#radio2:checked ~ .first {\r\n  margin-left: -25%;\r\n}\r\n\r\n#radio3:checked ~ .first {\r\n  margin-left: -50%;\r\n}\r\n\r\n#radio4:checked ~ .first {\r\n  margin-left: -75%;\r\n}\r\n\r\n.navigation-auto div {\r\n  border: 2px solid #20a6ff;\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  transition: 1s;\r\n}\r\n\r\n.navigation-auto {\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 60px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.navigation-auto div:not(:last-child) {\r\n  margin-right: 40px;\r\n}\r\n\r\n#radio1:checked ~ .navigation-auto .auto-btn1 {\r\n  background-color: #fff;\r\n}\r\n\r\n#radio2:checked ~ .navigation-auto .auto-btn2 {\r\n  background-color: #fff;\r\n}\r\n\r\n#radio3:checked ~ .navigation-auto .auto-btn3 {\r\n  background-color: #fff;\r\n}\r\n\r\n#radio4:checked ~ .navigation-auto .auto-btn4 {\r\n  background-color: #fff;\r\n}\r\n\r\n/* Inner Div  */\r\n.slide.first {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.innerDiv {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  flex-direction: column;\r\n  width: 600px;\r\n  color: var(--innerDiv);\r\n  font-family: var(--dancingFont);\r\n  font-weight: 700;\r\n  font-size: 4rem;\r\n}\r\n\r\n.innerDiv label{\r\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.innerDiv button {\r\n  margin-top: 50px;\r\n  width: 300px;\r\n  height: 50px;\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n  border: none;\r\n  background-color: var(--innerDiv);\r\n  transition: .75s;\r\n  color: #02b7d1;\r\n  cursor: pointer;\r\n}\r\n\r\n.innerDiv button:hover{\r\n  background-color: #02b7d1;\r\n  color: var(--innerDiv);\r\n}", "",{"version":3,"sources":["webpack://./src/css/home.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,cAAc;EACd,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA,eAAe;AACf;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,sBAAsB;EACtB,+BAA+B;EAC/B,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,iCAAiC;EACjC,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;AACxB","sourcesContent":[".slider {\r\n  flex: 1 1 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.slides {\r\n  flex: 1 1 auto;\r\n  width: 400%;\r\n  display: flex;\r\n}\r\n\r\n.slides input {\r\n  display: none;\r\n}\r\n\r\n.slide {\r\n  width: 25%;\r\n  position: relative;\r\n  transition: 2s;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.navigation-manual {\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 60px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.manual-btn {\r\n  border: 2px solid #fff;\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  transition: 1s;\r\n}\r\n\r\n.manual-btn:not(:last-child) {\r\n  margin-right: 40px;\r\n}\r\n\r\n.manual-btn:hover {\r\n  background-color: #fff;\r\n}\r\n\r\n#radio1:checked ~ .first {\r\n  margin-left: 0;\r\n}\r\n\r\n#radio2:checked ~ .first {\r\n  margin-left: -25%;\r\n}\r\n\r\n#radio3:checked ~ .first {\r\n  margin-left: -50%;\r\n}\r\n\r\n#radio4:checked ~ .first {\r\n  margin-left: -75%;\r\n}\r\n\r\n.navigation-auto div {\r\n  border: 2px solid #20a6ff;\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  transition: 1s;\r\n}\r\n\r\n.navigation-auto {\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 60px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.navigation-auto div:not(:last-child) {\r\n  margin-right: 40px;\r\n}\r\n\r\n#radio1:checked ~ .navigation-auto .auto-btn1 {\r\n  background-color: #fff;\r\n}\r\n\r\n#radio2:checked ~ .navigation-auto .auto-btn2 {\r\n  background-color: #fff;\r\n}\r\n\r\n#radio3:checked ~ .navigation-auto .auto-btn3 {\r\n  background-color: #fff;\r\n}\r\n\r\n#radio4:checked ~ .navigation-auto .auto-btn4 {\r\n  background-color: #fff;\r\n}\r\n\r\n/* Inner Div  */\r\n.slide.first {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.innerDiv {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  flex-direction: column;\r\n  width: 600px;\r\n  color: var(--innerDiv);\r\n  font-family: var(--dancingFont);\r\n  font-weight: 700;\r\n  font-size: 4rem;\r\n}\r\n\r\n.innerDiv label{\r\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.innerDiv button {\r\n  margin-top: 50px;\r\n  width: 300px;\r\n  height: 50px;\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n  border: none;\r\n  background-color: var(--innerDiv);\r\n  transition: .75s;\r\n  color: #02b7d1;\r\n  cursor: pointer;\r\n}\r\n\r\n.innerDiv button:hover{\r\n  background-color: #02b7d1;\r\n  color: var(--innerDiv);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/menu.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".containerMenu {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  gap: 20px;\r\n  margin: 30px auto;\r\n}\r\n\r\n.menuCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 300px;\r\n  border: 1px solid lightgray;\r\n}\r\n\r\n/* Flp Card styles  */\r\n.flipContainer{\r\n  background-color: transparent;\r\n  width: 300px;\r\n  height: 300px;\r\n  perspective: 1000px; /* the 3D effect */\r\n}\r\n\r\n.flipCard {\r\n   position: absolute;\r\n   width: 100%;\r\n  height: 100%;\r\n\r\n  transition: transform .5s;\r\n  transform-style: preserve-3d;\r\n}\r\n\r\n.flipContainer:hover .flipCard {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n.innerCard img {\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n/* Position the front and back side */\r\n.innerCard,\r\n.backCard {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-backface-visibility: hidden; /* Safari */\r\n  backface-visibility: hidden;\r\n}\r\n\r\n/* Style the front side (fallback if image is missing) */\r\n.innerCard {\r\n  background-color: #bbb;\r\n  color: black;\r\n}\r\n\r\n/* Style the back side */\r\n.backCard {\r\n  background-color: white;\r\n  color: black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-family: var(--dancingFont);\r\n  font-size: 1.4rem;\r\n  font-weight: 700;\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n.backCard p{\r\n  box-sizing: border-box;\r\n  padding: 8px;\r\n}\r\n\r\n.menuCard > p {\r\n  width: 80%;\r\n  text-align: center;\r\n  margin-top: 5px;\r\n  padding: 10px 10px 0px 10px;\r\n  border-top: 2px solid lightgray;\r\n  font-family: var(--dancingFont);\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/menu.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;AAC7B;;AAEA,qBAAqB;AACrB;EACE,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,mBAAmB,EAAE,kBAAkB;AACzC;;AAEA;GACG,kBAAkB;GAClB,WAAW;EACZ,YAAY;;EAEZ,yBAAyB;EACzB,4BAA4B;AAC9B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA,qCAAqC;AACrC;;EAEE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,mCAAmC,EAAE,WAAW;EAChD,2BAA2B;AAC7B;;AAEA,wDAAwD;AACxD;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA,wBAAwB;AACxB;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,+BAA+B;EAC/B,iBAAiB;EACjB,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,eAAe;EACf,2BAA2B;EAC3B,+BAA+B;EAC/B,+BAA+B;EAC/B,iBAAiB;EACjB,gBAAgB;AAClB","sourcesContent":[".containerMenu {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  gap: 20px;\r\n  margin: 30px auto;\r\n}\r\n\r\n.menuCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 300px;\r\n  border: 1px solid lightgray;\r\n}\r\n\r\n/* Flp Card styles  */\r\n.flipContainer{\r\n  background-color: transparent;\r\n  width: 300px;\r\n  height: 300px;\r\n  perspective: 1000px; /* the 3D effect */\r\n}\r\n\r\n.flipCard {\r\n   position: absolute;\r\n   width: 100%;\r\n  height: 100%;\r\n\r\n  transition: transform .5s;\r\n  transform-style: preserve-3d;\r\n}\r\n\r\n.flipContainer:hover .flipCard {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n.innerCard img {\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n/* Position the front and back side */\r\n.innerCard,\r\n.backCard {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-backface-visibility: hidden; /* Safari */\r\n  backface-visibility: hidden;\r\n}\r\n\r\n/* Style the front side (fallback if image is missing) */\r\n.innerCard {\r\n  background-color: #bbb;\r\n  color: black;\r\n}\r\n\r\n/* Style the back side */\r\n.backCard {\r\n  background-color: white;\r\n  color: black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-family: var(--dancingFont);\r\n  font-size: 1.4rem;\r\n  font-weight: 700;\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n.backCard p{\r\n  box-sizing: border-box;\r\n  padding: 8px;\r\n}\r\n\r\n.menuCard > p {\r\n  width: 80%;\r\n  text-align: center;\r\n  margin-top: 5px;\r\n  padding: 10px 10px 0px 10px;\r\n  border-top: 2px solid lightgray;\r\n  font-family: var(--dancingFont);\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Fasthand&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n  --text-color: white;\r\n  --border: black;\r\n  --backGround: #c3dadf;\r\n  --footer-background: black;\r\n  --innerDiv: #FFE4E1;\r\n  --dancingFont: 'Dancing Script', cursive;\r\n}\r\n\r\nhtml,\r\nbody{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,qBAAqB;EACrB,0BAA0B;EAC1B,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Fasthand&display=swap');\r\n\r\n:root{\r\n  --text-color: white;\r\n  --border: black;\r\n  --backGround: #c3dadf;\r\n  --footer-background: black;\r\n  --innerDiv: #FFE4E1;\r\n  --dancingFont: 'Dancing Script', cursive;\r\n}\r\n\r\nhtml,\r\nbody{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/contact.css":
/*!*****************************!*\
  !*** ./src/css/contact.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./contact.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/contact.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/header-footer.css":
/*!***********************************!*\
  !*** ./src/css/header-footer.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header-footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header-footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/home.css":
/*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/caramel.jpg":
/*!********************************!*\
  !*** ./src/assets/caramel.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "caramel.jpg";

/***/ }),

/***/ "./src/assets/coconut.jpg":
/*!********************************!*\
  !*** ./src/assets/coconut.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "coconut.jpg";

/***/ }),

/***/ "./src/assets/darkchocolate.jpg":
/*!**************************************!*\
  !*** ./src/assets/darkchocolate.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "darkchocolate.jpg";

/***/ }),

/***/ "./src/assets/icon.png":
/*!*****************************!*\
  !*** ./src/assets/icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

/***/ }),

/***/ "./src/assets/nutella.jpg":
/*!********************************!*\
  !*** ./src/assets/nutella.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "nutella.jpg";

/***/ }),

/***/ "./src/assets/oreo.jpg":
/*!*****************************!*\
  !*** ./src/assets/oreo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "oreo.jpg";

/***/ }),

/***/ "./src/assets/pistachio.jpg":
/*!**********************************!*\
  !*** ./src/assets/pistachio.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pistachio.jpg";

/***/ }),

/***/ "./src/assets/plain.jpg":
/*!******************************!*\
  !*** ./src/assets/plain.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "plain.jpg";

/***/ }),

/***/ "./src/assets/sakura.jpg":
/*!*******************************!*\
  !*** ./src/assets/sakura.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sakura.jpg";

/***/ }),

/***/ "./src/assets/slide1.jpg":
/*!*******************************!*\
  !*** ./src/assets/slide1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "slide1.jpg";

/***/ }),

/***/ "./src/assets/slide2.jpg":
/*!*******************************!*\
  !*** ./src/assets/slide2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "slide2.jpg";

/***/ }),

/***/ "./src/assets/slide3.jpg":
/*!*******************************!*\
  !*** ./src/assets/slide3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "slide3.jpg";

/***/ }),

/***/ "./src/assets/slide4.jpg":
/*!*******************************!*\
  !*** ./src/assets/slide4.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "slide4.jpg";

/***/ }),

/***/ "./src/assets/strawberry.jpg":
/*!***********************************!*\
  !*** ./src/assets/strawberry.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "strawberry.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _assets_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icon.png */ "./src/assets/icon.png");
/* harmony import */ var _js_header_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/header-menu */ "./src/js/header-menu.js");
/* harmony import */ var _js_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/home */ "./src/js/home.js");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/menu */ "./src/js/menu.js");
/* harmony import */ var _js_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/contact */ "./src/js/contact.js");
/* harmony import */ var _js_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/footer */ "./src/js/footer.js");







var iconImg = document.querySelector("link[rel~='icon']");
iconImg.href = _assets_icon_png__WEBPACK_IMPORTED_MODULE_1__;
var menuPage = new _js_menu__WEBPACK_IMPORTED_MODULE_4__["default"]();
var pagePicked = _js_home__WEBPACK_IMPORTED_MODULE_3__["default"];
function cleanPage() {
  var pageContainer = document.querySelector('.content');
  pageContainer.innerHTML = '';
}
function getMenuBtn() {
  var homeBtn = document.querySelector('#btnHome');
  var menuBtn = document.querySelector('#btnMenu');
  var contactBtn = document.querySelector('#btnContact');
  homeBtn.addEventListener('click', function () {
    cleanPage();
    changePage('home');
    initWebsite();
    getMenuBtn();
  });
  menuBtn.addEventListener('click', function () {
    cleanPage();
    changePage('menu');
    initWebsite();
    getMenuBtn();
  });
  contactBtn.addEventListener('click', function () {
    changePage('contact');
    cleanPage();
    initWebsite();
    getMenuBtn();
  });
}
function initWebsite() {
  _js_header_menu__WEBPACK_IMPORTED_MODULE_2__["default"].init();
  pagePicked.init();
  _js_footer__WEBPACK_IMPORTED_MODULE_6__["default"].init();
}
function changePage(clickedBtn) {
  if (clickedBtn === 'home') {
    pagePicked = _js_home__WEBPACK_IMPORTED_MODULE_3__["default"];
  } else if (clickedBtn === 'menu') {
    pagePicked = menuPage;
  } else if (clickedBtn === 'contact') {
    pagePicked = _js_contact__WEBPACK_IMPORTED_MODULE_5__["default"];
  }
}
initWebsite(true);
getMenuBtn();
})();

/******/ })()
;
//# sourceMappingURL=bundle36d8ad3af8a798710584.js.map