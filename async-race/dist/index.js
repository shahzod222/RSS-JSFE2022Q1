/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/cars.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/cars.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../wheel.png */ "./src/wheel.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&family=Ubuntu:wght@500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cars {\r\n    margin-top: 20px;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nform input[type='color']:disabled,\r\nform button:disabled {\r\n    cursor: default;\r\n}\r\n\r\nform input[type='text'] {\r\n    border: none;\r\n    outline: none;\r\n    width: 200px;\r\n    height: 30px;\r\n    font-size: 18px;\r\n    margin: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\nform input[type='color'] {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    background: none;\r\n    border: 0;\r\n    cursor: pointer;\r\n    height: 42px;\r\n    width: 70px;\r\n    padding: 0;\r\n    margin: 0 15px 0 0;\r\n    position: relative;\r\n    right: 2px;\r\n}\r\n\r\nform button,\r\n.race-btns button,\r\n.remove-car,\r\n.start-stop button,\r\n.update-btn,\r\n.gen-cars,\r\n.prev-btn,\r\n.next-btn {\r\n    width: 150px;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    font-size: 16px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    transition: 0.5s ease;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-car:hover,\r\n.remove-car:hover,\r\n.start-stop button:hover,\r\n.update-btn:hover,\r\n.race-btns button:hover,\r\n.gen-cars:hover {\r\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\n.add-car {\r\n    background-color: #95ba5e;\r\n}\r\n\r\n.add-car:hover {\r\n    background-color: #7ca145;\r\n}\r\n\r\n.car-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.car-info {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.car-name {\r\n    color: #a0daa9;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 22px;\r\n    margin: 0;\r\n    text-shadow: 0 0 5px black;\r\n}\r\n\r\n.car-icon {\r\n    position: relative;\r\n    animation-timing-function: linear;\r\n    width: 120px;\r\n    height: 50px;\r\n}\r\n\r\n.car-model {\r\n    width: 120px;\r\n    height: 50px;\r\n    position: relative;\r\n}\r\n\r\n.l-wheel,\r\n.r-wheel {\r\n    position: relative;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: 20px 20px;\r\n    display: block;\r\n}\r\n\r\n.car-icon svg g {\r\n    display: none;\r\n}\r\n\r\n.l-wheel {\r\n    bottom: 30px;\r\n    left: 12.5px;\r\n}\r\n\r\n.r-wheel {\r\n    bottom: 49px;\r\n    left: 89px;\r\n}\r\n\r\n.remove-car {\r\n    margin: 0 15px;\r\n    background: #e3654f;\r\n}\r\n.remove-car:hover {\r\n    background: #dd4124;\r\n}\r\n\r\n.car-start {\r\n    width: 100px;\r\n}\r\n\r\n.road {\r\n    position: relative;\r\n    bottom: 18px;\r\n    width: 100%;\r\n}\r\n\r\n.car-road {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.start-stop {\r\n    display: flex;\r\n}\r\n\r\n.start-stop button {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin: 0 10px 0 0;\r\n}\r\n\r\n.update-btn {\r\n    background: #4572ba;\r\n}\r\n\r\n.update-btn:hover {\r\n    background: #34568b;\r\n}\r\n\r\n.start-stop button[disabled] {\r\n    cursor: default;\r\n}\r\n.start-stop button[disabled]:hover {\r\n    box-shadow: none;\r\n}\r\n\r\n.race-road {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\n.finish-icon {\r\n    width: 50px;\r\n    position: relative;\r\n    bottom: 4px;\r\n    right: 170px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/cars.css"],"names":[],"mappings":"AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,SAAS;IACT,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,gBAAgB;IAChB,SAAS;IACT,eAAe;IACf,YAAY;IACZ,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;AACd;;AAEA;;;;;;;;IAQI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,iCAAiC;IACjC,qBAAqB;IACrB,eAAe;AACnB;;AAEA;;;;;;IAMI;mDAC+C;AACnD;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,qCAAqC;IACrC,eAAe;IACf,SAAS;IACT,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,mDAA+B;IAC/B,0BAA0B;IAC1B,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Ubuntu:wght@500&display=swap');\r\n\r\n.cars {\r\n    margin-top: 20px;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nform input[type='color']:disabled,\r\nform button:disabled {\r\n    cursor: default;\r\n}\r\n\r\nform input[type='text'] {\r\n    border: none;\r\n    outline: none;\r\n    width: 200px;\r\n    height: 30px;\r\n    font-size: 18px;\r\n    margin: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\nform input[type='color'] {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    background: none;\r\n    border: 0;\r\n    cursor: pointer;\r\n    height: 42px;\r\n    width: 70px;\r\n    padding: 0;\r\n    margin: 0 15px 0 0;\r\n    position: relative;\r\n    right: 2px;\r\n}\r\n\r\nform button,\r\n.race-btns button,\r\n.remove-car,\r\n.start-stop button,\r\n.update-btn,\r\n.gen-cars,\r\n.prev-btn,\r\n.next-btn {\r\n    width: 150px;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    font-size: 16px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    transition: 0.5s ease;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-car:hover,\r\n.remove-car:hover,\r\n.start-stop button:hover,\r\n.update-btn:hover,\r\n.race-btns button:hover,\r\n.gen-cars:hover {\r\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\n.add-car {\r\n    background-color: #95ba5e;\r\n}\r\n\r\n.add-car:hover {\r\n    background-color: #7ca145;\r\n}\r\n\r\n.car-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.car-info {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.car-name {\r\n    color: #a0daa9;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 22px;\r\n    margin: 0;\r\n    text-shadow: 0 0 5px black;\r\n}\r\n\r\n.car-icon {\r\n    position: relative;\r\n    animation-timing-function: linear;\r\n    width: 120px;\r\n    height: 50px;\r\n}\r\n\r\n.car-model {\r\n    width: 120px;\r\n    height: 50px;\r\n    position: relative;\r\n}\r\n\r\n.l-wheel,\r\n.r-wheel {\r\n    position: relative;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: url('../wheel.png');\r\n    background-size: 20px 20px;\r\n    display: block;\r\n}\r\n\r\n.car-icon svg g {\r\n    display: none;\r\n}\r\n\r\n.l-wheel {\r\n    bottom: 30px;\r\n    left: 12.5px;\r\n}\r\n\r\n.r-wheel {\r\n    bottom: 49px;\r\n    left: 89px;\r\n}\r\n\r\n.remove-car {\r\n    margin: 0 15px;\r\n    background: #e3654f;\r\n}\r\n.remove-car:hover {\r\n    background: #dd4124;\r\n}\r\n\r\n.car-start {\r\n    width: 100px;\r\n}\r\n\r\n.road {\r\n    position: relative;\r\n    bottom: 18px;\r\n    width: 100%;\r\n}\r\n\r\n.car-road {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.start-stop {\r\n    display: flex;\r\n}\r\n\r\n.start-stop button {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin: 0 10px 0 0;\r\n}\r\n\r\n.update-btn {\r\n    background: #4572ba;\r\n}\r\n\r\n.update-btn:hover {\r\n    background: #34568b;\r\n}\r\n\r\n.start-stop button[disabled] {\r\n    cursor: default;\r\n}\r\n.start-stop button[disabled]:hover {\r\n    box-shadow: none;\r\n}\r\n\r\n.race-road {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\n.finish-icon {\r\n    width: 50px;\r\n    position: relative;\r\n    bottom: 4px;\r\n    right: 170px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/winners.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/winners.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".winner-info {\r\n    display: flex;\r\n    margin: 5px 0;\r\n    color: white;\r\n    font-size: 15px;\r\n}\r\n\r\n.winner-info p {\r\n    margin: 0 5px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/winners.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,aAAa;IACb,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB","sourcesContent":[".winner-info {\r\n    display: flex;\r\n    margin: 5px 0;\r\n    color: white;\r\n    font-size: 15px;\r\n}\r\n\r\n.winner-info p {\r\n    margin: 0 5px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    background-color: #363945;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["body {\r\n    background-color: #363945;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/cars.css":
/*!**************************!*\
  !*** ./src/css/cars.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cars_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./cars.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/cars.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cars_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cars_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cars_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cars_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/winners.css":
/*!*****************************!*\
  !*** ./src/css/winners.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_winners_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./winners.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/winners.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_winners_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_winners_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_winners_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_winners_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/getCars&Winners/addCar.ts":
/*!***************************************!*\
  !*** ./src/getCars&Winners/addCar.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addNewCar = void 0;
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
const showCar_1 = __webpack_require__(/*! ./showCar */ "./src/getCars&Winners/showCar.ts");
function addNewCar() {
    let addCar = document.querySelector('.add-car');
    let carName = document.querySelector('.name');
    let carColor = document.querySelector('.color');
    addCar.addEventListener('click', (e) => {
        if (carName.value) {
            types_1.garage.addCar(carName.value, carColor.value);
            (0, showCar_1.showCar)();
            e.preventDefault();
            carName.value = '';
            carColor.value = '#ffffff';
        }
    });
}
exports.addNewCar = addNewCar;


/***/ }),

/***/ "./src/getCars&Winners/deleteCar.ts":
/*!******************************************!*\
  !*** ./src/getCars&Winners/deleteCar.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteCar = void 0;
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
const showCar_1 = __webpack_require__(/*! ./showCar */ "./src/getCars&Winners/showCar.ts");
function deleteCar() {
    return __awaiter(this, void 0, void 0, function* () {
        let deleteBtns = document.querySelectorAll('.remove-car');
        deleteBtns.forEach((el) => {
            el.addEventListener('click', () => {
                types_1.garage.removeCar(Number(el.name));
                types_1.winners.removeWinner(Number(el.name));
                (0, showCar_1.showCar)();
            });
        });
    });
}
exports.deleteCar = deleteCar;


/***/ }),

/***/ "./src/getCars&Winners/generate100Cars.ts":
/*!************************************************!*\
  !*** ./src/getCars&Winners/generate100Cars.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generate100Cars = void 0;
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
const showCar_1 = __webpack_require__(/*! ./showCar */ "./src/getCars&Winners/showCar.ts");
function generate100Cars() {
    let genBtn = document.querySelector('.gen-cars');
    genBtn.addEventListener('click', () => {
        generateCar();
    });
}
exports.generate100Cars = generate100Cars;
function generateCar() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch('https://private-161df-carsapi1.apiary-mock.com/cars');
        let cars = (yield res.json());
        for (let i = 0; i < 100; i++) {
            let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            let randomNumber = Math.floor(Math.random() * cars.length);
            let name = `${capFirstLetter(cars[randomNumber].make)} ${capFirstLetter(cars[randomNumber].model)}`;
            types_1.garage.addCar(name, randomColor);
            (0, showCar_1.showCar)();
        }
    });
}
function capFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


/***/ }),

/***/ "./src/getCars&Winners/pagination.ts":
/*!*******************************************!*\
  !*** ./src/getCars&Winners/pagination.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pagination = void 0;
const renderHtml_1 = __webpack_require__(/*! ../others/renderHtml */ "./src/others/renderHtml.ts");
const showCar_1 = __webpack_require__(/*! ./showCar */ "./src/getCars&Winners/showCar.ts");
function pagination() {
    renderHtml_1.nextPage.addEventListener('click', () => {
        renderHtml_1.pageNumber.innerHTML = `${Number(renderHtml_1.pageNumber.innerHTML) + 1}`;
        (0, showCar_1.showCar)();
    });
    renderHtml_1.prevPage.addEventListener('click', () => {
        renderHtml_1.pageNumber.innerHTML = `${Number(renderHtml_1.pageNumber.innerHTML) - 1}`;
        (0, showCar_1.showCar)();
    });
}
exports.pagination = pagination;


/***/ }),

/***/ "./src/getCars&Winners/race.ts":
/*!*************************************!*\
  !*** ./src/getCars&Winners/race.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.race = void 0;
const renderHtml_1 = __webpack_require__(/*! ../others/renderHtml */ "./src/others/renderHtml.ts");
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
const startStop_1 = __webpack_require__(/*! ./startStop */ "./src/getCars&Winners/startStop.ts");
function race() {
    let startBtn = document.querySelector('.start-race');
    let resetBtn = document.querySelector('.reset-race');
    resetBtn.disabled = true;
    startBtn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
        startBtn.disabled = true;
        resetBtn.disabled = false;
        let res = yield types_1.garage.getLimitedCars(Number(renderHtml_1.pageNumber.innerHTML));
        let cars = (yield res.json());
        cars.forEach((el) => {
            let ABtn = (0, startStop_1.getButton)(document.querySelectorAll('.car-start'), String(el.id));
            let stopBtns = document.querySelectorAll('.car-stop');
            (0, startStop_1.start)(ABtn, String(el.id), stopBtns, startBtn);
        });
    }));
    resetBtn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
        resetBtn.disabled = true;
        startBtn.disabled = false;
        let res = yield types_1.garage.getLimitedCars(Number(renderHtml_1.pageNumber.innerHTML));
        let cars = (yield res.json());
        cars.forEach((el) => {
            let startBtns = document.querySelectorAll('.car-start');
            let stopBtn = (0, startStop_1.getButton)(document.querySelectorAll('.car-stop'), String(el.id));
            (0, startStop_1.stopRace)(stopBtn, startBtns, String(el.id));
        });
    }));
}
exports.race = race;


/***/ }),

/***/ "./src/getCars&Winners/showCar.ts":
/*!****************************************!*\
  !*** ./src/getCars&Winners/showCar.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showCar = void 0;
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
const deleteCar_1 = __webpack_require__(/*! ./deleteCar */ "./src/getCars&Winners/deleteCar.ts");
const svgIcons_1 = __webpack_require__(/*! ../others/svgIcons */ "./src/others/svgIcons.ts");
const startStop_1 = __webpack_require__(/*! ./startStop */ "./src/getCars&Winners/startStop.ts");
const renderHtml_1 = __webpack_require__(/*! ../others/renderHtml */ "./src/others/renderHtml.ts");
const updateCar_1 = __webpack_require__(/*! ./updateCar */ "./src/getCars&Winners/updateCar.ts");
__webpack_require__(/*! ../css/cars.css */ "./src/css/cars.css");
function showCar() {
    return __awaiter(this, void 0, void 0, function* () {
        const resAllCars = yield types_1.garage.getAllCars();
        const allCars = (yield resAllCars.json());
        const resPagedCars = yield types_1.garage.getLimitedCars(Number(renderHtml_1.pageNumber.innerHTML));
        const data = (yield resPagedCars.json());
        renderHtml_1.cars.innerHTML = '';
        renderHtml_1.garageLength.innerHTML = `Garage: ${String(allCars.length)}`;
        for (let i = 0; i < data.length; i++) {
            showCarInHtml(data[i].name, data[i].color, data[i].id);
        }
        checkPagBtns(allCars.length);
        (0, startStop_1.startCar)();
        (0, startStop_1.stopCar)();
        (0, updateCar_1.updateCar)();
    });
}
exports.showCar = showCar;
function showCarInHtml(model, color, id) {
    return __awaiter(this, void 0, void 0, function* () {
        let carBlock = document.createElement('div');
        let carInfo = document.createElement('div');
        let startStop = document.createElement('div');
        let raceRoad = document.createElement('div');
        let carRoad = document.createElement('div');
        let car = document.createElement('div');
        let deleteBtn = document.createElement('button');
        let startCar = document.createElement('button');
        let stopCar = document.createElement('button');
        let updateBtn = document.createElement('button');
        let carName = document.createElement('p');
        let carImg = document.createElement('span');
        let road = document.createElement('hr');
        let finishFlag = document.createElement('span');
        let lWheel = document.createElement('span');
        let rWheel = document.createElement('span');
        carName.innerHTML = model;
        deleteBtn.innerHTML = 'Remove Car';
        startCar.innerHTML = 'A';
        stopCar.innerHTML = 'B';
        carImg.innerHTML = (0, svgIcons_1.svg)(color);
        finishFlag.innerHTML = svgIcons_1.finishIcon;
        updateBtn.innerHTML = 'Update Car';
        deleteBtn.name = String(id);
        startCar.name = String(id);
        stopCar.name = String(id);
        car.id = String(id);
        carImg.id = `car-${String(id)}`;
        updateBtn.name = String(id);
        carName.id = `name-${String(id)}`;
        carBlock.className = 'car-block';
        carInfo.className = 'car-info';
        deleteBtn.className = 'remove-car';
        carName.className = 'car-name';
        carImg.className = `car-icon ${model}`;
        road.className = 'road';
        startCar.className = 'car-start';
        stopCar.className = 'car-stop';
        carRoad.className = 'car-road';
        startStop.className = 'start-stop';
        raceRoad.className = 'race-road';
        finishFlag.className = 'finish-icon';
        lWheel.className = 'l-wheel';
        rWheel.className = 'r-wheel';
        updateBtn.className = 'update-btn';
        car.className = 'car-model';
        stopCar.disabled = true;
        carBlock.append(carInfo);
        carBlock.append(carRoad);
        carBlock.append(road);
        carInfo.append(updateBtn);
        carInfo.append(deleteBtn);
        carInfo.append(carName);
        carRoad.append(startStop);
        carRoad.append(raceRoad);
        startStop.append(startCar);
        startStop.append(stopCar);
        raceRoad.append(car);
        raceRoad.append(finishFlag);
        car.append(carImg);
        carImg.append(lWheel);
        carImg.append(rWheel);
        renderHtml_1.cars.append(carBlock);
        (0, deleteCar_1.deleteCar)();
    });
}
function checkPagBtns(allCarsLength) {
    if (Number(renderHtml_1.pageNumber.innerHTML) * 4 >= allCarsLength) {
        renderHtml_1.nextPage.disabled = true;
    }
    else {
        renderHtml_1.nextPage.disabled = false;
    }
    if (Number(renderHtml_1.pageNumber.innerHTML) === 1) {
        renderHtml_1.prevPage.disabled = true;
    }
    else {
        renderHtml_1.prevPage.disabled = false;
    }
}


/***/ }),

/***/ "./src/getCars&Winners/showWinners.ts":
/*!********************************************!*\
  !*** ./src/getCars&Winners/showWinners.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showWinners = void 0;
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
__webpack_require__(/*! ../css/winners.css */ "./src/css/winners.css");
const renderHtml_1 = __webpack_require__(/*! ../others/renderHtml */ "./src/others/renderHtml.ts");
function showWinners() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield types_1.winners.getAllWiners();
        const allWinners = (yield res.json());
        renderHtml_1.winnersBlock.innerHTML = '';
        for (let i = 0; i < allWinners.length; i++) {
            showWinnerInHtml(allWinners[i].id, allWinners[i].wins, allWinners[i].time);
        }
    });
}
exports.showWinners = showWinners;
function showWinnerInHtml(id, wins, time) {
    let carName = document.querySelector(`.car-name[id="name-${id}"]`).innerHTML;
    let winner = document.createElement('div');
    let car = document.createElement('p');
    let carId = document.createElement('p');
    let winsCount = document.createElement('p');
    let bestTime = document.createElement('p');
    winner.className = 'winner-info';
    car.innerHTML = `Car: ${carName}`;
    carId.innerHTML = `Car ID: ${String(id)}`;
    winsCount.innerHTML = `Wins: ${String(wins)}`;
    bestTime.innerHTML = `Best Time: ${String(time)}`;
    winner.append(car);
    winner.append(carId);
    winner.append(winsCount);
    winner.append(bestTime);
    renderHtml_1.winnersBlock.append(winner);
}


