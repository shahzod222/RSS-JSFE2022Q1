/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/garage.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/garage.css ***!
  \******************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/smoke.png */ "./src/assets/smoke.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/wheel.png */ "./src/assets/wheel.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/finish.png */ "./src/assets/finish.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&family=Ubuntu:wght@500&family=Open+Sans:wght@500&family=PT+Sans&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cars {\r\n    margin-top: 20px;\r\n}\r\n\r\n.modal-body,\r\n.modal-content {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal-body {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    z-index: 2;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-content {\r\n    width: 250px;\r\n    height: 150px;\r\n    font-size: 25px;\r\n    font-family: 'PT Sans', sans-serif;\r\n    color: #282d3c;\r\n    background-color: #edf1ff;\r\n    border-radius: 20px;\r\n    padding: 5px;\r\n    cursor: default;\r\n}\r\n\r\n.view-btns {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.view-btns button {\r\n    background: #56c6a9;\r\n}\r\n\r\n.view-btns button:hover {\r\n    background: #39ac8e;\r\n}\r\n\r\n.form-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 400px;\r\n}\r\n\r\n.race-btns {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    max-width: 400px;\r\n    margin-top: 5px;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 5px 0;\r\n}\r\n\r\nform input[type='color']:disabled {\r\n    cursor: default;\r\n    opacity: 0.3;\r\n}\r\n\r\nform input[type='search'] {\r\n    border: none;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    width: 200px;\r\n    height: 30px;\r\n    font-size: 18px;\r\n    margin: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\nform input[type='color'] {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    background: none;\r\n    height: 42px;\r\n    width: 70px;\r\n    border: 0;\r\n    cursor: pointer;\r\n    padding: 0;\r\n    margin: 0 5px;\r\n    background-color: transparent;\r\n}\r\n\r\nform input[type='color']::-webkit-color-swatch {\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\nbutton {\r\n    width: 150px;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    font-size: 16px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    transition: 0.5s ease;\r\n    cursor: pointer;\r\n    opacity: 1;\r\n}\r\n\r\nbutton:hover {\r\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\nbutton:disabled,\r\nbutton:disabled:hover {\r\n    cursor: default;\r\n    background: #efefef;\r\n    opacity: 0.3;\r\n    box-shadow: none;\r\n}\r\n\r\n.add-car {\r\n    background-color: #95ba5e;\r\n}\r\n\r\n.add-car:hover {\r\n    background-color: #7ca145;\r\n}\r\n\r\n.car-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.car-info {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.length {\r\n    text-align: center;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 25px;\r\n    color: #edf1ff;\r\n    margin: 0;\r\n}\r\n\r\n.car-name {\r\n    color: #a0daa9;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 22px;\r\n    margin: 0;\r\n    text-shadow: 0 0 5px black;\r\n}\r\n\r\n.car-icon {\r\n    position: relative;\r\n    animation-timing-function: linear;\r\n    width: 120px;\r\n    height: 50px;\r\n    stroke: black;\r\n}\r\n\r\n.car-model {\r\n    width: 120px;\r\n    height: 50px;\r\n    position: relative;\r\n    stroke: black;\r\n}\r\n\r\n.car-smoke {\r\n    display: block;\r\n    position: relative;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    width: 30px;\r\n    height: 20px;\r\n    background-size: 30px 20px;\r\n    left: 85px;\r\n    bottom: 50px;\r\n    display: none;\r\n}\r\n\r\n.l-wheel,\r\n.r-wheel {\r\n    position: relative;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: 20px 20px;\r\n    display: block;\r\n}\r\n\r\n.car-icon svg g {\r\n    display: none;\r\n}\r\n\r\n.l-wheel {\r\n    bottom: 30px;\r\n    left: 12.5px;\r\n}\r\n\r\n.r-wheel {\r\n    bottom: 49px;\r\n    left: 89px;\r\n}\r\n\r\n.remove-car {\r\n    margin: 0 15px;\r\n    background: #e3654f;\r\n}\r\n.remove-car:hover {\r\n    background: #dd4124;\r\n}\r\n\r\n.car-start {\r\n    width: 100px;\r\n}\r\n\r\n.gen-cars {\r\n    margin-top: 10px;\r\n}\r\n\r\n.road {\r\n    position: relative;\r\n    bottom: 15px;\r\n    width: 100%;\r\n    height: 5px;\r\n    background: white;\r\n}\r\n\r\n.car-road {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.start-stop {\r\n    display: flex;\r\n}\r\n\r\n.start-stop button {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin: 0 10px 0 0;\r\n}\r\n\r\n.update-btn,\r\n.update-car {\r\n    background: #4572ba;\r\n}\r\n\r\n.update-btn:hover,\r\n.update-car:hover {\r\n    background: #34568b;\r\n}\r\n\r\n.start-race,\r\n.reset-race {\r\n    background: #f5df4d;\r\n}\r\n\r\n.start-race:hover,\r\n.reset-race:hover {\r\n    background: #f1d30e;\r\n}\r\n\r\n.race-road {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\n.finish-icon {\r\n    display: block;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-size: 150px 10px;\r\n    width: 150px;\r\n    height: 10px;\r\n    position: relative;\r\n    top: 42px;\r\n    z-index: 1;\r\n    right: 30px;\r\n}\r\n\r\n.pagination {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 20px;\r\n    line-height: 23px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.pag-num {\r\n    color: #edf1ff;\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin: 0 50px;\r\n}\r\n\r\n.pag-prev-btn,\r\n.pag-next-btn {\r\n    width: 52px;\r\n    height: 52px;\r\n    border-radius: 50%;\r\n    font-size: 25px;\r\n    background-color: #a0daa9;\r\n    text-align: center;\r\n}\r\n\r\n.pag-prev-btn:hover,\r\n.pag-next-btn:hover {\r\n    background-color: #6cc67a;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/garage.css"],"names":[],"mappings":"AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,MAAM;IACN,OAAO;IACP,8BAA8B;IAC9B,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,kCAAkC;IAClC,cAAc;IACd,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,SAAS;IACT,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,SAAS;IACT,eAAe;IACf,UAAU;IACV,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,iCAAiC;IACjC,qBAAqB;IACrB,eAAe;IACf,UAAU;AACd;;AAEA;IACI;mDAC+C;AACnD;;AAEA;;IAEI,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,eAAe;IACf,cAAc;IACd,SAAS;AACb;;AAEA;IACI,cAAc;IACd,qCAAqC;IACrC,eAAe;IACf,SAAS;IACT,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;IACZ,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,mDAAsC;IACtC,WAAW;IACX,YAAY;IACZ,0BAA0B;IAC1B,UAAU;IACV,YAAY;IACZ,aAAa;AACjB;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,mDAAsC;IACtC,0BAA0B;IAC1B,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,cAAc;IACd,yDAA6C;IAC7C,2BAA2B;IAC3B,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,WAAW;AACf;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;;AAEA;IACI,cAAc;IACd,oCAAoC;IACpC,cAAc;AAClB;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;;IAEI,yBAAyB;AAC7B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Ubuntu:wght@500&family=Open+Sans:wght@500&family=PT+Sans&display=swap');\r\n\r\n.cars {\r\n    margin-top: 20px;\r\n}\r\n\r\n.modal-body,\r\n.modal-content {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal-body {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    z-index: 2;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-content {\r\n    width: 250px;\r\n    height: 150px;\r\n    font-size: 25px;\r\n    font-family: 'PT Sans', sans-serif;\r\n    color: #282d3c;\r\n    background-color: #edf1ff;\r\n    border-radius: 20px;\r\n    padding: 5px;\r\n    cursor: default;\r\n}\r\n\r\n.view-btns {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.view-btns button {\r\n    background: #56c6a9;\r\n}\r\n\r\n.view-btns button:hover {\r\n    background: #39ac8e;\r\n}\r\n\r\n.form-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 400px;\r\n}\r\n\r\n.race-btns {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    max-width: 400px;\r\n    margin-top: 5px;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 5px 0;\r\n}\r\n\r\nform input[type='color']:disabled {\r\n    cursor: default;\r\n    opacity: 0.3;\r\n}\r\n\r\nform input[type='search'] {\r\n    border: none;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    width: 200px;\r\n    height: 30px;\r\n    font-size: 18px;\r\n    margin: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\nform input[type='color'] {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    background: none;\r\n    height: 42px;\r\n    width: 70px;\r\n    border: 0;\r\n    cursor: pointer;\r\n    padding: 0;\r\n    margin: 0 5px;\r\n    background-color: transparent;\r\n}\r\n\r\nform input[type='color']::-webkit-color-swatch {\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\nbutton {\r\n    width: 150px;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    font-size: 16px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    transition: 0.5s ease;\r\n    cursor: pointer;\r\n    opacity: 1;\r\n}\r\n\r\nbutton:hover {\r\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\nbutton:disabled,\r\nbutton:disabled:hover {\r\n    cursor: default;\r\n    background: #efefef;\r\n    opacity: 0.3;\r\n    box-shadow: none;\r\n}\r\n\r\n.add-car {\r\n    background-color: #95ba5e;\r\n}\r\n\r\n.add-car:hover {\r\n    background-color: #7ca145;\r\n}\r\n\r\n.car-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.car-info {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.length {\r\n    text-align: center;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 25px;\r\n    color: #edf1ff;\r\n    margin: 0;\r\n}\r\n\r\n.car-name {\r\n    color: #a0daa9;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 22px;\r\n    margin: 0;\r\n    text-shadow: 0 0 5px black;\r\n}\r\n\r\n.car-icon {\r\n    position: relative;\r\n    animation-timing-function: linear;\r\n    width: 120px;\r\n    height: 50px;\r\n    stroke: black;\r\n}\r\n\r\n.car-model {\r\n    width: 120px;\r\n    height: 50px;\r\n    position: relative;\r\n    stroke: black;\r\n}\r\n\r\n.car-smoke {\r\n    display: block;\r\n    position: relative;\r\n    background: url('../assets/smoke.png');\r\n    width: 30px;\r\n    height: 20px;\r\n    background-size: 30px 20px;\r\n    left: 85px;\r\n    bottom: 50px;\r\n    display: none;\r\n}\r\n\r\n.l-wheel,\r\n.r-wheel {\r\n    position: relative;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: url('../assets/wheel.png');\r\n    background-size: 20px 20px;\r\n    display: block;\r\n}\r\n\r\n.car-icon svg g {\r\n    display: none;\r\n}\r\n\r\n.l-wheel {\r\n    bottom: 30px;\r\n    left: 12.5px;\r\n}\r\n\r\n.r-wheel {\r\n    bottom: 49px;\r\n    left: 89px;\r\n}\r\n\r\n.remove-car {\r\n    margin: 0 15px;\r\n    background: #e3654f;\r\n}\r\n.remove-car:hover {\r\n    background: #dd4124;\r\n}\r\n\r\n.car-start {\r\n    width: 100px;\r\n}\r\n\r\n.gen-cars {\r\n    margin-top: 10px;\r\n}\r\n\r\n.road {\r\n    position: relative;\r\n    bottom: 15px;\r\n    width: 100%;\r\n    height: 5px;\r\n    background: white;\r\n}\r\n\r\n.car-road {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.start-stop {\r\n    display: flex;\r\n}\r\n\r\n.start-stop button {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin: 0 10px 0 0;\r\n}\r\n\r\n.update-btn,\r\n.update-car {\r\n    background: #4572ba;\r\n}\r\n\r\n.update-btn:hover,\r\n.update-car:hover {\r\n    background: #34568b;\r\n}\r\n\r\n.start-race,\r\n.reset-race {\r\n    background: #f5df4d;\r\n}\r\n\r\n.start-race:hover,\r\n.reset-race:hover {\r\n    background: #f1d30e;\r\n}\r\n\r\n.race-road {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\n.finish-icon {\r\n    display: block;\r\n    background-image: url('../assets/finish.png');\r\n    background-size: 150px 10px;\r\n    width: 150px;\r\n    height: 10px;\r\n    position: relative;\r\n    top: 42px;\r\n    z-index: 1;\r\n    right: 30px;\r\n}\r\n\r\n.pagination {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 20px;\r\n    line-height: 23px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.pag-num {\r\n    color: #edf1ff;\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin: 0 50px;\r\n}\r\n\r\n.pag-prev-btn,\r\n.pag-next-btn {\r\n    width: 52px;\r\n    height: 52px;\r\n    border-radius: 50%;\r\n    font-size: 25px;\r\n    background-color: #a0daa9;\r\n    text-align: center;\r\n}\r\n\r\n.pag-prev-btn:hover,\r\n.pag-next-btn:hover {\r\n    background-color: #6cc67a;\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".winners,\r\n.winners-content,\r\n.winners-info {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.winners-info {\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.winners-content {\r\n    flex-direction: column;\r\n}\r\n\r\n.winners {\r\n    flex-direction: column-reverse;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    margin: 25px 0;\r\n    font-size: 0.9em;\r\n    font-family: 'Roboto Slab', serif;\r\n    max-width: 480px;\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\ntable thead tr {\r\n    background-color: #009879;\r\n    color: #ffffff;\r\n    text-align: left;\r\n}\r\n\r\ntable th,\r\ntable td {\r\n    padding: 12px 15px;\r\n}\r\n\r\ntable tbody tr {\r\n    border-bottom: 1px solid #dddddd;\r\n}\r\n\r\ntable tbody tr:nth-of-type(even) {\r\n    background-color: #f3f3f3;\r\n}\r\n\r\ntable tbody tr:last-of-type {\r\n    border-bottom: 2px solid #009879;\r\n}\r\n\r\nselect {\r\n    margin-left: 10px;\r\n    padding: 8px 12px;\r\n    color: #333;\r\n    background-color: #eee;\r\n    border: 1px solid #ddd;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    font-size: 17px;\r\n    font-family: 'Roboto Slab', serif;\r\n}\r\n\r\nselect:hover,\r\nselect:focus {\r\n    outline: none;\r\n    border: 1px solid #bbb;\r\n}\r\n\r\nselect option {\r\n    background: #fff;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/winners.css"],"names":[],"mappings":"AAEA;;;IAGI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,gBAAgB;IAChB,iCAAiC;IACjC,gBAAgB;IAChB,wCAAwC;AAC5C;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,gBAAgB;AACpB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,WAAW;IACX,sBAAsB;IACtB,sBAAsB;IACtB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,iCAAiC;AACrC;;AAEA;;IAEI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');\r\n\r\n.winners,\r\n.winners-content,\r\n.winners-info {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.winners-info {\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.winners-content {\r\n    flex-direction: column;\r\n}\r\n\r\n.winners {\r\n    flex-direction: column-reverse;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    margin: 25px 0;\r\n    font-size: 0.9em;\r\n    font-family: 'Roboto Slab', serif;\r\n    max-width: 480px;\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\ntable thead tr {\r\n    background-color: #009879;\r\n    color: #ffffff;\r\n    text-align: left;\r\n}\r\n\r\ntable th,\r\ntable td {\r\n    padding: 12px 15px;\r\n}\r\n\r\ntable tbody tr {\r\n    border-bottom: 1px solid #dddddd;\r\n}\r\n\r\ntable tbody tr:nth-of-type(even) {\r\n    background-color: #f3f3f3;\r\n}\r\n\r\ntable tbody tr:last-of-type {\r\n    border-bottom: 2px solid #009879;\r\n}\r\n\r\nselect {\r\n    margin-left: 10px;\r\n    padding: 8px 12px;\r\n    color: #333;\r\n    background-color: #eee;\r\n    border: 1px solid #ddd;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    font-size: 17px;\r\n    font-family: 'Roboto Slab', serif;\r\n}\r\n\r\nselect:hover,\r\nselect:focus {\r\n    outline: none;\r\n    border: 1px solid #bbb;\r\n}\r\n\r\nselect option {\r\n    background: #fff;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/css/garage.css":
/*!****************************!*\
  !*** ./src/css/garage.css ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_garage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./garage.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/garage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_garage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_garage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_garage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_garage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    const addCar = document.querySelector('.add-car');
    const carName = document.querySelector('.name');
    const carColor = document.querySelector('.color');
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
        const deleteBtns = document.querySelectorAll('.remove-car');
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
    const genBtn = document.querySelector('.gen-cars');
    genBtn.addEventListener('click', () => {
        generateCar();
    });
}
exports.generate100Cars = generate100Cars;
function generateCar() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://private-161df-carsapi1.apiary-mock.com/cars');
        const cars = (yield res.json());
        for (let i = 0; i < 100; i++) {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            const randomNumber = Math.floor(Math.random() * cars.length);
            const name = `${capFirstLetter(cars[randomNumber].make)} ${capFirstLetter(cars[randomNumber].model)}`;
            types_1.garage.addCar(name, randomColor);
            (0, showCar_1.showCar)();
        }
    });
}
function capFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


/***/ }),

/***/ "./src/getCars&Winners/modalWindow.ts":
/*!********************************************!*\
  !*** ./src/getCars&Winners/modalWindow.ts ***!
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
exports.showModal = void 0;
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
function showModal(id, time) {
    return __awaiter(this, void 0, void 0, function* () {
        const modalBody = document.querySelector('.modal-body');
        const modalContent = modalBody.querySelector('.modal-content');
        const resWinnerName = yield types_1.garage.getCar(id);
        const winnerName = (yield resWinnerName.json()).name;
        modalBody.classList.remove('hidden');
        modalContent.innerHTML = `Winner: ${winnerName}<br>Time: ${time}s`;
        modalBody.addEventListener('click', (event) => {
            if (event.target.className === 'modal-body') {
                modalBody.classList.add('hidden');
            }
        });
    });
}
exports.showModal = showModal;


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
const renderHtml_1 = __webpack_require__(/*! ../others/renderHtml */ "./src/others/renderHtml.ts");
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
const startStop_1 = __webpack_require__(/*! ./startStop */ "./src/getCars&Winners/startStop.ts");
renderHtml_1.startBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    renderHtml_1.startBtn.disabled = true;
    renderHtml_1.resetBtn.disabled = false;
    const res = yield types_1.garage.getLimitedCars(Number(renderHtml_1.pageNumber.innerHTML));
    const cars = (yield res.json());
    cars.forEach((el) => {
        const ABtn = (0, startStop_1.getButton)(document.querySelectorAll('.car-start'), String(el.id));
        const stopBtns = document.querySelectorAll('.car-stop');
        (0, startStop_1.start)(ABtn, String(el.id), stopBtns, renderHtml_1.startBtn, renderHtml_1.resetBtn);
    });
}));
renderHtml_1.resetBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    renderHtml_1.resetBtn.disabled = true;
    renderHtml_1.startBtn.disabled = false;
    const res = yield types_1.garage.getLimitedCars(Number(renderHtml_1.pageNumber.innerHTML));
    const cars = (yield res.json());
    cars.forEach((el) => {
        const startBtns = document.querySelectorAll('.car-start');
        const stopBtn = (0, startStop_1.getButton)(document.querySelectorAll('.car-stop'), String(el.id));
        (0, startStop_1.stopRace)(stopBtn, String(el.id), startBtns);
    });
}));


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
__webpack_require__(/*! ../css/garage.css */ "./src/css/garage.css");
function showCar() {
    return __awaiter(this, void 0, void 0, function* () {
        const resAllCars = yield types_1.garage.getAllCars();
        const allCars = (yield resAllCars.json());
        checkPagBtns(allCars.length);
        const resPagedCars = yield types_1.garage.getLimitedCars(Number(renderHtml_1.pageNumber.innerHTML));
        const data = (yield resPagedCars.json());
        renderHtml_1.cars.innerHTML = '';
        renderHtml_1.garageLength.innerHTML = `Garage: ${String(allCars.length)}`;
        for (let i = 0; i < data.length; i++) {
            showCarInHtml(data[i].name, data[i].color, data[i].id);
        }
        (0, startStop_1.startCar)();
        (0, startStop_1.stopCar)();
        (0, updateCar_1.updateCar)();
    });
}
exports.showCar = showCar;
function showCarInHtml(model, color, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const [carBlock, carInfo, startStop, raceRoad, carRoad, car] = createDivs(id);
        const [deleteBtn, startCar, stopCar, updateBtn] = createButtons(id);
        const [carName, carImg, road, finishFlag, carSmoke] = createOtherElems(model, color, id);
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
        carImg.append(carSmoke);
        renderHtml_1.cars.append(carBlock);
        (0, deleteCar_1.deleteCar)();
    });
}
function checkPagBtns(allCarsLength) {
    if ((Number(renderHtml_1.pageNumber.innerHTML) - 1) * 7 === allCarsLength) {
        renderHtml_1.pageNumber.innerHTML = String(Number(renderHtml_1.pageNumber.innerHTML) - 1);
    }
    if (Number(renderHtml_1.pageNumber.innerHTML) * 7 >= allCarsLength) {
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
function createDivs(id) {
    const carBlock = document.createElement('div');
    const carInfo = document.createElement('div');
    const startStop = document.createElement('div');
    const raceRoad = document.createElement('div');
    const carRoad = document.createElement('div');
    const car = document.createElement('div');
    carBlock.className = 'car-block';
    carInfo.className = 'car-info';
    carRoad.className = 'car-road';
    startStop.className = 'start-stop';
    raceRoad.className = 'race-road';
    car.className = 'car-model';
    car.id = String(id);
    return [carBlock, carInfo, startStop, raceRoad, carRoad, car];
}
function createButtons(id) {
    const deleteBtn = document.createElement('button');
    const startCar = document.createElement('button');
    const stopCar = document.createElement('button');
    const updateBtn = document.createElement('button');
    startCar.className = 'car-start';
    stopCar.className = 'car-stop';
    updateBtn.className = 'update-btn';
    deleteBtn.className = 'remove-car';
    stopCar.disabled = true;
    deleteBtn.innerHTML = 'Remove Car';
    updateBtn.name = String(id);
    startCar.innerHTML = 'A';
    stopCar.innerHTML = 'B';
    updateBtn.innerHTML = 'Update Car';
    deleteBtn.name = String(id);
    startCar.name = String(id);
    stopCar.name = String(id);
    return [deleteBtn, startCar, stopCar, updateBtn];
}
function createOtherElems(model, color, id) {
    const carName = document.createElement('p');
    const carImg = document.createElement('span');
    const road = document.createElement('hr');
    const finishFlag = document.createElement('span');
    const carSmoke = document.createElement('span');
    carName.className = 'car-name';
    carImg.className = `car-icon ${model}`;
    road.className = 'road';
    finishFlag.className = 'finish-icon';
    carSmoke.className = 'car-smoke';
    carName.innerHTML = model;
    carImg.innerHTML = (0, svgIcons_1.svg)(color);
    carImg.id = `car-${String(id)}`;
    carName.id = `name-${String(id)}`;
    return [carName, carImg, road, finishFlag, carSmoke];
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
exports.showWinners = exports.winnersInfo = void 0;
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
__webpack_require__(/*! ../css/winners.css */ "./src/css/winners.css");
const renderHtml_1 = __webpack_require__(/*! ../others/renderHtml */ "./src/others/renderHtml.ts");
const svgIcons_1 = __webpack_require__(/*! ../others/svgIcons */ "./src/others/svgIcons.ts");
const winnersPagination_1 = __webpack_require__(/*! ./winnersPagination */ "./src/getCars&Winners/winnersPagination.ts");
const winnersContent = document.createElement('div');
const table = document.createElement('table');
const tBody = document.createElement('tbody');
const winnersLength = document.createElement('p');
const tHeader = document.createElement('thead');
exports.winnersInfo = document.createElement('div');
exports.winnersInfo.className = 'winners-info';
function showWinners(sortType, sortOrder) {
    return __awaiter(this, void 0, void 0, function* () {
        let res;
        if (sortType && sortOrder) {
            res = yield types_1.winners.getLimitedWinners(Number(winnersPagination_1.winnersPageNumber.innerHTML), sortType, sortOrder);
        }
        else {
            res = yield types_1.winners.getLimitedWinners(Number(winnersPagination_1.winnersPageNumber.innerHTML));
        }
        const pagedWinners = (yield res.json());
        const res2 = yield types_1.winners.getAllWiners();
        const allWinners = (yield res2.json());
        checkPagination(allWinners.length);
        tHeader.innerHTML = '';
        tBody.innerHTML = '';
        winnersLength.innerHTML = `Winners: ${allWinners.length}`;
        winnersContent.className = 'winners-content';
        winnersLength.className = 'length';
        exports.winnersInfo.append(winnersLength);
        winnersContent.append(exports.winnersInfo);
        const tableHeaders = document.createElement('tr');
        for (let i = 0; i < 5; i++) {
            const tableHeader = document.createElement('th');
            if (i === 0)
                tableHeader.innerHTML = '№';
            if (i === 1)
                tableHeader.innerHTML = 'Image';
            if (i === 2)
                tableHeader.innerHTML = 'Name';
            if (i === 3)
                tableHeader.innerHTML = 'Wins';
            if (i === 4)
                tableHeader.innerHTML = 'Time';
            tableHeaders.append(tableHeader);
        }
        tHeader.append(tableHeaders);
        table.append(tHeader);
        for (let i = 0; i < pagedWinners.length; i++) {
            yield showWinnerInHtml(i + 1, pagedWinners[i].id, pagedWinners[i].wins, pagedWinners[i].time);
        }
        table.append(tBody);
        winnersContent.append(table);
        renderHtml_1.winnersBlock.append(winnersContent);
    });
}
exports.showWinners = showWinners;
function showWinnerInHtml(position, id, wins, time) {
    return __awaiter(this, void 0, void 0, function* () {
        const resCarName = yield types_1.garage.getCar(id);
        const car = (yield resCarName.json());
        const carName = car.name;
        const carColor = car.color;
        const row = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            const rowContent = document.createElement('td');
            if (j === 0)
                rowContent.innerHTML = String(position);
            if (j === 1)
                rowContent.innerHTML = (0, svgIcons_1.svg)(carColor);
            if (j === 2)
                rowContent.innerHTML = carName;
            if (j === 3)
                rowContent.innerHTML = String(wins);
            if (j === 4)
                rowContent.innerHTML = String(time);
            row.append(rowContent);
        }
        tBody.append(row);
    });
}
function checkPagination(allWinnnersLength) {
    if (Number(winnersPagination_1.winnersPageNumber.innerHTML) * 10 >= allWinnnersLength) {
        winnersPagination_1.nextBtn.disabled = true;
    }
    else {
        winnersPagination_1.nextBtn.disabled = false;
    }
    if (Number(winnersPagination_1.winnersPageNumber.innerHTML) === 1) {
        winnersPagination_1.prevBtn.disabled = true;
    }
    else {
        winnersPagination_1.prevBtn.disabled = false;
    }
}


/***/ }),

