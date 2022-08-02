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
___CSS_LOADER_EXPORT___.push([module.id, ".cars {\r\n    margin-top: 20px;\r\n}\r\n\r\n.modal-body,\r\n.modal-content {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal-body {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    z-index: 2;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-content {\r\n    width: 250px;\r\n    height: 150px;\r\n    font-size: 25px;\r\n    font-family: 'PT Sans', sans-serif;\r\n    color: #282d3c;\r\n    background-color: #edf1ff;\r\n    border-radius: 20px;\r\n    padding: 5px;\r\n    cursor: default;\r\n}\r\n\r\n.view-btns {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.view-btns button {\r\n    background: #56c6a9;\r\n}\r\n\r\n.view-btns button:hover {\r\n    background: #39ac8e;\r\n}\r\n\r\n.form-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 400px;\r\n}\r\n\r\n.race-btns {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    max-width: 400px;\r\n    margin-top: 5px;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 5px 0;\r\n}\r\n\r\nform input[type='color']:disabled {\r\n    cursor: default;\r\n    opacity: 0.3;\r\n}\r\n\r\nform input[type='search'] {\r\n    border: none;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    width: 200px;\r\n    height: 30px;\r\n    font-size: 18px;\r\n    margin: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\nform input[type='color'] {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    background: none;\r\n    height: 42px;\r\n    width: 70px;\r\n    border: 0;\r\n    cursor: pointer;\r\n    padding: 0;\r\n    margin: 0 5px;\r\n    background-color: transparent;\r\n}\r\n\r\nform input[type='color']::-webkit-color-swatch {\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\nbutton {\r\n    width: 150px;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    font-size: 16px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    transition: 0.5s ease;\r\n    cursor: pointer;\r\n    opacity: 1;\r\n}\r\n\r\nbutton:hover {\r\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\nbutton:disabled,\r\nbutton:disabled:hover {\r\n    cursor: default;\r\n    background: #efefef;\r\n    opacity: 0.3;\r\n    box-shadow: none;\r\n}\r\n\r\n.add-car {\r\n    background-color: #95ba5e;\r\n}\r\n\r\n.add-car:hover {\r\n    background-color: #7ca145;\r\n}\r\n\r\n.car-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.car-info {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.length {\r\n    text-align: center;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 25px;\r\n    color: #edf1ff;\r\n    margin: 0;\r\n}\r\n\r\n.car-name {\r\n    color: #a0daa9;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 22px;\r\n    margin: 0;\r\n    text-shadow: 0 0 5px black;\r\n}\r\n\r\n.car-icon {\r\n    position: relative;\r\n    animation-timing-function: linear;\r\n    width: 120px;\r\n    height: 50px;\r\n    stroke: black;\r\n}\r\n\r\n.car-model {\r\n    width: 120px;\r\n    height: 50px;\r\n    position: relative;\r\n    stroke: black;\r\n}\r\n\r\n.car-smoke {\r\n    display: block;\r\n    position: relative;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    width: 30px;\r\n    height: 20px;\r\n    background-size: 30px 20px;\r\n    left: 85px;\r\n    bottom: 50px;\r\n    display: none;\r\n}\r\n\r\n.l-wheel,\r\n.r-wheel {\r\n    position: relative;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: 20px 20px;\r\n    display: block;\r\n}\r\n\r\n.car-icon svg g {\r\n    display: none;\r\n}\r\n\r\n.l-wheel {\r\n    bottom: 30px;\r\n    left: 12.5px;\r\n}\r\n\r\n.r-wheel {\r\n    bottom: 49px;\r\n    left: 89px;\r\n}\r\n\r\n.remove-car {\r\n    margin: 0 15px;\r\n    background: #e3654f;\r\n}\r\n.remove-car:hover {\r\n    background: #dd4124;\r\n}\r\n\r\n.car-start {\r\n    width: 100px;\r\n}\r\n\r\n.gen-cars {\r\n    margin-top: 10px;\r\n}\r\n\r\n.road {\r\n    position: relative;\r\n    bottom: 15px;\r\n    width: 100%;\r\n    height: 5px;\r\n    background: white;\r\n}\r\n\r\n.car-road {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.start-stop {\r\n    display: flex;\r\n}\r\n\r\n.start-stop button {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin: 0 10px 0 0;\r\n}\r\n\r\n.update-btn,\r\n.update-car {\r\n    background: #4572ba;\r\n}\r\n\r\n.update-btn:hover,\r\n.update-car:hover {\r\n    background: #34568b;\r\n}\r\n\r\n.start-race,\r\n.reset-race {\r\n    background: #f5df4d;\r\n}\r\n\r\n.start-race:hover,\r\n.reset-race:hover {\r\n    background: #f1d30e;\r\n}\r\n\r\n.race-road {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\n.finish-icon {\r\n    display: block;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-size: 150px 10px;\r\n    width: 150px;\r\n    height: 10px;\r\n    position: relative;\r\n    top: 42px;\r\n    z-index: 1;\r\n    right: 30px;\r\n}\r\n\r\n.pagination {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 20px;\r\n    line-height: 23px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.pag-num {\r\n    color: #edf1ff;\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin: 0 50px;\r\n}\r\n\r\n.pag-prev-btn,\r\n.pag-next-btn {\r\n    width: 52px;\r\n    height: 52px;\r\n    border-radius: 50%;\r\n    font-size: 25px;\r\n    background-color: #a0daa9;\r\n    text-align: center;\r\n}\r\n\r\n.pag-prev-btn:hover,\r\n.pag-next-btn:hover {\r\n    background-color: #6cc67a;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/garage.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Ubuntu:wght@500&family=Open+Sans:wght@500&family=PT+Sans&display=swap');\r\n\r\n.cars {\r\n    margin-top: 20px;\r\n}\r\n\r\n.modal-body,\r\n.modal-content {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal-body {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    z-index: 2;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-content {\r\n    width: 250px;\r\n    height: 150px;\r\n    font-size: 25px;\r\n    font-family: 'PT Sans', sans-serif;\r\n    color: #282d3c;\r\n    background-color: #edf1ff;\r\n    border-radius: 20px;\r\n    padding: 5px;\r\n    cursor: default;\r\n}\r\n\r\n.view-btns {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.view-btns button {\r\n    background: #56c6a9;\r\n}\r\n\r\n.view-btns button:hover {\r\n    background: #39ac8e;\r\n}\r\n\r\n.form-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 400px;\r\n}\r\n\r\n.race-btns {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    max-width: 400px;\r\n    margin-top: 5px;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 5px 0;\r\n}\r\n\r\nform input[type='color']:disabled {\r\n    cursor: default;\r\n    opacity: 0.3;\r\n}\r\n\r\nform input[type='search'] {\r\n    border: none;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    width: 200px;\r\n    height: 30px;\r\n    font-size: 18px;\r\n    margin: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\nform input[type='color'] {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    background: none;\r\n    height: 42px;\r\n    width: 70px;\r\n    border: 0;\r\n    cursor: pointer;\r\n    padding: 0;\r\n    margin: 0 5px;\r\n    background-color: transparent;\r\n}\r\n\r\nform input[type='color']::-webkit-color-swatch {\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\nbutton {\r\n    width: 150px;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    font-size: 16px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    transition: 0.5s ease;\r\n    cursor: pointer;\r\n    opacity: 1;\r\n}\r\n\r\nbutton:hover {\r\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\nbutton:disabled,\r\nbutton:disabled:hover {\r\n    cursor: default;\r\n    background: #efefef;\r\n    opacity: 0.3;\r\n    box-shadow: none;\r\n}\r\n\r\n.add-car {\r\n    background-color: #95ba5e;\r\n}\r\n\r\n.add-car:hover {\r\n    background-color: #7ca145;\r\n}\r\n\r\n.car-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.car-info {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.length {\r\n    text-align: center;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 25px;\r\n    color: #edf1ff;\r\n    margin: 0;\r\n}\r\n\r\n.car-name {\r\n    color: #a0daa9;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 22px;\r\n    margin: 0;\r\n    text-shadow: 0 0 5px black;\r\n}\r\n\r\n.car-icon {\r\n    position: relative;\r\n    animation-timing-function: linear;\r\n    width: 120px;\r\n    height: 50px;\r\n    stroke: black;\r\n}\r\n\r\n.car-model {\r\n    width: 120px;\r\n    height: 50px;\r\n    position: relative;\r\n    stroke: black;\r\n}\r\n\r\n.car-smoke {\r\n    display: block;\r\n    position: relative;\r\n    background: url('../assets/smoke.png');\r\n    width: 30px;\r\n    height: 20px;\r\n    background-size: 30px 20px;\r\n    left: 85px;\r\n    bottom: 50px;\r\n    display: none;\r\n}\r\n\r\n.l-wheel,\r\n.r-wheel {\r\n    position: relative;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: url('../assets/wheel.png');\r\n    background-size: 20px 20px;\r\n    display: block;\r\n}\r\n\r\n.car-icon svg g {\r\n    display: none;\r\n}\r\n\r\n.l-wheel {\r\n    bottom: 30px;\r\n    left: 12.5px;\r\n}\r\n\r\n.r-wheel {\r\n    bottom: 49px;\r\n    left: 89px;\r\n}\r\n\r\n.remove-car {\r\n    margin: 0 15px;\r\n    background: #e3654f;\r\n}\r\n.remove-car:hover {\r\n    background: #dd4124;\r\n}\r\n\r\n.car-start {\r\n    width: 100px;\r\n}\r\n\r\n.gen-cars {\r\n    margin-top: 10px;\r\n}\r\n\r\n.road {\r\n    position: relative;\r\n    bottom: 15px;\r\n    width: 100%;\r\n    height: 5px;\r\n    background: white;\r\n}\r\n\r\n.car-road {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.start-stop {\r\n    display: flex;\r\n}\r\n\r\n.start-stop button {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin: 0 10px 0 0;\r\n}\r\n\r\n.update-btn,\r\n.update-car {\r\n    background: #4572ba;\r\n}\r\n\r\n.update-btn:hover,\r\n.update-car:hover {\r\n    background: #34568b;\r\n}\r\n\r\n.start-race,\r\n.reset-race {\r\n    background: #f5df4d;\r\n}\r\n\r\n.start-race:hover,\r\n.reset-race:hover {\r\n    background: #f1d30e;\r\n}\r\n\r\n.race-road {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\n.finish-icon {\r\n    display: block;\r\n    background-image: url('../assets/finish.png');\r\n    background-size: 150px 10px;\r\n    width: 150px;\r\n    height: 10px;\r\n    position: relative;\r\n    top: 42px;\r\n    z-index: 1;\r\n    right: 30px;\r\n}\r\n\r\n.pagination {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 20px;\r\n    line-height: 23px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.pag-num {\r\n    color: #edf1ff;\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin: 0 50px;\r\n}\r\n\r\n.pag-prev-btn,\r\n.pag-next-btn {\r\n    width: 52px;\r\n    height: 52px;\r\n    border-radius: 50%;\r\n    font-size: 25px;\r\n    background-color: #a0daa9;\r\n    text-align: center;\r\n}\r\n\r\n.pag-prev-btn:hover,\r\n.pag-next-btn:hover {\r\n    background-color: #6cc67a;\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".winners,\r\n.winners-content {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.winners-content {\r\n    flex-direction: column;\r\n}\r\n\r\n.winners {\r\n    flex-direction: column-reverse;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    margin: 25px 0;\r\n    font-size: 0.9em;\r\n    font-family: 'Roboto Slab', serif;\r\n    max-width: 480px;\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\ntable thead tr {\r\n    background-color: #009879;\r\n    color: #ffffff;\r\n    text-align: left;\r\n}\r\n\r\ntable th,\r\ntable td {\r\n    padding: 12px 15px;\r\n}\r\n\r\ntable tbody tr {\r\n    border-bottom: 1px solid #dddddd;\r\n}\r\n\r\ntable tbody tr:nth-of-type(even) {\r\n    background-color: #f3f3f3;\r\n}\r\n\r\ntable tbody tr:last-of-type {\r\n    border-bottom: 2px solid #009879;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/winners.css"],"names":[],"mappings":"AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,gBAAgB;IAChB,iCAAiC;IACjC,gBAAgB;IAChB,wCAAwC;AAC5C;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,gBAAgB;AACpB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gCAAgC;AACpC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');\r\n\r\n.winners,\r\n.winners-content {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.winners-content {\r\n    flex-direction: column;\r\n}\r\n\r\n.winners {\r\n    flex-direction: column-reverse;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    margin: 25px 0;\r\n    font-size: 0.9em;\r\n    font-family: 'Roboto Slab', serif;\r\n    max-width: 480px;\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\ntable thead tr {\r\n    background-color: #009879;\r\n    color: #ffffff;\r\n    text-align: left;\r\n}\r\n\r\ntable th,\r\ntable td {\r\n    padding: 12px 15px;\r\n}\r\n\r\ntable tbody tr {\r\n    border-bottom: 1px solid #dddddd;\r\n}\r\n\r\ntable tbody tr:nth-of-type(even) {\r\n    background-color: #f3f3f3;\r\n}\r\n\r\ntable tbody tr:last-of-type {\r\n    border-bottom: 2px solid #009879;\r\n}\r\n"],"sourceRoot":""}]);
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
    if ((Number(renderHtml_1.pageNumber.innerHTML) - 1) * 4 === allCarsLength) {
        renderHtml_1.pageNumber.innerHTML = String(Number(renderHtml_1.pageNumber.innerHTML) - 1);
    }
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
exports.showWinners = void 0;
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
__webpack_require__(/*! ../css/winners.css */ "./src/css/winners.css");
const renderHtml_1 = __webpack_require__(/*! ../others/renderHtml */ "./src/others/renderHtml.ts");
const svgIcons_1 = __webpack_require__(/*! ../others/svgIcons */ "./src/others/svgIcons.ts");
const winnersPagination_1 = __webpack_require__(/*! ./winnersPagination */ "./src/getCars&Winners/winnersPagination.ts");
const winnersContent = document.createElement('div');
const table = document.createElement('table');
const tBody = document.createElement('tbody');
const tHeader = document.createElement('thead');
function showWinners() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield types_1.winners.getLimitedWinners(Number(winnersPagination_1.winnersPageNumber.innerHTML));
        const pagedWinners = (yield res.json());
        const res2 = yield types_1.winners.getAllWiners();
        const allWinners = (yield res2.json());
        checkPagination(allWinners.length);
        tHeader.innerHTML = '';
        tBody.innerHTML = '';
        winnersContent.innerHTML = '';
        winnersContent.className = 'winners-content';
        const winnersLength = document.createElement('p');
        winnersLength.className = 'length';
        winnersLength.innerHTML = `Winners: ${allWinners.length}`;
        winnersContent.append(winnersLength);
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
        const resetClicked = false;
        resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', () => {
            resetOrStop(lW, rW, animation, elPosition, smoke, resetClicked, stopBtn);
        });
        stopBtn.addEventListener('click', () => {
            resetOrStop(lW, rW, animation, elPosition, smoke, resetClicked, stopBtn);
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
function resetOrStop(lW, rW, animation, elPosition, smoke, resetClicked, stopBtn) {
    animation.cancel();
    clearTimeout(elPosition);
    lW.cancel();
    rW.cancel();
    smoke.style.display = 'none';
    stopBtn.disabled = true;
    resetClicked = true;
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
    getLimitedWinners(pageN) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield fetch(urls.winners + `?_page=${pageN}&_limit=10`);
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
function showHide() {
    const garageBtn = document.querySelector('.garage-view');
    const winnersBtn = document.querySelector('.winners-view');
    const garageBlock = document.querySelector('.garage');
    const winnersBlock = document.querySelector('.winners');
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7QUNBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBTyxDQUFDLHVEQUFxQjtBQUM3QixtQkFBTyxDQUFDLHlDQUFjO0FBQ3RCLG1CQUFPLENBQUMsb0NBQWE7QUFDckIsbUJBQU8sQ0FBQyxpRUFBMEI7QUFDbEMsbUJBQU8sQ0FBQyxtRUFBMkI7QUFDbkMsbUJBQU8sQ0FBQyx1RUFBNkI7QUFDckMsbUJBQU8sQ0FBQyx1RUFBNkI7QUFDckMsbUJBQU8sQ0FBQyw2REFBd0I7QUFDaEMsbUJBQU8sQ0FBQywyRUFBK0I7QUFDdkMsbUJBQU8sQ0FBQywyRUFBK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2Nzcy9nYXJhZ2UuY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY3NzL3dpbm5lcnMuY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2Nzcy9nYXJhZ2UuY3NzP2VmNmIiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jc3Mvd2lubmVycy5jc3M/MWNkZiIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvYWRkQ2FyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvZ2V0Q2FycyZXaW5uZXJzL2RlbGV0ZUNhci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9nZW5lcmF0ZTEwMENhcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvbW9kYWxXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvcGFnaW5hdGlvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9yYWNlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvZ2V0Q2FycyZXaW5uZXJzL3Nob3dDYXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvc2hvd1dpbm5lcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvc3RhcnRTdG9wLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvZ2V0Q2FycyZXaW5uZXJzL3VwZGF0ZUNhci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy93aW5uZXJzUGFnaW5hdGlvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL290aGVycy9yZW5kZXJIdG1sLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvb3RoZXJzL3N2Z0ljb25zLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdHlwZXMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy92aWV3cy92aWV3LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3Ntb2tlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy93aGVlbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZmluaXNoLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZmYW1pbHk9VWJ1bnR1OndnaHRANTAwJmZhbWlseT1PcGVuK1NhbnM6d2dodEA1MDAmZmFtaWx5PVBUK1NhbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcnMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYm9keSxcXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYm9keSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6ICMyODJkM2M7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGYxZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4udmlldy1idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udmlldy1idG5zIGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1NmM2YTk7XFxyXFxufVxcclxcblxcclxcbi52aWV3LWJ0bnMgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzM5YWM4ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmFjZS1idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J2NvbG9yJ106ZGlzYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIG9wYWNpdHk6IDAuMztcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nY29sb3InXSB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMCA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J2NvbG9yJ106Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LFxcclxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmRpc2FibGVkLFxcclxcbmJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcXHJcXG4gICAgb3BhY2l0eTogMC4zO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NWJhNWU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY2FyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjYTE0NTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jYXItaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZW5ndGgge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBjb2xvcjogI2VkZjFmZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLW5hbWUge1xcclxcbiAgICBjb2xvcjogI2EwZGFhOTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWljb24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHN0cm9rZTogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jYXItbW9kZWwge1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBzdHJva2U6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXNtb2tlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IDIwcHg7XFxyXFxuICAgIGxlZnQ6IDg1cHg7XFxyXFxuICAgIGJvdHRvbTogNTBweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmwtd2hlZWwsXFxyXFxuLnItd2hlZWwge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1pY29uIHN2ZyBnIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmwtd2hlZWwge1xcclxcbiAgICBib3R0b206IDMwcHg7XFxyXFxuICAgIGxlZnQ6IDEyLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnItd2hlZWwge1xcclxcbiAgICBib3R0b206IDQ5cHg7XFxyXFxuICAgIGxlZnQ6IDg5cHg7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmUtY2FyIHtcXHJcXG4gICAgbWFyZ2luOiAwIDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlMzY1NGY7XFxyXFxufVxcclxcbi5yZW1vdmUtY2FyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2RkNDEyNDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1zdGFydCB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbi1jYXJzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvYWQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvdHRvbTogMTVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1yb2FkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXN0b3Age1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtc3RvcCBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBtYXJnaW46IDAgMTBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi51cGRhdGUtYnRuLFxcclxcbi51cGRhdGUtY2FyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzQ1NzJiYTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZGF0ZS1idG46aG92ZXIsXFxyXFxuLnVwZGF0ZS1jYXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzQ1NjhiO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtcmFjZSxcXHJcXG4ucmVzZXQtcmFjZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmNWRmNGQ7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1yYWNlOmhvdmVyLFxcclxcbi5yZXNldC1yYWNlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2YxZDMwZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhY2Utcm9hZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5maW5pc2gtaWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogNDJweDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcmlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdpbmF0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZy1udW0ge1xcclxcbiAgICBjb2xvcjogI2VkZjFmZjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDAgNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZy1wcmV2LWJ0bixcXHJcXG4ucGFnLW5leHQtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDUycHg7XFxyXFxuICAgIGhlaWdodDogNTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGRhYTk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZy1wcmV2LWJ0bjpob3ZlcixcXHJcXG4ucGFnLW5leHQtYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZjYzY3YTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9nYXJhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztB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QixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZmYW1pbHk9VWJ1bnR1OndnaHRANTAwJmZhbWlseT1PcGVuK1NhbnM6d2dodEA1MDAmZmFtaWx5PVBUK1NhbnMmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLmNhcnMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYm9keSxcXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYm9keSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6ICMyODJkM2M7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGYxZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4udmlldy1idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udmlldy1idG5zIGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1NmM2YTk7XFxyXFxufVxcclxcblxcclxcbi52aWV3LWJ0bnMgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzM5YWM4ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmFjZS1idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J2NvbG9yJ106ZGlzYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIG9wYWNpdHk6IDAuMztcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nY29sb3InXSB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMCA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J2NvbG9yJ106Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LFxcclxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmRpc2FibGVkLFxcclxcbmJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcXHJcXG4gICAgb3BhY2l0eTogMC4zO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NWJhNWU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY2FyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjYTE0NTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jYXItaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZW5ndGgge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBjb2xvcjogI2VkZjFmZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLW5hbWUge1xcclxcbiAgICBjb2xvcjogI2EwZGFhOTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWljb24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHN0cm9rZTogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jYXItbW9kZWwge1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBzdHJva2U6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXNtb2tlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvc21va2UucG5nJyk7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweCAyMHB4O1xcclxcbiAgICBsZWZ0OiA4NXB4O1xcclxcbiAgICBib3R0b206IDUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sLXdoZWVsLFxcclxcbi5yLXdoZWVsIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy93aGVlbC5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWljb24gc3ZnIGcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubC13aGVlbCB7XFxyXFxuICAgIGJvdHRvbTogMzBweDtcXHJcXG4gICAgbGVmdDogMTIuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uci13aGVlbCB7XFxyXFxuICAgIGJvdHRvbTogNDlweDtcXHJcXG4gICAgbGVmdDogODlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1jYXIge1xcclxcbiAgICBtYXJnaW46IDAgMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2UzNjU0ZjtcXHJcXG59XFxyXFxuLnJlbW92ZS1jYXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0MTI0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXN0YXJ0IHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VuLWNhcnMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucm9hZCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm90dG9tOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXJvYWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtc3RvcCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1zdG9wIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZGF0ZS1idG4sXFxyXFxuLnVwZGF0ZS1jYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNDU3MmJhO1xcclxcbn1cXHJcXG5cXHJcXG4udXBkYXRlLWJ0bjpob3ZlcixcXHJcXG4udXBkYXRlLWNhcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzNDU2OGI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1yYWNlLFxcclxcbi5yZXNldC1yYWNlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2Y1ZGY0ZDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXJhY2U6aG92ZXIsXFxyXFxuLnJlc2V0LXJhY2U6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjFkMzBlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFjZS1yb2FkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmlzaC1pY29uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ZpbmlzaC5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTBweCAxMHB4O1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDQycHg7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHJpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnaW5hdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wYWctbnVtIHtcXHJcXG4gICAgY29sb3I6ICNlZGYxZmY7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwIDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWctcHJldi1idG4sXFxyXFxuLnBhZy1uZXh0LWJ0biB7XFxyXFxuICAgIHdpZHRoOiA1MnB4O1xcclxcbiAgICBoZWlnaHQ6IDUycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBkYWE5O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wYWctcHJldi1idG46aG92ZXIsXFxyXFxuLnBhZy1uZXh0LWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Y2M2N2E7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytTbGFiOndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53aW5uZXJzLFxcclxcbi53aW5uZXJzLWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lcnMtY29udGVudCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi53aW5uZXJzIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIG1hcmdpbjogMjVweCAwO1xcclxcbiAgICBmb250LXNpemU6IDAuOWVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxyXFxuICAgIG1heC13aWR0aDogNDgwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRoZWFkIHRyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTg3OTtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRoLFxcclxcbnRhYmxlIHRkIHtcXHJcXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0Ym9keSB0ciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0Ym9keSB0cjpudGgtb2YtdHlwZShldmVuKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRib2R5IHRyOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA5ODc5O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3dpbm5lcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK1NsYWI6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLndpbm5lcnMsXFxyXFxuLndpbm5lcnMtY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVycy1jb250ZW50IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lcnMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXHJcXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGhlYWQgdHIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ODc5O1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGgsXFxyXFxudGFibGUgdGQge1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRib2R5IHRyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRib2R5IHRyOm50aC1vZi10eXBlKGV2ZW4pIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGJvZHkgdHI6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDk4Nzk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzOTQ1O1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM5NDU7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYXJhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYXJhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbm5lcnMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93aW5uZXJzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmFkZE5ld0NhciA9IHZvaWQgMDtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy90eXBlc1wiKTtcclxuY29uc3Qgc2hvd0Nhcl8xID0gcmVxdWlyZShcIi4vc2hvd0NhclwiKTtcclxuZnVuY3Rpb24gYWRkTmV3Q2FyKCkge1xyXG4gICAgY29uc3QgYWRkQ2FyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1jYXInKTtcclxuICAgIGNvbnN0IGNhck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xyXG4gICAgY29uc3QgY2FyQ29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3InKTtcclxuICAgIGFkZENhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhck5hbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgdHlwZXNfMS5nYXJhZ2UuYWRkQ2FyKGNhck5hbWUudmFsdWUsIGNhckNvbG9yLnZhbHVlKTtcclxuICAgICAgICAgICAgKDAsIHNob3dDYXJfMS5zaG93Q2FyKSgpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNhck5hbWUudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgY2FyQ29sb3IudmFsdWUgPSAnI2ZmZmZmZic7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5hZGROZXdDYXIgPSBhZGROZXdDYXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kZWxldGVDYXIgPSB2b2lkIDA7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXMvdHlwZXNcIik7XHJcbmNvbnN0IHNob3dDYXJfMSA9IHJlcXVpcmUoXCIuL3Nob3dDYXJcIik7XHJcbmZ1bmN0aW9uIGRlbGV0ZUNhcigpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUtY2FyJyk7XHJcbiAgICAgICAgZGVsZXRlQnRucy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHR5cGVzXzEuZ2FyYWdlLnJlbW92ZUNhcihOdW1iZXIoZWwubmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgdHlwZXNfMS53aW5uZXJzLnJlbW92ZVdpbm5lcihOdW1iZXIoZWwubmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgKDAsIHNob3dDYXJfMS5zaG93Q2FyKSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZGVsZXRlQ2FyID0gZGVsZXRlQ2FyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2VuZXJhdGUxMDBDYXJzID0gdm9pZCAwO1xyXG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzL3R5cGVzXCIpO1xyXG5jb25zdCBzaG93Q2FyXzEgPSByZXF1aXJlKFwiLi9zaG93Q2FyXCIpO1xyXG5mdW5jdGlvbiBnZW5lcmF0ZTEwMENhcnMoKSB7XHJcbiAgICBjb25zdCBnZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VuLWNhcnMnKTtcclxuICAgIGdlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBnZW5lcmF0ZUNhcigpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5nZW5lcmF0ZTEwMENhcnMgPSBnZW5lcmF0ZTEwMENhcnM7XHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ2FyKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaCgnaHR0cHM6Ly9wcml2YXRlLTE2MWRmLWNhcnNhcGkxLmFwaWFyeS1tb2NrLmNvbS9jYXJzJyk7XHJcbiAgICAgICAgY29uc3QgY2FycyA9ICh5aWVsZCByZXMuanNvbigpKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNvbG9yID0gYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YDtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2Fycy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gYCR7Y2FwRmlyc3RMZXR0ZXIoY2Fyc1tyYW5kb21OdW1iZXJdLm1ha2UpfSAke2NhcEZpcnN0TGV0dGVyKGNhcnNbcmFuZG9tTnVtYmVyXS5tb2RlbCl9YDtcclxuICAgICAgICAgICAgdHlwZXNfMS5nYXJhZ2UuYWRkQ2FyKG5hbWUsIHJhbmRvbUNvbG9yKTtcclxuICAgICAgICAgICAgKDAsIHNob3dDYXJfMS5zaG93Q2FyKSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNhcEZpcnN0TGV0dGVyKHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc2hvd01vZGFsID0gdm9pZCAwO1xyXG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzL3R5cGVzXCIpO1xyXG5mdW5jdGlvbiBzaG93TW9kYWwoaWQsIHRpbWUpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJvZHknKTtcclxuICAgICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBtb2RhbEJvZHkucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKTtcclxuICAgICAgICBjb25zdCByZXNXaW5uZXJOYW1lID0geWllbGQgdHlwZXNfMS5nYXJhZ2UuZ2V0Q2FyKGlkKTtcclxuICAgICAgICBjb25zdCB3aW5uZXJOYW1lID0gKHlpZWxkIHJlc1dpbm5lck5hbWUuanNvbigpKS5uYW1lO1xyXG4gICAgICAgIG1vZGFsQm9keS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gYFdpbm5lcjogJHt3aW5uZXJOYW1lfTxicj5UaW1lOiAke3RpbWV9c2A7XHJcbiAgICAgICAgbW9kYWxCb2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnbW9kYWwtYm9keScpIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsQm9keS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zaG93TW9kYWwgPSBzaG93TW9kYWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucGFnaW5hdGlvbiA9IHZvaWQgMDtcclxuY29uc3QgcmVuZGVySHRtbF8xID0gcmVxdWlyZShcIi4uL290aGVycy9yZW5kZXJIdG1sXCIpO1xyXG5jb25zdCBzaG93Q2FyXzEgPSByZXF1aXJlKFwiLi9zaG93Q2FyXCIpO1xyXG5mdW5jdGlvbiBwYWdpbmF0aW9uKCkge1xyXG4gICAgcmVuZGVySHRtbF8xLm5leHRQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCA9IGAke051bWJlcihyZW5kZXJIdG1sXzEucGFnZU51bWJlci5pbm5lckhUTUwpICsgMX1gO1xyXG4gICAgICAgICgwLCBzaG93Q2FyXzEuc2hvd0NhcikoKTtcclxuICAgIH0pO1xyXG4gICAgcmVuZGVySHRtbF8xLnByZXZQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCA9IGAke051bWJlcihyZW5kZXJIdG1sXzEucGFnZU51bWJlci5pbm5lckhUTUwpIC0gMX1gO1xyXG4gICAgICAgICgwLCBzaG93Q2FyXzEuc2hvd0NhcikoKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucGFnaW5hdGlvbiA9IHBhZ2luYXRpb247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVuZGVySHRtbF8xID0gcmVxdWlyZShcIi4uL290aGVycy9yZW5kZXJIdG1sXCIpO1xyXG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzL3R5cGVzXCIpO1xyXG5jb25zdCBzdGFydFN0b3BfMSA9IHJlcXVpcmUoXCIuL3N0YXJ0U3RvcFwiKTtcclxucmVuZGVySHRtbF8xLnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICByZW5kZXJIdG1sXzEuc3RhcnRCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgcmVuZGVySHRtbF8xLnJlc2V0QnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBjb25zdCByZXMgPSB5aWVsZCB0eXBlc18xLmdhcmFnZS5nZXRMaW1pdGVkQ2FycyhOdW1iZXIocmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MKSk7XHJcbiAgICBjb25zdCBjYXJzID0gKHlpZWxkIHJlcy5qc29uKCkpO1xyXG4gICAgY2Fycy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IEFCdG4gPSAoMCwgc3RhcnRTdG9wXzEuZ2V0QnV0dG9uKShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLXN0YXJ0JyksIFN0cmluZyhlbC5pZCkpO1xyXG4gICAgICAgIGNvbnN0IHN0b3BCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhci1zdG9wJyk7XHJcbiAgICAgICAgKDAsIHN0YXJ0U3RvcF8xLnN0YXJ0KShBQnRuLCBTdHJpbmcoZWwuaWQpLCBzdG9wQnRucywgcmVuZGVySHRtbF8xLnN0YXJ0QnRuLCByZW5kZXJIdG1sXzEucmVzZXRCdG4pO1xyXG4gICAgfSk7XHJcbn0pKTtcclxucmVuZGVySHRtbF8xLnJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICByZW5kZXJIdG1sXzEucmVzZXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgcmVuZGVySHRtbF8xLnN0YXJ0QnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBjb25zdCByZXMgPSB5aWVsZCB0eXBlc18xLmdhcmFnZS5nZXRMaW1pdGVkQ2FycyhOdW1iZXIocmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MKSk7XHJcbiAgICBjb25zdCBjYXJzID0gKHlpZWxkIHJlcy5qc29uKCkpO1xyXG4gICAgY2Fycy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXItc3RhcnQnKTtcclxuICAgICAgICBjb25zdCBzdG9wQnRuID0gKDAsIHN0YXJ0U3RvcF8xLmdldEJ1dHRvbikoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhci1zdG9wJyksIFN0cmluZyhlbC5pZCkpO1xyXG4gICAgICAgICgwLCBzdGFydFN0b3BfMS5zdG9wUmFjZSkoc3RvcEJ0biwgU3RyaW5nKGVsLmlkKSwgc3RhcnRCdG5zKTtcclxuICAgIH0pO1xyXG59KSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zaG93Q2FyID0gdm9pZCAwO1xyXG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzL3R5cGVzXCIpO1xyXG5jb25zdCBkZWxldGVDYXJfMSA9IHJlcXVpcmUoXCIuL2RlbGV0ZUNhclwiKTtcclxuY29uc3Qgc3ZnSWNvbnNfMSA9IHJlcXVpcmUoXCIuLi9vdGhlcnMvc3ZnSWNvbnNcIik7XHJcbmNvbnN0IHN0YXJ0U3RvcF8xID0gcmVxdWlyZShcIi4vc3RhcnRTdG9wXCIpO1xyXG5jb25zdCByZW5kZXJIdG1sXzEgPSByZXF1aXJlKFwiLi4vb3RoZXJzL3JlbmRlckh0bWxcIik7XHJcbmNvbnN0IHVwZGF0ZUNhcl8xID0gcmVxdWlyZShcIi4vdXBkYXRlQ2FyXCIpO1xyXG5yZXF1aXJlKFwiLi4vY3NzL2dhcmFnZS5jc3NcIik7XHJcbmZ1bmN0aW9uIHNob3dDYXIoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHJlc0FsbENhcnMgPSB5aWVsZCB0eXBlc18xLmdhcmFnZS5nZXRBbGxDYXJzKCk7XHJcbiAgICAgICAgY29uc3QgYWxsQ2FycyA9ICh5aWVsZCByZXNBbGxDYXJzLmpzb24oKSk7XHJcbiAgICAgICAgY2hlY2tQYWdCdG5zKGFsbENhcnMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCByZXNQYWdlZENhcnMgPSB5aWVsZCB0eXBlc18xLmdhcmFnZS5nZXRMaW1pdGVkQ2FycyhOdW1iZXIocmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9ICh5aWVsZCByZXNQYWdlZENhcnMuanNvbigpKTtcclxuICAgICAgICByZW5kZXJIdG1sXzEuY2Fycy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICByZW5kZXJIdG1sXzEuZ2FyYWdlTGVuZ3RoLmlubmVySFRNTCA9IGBHYXJhZ2U6ICR7U3RyaW5nKGFsbENhcnMubGVuZ3RoKX1gO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzaG93Q2FySW5IdG1sKGRhdGFbaV0ubmFtZSwgZGF0YVtpXS5jb2xvciwgZGF0YVtpXS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICgwLCBzdGFydFN0b3BfMS5zdGFydENhcikoKTtcclxuICAgICAgICAoMCwgc3RhcnRTdG9wXzEuc3RvcENhcikoKTtcclxuICAgICAgICAoMCwgdXBkYXRlQ2FyXzEudXBkYXRlQ2FyKSgpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zaG93Q2FyID0gc2hvd0NhcjtcclxuZnVuY3Rpb24gc2hvd0NhckluSHRtbChtb2RlbCwgY29sb3IsIGlkKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IFtjYXJCbG9jaywgY2FySW5mbywgc3RhcnRTdG9wLCByYWNlUm9hZCwgY2FyUm9hZCwgY2FyXSA9IGNyZWF0ZURpdnMoaWQpO1xyXG4gICAgICAgIGNvbnN0IFtkZWxldGVCdG4sIHN0YXJ0Q2FyLCBzdG9wQ2FyLCB1cGRhdGVCdG5dID0gY3JlYXRlQnV0dG9ucyhpZCk7XHJcbiAgICAgICAgY29uc3QgW2Nhck5hbWUsIGNhckltZywgcm9hZCwgZmluaXNoRmxhZywgY2FyU21va2VdID0gY3JlYXRlT3RoZXJFbGVtcyhtb2RlbCwgY29sb3IsIGlkKTtcclxuICAgICAgICBjYXJCbG9jay5hcHBlbmQoY2FySW5mbyk7XHJcbiAgICAgICAgY2FyQmxvY2suYXBwZW5kKGNhclJvYWQpO1xyXG4gICAgICAgIGNhckJsb2NrLmFwcGVuZChyb2FkKTtcclxuICAgICAgICBjYXJJbmZvLmFwcGVuZCh1cGRhdGVCdG4pO1xyXG4gICAgICAgIGNhckluZm8uYXBwZW5kKGRlbGV0ZUJ0bik7XHJcbiAgICAgICAgY2FySW5mby5hcHBlbmQoY2FyTmFtZSk7XHJcbiAgICAgICAgY2FyUm9hZC5hcHBlbmQoc3RhcnRTdG9wKTtcclxuICAgICAgICBjYXJSb2FkLmFwcGVuZChyYWNlUm9hZCk7XHJcbiAgICAgICAgc3RhcnRTdG9wLmFwcGVuZChzdGFydENhcik7XHJcbiAgICAgICAgc3RhcnRTdG9wLmFwcGVuZChzdG9wQ2FyKTtcclxuICAgICAgICByYWNlUm9hZC5hcHBlbmQoY2FyKTtcclxuICAgICAgICByYWNlUm9hZC5hcHBlbmQoZmluaXNoRmxhZyk7XHJcbiAgICAgICAgY2FyLmFwcGVuZChjYXJJbWcpO1xyXG4gICAgICAgIGNhckltZy5hcHBlbmQoY2FyU21va2UpO1xyXG4gICAgICAgIHJlbmRlckh0bWxfMS5jYXJzLmFwcGVuZChjYXJCbG9jayk7XHJcbiAgICAgICAgKDAsIGRlbGV0ZUNhcl8xLmRlbGV0ZUNhcikoKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoZWNrUGFnQnRucyhhbGxDYXJzTGVuZ3RoKSB7XHJcbiAgICBpZiAoKE51bWJlcihyZW5kZXJIdG1sXzEucGFnZU51bWJlci5pbm5lckhUTUwpIC0gMSkgKiA0ID09PSBhbGxDYXJzTGVuZ3RoKSB7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MID0gU3RyaW5nKE51bWJlcihyZW5kZXJIdG1sXzEucGFnZU51bWJlci5pbm5lckhUTUwpIC0gMSk7XHJcbiAgICB9XHJcbiAgICBpZiAoTnVtYmVyKHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCkgKiA0ID49IGFsbENhcnNMZW5ndGgpIHtcclxuICAgICAgICByZW5kZXJIdG1sXzEubmV4dFBhZ2UuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLm5leHRQYWdlLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoTnVtYmVyKHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCkgPT09IDEpIHtcclxuICAgICAgICByZW5kZXJIdG1sXzEucHJldlBhZ2UuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLnByZXZQYWdlLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRGl2cyhpZCkge1xyXG4gICAgY29uc3QgY2FyQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNhckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHN0YXJ0U3RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcmFjZVJvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNhclJvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyQmxvY2suY2xhc3NOYW1lID0gJ2Nhci1ibG9jayc7XHJcbiAgICBjYXJJbmZvLmNsYXNzTmFtZSA9ICdjYXItaW5mbyc7XHJcbiAgICBjYXJSb2FkLmNsYXNzTmFtZSA9ICdjYXItcm9hZCc7XHJcbiAgICBzdGFydFN0b3AuY2xhc3NOYW1lID0gJ3N0YXJ0LXN0b3AnO1xyXG4gICAgcmFjZVJvYWQuY2xhc3NOYW1lID0gJ3JhY2Utcm9hZCc7XHJcbiAgICBjYXIuY2xhc3NOYW1lID0gJ2Nhci1tb2RlbCc7XHJcbiAgICBjYXIuaWQgPSBTdHJpbmcoaWQpO1xyXG4gICAgcmV0dXJuIFtjYXJCbG9jaywgY2FySW5mbywgc3RhcnRTdG9wLCByYWNlUm9hZCwgY2FyUm9hZCwgY2FyXTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25zKGlkKSB7XHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IHN0YXJ0Q2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBzdG9wQ2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCB1cGRhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN0YXJ0Q2FyLmNsYXNzTmFtZSA9ICdjYXItc3RhcnQnO1xyXG4gICAgc3RvcENhci5jbGFzc05hbWUgPSAnY2FyLXN0b3AnO1xyXG4gICAgdXBkYXRlQnRuLmNsYXNzTmFtZSA9ICd1cGRhdGUtYnRuJztcclxuICAgIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAncmVtb3ZlLWNhcic7XHJcbiAgICBzdG9wQ2FyLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnUmVtb3ZlIENhcic7XHJcbiAgICB1cGRhdGVCdG4ubmFtZSA9IFN0cmluZyhpZCk7XHJcbiAgICBzdGFydENhci5pbm5lckhUTUwgPSAnQSc7XHJcbiAgICBzdG9wQ2FyLmlubmVySFRNTCA9ICdCJztcclxuICAgIHVwZGF0ZUJ0bi5pbm5lckhUTUwgPSAnVXBkYXRlIENhcic7XHJcbiAgICBkZWxldGVCdG4ubmFtZSA9IFN0cmluZyhpZCk7XHJcbiAgICBzdGFydENhci5uYW1lID0gU3RyaW5nKGlkKTtcclxuICAgIHN0b3BDYXIubmFtZSA9IFN0cmluZyhpZCk7XHJcbiAgICByZXR1cm4gW2RlbGV0ZUJ0biwgc3RhcnRDYXIsIHN0b3BDYXIsIHVwZGF0ZUJ0bl07XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlT3RoZXJFbGVtcyhtb2RlbCwgY29sb3IsIGlkKSB7XHJcbiAgICBjb25zdCBjYXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgY2FySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3Qgcm9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgICBjb25zdCBmaW5pc2hGbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgY2FyU21va2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjYXJOYW1lLmNsYXNzTmFtZSA9ICdjYXItbmFtZSc7XHJcbiAgICBjYXJJbWcuY2xhc3NOYW1lID0gYGNhci1pY29uICR7bW9kZWx9YDtcclxuICAgIHJvYWQuY2xhc3NOYW1lID0gJ3JvYWQnO1xyXG4gICAgZmluaXNoRmxhZy5jbGFzc05hbWUgPSAnZmluaXNoLWljb24nO1xyXG4gICAgY2FyU21va2UuY2xhc3NOYW1lID0gJ2Nhci1zbW9rZSc7XHJcbiAgICBjYXJOYW1lLmlubmVySFRNTCA9IG1vZGVsO1xyXG4gICAgY2FySW1nLmlubmVySFRNTCA9ICgwLCBzdmdJY29uc18xLnN2ZykoY29sb3IpO1xyXG4gICAgY2FySW1nLmlkID0gYGNhci0ke1N0cmluZyhpZCl9YDtcclxuICAgIGNhck5hbWUuaWQgPSBgbmFtZS0ke1N0cmluZyhpZCl9YDtcclxuICAgIHJldHVybiBbY2FyTmFtZSwgY2FySW1nLCByb2FkLCBmaW5pc2hGbGFnLCBjYXJTbW9rZV07XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNob3dXaW5uZXJzID0gdm9pZCAwO1xyXG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzL3R5cGVzXCIpO1xyXG5yZXF1aXJlKFwiLi4vY3NzL3dpbm5lcnMuY3NzXCIpO1xyXG5jb25zdCByZW5kZXJIdG1sXzEgPSByZXF1aXJlKFwiLi4vb3RoZXJzL3JlbmRlckh0bWxcIik7XHJcbmNvbnN0IHN2Z0ljb25zXzEgPSByZXF1aXJlKFwiLi4vb3RoZXJzL3N2Z0ljb25zXCIpO1xyXG5jb25zdCB3aW5uZXJzUGFnaW5hdGlvbl8xID0gcmVxdWlyZShcIi4vd2lubmVyc1BhZ2luYXRpb25cIik7XHJcbmNvbnN0IHdpbm5lcnNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuY29uc3QgdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xyXG5jb25zdCB0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcclxuZnVuY3Rpb24gc2hvd1dpbm5lcnMoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIHR5cGVzXzEud2lubmVycy5nZXRMaW1pdGVkV2lubmVycyhOdW1iZXIod2lubmVyc1BhZ2luYXRpb25fMS53aW5uZXJzUGFnZU51bWJlci5pbm5lckhUTUwpKTtcclxuICAgICAgICBjb25zdCBwYWdlZFdpbm5lcnMgPSAoeWllbGQgcmVzLmpzb24oKSk7XHJcbiAgICAgICAgY29uc3QgcmVzMiA9IHlpZWxkIHR5cGVzXzEud2lubmVycy5nZXRBbGxXaW5lcnMoKTtcclxuICAgICAgICBjb25zdCBhbGxXaW5uZXJzID0gKHlpZWxkIHJlczIuanNvbigpKTtcclxuICAgICAgICBjaGVja1BhZ2luYXRpb24oYWxsV2lubmVycy5sZW5ndGgpO1xyXG4gICAgICAgIHRIZWFkZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdEJvZHkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgd2lubmVyc0NvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgd2lubmVyc0NvbnRlbnQuY2xhc3NOYW1lID0gJ3dpbm5lcnMtY29udGVudCc7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyc0xlbmd0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB3aW5uZXJzTGVuZ3RoLmNsYXNzTmFtZSA9ICdsZW5ndGgnO1xyXG4gICAgICAgIHdpbm5lcnNMZW5ndGguaW5uZXJIVE1MID0gYFdpbm5lcnM6ICR7YWxsV2lubmVycy5sZW5ndGh9YDtcclxuICAgICAgICB3aW5uZXJzQ29udGVudC5hcHBlbmQod2lubmVyc0xlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAwKVxyXG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXIuaW5uZXJIVE1MID0gJ+KElic7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAxKVxyXG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXIuaW5uZXJIVE1MID0gJ0ltYWdlJztcclxuICAgICAgICAgICAgaWYgKGkgPT09IDIpXHJcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlci5pbm5lckhUTUwgPSAnTmFtZSc7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAzKVxyXG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXIuaW5uZXJIVE1MID0gJ1dpbnMnO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gNClcclxuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyLmlubmVySFRNTCA9ICdUaW1lJztcclxuICAgICAgICAgICAgdGFibGVIZWFkZXJzLmFwcGVuZCh0YWJsZUhlYWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRIZWFkZXIuYXBwZW5kKHRhYmxlSGVhZGVycyk7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKHRIZWFkZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZWRXaW5uZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHNob3dXaW5uZXJJbkh0bWwoaSArIDEsIHBhZ2VkV2lubmVyc1tpXS5pZCwgcGFnZWRXaW5uZXJzW2ldLndpbnMsIHBhZ2VkV2lubmVyc1tpXS50aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKHRCb2R5KTtcclxuICAgICAgICB3aW5uZXJzQ29udGVudC5hcHBlbmQodGFibGUpO1xyXG4gICAgICAgIHJlbmRlckh0bWxfMS53aW5uZXJzQmxvY2suYXBwZW5kKHdpbm5lcnNDb250ZW50KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2hvd1dpbm5lcnMgPSBzaG93V2lubmVycztcclxuZnVuY3Rpb24gc2hvd1dpbm5lckluSHRtbChwb3NpdGlvbiwgaWQsIHdpbnMsIHRpbWUpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzQ2FyTmFtZSA9IHlpZWxkIHR5cGVzXzEuZ2FyYWdlLmdldENhcihpZCk7XHJcbiAgICAgICAgY29uc3QgY2FyID0gKHlpZWxkIHJlc0Nhck5hbWUuanNvbigpKTtcclxuICAgICAgICBjb25zdCBjYXJOYW1lID0gY2FyLm5hbWU7XHJcbiAgICAgICAgY29uc3QgY2FyQ29sb3IgPSBjYXIuY29sb3I7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgaWYgKGogPT09IDApXHJcbiAgICAgICAgICAgICAgICByb3dDb250ZW50LmlubmVySFRNTCA9IFN0cmluZyhwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChqID09PSAxKVxyXG4gICAgICAgICAgICAgICAgcm93Q29udGVudC5pbm5lckhUTUwgPSAoMCwgc3ZnSWNvbnNfMS5zdmcpKGNhckNvbG9yKTtcclxuICAgICAgICAgICAgaWYgKGogPT09IDIpXHJcbiAgICAgICAgICAgICAgICByb3dDb250ZW50LmlubmVySFRNTCA9IGNhck5hbWU7XHJcbiAgICAgICAgICAgIGlmIChqID09PSAzKVxyXG4gICAgICAgICAgICAgICAgcm93Q29udGVudC5pbm5lckhUTUwgPSBTdHJpbmcod2lucyk7XHJcbiAgICAgICAgICAgIGlmIChqID09PSA0KVxyXG4gICAgICAgICAgICAgICAgcm93Q29udGVudC5pbm5lckhUTUwgPSBTdHJpbmcodGltZSk7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmQocm93Q29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRCb2R5LmFwcGVuZChyb3cpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tQYWdpbmF0aW9uKGFsbFdpbm5uZXJzTGVuZ3RoKSB7XHJcbiAgICBpZiAoTnVtYmVyKHdpbm5lcnNQYWdpbmF0aW9uXzEud2lubmVyc1BhZ2VOdW1iZXIuaW5uZXJIVE1MKSAqIDEwID49IGFsbFdpbm5uZXJzTGVuZ3RoKSB7XHJcbiAgICAgICAgd2lubmVyc1BhZ2luYXRpb25fMS5uZXh0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHdpbm5lcnNQYWdpbmF0aW9uXzEubmV4dEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKE51bWJlcih3aW5uZXJzUGFnaW5hdGlvbl8xLndpbm5lcnNQYWdlTnVtYmVyLmlubmVySFRNTCkgPT09IDEpIHtcclxuICAgICAgICB3aW5uZXJzUGFnaW5hdGlvbl8xLnByZXZCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgd2lubmVyc1BhZ2luYXRpb25fMS5wcmV2QnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldEJ1dHRvbiA9IGV4cG9ydHMuc3RhcnQgPSBleHBvcnRzLnN0b3BSYWNlID0gZXhwb3J0cy5zdG9wQ2FyID0gZXhwb3J0cy5zdGFydENhciA9IHZvaWQgMDtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy90eXBlc1wiKTtcclxuY29uc3QgbW9kYWxXaW5kb3dfMSA9IHJlcXVpcmUoXCIuL21vZGFsV2luZG93XCIpO1xyXG5jb25zdCBzaG93V2lubmVyc18xID0gcmVxdWlyZShcIi4vc2hvd1dpbm5lcnNcIik7XHJcbmZ1bmN0aW9uIHN0YXJ0Q2FyKCkge1xyXG4gICAgY29uc3Qgc3RhcnRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhci1zdGFydCcpO1xyXG4gICAgY29uc3Qgc3RvcEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLXN0b3AnKTtcclxuICAgIHN0YXJ0QnRucy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBzdGFydChlbCwgZWwubmFtZSwgc3RvcEJ0bnMpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc3RhcnRDYXIgPSBzdGFydENhcjtcclxuZnVuY3Rpb24gc3RvcENhcigpIHtcclxuICAgIGNvbnN0IHN0YXJ0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXItc3RhcnQnKTtcclxuICAgIGNvbnN0IHN0b3BCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhci1zdG9wJyk7XHJcbiAgICBzdG9wQnRucy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzdG9wUmFjZShlbCwgZWwubmFtZSwgc3RhcnRCdG5zKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc3RvcENhciA9IHN0b3BDYXI7XHJcbmxldCB3aW5uZXIgPSAwO1xyXG5mdW5jdGlvbiBzdG9wUmFjZShlbCwgaWQsIHN0YXJ0QnRucykge1xyXG4gICAgY29uc3QgY2FyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgY29uc3QgaWNvbiA9IGNhci5xdWVyeVNlbGVjdG9yKGAjY2FyLSR7aWR9YCk7XHJcbiAgICB3aW5uZXIgPSAwO1xyXG4gICAgY29uc3Qgc21va2UgPSBpY29uLnF1ZXJ5U2VsZWN0b3IoJy5jYXItc21va2UnKTtcclxuICAgIHNtb2tlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBnZXRCdXR0b24oc3RhcnRCdG5zLCBpZCkuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGVsLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGNhci5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgdHlwZXNfMS5lbmlnaW5lLnN0b3AoTnVtYmVyKGlkKSk7XHJcbn1cclxuZXhwb3J0cy5zdG9wUmFjZSA9IHN0b3BSYWNlO1xyXG5mdW5jdGlvbiBzdGFydChlbCwgaWQsIHN0b3BCdG5zLCBzdGFydEJ0biwgcmVzZXRCdG4pIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgW2NhciwgaWNvbiwgcGFyZW50LCBzdG9wQnRuLCBsV2hlZWwsIHJXaGVlbCwgc21va2VdID0gZ2V0RWxlbWVudHMoaWQsIHN0b3BCdG5zKTtcclxuICAgICAgICBzdG9wQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgZWwuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gKHlpZWxkIHR5cGVzXzEuZW5pZ2luZS5zdGFydChOdW1iZXIoaWQpKSk7XHJcbiAgICAgICAgY29uc3QgdGltZSA9IHN0YXJ0LmRpc3RhbmNlIC8gc3RhcnQudmVsb2NpdHk7XHJcbiAgICAgICAgY29uc3QgW2FuaW1hdGlvbiwgZWxQb3NpdGlvbiwgbFcsIHJXXSA9IGFuaW1hdGlvbnMoY2FyLCBsV2hlZWwsIHJXaGVlbCwgdGltZSwgcGFyZW50KTtcclxuICAgICAgICBjb25zdCByZXNldENsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICByZXNldEJ0biA9PT0gbnVsbCB8fCByZXNldEJ0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc2V0T3JTdG9wKGxXLCByVywgYW5pbWF0aW9uLCBlbFBvc2l0aW9uLCBzbW9rZSwgcmVzZXRDbGlja2VkLCBzdG9wQnRuKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9wQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNldE9yU3RvcChsVywgclcsIGFuaW1hdGlvbiwgZWxQb3NpdGlvbiwgc21va2UsIHJlc2V0Q2xpY2tlZCwgc3RvcEJ0bik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZHJpdmVTdGF0dXMgPSB5aWVsZCB0eXBlc18xLmVuaWdpbmUuZHJpdmUoTnVtYmVyKGlkKSk7XHJcbiAgICAgICAgaWYgKCFyZXNldENsaWNrZWQpIHtcclxuICAgICAgICAgICAgaWYgKGRyaXZlU3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czUwMChsVywgclcsIGFuaW1hdGlvbiwgY2FyLCBlbFBvc2l0aW9uLCBzbW9rZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRCdG4pXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRyaXZlU3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHR5cGVzXzEuZW5pZ2luZS5zdG9wKE51bWJlcihpZCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0QnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghd2lubmVyICYmIHN0YXJ0QnRuKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czIwMChjYXIsIHRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zdGFydCA9IHN0YXJ0O1xyXG5mdW5jdGlvbiBnZXRCdXR0b24oYiwgbikge1xyXG4gICAgY29uc3QgYnRuID0gWy4uLmJdLmZpbmQoKGVsKSA9PiBlbC5uYW1lID09PSBuKTtcclxuICAgIHJldHVybiBidG47XHJcbn1cclxuZXhwb3J0cy5nZXRCdXR0b24gPSBnZXRCdXR0b247XHJcbmZ1bmN0aW9uIGFuaW1hdGlvbnMoY2FyLCBsV2hlZWwsIHJXaGVlbCwgdGltZSwgcGFyZW50KSB7XHJcbiAgICBjb25zdCBhbmltYXRpb24gPSBjYXIuYW5pbWF0ZShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZWZ0OiAnMHB4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGVmdDogYCR7cGFyZW50LmNsaWVudFdpZHRoIC0gMTYzfXB4YCxcclxuICAgICAgICB9LFxyXG4gICAgXSwge1xyXG4gICAgICAgIGR1cmF0aW9uOiB0aW1lLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBsVyA9IGxXaGVlbC5hbmltYXRlKFt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScgfSwgeyB0cmFuc2Zvcm06ICdyb3RhdGUoMzYwZGVnKScgfV0sIHsgZHVyYXRpb246IHRpbWUgfSk7XHJcbiAgICBjb25zdCByVyA9IHJXaGVlbC5hbmltYXRlKFt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScgfSwgeyB0cmFuc2Zvcm06ICdyb3RhdGUoMzYwZGVnKScgfV0sIHsgZHVyYXRpb246IHRpbWUgfSk7XHJcbiAgICBjb25zdCBlbFBvc2l0aW9uID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY2FyLnN0eWxlLmxlZnQgPSBgJHtwYXJlbnQuY2xpZW50V2lkdGggLSAxNjN9cHhgO1xyXG4gICAgfSwgdGltZSk7XHJcbiAgICByZXR1cm4gW2FuaW1hdGlvbiwgZWxQb3NpdGlvbiwgbFcsIHJXXTtcclxufVxyXG5mdW5jdGlvbiBzdGF0dXM1MDAobFcsIHJXLCBhbmltYXRpb24sIGNhciwgZWxQb3NpdGlvbiwgc21va2UpIHtcclxuICAgIGxXLmNhbmNlbCgpO1xyXG4gICAgclcuY2FuY2VsKCk7XHJcbiAgICBhbmltYXRpb24ucGF1c2UoKTtcclxuICAgIGNhci5zdHlsZS5sZWZ0ID0gZ2V0Q29tcHV0ZWRTdHlsZShjYXIpLmxlZnQ7XHJcbiAgICBhbmltYXRpb24uY2FuY2VsKCk7XHJcbiAgICBjbGVhclRpbWVvdXQoZWxQb3NpdGlvbik7XHJcbiAgICBzbW9rZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufVxyXG5mdW5jdGlvbiBzdGF0dXMyMDAoY2FyLCB0aW1lKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHdpbm5lciA9IE51bWJlcihjYXIuaWQpO1xyXG4gICAgICAgIGNvbnN0IGFkZCA9IHR5cGVzXzEud2lubmVycy5hZGRXaW5uZXIod2lubmVyLCBNYXRoLnJvdW5kKHRpbWUgLyAxMDAwKSk7XHJcbiAgICAgICAgKDAsIG1vZGFsV2luZG93XzEuc2hvd01vZGFsKSh3aW5uZXIsIE1hdGgucm91bmQodGltZSAvIDEwMDApKTtcclxuICAgICAgICBpZiAoKHlpZWxkIGFkZCkuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0ID0gKHlpZWxkIHR5cGVzXzEud2lubmVycy5nZXRXaW5uZXIod2lubmVyKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbkNvdW50ID0gZ2V0LndpbnMgKyAxO1xyXG4gICAgICAgICAgICBjb25zdCBiZXN0VGltZSA9IE1hdGgucm91bmQodGltZSAvIDEwMDApID4gZ2V0LnRpbWUgPyBnZXQudGltZSA6IE1hdGgucm91bmQodGltZSAvIDEwMDApO1xyXG4gICAgICAgICAgICB0eXBlc18xLndpbm5lcnMudXBkYXRlV2lubmVyKHdpbm5lciwgd2luQ291bnQsIGJlc3RUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKDAsIHNob3dXaW5uZXJzXzEuc2hvd1dpbm5lcnMpKCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiByZXNldE9yU3RvcChsVywgclcsIGFuaW1hdGlvbiwgZWxQb3NpdGlvbiwgc21va2UsIHJlc2V0Q2xpY2tlZCwgc3RvcEJ0bikge1xyXG4gICAgYW5pbWF0aW9uLmNhbmNlbCgpO1xyXG4gICAgY2xlYXJUaW1lb3V0KGVsUG9zaXRpb24pO1xyXG4gICAgbFcuY2FuY2VsKCk7XHJcbiAgICByVy5jYW5jZWwoKTtcclxuICAgIHNtb2tlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBzdG9wQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHJlc2V0Q2xpY2tlZCA9IHRydWU7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RWxlbWVudHMoaWQsIHN0b3BCdG5zKSB7XHJcbiAgICBjb25zdCBjYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBjb25zdCBpY29uID0gY2FyLnF1ZXJ5U2VsZWN0b3IoYCNjYXItJHtpZH1gKTtcclxuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlLXJvYWQnKTtcclxuICAgIGNvbnN0IHN0b3BCdG4gPSBnZXRCdXR0b24oc3RvcEJ0bnMsIGlkKTtcclxuICAgIGNvbnN0IGxXaGVlbCA9IGljb24ucXVlcnlTZWxlY3RvcignLmwtd2hlZWwnKTtcclxuICAgIGNvbnN0IHJXaGVlbCA9IGljb24ucXVlcnlTZWxlY3RvcignLnItd2hlZWwnKTtcclxuICAgIGNvbnN0IHNtb2tlID0gaWNvbi5xdWVyeVNlbGVjdG9yKCcuY2FyLXNtb2tlJyk7XHJcbiAgICByZXR1cm4gW2NhciwgaWNvbiwgcGFyZW50LCBzdG9wQnRuLCBsV2hlZWwsIHJXaGVlbCwgc21va2VdO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMudXBkYXRlQ2FyID0gdm9pZCAwO1xyXG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzL3R5cGVzXCIpO1xyXG5jb25zdCBzaG93Q2FyXzEgPSByZXF1aXJlKFwiLi9zaG93Q2FyXCIpO1xyXG5sZXQgY2FySWQgPSAwO1xyXG5mdW5jdGlvbiB1cGRhdGVDYXIoKSB7XHJcbiAgICBjb25zdCB1cGRhdGVDYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLWNhcicpO1xyXG4gICAgY29uc3QgY2FyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGUtbmFtZScpO1xyXG4gICAgY29uc3QgY2FyQ29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLWNvbG9yJyk7XHJcbiAgICBjb25zdCB1cGRhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVwZGF0ZS1idG4nKTtcclxuICAgIHVwZGF0ZUJ0bnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY2FyTmFtZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYXJDb2xvci5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYXJDb2xvci52YWx1ZSA9ICcjZmZmZmZmJztcclxuICAgICAgICAgICAgdXBkYXRlQ2FyQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhcklkID0gTnVtYmVyKGVsLm5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB1cGRhdGVDYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhck5hbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgdHlwZXNfMS5nYXJhZ2UudXBkYXRlQ2FyKGNhcklkLCBjYXJOYW1lLnZhbHVlLCBjYXJDb2xvci52YWx1ZSk7XHJcbiAgICAgICAgICAgICgwLCBzaG93Q2FyXzEuc2hvd0NhcikoKTtcclxuICAgICAgICAgICAgY2FyTmFtZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhck5hbWUudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgY2FyQ29sb3IuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYXJDb2xvci52YWx1ZSA9ICcjZWZlZmVmJztcclxuICAgICAgICAgICAgdXBkYXRlQ2FyQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnVwZGF0ZUNhciA9IHVwZGF0ZUNhcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5yZW5kZXJXaW5uZXJzUGFnaW5hdGlvbiA9IGV4cG9ydHMucHJldkJ0biA9IGV4cG9ydHMud2lubmVyc1BhZ2VOdW1iZXIgPSBleHBvcnRzLm5leHRCdG4gPSB2b2lkIDA7XHJcbmNvbnN0IHJlbmRlckh0bWxfMSA9IHJlcXVpcmUoXCIuLi9vdGhlcnMvcmVuZGVySHRtbFwiKTtcclxuY29uc3Qgc2hvd1dpbm5lcnNfMSA9IHJlcXVpcmUoXCIuL3Nob3dXaW5uZXJzXCIpO1xyXG5leHBvcnRzLm5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuZXhwb3J0cy53aW5uZXJzUGFnZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuZXhwb3J0cy5wcmV2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmZ1bmN0aW9uIHJlbmRlcldpbm5lcnNQYWdpbmF0aW9uKCkge1xyXG4gICAgY29uc3QgcGFnaW5hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGFnaW5hdGlvbi5jbGFzc05hbWUgPSAncGFnaW5hdGlvbic7XHJcbiAgICBleHBvcnRzLndpbm5lcnNQYWdlTnVtYmVyLmNsYXNzTmFtZSA9ICdwYWctbnVtJztcclxuICAgIGV4cG9ydHMucHJldkJ0bi5jbGFzc05hbWUgPSAncGFnLXByZXYtYnRuJztcclxuICAgIGV4cG9ydHMubmV4dEJ0bi5jbGFzc05hbWUgPSAncGFnLW5leHQtYnRuJztcclxuICAgIGV4cG9ydHMud2lubmVyc1BhZ2VOdW1iZXIuaW5uZXJIVE1MID0gJzEnO1xyXG4gICAgZXhwb3J0cy5wcmV2QnRuLmlubmVySFRNTCA9ICc8JztcclxuICAgIGV4cG9ydHMubmV4dEJ0bi5pbm5lckhUTUwgPSAnPic7XHJcbiAgICBwYWdpbmF0aW9uLmFwcGVuZChleHBvcnRzLnByZXZCdG4pO1xyXG4gICAgcGFnaW5hdGlvbi5hcHBlbmQoZXhwb3J0cy53aW5uZXJzUGFnZU51bWJlcik7XHJcbiAgICBwYWdpbmF0aW9uLmFwcGVuZChleHBvcnRzLm5leHRCdG4pO1xyXG4gICAgcmVuZGVySHRtbF8xLndpbm5lcnNCbG9jay5hcHBlbmQocGFnaW5hdGlvbik7XHJcbiAgICB3aW5uZXJzUGFnaW5hdGlvbigpO1xyXG59XHJcbmV4cG9ydHMucmVuZGVyV2lubmVyc1BhZ2luYXRpb24gPSByZW5kZXJXaW5uZXJzUGFnaW5hdGlvbjtcclxuZnVuY3Rpb24gd2lubmVyc1BhZ2luYXRpb24oKSB7XHJcbiAgICBleHBvcnRzLm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZXhwb3J0cy53aW5uZXJzUGFnZU51bWJlci5pbm5lckhUTUwgPSBgJHtOdW1iZXIoZXhwb3J0cy53aW5uZXJzUGFnZU51bWJlci5pbm5lckhUTUwpICsgMX1gO1xyXG4gICAgICAgICgwLCBzaG93V2lubmVyc18xLnNob3dXaW5uZXJzKSgpO1xyXG4gICAgfSk7XHJcbiAgICBleHBvcnRzLnByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZXhwb3J0cy53aW5uZXJzUGFnZU51bWJlci5pbm5lckhUTUwgPSBgJHtOdW1iZXIoZXhwb3J0cy53aW5uZXJzUGFnZU51bWJlci5pbm5lckhUTUwpIC0gMX1gO1xyXG4gICAgICAgICgwLCBzaG93V2lubmVyc18xLnNob3dXaW5uZXJzKSgpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5yZXNldEJ0biA9IGV4cG9ydHMuc3RhcnRCdG4gPSBleHBvcnRzLndpbm5lcnNCbG9jayA9IGV4cG9ydHMubmV4dFBhZ2UgPSBleHBvcnRzLnByZXZQYWdlID0gZXhwb3J0cy5wYWdlTnVtYmVyID0gZXhwb3J0cy5nYXJhZ2VMZW5ndGggPSBleHBvcnRzLmNhcnMgPSB2b2lkIDA7XHJcbmNvbnN0IGFkZENhcl8xID0gcmVxdWlyZShcIi4uL2dldENhcnMmV2lubmVycy9hZGRDYXJcIik7XHJcbmNvbnN0IGdlbmVyYXRlMTAwQ2Fyc18xID0gcmVxdWlyZShcIi4uL2dldENhcnMmV2lubmVycy9nZW5lcmF0ZTEwMENhcnNcIik7XHJcbmNvbnN0IHBhZ2luYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9nZXRDYXJzJldpbm5lcnMvcGFnaW5hdGlvblwiKTtcclxuY29uc3Qgc2hvd0Nhcl8xID0gcmVxdWlyZShcIi4uL2dldENhcnMmV2lubmVycy9zaG93Q2FyXCIpO1xyXG5jb25zdCB3aW5uZXJzUGFnaW5hdGlvbl8xID0gcmVxdWlyZShcIi4uL2dldENhcnMmV2lubmVycy93aW5uZXJzUGFnaW5hdGlvblwiKTtcclxuY29uc3Qgdmlld18xID0gcmVxdWlyZShcIi4uL3ZpZXdzL3ZpZXdcIik7XHJcbmV4cG9ydHMuY2FycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5leHBvcnRzLmdhcmFnZUxlbmd0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuZXhwb3J0cy5wYWdlTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5leHBvcnRzLnByZXZQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmV4cG9ydHMubmV4dFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuZXhwb3J0cy53aW5uZXJzQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZXhwb3J0cy5zdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5leHBvcnRzLnJlc2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmNvbnN0IGdhcmFnZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5jb25zdCB3aW5uZXJzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmNvbnN0IGdlbmVyYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmNvbnN0IGdhcmFnZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IHZpZXdCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IHJhY2VCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IHBhZ2luYXRpb25CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBmb3JtQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5leHBvcnRzLnJlc2V0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuZXhwb3J0cy5yZXNldEJ0bi5jbGFzc05hbWUgPSAncmVzZXQtcmFjZSc7XHJcbmV4cG9ydHMuc3RhcnRCdG4uY2xhc3NOYW1lID0gJ3N0YXJ0LXJhY2UnO1xyXG5nYXJhZ2VCdG4uY2xhc3NOYW1lID0gJ2dhcmFnZS12aWV3Jztcclxud2lubmVyc0J0bi5jbGFzc05hbWUgPSAnd2lubmVycy12aWV3JztcclxuZXhwb3J0cy53aW5uZXJzQmxvY2suY2xhc3NOYW1lID0gJ3dpbm5lcnMgaGlkZGVuJztcclxuZ2FyYWdlQmxvY2suY2xhc3NOYW1lID0gJ2dhcmFnZSc7XHJcbnJhY2VCdG5zLmNsYXNzTmFtZSA9ICdyYWNlLWJ0bnMnO1xyXG5leHBvcnRzLmNhcnMuY2xhc3NOYW1lID0gJ2NhcnMnO1xyXG5nZW5lcmF0ZUJ0bi5jbGFzc05hbWUgPSAnZ2VuLWNhcnMnO1xyXG5leHBvcnRzLnBhZ2VOdW1iZXIuY2xhc3NOYW1lID0gJ3BhZ2UtbnVtIHBhZy1udW0nO1xyXG5leHBvcnRzLnByZXZQYWdlLmNsYXNzTmFtZSA9ICdwcmV2LWJ0biBwYWctcHJldi1idG4nO1xyXG5leHBvcnRzLm5leHRQYWdlLmNsYXNzTmFtZSA9ICduZXh0LWJ0biBwYWctbmV4dC1idG4nO1xyXG5wYWdpbmF0aW9uQmxvY2suY2xhc3NOYW1lID0gJ3BhZ2luYXRpb24nO1xyXG5leHBvcnRzLmdhcmFnZUxlbmd0aC5jbGFzc05hbWUgPSAnZ2FyYWdlLWxlbmd0aCBsZW5ndGgnO1xyXG52aWV3QnRucy5jbGFzc05hbWUgPSAndmlldy1idG5zJztcclxuZm9ybUJsb2NrLmNsYXNzTmFtZSA9ICdmb3JtLWJsb2NrJztcclxubW9kYWxCb2R5LmNsYXNzTmFtZSA9ICdtb2RhbC1ib2R5IGhpZGRlbic7XHJcbm1vZGFsQ29udGVudC5jbGFzc05hbWUgPSAnbW9kYWwtY29udGVudCc7XHJcbmdhcmFnZUJ0bi5pbm5lckhUTUwgPSAnR2FyYWdlJztcclxud2lubmVyc0J0bi5pbm5lckhUTUwgPSAnV2lubmVycyc7XHJcbmdlbmVyYXRlQnRuLmlubmVySFRNTCA9ICdHZW5lcmF0ZSAxMDAgQ2Fycyc7XHJcbmV4cG9ydHMucGFnZU51bWJlci5pbm5lckhUTUwgPSAnMSc7XHJcbmV4cG9ydHMucHJldlBhZ2UuaW5uZXJIVE1MID0gJzwnO1xyXG5leHBvcnRzLm5leHRQYWdlLmlubmVySFRNTCA9ICc+JztcclxuZXhwb3J0cy5zdGFydEJ0bi5pbm5lckhUTUwgPSAnU3RhcnQgUmFjZSc7XHJcbmV4cG9ydHMucmVzZXRCdG4uaW5uZXJIVE1MID0gJ1Jlc2V0IFJhY2UnO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGNvbnN0IGlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCBpbnB1dENvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZm9ybS5hY3Rpb24gPSAnIyc7XHJcbiAgICBpbnB1dFRleHQudHlwZSA9ICdzZWFyY2gnO1xyXG4gICAgaW5wdXRDb2xvci50eXBlID0gJ2NvbG9yJztcclxuICAgIHN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICBpbnB1dFRleHQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICBpbnB1dFRleHQuY2xhc3NOYW1lID0gJ25hbWUnO1xyXG4gICAgICAgIGlucHV0Q29sb3IuY2xhc3NOYW1lID0gJ2NvbG9yJztcclxuICAgICAgICBzdWJtaXRCdG4uY2xhc3NOYW1lID0gJ2FkZC1jYXInO1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQWRkIE5ldyBDYXInO1xyXG4gICAgICAgIGlucHV0Q29sb3IudmFsdWUgPSAnI2ZmZmZmZic7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpbnB1dFRleHQuY2xhc3NOYW1lID0gJ3VwZGF0ZS1uYW1lJztcclxuICAgICAgICBpbnB1dENvbG9yLmNsYXNzTmFtZSA9ICd1cGRhdGUtY29sb3InO1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5jbGFzc05hbWUgPSAndXBkYXRlLWNhcic7XHJcbiAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdVcGRhdGUgQ2FyJztcclxuICAgICAgICBpbnB1dENvbG9yLnZhbHVlID0gJyNlZmVmZWYnO1xyXG4gICAgICAgIGlucHV0Q29sb3IuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGlucHV0VGV4dC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgc3VibWl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZvcm0uYXBwZW5kKGlucHV0VGV4dCk7XHJcbiAgICBmb3JtLmFwcGVuZChpbnB1dENvbG9yKTtcclxuICAgIGZvcm0uYXBwZW5kKHN1Ym1pdEJ0bik7XHJcbiAgICBmb3JtQmxvY2suYXBwZW5kKGZvcm0pO1xyXG4gICAgZ2FyYWdlQmxvY2suYXBwZW5kKGZvcm1CbG9jayk7XHJcbn1cclxucGFnaW5hdGlvbkJsb2NrLmFwcGVuZChleHBvcnRzLnByZXZQYWdlKTtcclxucGFnaW5hdGlvbkJsb2NrLmFwcGVuZChleHBvcnRzLnBhZ2VOdW1iZXIpO1xyXG5wYWdpbmF0aW9uQmxvY2suYXBwZW5kKGV4cG9ydHMubmV4dFBhZ2UpO1xyXG5tb2RhbEJvZHkuYXBwZW5kKG1vZGFsQ29udGVudCk7XHJcbnZpZXdCdG5zLmFwcGVuZChnYXJhZ2VCdG4pO1xyXG52aWV3QnRucy5hcHBlbmQod2lubmVyc0J0bik7XHJcbnJhY2VCdG5zLmFwcGVuZChleHBvcnRzLnN0YXJ0QnRuKTtcclxucmFjZUJ0bnMuYXBwZW5kKGV4cG9ydHMucmVzZXRCdG4pO1xyXG5nYXJhZ2VCbG9jay5hcHBlbmQocmFjZUJ0bnMpO1xyXG5nYXJhZ2VCbG9jay5hcHBlbmQoZ2VuZXJhdGVCdG4pO1xyXG5nYXJhZ2VCbG9jay5hcHBlbmQoZXhwb3J0cy5nYXJhZ2VMZW5ndGgpO1xyXG5nYXJhZ2VCbG9jay5hcHBlbmQoZXhwb3J0cy5jYXJzKTtcclxuZ2FyYWdlQmxvY2suYXBwZW5kKHBhZ2luYXRpb25CbG9jayk7XHJcbmdhcmFnZUJsb2NrLmFwcGVuZChtb2RhbEJvZHkpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZCh2aWV3QnRucyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGdhcmFnZUJsb2NrKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoZXhwb3J0cy53aW5uZXJzQmxvY2spO1xyXG4oMCwgdmlld18xLnNob3dIaWRlKSgpO1xyXG4oMCwgYWRkQ2FyXzEuYWRkTmV3Q2FyKSgpO1xyXG4oMCwgZ2VuZXJhdGUxMDBDYXJzXzEuZ2VuZXJhdGUxMDBDYXJzKSgpO1xyXG4oMCwgc2hvd0Nhcl8xLnNob3dDYXIpKCk7XHJcbigwLCBwYWdpbmF0aW9uXzEucGFnaW5hdGlvbikoKTtcclxuKDAsIHdpbm5lcnNQYWdpbmF0aW9uXzEucmVuZGVyV2lubmVyc1BhZ2luYXRpb24pKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc3ZnID0gdm9pZCAwO1xyXG5mdW5jdGlvbiBzdmcoY29sb3IpIHtcclxuICAgIHJldHVybiBiZWZvcmVDb2xvciArIGNvbG9yICsgYWZ0ZXJDb2xvcjtcclxufVxyXG5leHBvcnRzLnN2ZyA9IHN2ZztcclxuY29uc3QgYmVmb3JlQ29sb3IgPSBgPGRpdiBjbGFzcz1cImNhci1tb2RlbFwiPjxzdmcgdmVyc2lvbj1cIjEuMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUwMCAxNjBcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjUwXCI+XHJcbjxwYXRoIGZpbGw9YDtcclxuY29uc3QgYWZ0ZXJDb2xvciA9IGAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJtNC4xIDY3bDMuOS0zLjZjMCAwIDExLjYgMi4xIDE5LjUgMS44IDcuOC0wLjMgMTYuNC0xMS43IDgtMTEuNS0yIDAtNC4yLTAuNC02LjMtMXEwIDAgMCBcclxuMGMtNy4xLTEuOS0xNC02LjEtMTQtNi4xbC00LjItOWMwIDAtNC40LTcuNSA0LjYtNi45IDkgMC42IDE4LjkgNC40IDE4LjkgNC40IDAgMCA4Ny42LTIxLjUgMTA0LjctMjQuOCAxNy4xLTMuMyBcclxuODkuNi0xNy42IDE1My4zIDE0LjUgMCAwIDQwLjIgMTguOSA0NC4xIDE5LjIgMCAwIDExOS45IDUuOCAxNTkuNCA0MSAwIDAgMC42IDEyLjkgMCAyMS4zIDAgMCAxLjggNS40LTEuMyAxMC42IDAgMCAyLjEgXHJcbjQuMi0xLjQgMy42bC0xLjEgOC43YzAgMC00LjItMi4xLTYuMSA0LjkgMCAwLTIyLjEgNS40LTI4LjEgNC4xIDAgMCA2LjctNjYuOS00MS41LTY2LjktNDguMSAwLTUyLjcgNDIuNS01My40IDY3LjFsLTEuOCBcclxuMS41YzAgMC0yMTIuNi02LjMtMjE4LjMtMi44IDAgMC0yLjEgMC0xLjctNCAwIDAgNi45LTY1LjUtNTAuMi02NS41LTU3LjIgMC00NC4yIDYxLjMtNDQuMiA2MS4zIDAgMC00Mi44LTkuNi0zNi4zLTE2LjEgMCBcclxuMC0xNC45LTIwLjMtNi41LTQ1Ljh6bTM2Ni4xIDUuMWMzLjItMy45LTQxLjktNC40LTQxLjktNC40IDAgMC01IDQuOC0zLjMgOS4zIDEuNiA0LjUgMjUuMSAzLjggMzEuOCAzLjEgNi44LTAuOCAxMy40LTggXHJcbjEzLjQtOHptLTgxLTE5LjdjMCAwIDIyLjUgMC4yIDI1LjYgMCAzLTAuMyAxLjktMS41IDEuOS0xLjUgMCAwLTUuNi03LjctNDQuNi0yNC4zLTM4LjktMTYuNS02Mi0xNC4xLTYyLTE0LjEtMTA3LjcgMy04Ny45IFxyXG4xNi4xLTg3LjkgMTYuMWw4LjEgOS40IDI1LjIgNC44IDExMCA2Ljl6bS0xMDIuNiA3LjFjMCAxLjIgMSAyLjIgMi4yIDIuMmgxNy43YzEuMiAwIDIuMi0xIDIuMi0yLjIgMC0xLjMtMS0yLjMtMi4yLTIuM2gtMTcuN2MtMS4yIFxyXG4wLTIuMiAxLTIuMiAyLjN6bTEzNC40IDE4LjdjMCAwIDAuOCAzNC4xLTMgNDIuM2wtOTQuOC0zYzAgMC0yOC43IDEtMzkuNC0xOS44IDAgMC05LjEtMTktMTAuNS0yNS41IDAuMyAyLjIgNCAzNy41IDIyLjkgNDIuNyAxOS43IFxyXG41LjQgMTI0LjggOC4yIDEyNC44IDguMiAwIDAgNC4xLTM1LjEgMC00NC45em00NiAxOHEwLjItMC4zIDAuNS0wLjggMC42LTAuOSAxLjMtMiAwLjItMC4zIDAuNC0wLjcgMC41LTAuNyAxLjEtMS41IDAuMi0wLjMgXHJcbjAuNC0wLjZjMC45LTEuMSAxLjgtMi4zIDIuOC0zLjVxMC40LTAuNSAwLjgtMC45YzIuMi0yLjUgNC43LTUgNy43LTcuNHEwLjQtMC4zIDAuOC0wLjYgMC40LTAuMyAwLjgtMC42IDEuMS0wLjggMi4zLTEuNiAwLjgtMC41IFxyXG4xLjYtMS4xIDEuMy0wLjcgMi42LTEuNCAwLjktMC41IDEuOS0wLjkgMC40LTAuMiAwLjgtMC40IDAuNC0wLjIgMC44LTAuNCAwLjgtMC4zIDEuNi0wLjcgMS0wLjMgMS45LTAuNiAxLjMtMC41IDIuNi0wLjggMC40LTAuMiBcclxuMC45LTAuMyAxLTAuMiAyLjEtMC41IDEuMS0wLjIgMi4yLTAuNCAwLjctMC4xIDEuNC0wLjIgMC4xIDAgMC4xIDAgMC42LTAuMSAxLjItMC4xIDEtMC4xIDIuMS0wLjIgMC43IDAgMS41IDAgMS41LTAuMSAzLjEgMGMzNC4xIFxyXG4xIDQ0IDMxLjMgNDQgMzEuM2g4LjJjMCAwIDkuOS01LjggMTkuOC01LjEgMTAgMC44IDMuMy00LjMtOC40LTYuNS0xMS43LTIuMS0yMi42LTE0LjQtMjQuNC0xNy43LTEuOC0zLjMtNDUuNC0xNC03Mi42LTEyLjggMCAwIDQwIFxyXG4yIDcwIDE0LjkgMCAwIDEuMSA0LjEtMTEuNyAwcS0xLjYtMC41LTMuNy0xLjMtMC43LTAuMi0xLjUtMC41LTIuMi0wLjgtNC45LTEuNi0xLjctMC41LTMuNi0xLTAuOC0wLjItMS41LTAuNC0wLjctMC4yLTEuNS0wLjMtMC43LTAuMi0xLjUtMC4zLTAuOC0wLjItMS42LTAuMy0wLjktMC4yLTEuOS0wLjMtMS0wLjItMi0wLjItMC42LTAuMS0xLjEtMC4xLTAuNy0wLjEtMS40LTAuMS0wLjEgMC0wLjMgXHJcbjAtMS0wLjEtMi4xLTAuMS0xIDAtMiAwLjEtMS4xIDAtMi4xIDAuMS0wLjcgMC4xLTEuNCAwLjItMC42IDAtMS4xIDAuMS0wLjcgMC4xLTEuNSAwLjItMC4yIDAuMS0wLjQgMC4xLTAuNyAwLjEtMS4zIFxyXG4wLjNjLTAuNSAwLjEtMC45IDAuMi0xLjQgMC40cS0wLjcgMC4xLTEuNCAwLjQtMC44IDAuMi0xLjUgMC40LTEuNCAwLjUtMi45IDEuMS0wLjcgMC4zLTEuNCAwLjctMS42IDAuNy0zLjIgMS43LTAuNSBcclxuMC4zLTEuMSAwLjdjLTAuMiAwLjEtMC40IDAuMy0wLjYgMC40cS0wLjQgMC4yLTAuNyAwLjUtMC4zIDAuMi0wLjYgMC40IDAgMCAwIDAtMC41IDAuMy0xIDAuNi0wLjUgMC40LTEgMC44LTAuMSAwLjEtMC4yIFxyXG4wLjItMC40IDAuMy0wLjcgMC42LTAuNiAwLjUtMS4yIDEtMC42IDAuNS0xLjEgMS0wLjYgMC41LTEuMSAxLjEtMC4xIDAuMS0wLjMgMC4yLTAuNyAwLjctMS40IDEuNS0xLjIgMS4zLTIuNCAyLjctMC40IFxyXG4wLjYtMC45IDEuMi0xLjcgMi4yLTMuNCA0LjctMC43IDAuOS0xLjMgMi0xLjUgMi4zLTIuOSA1LTAuMiAwLjMtMC4zIDAuNiAwLjEtMC4xIDAuMi0wLjR6bTEyNS44LTguNWMtMTEuNy0xMy43LTMzLjUtMTUuNi0zMy41LTE1LjYgXHJcbjE2LjMgMTQuNiAzMy41IDE1LjYgMzMuNSAxNS42em0tMzQ1LjcgNDIuNWwyMTAuMSA0LjRjOC40LTMuNC0yMy43LTUuMS0yMy43LTUuMSAwIDAtMTQ0LjQtNS4yLTE1Ny42LTUuMi0xMy4zIFxyXG4wLTE4LjYgMS4zLTI2LjMgMi42LTcuNiAxLjMtMi41IDMuMy0yLjUgMy4zem0tNS42LTMyLjVjMzMuNy0yMS4yIDE3LjgtMjguOCAxNy44LTI4LjggNy45LTEuNCAxNTIuOCAyLjkgMTYxLjMgXHJcbjMuMi04LjMtMC40LTE0Mi44LTYuOS0xNjYuNy02LjktMjQuNiAwLjEtMjUuNCA4LjYtMjUuNCA4LjYtMjEuOC0xMC45LTMyLjEtOC4zLTMyLjEtOC4zIDMzLjQgMS40IDQ1LjEgMzIuMiA0NS4xIFxyXG4zMi4yem0tMTA2LjYtMy44YzMuMyAzLjggOC42IDUuNyA4LjYgNS4xIDEtMTIuNiAxMC4xLTIxLjYgMTAuMS0yMS42LTE2IDQuMi00Ny4yLTktNDcuMi05LTMuMiA0LjctMS45IDExLjktMS45IFxyXG4xMS45IDE4LjQgMS4xIDI3LjIgOS43IDMwLjQgMTMuNnptMTgzLjMtNzljMzMuMyAwLjggOTMuMyAzNC44IDkzLjMgMzQuOC0yLjEtMC4zLTE5LjQgMC40LTI2LjMtMS45LTItMC42LTMuMi0xLjYtMi45LTIuOCBcclxuMS4zLTUuNi0xLjgtOC4yLTEuOC04LjIgMCAwLTEwLjEtNi40LTE1LjktMy4xIDAgMC0zMS43LTIxLjYtODQuOS0xMS40IDAgMC0zLjggMC40LTAuOCA1LjIgMi43IDQuMSA1LjggMTIuNyBcclxuNi42IDE0LjgtMTcuNC0xLjItMzEuNi0yLjQtMzQuOC0zLjItOS43LTIuMy0xNi4zIDAuNS0yMi4yLTkuNy01LjgtMTAuMiA1Ni4zLTE1LjMgODkuNy0xNC41em0tNjguNSAxOC43YzMuMSAzIDE0LjUgXHJcbjQuNCAxNC41IDQuNCAwIDAgMi4yLTMuNi0zLjItMTEuMy0wLjQtMC41LTExLjMgMy4yLTExLjMgMy4yIDAgMC0zIDAuNiAwIDMuN3ptMTc5LjkgMzguNWgzMy4yYzAuOCAwIDEuNCAwLjYgMS40IDEuNCAwIFxyXG4wLjctMC42IDEuMy0xLjQgMS4zaC0zMy4yYy0wLjggMC0xLjQtMC42LTEuNC0xLjMgMC0wLjggMC42LTEuNCAxLjQtMS40em0tMTQyLjUtMzAuOGMwIDAgNTcuMiA1IDY1LjYgNC4zIDAgMC0wLjItNy4zIFxyXG40LjctNi45IDAgMC00LjEgNC44IDAuMSA3LjggMCAwLTI1LjYgMi4xLTcwLjQtNS4yelwiLz5cclxuPHBhdGggZD1cIm00OTIuNSAxMjUuM2MwIDAtMy45IDAuMy00IDQuNGwtMjYgNC43YzAgMCA0Ny45LTEuMiAzMC05LjF6XCIvPlxyXG48cGF0aCBkPVwibTM2NS41IDk5cTAuMi0wLjQgMC40LTAuNy0wLjMgMC40LTAuNCAwLjd6XCIvPlxyXG48cGF0aCBkPVwibTMyOS41IDcyLjFoMzMuM2MwLjggMCAxLjQgMC42IDEuNCAxLjMgMCAwLjgtMC42IDEuNC0xLjQgMS40aC0zMy4zYy0wLjcgMC0xLjMtMC42LTEuMy0xLjQgMC0wLjcgMC42LTEuMyAxLjMtMS4zelwiLz5cclxuPHBhdGggZD1cIm0zMjkuNSA3Mi4xaDMzLjNjMC44IDAgMS40IDAuNiAxLjQgMS4zIDAgMC44LTAuNiAxLjQtMS40IDEuNGgtMzMuM2MtMC43IDAtMS4zLTAuNi0xLjMtMS40IDAtMC43IDAuNi0xLjMgMS4zLTEuM3pcIi8+XHJcbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwibTIxOC4xIDE0LjljMzMuNCAwLjcgOTMuNCAzNC44IDkzLjQgMzQuOC0yLjEtMC4zLTE5LjQgMC40LTI2LjMtMS45LTItMC43LTMuMi0xLjYtMi45LTIuOCBcclxuMS4zLTUuNi0xLjgtOC4yLTEuOC04LjIgMCAwLTEwLjItNi40LTE1LjktMy4xIDAgMC0zMS43LTIxLjYtODQuOS0xMS40IDAgMC0zLjggMC40LTAuOCA1LjEgMi43IDQuMiA1LjggMTIuOCA2LjUgXHJcbjE0LjktMTcuMy0xLjItMzEuNS0yLjQtMzQuOC0zLjItOS42LTIuMy0xNi4zIDAuNS0yMi4xLTkuNy01LjktMTAuMiA1Ni4zLTE1LjMgODkuNi0xNC41em0tNjguNCAxOC43YzMuMSAzIDE0LjUgNC40IDE0LjUgXHJcbjQuNCAwIDAgMi4yLTMuNy0zLjItMTEuMy0wLjQtMC41LTExLjMgMy4yLTExLjMgMy4yIDAgMC0zLjEgMC42IDAgMy43elwiLz5cclxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJtMTg1LjQgNDIuM2MtMTcuMy0xLjItMzEuNS0yLjQtMzQuOC0zLjItOS42LTIuMy0xNi4zIDAuNS0yMi4xLTkuNy01LjktMTAuMiA1Ni4zLTE1LjMgODkuNi0xNC41IFxyXG4zMy40IDAuNyA5My40IDM0LjggOTMuNCAzNC44LTIuMS0wLjMtMTkuNCAwLjQtMjYuMy0xLjktMi0wLjctMy4yLTEuNi0yLjktMi44IDEuMy01LjYtMS44LTguMi0xLjgtOC4yIDAgMC0xMC4yLTYuNC0xNS45LTMuMSAwIFxyXG4wLTMxLjctMjEuNi04NC45LTExLjQgMCAwLTMuOCAwLjQtMC44IDUuMSAyLjcgNC4yIDUuOCAxMi44IDYuNSAxNC45em0tMzUuNy04LjdjMy4xIDMgMTQuNSA0LjQgMTQuNSA0LjQgXHJcbjAgMCAyLjItMy43LTMuMi0xMS4zLTAuNC0wLjUtMTEuMyAzLjItMTEuMyAzLjIgMCAwLTMuMSAwLjYgMCAzLjd6XCIvPlxyXG48cGF0aCBkPVwibTI3Ni44IDM2LjFjNy4yIDMuMiA0IDguNiAzLjkgMTAuMyAwIDEuOC0xNi4xIDQuNS0xOC4yLTEuMi0yLTUuNiAyLTEwLjkgMi0xMC45IDAgMCA1LjItMS40IDEyLjMgMS44elwiLz5cclxuPGc+XHJcbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwibTQxMS41IDc3LjJjMjIuMSAwIDQwLjEgMTggNDAuMSA0MC4yIDAgMjIuMi0xOCA0MC4yLTQwLjEgNDAuMi0yMi4yIDAtNDAuMi0xOC00MC4yLTQwLjIgMC0yMi4yIDE4LTQwLjIgXHJcbjQwLjItNDAuMnptLTMyLjUgNDAuMmMwIDE4IDE0LjUgMzIuNSAzMi41IDMyLjUgMTcuOSAwIDMyLjQtMTQuNSAzMi40LTMyLjUgMC0xOC0xNC41LTMyLjUtMzIuNC0zMi41LTE4IDAtMzIuNSAxNC41LTMyLjUgXHJcbjMyLjV6bTEwLTIwLjdjMCAyLjUgMS45IDkuMSAxOC41IDE4LjMtMC40IDAuNi0wLjYgMS4zLTAuNiAyLTE4LjYtMS41LTI0LjEgMi43LTI1LjcgNXEtMC4zLTIuMi0wLjMtNC42YzAtOCAzLTE1LjMgXHJcbjguMS0yMC43em0xOC45IDIzLjdjMC41IDAuNiAxLjEgMSAxLjcgMS4zLTguOCAxNS43LTcuNiAyMi42LTYuMyAyNS4yLTktMi40LTE2LjMtOC45LTE5LjktMTcuMyAyLjEgMS4xIDguNyAyLjUgXHJcbjI0LjUtOS4yem0zLjYtMzMuNmM0LjkgMCA5LjUgMS4xIDEzLjYgMy4yLTIuNiAwLjktOC4yIDUtMTIuMiAyM3EtMC43LTAuMi0xLjQtMC4yLTAuNCAwLTAuOCAwYy00LjMtMjAuMS0xMC42LTIyLjctMTIuNS0yMyA0LTEuOSBcclxuOC41LTMgMTMuMy0zem0xLjQgMzVxMS4xLTAuMyAxLjgtMS4xYzEzLjggMTIuOCAyMC44IDEyLjcgMjMuMyAxMS45LTQuNSA3LjktMTIuNCAxMy42LTIxLjcgMTUuMSAxLjYtMi4xIFxyXG4zLjktOC42LTMuNC0yNS45em0yLjktNi4xYzE4LjYtOC4zIDE5LjktMTUgMTkuOC0xNy4xIDQuMSA1LjIgNi41IDExLjcgNi41IDE4LjhxLTAuMSA0LTEgNy43Yy0xLjQtMi40LTYuNS03LjEtMjUtNy4ycTAtMC4yIFxyXG4wLTAuNSAwLTAuOS0wLjMtMS43em0tNi4xIDUuOWwtMC4xIDAuMXEwLTAuMSAwLjEtMC4xelwiLz5cclxuPHBhdGggZD1cIm00MTUuOCAxMTUuN2MxOC42LTguMyAxOS45LTE1IDE5LjgtMTcuMSA0LjEgNS4yIDYuNSAxMS43IDYuNSAxOC44cS0wLjEgNC0xIDcuN2MtMS40LTIuNC02LjUtNy4xLTI1LTcuMnEwLTAuMiBcclxuMC0wLjUgMC0wLjktMC4zLTEuN3pcIi8+XHJcbjxwYXRoIGQ9XCJtNDEyLjkgMTIxLjhxMS4xLTAuMyAxLjgtMS4xYzEzLjggMTIuOCAyMC44IDEyLjcgMjMuMyAxMS45LTQuNSA3LjktMTIuNCAxMy42LTIxLjcgMTUuMSAxLjYtMi4xIDMuOS04LjYtMy40LTI1Ljl6XCIvPlxyXG48cGF0aCBkPVwibTQwOS43IDEyMS42bC0wLjEgMC4xcTAtMC4xIDAuMS0wLjF6XCIvPlxyXG48cGF0aCBkPVwibTQxMS41IDg2LjhjNC45IDAgOS41IDEuMSAxMy42IDMuMi0yLjYgMC45LTguMiA1LTEyLjIgMjNxLTAuNy0wLjItMS40LTAuMi0wLjQgMC0wLjggXHJcbjBjLTQuMy0yMC4xLTEwLjYtMjIuNy0xMi41LTIzIDQtMS45IDguNS0zIDEzLjMtM3pcIi8+XHJcbjxwYXRoIGQ9XCJtNDA3LjkgMTIwLjRjMC41IDAuNiAxLjEgMSAxLjcgMS4zLTguOCAxNS43LTcuNiAyMi42LTYuMyAyNS4yLTktMi40LTE2LjMtOC45LTE5LjktMTcuMyAyLjEgMS4xIDguNyAyLjUgMjQuNS05LjJ6XCIvPlxyXG48cGF0aCBkPVwibTM4OSA5Ni43YzAgMi41IDEuOSA5LjEgMTguNSAxOC4zLTAuNCAwLjYtMC42IDEuMy0wLjYgMi0xOC42LTEuNS0yNC4xIDIuNy0yNS43IDVxLTAuMy0yLjItMC4zLTQuNmMwLTggMy0xNS4zIDguMS0yMC43elwiLz5cclxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGZpbGw9XCJ3aGl0ZVwiIGQ9XCJtMzg5IDk2LjdjMCAyLjUgMS45IDkuMSAxOC41IDE4LjMtMC40IDAuNi0wLjYgMS4zLTAuNiAyLTE4LjYtMS41LTI0LjEgMi43LTI1LjcgXHJcbjVxLTAuMy0yLjItMC4zLTQuNmMwLTggMy0xNS4zIDguMS0yMC43em0xOC45IDIzLjdjMC41IDAuNiAxLjEgMSAxLjcgMS4zLTguOCAxNS43LTcuNiAyMi42LTYuMyAyNS4yLTktMi40LTE2LjMtOC45LTE5LjktMTcuMyBcclxuMi4xIDEuMSA4LjcgMi41IDI0LjUtOS4yem0zLjYtMzMuNmM0LjkgMCA5LjUgMS4xIDEzLjYgMy4yLTIuNiAwLjktOC4yIDUtMTIuMiAyM3EtMC43LTAuMi0xLjQtMC4yLTAuNCAwLTAuOCBcclxuMGMtNC4zLTIwLjEtMTAuNi0yMi43LTEyLjUtMjMgNC0xLjkgOC41LTMgMTMuMy0zem0xLjQgMzVxMS4xLTAuMyAxLjgtMS4xYzEzLjggMTIuOCAyMC44IDEyLjcgMjMuMyAxMS45LTQuNSA3LjktMTIuNCBcclxuMTMuNi0yMS43IDE1LjEgMS42LTIuMSAzLjktOC42LTMuNC0yNS45em0yLjktNi4xYzE4LjYtOC4zIDE5LjktMTUgMTkuOC0xNy4xIDQuMSA1LjIgNi41IDExLjcgNi41IDE4LjhxLTAuMSBcclxuNC0xIDcuN2MtMS40LTIuNC02LjUtNy4xLTI1LTcuMnEwLTAuMiAwLTAuNSAwLTAuOS0wLjMtMS43em0tNi4xIDUuOWwtMC4xIDAuMXEwLTAuMSAwLjEtMC4xelwiLz5cclxuPHBhdGggZD1cIm00MDYuOCAxMTcuMXEwIDAgMC4xLTAuMWMwLTAuNyAwLjItMS40IDAuNi0ycTAgMCAwLTAuMWMwLjctMSAxLjgtMS44IDMuMS0ycTAgMCAwLjEtMC4xIDAuNCAwIDAuOCAwIDAuNyAwIDEuNCAwLjIgMC4xIFxyXG4wIDAuMSAwLjFjMS4yIDAuNCAyLjIgMS4zIDIuNyAyLjVxMC4xIDAgMC4xIDAuMSAwLjMgMC44IDAuMyAxLjcgMCAwLjMgMCAwLjUgMCAwLjEgMCAwLjFjLTAuMiAxLTAuNiAxLjktMS4zIDIuNnEwIDAuMS0wLjEgXHJcbjAuMS0wLjcgMC44LTEuOCAxLjEgMCAwIDAgMC0wLjcgMC4zLTEuNCAwLjNjLTAuNyAwLTEuMy0wLjItMS45LTAuNGwwLjEtMC4xcS0wLjEgMC0wLjEgMC4xYy0wLjYtMC4zLTEuMi0wLjctMS43LTEuM3EwIDAgXHJcbjAtMC4xYy0wLjctMC44LTEuMS0xLjgtMS4xLTIuOXEwLTAuMSAwLTAuM3pcIi8+XHJcbjxwYXRoIGQ9XCJtNDA5LjcgMTIxLjZsLTAuMSAwLjFxMC0wLjEgMC4xLTAuMXpcIi8+XHJcbjxwYXRoIGQ9XCJtNDA5LjcgMTIxLjZsLTAuMSAwLjFxMC0wLjEgMC4xLTAuMXpcIi8+XHJcbjwvZz5cclxuPGc+XHJcbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwibTkyLjEgNzIuOGMyMi4yIDAgNDAuMSAxOCA0MC4xIDQwLjIgMCAyMi4yLTE3LjkgNDAuMi00MC4xIDQwLjItMjIuMiAwLTQwLjEtMTgtNDAuMS00MC4yIDAtMjIuMiBcclxuMTcuOS00MC4yIDQwLjEtNDAuMnptLTMyLjQgNDAuMmMwIDE4IDE0LjUgMzIuNSAzMi40IDMyLjUgMTcuOSAwIDMyLjQtMTQuNSAzMi40LTMyLjUgMC0xOC0xNC41LTMyLjUtMzIuNC0zMi41LTE3LjkgMC0zMi40IFxyXG4xNC41LTMyLjQgMzIuNXptOS45LTIwLjdjMCAyLjUgMS45IDkuMSAxOC41IDE4LjMtMC4zIDAuNi0wLjYgMS4zLTAuNiAyLjEtMTguNS0xLjYtMjQgMi42LTI1LjcgNC45cS0wLjMtMi4yLTAuMy00LjZjMC04IDMuMS0xNS4zIFxyXG44LjEtMjAuN3ptMTkgMjMuN2MwLjQgMC42IDEgMSAxLjcgMS4zLTguOCAxNS43LTcuNyAyMi42LTYuNCAyNS4yLTguOS0yLjQtMTYuMi04LjktMTkuOS0xNy4zIDIuMSAxLjEgOC43IDIuNSAyNC42LTkuMnptMy41LTMzLjZjNC45IFxyXG4wIDkuNiAxLjIgMTMuNyAzLjItMi43IDAuOS04LjMgNS0xMi4zIDIzcS0wLjctMC4yLTEuNC0wLjItMC40IDAtMC44IDBjLTQuMy0yMC4xLTEwLjYtMjIuNy0xMi41LTIzIDQtMS45IDguNS0zIDEzLjMtM3ptMS40IFxyXG4zNXExLjEtMC4zIDEuOS0xLjFjMTMuNyAxMi44IDIwLjcgMTIuNyAyMy4yIDExLjktNC41IDcuOS0xMi40IDEzLjYtMjEuNyAxNS4xIDEuNi0yLjEgMy45LTguNi0zLjQtMjUuOXptMi45LTYuMWMxOC42LTguMyBcclxuMTkuOS0xNSAxOS44LTE3LjEgNC4xIDUuMiA2LjUgMTEuNyA2LjUgMTguOHEwIDQtMSA3LjdjLTEuNC0yLjQtNi41LTcuMS0yNS03LjJxMC0wLjIgXHJcbjAtMC41IDAtMC45LTAuMy0xLjd6bS02LjEgNS45djAuMXEwLTAuMSAwLTAuMXpcIi8+XHJcbjxwYXRoIGQ9XCJtOTYuNCAxMTEuM2MxOC42LTguMyAxOS45LTE1IDE5LjgtMTcuMSA0LjEgNS4yIDYuNSAxMS43IDYuNSAxOC44cTAgNC0xIFxyXG43LjdjLTEuNC0yLjQtNi41LTcuMS0yNS03LjJxMC0wLjIgMC0wLjUgMC0wLjktMC4zLTEuN3pcIi8+XHJcbjxwYXRoIGQ9XCJtOTMuNSAxMTcuNHExLjEtMC4zIDEuOS0xLjFjMTMuNyAxMi44IDIwLjcgMTIuNyAyMy4yIDExLjktNC41IDcuOS0xMi40IDEzLjYtMjEuNyAxNS4xIDEuNi0yLjEgMy45LTguNi0zLjQtMjUuOXpcIi8+XHJcbjxwYXRoIGQ9XCJtOTAuMyAxMTcuMnYwLjFxMC0wLjEgMC0wLjF6XCIvPlxyXG48cGF0aCBkPVwibTkyLjEgODIuNGM0LjkgMCA5LjYgMS4yIDEzLjcgMy4yLTIuNyAwLjktOC4zIDUtMTIuMyAyM3EtMC43LTAuMi0xLjQtMC4yLTAuNCAwLTAuOCBcclxuMGMtNC4zLTIwLjEtMTAuNi0yMi43LTEyLjUtMjMgNC0xLjkgOC41LTMgMTMuMy0zelwiLz5cclxuPHBhdGggZD1cIm04OC42IDExNmMwLjQgMC42IDEgMSAxLjcgMS4zLTguOCAxNS43LTcuNyAyMi42LTYuNCAyNS4yLTguOS0yLjQtMTYuMi04LjktMTkuOS0xNy4zIDIuMSAxLjEgOC43IDIuNSAyNC42LTkuMnpcIi8+XHJcbjxwYXRoIGQ9XCJtNjkuNiA5Mi4zYzAgMi41IDEuOSA5LjEgMTguNSAxOC4zLTAuMyAwLjYtMC42IDEuMy0wLjYgMi4xLTE4LjUtMS42LTI0IDIuNi0yNS43IFxyXG40LjlxLTAuMy0yLjItMC4zLTQuNmMwLTggMy4xLTE1LjMgOC4xLTIwLjd6XCIvPlxyXG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZmlsbD1cIndoaXRlXCIgZD1cIm02OS42IDkyLjNjMCAyLjUgMS45IDkuMSAxOC41IDE4LjMtMC4zIDAuNi0wLjYgMS4zLTAuNiAyLjEtMTguNS0xLjYtMjQgMi42LTI1LjcgXHJcbjQuOXEtMC4zLTIuMi0wLjMtNC42YzAtOCAzLjEtMTUuMyA4LjEtMjAuN3ptMTkgMjMuN2MwLjQgMC42IDEgMSAxLjcgMS4zLTguOCAxNS43LTcuNyAyMi42LTYuNCAyNS4yLTguOS0yLjQtMTYuMi04LjktMTkuOS0xNy4zIFxyXG4yLjEgMS4xIDguNyAyLjUgMjQuNi05LjJ6bTMuNS0zMy42YzQuOSAwIDkuNiAxLjIgMTMuNyAzLjItMi43IDAuOS04LjMgNS0xMi4zIDIzcS0wLjctMC4yLTEuNC0wLjItMC40IDAtMC44IFxyXG4wYy00LjMtMjAuMS0xMC42LTIyLjctMTIuNS0yMyA0LTEuOSA4LjUtMyAxMy4zLTN6bTEuNCAzNXExLjEtMC4zIDEuOS0xLjFjMTMuNyAxMi44IDIwLjcgMTIuNyAyMy4yIDExLjktNC41IDcuOS0xMi40IFxyXG4xMy42LTIxLjcgMTUuMSAxLjYtMi4xIDMuOS04LjYtMy40LTI1Ljl6bTIuOS02LjFjMTguNi04LjMgMTkuOS0xNSAxOS44LTE3LjEgNC4xIDUuMiA2LjUgMTEuNyA2LjUgMTguOHEwIDQtMSBcclxuNy43Yy0xLjQtMi40LTYuNS03LjEtMjUtNy4ycTAtMC4yIDAtMC41IDAtMC45LTAuMy0xLjd6bS02LjEgNS45djAuMXEwLTAuMSAwLTAuMXpcIi8+XHJcbjxwYXRoIGQ9XCJtODcuNSAxMTIuN3EwIDAgMCAwYzAtMC44IDAuMy0xLjUgMC42LTIuMXEwLjEgMCAwLjEtMC4xYzAuNi0xIDEuNy0xLjggMy0ycTAuMSAwIDAuMS0wLjEgMC40IDAgMC44IDAgMC43IDAgMS40IDAuMiAwLjEgXHJcbjAgMC4xIDAuMWMxLjMgMC40IDIuMiAxLjMgMi44IDIuNXEwIDAgMCAwLjEgMC4zIDAuOCAwLjMgMS43IDAgMC4zIDAgMC41IDAgMC4xIDAgMC4xYy0wLjEgMS0wLjYgMS45LTEuMyAyLjZxMCAwLjEgXHJcbjAgMC4xLTAuOCAwLjgtMS45IDEuMSAwIDAgMCAwLTAuNyAwLjMtMS40IDAuM2MtMC43IDAtMS4zLTAuMi0xLjgtMC40di0wLjFxMCAwIDAgMC4xYy0wLjctMC4zLTEuMy0wLjctMS43LTEuM3EtMC4xIFxyXG4wLTAuMS0wLjFjLTAuNi0wLjctMS0xLjgtMS0yLjlxMC0wLjEgMC0wLjN6XCIvPlxyXG48L2c+XHJcbjwvc3ZnPlxyXG48c3BhbiBjbGFzcz1cImwtd2hlZWxcIj48L3NwYW4+XHJcbjxzcGFuIGNsYXNzPVwici13aGVlbFwiPjwvc3Bhbj5cclxuPC9kaXY+YDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLndpbm5lcnMgPSBleHBvcnRzLmVuaWdpbmUgPSBleHBvcnRzLmdhcmFnZSA9IHZvaWQgMDtcclxudmFyIHVybHM7XHJcbihmdW5jdGlvbiAodXJscykge1xyXG4gICAgdXJsc1tcImdhcmFnZVwiXSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZVwiO1xyXG4gICAgdXJsc1tcImVuZ2luZVwiXSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2VuZ2luZVwiO1xyXG4gICAgdXJsc1tcIndpbm5lcnNcIl0gPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC93aW5uZXJzXCI7XHJcbn0pKHVybHMgfHwgKHVybHMgPSB7fSkpO1xyXG5jbGFzcyBHYXJhZ2Uge1xyXG4gICAgZ2V0Q2FyKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybHMuZ2FyYWdlICsgYC8ke2lkfWApO1xyXG4gICAgfVxyXG4gICAgZ2V0QWxsQ2FycygpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godXJscy5nYXJhZ2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0TGltaXRlZENhcnMocGFnZU4pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmV0Y2godXJscy5nYXJhZ2UgKyBgP19wYWdlPSR7cGFnZU59Jl9saW1pdD00YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhZGRDYXIoY2FyTmFtZSwgY2FyQ29sb3IpIHtcclxuICAgICAgICBmZXRjaCh1cmxzLmdhcmFnZSwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lOiBjYXJOYW1lLCBjb2xvcjogY2FyQ29sb3IgfSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVDYXIoaWQpIHtcclxuICAgICAgICBmZXRjaCh1cmxzLmdhcmFnZSArIGAvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVDYXIoaWQsIGNhck5hbWUsIGNhckNvbG9yKSB7XHJcbiAgICAgICAgZmV0Y2godXJscy5nYXJhZ2UgKyBgLyR7aWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWU6IGNhck5hbWUsIGNvbG9yOiBjYXJDb2xvciB9KSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBFbmdpbmUge1xyXG4gICAgc3RhcnQoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaCh1cmxzLmVuZ2luZSArIGA/aWQ9JHtpZH0mc3RhdHVzPXN0YXJ0ZWRgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdG9wKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgeWllbGQgZmV0Y2godXJscy5lbmdpbmUgKyBgP2lkPSR7aWR9JnN0YXR1cz1zdG9wcGVkYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRyaXZlKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2godXJscy5lbmdpbmUgKyBgP2lkPSR7aWR9JnN0YXR1cz1kcml2ZWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFdpbm5lcnMge1xyXG4gICAgZ2V0QWxsV2luZXJzKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmxzLndpbm5lcnMpO1xyXG4gICAgfVxyXG4gICAgZ2V0TGltaXRlZFdpbm5lcnMocGFnZU4pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICByZXR1cm4geWllbGQgZmV0Y2godXJscy53aW5uZXJzICsgYD9fcGFnZT0ke3BhZ2VOfSZfbGltaXQ9MTBgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFkZFdpbm5lcihpZCwgdGltZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKHVybHMud2lubmVycywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkOiBpZCwgd2luczogMSwgdGltZTogdGltZSB9KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRXaW5uZXIoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaCh1cmxzLndpbm5lcnMgKyBgLyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlV2lubmVyKGlkLCB3aW5zLCB0aW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2godXJscy53aW5uZXJzICsgYC8ke2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHdpbnM6IHdpbnMsIHRpbWU6IHRpbWUgfSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlV2lubmVyKGlkKSB7XHJcbiAgICAgICAgZmV0Y2godXJscy53aW5uZXJzICsgYC8ke2lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmdhcmFnZSA9IG5ldyBHYXJhZ2UoKTtcclxuZXhwb3J0cy5lbmlnaW5lID0gbmV3IEVuZ2luZSgpO1xyXG5leHBvcnRzLndpbm5lcnMgPSBuZXcgV2lubmVycygpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNob3dIaWRlID0gdm9pZCAwO1xyXG5jb25zdCBzaG93V2lubmVyc18xID0gcmVxdWlyZShcIi4uL2dldENhcnMmV2lubmVycy9zaG93V2lubmVyc1wiKTtcclxuZnVuY3Rpb24gc2hvd0hpZGUoKSB7XHJcbiAgICBjb25zdCBnYXJhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlLXZpZXcnKTtcclxuICAgIGNvbnN0IHdpbm5lcnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycy12aWV3Jyk7XHJcbiAgICBjb25zdCBnYXJhZ2VCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UnKTtcclxuICAgIGNvbnN0IHdpbm5lcnNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzJyk7XHJcbiAgICBnYXJhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoaWRlQmxvY2soZ2FyYWdlQmxvY2ssIHdpbm5lcnNCbG9jaykpO1xyXG4gICAgd2lubmVyc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBoaWRlQmxvY2sod2lubmVyc0Jsb2NrLCBnYXJhZ2VCbG9jayk7XHJcbiAgICAgICAgKDAsIHNob3dXaW5uZXJzXzEuc2hvd1dpbm5lcnMpKCk7XHJcbiAgICB9KTtcclxuICAgIGZ1bmN0aW9uIGhpZGVCbG9jayhzaG93aW5nRWwsIGhpZGluZ0VsKSB7XHJcbiAgICAgICAgc2hvd2luZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIGhpZGluZ0VsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc2hvd0hpZGUgPSBzaG93SGlkZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL290aGVycy9yZW5kZXJIdG1sXCIpO1xyXG5yZXF1aXJlKFwiLi92aWV3cy92aWV3XCIpO1xyXG5yZXF1aXJlKFwiLi9zdHlsZS5jc3NcIik7XHJcbnJlcXVpcmUoXCIuL2dldENhcnMmV2lubmVycy9hZGRDYXJcIik7XHJcbnJlcXVpcmUoXCIuL2dldENhcnMmV2lubmVycy9zaG93Q2FyXCIpO1xyXG5yZXF1aXJlKFwiLi9nZXRDYXJzJldpbm5lcnMvZGVsZXRlQ2FyXCIpO1xyXG5yZXF1aXJlKFwiLi9nZXRDYXJzJldpbm5lcnMvc3RhcnRTdG9wXCIpO1xyXG5yZXF1aXJlKFwiLi9nZXRDYXJzJldpbm5lcnMvcmFjZVwiKTtcclxucmVxdWlyZShcIi4vZ2V0Q2FycyZXaW5uZXJzL3Nob3dXaW5uZXJzXCIpO1xyXG5yZXF1aXJlKFwiLi9nZXRDYXJzJldpbm5lcnMvbW9kYWxXaW5kb3dcIik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==