/***/ }),

/***/ "./src/getCars&Winners/startStop.ts":
/*!******************************************!*\
  !*** ./src/getCars&Winners/startStop.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getButton = exports.start = exports.stopRace = exports.stopCar = exports.startCar = void 0;
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
const showWinners_1 = __webpack_require__(/*! ./showWinners */ "./src/getCars&Winners/showWinners.ts");
function startCar() {
    let startBtns = document.querySelectorAll('.car-start');
    let stopBtns = document.querySelectorAll('.car-stop');
    startBtns.forEach((el) => {
        el.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            start(el, el.name, stopBtns);
        }));
    });
}
exports.startCar = startCar;
function stopCar() {
    let startBtns = document.querySelectorAll('.car-start');
    let stopBtns = document.querySelectorAll('.car-stop');
    stopBtns.forEach((el) => {
        el.addEventListener('click', () => {
            stopRace(el, startBtns, el.name);
        });
    });
}
exports.stopCar = stopCar;
let winner = 0;
function stopRace(el, startBtns, id) {
    let icon = document.getElementById(id);
    winner = 0;
    getButton(startBtns, id).disabled = false;
    el.disabled = true;
    icon.style.left = '0';
    types_1.enigine.stop(Number(id));
}
exports.stopRace = stopRace;
function start(el, id, stopBtns, raceBtn) {
    return __awaiter(this, void 0, void 0, function* () {
        let car = document.getElementById(id);
        let icon = car.querySelector(`#car-${id}`);
        let parent = document.querySelector('.race-road');
        let stopBtn = getButton(stopBtns, id);
        let lWheel = icon.querySelector('.l-wheel');
        let rWheel = icon.querySelector('.r-wheel');
        stopBtn.disabled = false;
        el.disabled = true;
        let start = (yield types_1.enigine.start(Number(id)));
        let time = start.distance / start.velocity;
        let animation = car.animate([
            {
                left: '0px',
            },
            {
                left: `${parent.clientWidth - 163}px`,
            },
        ], {
            duration: time,
        });
        let lW = lWheel.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: time });
        let rW = rWheel.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: time });
        let elPosition = setTimeout(() => {
            car.style.left = `${parent.clientWidth - 163}px`;
        }, time);
        let stopClicked = false;
        let resetClicked = false;
        stopBtn.addEventListener('click', () => {
            lW.cancel();
            rW.cancel();
            animation.cancel();
            stopClicked = true;
        });
        let driveStatus = yield types_1.enigine.drive(Number(id));
        if (driveStatus === 500) {
            lW.cancel();
            rW.cancel();
            animation.pause();
            car.style.left = getComputedStyle(car).left;
            animation.cancel();
            clearTimeout(elPosition);
            if (raceBtn)
                raceBtn.disabled = true;
        }
        else if (driveStatus === 200 && !stopClicked) {
            stopBtn.disabled = true;
            el.disabled = false;
            types_1.enigine.stop(Number(id));
            if (raceBtn) {
                stopBtn.disabled = false;
                el.disabled = true;
            }
            if (!winner && raceBtn) {
                winner = Number(car.id);
                let add = types_1.winners.addWinner(winner, Math.round(time / 1000));
                if ((yield add).status === 500) {
                    let get = (yield types_1.winners.getWinner(winner));
                    let winCount = get.wins + 1;
                    let bestTime = Math.round(time / 1000) > get.time ? get.time : Math.round(time / 1000);
                    types_1.winners.updateWinner(winner, winCount, bestTime);
                }
                (0, showWinners_1.showWinners)();
            }
        }
    });
}
exports.start = start;
function getButton(b, n) {
    let btn = [...b].find((el) => el.name === n);
    return btn;
}
exports.getButton = getButton;


/***/ }),

/***/ "./src/getCars&Winners/updateCar.ts":
/*!******************************************!*\
  !*** ./src/getCars&Winners/updateCar.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateCar = void 0;
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
const showCar_1 = __webpack_require__(/*! ./showCar */ "./src/getCars&Winners/showCar.ts");
let carId = 0;
function updateCar() {
    let updateCarBtn = document.querySelector('.update-car');
    let carName = document.querySelector('.update-name');
    let carColor = document.querySelector('.update-color');
    let updateBtns = document.querySelectorAll('.update-btn');
    updateBtns.forEach((el) => {
        el.addEventListener('click', () => {
            carName.disabled = false;
            carColor.disabled = false;
            carColor.value = '#ffffff';
            updateCarBtn.disabled = false;
            carId = Number(el.name);
        });
    });
    updateCarBtn.addEventListener('click', () => {
        if (carName.value) {
            console.log(carId);
            types_1.garage.updateCar(carId, carName.value, carColor.value);
            (0, showCar_1.showCar)();
            carName.disabled = true;
            carName.value = '';
            carColor.disabled = true;
            carColor.value = '#808080';
            updateCarBtn.disabled = true;
        }
    });
}
exports.updateCar = updateCar;


/***/ }),

/***/ "./src/others/renderHtml.ts":
/*!**********************************!*\
  !*** ./src/others/renderHtml.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderHtml = exports.winnersBlock = exports.nextPage = exports.prevPage = exports.pageNumber = exports.garageLength = exports.cars = void 0;
const addCar_1 = __webpack_require__(/*! ../getCars&Winners/addCar */ "./src/getCars&Winners/addCar.ts");
const generate100Cars_1 = __webpack_require__(/*! ../getCars&Winners/generate100Cars */ "./src/getCars&Winners/generate100Cars.ts");
const pagination_1 = __webpack_require__(/*! ../getCars&Winners/pagination */ "./src/getCars&Winners/pagination.ts");
const race_1 = __webpack_require__(/*! ../getCars&Winners/race */ "./src/getCars&Winners/race.ts");
const showCar_1 = __webpack_require__(/*! ../getCars&Winners/showCar */ "./src/getCars&Winners/showCar.ts");
const view_1 = __webpack_require__(/*! ../views/view */ "./src/views/view.ts");
exports.cars = document.createElement('div');
exports.garageLength = document.createElement('p');
exports.pageNumber = document.createElement('p');
exports.prevPage = document.createElement('button');
exports.nextPage = document.createElement('button');
exports.winnersBlock = document.createElement('div');
function renderHtml() {
    return __awaiter(this, void 0, void 0, function* () {
        let garageBtn = document.createElement('button');
        let winnersBtn = document.createElement('button');
        let generateBtn = document.createElement('button');
        let garageBlock = document.createElement('div');
        let raceBtns = document.createElement('div');
        garageBtn.className = 'garage-view';
        winnersBtn.className = 'winners-view';
        exports.winnersBlock.className = 'winners hidden';
        garageBlock.className = 'garage';
        raceBtns.className = 'race-btns';
        exports.cars.className = 'cars';
        generateBtn.className = 'gen-cars';
        exports.pageNumber.className = 'page-num';
        exports.prevPage.className = 'prev-btn';
        exports.nextPage.className = 'next-btn';
        garageBtn.innerHTML = 'Garage';
        winnersBtn.innerHTML = 'Winners';
        exports.pageNumber.innerHTML = '1';
        generateBtn.innerHTML = 'Generate 100 Cars';
        exports.prevPage.innerHTML = 'Previos';
        exports.nextPage.innerHTML = 'Next';
        for (let i = 0; i < 2; i++) {
            let form = document.createElement('form');
            let inputText = document.createElement('input');
            let inputColor = document.createElement('input');
            let submitBtn = document.createElement('button');
            let raceBtn = document.createElement('button');
            form.action = '#';
            inputText.type = 'text';
            inputColor.type = 'color';
            submitBtn.type = 'submit';
            inputText.required = true;
            if (i === 0) {
                inputText.className = 'name';
                inputColor.className = 'color';
                submitBtn.className = 'add-car';
                raceBtn.className = 'start-race';
                raceBtn.innerHTML = 'Start Race';
                submitBtn.innerHTML = 'Add New Car';
                inputColor.value = '#ffffff';
            }
            else {
                inputText.className = 'update-name';
                inputColor.className = 'update-color';
                submitBtn.className = 'update-car';
                raceBtn.className = 'reset-race';
                raceBtn.innerHTML = 'Reset Race';
                submitBtn.innerHTML = 'Update Car';
                inputColor.value = '#808080';
                inputColor.disabled = true;
                inputText.disabled = true;
                submitBtn.disabled = true;
            }
            garageBlock.append(form);
            form.append(inputText);
            form.append(inputColor);
            form.append(submitBtn);
            raceBtns.append(raceBtn);
        }
        garageBlock.append(raceBtns);
        garageBlock.append(generateBtn);
        garageBlock.append(exports.garageLength);
        garageBlock.append(exports.pageNumber);
        garageBlock.append(exports.cars);
        garageBlock.append(exports.prevPage);
        garageBlock.append(exports.nextPage);
        document.body.append(garageBtn);
        document.body.append(winnersBtn);
        document.body.append(garageBlock);
        document.body.append(exports.winnersBlock);
        (0, view_1.showHide)();
        (0, addCar_1.addNewCar)();
        (0, race_1.race)();
        (0, generate100Cars_1.generate100Cars)();
        (0, showCar_1.showCar)();
        (0, pagination_1.pagination)();
    });
}
exports.renderHtml = renderHtml;


/***/ }),