/***/ "./src/getCars&Winners/sortWinners.ts":
/*!********************************************!*\
  !*** ./src/getCars&Winners/sortWinners.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSortOptions = void 0;
const showWinners_1 = __webpack_require__(/*! ./showWinners */ "./src/getCars&Winners/showWinners.ts");
const selectOption = document.createElement('select');
for (let i = 0; i < 5; i++) {
    const option = document.createElement('option');
    if (i === 0) {
        option.innerHTML = 'Sort by:';
        option.disabled = true;
        option.selected = true;
    }
    if (i === 1)
        option.innerHTML = 'Wins, ASC';
    if (i === 2)
        option.innerHTML = 'Wins, DESC';
    if (i === 3)
        option.innerHTML = 'Time, ASC';
    if (i === 4)
        option.innerHTML = 'Time, DESC';
    selectOption.append(option);
}
showWinners_1.winnersInfo.append(selectOption);
selectOption.addEventListener('change', () => {
    const [sortType, sortOrder] = getSortOptions(selectOption.value);
    (0, showWinners_1.showWinners)(sortType, sortOrder);
});
function getSortOptions(value) {
    const arr = value.split(', ');
    const sortType = arr[0].toLowerCase();
    const sortOrder = arr[1];
    return [sortType, sortOrder];
}
exports.getSortOptions = getSortOptions;


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
const modalWindow_1 = __webpack_require__(/*! ./modalWindow */ "./src/getCars&Winners/modalWindow.ts");
const showWinners_1 = __webpack_require__(/*! ./showWinners */ "./src/getCars&Winners/showWinners.ts");
function startCar() {
    const startBtns = document.querySelectorAll('.car-start');
    const stopBtns = document.querySelectorAll('.car-stop');
    startBtns.forEach((el) => {
        el.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            start(el, el.name, stopBtns);
        }));
    });
}
exports.startCar = startCar;
function stopCar() {
    const startBtns = document.querySelectorAll('.car-start');
    const stopBtns = document.querySelectorAll('.car-stop');
    stopBtns.forEach((el) => {
        el.addEventListener('click', () => {
            stopRace(el, el.name, startBtns);
        });
    });
}
exports.stopCar = stopCar;
let winner = 0;
function stopRace(el, id, startBtns) {
    const car = document.getElementById(id);
    const icon = car.querySelector(`#car-${id}`);
    winner = 0;
    const smoke = icon.querySelector('.car-smoke');
    smoke.style.display = 'none';
    getButton(startBtns, id).disabled = false;
    el.disabled = true;
    car.style.left = '0';
    types_1.enigine.stop(Number(id));
}
exports.stopRace = stopRace;
function start(el, id, stopBtns, startBtn, resetBtn) {
    return __awaiter(this, void 0, void 0, function* () {
        const [car, icon, parent, stopBtn, lWheel, rWheel, smoke] = getElements(id, stopBtns);
        stopBtn.disabled = false;
        el.disabled = true;
        const start = (yield types_1.enigine.start(Number(id)));
        const time = start.distance / start.velocity;
        const [animation, elPosition, lW, rW] = animations(car, lWheel, rWheel, time, parent);
        let resetClicked = false;
        resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', () => {
            resetOrStop(lW, rW, animation, elPosition, smoke, stopBtn);
            resetClicked = true;
        });
        stopBtn.addEventListener('click', () => {
            resetOrStop(lW, rW, animation, elPosition, smoke, stopBtn);
            resetClicked = true;
        });
        const driveStatus = yield types_1.enigine.drive(Number(id));
        if (!resetClicked) {
            if (driveStatus === 500) {
                status500(lW, rW, animation, car, elPosition, smoke);
                if (startBtn)
                    startBtn.disabled = true;
            }
            else if (driveStatus === 200) {
                types_1.enigine.stop(Number(id));
                if (startBtn) {
                    stopBtn.disabled = false;
                    el.disabled = true;
                }
                if (!winner && startBtn)
                    status200(car, time);
            }
        }
    });
}
exports.start = start;
function getButton(b, n) {
    const btn = [...b].find((el) => el.name === n);
    return btn;
}
exports.getButton = getButton;
function animations(car, lWheel, rWheel, time, parent) {
    const animation = car.animate([
        {
            left: '0px',
        },
        {
            left: `${parent.clientWidth - 163}px`,
        },
    ], {
        duration: time,
    });
    const lW = lWheel.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: time });
    const rW = rWheel.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: time });
    const elPosition = setTimeout(() => {
        car.style.left = `${parent.clientWidth - 163}px`;
    }, time);
    return [animation, elPosition, lW, rW];
}
function status500(lW, rW, animation, car, elPosition, smoke) {
    lW.cancel();
    rW.cancel();
    animation.pause();
    car.style.left = getComputedStyle(car).left;
    animation.cancel();
    clearTimeout(elPosition);
    smoke.style.display = 'block';
}
function status200(car, time) {
    return __awaiter(this, void 0, void 0, function* () {
        winner = Number(car.id);
        const add = types_1.winners.addWinner(winner, Math.round(time / 1000));
        (0, modalWindow_1.showModal)(winner, Math.round(time / 1000));
        if ((yield add).status === 500) {
            const get = (yield types_1.winners.getWinner(winner));
            const winCount = get.wins + 1;
            const bestTime = Math.round(time / 1000) > get.time ? get.time : Math.round(time / 1000);
            types_1.winners.updateWinner(winner, winCount, bestTime);
        }
        (0, showWinners_1.showWinners)();
    });
}
function resetOrStop(lW, rW, animation, elPosition, smoke, stopBtn) {
    animation.cancel();
    clearTimeout(elPosition);
    lW.cancel();
    rW.cancel();
    smoke.style.display = 'none';
    stopBtn.disabled = true;
}
function getElements(id, stopBtns) {
    const car = document.getElementById(id);
    const icon = car.querySelector(`#car-${id}`);
    const parent = document.querySelector('.race-road');
    const stopBtn = getButton(stopBtns, id);
    const lWheel = icon.querySelector('.l-wheel');
    const rWheel = icon.querySelector('.r-wheel');
    const smoke = icon.querySelector('.car-smoke');
    return [car, icon, parent, stopBtn, lWheel, rWheel, smoke];
}


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
    const updateCarBtn = document.querySelector('.update-car');
    const carName = document.querySelector('.update-name');
    const carColor = document.querySelector('.update-color');
    const updateBtns = document.querySelectorAll('.update-btn');
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
            types_1.garage.updateCar(carId, carName.value, carColor.value);
            (0, showCar_1.showCar)();
            carName.disabled = true;
            carName.value = '';
            carColor.disabled = true;
            carColor.value = '#efefef';
            updateCarBtn.disabled = true;
        }
    });
}
exports.updateCar = updateCar;


/***/ }),

/***/ "./src/getCars&Winners/winnersPagination.ts":
/*!**************************************************!*\
  !*** ./src/getCars&Winners/winnersPagination.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderWinnersPagination = exports.prevBtn = exports.winnersPageNumber = exports.nextBtn = void 0;
const renderHtml_1 = __webpack_require__(/*! ../others/renderHtml */ "./src/others/renderHtml.ts");
const showWinners_1 = __webpack_require__(/*! ./showWinners */ "./src/getCars&Winners/showWinners.ts");
exports.nextBtn = document.createElement('button');
exports.winnersPageNumber = document.createElement('p');
exports.prevBtn = document.createElement('button');
function renderWinnersPagination() {
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    exports.winnersPageNumber.className = 'pag-num';
    exports.prevBtn.className = 'pag-prev-btn';
    exports.nextBtn.className = 'pag-next-btn';
    exports.winnersPageNumber.innerHTML = '1';
    exports.prevBtn.innerHTML = '<';
    exports.nextBtn.innerHTML = '>';
    pagination.append(exports.prevBtn);
    pagination.append(exports.winnersPageNumber);
    pagination.append(exports.nextBtn);
    renderHtml_1.winnersBlock.append(pagination);
    winnersPagination();
}
exports.renderWinnersPagination = renderWinnersPagination;
function winnersPagination() {
    exports.nextBtn.addEventListener('click', () => {
        exports.winnersPageNumber.innerHTML = `${Number(exports.winnersPageNumber.innerHTML) + 1}`;
        (0, showWinners_1.showWinners)();
    });
    exports.prevBtn.addEventListener('click', () => {
        exports.winnersPageNumber.innerHTML = `${Number(exports.winnersPageNumber.innerHTML) - 1}`;
        (0, showWinners_1.showWinners)();
    });
}


/***/ }),

/***/ "./src/others/renderHtml.ts":
/*!**********************************!*\
  !*** ./src/others/renderHtml.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetBtn = exports.startBtn = exports.winnersBlock = exports.nextPage = exports.prevPage = exports.pageNumber = exports.garageLength = exports.cars = void 0;
const addCar_1 = __webpack_require__(/*! ../getCars&Winners/addCar */ "./src/getCars&Winners/addCar.ts");
const generate100Cars_1 = __webpack_require__(/*! ../getCars&Winners/generate100Cars */ "./src/getCars&Winners/generate100Cars.ts");
const pagination_1 = __webpack_require__(/*! ../getCars&Winners/pagination */ "./src/getCars&Winners/pagination.ts");
const showCar_1 = __webpack_require__(/*! ../getCars&Winners/showCar */ "./src/getCars&Winners/showCar.ts");
const winnersPagination_1 = __webpack_require__(/*! ../getCars&Winners/winnersPagination */ "./src/getCars&Winners/winnersPagination.ts");
const view_1 = __webpack_require__(/*! ../views/view */ "./src/views/view.ts");
exports.cars = document.createElement('div');
exports.garageLength = document.createElement('p');
exports.pageNumber = document.createElement('p');
exports.prevPage = document.createElement('button');
exports.nextPage = document.createElement('button');
exports.winnersBlock = document.createElement('div');
exports.startBtn = document.createElement('button');
exports.resetBtn = document.createElement('button');
const garageBtn = document.createElement('button');
const winnersBtn = document.createElement('button');
const generateBtn = document.createElement('button');
const garageBlock = document.createElement('div');
const viewBtns = document.createElement('div');
const raceBtns = document.createElement('div');
const paginationBlock = document.createElement('div');
const formBlock = document.createElement('div');
const modalBody = document.createElement('div');
const modalContent = document.createElement('div');
exports.resetBtn.disabled = true;
exports.resetBtn.className = 'reset-race';
exports.startBtn.className = 'start-race';
garageBtn.className = 'garage-view';
winnersBtn.className = 'winners-view';
exports.winnersBlock.className = 'winners hidden';
garageBlock.className = 'garage';
raceBtns.className = 'race-btns';
exports.cars.className = 'cars';
generateBtn.className = 'gen-cars';
exports.pageNumber.className = 'page-num pag-num';
exports.prevPage.className = 'prev-btn pag-prev-btn';
exports.nextPage.className = 'next-btn pag-next-btn';
paginationBlock.className = 'pagination';
exports.garageLength.className = 'garage-length length';
viewBtns.className = 'view-btns';
formBlock.className = 'form-block';
modalBody.className = 'modal-body hidden';
modalContent.className = 'modal-content';
garageBtn.innerHTML = 'Garage';
winnersBtn.innerHTML = 'Winners';
generateBtn.innerHTML = 'Generate 100 Cars';
exports.pageNumber.innerHTML = '1';
exports.prevPage.innerHTML = '<';
exports.nextPage.innerHTML = '>';
exports.startBtn.innerHTML = 'Start Race';
exports.resetBtn.innerHTML = 'Reset Race';
for (let i = 0; i < 2; i++) {
    const form = document.createElement('form');
    const inputText = document.createElement('input');
    const inputColor = document.createElement('input');
    const submitBtn = document.createElement('button');
    form.action = '#';
    inputText.type = 'search';
    inputColor.type = 'color';
    submitBtn.type = 'submit';
    inputText.required = true;
    if (i === 0) {
        inputText.className = 'name';
        inputColor.className = 'color';
        submitBtn.className = 'add-car';
        submitBtn.innerHTML = 'Add New Car';
        inputColor.value = '#ffffff';
    }
    else {
        inputText.className = 'update-name';
        inputColor.className = 'update-color';
        submitBtn.className = 'update-car';
        submitBtn.innerHTML = 'Update Car';
        inputColor.value = '#efefef';
        inputColor.disabled = true;
        inputText.disabled = true;
        submitBtn.disabled = true;
    }
    form.append(inputText);
    form.append(inputColor);
    form.append(submitBtn);
    formBlock.append(form);
    garageBlock.append(formBlock);
}
paginationBlock.append(exports.prevPage);
paginationBlock.append(exports.pageNumber);
paginationBlock.append(exports.nextPage);
modalBody.append(modalContent);
viewBtns.append(garageBtn);
viewBtns.append(winnersBtn);
raceBtns.append(exports.startBtn);
raceBtns.append(exports.resetBtn);
garageBlock.append(raceBtns);
garageBlock.append(generateBtn);
garageBlock.append(exports.garageLength);
garageBlock.append(exports.cars);
garageBlock.append(paginationBlock);
garageBlock.append(modalBody);
document.body.append(viewBtns);
document.body.append(garageBlock);
document.body.append(exports.winnersBlock);
(0, view_1.showHide)();
(0, addCar_1.addNewCar)();
(0, generate100Cars_1.generate100Cars)();
(0, showCar_1.showCar)();
(0, pagination_1.pagination)();
(0, winnersPagination_1.renderWinnersPagination)();


/***/ }),

/***/ "./src/others/svgIcons.ts":
/*!********************************!*\
  !*** ./src/others/svgIcons.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.svg = void 0;
function svg(color) {
    return beforeColor + color + afterColor;
}
exports.svg = svg;
const beforeColor = `<div class="car-model"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 160" width="120" height="50">
<path fill=`;
const afterColor = ` fill-rule="evenodd" d="m4.1 67l3.9-3.6c0 0 11.6 2.1 19.5 1.8 7.8-0.3 16.4-11.7 8-11.5-2 0-4.2-0.4-6.3-1q0 0 0 
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
</svg>
<span class="l-wheel"></span>
<span class="r-wheel"></span>
</div>`;


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
    getCar(id) {
        return fetch(urls.garage + `/${id}`);
    }
    getAllCars() {
        return fetch(urls.garage);
    }
    getLimitedCars(pageN) {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch(urls.garage + `?_page=${pageN}&_limit=7`);
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
            const res = yield fetch(urls.engine + `?id=${id}&status=started`, {
                method: 'PATCH',
            });
            const data = res.json();
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
            const res = yield fetch(urls.engine + `?id=${id}&status=drive`, {
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
    getLimitedWinners(pageN, sortType, sortOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            if (sortType && sortOrder) {
                return yield fetch(urls.winners + `?_page=${pageN}&_limit=10&_sort=${sortType}&_order=${sortOrder}`);
            }
            else {
                return yield fetch(urls.winners + `?_page=${pageN}`);
            }
        });
    }
    addWinner(id, time) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(urls.winners, {
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
            const res = yield fetch(urls.winners + `/${id}`, {
                method: 'GET',
            });
            return res.json();
        });
    }
    updateWinner(id, wins, time) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(urls.winners + `/${id}`, {
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
const sortWinners_1 = __webpack_require__(/*! ../getCars&Winners/sortWinners */ "./src/getCars&Winners/sortWinners.ts");
function showHide() {
    const garageBtn = document.querySelector('.garage-view');
    const winnersBtn = document.querySelector('.winners-view');
    const garageBlock = document.querySelector('.garage');
    const winnersBlock = document.querySelector('.winners');
    garageBtn.addEventListener('click', () => hideBlock(garageBlock, winnersBlock));
    winnersBtn.addEventListener('click', () => {
        hideBlock(winnersBlock, garageBlock);
        const sort = document.getElementsByTagName('select')[0];
        if (sort) {
            if (sort.value !== 'Sort by:') {
                const [sortType, sortOrder] = (0, sortWinners_1.getSortOptions)(sort.value);
                (0, showWinners_1.showWinners)(sortType, sortOrder);
            }
        }
        else {
            (0, showWinners_1.showWinners)();
        }
    });
    function hideBlock(showingEl, hidingEl) {
        showingEl.classList.remove('hidden');
        hidingEl.classList.add('hidden');
    }
}
exports.showHide = showHide;


/***/ }),

/***/ "./src/assets/finish.png":
/*!*******************************!*\
  !*** ./src/assets/finish.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64016566776503dbae7a.png";

/***/ }),

/***/ "./src/assets/smoke.png":
/*!******************************!*\
  !*** ./src/assets/smoke.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f509ddbaac221b2d91c9.png";

/***/ }),