/***/ "./src/others/svgIcons.ts":
/*!********************************!*\
  !*** ./src/others/svgIcons.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.finishIcon = exports.svg = void 0;
function svg(color) {
    return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 160" width="120" height="50">
<path fill=${color} fill-rule="evenodd" d="m4.1 67l3.9-3.6c0 0 11.6 2.1 19.5 1.8 7.8-0.3 16.4-11.7 8-11.5-2 0-4.2-0.4-6.3-1q0 0 0 
    0c-7.1-1.9-14-6.1-14-6.1l-4.2-9c0 0-4.4-7.5 4.6-6.9 9 0.6 18.9 4.4 18.9 4.4 0 0 87.6-21.5 104.7-24.8 17.1-3.3 
    89.6-17.6 153.3 14.5 0 0 40.2 18.9 44.1 19.2 0 0 119.9 5.8 159.4 41 0 0 0.6 12.9 0 21.3 0 0 1.8 5.4-1.3 10.6 0 0 2.1 
    4.2-1.4 3.6l-1.1 8.7c0 0-4.2-2.1-6.1 4.9 0 0-22.1 5.4-28.1 4.1 0 0 6.7-66.9-41.5-66.9-48.1 0-52.7 42.5-53.4 67.1l-1.8 
    1.5c0 0-212.6-6.3-218.3-2.8 0 0-2.1 0-1.7-4 0 0 6.9-65.5-50.2-65.5-57.2 0-44.2 61.3-44.2 61.3 0 0-42.8-9.6-36.3-16.1 0 
    0-14.9-20.3-6.5-45.8zm366.1 5.1c3.2-3.9-41.9-4.4-41.9-4.4 0 0-5 4.8-3.3 9.3 1.6 4.5 25.1 3.8 31.8 3.1 6.8-0.8 13.4-8 
    13.4-8zm-81-19.7c0 0 22.5 0.2 25.6 0 3-0.3 1.9-1.5 1.9-1.5 0 0-5.6-7.7-44.6-24.3-38.9-16.5-62-14.1-62-14.1-107.7 3-87.9 
    16.1-87.9 16.1l8.1 9.4 25.2 4.8 110 6.9zm-102.6 7.1c0 1.2 1 2.2 2.2 2.2h17.7c1.2 0 2.2-1 2.2-2.2 0-1.3-1-2.3-2.2-2.3h-17.7c-1.2 
    0-2.2 1-2.2 2.3zm134.4 18.7c0 0 0.8 34.1-3 42.3l-94.8-3c0 0-28.7 1-39.4-19.8 0 0-9.1-19-10.5-25.5 0.3 2.2 4 37.5 22.9 42.7 19.7 
    5.4 124.8 8.2 124.8 8.2 0 0 4.1-35.1 0-44.9zm46 18q0.2-0.3 0.5-0.8 0.6-0.9 1.3-2 0.2-0.3 0.4-0.7 0.5-0.7 1.1-1.5 0.2-0.3 
    0.4-0.6c0.9-1.1 1.8-2.3 2.8-3.5q0.4-0.5 0.8-0.9c2.2-2.5 4.7-5 7.7-7.4q0.4-0.3 0.8-0.6 0.4-0.3 0.8-0.6 1.1-0.8 2.3-1.6 0.8-0.5 
    1.6-1.1 1.3-0.7 2.6-1.4 0.9-0.5 1.9-0.9 0.4-0.2 0.8-0.4 0.4-0.2 0.8-0.4 0.8-0.3 1.6-0.7 1-0.3 1.9-0.6 1.3-0.5 2.6-0.8 0.4-0.2 
    0.9-0.3 1-0.2 2.1-0.5 1.1-0.2 2.2-0.4 0.7-0.1 1.4-0.2 0.1 0 0.1 0 0.6-0.1 1.2-0.1 1-0.1 2.1-0.2 0.7 0 1.5 0 1.5-0.1 3.1 0c34.1 
    1 44 31.3 44 31.3h8.2c0 0 9.9-5.8 19.8-5.1 10 0.8 3.3-4.3-8.4-6.5-11.7-2.1-22.6-14.4-24.4-17.7-1.8-3.3-45.4-14-72.6-12.8 0 0 40 
    2 70 14.9 0 0 1.1 4.1-11.7 0q-1.6-0.5-3.7-1.3-0.7-0.2-1.5-0.5-2.2-0.8-4.9-1.6-1.7-0.5-3.6-1-0.8-0.2-1.5-0.4-0.7-0.2-1.5-0.3-0.7-0.2-1.5-0.3-0.8-0.2-1.6-0.3-0.9-0.2-1.9-0.3-1-0.2-2-0.2-0.6-0.1-1.1-0.1-0.7-0.1-1.4-0.1-0.1 0-0.3 
    0-1-0.1-2.1-0.1-1 0-2 0.1-1.1 0-2.1 0.1-0.7 0.1-1.4 0.2-0.6 0-1.1 0.1-0.7 0.1-1.5 0.2-0.2 0.1-0.4 0.1-0.7 0.1-1.3 
    0.3c-0.5 0.1-0.9 0.2-1.4 0.4q-0.7 0.1-1.4 0.4-0.8 0.2-1.5 0.4-1.4 0.5-2.9 1.1-0.7 0.3-1.4 0.7-1.6 0.7-3.2 1.7-0.5 
    0.3-1.1 0.7c-0.2 0.1-0.4 0.3-0.6 0.4q-0.4 0.2-0.7 0.5-0.3 0.2-0.6 0.4 0 0 0 0-0.5 0.3-1 0.6-0.5 0.4-1 0.8-0.1 0.1-0.2 
    0.2-0.4 0.3-0.7 0.6-0.6 0.5-1.2 1-0.6 0.5-1.1 1-0.6 0.5-1.1 1.1-0.1 0.1-0.3 0.2-0.7 0.7-1.4 1.5-1.2 1.3-2.4 2.7-0.4 
    0.6-0.9 1.2-1.7 2.2-3.4 4.7-0.7 0.9-1.3 2-1.5 2.3-2.9 5-0.2 0.3-0.3 0.6 0.1-0.1 0.2-0.4zm125.8-8.5c-11.7-13.7-33.5-15.6-33.5-15.6 
    16.3 14.6 33.5 15.6 33.5 15.6zm-345.7 42.5l210.1 4.4c8.4-3.4-23.7-5.1-23.7-5.1 0 0-144.4-5.2-157.6-5.2-13.3 
    0-18.6 1.3-26.3 2.6-7.6 1.3-2.5 3.3-2.5 3.3zm-5.6-32.5c33.7-21.2 17.8-28.8 17.8-28.8 7.9-1.4 152.8 2.9 161.3 
    3.2-8.3-0.4-142.8-6.9-166.7-6.9-24.6 0.1-25.4 8.6-25.4 8.6-21.8-10.9-32.1-8.3-32.1-8.3 33.4 1.4 45.1 32.2 45.1 
    32.2zm-106.6-3.8c3.3 3.8 8.6 5.7 8.6 5.1 1-12.6 10.1-21.6 10.1-21.6-16 4.2-47.2-9-47.2-9-3.2 4.7-1.9 11.9-1.9 
    11.9 18.4 1.1 27.2 9.7 30.4 13.6zm183.3-79c33.3 0.8 93.3 34.8 93.3 34.8-2.1-0.3-19.4 0.4-26.3-1.9-2-0.6-3.2-1.6-2.9-2.8 
    1.3-5.6-1.8-8.2-1.8-8.2 0 0-10.1-6.4-15.9-3.1 0 0-31.7-21.6-84.9-11.4 0 0-3.8 0.4-0.8 5.2 2.7 4.1 5.8 12.7 
    6.6 14.8-17.4-1.2-31.6-2.4-34.8-3.2-9.7-2.3-16.3 0.5-22.2-9.7-5.8-10.2 56.3-15.3 89.7-14.5zm-68.5 18.7c3.1 3 14.5 
    4.4 14.5 4.4 0 0 2.2-3.6-3.2-11.3-0.4-0.5-11.3 3.2-11.3 3.2 0 0-3 0.6 0 3.7zm179.9 38.5h33.2c0.8 0 1.4 0.6 1.4 1.4 0 
    0.7-0.6 1.3-1.4 1.3h-33.2c-0.8 0-1.4-0.6-1.4-1.3 0-0.8 0.6-1.4 1.4-1.4zm-142.5-30.8c0 0 57.2 5 65.6 4.3 0 0-0.2-7.3 
    4.7-6.9 0 0-4.1 4.8 0.1 7.8 0 0-25.6 2.1-70.4-5.2z"/>
<path d="m492.5 125.3c0 0-3.9 0.3-4 4.4l-26 4.7c0 0 47.9-1.2 30-9.1z"/>
<path d="m365.5 99q0.2-0.4 0.4-0.7-0.3 0.4-0.4 0.7z"/>
<path d="m329.5 72.1h33.3c0.8 0 1.4 0.6 1.4 1.3 0 0.8-0.6 1.4-1.4 1.4h-33.3c-0.7 0-1.3-0.6-1.3-1.4 0-0.7 0.6-1.3 1.3-1.3z"/>
<path d="m329.5 72.1h33.3c0.8 0 1.4 0.6 1.4 1.3 0 0.8-0.6 1.4-1.4 1.4h-33.3c-0.7 0-1.3-0.6-1.3-1.4 0-0.7 0.6-1.3 1.3-1.3z"/>
<path fill-rule="evenodd" d="m218.1 14.9c33.4 0.7 93.4 34.8 93.4 34.8-2.1-0.3-19.4 0.4-26.3-1.9-2-0.7-3.2-1.6-2.9-2.8 
    1.3-5.6-1.8-8.2-1.8-8.2 0 0-10.2-6.4-15.9-3.1 0 0-31.7-21.6-84.9-11.4 0 0-3.8 0.4-0.8 5.1 2.7 4.2 5.8 12.8 6.5 
    14.9-17.3-1.2-31.5-2.4-34.8-3.2-9.6-2.3-16.3 0.5-22.1-9.7-5.9-10.2 56.3-15.3 89.6-14.5zm-68.4 18.7c3.1 3 14.5 4.4 14.5 
    4.4 0 0 2.2-3.7-3.2-11.3-0.4-0.5-11.3 3.2-11.3 3.2 0 0-3.1 0.6 0 3.7z"/>
<path fill-rule="evenodd" d="m185.4 42.3c-17.3-1.2-31.5-2.4-34.8-3.2-9.6-2.3-16.3 0.5-22.1-9.7-5.9-10.2 56.3-15.3 89.6-14.5 
    33.4 0.7 93.4 34.8 93.4 34.8-2.1-0.3-19.4 0.4-26.3-1.9-2-0.7-3.2-1.6-2.9-2.8 1.3-5.6-1.8-8.2-1.8-8.2 0 0-10.2-6.4-15.9-3.1 0 
    0-31.7-21.6-84.9-11.4 0 0-3.8 0.4-0.8 5.1 2.7 4.2 5.8 12.8 6.5 14.9zm-35.7-8.7c3.1 3 14.5 4.4 14.5 4.4 
    0 0 2.2-3.7-3.2-11.3-0.4-0.5-11.3 3.2-11.3 3.2 0 0-3.1 0.6 0 3.7z"/>
<path d="m276.8 36.1c7.2 3.2 4 8.6 3.9 10.3 0 1.8-16.1 4.5-18.2-1.2-2-5.6 2-10.9 2-10.9 0 0 5.2-1.4 12.3 1.8z"/>
<g>
<path fill-rule="evenodd" d="m411.5 77.2c22.1 0 40.1 18 40.1 40.2 0 22.2-18 40.2-40.1 40.2-22.2 0-40.2-18-40.2-40.2 0-22.2 18-40.2 
    40.2-40.2zm-32.5 40.2c0 18 14.5 32.5 32.5 32.5 17.9 0 32.4-14.5 32.4-32.5 0-18-14.5-32.5-32.4-32.5-18 0-32.5 14.5-32.5 
    32.5zm10-20.7c0 2.5 1.9 9.1 18.5 18.3-0.4 0.6-0.6 1.3-0.6 2-18.6-1.5-24.1 2.7-25.7 5q-0.3-2.2-0.3-4.6c0-8 3-15.3 
    8.1-20.7zm18.9 23.7c0.5 0.6 1.1 1 1.7 1.3-8.8 15.7-7.6 22.6-6.3 25.2-9-2.4-16.3-8.9-19.9-17.3 2.1 1.1 8.7 2.5 
    24.5-9.2zm3.6-33.6c4.9 0 9.5 1.1 13.6 3.2-2.6 0.9-8.2 5-12.2 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 
    8.5-3 13.3-3zm1.4 35q1.1-0.3 1.8-1.1c13.8 12.8 20.8 12.7 23.3 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 
    3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q-0.1 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 
    0-0.5 0-0.9-0.3-1.7zm-6.1 5.9l-0.1 0.1q0-0.1 0.1-0.1z"/>
<path d="m415.8 115.7c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q-0.1 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 
    0-0.5 0-0.9-0.3-1.7z"/>
<path d="m412.9 121.8q1.1-0.3 1.8-1.1c13.8 12.8 20.8 12.7 23.3 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9z"/>
<path d="m409.7 121.6l-0.1 0.1q0-0.1 0.1-0.1z"/>
<path d="m411.5 86.8c4.9 0 9.5 1.1 13.6 3.2-2.6 0.9-8.2 5-12.2 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 
    0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3z"/>
<path d="m407.9 120.4c0.5 0.6 1.1 1 1.7 1.3-8.8 15.7-7.6 22.6-6.3 25.2-9-2.4-16.3-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.5-9.2z"/>
<path d="m389 96.7c0 2.5 1.9 9.1 18.5 18.3-0.4 0.6-0.6 1.3-0.6 2-18.6-1.5-24.1 2.7-25.7 5q-0.3-2.2-0.3-4.6c0-8 3-15.3 8.1-20.7z"/>
<path fill-rule="evenodd" fill="white" d="m389 96.7c0 2.5 1.9 9.1 18.5 18.3-0.4 0.6-0.6 1.3-0.6 2-18.6-1.5-24.1 2.7-25.7 
    5q-0.3-2.2-0.3-4.6c0-8 3-15.3 8.1-20.7zm18.9 23.7c0.5 0.6 1.1 1 1.7 1.3-8.8 15.7-7.6 22.6-6.3 25.2-9-2.4-16.3-8.9-19.9-17.3 
    2.1 1.1 8.7 2.5 24.5-9.2zm3.6-33.6c4.9 0 9.5 1.1 13.6 3.2-2.6 0.9-8.2 5-12.2 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 
    0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3zm1.4 35q1.1-0.3 1.8-1.1c13.8 12.8 20.8 12.7 23.3 11.9-4.5 7.9-12.4 
    13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q-0.1 
    4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7zm-6.1 5.9l-0.1 0.1q0-0.1 0.1-0.1z"/>
<path d="m406.8 117.1q0 0 0.1-0.1c0-0.7 0.2-1.4 0.6-2q0 0 0-0.1c0.7-1 1.8-1.8 3.1-2q0 0 0.1-0.1 0.4 0 0.8 0 0.7 0 1.4 0.2 0.1 
    0 0.1 0.1c1.2 0.4 2.2 1.3 2.7 2.5q0.1 0 0.1 0.1 0.3 0.8 0.3 1.7 0 0.3 0 0.5 0 0.1 0 0.1c-0.2 1-0.6 1.9-1.3 2.6q0 0.1-0.1 
    0.1-0.7 0.8-1.8 1.1 0 0 0 0-0.7 0.3-1.4 0.3c-0.7 0-1.3-0.2-1.9-0.4l0.1-0.1q-0.1 0-0.1 0.1c-0.6-0.3-1.2-0.7-1.7-1.3q0 0 
    0-0.1c-0.7-0.8-1.1-1.8-1.1-2.9q0-0.1 0-0.3z"/>
<path d="m409.7 121.6l-0.1 0.1q0-0.1 0.1-0.1z"/>
<path d="m409.7 121.6l-0.1 0.1q0-0.1 0.1-0.1z"/>
</g>
<g>
<path fill-rule="evenodd" d="m92.1 72.8c22.2 0 40.1 18 40.1 40.2 0 22.2-17.9 40.2-40.1 40.2-22.2 0-40.1-18-40.1-40.2 0-22.2 
    17.9-40.2 40.1-40.2zm-32.4 40.2c0 18 14.5 32.5 32.4 32.5 17.9 0 32.4-14.5 32.4-32.5 0-18-14.5-32.5-32.4-32.5-17.9 0-32.4 
    14.5-32.4 32.5zm9.9-20.7c0 2.5 1.9 9.1 18.5 18.3-0.3 0.6-0.6 1.3-0.6 2.1-18.5-1.6-24 2.6-25.7 4.9q-0.3-2.2-0.3-4.6c0-8 3.1-15.3 
    8.1-20.7zm19 23.7c0.4 0.6 1 1 1.7 1.3-8.8 15.7-7.7 22.6-6.4 25.2-8.9-2.4-16.2-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.6-9.2zm3.5-33.6c4.9 
    0 9.6 1.2 13.7 3.2-2.7 0.9-8.3 5-12.3 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3zm1.4 
    35q1.1-0.3 1.9-1.1c13.7 12.8 20.7 12.7 23.2 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 
    19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q0 4-1 7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 
    0-0.5 0-0.9-0.3-1.7zm-6.1 5.9v0.1q0-0.1 0-0.1z"/>
<path d="m96.4 111.3c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q0 4-1 
    7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7z"/>
<path d="m93.5 117.4q1.1-0.3 1.9-1.1c13.7 12.8 20.7 12.7 23.2 11.9-4.5 7.9-12.4 13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9z"/>
<path d="m90.3 117.2v0.1q0-0.1 0-0.1z"/>
<path d="m92.1 82.4c4.9 0 9.6 1.2 13.7 3.2-2.7 0.9-8.3 5-12.3 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 
    0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3z"/>
<path d="m88.6 116c0.4 0.6 1 1 1.7 1.3-8.8 15.7-7.7 22.6-6.4 25.2-8.9-2.4-16.2-8.9-19.9-17.3 2.1 1.1 8.7 2.5 24.6-9.2z"/>
<path d="m69.6 92.3c0 2.5 1.9 9.1 18.5 18.3-0.3 0.6-0.6 1.3-0.6 2.1-18.5-1.6-24 2.6-25.7 
    4.9q-0.3-2.2-0.3-4.6c0-8 3.1-15.3 8.1-20.7z"/>
<path fill-rule="evenodd" fill="white" d="m69.6 92.3c0 2.5 1.9 9.1 18.5 18.3-0.3 0.6-0.6 1.3-0.6 2.1-18.5-1.6-24 2.6-25.7 
    4.9q-0.3-2.2-0.3-4.6c0-8 3.1-15.3 8.1-20.7zm19 23.7c0.4 0.6 1 1 1.7 1.3-8.8 15.7-7.7 22.6-6.4 25.2-8.9-2.4-16.2-8.9-19.9-17.3 
    2.1 1.1 8.7 2.5 24.6-9.2zm3.5-33.6c4.9 0 9.6 1.2 13.7 3.2-2.7 0.9-8.3 5-12.3 23q-0.7-0.2-1.4-0.2-0.4 0-0.8 
    0c-4.3-20.1-10.6-22.7-12.5-23 4-1.9 8.5-3 13.3-3zm1.4 35q1.1-0.3 1.9-1.1c13.7 12.8 20.7 12.7 23.2 11.9-4.5 7.9-12.4 
    13.6-21.7 15.1 1.6-2.1 3.9-8.6-3.4-25.9zm2.9-6.1c18.6-8.3 19.9-15 19.8-17.1 4.1 5.2 6.5 11.7 6.5 18.8q0 4-1 
    7.7c-1.4-2.4-6.5-7.1-25-7.2q0-0.2 0-0.5 0-0.9-0.3-1.7zm-6.1 5.9v0.1q0-0.1 0-0.1z"/>
<path d="m87.5 112.7q0 0 0 0c0-0.8 0.3-1.5 0.6-2.1q0.1 0 0.1-0.1c0.6-1 1.7-1.8 3-2q0.1 0 0.1-0.1 0.4 0 0.8 0 0.7 0 1.4 0.2 0.1 
    0 0.1 0.1c1.3 0.4 2.2 1.3 2.8 2.5q0 0 0 0.1 0.3 0.8 0.3 1.7 0 0.3 0 0.5 0 0.1 0 0.1c-0.1 1-0.6 1.9-1.3 2.6q0 0.1 
    0 0.1-0.8 0.8-1.9 1.1 0 0 0 0-0.7 0.3-1.4 0.3c-0.7 0-1.3-0.2-1.8-0.4v-0.1q0 0 0 0.1c-0.7-0.3-1.3-0.7-1.7-1.3q-0.1 
    0-0.1-0.1c-0.6-0.7-1-1.8-1-2.9q0-0.1 0-0.3z"/>
    </g>
</svg>`;
}
exports.svg = svg;
exports.finishIcon = `<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.988 511.988" style="enable-background:new 0 0 511.988 511.988;" xml:space="preserve">
<path style="fill:#E6E9ED;" d="M441.833,66.06c-3.75-1.75-8.172-1.172-11.359,1.484c-24.045,20.11-53.045,30.75-83.827,30.75
	c-30.482,0-60.311-10.921-83.998-30.75c-27.889-23.249-61.529-35.546-97.31-35.546c-34.78,0-68.857,12.266-96.139,34.562
	c-3.125,1.875-5.202,5.281-5.202,9.172v232.525c0,4.141,2.39,7.906,6.14,9.656c3.766,1.75,8.188,1.172,11.359-1.484
	c24.031-20.093,53.03-30.702,83.842-30.702s59.796,10.609,83.826,30.718c27.468,22.922,62.093,35.547,97.481,35.547
	c34.781,0,68.858-12.266,96.139-34.578c3.109-1.859,5.203-5.266,5.203-9.156V75.732C447.989,71.592,445.583,67.826,441.833,66.06z"
	/>
<g>
	<path style="fill:#434A54;" d="M351.991,351.898c32.906-1.188,64.921-13.312,90.795-34.484c3.109-1.859,5.203-5.266,5.203-9.156
		V75.732c0-4.141-2.406-7.906-6.156-9.672c-3.75-1.75-8.172-1.172-11.359,1.484c-22.655,18.953-49.686,29.468-78.482,30.64
		L351.991,351.898L351.991,351.898z"/>
	<path style="fill:#434A54;" d="M255.806,62.154c-26.468-19.749-57.562-30.155-90.467-30.155c-1.781,0-3.562,0.047-5.344,0.109
		v253.729c1.766-0.078,3.547-0.109,5.344-0.109c30.812,0,59.796,10.609,83.826,30.718c2.172,1.812,4.391,3.547,6.641,5.219V62.154z"
		/>
</g>
<path style="fill:#E6E9ED;" d="M69.201,66.56c-3.125,1.875-5.202,5.281-5.202,9.172v232.525c0,4.141,2.39,7.906,6.14,9.656
	c3.766,1.75,8.188,1.172,11.359-1.484c22.641-18.921,49.687-29.437,78.498-30.593l0,0V32.108
	C127.091,33.296,95.092,45.405,69.201,66.56z"/>
<path style="fill:#434A54;" d="M156.152,161.668c-32.671,0-64.779,8.938-92.153,25.405v121.185c0,4.141,2.39,7.906,6.14,9.656
	c3.766,1.75,8.188,1.172,11.359-1.484c22.641-18.921,49.687-29.437,78.498-30.593l0,0V161.715
	C158.715,161.683,157.433,161.668,156.152,161.668z"/>
<g>
	<path style="fill:#E6E9ED;" d="M255.806,321.664V191.839c-28.124-19.062-60.983-29.421-95.811-30.124v124.122
		c1.766-0.078,3.547-0.109,5.344-0.109c30.812,0,59.796,10.609,83.826,30.718C251.338,318.258,253.556,319.992,255.806,321.664z"/>
	<path style="fill:#E6E9ED;" d="M447.989,308.258V197.354c-26.452,20.016-58.311,30.609-92.154,30.609
		c-1.281,0-2.562-0.031-3.844-0.062v123.998c32.906-1.188,64.921-13.312,90.795-34.484
		C445.895,315.555,447.989,312.148,447.989,308.258z"/>
</g>
<path style="fill:#ED5564;" d="M74.654,511.988c-5.891,0-10.655-4.766-10.655-10.656V10.671C63.999,4.78,68.764,0,74.654,0
	s10.672,4.781,10.672,10.671v490.661C85.326,507.223,80.545,511.988,74.654,511.988z"/>
<path style="fill:#434A54;" d="M351.991,227.901c-32.232-0.797-63.576-11.609-88.67-30.687c-2.469-1.859-4.969-3.656-7.515-5.375
	v129.825c26.312,19.609,58.249,30.328,90.841,30.328c1.781,0,3.562-0.031,5.344-0.094V227.901z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;


/***/ }),

/***/ "./src/types/types.ts":
/*!****************************!*\
  !*** ./src/types/types.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.winners = exports.enigine = exports.garage = void 0;
var urls;
(function (urls) {
    urls["garage"] = "http://localhost:3000/garage";
    urls["engine"] = "http://localhost:3000/engine";
    urls["winners"] = "http://localhost:3000/winners";
})(urls || (urls = {}));
class Garage {
    getAllCars() {
        return fetch(urls.garage);
    }
    getLimitedCars(pageN) {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch(urls.garage + `?_page=${pageN}&_limit=4`);
        });
    }
    addCar(carName, carColor) {
        fetch(urls.garage, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: carName, color: carColor }),
        });
    }
    removeCar(id) {
        fetch(urls.garage + `/${id}`, {
            method: 'DELETE',
        });
    }
    updateCar(id, carName, carColor) {
        fetch(urls.garage + `/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: carName, color: carColor }),
        });
    }
}
class Engine {
    start(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch(urls.engine + `?id=${id}&status=started`, {
                method: 'PATCH',
            });
            let data = res.json();
            return data;
        });
    }
    stop(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetch(urls.engine + `?id=${id}&status=stopped`, {
                method: 'PATCH',
            });
        });
    }
    drive(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch(urls.engine + `?id=${id}&status=drive`, {
                method: 'PATCH',
            });
            return res.status;
        });
    }
}
class Winners {
    getAllWiners() {
        return fetch(urls.winners);
    }
    addWinner(id, time) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch(urls.winners, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id, wins: 1, time: time }),
            });
            return res;
        });
    }
    getWinner(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch(urls.winners + `/${id}`, {
                method: 'GET',
            });
            return res.json();
        });
    }
    updateWinner(id, wins, time) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield fetch(urls.winners + `/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ wins: wins, time: time }),
            });
            return res;
        });
    }
    removeWinner(id) {
        fetch(urls.winners + `/${id}`, {
            method: 'DELETE',
        });
    }
}
exports.garage = new Garage();
exports.enigine = new Engine();
exports.winners = new Winners();


/***/ }),

/***/ "./src/views/view.ts":
/*!***************************!*\
  !*** ./src/views/view.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showHide = void 0;
const showWinners_1 = __webpack_require__(/*! ../getCars&Winners/showWinners */ "./src/getCars&Winners/showWinners.ts");
function showHide() {
    let garageBtn = document.querySelector('.garage-view');
    let winnersBtn = document.querySelector('.winners-view');
    let garageBlock = document.querySelector('.garage');
    let winnersBlock = document.querySelector('.winners');
    garageBtn.addEventListener('click', () => hideBlock(garageBlock, winnersBlock));
    winnersBtn.addEventListener('click', () => {
        hideBlock(winnersBlock, garageBlock);
        (0, showWinners_1.showWinners)();
    });
    function hideBlock(showingEl, hidingEl) {
        showingEl.classList.remove('hidden');
        hidingEl.classList.add('hidden');
    }
}
exports.showHide = showHide;


/***/ }),