/***/ "./src/assets/wheel.png":
/*!******************************!*\
  !*** ./src/assets/wheel.png ***!
  \******************************/
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
__webpack_require__(/*! ./others/renderHtml */ "./src/others/renderHtml.ts");
__webpack_require__(/*! ./views/view */ "./src/views/view.ts");
__webpack_require__(/*! ./style.css */ "./src/style.css");
__webpack_require__(/*! ./getCars&Winners/addCar */ "./src/getCars&Winners/addCar.ts");
__webpack_require__(/*! ./getCars&Winners/showCar */ "./src/getCars&Winners/showCar.ts");
__webpack_require__(/*! ./getCars&Winners/deleteCar */ "./src/getCars&Winners/deleteCar.ts");
__webpack_require__(/*! ./getCars&Winners/startStop */ "./src/getCars&Winners/startStop.ts");
__webpack_require__(/*! ./getCars&Winners/race */ "./src/getCars&Winners/race.ts");
__webpack_require__(/*! ./getCars&Winners/showWinners */ "./src/getCars&Winners/showWinners.ts");
__webpack_require__(/*! ./getCars&Winners/modalWindow */ "./src/getCars&Winners/modalWindow.ts");
__webpack_require__(/*! ./getCars&Winners/sortWinners */ "./src/getCars&Winners/sortWinners.ts");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7OztBQ0FhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFPLENBQUMsdURBQXFCO0FBQzdCLG1CQUFPLENBQUMseUNBQWM7QUFDdEIsbUJBQU8sQ0FBQyxvQ0FBYTtBQUNyQixtQkFBTyxDQUFDLGlFQUEwQjtBQUNsQyxtQkFBTyxDQUFDLG1FQUEyQjtBQUNuQyxtQkFBTyxDQUFDLHVFQUE2QjtBQUNyQyxtQkFBTyxDQUFDLHVFQUE2QjtBQUNyQyxtQkFBTyxDQUFDLDZEQUF3QjtBQUNoQyxtQkFBTyxDQUFDLDJFQUErQjtBQUN2QyxtQkFBTyxDQUFDLDJFQUErQjtBQUN2QyxtQkFBTyxDQUFDLDJFQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY3NzL2dhcmFnZS5jc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jc3Mvd2lubmVycy5jc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY3NzL2dhcmFnZS5jc3M/ZWY2YiIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2Nzcy93aW5uZXJzLmNzcz8xY2RmIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9hZGRDYXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvZGVsZXRlQ2FyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvZ2V0Q2FycyZXaW5uZXJzL2dlbmVyYXRlMTAwQ2Fycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9tb2RhbFdpbmRvdy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9wYWdpbmF0aW9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvZ2V0Q2FycyZXaW5uZXJzL3JhY2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvc2hvd0Nhci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9zaG93V2lubmVycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9zb3J0V2lubmVycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9zdGFydFN0b3AudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvdXBkYXRlQ2FyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvZ2V0Q2FycyZXaW5uZXJzL3dpbm5lcnNQYWdpbmF0aW9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvb3RoZXJzL3JlbmRlckh0bWwudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9vdGhlcnMvc3ZnSWNvbnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy90eXBlcy90eXBlcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXdzL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvc21va2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3doZWVsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9maW5pc2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmZhbWlseT1VYnVudHU6d2dodEA1MDAmZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZmYW1pbHk9UFQrU2FucyZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2FycyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1ib2R5LFxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1ib2R5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogIzI4MmQzYztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjFmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi52aWV3LWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi52aWV3LWJ0bnMgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzU2YzZhOTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXctYnRucyBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzlhYzhlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5yYWNlLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nY29sb3InXTpkaXNhYmxlZCB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgb3BhY2l0eTogMC4zO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dFt0eXBlPSdjb2xvciddIHtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nY29sb3InXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsXFxyXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246ZGlzYWJsZWQsXFxyXFxuYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcclxcbiAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY2FyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1YmE1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jYXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NhMTQ1O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlbmd0aCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiAjZWRmMWZmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jYXItbmFtZSB7XFxyXFxuICAgIGNvbG9yOiAjYTBkYWE5O1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jYXItaWNvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgc3Ryb2tlOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1tb2RlbCB7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHN0cm9rZTogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jYXItc21va2Uge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMjBweDtcXHJcXG4gICAgbGVmdDogODVweDtcXHJcXG4gICAgYm90dG9tOiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubC13aGVlbCxcXHJcXG4uci13aGVlbCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWljb24gc3ZnIGcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubC13aGVlbCB7XFxyXFxuICAgIGJvdHRvbTogMzBweDtcXHJcXG4gICAgbGVmdDogMTIuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uci13aGVlbCB7XFxyXFxuICAgIGJvdHRvbTogNDlweDtcXHJcXG4gICAgbGVmdDogODlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1jYXIge1xcclxcbiAgICBtYXJnaW46IDAgMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2UzNjU0ZjtcXHJcXG59XFxyXFxuLnJlbW92ZS1jYXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0MTI0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXN0YXJ0IHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VuLWNhcnMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucm9hZCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm90dG9tOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXJvYWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtc3RvcCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1zdG9wIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZGF0ZS1idG4sXFxyXFxuLnVwZGF0ZS1jYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNDU3MmJhO1xcclxcbn1cXHJcXG5cXHJcXG4udXBkYXRlLWJ0bjpob3ZlcixcXHJcXG4udXBkYXRlLWNhcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzNDU2OGI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1yYWNlLFxcclxcbi5yZXNldC1yYWNlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2Y1ZGY0ZDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXJhY2U6aG92ZXIsXFxyXFxuLnJlc2V0LXJhY2U6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjFkMzBlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFjZS1yb2FkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmlzaC1pY29uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTUwcHggMTBweDtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiA0MnB4O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICByaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2luYXRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjNweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnLW51bSB7XFxyXFxuICAgIGNvbG9yOiAjZWRmMWZmO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMCA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnLXByZXYtYnRuLFxcclxcbi5wYWctbmV4dC1idG4ge1xcclxcbiAgICB3aWR0aDogNTJweDtcXHJcXG4gICAgaGVpZ2h0OiA1MnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwZGFhOTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnLXByZXYtYnRuOmhvdmVyLFxcclxcbi5wYWctbmV4dC1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmNjNjdhO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2dhcmFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0FB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OztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmZhbWlseT1VYnVudHU6d2dodEA1MDAmZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZmYW1pbHk9UFQrU2FucyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4uY2FycyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1ib2R5LFxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1ib2R5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogIzI4MmQzYztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjFmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi52aWV3LWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi52aWV3LWJ0bnMgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzU2YzZhOTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXctYnRucyBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzlhYzhlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5yYWNlLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nY29sb3InXTpkaXNhYmxlZCB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgb3BhY2l0eTogMC4zO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dFt0eXBlPSdjb2xvciddIHtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nY29sb3InXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsXFxyXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246ZGlzYWJsZWQsXFxyXFxuYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcclxcbiAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY2FyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1YmE1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jYXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NhMTQ1O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlbmd0aCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiAjZWRmMWZmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jYXItbmFtZSB7XFxyXFxuICAgIGNvbG9yOiAjYTBkYWE5O1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jYXItaWNvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgc3Ryb2tlOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1tb2RlbCB7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHN0cm9rZTogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jYXItc21va2Uge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9zbW9rZS5wbmcnKTtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IDIwcHg7XFxyXFxuICAgIGxlZnQ6IDg1cHg7XFxyXFxuICAgIGJvdHRvbTogNTBweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmwtd2hlZWwsXFxyXFxuLnItd2hlZWwge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL3doZWVsLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5jYXItaWNvbiBzdmcgZyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sLXdoZWVsIHtcXHJcXG4gICAgYm90dG9tOiAzMHB4O1xcclxcbiAgICBsZWZ0OiAxMi41cHg7XFxyXFxufVxcclxcblxcclxcbi5yLXdoZWVsIHtcXHJcXG4gICAgYm90dG9tOiA0OXB4O1xcclxcbiAgICBsZWZ0OiA4OXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlLWNhciB7XFxyXFxuICAgIG1hcmdpbjogMCAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZTM2NTRmO1xcclxcbn1cXHJcXG4ucmVtb3ZlLWNhcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNkZDQxMjQ7XFxyXFxufVxcclxcblxcclxcbi5jYXItc3RhcnQge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5nZW4tY2FycyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5yb2FkIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3R0b206IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXItcm9hZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1zdG9wIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXN0b3AgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udXBkYXRlLWJ0bixcXHJcXG4udXBkYXRlLWNhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0NTcyYmE7XFxyXFxufVxcclxcblxcclxcbi51cGRhdGUtYnRuOmhvdmVyLFxcclxcbi51cGRhdGUtY2FyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzM0NTY4YjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXJhY2UsXFxyXFxuLnJlc2V0LXJhY2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjVkZjRkO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtcmFjZTpob3ZlcixcXHJcXG4ucmVzZXQtcmFjZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmMWQzMGU7XFxyXFxufVxcclxcblxcclxcbi5yYWNlLXJvYWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluaXNoLWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvZmluaXNoLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogNDJweDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcmlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdpbmF0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZy1udW0ge1xcclxcbiAgICBjb2xvcjogI2VkZjFmZjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDAgNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZy1wcmV2LWJ0bixcXHJcXG4ucGFnLW5leHQtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDUycHg7XFxyXFxuICAgIGhlaWdodDogNTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGRhYTk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZy1wcmV2LWJ0bjpob3ZlcixcXHJcXG4ucGFnLW5leHQtYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZjYzY3YTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK1NsYWI6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLndpbm5lcnMsXFxyXFxuLndpbm5lcnMtY29udGVudCxcXHJcXG4ud2lubmVycy1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXJzLWluZm8ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXJzLWNvbnRlbnQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVycyB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBtYXJnaW46IDI1cHggMDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcclxcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0aGVhZCB0ciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk4Nzk7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0aCxcXHJcXG50YWJsZSB0ZCB7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGJvZHkgdHIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGJvZHkgdHI6bnRoLW9mLXR5cGUoZXZlbikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0Ym9keSB0cjpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwOTg3OTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Q6aG92ZXIsXFxyXFxuc2VsZWN0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IG9wdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvd2lubmVycy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztJQUdJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytTbGFiOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi53aW5uZXJzLFxcclxcbi53aW5uZXJzLWNvbnRlbnQsXFxyXFxuLndpbm5lcnMtaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVycy1pbmZvIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVycy1jb250ZW50IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lcnMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXHJcXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGhlYWQgdHIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ODc5O1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGgsXFxyXFxudGFibGUgdGQge1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRib2R5IHRyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRib2R5IHRyOm50aC1vZi10eXBlKGV2ZW4pIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGJvZHkgdHI6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDk4Nzk7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0OmhvdmVyLFxcclxcbnNlbGVjdDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCBvcHRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2Mzk0NTtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTQ1O1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FyYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FyYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93aW5uZXJzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2lubmVycy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5hZGROZXdDYXIgPSB2b2lkIDA7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXMvdHlwZXNcIik7XHJcbmNvbnN0IHNob3dDYXJfMSA9IHJlcXVpcmUoXCIuL3Nob3dDYXJcIik7XHJcbmZ1bmN0aW9uIGFkZE5ld0NhcigpIHtcclxuICAgIGNvbnN0IGFkZENhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtY2FyJyk7XHJcbiAgICBjb25zdCBjYXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKTtcclxuICAgIGNvbnN0IGNhckNvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yJyk7XHJcbiAgICBhZGRDYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChjYXJOYW1lLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHR5cGVzXzEuZ2FyYWdlLmFkZENhcihjYXJOYW1lLnZhbHVlLCBjYXJDb2xvci52YWx1ZSk7XHJcbiAgICAgICAgICAgICgwLCBzaG93Q2FyXzEuc2hvd0NhcikoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjYXJOYW1lLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGNhckNvbG9yLnZhbHVlID0gJyNmZmZmZmYnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuYWRkTmV3Q2FyID0gYWRkTmV3Q2FyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGVsZXRlQ2FyID0gdm9pZCAwO1xyXG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzL3R5cGVzXCIpO1xyXG5jb25zdCBzaG93Q2FyXzEgPSByZXF1aXJlKFwiLi9zaG93Q2FyXCIpO1xyXG5mdW5jdGlvbiBkZWxldGVDYXIoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLWNhcicpO1xyXG4gICAgICAgIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlc18xLmdhcmFnZS5yZW1vdmVDYXIoTnVtYmVyKGVsLm5hbWUpKTtcclxuICAgICAgICAgICAgICAgIHR5cGVzXzEud2lubmVycy5yZW1vdmVXaW5uZXIoTnVtYmVyKGVsLm5hbWUpKTtcclxuICAgICAgICAgICAgICAgICgwLCBzaG93Q2FyXzEuc2hvd0NhcikoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmRlbGV0ZUNhciA9IGRlbGV0ZUNhcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdlbmVyYXRlMTAwQ2FycyA9IHZvaWQgMDtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy90eXBlc1wiKTtcclxuY29uc3Qgc2hvd0Nhcl8xID0gcmVxdWlyZShcIi4vc2hvd0NhclwiKTtcclxuZnVuY3Rpb24gZ2VuZXJhdGUxMDBDYXJzKCkge1xyXG4gICAgY29uc3QgZ2VuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlbi1jYXJzJyk7XHJcbiAgICBnZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZ2VuZXJhdGVDYXIoKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZ2VuZXJhdGUxMDBDYXJzID0gZ2VuZXJhdGUxMDBDYXJzO1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUNhcigpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2goJ2h0dHBzOi8vcHJpdmF0ZS0xNjFkZi1jYXJzYXBpMS5hcGlhcnktbW9jay5jb20vY2FycycpO1xyXG4gICAgICAgIGNvbnN0IGNhcnMgPSAoeWllbGQgcmVzLmpzb24oKSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21Db2xvciA9IGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhcnMubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGAke2NhcEZpcnN0TGV0dGVyKGNhcnNbcmFuZG9tTnVtYmVyXS5tYWtlKX0gJHtjYXBGaXJzdExldHRlcihjYXJzW3JhbmRvbU51bWJlcl0ubW9kZWwpfWA7XHJcbiAgICAgICAgICAgIHR5cGVzXzEuZ2FyYWdlLmFkZENhcihuYW1lLCByYW5kb21Db2xvcik7XHJcbiAgICAgICAgICAgICgwLCBzaG93Q2FyXzEuc2hvd0NhcikoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjYXBGaXJzdExldHRlcihzdHIpIHtcclxuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNob3dNb2RhbCA9IHZvaWQgMDtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy90eXBlc1wiKTtcclxuZnVuY3Rpb24gc2hvd01vZGFsKGlkLCB0aW1lKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ib2R5Jyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gbW9kYWxCb2R5LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50Jyk7XHJcbiAgICAgICAgY29uc3QgcmVzV2lubmVyTmFtZSA9IHlpZWxkIHR5cGVzXzEuZ2FyYWdlLmdldENhcihpZCk7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyTmFtZSA9ICh5aWVsZCByZXNXaW5uZXJOYW1lLmpzb24oKSkubmFtZTtcclxuICAgICAgICBtb2RhbEJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9IGBXaW5uZXI6ICR7d2lubmVyTmFtZX08YnI+VGltZTogJHt0aW1lfXNgO1xyXG4gICAgICAgIG1vZGFsQm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ21vZGFsLWJvZHknKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbEJvZHkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2hvd01vZGFsID0gc2hvd01vZGFsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnBhZ2luYXRpb24gPSB2b2lkIDA7XHJcbmNvbnN0IHJlbmRlckh0bWxfMSA9IHJlcXVpcmUoXCIuLi9vdGhlcnMvcmVuZGVySHRtbFwiKTtcclxuY29uc3Qgc2hvd0Nhcl8xID0gcmVxdWlyZShcIi4vc2hvd0NhclwiKTtcclxuZnVuY3Rpb24gcGFnaW5hdGlvbigpIHtcclxuICAgIHJlbmRlckh0bWxfMS5uZXh0UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICByZW5kZXJIdG1sXzEucGFnZU51bWJlci5pbm5lckhUTUwgPSBgJHtOdW1iZXIocmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MKSArIDF9YDtcclxuICAgICAgICAoMCwgc2hvd0Nhcl8xLnNob3dDYXIpKCk7XHJcbiAgICB9KTtcclxuICAgIHJlbmRlckh0bWxfMS5wcmV2UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICByZW5kZXJIdG1sXzEucGFnZU51bWJlci5pbm5lckhUTUwgPSBgJHtOdW1iZXIocmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MKSAtIDF9YDtcclxuICAgICAgICAoMCwgc2hvd0Nhcl8xLnNob3dDYXIpKCk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnBhZ2luYXRpb24gPSBwYWdpbmF0aW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlbmRlckh0bWxfMSA9IHJlcXVpcmUoXCIuLi9vdGhlcnMvcmVuZGVySHRtbFwiKTtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy90eXBlc1wiKTtcclxuY29uc3Qgc3RhcnRTdG9wXzEgPSByZXF1aXJlKFwiLi9zdGFydFN0b3BcIik7XHJcbnJlbmRlckh0bWxfMS5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgcmVuZGVySHRtbF8xLnN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHJlbmRlckh0bWxfMS5yZXNldEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgcmVzID0geWllbGQgdHlwZXNfMS5nYXJhZ2UuZ2V0TGltaXRlZENhcnMoTnVtYmVyKHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCkpO1xyXG4gICAgY29uc3QgY2FycyA9ICh5aWVsZCByZXMuanNvbigpKTtcclxuICAgIGNhcnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBjb25zdCBBQnRuID0gKDAsIHN0YXJ0U3RvcF8xLmdldEJ1dHRvbikoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhci1zdGFydCcpLCBTdHJpbmcoZWwuaWQpKTtcclxuICAgICAgICBjb25zdCBzdG9wQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXItc3RvcCcpO1xyXG4gICAgICAgICgwLCBzdGFydFN0b3BfMS5zdGFydCkoQUJ0biwgU3RyaW5nKGVsLmlkKSwgc3RvcEJ0bnMsIHJlbmRlckh0bWxfMS5zdGFydEJ0biwgcmVuZGVySHRtbF8xLnJlc2V0QnRuKTtcclxuICAgIH0pO1xyXG59KSk7XHJcbnJlbmRlckh0bWxfMS5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgcmVuZGVySHRtbF8xLnJlc2V0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHJlbmRlckh0bWxfMS5zdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgcmVzID0geWllbGQgdHlwZXNfMS5nYXJhZ2UuZ2V0TGltaXRlZENhcnMoTnVtYmVyKHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCkpO1xyXG4gICAgY29uc3QgY2FycyA9ICh5aWVsZCByZXMuanNvbigpKTtcclxuICAgIGNhcnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBjb25zdCBzdGFydEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLXN0YXJ0Jyk7XHJcbiAgICAgICAgY29uc3Qgc3RvcEJ0biA9ICgwLCBzdGFydFN0b3BfMS5nZXRCdXR0b24pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXItc3RvcCcpLCBTdHJpbmcoZWwuaWQpKTtcclxuICAgICAgICAoMCwgc3RhcnRTdG9wXzEuc3RvcFJhY2UpKHN0b3BCdG4sIFN0cmluZyhlbC5pZCksIHN0YXJ0QnRucyk7XHJcbiAgICB9KTtcclxufSkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc2hvd0NhciA9IHZvaWQgMDtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy90eXBlc1wiKTtcclxuY29uc3QgZGVsZXRlQ2FyXzEgPSByZXF1aXJlKFwiLi9kZWxldGVDYXJcIik7XHJcbmNvbnN0IHN2Z0ljb25zXzEgPSByZXF1aXJlKFwiLi4vb3RoZXJzL3N2Z0ljb25zXCIpO1xyXG5jb25zdCBzdGFydFN0b3BfMSA9IHJlcXVpcmUoXCIuL3N0YXJ0U3RvcFwiKTtcclxuY29uc3QgcmVuZGVySHRtbF8xID0gcmVxdWlyZShcIi4uL290aGVycy9yZW5kZXJIdG1sXCIpO1xyXG5jb25zdCB1cGRhdGVDYXJfMSA9IHJlcXVpcmUoXCIuL3VwZGF0ZUNhclwiKTtcclxucmVxdWlyZShcIi4uL2Nzcy9nYXJhZ2UuY3NzXCIpO1xyXG5mdW5jdGlvbiBzaG93Q2FyKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCByZXNBbGxDYXJzID0geWllbGQgdHlwZXNfMS5nYXJhZ2UuZ2V0QWxsQ2FycygpO1xyXG4gICAgICAgIGNvbnN0IGFsbENhcnMgPSAoeWllbGQgcmVzQWxsQ2Fycy5qc29uKCkpO1xyXG4gICAgICAgIGNoZWNrUGFnQnRucyhhbGxDYXJzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgcmVzUGFnZWRDYXJzID0geWllbGQgdHlwZXNfMS5nYXJhZ2UuZ2V0TGltaXRlZENhcnMoTnVtYmVyKHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCkpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSAoeWllbGQgcmVzUGFnZWRDYXJzLmpzb24oKSk7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLmNhcnMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLmdhcmFnZUxlbmd0aC5pbm5lckhUTUwgPSBgR2FyYWdlOiAke1N0cmluZyhhbGxDYXJzLmxlbmd0aCl9YDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2hvd0NhckluSHRtbChkYXRhW2ldLm5hbWUsIGRhdGFbaV0uY29sb3IsIGRhdGFbaV0uaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAoMCwgc3RhcnRTdG9wXzEuc3RhcnRDYXIpKCk7XHJcbiAgICAgICAgKDAsIHN0YXJ0U3RvcF8xLnN0b3BDYXIpKCk7XHJcbiAgICAgICAgKDAsIHVwZGF0ZUNhcl8xLnVwZGF0ZUNhcikoKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2hvd0NhciA9IHNob3dDYXI7XHJcbmZ1bmN0aW9uIHNob3dDYXJJbkh0bWwobW9kZWwsIGNvbG9yLCBpZCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBbY2FyQmxvY2ssIGNhckluZm8sIHN0YXJ0U3RvcCwgcmFjZVJvYWQsIGNhclJvYWQsIGNhcl0gPSBjcmVhdGVEaXZzKGlkKTtcclxuICAgICAgICBjb25zdCBbZGVsZXRlQnRuLCBzdGFydENhciwgc3RvcENhciwgdXBkYXRlQnRuXSA9IGNyZWF0ZUJ1dHRvbnMoaWQpO1xyXG4gICAgICAgIGNvbnN0IFtjYXJOYW1lLCBjYXJJbWcsIHJvYWQsIGZpbmlzaEZsYWcsIGNhclNtb2tlXSA9IGNyZWF0ZU90aGVyRWxlbXMobW9kZWwsIGNvbG9yLCBpZCk7XHJcbiAgICAgICAgY2FyQmxvY2suYXBwZW5kKGNhckluZm8pO1xyXG4gICAgICAgIGNhckJsb2NrLmFwcGVuZChjYXJSb2FkKTtcclxuICAgICAgICBjYXJCbG9jay5hcHBlbmQocm9hZCk7XHJcbiAgICAgICAgY2FySW5mby5hcHBlbmQodXBkYXRlQnRuKTtcclxuICAgICAgICBjYXJJbmZvLmFwcGVuZChkZWxldGVCdG4pO1xyXG4gICAgICAgIGNhckluZm8uYXBwZW5kKGNhck5hbWUpO1xyXG4gICAgICAgIGNhclJvYWQuYXBwZW5kKHN0YXJ0U3RvcCk7XHJcbiAgICAgICAgY2FyUm9hZC5hcHBlbmQocmFjZVJvYWQpO1xyXG4gICAgICAgIHN0YXJ0U3RvcC5hcHBlbmQoc3RhcnRDYXIpO1xyXG4gICAgICAgIHN0YXJ0U3RvcC5hcHBlbmQoc3RvcENhcik7XHJcbiAgICAgICAgcmFjZVJvYWQuYXBwZW5kKGNhcik7XHJcbiAgICAgICAgcmFjZVJvYWQuYXBwZW5kKGZpbmlzaEZsYWcpO1xyXG4gICAgICAgIGNhci5hcHBlbmQoY2FySW1nKTtcclxuICAgICAgICBjYXJJbWcuYXBwZW5kKGNhclNtb2tlKTtcclxuICAgICAgICByZW5kZXJIdG1sXzEuY2Fycy5hcHBlbmQoY2FyQmxvY2spO1xyXG4gICAgICAgICgwLCBkZWxldGVDYXJfMS5kZWxldGVDYXIpKCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGVja1BhZ0J0bnMoYWxsQ2Fyc0xlbmd0aCkge1xyXG4gICAgaWYgKChOdW1iZXIocmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MKSAtIDEpICogNyA9PT0gYWxsQ2Fyc0xlbmd0aCkge1xyXG4gICAgICAgIHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCA9IFN0cmluZyhOdW1iZXIocmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MKSAtIDEpO1xyXG4gICAgfVxyXG4gICAgaWYgKE51bWJlcihyZW5kZXJIdG1sXzEucGFnZU51bWJlci5pbm5lckhUTUwpICogNyA+PSBhbGxDYXJzTGVuZ3RoKSB7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLm5leHRQYWdlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlbmRlckh0bWxfMS5uZXh0UGFnZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKE51bWJlcihyZW5kZXJIdG1sXzEucGFnZU51bWJlci5pbm5lckhUTUwpID09PSAxKSB7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLnByZXZQYWdlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlbmRlckh0bWxfMS5wcmV2UGFnZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZURpdnMoaWQpIHtcclxuICAgIGNvbnN0IGNhckJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjYXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzdGFydFN0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHJhY2VSb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjYXJSb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhckJsb2NrLmNsYXNzTmFtZSA9ICdjYXItYmxvY2snO1xyXG4gICAgY2FySW5mby5jbGFzc05hbWUgPSAnY2FyLWluZm8nO1xyXG4gICAgY2FyUm9hZC5jbGFzc05hbWUgPSAnY2FyLXJvYWQnO1xyXG4gICAgc3RhcnRTdG9wLmNsYXNzTmFtZSA9ICdzdGFydC1zdG9wJztcclxuICAgIHJhY2VSb2FkLmNsYXNzTmFtZSA9ICdyYWNlLXJvYWQnO1xyXG4gICAgY2FyLmNsYXNzTmFtZSA9ICdjYXItbW9kZWwnO1xyXG4gICAgY2FyLmlkID0gU3RyaW5nKGlkKTtcclxuICAgIHJldHVybiBbY2FyQmxvY2ssIGNhckluZm8sIHN0YXJ0U3RvcCwgcmFjZVJvYWQsIGNhclJvYWQsIGNhcl07XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9ucyhpZCkge1xyXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBzdGFydENhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3Qgc3RvcENhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgdXBkYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdGFydENhci5jbGFzc05hbWUgPSAnY2FyLXN0YXJ0JztcclxuICAgIHN0b3BDYXIuY2xhc3NOYW1lID0gJ2Nhci1zdG9wJztcclxuICAgIHVwZGF0ZUJ0bi5jbGFzc05hbWUgPSAndXBkYXRlLWJ0bic7XHJcbiAgICBkZWxldGVCdG4uY2xhc3NOYW1lID0gJ3JlbW92ZS1jYXInO1xyXG4gICAgc3RvcENhci5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJ1JlbW92ZSBDYXInO1xyXG4gICAgdXBkYXRlQnRuLm5hbWUgPSBTdHJpbmcoaWQpO1xyXG4gICAgc3RhcnRDYXIuaW5uZXJIVE1MID0gJ0EnO1xyXG4gICAgc3RvcENhci5pbm5lckhUTUwgPSAnQic7XHJcbiAgICB1cGRhdGVCdG4uaW5uZXJIVE1MID0gJ1VwZGF0ZSBDYXInO1xyXG4gICAgZGVsZXRlQnRuLm5hbWUgPSBTdHJpbmcoaWQpO1xyXG4gICAgc3RhcnRDYXIubmFtZSA9IFN0cmluZyhpZCk7XHJcbiAgICBzdG9wQ2FyLm5hbWUgPSBTdHJpbmcoaWQpO1xyXG4gICAgcmV0dXJuIFtkZWxldGVCdG4sIHN0YXJ0Q2FyLCBzdG9wQ2FyLCB1cGRhdGVCdG5dO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZU90aGVyRWxlbXMobW9kZWwsIGNvbG9yLCBpZCkge1xyXG4gICAgY29uc3QgY2FyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGNhckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IHJvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gICAgY29uc3QgZmluaXNoRmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGNhclNtb2tlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY2FyTmFtZS5jbGFzc05hbWUgPSAnY2FyLW5hbWUnO1xyXG4gICAgY2FySW1nLmNsYXNzTmFtZSA9IGBjYXItaWNvbiAke21vZGVsfWA7XHJcbiAgICByb2FkLmNsYXNzTmFtZSA9ICdyb2FkJztcclxuICAgIGZpbmlzaEZsYWcuY2xhc3NOYW1lID0gJ2ZpbmlzaC1pY29uJztcclxuICAgIGNhclNtb2tlLmNsYXNzTmFtZSA9ICdjYXItc21va2UnO1xyXG4gICAgY2FyTmFtZS5pbm5lckhUTUwgPSBtb2RlbDtcclxuICAgIGNhckltZy5pbm5lckhUTUwgPSAoMCwgc3ZnSWNvbnNfMS5zdmcpKGNvbG9yKTtcclxuICAgIGNhckltZy5pZCA9IGBjYXItJHtTdHJpbmcoaWQpfWA7XHJcbiAgICBjYXJOYW1lLmlkID0gYG5hbWUtJHtTdHJpbmcoaWQpfWA7XHJcbiAgICByZXR1cm4gW2Nhck5hbWUsIGNhckltZywgcm9hZCwgZmluaXNoRmxhZywgY2FyU21va2VdO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zaG93V2lubmVycyA9IGV4cG9ydHMud2lubmVyc0luZm8gPSB2b2lkIDA7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXMvdHlwZXNcIik7XHJcbnJlcXVpcmUoXCIuLi9jc3Mvd2lubmVycy5jc3NcIik7XHJcbmNvbnN0IHJlbmRlckh0bWxfMSA9IHJlcXVpcmUoXCIuLi9vdGhlcnMvcmVuZGVySHRtbFwiKTtcclxuY29uc3Qgc3ZnSWNvbnNfMSA9IHJlcXVpcmUoXCIuLi9vdGhlcnMvc3ZnSWNvbnNcIik7XHJcbmNvbnN0IHdpbm5lcnNQYWdpbmF0aW9uXzEgPSByZXF1aXJlKFwiLi93aW5uZXJzUGFnaW5hdGlvblwiKTtcclxuY29uc3Qgd2lubmVyc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG5jb25zdCB0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XHJcbmNvbnN0IHdpbm5lcnNMZW5ndGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmNvbnN0IHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xyXG5leHBvcnRzLndpbm5lcnNJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmV4cG9ydHMud2lubmVyc0luZm8uY2xhc3NOYW1lID0gJ3dpbm5lcnMtaW5mbyc7XHJcbmZ1bmN0aW9uIHNob3dXaW5uZXJzKHNvcnRUeXBlLCBzb3J0T3JkZXIpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgbGV0IHJlcztcclxuICAgICAgICBpZiAoc29ydFR5cGUgJiYgc29ydE9yZGVyKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IHlpZWxkIHR5cGVzXzEud2lubmVycy5nZXRMaW1pdGVkV2lubmVycyhOdW1iZXIod2lubmVyc1BhZ2luYXRpb25fMS53aW5uZXJzUGFnZU51bWJlci5pbm5lckhUTUwpLCBzb3J0VHlwZSwgc29ydE9yZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcyA9IHlpZWxkIHR5cGVzXzEud2lubmVycy5nZXRMaW1pdGVkV2lubmVycyhOdW1iZXIod2lubmVyc1BhZ2luYXRpb25fMS53aW5uZXJzUGFnZU51bWJlci5pbm5lckhUTUwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFnZWRXaW5uZXJzID0gKHlpZWxkIHJlcy5qc29uKCkpO1xyXG4gICAgICAgIGNvbnN0IHJlczIgPSB5aWVsZCB0eXBlc18xLndpbm5lcnMuZ2V0QWxsV2luZXJzKCk7XHJcbiAgICAgICAgY29uc3QgYWxsV2lubmVycyA9ICh5aWVsZCByZXMyLmpzb24oKSk7XHJcbiAgICAgICAgY2hlY2tQYWdpbmF0aW9uKGFsbFdpbm5lcnMubGVuZ3RoKTtcclxuICAgICAgICB0SGVhZGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRCb2R5LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHdpbm5lcnNMZW5ndGguaW5uZXJIVE1MID0gYFdpbm5lcnM6ICR7YWxsV2lubmVycy5sZW5ndGh9YDtcclxuICAgICAgICB3aW5uZXJzQ29udGVudC5jbGFzc05hbWUgPSAnd2lubmVycy1jb250ZW50JztcclxuICAgICAgICB3aW5uZXJzTGVuZ3RoLmNsYXNzTmFtZSA9ICdsZW5ndGgnO1xyXG4gICAgICAgIGV4cG9ydHMud2lubmVyc0luZm8uYXBwZW5kKHdpbm5lcnNMZW5ndGgpO1xyXG4gICAgICAgIHdpbm5lcnNDb250ZW50LmFwcGVuZChleHBvcnRzLndpbm5lcnNJbmZvKTtcclxuICAgICAgICBjb25zdCB0YWJsZUhlYWRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDApXHJcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlci5pbm5lckhUTUwgPSAn4oSWJztcclxuICAgICAgICAgICAgaWYgKGkgPT09IDEpXHJcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlci5pbm5lckhUTUwgPSAnSW1hZ2UnO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMilcclxuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyLmlubmVySFRNTCA9ICdOYW1lJztcclxuICAgICAgICAgICAgaWYgKGkgPT09IDMpXHJcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlci5pbm5lckhUTUwgPSAnV2lucyc7XHJcbiAgICAgICAgICAgIGlmIChpID09PSA0KVxyXG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXIuaW5uZXJIVE1MID0gJ1RpbWUnO1xyXG4gICAgICAgICAgICB0YWJsZUhlYWRlcnMuYXBwZW5kKHRhYmxlSGVhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdEhlYWRlci5hcHBlbmQodGFibGVIZWFkZXJzKTtcclxuICAgICAgICB0YWJsZS5hcHBlbmQodEhlYWRlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlZFdpbm5lcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgeWllbGQgc2hvd1dpbm5lckluSHRtbChpICsgMSwgcGFnZWRXaW5uZXJzW2ldLmlkLCBwYWdlZFdpbm5lcnNbaV0ud2lucywgcGFnZWRXaW5uZXJzW2ldLnRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZS5hcHBlbmQodEJvZHkpO1xyXG4gICAgICAgIHdpbm5lcnNDb250ZW50LmFwcGVuZCh0YWJsZSk7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLndpbm5lcnNCbG9jay5hcHBlbmQod2lubmVyc0NvbnRlbnQpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zaG93V2lubmVycyA9IHNob3dXaW5uZXJzO1xyXG5mdW5jdGlvbiBzaG93V2lubmVySW5IdG1sKHBvc2l0aW9uLCBpZCwgd2lucywgdGltZSkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCByZXNDYXJOYW1lID0geWllbGQgdHlwZXNfMS5nYXJhZ2UuZ2V0Q2FyKGlkKTtcclxuICAgICAgICBjb25zdCBjYXIgPSAoeWllbGQgcmVzQ2FyTmFtZS5qc29uKCkpO1xyXG4gICAgICAgIGNvbnN0IGNhck5hbWUgPSBjYXIubmFtZTtcclxuICAgICAgICBjb25zdCBjYXJDb2xvciA9IGNhci5jb2xvcjtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICAgICBpZiAoaiA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJvd0NvbnRlbnQuaW5uZXJIVE1MID0gU3RyaW5nKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgaWYgKGogPT09IDEpXHJcbiAgICAgICAgICAgICAgICByb3dDb250ZW50LmlubmVySFRNTCA9ICgwLCBzdmdJY29uc18xLnN2ZykoY2FyQ29sb3IpO1xyXG4gICAgICAgICAgICBpZiAoaiA9PT0gMilcclxuICAgICAgICAgICAgICAgIHJvd0NvbnRlbnQuaW5uZXJIVE1MID0gY2FyTmFtZTtcclxuICAgICAgICAgICAgaWYgKGogPT09IDMpXHJcbiAgICAgICAgICAgICAgICByb3dDb250ZW50LmlubmVySFRNTCA9IFN0cmluZyh3aW5zKTtcclxuICAgICAgICAgICAgaWYgKGogPT09IDQpXHJcbiAgICAgICAgICAgICAgICByb3dDb250ZW50LmlubmVySFRNTCA9IFN0cmluZyh0aW1lKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZChyb3dDb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdEJvZHkuYXBwZW5kKHJvdyk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGVja1BhZ2luYXRpb24oYWxsV2lubm5lcnNMZW5ndGgpIHtcclxuICAgIGlmIChOdW1iZXIod2lubmVyc1BhZ2luYXRpb25fMS53aW5uZXJzUGFnZU51bWJlci5pbm5lckhUTUwpICogMTAgPj0gYWxsV2lubm5lcnNMZW5ndGgpIHtcclxuICAgICAgICB3aW5uZXJzUGFnaW5hdGlvbl8xLm5leHRCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgd2lubmVyc1BhZ2luYXRpb25fMS5uZXh0QnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoTnVtYmVyKHdpbm5lcnNQYWdpbmF0aW9uXzEud2lubmVyc1BhZ2VOdW1iZXIuaW5uZXJIVE1MKSA9PT0gMSkge1xyXG4gICAgICAgIHdpbm5lcnNQYWdpbmF0aW9uXzEucHJldkJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB3aW5uZXJzUGFnaW5hdGlvbl8xLnByZXZCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldFNvcnRPcHRpb25zID0gdm9pZCAwO1xyXG5jb25zdCBzaG93V2lubmVyc18xID0gcmVxdWlyZShcIi4vc2hvd1dpbm5lcnNcIik7XHJcbmNvbnN0IHNlbGVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSAnU29ydCBieTonO1xyXG4gICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChpID09PSAxKVxyXG4gICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSAnV2lucywgQVNDJztcclxuICAgIGlmIChpID09PSAyKVxyXG4gICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSAnV2lucywgREVTQyc7XHJcbiAgICBpZiAoaSA9PT0gMylcclxuICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gJ1RpbWUsIEFTQyc7XHJcbiAgICBpZiAoaSA9PT0gNClcclxuICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gJ1RpbWUsIERFU0MnO1xyXG4gICAgc2VsZWN0T3B0aW9uLmFwcGVuZChvcHRpb24pO1xyXG59XHJcbnNob3dXaW5uZXJzXzEud2lubmVyc0luZm8uYXBwZW5kKHNlbGVjdE9wdGlvbik7XHJcbnNlbGVjdE9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBbc29ydFR5cGUsIHNvcnRPcmRlcl0gPSBnZXRTb3J0T3B0aW9ucyhzZWxlY3RPcHRpb24udmFsdWUpO1xyXG4gICAgKDAsIHNob3dXaW5uZXJzXzEuc2hvd1dpbm5lcnMpKHNvcnRUeXBlLCBzb3J0T3JkZXIpO1xyXG59KTtcclxuZnVuY3Rpb24gZ2V0U29ydE9wdGlvbnModmFsdWUpIHtcclxuICAgIGNvbnN0IGFyciA9IHZhbHVlLnNwbGl0KCcsICcpO1xyXG4gICAgY29uc3Qgc29ydFR5cGUgPSBhcnJbMF0udG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IHNvcnRPcmRlciA9IGFyclsxXTtcclxuICAgIHJldHVybiBbc29ydFR5cGUsIHNvcnRPcmRlcl07XHJcbn1cclxuZXhwb3J0cy5nZXRTb3J0T3B0aW9ucyA9IGdldFNvcnRPcHRpb25zO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2V0QnV0dG9uID0gZXhwb3J0cy5zdGFydCA9IGV4cG9ydHMuc3RvcFJhY2UgPSBleHBvcnRzLnN0b3BDYXIgPSBleHBvcnRzLnN0YXJ0Q2FyID0gdm9pZCAwO1xyXG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzL3R5cGVzXCIpO1xyXG5jb25zdCBtb2RhbFdpbmRvd18xID0gcmVxdWlyZShcIi4vbW9kYWxXaW5kb3dcIik7XHJcbmNvbnN0IHNob3dXaW5uZXJzXzEgPSByZXF1aXJlKFwiLi9zaG93V2lubmVyc1wiKTtcclxuZnVuY3Rpb24gc3RhcnRDYXIoKSB7XHJcbiAgICBjb25zdCBzdGFydEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLXN0YXJ0Jyk7XHJcbiAgICBjb25zdCBzdG9wQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXItc3RvcCcpO1xyXG4gICAgc3RhcnRCdG5zLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0KGVsLCBlbC5uYW1lLCBzdG9wQnRucyk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zdGFydENhciA9IHN0YXJ0Q2FyO1xyXG5mdW5jdGlvbiBzdG9wQ2FyKCkge1xyXG4gICAgY29uc3Qgc3RhcnRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhci1zdGFydCcpO1xyXG4gICAgY29uc3Qgc3RvcEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLXN0b3AnKTtcclxuICAgIHN0b3BCdG5zLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHN0b3BSYWNlKGVsLCBlbC5uYW1lLCBzdGFydEJ0bnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zdG9wQ2FyID0gc3RvcENhcjtcclxubGV0IHdpbm5lciA9IDA7XHJcbmZ1bmN0aW9uIHN0b3BSYWNlKGVsLCBpZCwgc3RhcnRCdG5zKSB7XHJcbiAgICBjb25zdCBjYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBjb25zdCBpY29uID0gY2FyLnF1ZXJ5U2VsZWN0b3IoYCNjYXItJHtpZH1gKTtcclxuICAgIHdpbm5lciA9IDA7XHJcbiAgICBjb25zdCBzbW9rZSA9IGljb24ucXVlcnlTZWxlY3RvcignLmNhci1zbW9rZScpO1xyXG4gICAgc21va2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGdldEJ1dHRvbihzdGFydEJ0bnMsIGlkKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgZWwuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgY2FyLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICB0eXBlc18xLmVuaWdpbmUuc3RvcChOdW1iZXIoaWQpKTtcclxufVxyXG5leHBvcnRzLnN0b3BSYWNlID0gc3RvcFJhY2U7XHJcbmZ1bmN0aW9uIHN0YXJ0KGVsLCBpZCwgc3RvcEJ0bnMsIHN0YXJ0QnRuLCByZXNldEJ0bikge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBbY2FyLCBpY29uLCBwYXJlbnQsIHN0b3BCdG4sIGxXaGVlbCwgcldoZWVsLCBzbW9rZV0gPSBnZXRFbGVtZW50cyhpZCwgc3RvcEJ0bnMpO1xyXG4gICAgICAgIHN0b3BCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBlbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAoeWllbGQgdHlwZXNfMS5lbmlnaW5lLnN0YXJ0KE51bWJlcihpZCkpKTtcclxuICAgICAgICBjb25zdCB0aW1lID0gc3RhcnQuZGlzdGFuY2UgLyBzdGFydC52ZWxvY2l0eTtcclxuICAgICAgICBjb25zdCBbYW5pbWF0aW9uLCBlbFBvc2l0aW9uLCBsVywgclddID0gYW5pbWF0aW9ucyhjYXIsIGxXaGVlbCwgcldoZWVsLCB0aW1lLCBwYXJlbnQpO1xyXG4gICAgICAgIGxldCByZXNldENsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICByZXNldEJ0biA9PT0gbnVsbCB8fCByZXNldEJ0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc2V0T3JTdG9wKGxXLCByVywgYW5pbWF0aW9uLCBlbFBvc2l0aW9uLCBzbW9rZSwgc3RvcEJ0bik7XHJcbiAgICAgICAgICAgIHJlc2V0Q2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcmVzZXRPclN0b3AobFcsIHJXLCBhbmltYXRpb24sIGVsUG9zaXRpb24sIHNtb2tlLCBzdG9wQnRuKTtcclxuICAgICAgICAgICAgcmVzZXRDbGlja2VkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkcml2ZVN0YXR1cyA9IHlpZWxkIHR5cGVzXzEuZW5pZ2luZS5kcml2ZShOdW1iZXIoaWQpKTtcclxuICAgICAgICBpZiAoIXJlc2V0Q2xpY2tlZCkge1xyXG4gICAgICAgICAgICBpZiAoZHJpdmVTdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzNTAwKGxXLCByVywgYW5pbWF0aW9uLCBjYXIsIGVsUG9zaXRpb24sIHNtb2tlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydEJ0bilcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZHJpdmVTdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdHlwZXNfMS5lbmlnaW5lLnN0b3AoTnVtYmVyKGlkKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF3aW5uZXIgJiYgc3RhcnRCdG4pXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzMjAwKGNhciwgdGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnN0YXJ0ID0gc3RhcnQ7XHJcbmZ1bmN0aW9uIGdldEJ1dHRvbihiLCBuKSB7XHJcbiAgICBjb25zdCBidG4gPSBbLi4uYl0uZmluZCgoZWwpID0+IGVsLm5hbWUgPT09IG4pO1xyXG4gICAgcmV0dXJuIGJ0bjtcclxufVxyXG5leHBvcnRzLmdldEJ1dHRvbiA9IGdldEJ1dHRvbjtcclxuZnVuY3Rpb24gYW5pbWF0aW9ucyhjYXIsIGxXaGVlbCwgcldoZWVsLCB0aW1lLCBwYXJlbnQpIHtcclxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGNhci5hbmltYXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxlZnQ6ICcwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZWZ0OiBgJHtwYXJlbnQuY2xpZW50V2lkdGggLSAxNjN9cHhgLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLCB7XHJcbiAgICAgICAgZHVyYXRpb246IHRpbWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGxXID0gbFdoZWVsLmFuaW1hdGUoW3sgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyB9LCB7IHRyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpJyB9XSwgeyBkdXJhdGlvbjogdGltZSB9KTtcclxuICAgIGNvbnN0IHJXID0gcldoZWVsLmFuaW1hdGUoW3sgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyB9LCB7IHRyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpJyB9XSwgeyBkdXJhdGlvbjogdGltZSB9KTtcclxuICAgIGNvbnN0IGVsUG9zaXRpb24gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjYXIuc3R5bGUubGVmdCA9IGAke3BhcmVudC5jbGllbnRXaWR0aCAtIDE2M31weGA7XHJcbiAgICB9LCB0aW1lKTtcclxuICAgIHJldHVybiBbYW5pbWF0aW9uLCBlbFBvc2l0aW9uLCBsVywgclddO1xyXG59XHJcbmZ1bmN0aW9uIHN0YXR1czUwMChsVywgclcsIGFuaW1hdGlvbiwgY2FyLCBlbFBvc2l0aW9uLCBzbW9rZSkge1xyXG4gICAgbFcuY2FuY2VsKCk7XHJcbiAgICByVy5jYW5jZWwoKTtcclxuICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xyXG4gICAgY2FyLnN0eWxlLmxlZnQgPSBnZXRDb21wdXRlZFN0eWxlKGNhcikubGVmdDtcclxuICAgIGFuaW1hdGlvbi5jYW5jZWwoKTtcclxuICAgIGNsZWFyVGltZW91dChlbFBvc2l0aW9uKTtcclxuICAgIHNtb2tlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcbmZ1bmN0aW9uIHN0YXR1czIwMChjYXIsIHRpbWUpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgd2lubmVyID0gTnVtYmVyKGNhci5pZCk7XHJcbiAgICAgICAgY29uc3QgYWRkID0gdHlwZXNfMS53aW5uZXJzLmFkZFdpbm5lcih3aW5uZXIsIE1hdGgucm91bmQodGltZSAvIDEwMDApKTtcclxuICAgICAgICAoMCwgbW9kYWxXaW5kb3dfMS5zaG93TW9kYWwpKHdpbm5lciwgTWF0aC5yb3VuZCh0aW1lIC8gMTAwMCkpO1xyXG4gICAgICAgIGlmICgoeWllbGQgYWRkKS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBnZXQgPSAoeWllbGQgdHlwZXNfMS53aW5uZXJzLmdldFdpbm5lcih3aW5uZXIpKTtcclxuICAgICAgICAgICAgY29uc3Qgd2luQ291bnQgPSBnZXQud2lucyArIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IGJlc3RUaW1lID0gTWF0aC5yb3VuZCh0aW1lIC8gMTAwMCkgPiBnZXQudGltZSA/IGdldC50aW1lIDogTWF0aC5yb3VuZCh0aW1lIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIHR5cGVzXzEud2lubmVycy51cGRhdGVXaW5uZXIod2lubmVyLCB3aW5Db3VudCwgYmVzdFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAoMCwgc2hvd1dpbm5lcnNfMS5zaG93V2lubmVycykoKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlc2V0T3JTdG9wKGxXLCByVywgYW5pbWF0aW9uLCBlbFBvc2l0aW9uLCBzbW9rZSwgc3RvcEJ0bikge1xyXG4gICAgYW5pbWF0aW9uLmNhbmNlbCgpO1xyXG4gICAgY2xlYXJUaW1lb3V0KGVsUG9zaXRpb24pO1xyXG4gICAgbFcuY2FuY2VsKCk7XHJcbiAgICByVy5jYW5jZWwoKTtcclxuICAgIHNtb2tlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBzdG9wQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBnZXRFbGVtZW50cyhpZCwgc3RvcEJ0bnMpIHtcclxuICAgIGNvbnN0IGNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGNvbnN0IGljb24gPSBjYXIucXVlcnlTZWxlY3RvcihgI2Nhci0ke2lkfWApO1xyXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2Utcm9hZCcpO1xyXG4gICAgY29uc3Qgc3RvcEJ0biA9IGdldEJ1dHRvbihzdG9wQnRucywgaWQpO1xyXG4gICAgY29uc3QgbFdoZWVsID0gaWNvbi5xdWVyeVNlbGVjdG9yKCcubC13aGVlbCcpO1xyXG4gICAgY29uc3QgcldoZWVsID0gaWNvbi5xdWVyeVNlbGVjdG9yKCcuci13aGVlbCcpO1xyXG4gICAgY29uc3Qgc21va2UgPSBpY29uLnF1ZXJ5U2VsZWN0b3IoJy5jYXItc21va2UnKTtcclxuICAgIHJldHVybiBbY2FyLCBpY29uLCBwYXJlbnQsIHN0b3BCdG4sIGxXaGVlbCwgcldoZWVsLCBzbW9rZV07XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy51cGRhdGVDYXIgPSB2b2lkIDA7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXMvdHlwZXNcIik7XHJcbmNvbnN0IHNob3dDYXJfMSA9IHJlcXVpcmUoXCIuL3Nob3dDYXJcIik7XHJcbmxldCBjYXJJZCA9IDA7XHJcbmZ1bmN0aW9uIHVwZGF0ZUNhcigpIHtcclxuICAgIGNvbnN0IHVwZGF0ZUNhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGUtY2FyJyk7XHJcbiAgICBjb25zdCBjYXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwZGF0ZS1uYW1lJyk7XHJcbiAgICBjb25zdCBjYXJDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGUtY29sb3InKTtcclxuICAgIGNvbnN0IHVwZGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXBkYXRlLWJ0bicpO1xyXG4gICAgdXBkYXRlQnRucy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjYXJOYW1lLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhckNvbG9yLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhckNvbG9yLnZhbHVlID0gJyNmZmZmZmYnO1xyXG4gICAgICAgICAgICB1cGRhdGVDYXJCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FySWQgPSBOdW1iZXIoZWwubmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHVwZGF0ZUNhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoY2FyTmFtZS52YWx1ZSkge1xyXG4gICAgICAgICAgICB0eXBlc18xLmdhcmFnZS51cGRhdGVDYXIoY2FySWQsIGNhck5hbWUudmFsdWUsIGNhckNvbG9yLnZhbHVlKTtcclxuICAgICAgICAgICAgKDAsIHNob3dDYXJfMS5zaG93Q2FyKSgpO1xyXG4gICAgICAgICAgICBjYXJOYW1lLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FyTmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBjYXJDb2xvci5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhckNvbG9yLnZhbHVlID0gJyNlZmVmZWYnO1xyXG4gICAgICAgICAgICB1cGRhdGVDYXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMudXBkYXRlQ2FyID0gdXBkYXRlQ2FyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnJlbmRlcldpbm5lcnNQYWdpbmF0aW9uID0gZXhwb3J0cy5wcmV2QnRuID0gZXhwb3J0cy53aW5uZXJzUGFnZU51bWJlciA9IGV4cG9ydHMubmV4dEJ0biA9IHZvaWQgMDtcclxuY29uc3QgcmVuZGVySHRtbF8xID0gcmVxdWlyZShcIi4uL290aGVycy9yZW5kZXJIdG1sXCIpO1xyXG5jb25zdCBzaG93V2lubmVyc18xID0gcmVxdWlyZShcIi4vc2hvd1dpbm5lcnNcIik7XHJcbmV4cG9ydHMubmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5leHBvcnRzLndpbm5lcnNQYWdlTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5leHBvcnRzLnByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuZnVuY3Rpb24gcmVuZGVyV2lubmVyc1BhZ2luYXRpb24oKSB7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwYWdpbmF0aW9uLmNsYXNzTmFtZSA9ICdwYWdpbmF0aW9uJztcclxuICAgIGV4cG9ydHMud2lubmVyc1BhZ2VOdW1iZXIuY2xhc3NOYW1lID0gJ3BhZy1udW0nO1xyXG4gICAgZXhwb3J0cy5wcmV2QnRuLmNsYXNzTmFtZSA9ICdwYWctcHJldi1idG4nO1xyXG4gICAgZXhwb3J0cy5uZXh0QnRuLmNsYXNzTmFtZSA9ICdwYWctbmV4dC1idG4nO1xyXG4gICAgZXhwb3J0cy53aW5uZXJzUGFnZU51bWJlci5pbm5lckhUTUwgPSAnMSc7XHJcbiAgICBleHBvcnRzLnByZXZCdG4uaW5uZXJIVE1MID0gJzwnO1xyXG4gICAgZXhwb3J0cy5uZXh0QnRuLmlubmVySFRNTCA9ICc+JztcclxuICAgIHBhZ2luYXRpb24uYXBwZW5kKGV4cG9ydHMucHJldkJ0bik7XHJcbiAgICBwYWdpbmF0aW9uLmFwcGVuZChleHBvcnRzLndpbm5lcnNQYWdlTnVtYmVyKTtcclxuICAgIHBhZ2luYXRpb24uYXBwZW5kKGV4cG9ydHMubmV4dEJ0bik7XHJcbiAgICByZW5kZXJIdG1sXzEud2lubmVyc0Jsb2NrLmFwcGVuZChwYWdpbmF0aW9uKTtcclxuICAgIHdpbm5lcnNQYWdpbmF0aW9uKCk7XHJcbn1cclxuZXhwb3J0cy5yZW5kZXJXaW5uZXJzUGFnaW5hdGlvbiA9IHJlbmRlcldpbm5lcnNQYWdpbmF0aW9uO1xyXG5mdW5jdGlvbiB3aW5uZXJzUGFnaW5hdGlvbigpIHtcclxuICAgIGV4cG9ydHMubmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBleHBvcnRzLndpbm5lcnNQYWdlTnVtYmVyLmlubmVySFRNTCA9IGAke051bWJlcihleHBvcnRzLndpbm5lcnNQYWdlTnVtYmVyLmlubmVySFRNTCkgKyAxfWA7XHJcbiAgICAgICAgKDAsIHNob3dXaW5uZXJzXzEuc2hvd1dpbm5lcnMpKCk7XHJcbiAgICB9KTtcclxuICAgIGV4cG9ydHMucHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBleHBvcnRzLndpbm5lcnNQYWdlTnVtYmVyLmlubmVySFRNTCA9IGAke051bWJlcihleHBvcnRzLndpbm5lcnNQYWdlTnVtYmVyLmlubmVySFRNTCkgLSAxfWA7XHJcbiAgICAgICAgKDAsIHNob3dXaW5uZXJzXzEuc2hvd1dpbm5lcnMpKCk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnJlc2V0QnRuID0gZXhwb3J0cy5zdGFydEJ0biA9IGV4cG9ydHMud2lubmVyc0Jsb2NrID0gZXhwb3J0cy5uZXh0UGFnZSA9IGV4cG9ydHMucHJldlBhZ2UgPSBleHBvcnRzLnBhZ2VOdW1iZXIgPSBleHBvcnRzLmdhcmFnZUxlbmd0aCA9IGV4cG9ydHMuY2FycyA9IHZvaWQgMDtcclxuY29uc3QgYWRkQ2FyXzEgPSByZXF1aXJlKFwiLi4vZ2V0Q2FycyZXaW5uZXJzL2FkZENhclwiKTtcclxuY29uc3QgZ2VuZXJhdGUxMDBDYXJzXzEgPSByZXF1aXJlKFwiLi4vZ2V0Q2FycyZXaW5uZXJzL2dlbmVyYXRlMTAwQ2Fyc1wiKTtcclxuY29uc3QgcGFnaW5hdGlvbl8xID0gcmVxdWlyZShcIi4uL2dldENhcnMmV2lubmVycy9wYWdpbmF0aW9uXCIpO1xyXG5jb25zdCBzaG93Q2FyXzEgPSByZXF1aXJlKFwiLi4vZ2V0Q2FycyZXaW5uZXJzL3Nob3dDYXJcIik7XHJcbmNvbnN0IHdpbm5lcnNQYWdpbmF0aW9uXzEgPSByZXF1aXJlKFwiLi4vZ2V0Q2FycyZXaW5uZXJzL3dpbm5lcnNQYWdpbmF0aW9uXCIpO1xyXG5jb25zdCB2aWV3XzEgPSByZXF1aXJlKFwiLi4vdmlld3Mvdmlld1wiKTtcclxuZXhwb3J0cy5jYXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmV4cG9ydHMuZ2FyYWdlTGVuZ3RoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5leHBvcnRzLnBhZ2VOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmV4cG9ydHMucHJldlBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuZXhwb3J0cy5uZXh0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5leHBvcnRzLndpbm5lcnNCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5leHBvcnRzLnN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmV4cG9ydHMucmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuY29uc3QgZ2FyYWdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmNvbnN0IHdpbm5lcnNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuY29uc3QgZ2VuZXJhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuY29uc3QgZ2FyYWdlQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3Qgdmlld0J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgcmFjZUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgcGFnaW5hdGlvbkJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGZvcm1CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmV4cG9ydHMucmVzZXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5leHBvcnRzLnJlc2V0QnRuLmNsYXNzTmFtZSA9ICdyZXNldC1yYWNlJztcclxuZXhwb3J0cy5zdGFydEJ0bi5jbGFzc05hbWUgPSAnc3RhcnQtcmFjZSc7XHJcbmdhcmFnZUJ0bi5jbGFzc05hbWUgPSAnZ2FyYWdlLXZpZXcnO1xyXG53aW5uZXJzQnRuLmNsYXNzTmFtZSA9ICd3aW5uZXJzLXZpZXcnO1xyXG5leHBvcnRzLndpbm5lcnNCbG9jay5jbGFzc05hbWUgPSAnd2lubmVycyBoaWRkZW4nO1xyXG5nYXJhZ2VCbG9jay5jbGFzc05hbWUgPSAnZ2FyYWdlJztcclxucmFjZUJ0bnMuY2xhc3NOYW1lID0gJ3JhY2UtYnRucyc7XHJcbmV4cG9ydHMuY2Fycy5jbGFzc05hbWUgPSAnY2Fycyc7XHJcbmdlbmVyYXRlQnRuLmNsYXNzTmFtZSA9ICdnZW4tY2Fycyc7XHJcbmV4cG9ydHMucGFnZU51bWJlci5jbGFzc05hbWUgPSAncGFnZS1udW0gcGFnLW51bSc7XHJcbmV4cG9ydHMucHJldlBhZ2UuY2xhc3NOYW1lID0gJ3ByZXYtYnRuIHBhZy1wcmV2LWJ0bic7XHJcbmV4cG9ydHMubmV4dFBhZ2UuY2xhc3NOYW1lID0gJ25leHQtYnRuIHBhZy1uZXh0LWJ0bic7XHJcbnBhZ2luYXRpb25CbG9jay5jbGFzc05hbWUgPSAncGFnaW5hdGlvbic7XHJcbmV4cG9ydHMuZ2FyYWdlTGVuZ3RoLmNsYXNzTmFtZSA9ICdnYXJhZ2UtbGVuZ3RoIGxlbmd0aCc7XHJcbnZpZXdCdG5zLmNsYXNzTmFtZSA9ICd2aWV3LWJ0bnMnO1xyXG5mb3JtQmxvY2suY2xhc3NOYW1lID0gJ2Zvcm0tYmxvY2snO1xyXG5tb2RhbEJvZHkuY2xhc3NOYW1lID0gJ21vZGFsLWJvZHkgaGlkZGVuJztcclxubW9kYWxDb250ZW50LmNsYXNzTmFtZSA9ICdtb2RhbC1jb250ZW50JztcclxuZ2FyYWdlQnRuLmlubmVySFRNTCA9ICdHYXJhZ2UnO1xyXG53aW5uZXJzQnRuLmlubmVySFRNTCA9ICdXaW5uZXJzJztcclxuZ2VuZXJhdGVCdG4uaW5uZXJIVE1MID0gJ0dlbmVyYXRlIDEwMCBDYXJzJztcclxuZXhwb3J0cy5wYWdlTnVtYmVyLmlubmVySFRNTCA9ICcxJztcclxuZXhwb3J0cy5wcmV2UGFnZS5pbm5lckhUTUwgPSAnPCc7XHJcbmV4cG9ydHMubmV4dFBhZ2UuaW5uZXJIVE1MID0gJz4nO1xyXG5leHBvcnRzLnN0YXJ0QnRuLmlubmVySFRNTCA9ICdTdGFydCBSYWNlJztcclxuZXhwb3J0cy5yZXNldEJ0bi5pbm5lckhUTUwgPSAnUmVzZXQgUmFjZSc7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IGlucHV0Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBmb3JtLmFjdGlvbiA9ICcjJztcclxuICAgIGlucHV0VGV4dC50eXBlID0gJ3NlYXJjaCc7XHJcbiAgICBpbnB1dENvbG9yLnR5cGUgPSAnY29sb3InO1xyXG4gICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0JztcclxuICAgIGlucHV0VGV4dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgIGlucHV0VGV4dC5jbGFzc05hbWUgPSAnbmFtZSc7XHJcbiAgICAgICAgaW5wdXRDb2xvci5jbGFzc05hbWUgPSAnY29sb3InO1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5jbGFzc05hbWUgPSAnYWRkLWNhcic7XHJcbiAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdBZGQgTmV3IENhcic7XHJcbiAgICAgICAgaW5wdXRDb2xvci52YWx1ZSA9ICcjZmZmZmZmJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlucHV0VGV4dC5jbGFzc05hbWUgPSAndXBkYXRlLW5hbWUnO1xyXG4gICAgICAgIGlucHV0Q29sb3IuY2xhc3NOYW1lID0gJ3VwZGF0ZS1jb2xvcic7XHJcbiAgICAgICAgc3VibWl0QnRuLmNsYXNzTmFtZSA9ICd1cGRhdGUtY2FyJztcclxuICAgICAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ1VwZGF0ZSBDYXInO1xyXG4gICAgICAgIGlucHV0Q29sb3IudmFsdWUgPSAnI2VmZWZlZic7XHJcbiAgICAgICAgaW5wdXRDb2xvci5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgaW5wdXRUZXh0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBzdWJtaXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZm9ybS5hcHBlbmQoaW5wdXRUZXh0KTtcclxuICAgIGZvcm0uYXBwZW5kKGlucHV0Q29sb3IpO1xyXG4gICAgZm9ybS5hcHBlbmQoc3VibWl0QnRuKTtcclxuICAgIGZvcm1CbG9jay5hcHBlbmQoZm9ybSk7XHJcbiAgICBnYXJhZ2VCbG9jay5hcHBlbmQoZm9ybUJsb2NrKTtcclxufVxyXG5wYWdpbmF0aW9uQmxvY2suYXBwZW5kKGV4cG9ydHMucHJldlBhZ2UpO1xyXG5wYWdpbmF0aW9uQmxvY2suYXBwZW5kKGV4cG9ydHMucGFnZU51bWJlcik7XHJcbnBhZ2luYXRpb25CbG9jay5hcHBlbmQoZXhwb3J0cy5uZXh0UGFnZSk7XHJcbm1vZGFsQm9keS5hcHBlbmQobW9kYWxDb250ZW50KTtcclxudmlld0J0bnMuYXBwZW5kKGdhcmFnZUJ0bik7XHJcbnZpZXdCdG5zLmFwcGVuZCh3aW5uZXJzQnRuKTtcclxucmFjZUJ0bnMuYXBwZW5kKGV4cG9ydHMuc3RhcnRCdG4pO1xyXG5yYWNlQnRucy5hcHBlbmQoZXhwb3J0cy5yZXNldEJ0bik7XHJcbmdhcmFnZUJsb2NrLmFwcGVuZChyYWNlQnRucyk7XHJcbmdhcmFnZUJsb2NrLmFwcGVuZChnZW5lcmF0ZUJ0bik7XHJcbmdhcmFnZUJsb2NrLmFwcGVuZChleHBvcnRzLmdhcmFnZUxlbmd0aCk7XHJcbmdhcmFnZUJsb2NrLmFwcGVuZChleHBvcnRzLmNhcnMpO1xyXG5nYXJhZ2VCbG9jay5hcHBlbmQocGFnaW5hdGlvbkJsb2NrKTtcclxuZ2FyYWdlQmxvY2suYXBwZW5kKG1vZGFsQm9keSk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHZpZXdCdG5zKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoZ2FyYWdlQmxvY2spO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChleHBvcnRzLndpbm5lcnNCbG9jayk7XHJcbigwLCB2aWV3XzEuc2hvd0hpZGUpKCk7XHJcbigwLCBhZGRDYXJfMS5hZGROZXdDYXIpKCk7XHJcbigwLCBnZW5lcmF0ZTEwMENhcnNfMS5nZW5lcmF0ZTEwMENhcnMpKCk7XHJcbigwLCBzaG93Q2FyXzEuc2hvd0NhcikoKTtcclxuKDAsIHBhZ2luYXRpb25fMS5wYWdpbmF0aW9uKSgpO1xyXG4oMCwgd2lubmVyc1BhZ2luYXRpb25fMS5yZW5kZXJXaW5uZXJzUGFnaW5hdGlvbikoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zdmcgPSB2b2lkIDA7XHJcbmZ1bmN0aW9uIHN2Zyhjb2xvcikge1xyXG4gICAgcmV0dXJuIGJlZm9yZUNvbG9yICsgY29sb3IgKyBhZnRlckNvbG9yO1xyXG59XHJcbmV4cG9ydHMuc3ZnID0gc3ZnO1xyXG5jb25zdCBiZWZvcmVDb2xvciA9IGA8ZGl2IGNsYXNzPVwiY2FyLW1vZGVsXCI+PHN2ZyB2ZXJzaW9uPVwiMS4yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTAwIDE2MFwiIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiNTBcIj5cclxuPHBhdGggZmlsbD1gO1xyXG5jb25zdCBhZnRlckNvbG9yID0gYCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIm00LjEgNjdsMy45LTMuNmMwIDAgMTEuNiAyLjEgMTkuNSAxLjggNy44LTAuMyAxNi40LTExLjcgOC0xMS41LTIgMC00LjItMC40LTYuMy0xcTAgMCAwIFxyXG4wYy03LjEtMS45LTE0LTYuMS0xNC02LjFsLTQuMi05YzAgMC00LjQtNy41IDQuNi02LjkgOSAwLjYgMTguOSA0LjQgMTguOSA0LjQgMCAwIDg3LjYtMjEuNSAxMDQuNy0yNC44IDE3LjEtMy4zIFxyXG44OS42LTE3LjYgMTUzLjMgMTQuNSAwIDAgNDAuMiAxOC45IDQ0LjEgMTkuMiAwIDAgMTE5LjkgNS44IDE1OS40IDQxIDAgMCAwLjYgMTIuOSAwIDIxLjMgMCAwIDEuOCA1LjQtMS4zIDEwLjYgMCAwIDIuMSBcclxuNC4yLTEuNCAzLjZsLTEuMSA4LjdjMCAwLTQuMi0yLjEtNi4xIDQuOSAwIDAtMjIuMSA1LjQtMjguMSA0LjEgMCAwIDYuNy02Ni45LTQxLjUtNjYuOS00OC4xIDAtNTIuNyA0Mi41LTUzLjQgNjcuMWwtMS44IFxyXG4xLjVjMCAwLTIxMi42LTYuMy0yMTguMy0yLjggMCAwLTIuMSAwLTEuNy00IDAgMCA2LjktNjUuNS01MC4yLTY1LjUtNTcuMiAwLTQ0LjIgNjEuMy00NC4yIDYxLjMgMCAwLTQyLjgtOS42LTM2LjMtMTYuMSAwIFxyXG4wLTE0LjktMjAuMy02LjUtNDUuOHptMzY2LjEgNS4xYzMuMi0zLjktNDEuOS00LjQtNDEuOS00LjQgMCAwLTUgNC44LTMuMyA5LjMgMS42IDQuNSAyNS4xIDMuOCAzMS44IDMuMSA2LjgtMC44IDEzLjQtOCBcclxuMTMuNC04em0tODEtMTkuN2MwIDAgMjIuNSAwLjIgMjUuNiAwIDMtMC4zIDEuOS0xLjUgMS45LTEuNSAwIDAtNS42LTcuNy00NC42LTI0LjMtMzguOS0xNi41LTYyLTE0LjEtNjItMTQuMS0xMDcuNyAzLTg3LjkgXHJcbjE2LjEtODcuOSAxNi4xbDguMSA5LjQgMjUuMiA0LjggMTEwIDYuOXptLTEwMi42IDcuMWMwIDEuMiAxIDIuMiAyLjIgMi4yaDE3LjdjMS4yIDAgMi4yLTEgMi4yLTIuMiAwLTEuMy0xLTIuMy0yLjItMi4zaC0xNy43Yy0xLjIgXHJcbjAtMi4yIDEtMi4yIDIuM3ptMTM0LjQgMTguN2MwIDAgMC44IDM0LjEtMyA0Mi4zbC05NC44LTNjMCAwLTI4LjcgMS0zOS40LTE5LjggMCAwLTkuMS0xOS0xMC41LTI1LjUgMC4zIDIuMiA0IDM3LjUgMjIuOSA0Mi43IDE5LjcgXHJcbjUuNCAxMjQuOCA4LjIgMTI0LjggOC4yIDAgMCA0LjEtMzUuMSAwLTQ0Ljl6bTQ2IDE4cTAuMi0wLjMgMC41LTAuOCAwLjYtMC45IDEuMy0yIDAuMi0wLjMgMC40LTAuNyAwLjUtMC43IDEuMS0xLjUgMC4yLTAuMyBcclxuMC40LTAuNmMwLjktMS4xIDEuOC0yLjMgMi44LTMuNXEwLjQtMC41IDAuOC0wLjljMi4yLTIuNSA0LjctNSA3LjctNy40cTAuNC0wLjMgMC44LTAuNiAwLjQtMC4zIDAuOC0wLjYgMS4xLTAuOCAyLjMtMS42IDAuOC0wLjUgXHJcbjEuNi0xLjEgMS4zLTAuNyAyLjYtMS40IDAuOS0wLjUgMS45LTAuOSAwLjQtMC4yIDAuOC0wLjQgMC40LTAuMiAwLjgtMC40IDAuOC0wLjMgMS42LTAuNyAxLTAuMyAxLjktMC42IDEuMy0wLjUgMi42LTAuOCAwLjQtMC4yIFxyXG4wLjktMC4zIDEtMC4yIDIuMS0wLjUgMS4xLTAuMiAyLjItMC40IDAuNy0wLjEgMS40LTAuMiAwLjEgMCAwLjEgMCAwLjYtMC4xIDEuMi0wLjEgMS0wLjEgMi4xLTAuMiAwLjcgMCAxLjUgMCAxLjUtMC4xIDMuMSAwYzM0LjEgXHJcbjEgNDQgMzEuMyA0NCAzMS4zaDguMmMwIDAgOS45LTUuOCAxOS44LTUuMSAxMCAwLjggMy4zLTQuMy04LjQtNi41LTExLjctMi4xLTIyLjYtMTQuNC0yNC40LTE3LjctMS44LTMuMy00NS40LTE0LTcyLjYtMTIuOCAwIDAgNDAgXHJcbjIgNzAgMTQuOSAwIDAgMS4xIDQuMS0xMS43IDBxLTEuNi0wLjUtMy43LTEuMy0wLjctMC4yLTEuNS0wLjUtMi4yLTAuOC00LjktMS42LTEuNy0wLjUtMy42LTEtMC44LTAuMi0xLjUtMC40LTAuNy0wLjItMS41LTAuMy0wLjctMC4yLTEuNS0wLjMtMC44LTAuMi0xLjYtMC4zLTAuOS0wLjItMS45LTAuMy0xLTAuMi0yLTAuMi0wLjYtMC4xLTEuMS0wLjEtMC43LTAuMS0xLjQtMC4xLTAuMSAwLTAuMyBcclxuMC0xLTAuMS0yLjEtMC4xLTEgMC0yIDAuMS0xLjEgMC0yLjEgMC4xLTAuNyAwLjEtMS40IDAuMi0wLjYgMC0xLjEgMC4xLTAuNyAwLjEtMS41IDAuMi0wLjIgMC4xLTAuNCAwLjEtMC43IDAuMS0xLjMgXHJcbjAuM2MtMC41IDAuMS0wLjkgMC4yLTEuNCAwLjRxLTAuNyAwLjEtMS40IDAuNC0wLjggMC4yLTEuNSAwLjQtMS40IDAuNS0yLjkgMS4xLTAuNyAwLjMtMS40IDAuNy0xLjYgMC43LTMuMiAxLjctMC41IFxyXG4wLjMtMS4xIDAuN2MtMC4yIDAuMS0wLjQgMC4zLTAuNiAwLjRxLTAuNCAwLjItMC43IDAuNS0wLjMgMC4yLTAuNiAwLjQgMCAwIDAgMC0wLjUgMC4zLTEgMC42LTAuNSAwLjQtMSAwLjgtMC4xIDAuMS0wLjIgXHJcbjAuMi0wLjQgMC4zLTAuNyAwLjYtMC42IDAuNS0xLjIgMS0wLjYgMC41LTEuMSAxLTAuNiAwLjUtMS4xIDEuMS0wLjEgMC4xLTAuMyAwLjItMC43IDAuNy0xLjQgMS41LTEuMiAxLjMtMi40IDIuNy0wLjQgXHJcbjAuNi0wLjkgMS4yLTEuNyAyLjItMy40IDQuNy0wLjcgMC45LTEuMyAyLTEuNSAyLjMtMi45IDUtMC4yIDAuMy0wLjMgMC42IDAuMS0wLjEgMC4yLTAuNHptMTI1LjgtOC41Yy0xMS43LTEzLjctMzMuNS0xNS42LTMzLjUtMTUuNiBcclxuMTYuMyAxNC42IDMzLjUgMTUuNiAzMy41IDE1LjZ6bS0zNDUuNyA0Mi41bDIxMC4xIDQuNGM4LjQtMy40LTIzLjctNS4xLTIzLjctNS4xIDAgMC0xNDQuNC01LjItMTU3LjYtNS4yLTEzLjMgXHJcbjAtMTguNiAxLjMtMjYuMyAyLjYtNy42IDEuMy0yLjUgMy4zLTIuNSAzLjN6bS01LjYtMzIuNWMzMy43LTIxLjIgMTcuOC0yOC44IDE3LjgtMjguOCA3LjktMS40IDE1Mi44IDIuOSAxNjEuMyBcclxuMy4yLTguMy0wLjQtMTQyLjgtNi45LTE2Ni43LTYuOS0yNC42IDAuMS0yNS40IDguNi0yNS40IDguNi0yMS44LTEwLjktMzIuMS04LjMtMzIuMS04LjMgMzMuNCAxLjQgNDUuMSAzMi4yIDQ1LjEgXHJcbjMyLjJ6bS0xMDYuNi0zLjhjMy4zIDMuOCA4LjYgNS43IDguNiA1LjEgMS0xMi42IDEwLjEtMjEuNiAxMC4xLTIxLjYtMTYgNC4yLTQ3LjItOS00Ny4yLTktMy4yIDQuNy0xLjkgMTEuOS0xLjkgXHJcbjExLjkgMTguNCAxLjEgMjcuMiA5LjcgMzAuNCAxMy42em0xODMuMy03OWMzMy4zIDAuOCA5My4zIDM0LjggOTMuMyAzNC44LTIuMS0wLjMtMTkuNCAwLjQtMjYuMy0xLjktMi0wLjYtMy4yLTEuNi0yLjktMi44IFxyXG4xLjMtNS42LTEuOC04LjItMS44LTguMiAwIDAtMTAuMS02LjQtMTUuOS0zLjEgMCAwLTMxLjctMjEuNi04NC45LTExLjQgMCAwLTMuOCAwLjQtMC44IDUuMiAyLjcgNC4xIDUuOCAxMi43IFxyXG42LjYgMTQuOC0xNy40LTEuMi0zMS42LTIuNC0zNC44LTMuMi05LjctMi4zLTE2LjMgMC41LTIyLjItOS43LTUuOC0xMC4yIDU2LjMtMTUuMyA4OS43LTE0LjV6bS02OC41IDE4LjdjMy4xIDMgMTQuNSBcclxuNC40IDE0LjUgNC40IDAgMCAyLjItMy42LTMuMi0xMS4zLTAuNC0wLjUtMTEuMyAzLjItMTEuMyAzLjIgMCAwLTMgMC42IDAgMy43em0xNzkuOSAzOC41aDMzLjJjMC44IDAgMS40IDAuNiAxLjQgMS40IDAgXHJcbjAuNy0wLjYgMS4zLTEuNCAxLjNoLTMzLjJjLTAuOCAwLTEuNC0wLjYtMS40LTEuMyAwLTAuOCAwLjYtMS40IDEuNC0xLjR6bS0xNDIuNS0zMC44YzAgMCA1Ny4yIDUgNjUuNiA0LjMgMCAwLTAuMi03LjMgXHJcbjQuNy02LjkgMCAwLTQuMSA0LjggMC4xIDcuOCAwIDAtMjUuNiAyLjEtNzAuNC01LjJ6XCIvPlxyXG48cGF0aCBkPVwibTQ5Mi41IDEyNS4zYzAgMC0zLjkgMC4zLTQgNC40bC0yNiA0LjdjMCAwIDQ3LjktMS4yIDMwLTkuMXpcIi8+XHJcbjxwYXRoIGQ9XCJtMzY1LjUgOTlxMC4yLTAuNCAwLjQtMC43LTAuMyAwLjQtMC40IDAuN3pcIi8+XHJcbjxwYXRoIGQ9XCJtMzI5LjUgNzIuMWgzMy4zYzAuOCAwIDEuNCAwLjYgMS40IDEuMyAwIDAuOC0wLjYgMS40LTEuNCAxLjRoLTMzLjNjLTAuNyAwLTEuMy0wLjYtMS4zLTEuNCAwLTAuNyAwLjYtMS4zIDEuMy0xLjN6XCIvPlxyXG48cGF0aCBkPVwibTMyOS41IDcyLjFoMzMuM2MwLjggMCAxLjQgMC42IDEuNCAxLjMgMCAwLjgtMC42IDEuNC0xLjQgMS40aC0zMy4zYy0wLjcgMC0xLjMtMC42LTEuMy0xLjQgMC0wLjcgMC42LTEuMyAxLjMtMS4zelwiLz5cclxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJtMjE4LjEgMTQuOWMzMy40IDAuNyA5My40IDM0LjggOTMuNCAzNC44LTIuMS0wLjMtMTkuNCAwLjQtMjYuMy0xLjktMi0wLjctMy4yLTEuNi0yLjktMi44IFxyXG4xLjMtNS42LTEuOC04LjItMS44LTguMiAwIDAtMTAuMi02LjQtMTUuOS0zLjEgMCAwLTMxLjctMjEuNi04NC45LTExLjQgMCAwLTMuOCAwLjQtMC44IDUuMSAyLjcgNC4yIDUuOCAxMi44IDYuNSBcclxuMTQuOS0xNy4zLTEuMi0zMS41LTIuNC0zNC44LTMuMi05LjYtMi4zLTE2LjMgMC41LTIyLjEtOS43LTUuOS0xMC4yIDU2LjMtMTUuMyA4OS42LTE0LjV6bS02OC40IDE4LjdjMy4xIDMgMTQuNSA0LjQgMTQuNSBcclxuNC40IDAgMCAyLjItMy43LTMuMi0xMS4zLTAuNC0wLjUtMTEuMyAzLjItMTEuMyAzLjIgMCAwLTMuMSAwLjYgMCAzLjd6XCIvPlxyXG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIm0xODUuNCA0Mi4zYy0xNy4zLTEuMi0zMS41LTIuNC0zNC44LTMuMi05LjYtMi4zLTE2LjMgMC41LTIyLjEtOS43LTUuOS0xMC4yIDU2LjMtMTUuMyA4OS42LTE0LjUgXHJcbjMzLjQgMC43IDkzLjQgMzQuOCA5My40IDM0LjgtMi4xLTAuMy0xOS40IDAuNC0yNi4zLTEuOS0yLTAuNy0zLjItMS42LTIuOS0yLjggMS4zLTUuNi0xLjgtOC4yLTEuOC04LjIgMCAwLTEwLjItNi40LTE1LjktMy4xIDAgXHJcbjAtMzEuNy0yMS42LTg0LjktMTEuNCAwIDAtMy44IDAuNC0wLjggNS4xIDIuNyA0LjIgNS44IDEyLjggNi41IDE0Ljl6bS0zNS43LTguN2MzLjEgMyAxNC41IDQuNCAxNC41IDQuNCBcclxuMCAwIDIuMi0zLjctMy4yLTExLjMtMC40LTAuNS0xMS4zIDMuMi0xMS4zIDMuMiAwIDAtMy4xIDAuNiAwIDMuN3pcIi8+XHJcbjxwYXRoIGQ9XCJtMjc2LjggMzYuMWM3LjIgMy4yIDQgOC42IDMuOSAxMC4zIDAgMS44LTE2LjEgNC41LTE4LjItMS4yLTItNS42IDItMTAuOSAyLTEwLjkgMCAwIDUuMi0xLjQgMTIuMyAxLjh6XCIvPlxyXG48Zz5cclxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJtNDExLjUgNzcuMmMyMi4xIDAgNDAuMSAxOCA0MC4xIDQwLjIgMCAyMi4yLTE4IDQwLjItNDAuMSA0MC4yLTIyLjIgMC00MC4yLTE4LTQwLjItNDAuMiAwLTIyLjIgMTgtNDAuMiBcclxuNDAuMi00MC4yem0tMzIuNSA0MC4yYzAgMTggMTQuNSAzMi41IDMyLjUgMzIuNSAxNy45IDAgMzIuNC0xNC41IDMyLjQtMzIuNSAwLTE4LTE0LjUtMzIuNS0zMi40LTMyLjUtMTggMC0zMi41IDE0LjUtMzIuNSBcclxuMzIuNXptMTAtMjAuN2MwIDIuNSAxLjkgOS4xIDE4LjUgMTguMy0wLjQgMC42LTAuNiAxLjMtMC42IDItMTguNi0xLjUtMjQuMSAyLjctMjUuNyA1cS0wLjMtMi4yLTAuMy00LjZjMC04IDMtMTUuMyBcclxuOC4xLTIwLjd6bTE4LjkgMjMuN2MwLjUgMC42IDEuMSAxIDEuNyAxLjMtOC44IDE1LjctNy42IDIyLjYtNi4zIDI1LjItOS0yLjQtMTYuMy04LjktMTkuOS0xNy4zIDIuMSAxLjEgOC43IDIuNSBcclxuMjQuNS05LjJ6bTMuNi0zMy42YzQuOSAwIDkuNSAxLjEgMTMuNiAzLjItMi42IDAuOS04LjIgNS0xMi4yIDIzcS0wLjctMC4yLTEuNC0wLjItMC40IDAtMC44IDBjLTQuMy0yMC4xLTEwLjYtMjIuNy0xMi41LTIzIDQtMS45IFxyXG44LjUtMyAxMy4zLTN6bTEuNCAzNXExLjEtMC4zIDEuOC0xLjFjMTMuOCAxMi44IDIwLjggMTIuNyAyMy4zIDExLjktNC41IDcuOS0xMi40IDEzLjYtMjEuNyAxNS4xIDEuNi0yLjEgXHJcbjMuOS04LjYtMy40LTI1Ljl6bTIuOS02LjFjMTguNi04LjMgMTkuOS0xNSAxOS44LTE3LjEgNC4xIDUuMiA2LjUgMTEuNyA2LjUgMTguOHEtMC4xIDQtMSA3LjdjLTEuNC0yLjQtNi41LTcuMS0yNS03LjJxMC0wLjIgXHJcbjAtMC41IDAtMC45LTAuMy0xLjd6bS02LjEgNS45bC0wLjEgMC4xcTAtMC4xIDAuMS0wLjF6XCIvPlxyXG48cGF0aCBkPVwibTQxNS44IDExNS43YzE4LjYtOC4zIDE5LjktMTUgMTkuOC0xNy4xIDQuMSA1LjIgNi41IDExLjcgNi41IDE4LjhxLTAuMSA0LTEgNy43Yy0xLjQtMi40LTYuNS03LjEtMjUtNy4ycTAtMC4yIFxyXG4wLTAuNSAwLTAuOS0wLjMtMS43elwiLz5cclxuPHBhdGggZD1cIm00MTIuOSAxMjEuOHExLjEtMC4zIDEuOC0xLjFjMTMuOCAxMi44IDIwLjggMTIuNyAyMy4zIDExLjktNC41IDcuOS0xMi40IDEzLjYtMjEuNyAxNS4xIDEuNi0yLjEgMy45LTguNi0zLjQtMjUuOXpcIi8+XHJcbjxwYXRoIGQ9XCJtNDA5LjcgMTIxLjZsLTAuMSAwLjFxMC0wLjEgMC4xLTAuMXpcIi8+XHJcbjxwYXRoIGQ9XCJtNDExLjUgODYuOGM0LjkgMCA5LjUgMS4xIDEzLjYgMy4yLTIuNiAwLjktOC4yIDUtMTIuMiAyM3EtMC43LTAuMi0xLjQtMC4yLTAuNCAwLTAuOCBcclxuMGMtNC4zLTIwLjEtMTAuNi0yMi43LTEyLjUtMjMgNC0xLjkgOC41LTMgMTMuMy0zelwiLz5cclxuPHBhdGggZD1cIm00MDcuOSAxMjAuNGMwLjUgMC42IDEuMSAxIDEuNyAxLjMtOC44IDE1LjctNy42IDIyLjYtNi4zIDI1LjItOS0yLjQtMTYuMy04LjktMTkuOS0xNy4zIDIuMSAxLjEgOC43IDIuNSAyNC41LTkuMnpcIi8+XHJcbjxwYXRoIGQ9XCJtMzg5IDk2LjdjMCAyLjUgMS45IDkuMSAxOC41IDE4LjMtMC40IDAuNi0wLjYgMS4zLTAuNiAyLTE4LjYtMS41LTI0LjEgMi43LTI1LjcgNXEtMC4zLTIuMi0wLjMtNC42YzAtOCAzLTE1LjMgOC4xLTIwLjd6XCIvPlxyXG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZmlsbD1cIndoaXRlXCIgZD1cIm0zODkgOTYuN2MwIDIuNSAxLjkgOS4xIDE4LjUgMTguMy0wLjQgMC42LTAuNiAxLjMtMC42IDItMTguNi0xLjUtMjQuMSAyLjctMjUuNyBcclxuNXEtMC4zLTIuMi0wLjMtNC42YzAtOCAzLTE1LjMgOC4xLTIwLjd6bTE4LjkgMjMuN2MwLjUgMC42IDEuMSAxIDEuNyAxLjMtOC44IDE1LjctNy42IDIyLjYtNi4zIDI1LjItOS0yLjQtMTYuMy04LjktMTkuOS0xNy4zIFxyXG4yLjEgMS4xIDguNyAyLjUgMjQuNS05LjJ6bTMuNi0zMy42YzQuOSAwIDkuNSAxLjEgMTMuNiAzLjItMi42IDAuOS04LjIgNS0xMi4yIDIzcS0wLjctMC4yLTEuNC0wLjItMC40IDAtMC44IFxyXG4wYy00LjMtMjAuMS0xMC42LTIyLjctMTIuNS0yMyA0LTEuOSA4LjUtMyAxMy4zLTN6bTEuNCAzNXExLjEtMC4zIDEuOC0xLjFjMTMuOCAxMi44IDIwLjggMTIuNyAyMy4zIDExLjktNC41IDcuOS0xMi40IFxyXG4xMy42LTIxLjcgMTUuMSAxLjYtMi4xIDMuOS04LjYtMy40LTI1Ljl6bTIuOS02LjFjMTguNi04LjMgMTkuOS0xNSAxOS44LTE3LjEgNC4xIDUuMiA2LjUgMTEuNyA2LjUgMTguOHEtMC4xIFxyXG40LTEgNy43Yy0xLjQtMi40LTYuNS03LjEtMjUtNy4ycTAtMC4yIDAtMC41IDAtMC45LTAuMy0xLjd6bS02LjEgNS45bC0wLjEgMC4xcTAtMC4xIDAuMS0wLjF6XCIvPlxyXG48cGF0aCBkPVwibTQwNi44IDExNy4xcTAgMCAwLjEtMC4xYzAtMC43IDAuMi0xLjQgMC42LTJxMCAwIDAtMC4xYzAuNy0xIDEuOC0xLjggMy4xLTJxMCAwIDAuMS0wLjEgMC40IDAgMC44IDAgMC43IDAgMS40IDAuMiAwLjEgXHJcbjAgMC4xIDAuMWMxLjIgMC40IDIuMiAxLjMgMi43IDIuNXEwLjEgMCAwLjEgMC4xIDAuMyAwLjggMC4zIDEuNyAwIDAuMyAwIDAuNSAwIDAuMSAwIDAuMWMtMC4yIDEtMC42IDEuOS0xLjMgMi42cTAgMC4xLTAuMSBcclxuMC4xLTAuNyAwLjgtMS44IDEuMSAwIDAgMCAwLTAuNyAwLjMtMS40IDAuM2MtMC43IDAtMS4zLTAuMi0xLjktMC40bDAuMS0wLjFxLTAuMSAwLTAuMSAwLjFjLTAuNi0wLjMtMS4yLTAuNy0xLjctMS4zcTAgMCBcclxuMC0wLjFjLTAuNy0wLjgtMS4xLTEuOC0xLjEtMi45cTAtMC4xIDAtMC4zelwiLz5cclxuPHBhdGggZD1cIm00MDkuNyAxMjEuNmwtMC4xIDAuMXEwLTAuMSAwLjEtMC4xelwiLz5cclxuPHBhdGggZD1cIm00MDkuNyAxMjEuNmwtMC4xIDAuMXEwLTAuMSAwLjEtMC4xelwiLz5cclxuPC9nPlxyXG48Zz5cclxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJtOTIuMSA3Mi44YzIyLjIgMCA0MC4xIDE4IDQwLjEgNDAuMiAwIDIyLjItMTcuOSA0MC4yLTQwLjEgNDAuMi0yMi4yIDAtNDAuMS0xOC00MC4xLTQwLjIgMC0yMi4yIFxyXG4xNy45LTQwLjIgNDAuMS00MC4yem0tMzIuNCA0MC4yYzAgMTggMTQuNSAzMi41IDMyLjQgMzIuNSAxNy45IDAgMzIuNC0xNC41IDMyLjQtMzIuNSAwLTE4LTE0LjUtMzIuNS0zMi40LTMyLjUtMTcuOSAwLTMyLjQgXHJcbjE0LjUtMzIuNCAzMi41em05LjktMjAuN2MwIDIuNSAxLjkgOS4xIDE4LjUgMTguMy0wLjMgMC42LTAuNiAxLjMtMC42IDIuMS0xOC41LTEuNi0yNCAyLjYtMjUuNyA0LjlxLTAuMy0yLjItMC4zLTQuNmMwLTggMy4xLTE1LjMgXHJcbjguMS0yMC43em0xOSAyMy43YzAuNCAwLjYgMSAxIDEuNyAxLjMtOC44IDE1LjctNy43IDIyLjYtNi40IDI1LjItOC45LTIuNC0xNi4yLTguOS0xOS45LTE3LjMgMi4xIDEuMSA4LjcgMi41IDI0LjYtOS4yem0zLjUtMzMuNmM0LjkgXHJcbjAgOS42IDEuMiAxMy43IDMuMi0yLjcgMC45LTguMyA1LTEyLjMgMjNxLTAuNy0wLjItMS40LTAuMi0wLjQgMC0wLjggMGMtNC4zLTIwLjEtMTAuNi0yMi43LTEyLjUtMjMgNC0xLjkgOC41LTMgMTMuMy0zem0xLjQgXHJcbjM1cTEuMS0wLjMgMS45LTEuMWMxMy43IDEyLjggMjAuNyAxMi43IDIzLjIgMTEuOS00LjUgNy45LTEyLjQgMTMuNi0yMS43IDE1LjEgMS42LTIuMSAzLjktOC42LTMuNC0yNS45em0yLjktNi4xYzE4LjYtOC4zIFxyXG4xOS45LTE1IDE5LjgtMTcuMSA0LjEgNS4yIDYuNSAxMS43IDYuNSAxOC44cTAgNC0xIDcuN2MtMS40LTIuNC02LjUtNy4xLTI1LTcuMnEwLTAuMiBcclxuMC0wLjUgMC0wLjktMC4zLTEuN3ptLTYuMSA1Ljl2MC4xcTAtMC4xIDAtMC4xelwiLz5cclxuPHBhdGggZD1cIm05Ni40IDExMS4zYzE4LjYtOC4zIDE5LjktMTUgMTkuOC0xNy4xIDQuMSA1LjIgNi41IDExLjcgNi41IDE4LjhxMCA0LTEgXHJcbjcuN2MtMS40LTIuNC02LjUtNy4xLTI1LTcuMnEwLTAuMiAwLTAuNSAwLTAuOS0wLjMtMS43elwiLz5cclxuPHBhdGggZD1cIm05My41IDExNy40cTEuMS0wLjMgMS45LTEuMWMxMy43IDEyLjggMjAuNyAxMi43IDIzLjIgMTEuOS00LjUgNy45LTEyLjQgMTMuNi0yMS43IDE1LjEgMS42LTIuMSAzLjktOC42LTMuNC0yNS45elwiLz5cclxuPHBhdGggZD1cIm05MC4zIDExNy4ydjAuMXEwLTAuMSAwLTAuMXpcIi8+XHJcbjxwYXRoIGQ9XCJtOTIuMSA4Mi40YzQuOSAwIDkuNiAxLjIgMTMuNyAzLjItMi43IDAuOS04LjMgNS0xMi4zIDIzcS0wLjctMC4yLTEuNC0wLjItMC40IDAtMC44IFxyXG4wYy00LjMtMjAuMS0xMC42LTIyLjctMTIuNS0yMyA0LTEuOSA4LjUtMyAxMy4zLTN6XCIvPlxyXG48cGF0aCBkPVwibTg4LjYgMTE2YzAuNCAwLjYgMSAxIDEuNyAxLjMtOC44IDE1LjctNy43IDIyLjYtNi40IDI1LjItOC45LTIuNC0xNi4yLTguOS0xOS45LTE3LjMgMi4xIDEuMSA4LjcgMi41IDI0LjYtOS4yelwiLz5cclxuPHBhdGggZD1cIm02OS42IDkyLjNjMCAyLjUgMS45IDkuMSAxOC41IDE4LjMtMC4zIDAuNi0wLjYgMS4zLTAuNiAyLjEtMTguNS0xLjYtMjQgMi42LTI1LjcgXHJcbjQuOXEtMC4zLTIuMi0wLjMtNC42YzAtOCAzLjEtMTUuMyA4LjEtMjAuN3pcIi8+XHJcbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBmaWxsPVwid2hpdGVcIiBkPVwibTY5LjYgOTIuM2MwIDIuNSAxLjkgOS4xIDE4LjUgMTguMy0wLjMgMC42LTAuNiAxLjMtMC42IDIuMS0xOC41LTEuNi0yNCAyLjYtMjUuNyBcclxuNC45cS0wLjMtMi4yLTAuMy00LjZjMC04IDMuMS0xNS4zIDguMS0yMC43em0xOSAyMy43YzAuNCAwLjYgMSAxIDEuNyAxLjMtOC44IDE1LjctNy43IDIyLjYtNi40IDI1LjItOC45LTIuNC0xNi4yLTguOS0xOS45LTE3LjMgXHJcbjIuMSAxLjEgOC43IDIuNSAyNC42LTkuMnptMy41LTMzLjZjNC45IDAgOS42IDEuMiAxMy43IDMuMi0yLjcgMC45LTguMyA1LTEyLjMgMjNxLTAuNy0wLjItMS40LTAuMi0wLjQgMC0wLjggXHJcbjBjLTQuMy0yMC4xLTEwLjYtMjIuNy0xMi41LTIzIDQtMS45IDguNS0zIDEzLjMtM3ptMS40IDM1cTEuMS0wLjMgMS45LTEuMWMxMy43IDEyLjggMjAuNyAxMi43IDIzLjIgMTEuOS00LjUgNy45LTEyLjQgXHJcbjEzLjYtMjEuNyAxNS4xIDEuNi0yLjEgMy45LTguNi0zLjQtMjUuOXptMi45LTYuMWMxOC42LTguMyAxOS45LTE1IDE5LjgtMTcuMSA0LjEgNS4yIDYuNSAxMS43IDYuNSAxOC44cTAgNC0xIFxyXG43LjdjLTEuNC0yLjQtNi41LTcuMS0yNS03LjJxMC0wLjIgMC0wLjUgMC0wLjktMC4zLTEuN3ptLTYuMSA1Ljl2MC4xcTAtMC4xIDAtMC4xelwiLz5cclxuPHBhdGggZD1cIm04Ny41IDExMi43cTAgMCAwIDBjMC0wLjggMC4zLTEuNSAwLjYtMi4xcTAuMSAwIDAuMS0wLjFjMC42LTEgMS43LTEuOCAzLTJxMC4xIDAgMC4xLTAuMSAwLjQgMCAwLjggMCAwLjcgMCAxLjQgMC4yIDAuMSBcclxuMCAwLjEgMC4xYzEuMyAwLjQgMi4yIDEuMyAyLjggMi41cTAgMCAwIDAuMSAwLjMgMC44IDAuMyAxLjcgMCAwLjMgMCAwLjUgMCAwLjEgMCAwLjFjLTAuMSAxLTAuNiAxLjktMS4zIDIuNnEwIDAuMSBcclxuMCAwLjEtMC44IDAuOC0xLjkgMS4xIDAgMCAwIDAtMC43IDAuMy0xLjQgMC4zYy0wLjcgMC0xLjMtMC4yLTEuOC0wLjR2LTAuMXEwIDAgMCAwLjFjLTAuNy0wLjMtMS4zLTAuNy0xLjctMS4zcS0wLjEgXHJcbjAtMC4xLTAuMWMtMC42LTAuNy0xLTEuOC0xLTIuOXEwLTAuMSAwLTAuM3pcIi8+XHJcbjwvZz5cclxuPC9zdmc+XHJcbjxzcGFuIGNsYXNzPVwibC13aGVlbFwiPjwvc3Bhbj5cclxuPHNwYW4gY2xhc3M9XCJyLXdoZWVsXCI+PC9zcGFuPlxyXG48L2Rpdj5gO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMud2lubmVycyA9IGV4cG9ydHMuZW5pZ2luZSA9IGV4cG9ydHMuZ2FyYWdlID0gdm9pZCAwO1xyXG52YXIgdXJscztcclxuKGZ1bmN0aW9uICh1cmxzKSB7XHJcbiAgICB1cmxzW1wiZ2FyYWdlXCJdID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2FyYWdlXCI7XHJcbiAgICB1cmxzW1wiZW5naW5lXCJdID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvZW5naW5lXCI7XHJcbiAgICB1cmxzW1wid2lubmVyc1wiXSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3dpbm5lcnNcIjtcclxufSkodXJscyB8fCAodXJscyA9IHt9KSk7XHJcbmNsYXNzIEdhcmFnZSB7XHJcbiAgICBnZXRDYXIoaWQpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godXJscy5nYXJhZ2UgKyBgLyR7aWR9YCk7XHJcbiAgICB9XHJcbiAgICBnZXRBbGxDYXJzKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmxzLmdhcmFnZSk7XHJcbiAgICB9XHJcbiAgICBnZXRMaW1pdGVkQ2FycyhwYWdlTikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmZXRjaCh1cmxzLmdhcmFnZSArIGA/X3BhZ2U9JHtwYWdlTn0mX2xpbWl0PTdgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFkZENhcihjYXJOYW1lLCBjYXJDb2xvcikge1xyXG4gICAgICAgIGZldGNoKHVybHMuZ2FyYWdlLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWU6IGNhck5hbWUsIGNvbG9yOiBjYXJDb2xvciB9KSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbW92ZUNhcihpZCkge1xyXG4gICAgICAgIGZldGNoKHVybHMuZ2FyYWdlICsgYC8ke2lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUNhcihpZCwgY2FyTmFtZSwgY2FyQ29sb3IpIHtcclxuICAgICAgICBmZXRjaCh1cmxzLmdhcmFnZSArIGAvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZTogY2FyTmFtZSwgY29sb3I6IGNhckNvbG9yIH0pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEVuZ2luZSB7XHJcbiAgICBzdGFydChpZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKHVybHMuZW5naW5lICsgYD9pZD0ke2lkfSZzdGF0dXM9c3RhcnRlZGAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0b3AoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB5aWVsZCBmZXRjaCh1cmxzLmVuZ2luZSArIGA/aWQ9JHtpZH0mc3RhdHVzPXN0b3BwZWRgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZHJpdmUoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaCh1cmxzLmVuZ2luZSArIGA/aWQ9JHtpZH0mc3RhdHVzPWRyaXZlYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgV2lubmVycyB7XHJcbiAgICBnZXRBbGxXaW5lcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybHMud2lubmVycyk7XHJcbiAgICB9XHJcbiAgICBnZXRMaW1pdGVkV2lubmVycyhwYWdlTiwgc29ydFR5cGUsIHNvcnRPcmRlcikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChzb3J0VHlwZSAmJiBzb3J0T3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBmZXRjaCh1cmxzLndpbm5lcnMgKyBgP19wYWdlPSR7cGFnZU59Jl9saW1pdD0xMCZfc29ydD0ke3NvcnRUeXBlfSZfb3JkZXI9JHtzb3J0T3JkZXJ9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgZmV0Y2godXJscy53aW5uZXJzICsgYD9fcGFnZT0ke3BhZ2VOfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhZGRXaW5uZXIoaWQsIHRpbWUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaCh1cmxzLndpbm5lcnMsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZDogaWQsIHdpbnM6IDEsIHRpbWU6IHRpbWUgfSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0V2lubmVyKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2godXJscy53aW5uZXJzICsgYC8ke2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVdpbm5lcihpZCwgd2lucywgdGltZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKHVybHMud2lubmVycyArIGAvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB3aW5zOiB3aW5zLCB0aW1lOiB0aW1lIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbW92ZVdpbm5lcihpZCkge1xyXG4gICAgICAgIGZldGNoKHVybHMud2lubmVycyArIGAvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5nYXJhZ2UgPSBuZXcgR2FyYWdlKCk7XHJcbmV4cG9ydHMuZW5pZ2luZSA9IG5ldyBFbmdpbmUoKTtcclxuZXhwb3J0cy53aW5uZXJzID0gbmV3IFdpbm5lcnMoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zaG93SGlkZSA9IHZvaWQgMDtcclxuY29uc3Qgc2hvd1dpbm5lcnNfMSA9IHJlcXVpcmUoXCIuLi9nZXRDYXJzJldpbm5lcnMvc2hvd1dpbm5lcnNcIik7XHJcbmNvbnN0IHNvcnRXaW5uZXJzXzEgPSByZXF1aXJlKFwiLi4vZ2V0Q2FycyZXaW5uZXJzL3NvcnRXaW5uZXJzXCIpO1xyXG5mdW5jdGlvbiBzaG93SGlkZSgpIHtcclxuICAgIGNvbnN0IGdhcmFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UtdmlldycpO1xyXG4gICAgY29uc3Qgd2lubmVyc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzLXZpZXcnKTtcclxuICAgIGNvbnN0IGdhcmFnZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpO1xyXG4gICAgY29uc3Qgd2lubmVyc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcnMnKTtcclxuICAgIGdhcmFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhpZGVCbG9jayhnYXJhZ2VCbG9jaywgd2lubmVyc0Jsb2NrKSk7XHJcbiAgICB3aW5uZXJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGhpZGVCbG9jayh3aW5uZXJzQmxvY2ssIGdhcmFnZUJsb2NrKTtcclxuICAgICAgICBjb25zdCBzb3J0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpWzBdO1xyXG4gICAgICAgIGlmIChzb3J0KSB7XHJcbiAgICAgICAgICAgIGlmIChzb3J0LnZhbHVlICE9PSAnU29ydCBieTonKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbc29ydFR5cGUsIHNvcnRPcmRlcl0gPSAoMCwgc29ydFdpbm5lcnNfMS5nZXRTb3J0T3B0aW9ucykoc29ydC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAoMCwgc2hvd1dpbm5lcnNfMS5zaG93V2lubmVycykoc29ydFR5cGUsIHNvcnRPcmRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICgwLCBzaG93V2lubmVyc18xLnNob3dXaW5uZXJzKSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gaGlkZUJsb2NrKHNob3dpbmdFbCwgaGlkaW5nRWwpIHtcclxuICAgICAgICBzaG93aW5nRWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgaGlkaW5nRWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zaG93SGlkZSA9IHNob3dIaWRlO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vb3RoZXJzL3JlbmRlckh0bWxcIik7XHJcbnJlcXVpcmUoXCIuL3ZpZXdzL3ZpZXdcIik7XHJcbnJlcXVpcmUoXCIuL3N0eWxlLmNzc1wiKTtcclxucmVxdWlyZShcIi4vZ2V0Q2FycyZXaW5uZXJzL2FkZENhclwiKTtcclxucmVxdWlyZShcIi4vZ2V0Q2FycyZXaW5uZXJzL3Nob3dDYXJcIik7XHJcbnJlcXVpcmUoXCIuL2dldENhcnMmV2lubmVycy9kZWxldGVDYXJcIik7XHJcbnJlcXVpcmUoXCIuL2dldENhcnMmV2lubmVycy9zdGFydFN0b3BcIik7XHJcbnJlcXVpcmUoXCIuL2dldENhcnMmV2lubmVycy9yYWNlXCIpO1xyXG5yZXF1aXJlKFwiLi9nZXRDYXJzJldpbm5lcnMvc2hvd1dpbm5lcnNcIik7XHJcbnJlcXVpcmUoXCIuL2dldENhcnMmV2lubmVycy9tb2RhbFdpbmRvd1wiKTtcclxucmVxdWlyZShcIi4vZ2V0Q2FycyZXaW5uZXJzL3NvcnRXaW5uZXJzXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=