/***/ "./src/wheel.png":
/*!***********************!*\
  !*** ./src/wheel.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5006b63cbe580943a2d2.png";

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const renderHtml_1 = __webpack_require__(/*! ./others/renderHtml */ "./src/others/renderHtml.ts");
__webpack_require__(/*! ./views/view */ "./src/views/view.ts");
__webpack_require__(/*! ./style.css */ "./src/style.css");
__webpack_require__(/*! ./getCars&Winners/addCar */ "./src/getCars&Winners/addCar.ts");
__webpack_require__(/*! ./getCars&Winners/showCar */ "./src/getCars&Winners/showCar.ts");
__webpack_require__(/*! ./getCars&Winners/deleteCar */ "./src/getCars&Winners/deleteCar.ts");
__webpack_require__(/*! ./getCars&Winners/startStop */ "./src/getCars&Winners/startStop.ts");
__webpack_require__(/*! ./getCars&Winners/race */ "./src/getCars&Winners/race.ts");
__webpack_require__(/*! ./getCars&Winners/showWinners */ "./src/getCars&Winners/showWinners.ts");
(0, renderHtml_1.renderHtml)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCOzs7Ozs7Ozs7OztBQ3hHTDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0IsR0FBRyxXQUFXO0FBQ2hDO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gs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V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7QUNBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDbEQsbUJBQU8sQ0FBQyx5Q0FBYztBQUN0QixtQkFBTyxDQUFDLG9DQUFhO0FBQ3JCLG1CQUFPLENBQUMsaUVBQTBCO0FBQ2xDLG1CQUFPLENBQUMsbUVBQTJCO0FBQ25DLG1CQUFPLENBQUMsdUVBQTZCO0FBQ3JDLG1CQUFPLENBQUMsdUVBQTZCO0FBQ3JDLG1CQUFPLENBQUMsNkRBQXdCO0FBQ2hDLG1CQUFPLENBQUMsMkVBQStCO0FBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jc3MvY2Fycy5jc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jc3Mvd2lubmVycy5jc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY3NzL2NhcnMuY3NzPzk0YTUiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jc3Mvd2lubmVycy5jc3M/MWNkZiIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvYWRkQ2FyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvZ2V0Q2FycyZXaW5uZXJzL2RlbGV0ZUNhci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9nZW5lcmF0ZTEwMENhcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvcGFnaW5hdGlvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9yYWNlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvZ2V0Q2FycyZXaW5uZXJzL3Nob3dDYXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvc2hvd1dpbm5lcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvc3RhcnRTdG9wLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvZ2V0Q2FycyZXaW5uZXJzL3VwZGF0ZUNhci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL290aGVycy9yZW5kZXJIdG1sLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvb3RoZXJzL3N2Z0ljb25zLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdHlwZXMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy92aWV3cy92aWV3LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vd2hlZWwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmZhbWlseT1VYnVudHU6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nY29sb3InXTpkaXNhYmxlZCxcXHJcXG5mb3JtIGJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dFt0eXBlPSdjb2xvciddIHtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwIDE1cHggMCAwO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHJpZ2h0OiAycHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uLFxcclxcbi5yYWNlLWJ0bnMgYnV0dG9uLFxcclxcbi5yZW1vdmUtY2FyLFxcclxcbi5zdGFydC1zdG9wIGJ1dHRvbixcXHJcXG4udXBkYXRlLWJ0bixcXHJcXG4uZ2VuLWNhcnMsXFxyXFxuLnByZXYtYnRuLFxcclxcbi5uZXh0LWJ0biB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNhcjpob3ZlcixcXHJcXG4ucmVtb3ZlLWNhcjpob3ZlcixcXHJcXG4uc3RhcnQtc3RvcCBidXR0b246aG92ZXIsXFxyXFxuLnVwZGF0ZS1idG46aG92ZXIsXFxyXFxuLnJhY2UtYnRucyBidXR0b246aG92ZXIsXFxyXFxuLmdlbi1jYXJzOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCxcXHJcXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY2FyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1YmE1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jYXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NhMTQ1O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1uYW1lIHtcXHJcXG4gICAgY29sb3I6ICNhMGRhYTk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1pY29uIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLW1vZGVsIHtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmwtd2hlZWwsXFxyXFxuLnItd2hlZWwge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1pY29uIHN2ZyBnIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmwtd2hlZWwge1xcclxcbiAgICBib3R0b206IDMwcHg7XFxyXFxuICAgIGxlZnQ6IDEyLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnItd2hlZWwge1xcclxcbiAgICBib3R0b206IDQ5cHg7XFxyXFxuICAgIGxlZnQ6IDg5cHg7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUtY2FyIHtcXHJcXG4gICAgbWFyZ2luOiAwIDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlMzY1NGY7XFxyXFxufVxcclxcbi5yZW1vdmUtY2FyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2RkNDEyNDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1zdGFydCB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvYWQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvdHRvbTogMThweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jYXItcm9hZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1zdG9wIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXN0b3AgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udXBkYXRlLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0NTcyYmE7XFxyXFxufVxcclxcblxcclxcbi51cGRhdGUtYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzM0NTY4YjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXN0b3AgYnV0dG9uW2Rpc2FibGVkXSB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuLnN0YXJ0LXN0b3AgYnV0dG9uW2Rpc2FibGVkXTpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5yYWNlLXJvYWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluaXNoLWljb24ge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3R0b206IDRweDtcXHJcXG4gICAgcmlnaHQ6IDE3MHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2NhcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0lBQ1QscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTs7Ozs7Ozs7SUFRSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7Ozs7OztJQU1JO21EQUMrQztBQUNuRDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsU0FBUztJQUNULDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixtREFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmZhbWlseT1VYnVudHU6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLmNhcnMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dFt0eXBlPSdjb2xvciddOmRpc2FibGVkLFxcclxcbmZvcm0gYnV0dG9uOmRpc2FibGVkIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3RleHQnXSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J2NvbG9yJ10ge1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDAgMTVweCAwIDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24sXFxyXFxuLnJhY2UtYnRucyBidXR0b24sXFxyXFxuLnJlbW92ZS1jYXIsXFxyXFxuLnN0YXJ0LXN0b3AgYnV0dG9uLFxcclxcbi51cGRhdGUtYnRuLFxcclxcbi5nZW4tY2FycyxcXHJcXG4ucHJldi1idG4sXFxyXFxuLm5leHQtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY2FyOmhvdmVyLFxcclxcbi5yZW1vdmUtY2FyOmhvdmVyLFxcclxcbi5zdGFydC1zdG9wIGJ1dHRvbjpob3ZlcixcXHJcXG4udXBkYXRlLWJ0bjpob3ZlcixcXHJcXG4ucmFjZS1idG5zIGJ1dHRvbjpob3ZlcixcXHJcXG4uZ2VuLWNhcnM6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LFxcclxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTViYTVlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNhcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Y2ExNDU7XFxyXFxufVxcclxcblxcclxcbi5jYXItYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLW5hbWUge1xcclxcbiAgICBjb2xvcjogI2EwZGFhOTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWljb24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXItbW9kZWwge1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubC13aGVlbCxcXHJcXG4uci13aGVlbCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi93aGVlbC5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWljb24gc3ZnIGcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubC13aGVlbCB7XFxyXFxuICAgIGJvdHRvbTogMzBweDtcXHJcXG4gICAgbGVmdDogMTIuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uci13aGVlbCB7XFxyXFxuICAgIGJvdHRvbTogNDlweDtcXHJcXG4gICAgbGVmdDogODlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1jYXIge1xcclxcbiAgICBtYXJnaW46IDAgMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2UzNjU0ZjtcXHJcXG59XFxyXFxuLnJlbW92ZS1jYXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0MTI0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXN0YXJ0IHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucm9hZCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm90dG9tOiAxOHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1yb2FkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXN0b3Age1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtc3RvcCBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBtYXJnaW46IDAgMTBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi51cGRhdGUtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzQ1NzJiYTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZGF0ZS1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzQ1NjhiO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtc3RvcCBidXR0b25bZGlzYWJsZWRdIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4uc3RhcnQtc3RvcCBidXR0b25bZGlzYWJsZWRdOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhY2Utcm9hZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5maW5pc2gtaWNvbiB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvdHRvbTogNHB4O1xcclxcbiAgICByaWdodDogMTcwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53aW5uZXItaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVyLWluZm8gcCB7XFxyXFxuICAgIG1hcmdpbjogMCA1cHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvd2lubmVycy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2lubmVyLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDVweCAwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lci1pbmZvIHAge1xcclxcbiAgICBtYXJnaW46IDAgNXB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2Mzk0NTtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTQ1O1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2Fycy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbm5lcnMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93aW5uZXJzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmFkZE5ld0NhciA9IHZvaWQgMDtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy90eXBlc1wiKTtcclxuY29uc3Qgc2hvd0Nhcl8xID0gcmVxdWlyZShcIi4vc2hvd0NhclwiKTtcclxuZnVuY3Rpb24gYWRkTmV3Q2FyKCkge1xyXG4gICAgbGV0IGFkZENhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtY2FyJyk7XHJcbiAgICBsZXQgY2FyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XHJcbiAgICBsZXQgY2FyQ29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3InKTtcclxuICAgIGFkZENhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhck5hbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgdHlwZXNfMS5nYXJhZ2UuYWRkQ2FyKGNhck5hbWUudmFsdWUsIGNhckNvbG9yLnZhbHVlKTtcclxuICAgICAgICAgICAgKDAsIHNob3dDYXJfMS5zaG93Q2FyKSgpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNhck5hbWUudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgY2FyQ29sb3IudmFsdWUgPSAnI2ZmZmZmZic7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5hZGROZXdDYXIgPSBhZGROZXdDYXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kZWxldGVDYXIgPSB2b2lkIDA7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXMvdHlwZXNcIik7XHJcbmNvbnN0IHNob3dDYXJfMSA9IHJlcXVpcmUoXCIuL3Nob3dDYXJcIik7XHJcbmZ1bmN0aW9uIGRlbGV0ZUNhcigpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgbGV0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLWNhcicpO1xyXG4gICAgICAgIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlc18xLmdhcmFnZS5yZW1vdmVDYXIoTnVtYmVyKGVsLm5hbWUpKTtcclxuICAgICAgICAgICAgICAgIHR5cGVzXzEud2lubmVycy5yZW1vdmVXaW5uZXIoTnVtYmVyKGVsLm5hbWUpKTtcclxuICAgICAgICAgICAgICAgICgwLCBzaG93Q2FyXzEuc2hvd0NhcikoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmRlbGV0ZUNhciA9IGRlbGV0ZUNhcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdlbmVyYXRlMTAwQ2FycyA9IHZvaWQgMDtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy90eXBlc1wiKTtcclxuY29uc3Qgc2hvd0Nhcl8xID0gcmVxdWlyZShcIi4vc2hvd0NhclwiKTtcclxuZnVuY3Rpb24gZ2VuZXJhdGUxMDBDYXJzKCkge1xyXG4gICAgbGV0IGdlbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW4tY2FycycpO1xyXG4gICAgZ2VuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGdlbmVyYXRlQ2FyKCk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdlbmVyYXRlMTAwQ2FycyA9IGdlbmVyYXRlMTAwQ2FycztcclxuZnVuY3Rpb24gZ2VuZXJhdGVDYXIoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGxldCByZXMgPSB5aWVsZCBmZXRjaCgnaHR0cHM6Ly9wcml2YXRlLTE2MWRmLWNhcnNhcGkxLmFwaWFyeS1tb2NrLmNvbS9jYXJzJyk7XHJcbiAgICAgICAgbGV0IGNhcnMgPSAoeWllbGQgcmVzLmpzb24oKSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tQ29sb3IgPSBgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gO1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2Fycy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGAke2NhcEZpcnN0TGV0dGVyKGNhcnNbcmFuZG9tTnVtYmVyXS5tYWtlKX0gJHtjYXBGaXJzdExldHRlcihjYXJzW3JhbmRvbU51bWJlcl0ubW9kZWwpfWA7XHJcbiAgICAgICAgICAgIHR5cGVzXzEuZ2FyYWdlLmFkZENhcihuYW1lLCByYW5kb21Db2xvcik7XHJcbiAgICAgICAgICAgICgwLCBzaG93Q2FyXzEuc2hvd0NhcikoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjYXBGaXJzdExldHRlcihzdHIpIHtcclxuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5wYWdpbmF0aW9uID0gdm9pZCAwO1xyXG5jb25zdCByZW5kZXJIdG1sXzEgPSByZXF1aXJlKFwiLi4vb3RoZXJzL3JlbmRlckh0bWxcIik7XHJcbmNvbnN0IHNob3dDYXJfMSA9IHJlcXVpcmUoXCIuL3Nob3dDYXJcIik7XHJcbmZ1bmN0aW9uIHBhZ2luYXRpb24oKSB7XHJcbiAgICByZW5kZXJIdG1sXzEubmV4dFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MID0gYCR7TnVtYmVyKHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCkgKyAxfWA7XHJcbiAgICAgICAgKDAsIHNob3dDYXJfMS5zaG93Q2FyKSgpO1xyXG4gICAgfSk7XHJcbiAgICByZW5kZXJIdG1sXzEucHJldlBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MID0gYCR7TnVtYmVyKHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCkgLSAxfWA7XHJcbiAgICAgICAgKDAsIHNob3dDYXJfMS5zaG93Q2FyKSgpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5wYWdpbmF0aW9uID0gcGFnaW5hdGlvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnJhY2UgPSB2b2lkIDA7XHJcbmNvbnN0IHJlbmRlckh0bWxfMSA9IHJlcXVpcmUoXCIuLi9vdGhlcnMvcmVuZGVySHRtbFwiKTtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy90eXBlc1wiKTtcclxuY29uc3Qgc3RhcnRTdG9wXzEgPSByZXF1aXJlKFwiLi9zdGFydFN0b3BcIik7XHJcbmZ1bmN0aW9uIHJhY2UoKSB7XHJcbiAgICBsZXQgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtcmFjZScpO1xyXG4gICAgbGV0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LXJhY2UnKTtcclxuICAgIHJlc2V0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICByZXNldEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCByZXMgPSB5aWVsZCB0eXBlc18xLmdhcmFnZS5nZXRMaW1pdGVkQ2FycyhOdW1iZXIocmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MKSk7XHJcbiAgICAgICAgbGV0IGNhcnMgPSAoeWllbGQgcmVzLmpzb24oKSk7XHJcbiAgICAgICAgY2Fycy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgQUJ0biA9ICgwLCBzdGFydFN0b3BfMS5nZXRCdXR0b24pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXItc3RhcnQnKSwgU3RyaW5nKGVsLmlkKSk7XHJcbiAgICAgICAgICAgIGxldCBzdG9wQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXItc3RvcCcpO1xyXG4gICAgICAgICAgICAoMCwgc3RhcnRTdG9wXzEuc3RhcnQpKEFCdG4sIFN0cmluZyhlbC5pZCksIHN0b3BCdG5zLCBzdGFydEJ0bik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSk7XHJcbiAgICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICByZXNldEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgcmVzID0geWllbGQgdHlwZXNfMS5nYXJhZ2UuZ2V0TGltaXRlZENhcnMoTnVtYmVyKHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCkpO1xyXG4gICAgICAgIGxldCBjYXJzID0gKHlpZWxkIHJlcy5qc29uKCkpO1xyXG4gICAgICAgIGNhcnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXItc3RhcnQnKTtcclxuICAgICAgICAgICAgbGV0IHN0b3BCdG4gPSAoMCwgc3RhcnRTdG9wXzEuZ2V0QnV0dG9uKShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLXN0b3AnKSwgU3RyaW5nKGVsLmlkKSk7XHJcbiAgICAgICAgICAgICgwLCBzdGFydFN0b3BfMS5zdG9wUmFjZSkoc3RvcEJ0biwgc3RhcnRCdG5zLCBTdHJpbmcoZWwuaWQpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pKTtcclxufVxyXG5leHBvcnRzLnJhY2UgPSByYWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc2hvd0NhciA9IHZvaWQgMDtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy90eXBlc1wiKTtcclxuY29uc3QgZGVsZXRlQ2FyXzEgPSByZXF1aXJlKFwiLi9kZWxldGVDYXJcIik7XHJcbmNvbnN0IHN2Z0ljb25zXzEgPSByZXF1aXJlKFwiLi4vb3RoZXJzL3N2Z0ljb25zXCIpO1xyXG5jb25zdCBzdGFydFN0b3BfMSA9IHJlcXVpcmUoXCIuL3N0YXJ0U3RvcFwiKTtcclxuY29uc3QgcmVuZGVySHRtbF8xID0gcmVxdWlyZShcIi4uL290aGVycy9yZW5kZXJIdG1sXCIpO1xyXG5jb25zdCB1cGRhdGVDYXJfMSA9IHJlcXVpcmUoXCIuL3VwZGF0ZUNhclwiKTtcclxucmVxdWlyZShcIi4uL2Nzcy9jYXJzLmNzc1wiKTtcclxuZnVuY3Rpb24gc2hvd0NhcigpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzQWxsQ2FycyA9IHlpZWxkIHR5cGVzXzEuZ2FyYWdlLmdldEFsbENhcnMoKTtcclxuICAgICAgICBjb25zdCBhbGxDYXJzID0gKHlpZWxkIHJlc0FsbENhcnMuanNvbigpKTtcclxuICAgICAgICBjb25zdCByZXNQYWdlZENhcnMgPSB5aWVsZCB0eXBlc18xLmdhcmFnZS5nZXRMaW1pdGVkQ2FycyhOdW1iZXIocmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9ICh5aWVsZCByZXNQYWdlZENhcnMuanNvbigpKTtcclxuICAgICAgICByZW5kZXJIdG1sXzEuY2Fycy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICByZW5kZXJIdG1sXzEuZ2FyYWdlTGVuZ3RoLmlubmVySFRNTCA9IGBHYXJhZ2U6ICR7U3RyaW5nKGFsbENhcnMubGVuZ3RoKX1gO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzaG93Q2FySW5IdG1sKGRhdGFbaV0ubmFtZSwgZGF0YVtpXS5jb2xvciwgZGF0YVtpXS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoZWNrUGFnQnRucyhhbGxDYXJzLmxlbmd0aCk7XHJcbiAgICAgICAgKDAsIHN0YXJ0U3RvcF8xLnN0YXJ0Q2FyKSgpO1xyXG4gICAgICAgICgwLCBzdGFydFN0b3BfMS5zdG9wQ2FyKSgpO1xyXG4gICAgICAgICgwLCB1cGRhdGVDYXJfMS51cGRhdGVDYXIpKCk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNob3dDYXIgPSBzaG93Q2FyO1xyXG5mdW5jdGlvbiBzaG93Q2FySW5IdG1sKG1vZGVsLCBjb2xvciwgaWQpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgbGV0IGNhckJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGNhckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgc3RhcnRTdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IHJhY2VSb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGNhclJvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgY2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGxldCBzdGFydENhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGxldCBzdG9wQ2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbGV0IHVwZGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGxldCBjYXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGxldCBjYXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgbGV0IHJvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gICAgICAgIGxldCBmaW5pc2hGbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGxldCBsV2hlZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgbGV0IHJXaGVlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjYXJOYW1lLmlubmVySFRNTCA9IG1vZGVsO1xyXG4gICAgICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnUmVtb3ZlIENhcic7XHJcbiAgICAgICAgc3RhcnRDYXIuaW5uZXJIVE1MID0gJ0EnO1xyXG4gICAgICAgIHN0b3BDYXIuaW5uZXJIVE1MID0gJ0InO1xyXG4gICAgICAgIGNhckltZy5pbm5lckhUTUwgPSAoMCwgc3ZnSWNvbnNfMS5zdmcpKGNvbG9yKTtcclxuICAgICAgICBmaW5pc2hGbGFnLmlubmVySFRNTCA9IHN2Z0ljb25zXzEuZmluaXNoSWNvbjtcclxuICAgICAgICB1cGRhdGVCdG4uaW5uZXJIVE1MID0gJ1VwZGF0ZSBDYXInO1xyXG4gICAgICAgIGRlbGV0ZUJ0bi5uYW1lID0gU3RyaW5nKGlkKTtcclxuICAgICAgICBzdGFydENhci5uYW1lID0gU3RyaW5nKGlkKTtcclxuICAgICAgICBzdG9wQ2FyLm5hbWUgPSBTdHJpbmcoaWQpO1xyXG4gICAgICAgIGNhci5pZCA9IFN0cmluZyhpZCk7XHJcbiAgICAgICAgY2FySW1nLmlkID0gYGNhci0ke1N0cmluZyhpZCl9YDtcclxuICAgICAgICB1cGRhdGVCdG4ubmFtZSA9IFN0cmluZyhpZCk7XHJcbiAgICAgICAgY2FyTmFtZS5pZCA9IGBuYW1lLSR7U3RyaW5nKGlkKX1gO1xyXG4gICAgICAgIGNhckJsb2NrLmNsYXNzTmFtZSA9ICdjYXItYmxvY2snO1xyXG4gICAgICAgIGNhckluZm8uY2xhc3NOYW1lID0gJ2Nhci1pbmZvJztcclxuICAgICAgICBkZWxldGVCdG4uY2xhc3NOYW1lID0gJ3JlbW92ZS1jYXInO1xyXG4gICAgICAgIGNhck5hbWUuY2xhc3NOYW1lID0gJ2Nhci1uYW1lJztcclxuICAgICAgICBjYXJJbWcuY2xhc3NOYW1lID0gYGNhci1pY29uICR7bW9kZWx9YDtcclxuICAgICAgICByb2FkLmNsYXNzTmFtZSA9ICdyb2FkJztcclxuICAgICAgICBzdGFydENhci5jbGFzc05hbWUgPSAnY2FyLXN0YXJ0JztcclxuICAgICAgICBzdG9wQ2FyLmNsYXNzTmFtZSA9ICdjYXItc3RvcCc7XHJcbiAgICAgICAgY2FyUm9hZC5jbGFzc05hbWUgPSAnY2FyLXJvYWQnO1xyXG4gICAgICAgIHN0YXJ0U3RvcC5jbGFzc05hbWUgPSAnc3RhcnQtc3RvcCc7XHJcbiAgICAgICAgcmFjZVJvYWQuY2xhc3NOYW1lID0gJ3JhY2Utcm9hZCc7XHJcbiAgICAgICAgZmluaXNoRmxhZy5jbGFzc05hbWUgPSAnZmluaXNoLWljb24nO1xyXG4gICAgICAgIGxXaGVlbC5jbGFzc05hbWUgPSAnbC13aGVlbCc7XHJcbiAgICAgICAgcldoZWVsLmNsYXNzTmFtZSA9ICdyLXdoZWVsJztcclxuICAgICAgICB1cGRhdGVCdG4uY2xhc3NOYW1lID0gJ3VwZGF0ZS1idG4nO1xyXG4gICAgICAgIGNhci5jbGFzc05hbWUgPSAnY2FyLW1vZGVsJztcclxuICAgICAgICBzdG9wQ2FyLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYXJCbG9jay5hcHBlbmQoY2FySW5mbyk7XHJcbiAgICAgICAgY2FyQmxvY2suYXBwZW5kKGNhclJvYWQpO1xyXG4gICAgICAgIGNhckJsb2NrLmFwcGVuZChyb2FkKTtcclxuICAgICAgICBjYXJJbmZvLmFwcGVuZCh1cGRhdGVCdG4pO1xyXG4gICAgICAgIGNhckluZm8uYXBwZW5kKGRlbGV0ZUJ0bik7XHJcbiAgICAgICAgY2FySW5mby5hcHBlbmQoY2FyTmFtZSk7XHJcbiAgICAgICAgY2FyUm9hZC5hcHBlbmQoc3RhcnRTdG9wKTtcclxuICAgICAgICBjYXJSb2FkLmFwcGVuZChyYWNlUm9hZCk7XHJcbiAgICAgICAgc3RhcnRTdG9wLmFwcGVuZChzdGFydENhcik7XHJcbiAgICAgICAgc3RhcnRTdG9wLmFwcGVuZChzdG9wQ2FyKTtcclxuICAgICAgICByYWNlUm9hZC5hcHBlbmQoY2FyKTtcclxuICAgICAgICByYWNlUm9hZC5hcHBlbmQoZmluaXNoRmxhZyk7XHJcbiAgICAgICAgY2FyLmFwcGVuZChjYXJJbWcpO1xyXG4gICAgICAgIGNhckltZy5hcHBlbmQobFdoZWVsKTtcclxuICAgICAgICBjYXJJbWcuYXBwZW5kKHJXaGVlbCk7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLmNhcnMuYXBwZW5kKGNhckJsb2NrKTtcclxuICAgICAgICAoMCwgZGVsZXRlQ2FyXzEuZGVsZXRlQ2FyKSgpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tQYWdCdG5zKGFsbENhcnNMZW5ndGgpIHtcclxuICAgIGlmIChOdW1iZXIocmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MKSAqIDQgPj0gYWxsQ2Fyc0xlbmd0aCkge1xyXG4gICAgICAgIHJlbmRlckh0bWxfMS5uZXh0UGFnZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZW5kZXJIdG1sXzEubmV4dFBhZ2UuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChOdW1iZXIocmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MKSA9PT0gMSkge1xyXG4gICAgICAgIHJlbmRlckh0bWxfMS5wcmV2UGFnZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZW5kZXJIdG1sXzEucHJldlBhZ2UuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc2hvd1dpbm5lcnMgPSB2b2lkIDA7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXMvdHlwZXNcIik7XHJcbnJlcXVpcmUoXCIuLi9jc3Mvd2lubmVycy5jc3NcIik7XHJcbmNvbnN0IHJlbmRlckh0bWxfMSA9IHJlcXVpcmUoXCIuLi9vdGhlcnMvcmVuZGVySHRtbFwiKTtcclxuZnVuY3Rpb24gc2hvd1dpbm5lcnMoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIHR5cGVzXzEud2lubmVycy5nZXRBbGxXaW5lcnMoKTtcclxuICAgICAgICBjb25zdCBhbGxXaW5uZXJzID0gKHlpZWxkIHJlcy5qc29uKCkpO1xyXG4gICAgICAgIHJlbmRlckh0bWxfMS53aW5uZXJzQmxvY2suaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxXaW5uZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNob3dXaW5uZXJJbkh0bWwoYWxsV2lubmVyc1tpXS5pZCwgYWxsV2lubmVyc1tpXS53aW5zLCBhbGxXaW5uZXJzW2ldLnRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2hvd1dpbm5lcnMgPSBzaG93V2lubmVycztcclxuZnVuY3Rpb24gc2hvd1dpbm5lckluSHRtbChpZCwgd2lucywgdGltZSkge1xyXG4gICAgbGV0IGNhck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyLW5hbWVbaWQ9XCJuYW1lLSR7aWR9XCJdYCkuaW5uZXJIVE1MO1xyXG4gICAgbGV0IHdpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGNhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBjYXJJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCB3aW5zQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgYmVzdFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB3aW5uZXIuY2xhc3NOYW1lID0gJ3dpbm5lci1pbmZvJztcclxuICAgIGNhci5pbm5lckhUTUwgPSBgQ2FyOiAke2Nhck5hbWV9YDtcclxuICAgIGNhcklkLmlubmVySFRNTCA9IGBDYXIgSUQ6ICR7U3RyaW5nKGlkKX1gO1xyXG4gICAgd2luc0NvdW50LmlubmVySFRNTCA9IGBXaW5zOiAke1N0cmluZyh3aW5zKX1gO1xyXG4gICAgYmVzdFRpbWUuaW5uZXJIVE1MID0gYEJlc3QgVGltZTogJHtTdHJpbmcodGltZSl9YDtcclxuICAgIHdpbm5lci5hcHBlbmQoY2FyKTtcclxuICAgIHdpbm5lci5hcHBlbmQoY2FySWQpO1xyXG4gICAgd2lubmVyLmFwcGVuZCh3aW5zQ291bnQpO1xyXG4gICAgd2lubmVyLmFwcGVuZChiZXN0VGltZSk7XHJcbiAgICByZW5kZXJIdG1sXzEud2lubmVyc0Jsb2NrLmFwcGVuZCh3aW5uZXIpO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nZXRCdXR0b24gPSBleHBvcnRzLnN0YXJ0ID0gZXhwb3J0cy5zdG9wUmFjZSA9IGV4cG9ydHMuc3RvcENhciA9IGV4cG9ydHMuc3RhcnRDYXIgPSB2b2lkIDA7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXMvdHlwZXNcIik7XHJcbmNvbnN0IHNob3dXaW5uZXJzXzEgPSByZXF1aXJlKFwiLi9zaG93V2lubmVyc1wiKTtcclxuZnVuY3Rpb24gc3RhcnRDYXIoKSB7XHJcbiAgICBsZXQgc3RhcnRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhci1zdGFydCcpO1xyXG4gICAgbGV0IHN0b3BCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhci1zdG9wJyk7XHJcbiAgICBzdGFydEJ0bnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgc3RhcnQoZWwsIGVsLm5hbWUsIHN0b3BCdG5zKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnN0YXJ0Q2FyID0gc3RhcnRDYXI7XHJcbmZ1bmN0aW9uIHN0b3BDYXIoKSB7XHJcbiAgICBsZXQgc3RhcnRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhci1zdGFydCcpO1xyXG4gICAgbGV0IHN0b3BCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhci1zdG9wJyk7XHJcbiAgICBzdG9wQnRucy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzdG9wUmFjZShlbCwgc3RhcnRCdG5zLCBlbC5uYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc3RvcENhciA9IHN0b3BDYXI7XHJcbmxldCB3aW5uZXIgPSAwO1xyXG5mdW5jdGlvbiBzdG9wUmFjZShlbCwgc3RhcnRCdG5zLCBpZCkge1xyXG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICB3aW5uZXIgPSAwO1xyXG4gICAgZ2V0QnV0dG9uKHN0YXJ0QnRucywgaWQpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBlbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBpY29uLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICB0eXBlc18xLmVuaWdpbmUuc3RvcChOdW1iZXIoaWQpKTtcclxufVxyXG5leHBvcnRzLnN0b3BSYWNlID0gc3RvcFJhY2U7XHJcbmZ1bmN0aW9uIHN0YXJ0KGVsLCBpZCwgc3RvcEJ0bnMsIHJhY2VCdG4pIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgbGV0IGNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICBsZXQgaWNvbiA9IGNhci5xdWVyeVNlbGVjdG9yKGAjY2FyLSR7aWR9YCk7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlLXJvYWQnKTtcclxuICAgICAgICBsZXQgc3RvcEJ0biA9IGdldEJ1dHRvbihzdG9wQnRucywgaWQpO1xyXG4gICAgICAgIGxldCBsV2hlZWwgPSBpY29uLnF1ZXJ5U2VsZWN0b3IoJy5sLXdoZWVsJyk7XHJcbiAgICAgICAgbGV0IHJXaGVlbCA9IGljb24ucXVlcnlTZWxlY3RvcignLnItd2hlZWwnKTtcclxuICAgICAgICBzdG9wQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgZWwuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBzdGFydCA9ICh5aWVsZCB0eXBlc18xLmVuaWdpbmUuc3RhcnQoTnVtYmVyKGlkKSkpO1xyXG4gICAgICAgIGxldCB0aW1lID0gc3RhcnQuZGlzdGFuY2UgLyBzdGFydC52ZWxvY2l0eTtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gY2FyLmFuaW1hdGUoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAnMHB4JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogYCR7cGFyZW50LmNsaWVudFdpZHRoIC0gMTYzfXB4YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLCB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aW1lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBsVyA9IGxXaGVlbC5hbmltYXRlKFt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScgfSwgeyB0cmFuc2Zvcm06ICdyb3RhdGUoMzYwZGVnKScgfV0sIHsgZHVyYXRpb246IHRpbWUgfSk7XHJcbiAgICAgICAgbGV0IHJXID0gcldoZWVsLmFuaW1hdGUoW3sgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyB9LCB7IHRyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpJyB9XSwgeyBkdXJhdGlvbjogdGltZSB9KTtcclxuICAgICAgICBsZXQgZWxQb3NpdGlvbiA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYXIuc3R5bGUubGVmdCA9IGAke3BhcmVudC5jbGllbnRXaWR0aCAtIDE2M31weGA7XHJcbiAgICAgICAgfSwgdGltZSk7XHJcbiAgICAgICAgbGV0IHN0b3BDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHJlc2V0Q2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHN0b3BCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxXLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICByVy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICBzdG9wQ2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGRyaXZlU3RhdHVzID0geWllbGQgdHlwZXNfMS5lbmlnaW5lLmRyaXZlKE51bWJlcihpZCkpO1xyXG4gICAgICAgIGlmIChkcml2ZVN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgIGxXLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICByVy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIGNhci5zdHlsZS5sZWZ0ID0gZ2V0Q29tcHV0ZWRTdHlsZShjYXIpLmxlZnQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5jYW5jZWwoKTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGVsUG9zaXRpb24pO1xyXG4gICAgICAgICAgICBpZiAocmFjZUJ0bilcclxuICAgICAgICAgICAgICAgIHJhY2VCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkcml2ZVN0YXR1cyA9PT0gMjAwICYmICFzdG9wQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICBzdG9wQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWwuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdHlwZXNfMS5lbmlnaW5lLnN0b3AoTnVtYmVyKGlkKSk7XHJcbiAgICAgICAgICAgIGlmIChyYWNlQnRuKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9wQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBlbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF3aW5uZXIgJiYgcmFjZUJ0bikge1xyXG4gICAgICAgICAgICAgICAgd2lubmVyID0gTnVtYmVyKGNhci5pZCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRkID0gdHlwZXNfMS53aW5uZXJzLmFkZFdpbm5lcih3aW5uZXIsIE1hdGgucm91bmQodGltZSAvIDEwMDApKTtcclxuICAgICAgICAgICAgICAgIGlmICgoeWllbGQgYWRkKS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBnZXQgPSAoeWllbGQgdHlwZXNfMS53aW5uZXJzLmdldFdpbm5lcih3aW5uZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd2luQ291bnQgPSBnZXQud2lucyArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJlc3RUaW1lID0gTWF0aC5yb3VuZCh0aW1lIC8gMTAwMCkgPiBnZXQudGltZSA/IGdldC50aW1lIDogTWF0aC5yb3VuZCh0aW1lIC8gMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZXNfMS53aW5uZXJzLnVwZGF0ZVdpbm5lcih3aW5uZXIsIHdpbkNvdW50LCBiZXN0VGltZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAoMCwgc2hvd1dpbm5lcnNfMS5zaG93V2lubmVycykoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc3RhcnQgPSBzdGFydDtcclxuZnVuY3Rpb24gZ2V0QnV0dG9uKGIsIG4pIHtcclxuICAgIGxldCBidG4gPSBbLi4uYl0uZmluZCgoZWwpID0+IGVsLm5hbWUgPT09IG4pO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxufVxyXG5leHBvcnRzLmdldEJ1dHRvbiA9IGdldEJ1dHRvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy51cGRhdGVDYXIgPSB2b2lkIDA7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXMvdHlwZXNcIik7XHJcbmNvbnN0IHNob3dDYXJfMSA9IHJlcXVpcmUoXCIuL3Nob3dDYXJcIik7XHJcbmxldCBjYXJJZCA9IDA7XHJcbmZ1bmN0aW9uIHVwZGF0ZUNhcigpIHtcclxuICAgIGxldCB1cGRhdGVDYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLWNhcicpO1xyXG4gICAgbGV0IGNhck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLW5hbWUnKTtcclxuICAgIGxldCBjYXJDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGUtY29sb3InKTtcclxuICAgIGxldCB1cGRhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVwZGF0ZS1idG4nKTtcclxuICAgIHVwZGF0ZUJ0bnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY2FyTmFtZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYXJDb2xvci5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYXJDb2xvci52YWx1ZSA9ICcjZmZmZmZmJztcclxuICAgICAgICAgICAgdXBkYXRlQ2FyQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhcklkID0gTnVtYmVyKGVsLm5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB1cGRhdGVDYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhck5hbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2FySWQpO1xyXG4gICAgICAgICAgICB0eXBlc18xLmdhcmFnZS51cGRhdGVDYXIoY2FySWQsIGNhck5hbWUudmFsdWUsIGNhckNvbG9yLnZhbHVlKTtcclxuICAgICAgICAgICAgKDAsIHNob3dDYXJfMS5zaG93Q2FyKSgpO1xyXG4gICAgICAgICAgICBjYXJOYW1lLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FyTmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBjYXJDb2xvci5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhckNvbG9yLnZhbHVlID0gJyM4MDgwODAnO1xyXG4gICAgICAgICAgICB1cGRhdGVDYXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMudXBkYXRlQ2FyID0gdXBkYXRlQ2FyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucmVuZGVySHRtbCA9IGV4cG9ydHMud2lubmVyc0Jsb2NrID0gZXhwb3J0cy5uZXh0UGFnZSA9IGV4cG9ydHMucHJldlBhZ2UgPSBleHBvcnRzLnBhZ2VOdW1iZXIgPSBleHBvcnRzLmdhcmFnZUxlbmd0aCA9IGV4cG9ydHMuY2FycyA9IHZvaWQgMDtcclxuY29uc3QgYWRkQ2FyXzEgPSByZXF1aXJlKFwiLi4vZ2V0Q2FycyZXaW5uZXJzL2FkZENhclwiKTtcclxuY29uc3QgZ2VuZXJhdGUxMDBDYXJzXzEgPSByZXF1aXJlKFwiLi4vZ2V0Q2FycyZXaW5uZXJzL2dlbmVyYXRlMTAwQ2Fyc1wiKTtcclxuY29uc3QgcGFnaW5hdGlvbl8xID0gcmVxdWlyZShcIi4uL2dldENhcnMmV2lubmVycy9wYWdpbmF0aW9uXCIpO1xyXG5jb25zdCByYWNlXzEgPSByZXF1aXJlKFwiLi4vZ2V0Q2FycyZXaW5uZXJzL3JhY2VcIik7XHJcbmNvbnN0IHNob3dDYXJfMSA9IHJlcXVpcmUoXCIuLi9nZXRDYXJzJldpbm5lcnMvc2hvd0NhclwiKTtcclxuY29uc3Qgdmlld18xID0gcmVxdWlyZShcIi4uL3ZpZXdzL3ZpZXdcIik7XHJcbmV4cG9ydHMuY2FycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5leHBvcnRzLmdhcmFnZUxlbmd0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuZXhwb3J0cy5wYWdlTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5leHBvcnRzLnByZXZQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmV4cG9ydHMubmV4dFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuZXhwb3J0cy53aW5uZXJzQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZnVuY3Rpb24gcmVuZGVySHRtbCgpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgbGV0IGdhcmFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGxldCB3aW5uZXJzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbGV0IGdlbmVyYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbGV0IGdhcmFnZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IHJhY2VCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZ2FyYWdlQnRuLmNsYXNzTmFtZSA9ICdnYXJhZ2Utdmlldyc7XHJcbiAgICAgICAgd2lubmVyc0J0bi5jbGFzc05hbWUgPSAnd2lubmVycy12aWV3JztcclxuICAgICAgICBleHBvcnRzLndpbm5lcnNCbG9jay5jbGFzc05hbWUgPSAnd2lubmVycyBoaWRkZW4nO1xyXG4gICAgICAgIGdhcmFnZUJsb2NrLmNsYXNzTmFtZSA9ICdnYXJhZ2UnO1xyXG4gICAgICAgIHJhY2VCdG5zLmNsYXNzTmFtZSA9ICdyYWNlLWJ0bnMnO1xyXG4gICAgICAgIGV4cG9ydHMuY2Fycy5jbGFzc05hbWUgPSAnY2Fycyc7XHJcbiAgICAgICAgZ2VuZXJhdGVCdG4uY2xhc3NOYW1lID0gJ2dlbi1jYXJzJztcclxuICAgICAgICBleHBvcnRzLnBhZ2VOdW1iZXIuY2xhc3NOYW1lID0gJ3BhZ2UtbnVtJztcclxuICAgICAgICBleHBvcnRzLnByZXZQYWdlLmNsYXNzTmFtZSA9ICdwcmV2LWJ0bic7XHJcbiAgICAgICAgZXhwb3J0cy5uZXh0UGFnZS5jbGFzc05hbWUgPSAnbmV4dC1idG4nO1xyXG4gICAgICAgIGdhcmFnZUJ0bi5pbm5lckhUTUwgPSAnR2FyYWdlJztcclxuICAgICAgICB3aW5uZXJzQnRuLmlubmVySFRNTCA9ICdXaW5uZXJzJztcclxuICAgICAgICBleHBvcnRzLnBhZ2VOdW1iZXIuaW5uZXJIVE1MID0gJzEnO1xyXG4gICAgICAgIGdlbmVyYXRlQnRuLmlubmVySFRNTCA9ICdHZW5lcmF0ZSAxMDAgQ2Fycyc7XHJcbiAgICAgICAgZXhwb3J0cy5wcmV2UGFnZS5pbm5lckhUTUwgPSAnUHJldmlvcyc7XHJcbiAgICAgICAgZXhwb3J0cy5uZXh0UGFnZS5pbm5lckhUTUwgPSAnTmV4dCc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgICAgIGxldCBpbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBsZXQgaW5wdXRDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgbGV0IHJhY2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgZm9ybS5hY3Rpb24gPSAnIyc7XHJcbiAgICAgICAgICAgIGlucHV0VGV4dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICBpbnB1dENvbG9yLnR5cGUgPSAnY29sb3InO1xyXG4gICAgICAgICAgICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgICAgICAgICBpbnB1dFRleHQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRUZXh0LmNsYXNzTmFtZSA9ICduYW1lJztcclxuICAgICAgICAgICAgICAgIGlucHV0Q29sb3IuY2xhc3NOYW1lID0gJ2NvbG9yJztcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEJ0bi5jbGFzc05hbWUgPSAnYWRkLWNhcic7XHJcbiAgICAgICAgICAgICAgICByYWNlQnRuLmNsYXNzTmFtZSA9ICdzdGFydC1yYWNlJztcclxuICAgICAgICAgICAgICAgIHJhY2VCdG4uaW5uZXJIVE1MID0gJ1N0YXJ0IFJhY2UnO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdBZGQgTmV3IENhcic7XHJcbiAgICAgICAgICAgICAgICBpbnB1dENvbG9yLnZhbHVlID0gJyNmZmZmZmYnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRUZXh0LmNsYXNzTmFtZSA9ICd1cGRhdGUtbmFtZSc7XHJcbiAgICAgICAgICAgICAgICBpbnB1dENvbG9yLmNsYXNzTmFtZSA9ICd1cGRhdGUtY29sb3InO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnRuLmNsYXNzTmFtZSA9ICd1cGRhdGUtY2FyJztcclxuICAgICAgICAgICAgICAgIHJhY2VCdG4uY2xhc3NOYW1lID0gJ3Jlc2V0LXJhY2UnO1xyXG4gICAgICAgICAgICAgICAgcmFjZUJ0bi5pbm5lckhUTUwgPSAnUmVzZXQgUmFjZSc7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ1VwZGF0ZSBDYXInO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDb2xvci52YWx1ZSA9ICcjODA4MDgwJztcclxuICAgICAgICAgICAgICAgIGlucHV0Q29sb3IuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRUZXh0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2FyYWdlQmxvY2suYXBwZW5kKGZvcm0pO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZChpbnB1dFRleHQpO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZChpbnB1dENvbG9yKTtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmQoc3VibWl0QnRuKTtcclxuICAgICAgICAgICAgcmFjZUJ0bnMuYXBwZW5kKHJhY2VCdG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnYXJhZ2VCbG9jay5hcHBlbmQocmFjZUJ0bnMpO1xyXG4gICAgICAgIGdhcmFnZUJsb2NrLmFwcGVuZChnZW5lcmF0ZUJ0bik7XHJcbiAgICAgICAgZ2FyYWdlQmxvY2suYXBwZW5kKGV4cG9ydHMuZ2FyYWdlTGVuZ3RoKTtcclxuICAgICAgICBnYXJhZ2VCbG9jay5hcHBlbmQoZXhwb3J0cy5wYWdlTnVtYmVyKTtcclxuICAgICAgICBnYXJhZ2VCbG9jay5hcHBlbmQoZXhwb3J0cy5jYXJzKTtcclxuICAgICAgICBnYXJhZ2VCbG9jay5hcHBlbmQoZXhwb3J0cy5wcmV2UGFnZSk7XHJcbiAgICAgICAgZ2FyYWdlQmxvY2suYXBwZW5kKGV4cG9ydHMubmV4dFBhZ2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGdhcmFnZUJ0bik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQod2lubmVyc0J0bik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZ2FyYWdlQmxvY2spO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGV4cG9ydHMud2lubmVyc0Jsb2NrKTtcclxuICAgICAgICAoMCwgdmlld18xLnNob3dIaWRlKSgpO1xyXG4gICAgICAgICgwLCBhZGRDYXJfMS5hZGROZXdDYXIpKCk7XHJcbiAgICAgICAgKDAsIHJhY2VfMS5yYWNlKSgpO1xyXG4gICAgICAgICgwLCBnZW5lcmF0ZTEwMENhcnNfMS5nZW5lcmF0ZTEwMENhcnMpKCk7XHJcbiAgICAgICAgKDAsIHNob3dDYXJfMS5zaG93Q2FyKSgpO1xyXG4gICAgICAgICgwLCBwYWdpbmF0aW9uXzEucGFnaW5hdGlvbikoKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucmVuZGVySHRtbCA9IHJlbmRlckh0bWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZmluaXNoSWNvbiA9IGV4cG9ydHMuc3ZnID0gdm9pZCAwO1xyXG5mdW5jdGlvbiBzdmcoY29sb3IpIHtcclxuICAgIHJldHVybiBgPHN2ZyB2ZXJzaW9uPVwiMS4yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTAwIDE2MFwiIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiNTBcIj5cclxuPHBhdGggZmlsbD0ke2NvbG9yfSBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIm00LjEgNjdsMy45LTMuNmMwIDAgMTEuNiAyLjEgMTkuNSAxLjggNy44LTAuMyAxNi40LTExLjcgOC0xMS41LTIgMC00LjItMC40LTYuMy0xcTAgMCAwIFxyXG4gICAgMGMtNy4xLTEuOS0xNC02LjEtMTQtNi4xbC00LjItOWMwIDAtNC40LTcuNSA0LjYtNi45IDkgMC42IDE4LjkgNC40IDE4LjkgNC40IDAgMCA4Ny42LTIxLjUgMTA0LjctMjQuOCAxNy4xLTMuMyBcclxuICAgIDg5LjYtMTcuNiAxNTMuMyAxNC41IDAgMCA0MC4yIDE4LjkgNDQuMSAxOS4yIDAgMCAxMTkuOSA1LjggMTU5LjQgNDEgMCAwIDAuNiAxMi45IDAgMjEuMyAwIDAgMS44IDUuNC0xLjMgMTAuNiAwIDAgMi4xIFxyXG4gICAgNC4yLTEuNCAzLjZsLTEuMSA4LjdjMCAwLTQuMi0yLjEtNi4xIDQuOSAwIDAtMjIuMSA1LjQtMjguMSA0LjEgMCAwIDYuNy02Ni45LTQxLjUtNjYuOS00OC4xIDAtNTIuNyA0Mi41LTUzLjQgNjcuMWwtMS44IFxyXG4gICAgMS41YzAgMC0yMTIuNi02LjMtMjE4LjMtMi44IDAgMC0yLjEgMC0xLjctNCAwIDAgNi45LTY1LjUtNTAuMi02NS41LTU3LjIgMC00NC4yIDYxLjMtNDQuMiA2MS4zIDAgMC00Mi44LTkuNi0zNi4zLTE2LjEgMCBcclxuICAgIDAtMTQuOS0yMC4zLTYuNS00NS44em0zNjYuMSA1LjFjMy4yLTMuOS00MS45LTQuNC00MS45LTQuNCAwIDAtNSA0LjgtMy4zIDkuMyAxLjYgNC41IDI1LjEgMy44IDMxLjggMy4xIDYuOC0wLjggMTMuNC04IFxyXG4gICAgMTMuNC04em0tODEtMTkuN2MwIDAgMjIuNSAwLjIgMjUuNiAwIDMtMC4zIDEuOS0xLjUgMS45LTEuNSAwIDAtNS42LTcuNy00NC42LTI0LjMtMzguOS0xNi41LTYyLTE0LjEtNjItMTQuMS0xMDcuNyAzLTg3LjkgXHJcbiAgICAxNi4xLTg3LjkgMTYuMWw4LjEgOS40IDI1LjIgNC44IDExMCA2Ljl6bS0xMDIuNiA3LjFjMCAxLjIgMSAyLjIgMi4yIDIuMmgxNy43YzEuMiAwIDIuMi0xIDIuMi0yLjIgMC0xLjMtMS0yLjMtMi4yLTIuM2gtMTcuN2MtMS4yIFxyXG4gICAgMC0yLjIgMS0yLjIgMi4zem0xMzQuNCAxOC43YzAgMCAwLjggMzQuMS0zIDQyLjNsLTk0LjgtM2MwIDAtMjguNyAxLTM5LjQtMTkuOCAwIDAtOS4xLTE5LTEwLjUtMjUuNSAwLjMgMi4yIDQgMzcuNSAyMi45IDQyLjcgMTkuNyBcclxuICAgIDUuNCAxMjQuOCA4LjIgMTI0LjggOC4yIDAgMCA0LjEtMzUuMSAwLTQ0Ljl6bTQ2IDE4cTAuMi0wLjMgMC41LTAuOCAwLjYtMC45IDEuMy0yIDAuMi0wLjMgMC40LTAuNyAwLjUtMC43IDEuMS0xLjUgMC4yLTAuMyBcclxuICAgIDAuNC0wLjZjMC45LTEuMSAxLjgtMi4zIDIuOC0zLjVxMC40LTAuNSAwLjgtMC45YzIuMi0yLjUgNC43LTUgNy43LTcuNHEwLjQtMC4zIDAuOC0wLjYgMC40LTAuMyAwLjgtMC42IDEuMS0wLjggMi4zLTEuNiAwLjgtMC41IFxyXG4gICAgMS42LTEuMSAxLjMtMC43IDIuNi0xLjQgMC45LTAuNSAxLjktMC45IDAuNC0wLjIgMC44LTAuNCAwLjQtMC4yIDAuOC0wLjQgMC44LTAuMyAxLjYtMC43IDEtMC4zIDEuOS0wLjYgMS4zLTAuNSAyLjYtMC44IDAuNC0wLjIgXHJcbiAgICAwLjktMC4zIDEtMC4yIDIuMS0wLjUgMS4xLTAuMiAyLjItMC40IDAuNy0wLjEgMS40LTAuMiAwLjEgMCAwLjEgMCAwLjYtMC4xIDEuMi0wLjEgMS0wLjEgMi4xLTAuMiAwLjcgMCAxLjUgMCAxLjUtMC4xIDMuMSAwYzM0LjEgXHJcbiAgICAxIDQ0IDMxLjMgNDQgMzEuM2g4LjJjMCAwIDkuOS01LjggMTkuOC01LjEgMTAgMC44IDMuMy00LjMtOC40LTYuNS0xMS43LTIuMS0yMi42LTE0LjQtMjQuNC0xNy43LTEuOC0zLjMtNDUuNC0xNC03Mi42LTEyLjggMCAwIDQwIFxyXG4gICAgMiA3MCAxNC45IDAgMCAxLjEgNC4xLTExLjcgMHEtMS42LTAuNS0zLjctMS4zLTAuNy0wLjItMS41LTAuNS0yLjItMC44LTQuOS0xLjYtMS43LTAuNS0zLjYtMS0wLjgtMC4yLTEuNS0wLjQtMC43LTAuMi0xLjUtMC4zLTAuNy0wLjItMS41LTAuMy0wLjgtMC4yLTEuNi0wLjMtMC45LTAuMi0xLjktMC4zLTEtMC4yLTItMC4yLTAuNi0wLjEtMS4xLTAuMS0wLjctMC4xLTEuNC0wLjEtMC4xIDAtMC4zIFxyXG4gICAgMC0xLTAuMS0yLjEtMC4xLTEgMC0yIDAuMS0xLjEgMC0yLjEgMC4xLTAuNyAwLjEtMS40IDAuMi0wLjYgMC0xLjEgMC4xLTAuNyAwLjEtMS41IDAuMi0wLjIgMC4xLTAuNCAwLjEtMC43IDAuMS0xLjMgXHJcbiAgICAwLjNjLTAuNSAwLjEtMC45IDAuMi0xLjQgMC40cS0wLjcgMC4xLTEuNCAwLjQtMC44IDAuMi0xLjUgMC40LTEuNCAwLjUtMi45IDEuMS0wLjcgMC4zLTEuNCAwLjctMS42IDAuNy0zLjIgMS43LTAuNSBcclxuICAgIDAuMy0xLjEgMC43Yy0wLjIgMC4xLTAuNCAwLjMtMC42IDAuNHEtMC40IDAuMi0wLjcgMC41LTAuMyAwLjItMC42IDAuNCAwIDAgMCAwLTAuNSAwLjMtMSAwLjYtMC41IDAuNC0xIDAuOC0wLjEgMC4xLTAuMiBcclxuICAgIDAuMi0wLjQgMC4zLTAuNyAwLjYtMC42IDAuNS0xLjIgMS0wLjYgMC41LTEuMSAxLTAuNiAwLjUtMS4xIDEuMS0wLjEgMC4xLTAuMyAwLjItMC43IDAuNy0xLjQgMS41LTEuMiAxLjMtMi40IDIuNy0wLjQgXHJcbiAgICAwLjYtMC45IDEuMi0xLjcgMi4yLTMuNCA0LjctMC43IDAuOS0xLjMgMi0xLjUgMi4zLTIuOSA1LTAuMiAwLjMtMC4zIDAuNiAwLjEtMC4xIDAuMi0wLjR6bTEyNS44LTguNWMtMTEuNy0xMy43LTMzLjUtMTUuNi0zMy41LTE1LjYgXHJcbiAgICAxNi4zIDE0LjYgMzMuNSAxNS42IDMzLjUgMTUuNnptLTM0NS43IDQyLjVsMjEwLjEgNC40YzguNC0zLjQtMjMuNy01LjEtMjMuNy01LjEgMCAwLTE0NC40LTUuMi0xNTcuNi01LjItMTMuMyBcclxuICAgIDAtMTguNiAxLjMtMjYuMyAyLjYtNy42IDEuMy0yLjUgMy4zLTIuNSAzLjN6bS01LjYtMzIuNWMzMy43LTIxLjIgMTcuOC0yOC44IDE3LjgtMjguOCA3LjktMS40IDE1Mi44IDIuOSAxNjEuMyBcclxuICAgIDMuMi04LjMtMC40LTE0Mi44LTYuOS0xNjYuNy02LjktMjQuNiAwLjEtMjUuNCA4LjYtMjUuNCA4LjYtMjEuOC0xMC45LTMyLjEtOC4zLTMyLjEtOC4zIDMzLjQgMS40IDQ1LjEgMzIuMiA0NS4xIFxyXG4gICAgMzIuMnptLTEwNi42LTMuOGMzLjMgMy44IDguNiA1LjcgOC42IDUuMSAxLTEyLjYgMTAuMS0yMS42IDEwLjEtMjEuNi0xNiA0LjItNDcuMi05LTQ3LjItOS0zLjIgNC43LTEuOSAxMS45LTEuOSBcclxuICAgIDExLjkgMTguNCAxLjEgMjcuMiA5LjcgMzAuNCAxMy42em0xODMuMy03OWMzMy4zIDAuOCA5My4zIDM0LjggOTMuMyAzNC44LTIuMS0wLjMtMTkuNCAwLjQtMjYuMy0xLjktMi0wLjYtMy4yLTEuNi0yLjktMi44IFxyXG4gICAgMS4zLTUuNi0xLjgtOC4yLTEuOC04LjIgMCAwLTEwLjEtNi40LTE1LjktMy4xIDAgMC0zMS43LTIxLjYtODQuOS0xMS40IDAgMC0zLjggMC40LTAuOCA1LjIgMi43IDQuMSA1LjggMTIuNyBcclxuICAgIDYuNiAxNC44LTE3LjQtMS4yLTMxLjYtMi40LTM0LjgtMy4yLTkuNy0yLjMtMTYuMyAwLjUtMjIuMi05LjctNS44LTEwLjIgNTYuMy0xNS4zIDg5LjctMTQuNXptLTY4LjUgMTguN2MzLjEgMyAxNC41IFxyXG4gICAgNC40IDE0LjUgNC40IDAgMCAyLjItMy42LTMuMi0xMS4zLTAuNC0wLjUtMTEuMyAzLjItMTEuMyAzLjIgMCAwLTMgMC42IDAgMy43em0xNzkuOSAzOC41aDMzLjJjMC44IDAgMS40IDAuNiAxLjQgMS40IDAgXHJcbiAgICAwLjctMC42IDEuMy0xLjQgMS4zaC0zMy4yYy0wLjggMC0xLjQtMC42LTEuNC0xLjMgMC0wLjggMC42LTEuNCAxLjQtMS40em0tMTQyLjUtMzAuOGMwIDAgNTcuMiA1IDY1LjYgNC4zIDAgMC0wLjItNy4zIFxyXG4gICAgNC43LTYuOSAwIDAtNC4xIDQuOCAwLjEgNy44IDAgMC0yNS42IDIuMS03MC40LTUuMnpcIi8+XHJcbjxwYXRoIGQ9XCJtNDkyLjUgMTI1LjNjMCAwLTMuOSAwLjMtNCA0LjRsLTI2IDQuN2MwIDAgNDcuOS0xLjIgMzAtOS4xelwiLz5cclxuPHBhdGggZD1cIm0zNjUuNSA5OXEwLjItMC40IDAuNC0wLjctMC4zIDAuNC0wLjQgMC43elwiLz5cclxuPHBhdGggZD1cIm0zMjkuNSA3Mi4xaDMzLjNjMC44IDAgMS40IDAuNiAxLjQgMS4zIDAgMC44LTAuNiAxLjQtMS40IDEuNGgtMzMuM2MtMC43IDAtMS4zLTAuNi0xLjMtMS40IDAtMC43IDAuNi0xLjMgMS4zLTEuM3pcIi8+XHJcbjxwYXRoIGQ9XCJtMzI5LjUgNzIuMWgzMy4zYzAuOCAwIDEuNCAwLjYgMS40IDEuMyAwIDAuOC0wLjYgMS40LTEuNCAxLjRoLTMzLjNjLTAuNyAwLTEuMy0wLjYtMS4zLTEuNCAwLTAuNyAwLjYtMS4zIDEuMy0xLjN6XCIvPlxyXG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIm0yMTguMSAxNC45YzMzLjQgMC43IDkzLjQgMzQuOCA5My40IDM0LjgtMi4xLTAuMy0xOS40IDAuNC0yNi4zLTEuOS0yLTAuNy0zLjItMS42LTIuOS0yLjggXHJcbiAgICAxLjMtNS42LTEuOC04LjItMS44LTguMiAwIDAtMTAuMi02LjQtMTUuOS0zLjEgMCAwLTMxLjctMjEuNi04NC45LTExLjQgMCAwLTMuOCAwLjQtMC44IDUuMSAyLjcgNC4yIDUuOCAxMi44IDYuNSBcclxuICAgIDE0LjktMTcuMy0xLjItMzEuNS0yLjQtMzQuOC0zLjItOS42LTIuMy0xNi4zIDAuNS0yMi4xLTkuNy01LjktMTAuMiA1Ni4zLTE1LjMgODkuNi0xNC41em0tNjguNCAxOC43YzMuMSAzIDE0LjUgNC40IDE0LjUgXHJcbiAgICA0LjQgMCAwIDIuMi0zLjctMy4yLTExLjMtMC40LTAuNS0xMS4zIDMuMi0xMS4zIDMuMiAwIDAtMy4xIDAuNiAwIDMuN3pcIi8+XHJcbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwibTE4NS40IDQyLjNjLTE3LjMtMS4yLTMxLjUtMi40LTM0LjgtMy4yLTkuNi0yLjMtMTYuMyAwLjUtMjIuMS05LjctNS45LTEwLjIgNTYuMy0xNS4zIDg5LjYtMTQuNSBcclxuICAgIDMzLjQgMC43IDkzLjQgMzQuOCA5My40IDM0LjgtMi4xLTAuMy0xOS40IDAuNC0yNi4zLTEuOS0yLTAuNy0zLjItMS42LTIuOS0yLjggMS4zLTUuNi0xLjgtOC4yLTEuOC04LjIgMCAwLTEwLjItNi40LTE1LjktMy4xIDAgXHJcbiAgICAwLTMxLjctMjEuNi04NC45LTExLjQgMCAwLTMuOCAwLjQtMC44IDUuMSAyLjcgNC4yIDUuOCAxMi44IDYuNSAxNC45em0tMzUuNy04LjdjMy4xIDMgMTQuNSA0LjQgMTQuNSA0LjQgXHJcbiAgICAwIDAgMi4yLTMuNy0zLjItMTEuMy0wLjQtMC41LTExLjMgMy4yLTExLjMgMy4yIDAgMC0zLjEgMC42IDAgMy43elwiLz5cclxuPHBhdGggZD1cIm0yNzYuOCAzNi4xYzcuMiAzLjIgNCA4LjYgMy45IDEwLjMgMCAxLjgtMTYuMSA0LjUtMTguMi0xLjItMi01LjYgMi0xMC45IDItMTAuOSAwIDAgNS4yLTEuNCAxMi4zIDEuOHpcIi8+XHJcbjxnPlxyXG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIm00MTEuNSA3Ny4yYzIyLjEgMCA0MC4xIDE4IDQwLjEgNDAuMiAwIDIyLjItMTggNDAuMi00MC4xIDQwLjItMjIuMiAwLTQwLjItMTgtNDAuMi00MC4yIDAtMjIuMiAxOC00MC4yIFxyXG4gICAgNDAuMi00MC4yem0tMzIuNSA0MC4yYzAgMTggMTQuNSAzMi41IDMyLjUgMzIuNSAxNy45IDAgMzIuNC0xNC41IDMyLjQtMzIuNSAwLTE4LTE0LjUtMzIuNS0zMi40LTMyLjUtMTggMC0zMi41IDE0LjUtMzIuNSBcclxuICAgIDMyLjV6bTEwLTIwLjdjMCAyLjUgMS45IDkuMSAxOC41IDE4LjMtMC40IDAuNi0wLjYgMS4zLTAuNiAyLTE4LjYtMS41LTI0LjEgMi43LTI1LjcgNXEtMC4zLTIuMi0wLjMtNC42YzAtOCAzLTE1LjMgXHJcbiAgICA4LjEtMjAuN3ptMTguOSAyMy43YzAuNSAwLjYgMS4xIDEgMS43IDEuMy04LjggMTUuNy03LjYgMjIuNi02LjMgMjUuMi05LTIuNC0xNi4zLTguOS0xOS45LTE3LjMgMi4xIDEuMSA4LjcgMi41IFxyXG4gICAgMjQuNS05LjJ6bTMuNi0zMy42YzQuOSAwIDkuNSAxLjEgMTMuNiAzLjItMi42IDAuOS04LjIgNS0xMi4yIDIzcS0wLjctMC4yLTEuNC0wLjItMC40IDAtMC44IDBjLTQuMy0yMC4xLTEwLjYtMjIuNy0xMi41LTIzIDQtMS45IFxyXG4gICAgOC41LTMgMTMuMy0zem0xLjQgMzVxMS4xLTAuMyAxLjgtMS4xYzEzLjggMTIuOCAyMC44IDEyLjcgMjMuMyAxMS45LTQuNSA3LjktMTIuNCAxMy42LTIxLjcgMTUuMSAxLjYtMi4xIFxyXG4gICAgMy45LTguNi0zLjQtMjUuOXptMi45LTYuMWMxOC42LTguMyAxOS45LTE1IDE5LjgtMTcuMSA0LjEgNS4yIDYuNSAxMS43IDYuNSAxOC44cS0wLjEgNC0xIDcuN2MtMS40LTIuNC02LjUtNy4xLTI1LTcuMnEwLTAuMiBcclxuICAgIDAtMC41IDAtMC45LTAuMy0xLjd6bS02LjEgNS45bC0wLjEgMC4xcTAtMC4xIDAuMS0wLjF6XCIvPlxyXG48cGF0aCBkPVwibTQxNS44IDExNS43YzE4LjYtOC4zIDE5LjktMTUgMTkuOC0xNy4xIDQuMSA1LjIgNi41IDExLjcgNi41IDE4LjhxLTAuMSA0LTEgNy43Yy0xLjQtMi40LTYuNS03LjEtMjUtNy4ycTAtMC4yIFxyXG4gICAgMC0wLjUgMC0wLjktMC4zLTEuN3pcIi8+XHJcbjxwYXRoIGQ9XCJtNDEyLjkgMTIxLjhxMS4xLTAuMyAxLjgtMS4xYzEzLjggMTIuOCAyMC44IDEyLjcgMjMuMyAxMS45LTQuNSA3LjktMTIuNCAxMy42LTIxLjcgMTUuMSAxLjYtMi4xIDMuOS04LjYtMy40LTI1Ljl6XCIvPlxyXG48cGF0aCBkPVwibTQwOS43IDEyMS42bC0wLjEgMC4xcTAtMC4xIDAuMS0wLjF6XCIvPlxyXG48cGF0aCBkPVwibTQxMS41IDg2LjhjNC45IDAgOS41IDEuMSAxMy42IDMuMi0yLjYgMC45LTguMiA1LTEyLjIgMjNxLTAuNy0wLjItMS40LTAuMi0wLjQgMC0wLjggXHJcbiAgICAwYy00LjMtMjAuMS0xMC42LTIyLjctMTIuNS0yMyA0LTEuOSA4LjUtMyAxMy4zLTN6XCIvPlxyXG48cGF0aCBkPVwibTQwNy45IDEyMC40YzAuNSAwLjYgMS4xIDEgMS43IDEuMy04LjggMTUuNy03LjYgMjIuNi02LjMgMjUuMi05LTIuNC0xNi4zLTguOS0xOS45LTE3LjMgMi4xIDEuMSA4LjcgMi41IDI0LjUtOS4yelwiLz5cclxuPHBhdGggZD1cIm0zODkgOTYuN2MwIDIuNSAxLjkgOS4xIDE4LjUgMTguMy0wLjQgMC42LTAuNiAxLjMtMC42IDItMTguNi0xLjUtMjQuMSAyLjctMjUuNyA1cS0wLjMtMi4yLTAuMy00LjZjMC04IDMtMTUuMyA4LjEtMjAuN3pcIi8+XHJcbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBmaWxsPVwid2hpdGVcIiBkPVwibTM4OSA5Ni43YzAgMi41IDEuOSA5LjEgMTguNSAxOC4zLTAuNCAwLjYtMC42IDEuMy0wLjYgMi0xOC42LTEuNS0yNC4xIDIuNy0yNS43IFxyXG4gICAgNXEtMC4zLTIuMi0wLjMtNC42YzAtOCAzLTE1LjMgOC4xLTIwLjd6bTE4LjkgMjMuN2MwLjUgMC42IDEuMSAxIDEuNyAxLjMtOC44IDE1LjctNy42IDIyLjYtNi4zIDI1LjItOS0yLjQtMTYuMy04LjktMTkuOS0xNy4zIFxyXG4gICAgMi4xIDEuMSA4LjcgMi41IDI0LjUtOS4yem0zLjYtMzMuNmM0LjkgMCA5LjUgMS4xIDEzLjYgMy4yLTIuNiAwLjktOC4yIDUtMTIuMiAyM3EtMC43LTAuMi0xLjQtMC4yLTAuNCAwLTAuOCBcclxuICAgIDBjLTQuMy0yMC4xLTEwLjYtMjIuNy0xMi41LTIzIDQtMS45IDguNS0zIDEzLjMtM3ptMS40IDM1cTEuMS0wLjMgMS44LTEuMWMxMy44IDEyLjggMjAuOCAxMi43IDIzLjMgMTEuOS00LjUgNy45LTEyLjQgXHJcbiAgICAxMy42LTIxLjcgMTUuMSAxLjYtMi4xIDMuOS04LjYtMy40LTI1Ljl6bTIuOS02LjFjMTguNi04LjMgMTkuOS0xNSAxOS44LTE3LjEgNC4xIDUuMiA2LjUgMTEuNyA2LjUgMTguOHEtMC4xIFxyXG4gICAgNC0xIDcuN2MtMS40LTIuNC02LjUtNy4xLTI1LTcuMnEwLTAuMiAwLTAuNSAwLTAuOS0wLjMtMS43em0tNi4xIDUuOWwtMC4xIDAuMXEwLTAuMSAwLjEtMC4xelwiLz5cclxuPHBhdGggZD1cIm00MDYuOCAxMTcuMXEwIDAgMC4xLTAuMWMwLTAuNyAwLjItMS40IDAuNi0ycTAgMCAwLTAuMWMwLjctMSAxLjgtMS44IDMuMS0ycTAgMCAwLjEtMC4xIDAuNCAwIDAuOCAwIDAuNyAwIDEuNCAwLjIgMC4xIFxyXG4gICAgMCAwLjEgMC4xYzEuMiAwLjQgMi4yIDEuMyAyLjcgMi41cTAuMSAwIDAuMSAwLjEgMC4zIDAuOCAwLjMgMS43IDAgMC4zIDAgMC41IDAgMC4xIDAgMC4xYy0wLjIgMS0wLjYgMS45LTEuMyAyLjZxMCAwLjEtMC4xIFxyXG4gICAgMC4xLTAuNyAwLjgtMS44IDEuMSAwIDAgMCAwLTAuNyAwLjMtMS40IDAuM2MtMC43IDAtMS4zLTAuMi0xLjktMC40bDAuMS0wLjFxLTAuMSAwLTAuMSAwLjFjLTAuNi0wLjMtMS4yLTAuNy0xLjctMS4zcTAgMCBcclxuICAgIDAtMC4xYy0wLjctMC44LTEuMS0xLjgtMS4xLTIuOXEwLTAuMSAwLTAuM3pcIi8+XHJcbjxwYXRoIGQ9XCJtNDA5LjcgMTIxLjZsLTAuMSAwLjFxMC0wLjEgMC4xLTAuMXpcIi8+XHJcbjxwYXRoIGQ9XCJtNDA5LjcgMTIxLjZsLTAuMSAwLjFxMC0wLjEgMC4xLTAuMXpcIi8+XHJcbjwvZz5cclxuPGc+XHJcbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwibTkyLjEgNzIuOGMyMi4yIDAgNDAuMSAxOCA0MC4xIDQwLjIgMCAyMi4yLTE3LjkgNDAuMi00MC4xIDQwLjItMjIuMiAwLTQwLjEtMTgtNDAuMS00MC4yIDAtMjIuMiBcclxuICAgIDE3LjktNDAuMiA0MC4xLTQwLjJ6bS0zMi40IDQwLjJjMCAxOCAxNC41IDMyLjUgMzIuNCAzMi41IDE3LjkgMCAzMi40LTE0LjUgMzIuNC0zMi41IDAtMTgtMTQuNS0zMi41LTMyLjQtMzIuNS0xNy45IDAtMzIuNCBcclxuICAgIDE0LjUtMzIuNCAzMi41em05LjktMjAuN2MwIDIuNSAxLjkgOS4xIDE4LjUgMTguMy0wLjMgMC42LTAuNiAxLjMtMC42IDIuMS0xOC41LTEuNi0yNCAyLjYtMjUuNyA0LjlxLTAuMy0yLjItMC4zLTQuNmMwLTggMy4xLTE1LjMgXHJcbiAgICA4LjEtMjAuN3ptMTkgMjMuN2MwLjQgMC42IDEgMSAxLjcgMS4zLTguOCAxNS43LTcuNyAyMi42LTYuNCAyNS4yLTguOS0yLjQtMTYuMi04LjktMTkuOS0xNy4zIDIuMSAxLjEgOC43IDIuNSAyNC42LTkuMnptMy41LTMzLjZjNC45IFxyXG4gICAgMCA5LjYgMS4yIDEzLjcgMy4yLTIuNyAwLjktOC4zIDUtMTIuMyAyM3EtMC43LTAuMi0xLjQtMC4yLTAuNCAwLTAuOCAwYy00LjMtMjAuMS0xMC42LTIyLjctMTIuNS0yMyA0LTEuOSA4LjUtMyAxMy4zLTN6bTEuNCBcclxuICAgIDM1cTEuMS0wLjMgMS45LTEuMWMxMy43IDEyLjggMjAuNyAxMi43IDIzLjIgMTEuOS00LjUgNy45LTEyLjQgMTMuNi0yMS43IDE1LjEgMS42LTIuMSAzLjktOC42LTMuNC0yNS45em0yLjktNi4xYzE4LjYtOC4zIFxyXG4gICAgMTkuOS0xNSAxOS44LTE3LjEgNC4xIDUuMiA2LjUgMTEuNyA2LjUgMTguOHEwIDQtMSA3LjdjLTEuNC0yLjQtNi41LTcuMS0yNS03LjJxMC0wLjIgXHJcbiAgICAwLTAuNSAwLTAuOS0wLjMtMS43em0tNi4xIDUuOXYwLjFxMC0wLjEgMC0wLjF6XCIvPlxyXG48cGF0aCBkPVwibTk2LjQgMTExLjNjMTguNi04LjMgMTkuOS0xNSAxOS44LTE3LjEgNC4xIDUuMiA2LjUgMTEuNyA2LjUgMTguOHEwIDQtMSBcclxuICAgIDcuN2MtMS40LTIuNC02LjUtNy4xLTI1LTcuMnEwLTAuMiAwLTAuNSAwLTAuOS0wLjMtMS43elwiLz5cclxuPHBhdGggZD1cIm05My41IDExNy40cTEuMS0wLjMgMS45LTEuMWMxMy43IDEyLjggMjAuNyAxMi43IDIzLjIgMTEuOS00LjUgNy45LTEyLjQgMTMuNi0yMS43IDE1LjEgMS42LTIuMSAzLjktOC42LTMuNC0yNS45elwiLz5cclxuPHBhdGggZD1cIm05MC4zIDExNy4ydjAuMXEwLTAuMSAwLTAuMXpcIi8+XHJcbjxwYXRoIGQ9XCJtOTIuMSA4Mi40YzQuOSAwIDkuNiAxLjIgMTMuNyAzLjItMi43IDAuOS04LjMgNS0xMi4zIDIzcS0wLjctMC4yLTEuNC0wLjItMC40IDAtMC44IFxyXG4gICAgMGMtNC4zLTIwLjEtMTAuNi0yMi43LTEyLjUtMjMgNC0xLjkgOC41LTMgMTMuMy0zelwiLz5cclxuPHBhdGggZD1cIm04OC42IDExNmMwLjQgMC42IDEgMSAxLjcgMS4zLTguOCAxNS43LTcuNyAyMi42LTYuNCAyNS4yLTguOS0yLjQtMTYuMi04LjktMTkuOS0xNy4zIDIuMSAxLjEgOC43IDIuNSAyNC42LTkuMnpcIi8+XHJcbjxwYXRoIGQ9XCJtNjkuNiA5Mi4zYzAgMi41IDEuOSA5LjEgMTguNSAxOC4zLTAuMyAwLjYtMC42IDEuMy0wLjYgMi4xLTE4LjUtMS42LTI0IDIuNi0yNS43IFxyXG4gICAgNC45cS0wLjMtMi4yLTAuMy00LjZjMC04IDMuMS0xNS4zIDguMS0yMC43elwiLz5cclxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGZpbGw9XCJ3aGl0ZVwiIGQ9XCJtNjkuNiA5Mi4zYzAgMi41IDEuOSA5LjEgMTguNSAxOC4zLTAuMyAwLjYtMC42IDEuMy0wLjYgMi4xLTE4LjUtMS42LTI0IDIuNi0yNS43IFxyXG4gICAgNC45cS0wLjMtMi4yLTAuMy00LjZjMC04IDMuMS0xNS4zIDguMS0yMC43em0xOSAyMy43YzAuNCAwLjYgMSAxIDEuNyAxLjMtOC44IDE1LjctNy43IDIyLjYtNi40IDI1LjItOC45LTIuNC0xNi4yLTguOS0xOS45LTE3LjMgXHJcbiAgICAyLjEgMS4xIDguNyAyLjUgMjQuNi05LjJ6bTMuNS0zMy42YzQuOSAwIDkuNiAxLjIgMTMuNyAzLjItMi43IDAuOS04LjMgNS0xMi4zIDIzcS0wLjctMC4yLTEuNC0wLjItMC40IDAtMC44IFxyXG4gICAgMGMtNC4zLTIwLjEtMTAuNi0yMi43LTEyLjUtMjMgNC0xLjkgOC41LTMgMTMuMy0zem0xLjQgMzVxMS4xLTAuMyAxLjktMS4xYzEzLjcgMTIuOCAyMC43IDEyLjcgMjMuMiAxMS45LTQuNSA3LjktMTIuNCBcclxuICAgIDEzLjYtMjEuNyAxNS4xIDEuNi0yLjEgMy45LTguNi0zLjQtMjUuOXptMi45LTYuMWMxOC42LTguMyAxOS45LTE1IDE5LjgtMTcuMSA0LjEgNS4yIDYuNSAxMS43IDYuNSAxOC44cTAgNC0xIFxyXG4gICAgNy43Yy0xLjQtMi40LTYuNS03LjEtMjUtNy4ycTAtMC4yIDAtMC41IDAtMC45LTAuMy0xLjd6bS02LjEgNS45djAuMXEwLTAuMSAwLTAuMXpcIi8+XHJcbjxwYXRoIGQ9XCJtODcuNSAxMTIuN3EwIDAgMCAwYzAtMC44IDAuMy0xLjUgMC42LTIuMXEwLjEgMCAwLjEtMC4xYzAuNi0xIDEuNy0xLjggMy0ycTAuMSAwIDAuMS0wLjEgMC40IDAgMC44IDAgMC43IDAgMS40IDAuMiAwLjEgXHJcbiAgICAwIDAuMSAwLjFjMS4zIDAuNCAyLjIgMS4zIDIuOCAyLjVxMCAwIDAgMC4xIDAuMyAwLjggMC4zIDEuNyAwIDAuMyAwIDAuNSAwIDAuMSAwIDAuMWMtMC4xIDEtMC42IDEuOS0xLjMgMi42cTAgMC4xIFxyXG4gICAgMCAwLjEtMC44IDAuOC0xLjkgMS4xIDAgMCAwIDAtMC43IDAuMy0xLjQgMC4zYy0wLjcgMC0xLjMtMC4yLTEuOC0wLjR2LTAuMXEwIDAgMCAwLjFjLTAuNy0wLjMtMS4zLTAuNy0xLjctMS4zcS0wLjEgXHJcbiAgICAwLTAuMS0wLjFjLTAuNi0wLjctMS0xLjgtMS0yLjlxMC0wLjEgMC0wLjN6XCIvPlxyXG4gICAgPC9nPlxyXG48L3N2Zz5gO1xyXG59XHJcbmV4cG9ydHMuc3ZnID0gc3ZnO1xyXG5leHBvcnRzLmZpbmlzaEljb24gPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiaXNvLTg4NTktMVwiPz5cclxuPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPlxyXG48c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG5cdCB2aWV3Qm94PVwiMCAwIDUxMS45ODggNTExLjk4OFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTg4IDUxMS45ODg7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cclxuPHBhdGggc3R5bGU9XCJmaWxsOiNFNkU5RUQ7XCIgZD1cIk00NDEuODMzLDY2LjA2Yy0zLjc1LTEuNzUtOC4xNzItMS4xNzItMTEuMzU5LDEuNDg0Yy0yNC4wNDUsMjAuMTEtNTMuMDQ1LDMwLjc1LTgzLjgyNywzMC43NVxyXG5cdGMtMzAuNDgyLDAtNjAuMzExLTEwLjkyMS04My45OTgtMzAuNzVjLTI3Ljg4OS0yMy4yNDktNjEuNTI5LTM1LjU0Ni05Ny4zMS0zNS41NDZjLTM0Ljc4LDAtNjguODU3LDEyLjI2Ni05Ni4xMzksMzQuNTYyXHJcblx0Yy0zLjEyNSwxLjg3NS01LjIwMiw1LjI4MS01LjIwMiw5LjE3MnYyMzIuNTI1YzAsNC4xNDEsMi4zOSw3LjkwNiw2LjE0LDkuNjU2YzMuNzY2LDEuNzUsOC4xODgsMS4xNzIsMTEuMzU5LTEuNDg0XHJcblx0YzI0LjAzMS0yMC4wOTMsNTMuMDMtMzAuNzAyLDgzLjg0Mi0zMC43MDJzNTkuNzk2LDEwLjYwOSw4My44MjYsMzAuNzE4YzI3LjQ2OCwyMi45MjIsNjIuMDkzLDM1LjU0Nyw5Ny40ODEsMzUuNTQ3XHJcblx0YzM0Ljc4MSwwLDY4Ljg1OC0xMi4yNjYsOTYuMTM5LTM0LjU3OGMzLjEwOS0xLjg1OSw1LjIwMy01LjI2Niw1LjIwMy05LjE1NlY3NS43MzJDNDQ3Ljk4OSw3MS41OTIsNDQ1LjU4Myw2Ny44MjYsNDQxLjgzMyw2Ni4wNnpcIlxyXG5cdC8+XHJcbjxnPlxyXG5cdDxwYXRoIHN0eWxlPVwiZmlsbDojNDM0QTU0O1wiIGQ9XCJNMzUxLjk5MSwzNTEuODk4YzMyLjkwNi0xLjE4OCw2NC45MjEtMTMuMzEyLDkwLjc5NS0zNC40ODRjMy4xMDktMS44NTksNS4yMDMtNS4yNjYsNS4yMDMtOS4xNTZcclxuXHRcdFY3NS43MzJjMC00LjE0MS0yLjQwNi03LjkwNi02LjE1Ni05LjY3MmMtMy43NS0xLjc1LTguMTcyLTEuMTcyLTExLjM1OSwxLjQ4NGMtMjIuNjU1LDE4Ljk1My00OS42ODYsMjkuNDY4LTc4LjQ4MiwzMC42NFxyXG5cdFx0TDM1MS45OTEsMzUxLjg5OEwzNTEuOTkxLDM1MS44OTh6XCIvPlxyXG5cdDxwYXRoIHN0eWxlPVwiZmlsbDojNDM0QTU0O1wiIGQ9XCJNMjU1LjgwNiw2Mi4xNTRjLTI2LjQ2OC0xOS43NDktNTcuNTYyLTMwLjE1NS05MC40NjctMzAuMTU1Yy0xLjc4MSwwLTMuNTYyLDAuMDQ3LTUuMzQ0LDAuMTA5XHJcblx0XHR2MjUzLjcyOWMxLjc2Ni0wLjA3OCwzLjU0Ny0wLjEwOSw1LjM0NC0wLjEwOWMzMC44MTIsMCw1OS43OTYsMTAuNjA5LDgzLjgyNiwzMC43MThjMi4xNzIsMS44MTIsNC4zOTEsMy41NDcsNi42NDEsNS4yMTlWNjIuMTU0elwiXHJcblx0XHQvPlxyXG48L2c+XHJcbjxwYXRoIHN0eWxlPVwiZmlsbDojRTZFOUVEO1wiIGQ9XCJNNjkuMjAxLDY2LjU2Yy0zLjEyNSwxLjg3NS01LjIwMiw1LjI4MS01LjIwMiw5LjE3MnYyMzIuNTI1YzAsNC4xNDEsMi4zOSw3LjkwNiw2LjE0LDkuNjU2XHJcblx0YzMuNzY2LDEuNzUsOC4xODgsMS4xNzIsMTEuMzU5LTEuNDg0YzIyLjY0MS0xOC45MjEsNDkuNjg3LTI5LjQzNyw3OC40OTgtMzAuNTkzbDAsMFYzMi4xMDhcclxuXHRDMTI3LjA5MSwzMy4yOTYsOTUuMDkyLDQ1LjQwNSw2OS4yMDEsNjYuNTZ6XCIvPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6IzQzNEE1NDtcIiBkPVwiTTE1Ni4xNTIsMTYxLjY2OGMtMzIuNjcxLDAtNjQuNzc5LDguOTM4LTkyLjE1MywyNS40MDV2MTIxLjE4NWMwLDQuMTQxLDIuMzksNy45MDYsNi4xNCw5LjY1NlxyXG5cdGMzLjc2NiwxLjc1LDguMTg4LDEuMTcyLDExLjM1OS0xLjQ4NGMyMi42NDEtMTguOTIxLDQ5LjY4Ny0yOS40MzcsNzguNDk4LTMwLjU5M2wwLDBWMTYxLjcxNVxyXG5cdEMxNTguNzE1LDE2MS42ODMsMTU3LjQzMywxNjEuNjY4LDE1Ni4xNTIsMTYxLjY2OHpcIi8+XHJcbjxnPlxyXG5cdDxwYXRoIHN0eWxlPVwiZmlsbDojRTZFOUVEO1wiIGQ9XCJNMjU1LjgwNiwzMjEuNjY0VjE5MS44MzljLTI4LjEyNC0xOS4wNjItNjAuOTgzLTI5LjQyMS05NS44MTEtMzAuMTI0djEyNC4xMjJcclxuXHRcdGMxLjc2Ni0wLjA3OCwzLjU0Ny0wLjEwOSw1LjM0NC0wLjEwOWMzMC44MTIsMCw1OS43OTYsMTAuNjA5LDgzLjgyNiwzMC43MThDMjUxLjMzOCwzMTguMjU4LDI1My41NTYsMzE5Ljk5MiwyNTUuODA2LDMyMS42NjR6XCIvPlxyXG5cdDxwYXRoIHN0eWxlPVwiZmlsbDojRTZFOUVEO1wiIGQ9XCJNNDQ3Ljk4OSwzMDguMjU4VjE5Ny4zNTRjLTI2LjQ1MiwyMC4wMTYtNTguMzExLDMwLjYwOS05Mi4xNTQsMzAuNjA5XHJcblx0XHRjLTEuMjgxLDAtMi41NjItMC4wMzEtMy44NDQtMC4wNjJ2MTIzLjk5OGMzMi45MDYtMS4xODgsNjQuOTIxLTEzLjMxMiw5MC43OTUtMzQuNDg0XHJcblx0XHRDNDQ1Ljg5NSwzMTUuNTU1LDQ0Ny45ODksMzEyLjE0OCw0NDcuOTg5LDMwOC4yNTh6XCIvPlxyXG48L2c+XHJcbjxwYXRoIHN0eWxlPVwiZmlsbDojRUQ1NTY0O1wiIGQ9XCJNNzQuNjU0LDUxMS45ODhjLTUuODkxLDAtMTAuNjU1LTQuNzY2LTEwLjY1NS0xMC42NTZWMTAuNjcxQzYzLjk5OSw0Ljc4LDY4Ljc2NCwwLDc0LjY1NCwwXHJcblx0czEwLjY3Miw0Ljc4MSwxMC42NzIsMTAuNjcxdjQ5MC42NjFDODUuMzI2LDUwNy4yMjMsODAuNTQ1LDUxMS45ODgsNzQuNjU0LDUxMS45ODh6XCIvPlxyXG48cGF0aCBzdHlsZT1cImZpbGw6IzQzNEE1NDtcIiBkPVwiTTM1MS45OTEsMjI3LjkwMWMtMzIuMjMyLTAuNzk3LTYzLjU3Ni0xMS42MDktODguNjctMzAuNjg3Yy0yLjQ2OS0xLjg1OS00Ljk2OS0zLjY1Ni03LjUxNS01LjM3NVxyXG5cdHYxMjkuODI1YzI2LjMxMiwxOS42MDksNTguMjQ5LDMwLjMyOCw5MC44NDEsMzAuMzI4YzEuNzgxLDAsMy41NjItMC4wMzEsNS4zNDQtMC4wOTRWMjI3LjkwMXpcIi8+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjwvc3ZnPmA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy53aW5uZXJzID0gZXhwb3J0cy5lbmlnaW5lID0gZXhwb3J0cy5nYXJhZ2UgPSB2b2lkIDA7XHJcbnZhciB1cmxzO1xyXG4oZnVuY3Rpb24gKHVybHMpIHtcclxuICAgIHVybHNbXCJnYXJhZ2VcIl0gPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9nYXJhZ2VcIjtcclxuICAgIHVybHNbXCJlbmdpbmVcIl0gPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lbmdpbmVcIjtcclxuICAgIHVybHNbXCJ3aW5uZXJzXCJdID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvd2lubmVyc1wiO1xyXG59KSh1cmxzIHx8ICh1cmxzID0ge30pKTtcclxuY2xhc3MgR2FyYWdlIHtcclxuICAgIGdldEFsbENhcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybHMuZ2FyYWdlKTtcclxuICAgIH1cclxuICAgIGdldExpbWl0ZWRDYXJzKHBhZ2VOKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZldGNoKHVybHMuZ2FyYWdlICsgYD9fcGFnZT0ke3BhZ2VOfSZfbGltaXQ9NGApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkQ2FyKGNhck5hbWUsIGNhckNvbG9yKSB7XHJcbiAgICAgICAgZmV0Y2godXJscy5nYXJhZ2UsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZTogY2FyTmFtZSwgY29sb3I6IGNhckNvbG9yIH0pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlQ2FyKGlkKSB7XHJcbiAgICAgICAgZmV0Y2godXJscy5nYXJhZ2UgKyBgLyR7aWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlQ2FyKGlkLCBjYXJOYW1lLCBjYXJDb2xvcikge1xyXG4gICAgICAgIGZldGNoKHVybHMuZ2FyYWdlICsgYC8ke2lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lOiBjYXJOYW1lLCBjb2xvcjogY2FyQ29sb3IgfSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgRW5naW5lIHtcclxuICAgIHN0YXJ0KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHlpZWxkIGZldGNoKHVybHMuZW5naW5lICsgYD9pZD0ke2lkfSZzdGF0dXM9c3RhcnRlZGAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdG9wKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgeWllbGQgZmV0Y2godXJscy5lbmdpbmUgKyBgP2lkPSR7aWR9JnN0YXR1cz1zdG9wcGVkYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRyaXZlKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHlpZWxkIGZldGNoKHVybHMuZW5naW5lICsgYD9pZD0ke2lkfSZzdGF0dXM9ZHJpdmVgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBXaW5uZXJzIHtcclxuICAgIGdldEFsbFdpbmVycygpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godXJscy53aW5uZXJzKTtcclxuICAgIH1cclxuICAgIGFkZFdpbm5lcihpZCwgdGltZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSB5aWVsZCBmZXRjaCh1cmxzLndpbm5lcnMsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZDogaWQsIHdpbnM6IDEsIHRpbWU6IHRpbWUgfSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0V2lubmVyKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHlpZWxkIGZldGNoKHVybHMud2lubmVycyArIGAvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVXaW5uZXIoaWQsIHdpbnMsIHRpbWUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0geWllbGQgZmV0Y2godXJscy53aW5uZXJzICsgYC8ke2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHdpbnM6IHdpbnMsIHRpbWU6IHRpbWUgfSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlV2lubmVyKGlkKSB7XHJcbiAgICAgICAgZmV0Y2godXJscy53aW5uZXJzICsgYC8ke2lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmdhcmFnZSA9IG5ldyBHYXJhZ2UoKTtcclxuZXhwb3J0cy5lbmlnaW5lID0gbmV3IEVuZ2luZSgpO1xyXG5leHBvcnRzLndpbm5lcnMgPSBuZXcgV2lubmVycygpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNob3dIaWRlID0gdm9pZCAwO1xyXG5jb25zdCBzaG93V2lubmVyc18xID0gcmVxdWlyZShcIi4uL2dldENhcnMmV2lubmVycy9zaG93V2lubmVyc1wiKTtcclxuZnVuY3Rpb24gc2hvd0hpZGUoKSB7XHJcbiAgICBsZXQgZ2FyYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZS12aWV3Jyk7XHJcbiAgICBsZXQgd2lubmVyc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzLXZpZXcnKTtcclxuICAgIGxldCBnYXJhZ2VCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKTtcclxuICAgIGxldCB3aW5uZXJzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycycpO1xyXG4gICAgZ2FyYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGlkZUJsb2NrKGdhcmFnZUJsb2NrLCB3aW5uZXJzQmxvY2spKTtcclxuICAgIHdpbm5lcnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaGlkZUJsb2NrKHdpbm5lcnNCbG9jaywgZ2FyYWdlQmxvY2spO1xyXG4gICAgICAgICgwLCBzaG93V2lubmVyc18xLnNob3dXaW5uZXJzKSgpO1xyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBoaWRlQmxvY2soc2hvd2luZ0VsLCBoaWRpbmdFbCkge1xyXG4gICAgICAgIHNob3dpbmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBoaWRpbmdFbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnNob3dIaWRlID0gc2hvd0hpZGU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByZW5kZXJIdG1sXzEgPSByZXF1aXJlKFwiLi9vdGhlcnMvcmVuZGVySHRtbFwiKTtcclxucmVxdWlyZShcIi4vdmlld3Mvdmlld1wiKTtcclxucmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi9nZXRDYXJzJldpbm5lcnMvYWRkQ2FyXCIpO1xyXG5yZXF1aXJlKFwiLi9nZXRDYXJzJldpbm5lcnMvc2hvd0NhclwiKTtcclxucmVxdWlyZShcIi4vZ2V0Q2FycyZXaW5uZXJzL2RlbGV0ZUNhclwiKTtcclxucmVxdWlyZShcIi4vZ2V0Q2FycyZXaW5uZXJzL3N0YXJ0U3RvcFwiKTtcclxucmVxdWlyZShcIi4vZ2V0Q2FycyZXaW5uZXJzL3JhY2VcIik7XHJcbnJlcXVpcmUoXCIuL2dldENhcnMmV2lubmVycy9zaG93V2lubmVyc1wiKTtcclxuKDAsIHJlbmRlckh0bWxfMS5yZW5kZXJIdG1sKSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=