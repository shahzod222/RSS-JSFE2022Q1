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
exports.race = void 0;
const renderHtml_1 = __webpack_require__(/*! ../others/renderHtml */ "./src/others/renderHtml.ts");
const types_1 = __webpack_require__(/*! ../types/types */ "./src/types/types.ts");
const startStop_1 = __webpack_require__(/*! ./startStop */ "./src/getCars&Winners/startStop.ts");
function race() {
    const startBtn = document.querySelector('.start-race');
    const resetBtn = document.querySelector('.reset-race');
    resetBtn.disabled = true;
    startBtn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
        startBtn.disabled = true;
        resetBtn.disabled = false;
        const res = yield types_1.garage.getLimitedCars(Number(renderHtml_1.pageNumber.innerHTML));
        const cars = (yield res.json());
        cars.forEach((el) => {
            const ABtn = (0, startStop_1.getButton)(document.querySelectorAll('.car-start'), String(el.id));
            const stopBtns = document.querySelectorAll('.car-stop');
            (0, startStop_1.start)(ABtn, String(el.id), stopBtns, startBtn, resetBtn);
        });
    }));
    resetBtn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
        resetBtn.disabled = true;
        startBtn.disabled = false;
        const res = yield types_1.garage.getLimitedCars(Number(renderHtml_1.pageNumber.innerHTML));
        const cars = (yield res.json());
        cars.forEach((el) => {
            const startBtns = document.querySelectorAll('.car-start');
            const stopBtn = (0, startStop_1.getButton)(document.querySelectorAll('.car-stop'), String(el.id));
            (0, startStop_1.stopRace)(stopBtn, String(el.id), startBtns);
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
        const carBlock = document.createElement('div');
        const carInfo = document.createElement('div');
        const startStop = document.createElement('div');
        const raceRoad = document.createElement('div');
        const carRoad = document.createElement('div');
        const car = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const startCar = document.createElement('button');
        const stopCar = document.createElement('button');
        const updateBtn = document.createElement('button');
        const carName = document.createElement('p');
        const carImg = document.createElement('span');
        const road = document.createElement('hr');
        const finishFlag = document.createElement('span');
        const carSmoke = document.createElement('span');
        carName.innerHTML = model;
        deleteBtn.innerHTML = 'Remove Car';
        startCar.innerHTML = 'A';
        stopCar.innerHTML = 'B';
        carImg.innerHTML = (0, svgIcons_1.svg)(color);
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
        updateBtn.className = 'update-btn';
        car.className = 'car-model';
        carSmoke.className = 'car-smoke';
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
        const car = document.getElementById(id);
        const icon = car.querySelector(`#car-${id}`);
        const parent = document.querySelector('.race-road');
        const stopBtn = getButton(stopBtns, id);
        const lWheel = icon.querySelector('.l-wheel');
        const rWheel = icon.querySelector('.r-wheel');
        const smoke = icon.querySelector('.car-smoke');
        stopBtn.disabled = false;
        el.disabled = true;
        const start = (yield types_1.enigine.start(Number(id)));
        const time = start.distance / start.velocity;
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
        let resetClicked = false;
        resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', () => {
            animation.cancel();
            clearTimeout(elPosition);
            lW.cancel();
            rW.cancel();
            smoke.style.display = 'none';
            stopBtn.disabled = true;
            resetClicked = true;
        });
        stopBtn.addEventListener('click', () => {
            animation.cancel();
            clearTimeout(elPosition);
            lW.cancel();
            rW.cancel();
            smoke.style.display = 'none';
            stopBtn.disabled = true;
            resetClicked = true;
        });
        const driveStatus = yield types_1.enigine.drive(Number(id));
        if (!resetClicked) {
            if (driveStatus === 500) {
                lW.cancel();
                rW.cancel();
                animation.pause();
                car.style.left = getComputedStyle(car).left;
                animation.cancel();
                clearTimeout(elPosition);
                smoke.style.display = 'block';
                if (startBtn)
                    startBtn.disabled = true;
            }
            else if (driveStatus === 200) {
                types_1.enigine.stop(Number(id));
                if (startBtn) {
                    stopBtn.disabled = false;
                    el.disabled = true;
                }
                if (!winner && startBtn) {
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
                }
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
const winnersPagination_1 = __webpack_require__(/*! ../getCars&Winners/winnersPagination */ "./src/getCars&Winners/winnersPagination.ts");
const view_1 = __webpack_require__(/*! ../views/view */ "./src/views/view.ts");
exports.cars = document.createElement('div');
exports.garageLength = document.createElement('p');
exports.pageNumber = document.createElement('p');
exports.prevPage = document.createElement('button');
exports.nextPage = document.createElement('button');
exports.winnersBlock = document.createElement('div');
function renderHtml() {
    return __awaiter(this, void 0, void 0, function* () {
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
        for (let i = 0; i < 2; i++) {
            const form = document.createElement('form');
            const inputText = document.createElement('input');
            const inputColor = document.createElement('input');
            const submitBtn = document.createElement('button');
            const raceBtn = document.createElement('button');
            form.action = '#';
            inputText.type = 'search';
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
            raceBtns.append(raceBtn);
        }
        paginationBlock.append(exports.prevPage);
        paginationBlock.append(exports.pageNumber);
        paginationBlock.append(exports.nextPage);
        modalBody.append(modalContent);
        viewBtns.append(garageBtn);
        viewBtns.append(winnersBtn);
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
        (0, race_1.race)();
        (0, generate100Cars_1.generate100Cars)();
        (0, showCar_1.showCar)();
        (0, pagination_1.pagination)();
        (0, winnersPagination_1.renderWinnersPagination)();
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
exports.svg = void 0;
function svg(color) {
    return `<div class="car-model"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 160" width="120" height="50">
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
</svg>
<span class="l-wheel"></span>
<span class="r-wheel"></span>
</div>
`;
}
exports.svg = svg;


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
const renderHtml_1 = __webpack_require__(/*! ./others/renderHtml */ "./src/others/renderHtml.ts");
__webpack_require__(/*! ./views/view */ "./src/views/view.ts");
__webpack_require__(/*! ./style.css */ "./src/style.css");
__webpack_require__(/*! ./getCars&Winners/addCar */ "./src/getCars&Winners/addCar.ts");
__webpack_require__(/*! ./getCars&Winners/showCar */ "./src/getCars&Winners/showCar.ts");
__webpack_require__(/*! ./getCars&Winners/deleteCar */ "./src/getCars&Winners/deleteCar.ts");
__webpack_require__(/*! ./getCars&Winners/startStop */ "./src/getCars&Winners/startStop.ts");
__webpack_require__(/*! ./getCars&Winners/race */ "./src/getCars&Winners/race.ts");
__webpack_require__(/*! ./getCars&Winners/showWinners */ "./src/getCars&Winners/showWinners.ts");
__webpack_require__(/*! ./getCars&Winners/modalWindow */ "./src/getCars&Winners/modalWindow.ts");
(0, renderHtml_1.renderHtml)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jc3Mvd2lubmVycy5jc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY3NzL2dhcmFnZS5jc3M/ZWY2YiIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2Nzcy93aW5uZXJzLmNzcz8xY2RmIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9hZGRDYXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvZGVsZXRlQ2FyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvZ2V0Q2FycyZXaW5uZXJzL2dlbmVyYXRlMTAwQ2Fycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9tb2RhbFdpbmRvdy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9wYWdpbmF0aW9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvZ2V0Q2FycyZXaW5uZXJzL3JhY2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvc2hvd0Nhci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9zaG93V2lubmVycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2dldENhcnMmV2lubmVycy9zdGFydFN0b3AudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9nZXRDYXJzJldpbm5lcnMvdXBkYXRlQ2FyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvZ2V0Q2FycyZXaW5uZXJzL3dpbm5lcnNQYWdpbmF0aW9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvb3RoZXJzL3JlbmRlckh0bWwudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9vdGhlcnMvc3ZnSWNvbnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy90eXBlcy90eXBlcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXdzL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvc21va2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3doZWVsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9maW5pc2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmZhbWlseT1VYnVudHU6d2dodEA1MDAmZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZmYW1pbHk9UFQrU2FucyZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2FycyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1ib2R5LFxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1ib2R5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogIzI4MmQzYztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjFmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi52aWV3LWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi52aWV3LWJ0bnMgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzU2YzZhOTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXctYnRucyBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzlhYzhlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5yYWNlLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nY29sb3InXTpkaXNhYmxlZCB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgb3BhY2l0eTogMC4zO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dFt0eXBlPSdjb2xvciddIHtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nY29sb3InXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsXFxyXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246ZGlzYWJsZWQsXFxyXFxuYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcclxcbiAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY2FyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1YmE1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jYXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NhMTQ1O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlbmd0aCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiAjZWRmMWZmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jYXItbmFtZSB7XFxyXFxuICAgIGNvbG9yOiAjYTBkYWE5O1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jYXItaWNvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgc3Ryb2tlOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1tb2RlbCB7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHN0cm9rZTogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jYXItc21va2Uge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMjBweDtcXHJcXG4gICAgbGVmdDogODVweDtcXHJcXG4gICAgYm90dG9tOiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubC13aGVlbCxcXHJcXG4uci13aGVlbCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWljb24gc3ZnIGcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubC13aGVlbCB7XFxyXFxuICAgIGJvdHRvbTogMzBweDtcXHJcXG4gICAgbGVmdDogMTIuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uci13aGVlbCB7XFxyXFxuICAgIGJvdHRvbTogNDlweDtcXHJcXG4gICAgbGVmdDogODlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1jYXIge1xcclxcbiAgICBtYXJnaW46IDAgMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2UzNjU0ZjtcXHJcXG59XFxyXFxuLnJlbW92ZS1jYXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0MTI0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXN0YXJ0IHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VuLWNhcnMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucm9hZCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm90dG9tOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLXJvYWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtc3RvcCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1zdG9wIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZGF0ZS1idG4sXFxyXFxuLnVwZGF0ZS1jYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNDU3MmJhO1xcclxcbn1cXHJcXG5cXHJcXG4udXBkYXRlLWJ0bjpob3ZlcixcXHJcXG4udXBkYXRlLWNhcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzNDU2OGI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1yYWNlLFxcclxcbi5yZXNldC1yYWNlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2Y1ZGY0ZDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXJhY2U6aG92ZXIsXFxyXFxuLnJlc2V0LXJhY2U6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjFkMzBlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFjZS1yb2FkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmlzaC1pY29uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTUwcHggMTBweDtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiA0MnB4O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICByaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2luYXRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjNweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnLW51bSB7XFxyXFxuICAgIGNvbG9yOiAjZWRmMWZmO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMCA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnLXByZXYtYnRuLFxcclxcbi5wYWctbmV4dC1idG4ge1xcclxcbiAgICB3aWR0aDogNTJweDtcXHJcXG4gICAgaGVpZ2h0OiA1MnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwZGFhOTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnLXByZXYtYnRuOmhvdmVyLFxcclxcbi5wYWctbmV4dC1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmNjNjdhO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2dhcmFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdC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aUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9DQUFvQztJQUNwQyxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmZhbWlseT1VYnVudHU6d2dodEA1MDAmZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZmYW1pbHk9UFQrU2FucyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4uY2FycyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1ib2R5LFxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1ib2R5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogIzI4MmQzYztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjFmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi52aWV3LWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi52aWV3LWJ0bnMgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzU2YzZhOTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXctYnRucyBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzlhYzhlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5yYWNlLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nY29sb3InXTpkaXNhYmxlZCB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgb3BhY2l0eTogMC4zO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dFt0eXBlPSdjb2xvciddIHtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDQycHg7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nY29sb3InXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsXFxyXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246ZGlzYWJsZWQsXFxyXFxuYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcclxcbiAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY2FyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk1YmE1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jYXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2NhMTQ1O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyLWJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlbmd0aCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiAjZWRmMWZmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jYXItbmFtZSB7XFxyXFxuICAgIGNvbG9yOiAjYTBkYWE5O1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jYXItaWNvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgc3Ryb2tlOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1tb2RlbCB7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHN0cm9rZTogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jYXItc21va2Uge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9zbW9rZS5wbmcnKTtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IDIwcHg7XFxyXFxuICAgIGxlZnQ6IDg1cHg7XFxyXFxuICAgIGJvdHRvbTogNTBweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmwtd2hlZWwsXFxyXFxuLnItd2hlZWwge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL3doZWVsLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5jYXItaWNvbiBzdmcgZyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sLXdoZWVsIHtcXHJcXG4gICAgYm90dG9tOiAzMHB4O1xcclxcbiAgICBsZWZ0OiAxMi41cHg7XFxyXFxufVxcclxcblxcclxcbi5yLXdoZWVsIHtcXHJcXG4gICAgYm90dG9tOiA0OXB4O1xcclxcbiAgICBsZWZ0OiA4OXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlLWNhciB7XFxyXFxuICAgIG1hcmdpbjogMCAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZTM2NTRmO1xcclxcbn1cXHJcXG4ucmVtb3ZlLWNhcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNkZDQxMjQ7XFxyXFxufVxcclxcblxcclxcbi5jYXItc3RhcnQge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5nZW4tY2FycyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5yb2FkIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3R0b206IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXItcm9hZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1zdG9wIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXN0b3AgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udXBkYXRlLWJ0bixcXHJcXG4udXBkYXRlLWNhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0NTcyYmE7XFxyXFxufVxcclxcblxcclxcbi51cGRhdGUtYnRuOmhvdmVyLFxcclxcbi51cGRhdGUtY2FyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzM0NTY4YjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXJhY2UsXFxyXFxuLnJlc2V0LXJhY2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjVkZjRkO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtcmFjZTpob3ZlcixcXHJcXG4ucmVzZXQtcmFjZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmMWQzMGU7XFxyXFxufVxcclxcblxcclxcbi5yYWNlLXJvYWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluaXNoLWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvZmluaXNoLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1MHB4IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogNDJweDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcmlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdpbmF0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZy1udW0ge1xcclxcbiAgICBjb2xvcjogI2VkZjFmZjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDAgNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZy1wcmV2LWJ0bixcXHJcXG4ucGFnLW5leHQtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDUycHg7XFxyXFxuICAgIGhlaWdodDogNTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGRhYTk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZy1wcmV2LWJ0bjpob3ZlcixcXHJcXG4ucGFnLW5leHQtYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZjYzY3YTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK1NsYWI6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLndpbm5lcnMsXFxyXFxuLndpbm5lcnMtY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVycy1jb250ZW50IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lcnMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXHJcXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGhlYWQgdHIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ODc5O1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGgsXFxyXFxudGFibGUgdGQge1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRib2R5IHRyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHRib2R5IHRyOm50aC1vZi10eXBlKGV2ZW4pIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGJvZHkgdHI6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDk4Nzk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvd2lubmVycy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4ud2lubmVycyxcXHJcXG4ud2lubmVycy1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXJzLWNvbnRlbnQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVycyB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBtYXJnaW46IDI1cHggMDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcclxcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0aGVhZCB0ciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk4Nzk7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0aCxcXHJcXG50YWJsZSB0ZCB7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGJvZHkgdHIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgdGJvZHkgdHI6bnRoLW9mLXR5cGUoZXZlbikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB0Ym9keSB0cjpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwOTg3OTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM5NDU7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2Mzk0NTtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhcmFnZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhcmFnZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2lubmVycy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbm5lcnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuYWRkTmV3Q2FyID0gdm9pZCAwO1xyXG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzL3R5cGVzXCIpO1xyXG5jb25zdCBzaG93Q2FyXzEgPSByZXF1aXJlKFwiLi9zaG93Q2FyXCIpO1xyXG5mdW5jdGlvbiBhZGROZXdDYXIoKSB7XHJcbiAgICBjb25zdCBhZGRDYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWNhcicpO1xyXG4gICAgY29uc3QgY2FyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XHJcbiAgICBjb25zdCBjYXJDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcicpO1xyXG4gICAgYWRkQ2FyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoY2FyTmFtZS52YWx1ZSkge1xyXG4gICAgICAgICAgICB0eXBlc18xLmdhcmFnZS5hZGRDYXIoY2FyTmFtZS52YWx1ZSwgY2FyQ29sb3IudmFsdWUpO1xyXG4gICAgICAgICAgICAoMCwgc2hvd0Nhcl8xLnNob3dDYXIpKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY2FyTmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBjYXJDb2xvci52YWx1ZSA9ICcjZmZmZmZmJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmFkZE5ld0NhciA9IGFkZE5ld0NhcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlbGV0ZUNhciA9IHZvaWQgMDtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy90eXBlc1wiKTtcclxuY29uc3Qgc2hvd0Nhcl8xID0gcmVxdWlyZShcIi4vc2hvd0NhclwiKTtcclxuZnVuY3Rpb24gZGVsZXRlQ2FyKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZS1jYXInKTtcclxuICAgICAgICBkZWxldGVCdG5zLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHlwZXNfMS5nYXJhZ2UucmVtb3ZlQ2FyKE51bWJlcihlbC5uYW1lKSk7XHJcbiAgICAgICAgICAgICAgICB0eXBlc18xLndpbm5lcnMucmVtb3ZlV2lubmVyKE51bWJlcihlbC5uYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAoMCwgc2hvd0Nhcl8xLnNob3dDYXIpKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5kZWxldGVDYXIgPSBkZWxldGVDYXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nZW5lcmF0ZTEwMENhcnMgPSB2b2lkIDA7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXMvdHlwZXNcIik7XHJcbmNvbnN0IHNob3dDYXJfMSA9IHJlcXVpcmUoXCIuL3Nob3dDYXJcIik7XHJcbmZ1bmN0aW9uIGdlbmVyYXRlMTAwQ2FycygpIHtcclxuICAgIGNvbnN0IGdlbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW4tY2FycycpO1xyXG4gICAgZ2VuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGdlbmVyYXRlQ2FyKCk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdlbmVyYXRlMTAwQ2FycyA9IGdlbmVyYXRlMTAwQ2FycztcclxuZnVuY3Rpb24gZ2VuZXJhdGVDYXIoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKCdodHRwczovL3ByaXZhdGUtMTYxZGYtY2Fyc2FwaTEuYXBpYXJ5LW1vY2suY29tL2NhcnMnKTtcclxuICAgICAgICBjb25zdCBjYXJzID0gKHlpZWxkIHJlcy5qc29uKCkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tQ29sb3IgPSBgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gO1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYXJzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBgJHtjYXBGaXJzdExldHRlcihjYXJzW3JhbmRvbU51bWJlcl0ubWFrZSl9ICR7Y2FwRmlyc3RMZXR0ZXIoY2Fyc1tyYW5kb21OdW1iZXJdLm1vZGVsKX1gO1xyXG4gICAgICAgICAgICB0eXBlc18xLmdhcmFnZS5hZGRDYXIobmFtZSwgcmFuZG9tQ29sb3IpO1xyXG4gICAgICAgICAgICAoMCwgc2hvd0Nhcl8xLnNob3dDYXIpKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2FwRmlyc3RMZXR0ZXIoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zaG93TW9kYWwgPSB2b2lkIDA7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXMvdHlwZXNcIik7XHJcbmZ1bmN0aW9uIHNob3dNb2RhbChpZCwgdGltZSkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYm9keScpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IG1vZGFsQm9keS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpO1xyXG4gICAgICAgIGNvbnN0IHJlc1dpbm5lck5hbWUgPSB5aWVsZCB0eXBlc18xLmdhcmFnZS5nZXRDYXIoaWQpO1xyXG4gICAgICAgIGNvbnN0IHdpbm5lck5hbWUgPSAoeWllbGQgcmVzV2lubmVyTmFtZS5qc29uKCkpLm5hbWU7XHJcbiAgICAgICAgbW9kYWxCb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBgV2lubmVyOiAke3dpbm5lck5hbWV9PGJyPlRpbWU6ICR7dGltZX1zYDtcclxuICAgICAgICBtb2RhbEJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdtb2RhbC1ib2R5Jykge1xyXG4gICAgICAgICAgICAgICAgbW9kYWxCb2R5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNob3dNb2RhbCA9IHNob3dNb2RhbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5wYWdpbmF0aW9uID0gdm9pZCAwO1xyXG5jb25zdCByZW5kZXJIdG1sXzEgPSByZXF1aXJlKFwiLi4vb3RoZXJzL3JlbmRlckh0bWxcIik7XHJcbmNvbnN0IHNob3dDYXJfMSA9IHJlcXVpcmUoXCIuL3Nob3dDYXJcIik7XHJcbmZ1bmN0aW9uIHBhZ2luYXRpb24oKSB7XHJcbiAgICByZW5kZXJIdG1sXzEubmV4dFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MID0gYCR7TnVtYmVyKHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCkgKyAxfWA7XHJcbiAgICAgICAgKDAsIHNob3dDYXJfMS5zaG93Q2FyKSgpO1xyXG4gICAgfSk7XHJcbiAgICByZW5kZXJIdG1sXzEucHJldlBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MID0gYCR7TnVtYmVyKHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCkgLSAxfWA7XHJcbiAgICAgICAgKDAsIHNob3dDYXJfMS5zaG93Q2FyKSgpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5wYWdpbmF0aW9uID0gcGFnaW5hdGlvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnJhY2UgPSB2b2lkIDA7XHJcbmNvbnN0IHJlbmRlckh0bWxfMSA9IHJlcXVpcmUoXCIuLi9vdGhlcnMvcmVuZGVySHRtbFwiKTtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy90eXBlc1wiKTtcclxuY29uc3Qgc3RhcnRTdG9wXzEgPSByZXF1aXJlKFwiLi9zdGFydFN0b3BcIik7XHJcbmZ1bmN0aW9uIHJhY2UoKSB7XHJcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1yYWNlJyk7XHJcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1yYWNlJyk7XHJcbiAgICByZXNldEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcmVzZXRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCB0eXBlc18xLmdhcmFnZS5nZXRMaW1pdGVkQ2FycyhOdW1iZXIocmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MKSk7XHJcbiAgICAgICAgY29uc3QgY2FycyA9ICh5aWVsZCByZXMuanNvbigpKTtcclxuICAgICAgICBjYXJzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IEFCdG4gPSAoMCwgc3RhcnRTdG9wXzEuZ2V0QnV0dG9uKShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLXN0YXJ0JyksIFN0cmluZyhlbC5pZCkpO1xyXG4gICAgICAgICAgICBjb25zdCBzdG9wQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXItc3RvcCcpO1xyXG4gICAgICAgICAgICAoMCwgc3RhcnRTdG9wXzEuc3RhcnQpKEFCdG4sIFN0cmluZyhlbC5pZCksIHN0b3BCdG5zLCBzdGFydEJ0biwgcmVzZXRCdG4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkpO1xyXG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgcmVzZXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgcmVzID0geWllbGQgdHlwZXNfMS5nYXJhZ2UuZ2V0TGltaXRlZENhcnMoTnVtYmVyKHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCkpO1xyXG4gICAgICAgIGNvbnN0IGNhcnMgPSAoeWllbGQgcmVzLmpzb24oKSk7XHJcbiAgICAgICAgY2Fycy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLXN0YXJ0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3BCdG4gPSAoMCwgc3RhcnRTdG9wXzEuZ2V0QnV0dG9uKShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLXN0b3AnKSwgU3RyaW5nKGVsLmlkKSk7XHJcbiAgICAgICAgICAgICgwLCBzdGFydFN0b3BfMS5zdG9wUmFjZSkoc3RvcEJ0biwgU3RyaW5nKGVsLmlkKSwgc3RhcnRCdG5zKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pKTtcclxufVxyXG5leHBvcnRzLnJhY2UgPSByYWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc2hvd0NhciA9IHZvaWQgMDtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy90eXBlc1wiKTtcclxuY29uc3QgZGVsZXRlQ2FyXzEgPSByZXF1aXJlKFwiLi9kZWxldGVDYXJcIik7XHJcbmNvbnN0IHN2Z0ljb25zXzEgPSByZXF1aXJlKFwiLi4vb3RoZXJzL3N2Z0ljb25zXCIpO1xyXG5jb25zdCBzdGFydFN0b3BfMSA9IHJlcXVpcmUoXCIuL3N0YXJ0U3RvcFwiKTtcclxuY29uc3QgcmVuZGVySHRtbF8xID0gcmVxdWlyZShcIi4uL290aGVycy9yZW5kZXJIdG1sXCIpO1xyXG5jb25zdCB1cGRhdGVDYXJfMSA9IHJlcXVpcmUoXCIuL3VwZGF0ZUNhclwiKTtcclxucmVxdWlyZShcIi4uL2Nzcy9nYXJhZ2UuY3NzXCIpO1xyXG5mdW5jdGlvbiBzaG93Q2FyKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCByZXNBbGxDYXJzID0geWllbGQgdHlwZXNfMS5nYXJhZ2UuZ2V0QWxsQ2FycygpO1xyXG4gICAgICAgIGNvbnN0IGFsbENhcnMgPSAoeWllbGQgcmVzQWxsQ2Fycy5qc29uKCkpO1xyXG4gICAgICAgIGNoZWNrUGFnQnRucyhhbGxDYXJzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgcmVzUGFnZWRDYXJzID0geWllbGQgdHlwZXNfMS5nYXJhZ2UuZ2V0TGltaXRlZENhcnMoTnVtYmVyKHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCkpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSAoeWllbGQgcmVzUGFnZWRDYXJzLmpzb24oKSk7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLmNhcnMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLmdhcmFnZUxlbmd0aC5pbm5lckhUTUwgPSBgR2FyYWdlOiAke1N0cmluZyhhbGxDYXJzLmxlbmd0aCl9YDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2hvd0NhckluSHRtbChkYXRhW2ldLm5hbWUsIGRhdGFbaV0uY29sb3IsIGRhdGFbaV0uaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAoMCwgc3RhcnRTdG9wXzEuc3RhcnRDYXIpKCk7XHJcbiAgICAgICAgKDAsIHN0YXJ0U3RvcF8xLnN0b3BDYXIpKCk7XHJcbiAgICAgICAgKDAsIHVwZGF0ZUNhcl8xLnVwZGF0ZUNhcikoKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2hvd0NhciA9IHNob3dDYXI7XHJcbmZ1bmN0aW9uIHNob3dDYXJJbkh0bWwobW9kZWwsIGNvbG9yLCBpZCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBjYXJCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGNhckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBzdGFydFN0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCByYWNlUm9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGNhclJvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBjYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBzdGFydENhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IHN0b3BDYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBjYXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGNhckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjb25zdCByb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuICAgICAgICBjb25zdCBmaW5pc2hGbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNvbnN0IGNhclNtb2tlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNhck5hbWUuaW5uZXJIVE1MID0gbW9kZWw7XHJcbiAgICAgICAgZGVsZXRlQnRuLmlubmVySFRNTCA9ICdSZW1vdmUgQ2FyJztcclxuICAgICAgICBzdGFydENhci5pbm5lckhUTUwgPSAnQSc7XHJcbiAgICAgICAgc3RvcENhci5pbm5lckhUTUwgPSAnQic7XHJcbiAgICAgICAgY2FySW1nLmlubmVySFRNTCA9ICgwLCBzdmdJY29uc18xLnN2ZykoY29sb3IpO1xyXG4gICAgICAgIHVwZGF0ZUJ0bi5pbm5lckhUTUwgPSAnVXBkYXRlIENhcic7XHJcbiAgICAgICAgZGVsZXRlQnRuLm5hbWUgPSBTdHJpbmcoaWQpO1xyXG4gICAgICAgIHN0YXJ0Q2FyLm5hbWUgPSBTdHJpbmcoaWQpO1xyXG4gICAgICAgIHN0b3BDYXIubmFtZSA9IFN0cmluZyhpZCk7XHJcbiAgICAgICAgY2FyLmlkID0gU3RyaW5nKGlkKTtcclxuICAgICAgICBjYXJJbWcuaWQgPSBgY2FyLSR7U3RyaW5nKGlkKX1gO1xyXG4gICAgICAgIHVwZGF0ZUJ0bi5uYW1lID0gU3RyaW5nKGlkKTtcclxuICAgICAgICBjYXJOYW1lLmlkID0gYG5hbWUtJHtTdHJpbmcoaWQpfWA7XHJcbiAgICAgICAgY2FyQmxvY2suY2xhc3NOYW1lID0gJ2Nhci1ibG9jayc7XHJcbiAgICAgICAgY2FySW5mby5jbGFzc05hbWUgPSAnY2FyLWluZm8nO1xyXG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAncmVtb3ZlLWNhcic7XHJcbiAgICAgICAgY2FyTmFtZS5jbGFzc05hbWUgPSAnY2FyLW5hbWUnO1xyXG4gICAgICAgIGNhckltZy5jbGFzc05hbWUgPSBgY2FyLWljb24gJHttb2RlbH1gO1xyXG4gICAgICAgIHJvYWQuY2xhc3NOYW1lID0gJ3JvYWQnO1xyXG4gICAgICAgIHN0YXJ0Q2FyLmNsYXNzTmFtZSA9ICdjYXItc3RhcnQnO1xyXG4gICAgICAgIHN0b3BDYXIuY2xhc3NOYW1lID0gJ2Nhci1zdG9wJztcclxuICAgICAgICBjYXJSb2FkLmNsYXNzTmFtZSA9ICdjYXItcm9hZCc7XHJcbiAgICAgICAgc3RhcnRTdG9wLmNsYXNzTmFtZSA9ICdzdGFydC1zdG9wJztcclxuICAgICAgICByYWNlUm9hZC5jbGFzc05hbWUgPSAncmFjZS1yb2FkJztcclxuICAgICAgICBmaW5pc2hGbGFnLmNsYXNzTmFtZSA9ICdmaW5pc2gtaWNvbic7XHJcbiAgICAgICAgdXBkYXRlQnRuLmNsYXNzTmFtZSA9ICd1cGRhdGUtYnRuJztcclxuICAgICAgICBjYXIuY2xhc3NOYW1lID0gJ2Nhci1tb2RlbCc7XHJcbiAgICAgICAgY2FyU21va2UuY2xhc3NOYW1lID0gJ2Nhci1zbW9rZSc7XHJcbiAgICAgICAgc3RvcENhci5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2FyQmxvY2suYXBwZW5kKGNhckluZm8pO1xyXG4gICAgICAgIGNhckJsb2NrLmFwcGVuZChjYXJSb2FkKTtcclxuICAgICAgICBjYXJCbG9jay5hcHBlbmQocm9hZCk7XHJcbiAgICAgICAgY2FySW5mby5hcHBlbmQodXBkYXRlQnRuKTtcclxuICAgICAgICBjYXJJbmZvLmFwcGVuZChkZWxldGVCdG4pO1xyXG4gICAgICAgIGNhckluZm8uYXBwZW5kKGNhck5hbWUpO1xyXG4gICAgICAgIGNhclJvYWQuYXBwZW5kKHN0YXJ0U3RvcCk7XHJcbiAgICAgICAgY2FyUm9hZC5hcHBlbmQocmFjZVJvYWQpO1xyXG4gICAgICAgIHN0YXJ0U3RvcC5hcHBlbmQoc3RhcnRDYXIpO1xyXG4gICAgICAgIHN0YXJ0U3RvcC5hcHBlbmQoc3RvcENhcik7XHJcbiAgICAgICAgcmFjZVJvYWQuYXBwZW5kKGNhcik7XHJcbiAgICAgICAgcmFjZVJvYWQuYXBwZW5kKGZpbmlzaEZsYWcpO1xyXG4gICAgICAgIGNhci5hcHBlbmQoY2FySW1nKTtcclxuICAgICAgICBjYXJJbWcuYXBwZW5kKGNhclNtb2tlKTtcclxuICAgICAgICByZW5kZXJIdG1sXzEuY2Fycy5hcHBlbmQoY2FyQmxvY2spO1xyXG4gICAgICAgICgwLCBkZWxldGVDYXJfMS5kZWxldGVDYXIpKCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGVja1BhZ0J0bnMoYWxsQ2Fyc0xlbmd0aCkge1xyXG4gICAgaWYgKChOdW1iZXIocmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MKSAtIDEpICogNCA9PT0gYWxsQ2Fyc0xlbmd0aCkge1xyXG4gICAgICAgIHJlbmRlckh0bWxfMS5wYWdlTnVtYmVyLmlubmVySFRNTCA9IFN0cmluZyhOdW1iZXIocmVuZGVySHRtbF8xLnBhZ2VOdW1iZXIuaW5uZXJIVE1MKSAtIDEpO1xyXG4gICAgfVxyXG4gICAgaWYgKE51bWJlcihyZW5kZXJIdG1sXzEucGFnZU51bWJlci5pbm5lckhUTUwpICogNCA+PSBhbGxDYXJzTGVuZ3RoKSB7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLm5leHRQYWdlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlbmRlckh0bWxfMS5uZXh0UGFnZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKE51bWJlcihyZW5kZXJIdG1sXzEucGFnZU51bWJlci5pbm5lckhUTUwpID09PSAxKSB7XHJcbiAgICAgICAgcmVuZGVySHRtbF8xLnByZXZQYWdlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlbmRlckh0bWxfMS5wcmV2UGFnZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zaG93V2lubmVycyA9IHZvaWQgMDtcclxuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlcy90eXBlc1wiKTtcclxucmVxdWlyZShcIi4uL2Nzcy93aW5uZXJzLmNzc1wiKTtcclxuY29uc3QgcmVuZGVySHRtbF8xID0gcmVxdWlyZShcIi4uL290aGVycy9yZW5kZXJIdG1sXCIpO1xyXG5jb25zdCBzdmdJY29uc18xID0gcmVxdWlyZShcIi4uL290aGVycy9zdmdJY29uc1wiKTtcclxuY29uc3Qgd2lubmVyc1BhZ2luYXRpb25fMSA9IHJlcXVpcmUoXCIuL3dpbm5lcnNQYWdpbmF0aW9uXCIpO1xyXG5jb25zdCB3aW5uZXJzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbmNvbnN0IHRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuY29uc3QgdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XHJcbmZ1bmN0aW9uIHNob3dXaW5uZXJzKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCByZXMgPSB5aWVsZCB0eXBlc18xLndpbm5lcnMuZ2V0TGltaXRlZFdpbm5lcnMoTnVtYmVyKHdpbm5lcnNQYWdpbmF0aW9uXzEud2lubmVyc1BhZ2VOdW1iZXIuaW5uZXJIVE1MKSk7XHJcbiAgICAgICAgY29uc3QgcGFnZWRXaW5uZXJzID0gKHlpZWxkIHJlcy5qc29uKCkpO1xyXG4gICAgICAgIGNvbnN0IHJlczIgPSB5aWVsZCB0eXBlc18xLndpbm5lcnMuZ2V0QWxsV2luZXJzKCk7XHJcbiAgICAgICAgY29uc3QgYWxsV2lubmVycyA9ICh5aWVsZCByZXMyLmpzb24oKSk7XHJcbiAgICAgICAgY2hlY2tQYWdpbmF0aW9uKGFsbFdpbm5lcnMubGVuZ3RoKTtcclxuICAgICAgICB0SGVhZGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRCb2R5LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHdpbm5lcnNDb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHdpbm5lcnNDb250ZW50LmNsYXNzTmFtZSA9ICd3aW5uZXJzLWNvbnRlbnQnO1xyXG4gICAgICAgIGNvbnN0IHdpbm5lcnNMZW5ndGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgd2lubmVyc0xlbmd0aC5jbGFzc05hbWUgPSAnbGVuZ3RoJztcclxuICAgICAgICB3aW5uZXJzTGVuZ3RoLmlubmVySFRNTCA9IGBXaW5uZXJzOiAke2FsbFdpbm5lcnMubGVuZ3RofWA7XHJcbiAgICAgICAgd2lubmVyc0NvbnRlbnQuYXBwZW5kKHdpbm5lcnNMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlSGVhZGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGFibGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMClcclxuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyLmlubmVySFRNTCA9ICfihJYnO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMSlcclxuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyLmlubmVySFRNTCA9ICdJbWFnZSc7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAyKVxyXG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXIuaW5uZXJIVE1MID0gJ05hbWUnO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMylcclxuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyLmlubmVySFRNTCA9ICdXaW5zJztcclxuICAgICAgICAgICAgaWYgKGkgPT09IDQpXHJcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlci5pbm5lckhUTUwgPSAnVGltZSc7XHJcbiAgICAgICAgICAgIHRhYmxlSGVhZGVycy5hcHBlbmQodGFibGVIZWFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0SGVhZGVyLmFwcGVuZCh0YWJsZUhlYWRlcnMpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZCh0SGVhZGVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VkV2lubmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB5aWVsZCBzaG93V2lubmVySW5IdG1sKGkgKyAxLCBwYWdlZFdpbm5lcnNbaV0uaWQsIHBhZ2VkV2lubmVyc1tpXS53aW5zLCBwYWdlZFdpbm5lcnNbaV0udGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlLmFwcGVuZCh0Qm9keSk7XHJcbiAgICAgICAgd2lubmVyc0NvbnRlbnQuYXBwZW5kKHRhYmxlKTtcclxuICAgICAgICByZW5kZXJIdG1sXzEud2lubmVyc0Jsb2NrLmFwcGVuZCh3aW5uZXJzQ29udGVudCk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnNob3dXaW5uZXJzID0gc2hvd1dpbm5lcnM7XHJcbmZ1bmN0aW9uIHNob3dXaW5uZXJJbkh0bWwocG9zaXRpb24sIGlkLCB3aW5zLCB0aW1lKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHJlc0Nhck5hbWUgPSB5aWVsZCB0eXBlc18xLmdhcmFnZS5nZXRDYXIoaWQpO1xyXG4gICAgICAgIGNvbnN0IGNhciA9ICh5aWVsZCByZXNDYXJOYW1lLmpzb24oKSk7XHJcbiAgICAgICAgY29uc3QgY2FyTmFtZSA9IGNhci5uYW1lO1xyXG4gICAgICAgIGNvbnN0IGNhckNvbG9yID0gY2FyLmNvbG9yO1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgIGlmIChqID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcm93Q29udGVudC5pbm5lckhUTUwgPSBTdHJpbmcocG9zaXRpb24pO1xyXG4gICAgICAgICAgICBpZiAoaiA9PT0gMSlcclxuICAgICAgICAgICAgICAgIHJvd0NvbnRlbnQuaW5uZXJIVE1MID0gKDAsIHN2Z0ljb25zXzEuc3ZnKShjYXJDb2xvcik7XHJcbiAgICAgICAgICAgIGlmIChqID09PSAyKVxyXG4gICAgICAgICAgICAgICAgcm93Q29udGVudC5pbm5lckhUTUwgPSBjYXJOYW1lO1xyXG4gICAgICAgICAgICBpZiAoaiA9PT0gMylcclxuICAgICAgICAgICAgICAgIHJvd0NvbnRlbnQuaW5uZXJIVE1MID0gU3RyaW5nKHdpbnMpO1xyXG4gICAgICAgICAgICBpZiAoaiA9PT0gNClcclxuICAgICAgICAgICAgICAgIHJvd0NvbnRlbnQuaW5uZXJIVE1MID0gU3RyaW5nKHRpbWUpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kKHJvd0NvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0Qm9keS5hcHBlbmQocm93KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoZWNrUGFnaW5hdGlvbihhbGxXaW5ubmVyc0xlbmd0aCkge1xyXG4gICAgaWYgKE51bWJlcih3aW5uZXJzUGFnaW5hdGlvbl8xLndpbm5lcnNQYWdlTnVtYmVyLmlubmVySFRNTCkgKiAxMCA+PSBhbGxXaW5ubmVyc0xlbmd0aCkge1xyXG4gICAgICAgIHdpbm5lcnNQYWdpbmF0aW9uXzEubmV4dEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB3aW5uZXJzUGFnaW5hdGlvbl8xLm5leHRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChOdW1iZXIod2lubmVyc1BhZ2luYXRpb25fMS53aW5uZXJzUGFnZU51bWJlci5pbm5lckhUTUwpID09PSAxKSB7XHJcbiAgICAgICAgd2lubmVyc1BhZ2luYXRpb25fMS5wcmV2QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHdpbm5lcnNQYWdpbmF0aW9uXzEucHJldkJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nZXRCdXR0b24gPSBleHBvcnRzLnN0YXJ0ID0gZXhwb3J0cy5zdG9wUmFjZSA9IGV4cG9ydHMuc3RvcENhciA9IGV4cG9ydHMuc3RhcnRDYXIgPSB2b2lkIDA7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXMvdHlwZXNcIik7XHJcbmNvbnN0IG1vZGFsV2luZG93XzEgPSByZXF1aXJlKFwiLi9tb2RhbFdpbmRvd1wiKTtcclxuY29uc3Qgc2hvd1dpbm5lcnNfMSA9IHJlcXVpcmUoXCIuL3Nob3dXaW5uZXJzXCIpO1xyXG5mdW5jdGlvbiBzdGFydENhcigpIHtcclxuICAgIGNvbnN0IHN0YXJ0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXItc3RhcnQnKTtcclxuICAgIGNvbnN0IHN0b3BCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhci1zdG9wJyk7XHJcbiAgICBzdGFydEJ0bnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgc3RhcnQoZWwsIGVsLm5hbWUsIHN0b3BCdG5zKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnN0YXJ0Q2FyID0gc3RhcnRDYXI7XHJcbmZ1bmN0aW9uIHN0b3BDYXIoKSB7XHJcbiAgICBjb25zdCBzdGFydEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLXN0YXJ0Jyk7XHJcbiAgICBjb25zdCBzdG9wQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXItc3RvcCcpO1xyXG4gICAgc3RvcEJ0bnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgc3RvcFJhY2UoZWwsIGVsLm5hbWUsIHN0YXJ0QnRucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnN0b3BDYXIgPSBzdG9wQ2FyO1xyXG5sZXQgd2lubmVyID0gMDtcclxuZnVuY3Rpb24gc3RvcFJhY2UoZWwsIGlkLCBzdGFydEJ0bnMpIHtcclxuICAgIGNvbnN0IGNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGNvbnN0IGljb24gPSBjYXIucXVlcnlTZWxlY3RvcihgI2Nhci0ke2lkfWApO1xyXG4gICAgd2lubmVyID0gMDtcclxuICAgIGNvbnN0IHNtb2tlID0gaWNvbi5xdWVyeVNlbGVjdG9yKCcuY2FyLXNtb2tlJyk7XHJcbiAgICBzbW9rZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZ2V0QnV0dG9uKHN0YXJ0QnRucywgaWQpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBlbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBjYXIuc3R5bGUubGVmdCA9ICcwJztcclxuICAgIHR5cGVzXzEuZW5pZ2luZS5zdG9wKE51bWJlcihpZCkpO1xyXG59XHJcbmV4cG9ydHMuc3RvcFJhY2UgPSBzdG9wUmFjZTtcclxuZnVuY3Rpb24gc3RhcnQoZWwsIGlkLCBzdG9wQnRucywgc3RhcnRCdG4sIHJlc2V0QnRuKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IGNhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICBjb25zdCBpY29uID0gY2FyLnF1ZXJ5U2VsZWN0b3IoYCNjYXItJHtpZH1gKTtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFjZS1yb2FkJyk7XHJcbiAgICAgICAgY29uc3Qgc3RvcEJ0biA9IGdldEJ1dHRvbihzdG9wQnRucywgaWQpO1xyXG4gICAgICAgIGNvbnN0IGxXaGVlbCA9IGljb24ucXVlcnlTZWxlY3RvcignLmwtd2hlZWwnKTtcclxuICAgICAgICBjb25zdCByV2hlZWwgPSBpY29uLnF1ZXJ5U2VsZWN0b3IoJy5yLXdoZWVsJyk7XHJcbiAgICAgICAgY29uc3Qgc21va2UgPSBpY29uLnF1ZXJ5U2VsZWN0b3IoJy5jYXItc21va2UnKTtcclxuICAgICAgICBzdG9wQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgZWwuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gKHlpZWxkIHR5cGVzXzEuZW5pZ2luZS5zdGFydChOdW1iZXIoaWQpKSk7XHJcbiAgICAgICAgY29uc3QgdGltZSA9IHN0YXJ0LmRpc3RhbmNlIC8gc3RhcnQudmVsb2NpdHk7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gY2FyLmFuaW1hdGUoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAnMHB4JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogYCR7cGFyZW50LmNsaWVudFdpZHRoIC0gMTYzfXB4YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLCB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aW1lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGxXID0gbFdoZWVsLmFuaW1hdGUoW3sgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyB9LCB7IHRyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpJyB9XSwgeyBkdXJhdGlvbjogdGltZSB9KTtcclxuICAgICAgICBjb25zdCByVyA9IHJXaGVlbC5hbmltYXRlKFt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScgfSwgeyB0cmFuc2Zvcm06ICdyb3RhdGUoMzYwZGVnKScgfV0sIHsgZHVyYXRpb246IHRpbWUgfSk7XHJcbiAgICAgICAgY29uc3QgZWxQb3NpdGlvbiA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYXIuc3R5bGUubGVmdCA9IGAke3BhcmVudC5jbGllbnRXaWR0aCAtIDE2M31weGA7XHJcbiAgICAgICAgfSwgdGltZSk7XHJcbiAgICAgICAgbGV0IHJlc2V0Q2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHJlc2V0QnRuID09PSBudWxsIHx8IHJlc2V0QnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZWxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGxXLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICByVy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgc21va2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgc3RvcEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlc2V0Q2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZWxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGxXLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICByVy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgc21va2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgc3RvcEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlc2V0Q2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZHJpdmVTdGF0dXMgPSB5aWVsZCB0eXBlc18xLmVuaWdpbmUuZHJpdmUoTnVtYmVyKGlkKSk7XHJcbiAgICAgICAgaWYgKCFyZXNldENsaWNrZWQpIHtcclxuICAgICAgICAgICAgaWYgKGRyaXZlU3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgICAgIGxXLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgclcuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIGNhci5zdHlsZS5sZWZ0ID0gZ2V0Q29tcHV0ZWRTdHlsZShjYXIpLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoZWxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBzbW9rZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydEJ0bilcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZHJpdmVTdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdHlwZXNfMS5lbmlnaW5lLnN0b3AoTnVtYmVyKGlkKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF3aW5uZXIgJiYgc3RhcnRCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5uZXIgPSBOdW1iZXIoY2FyLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGQgPSB0eXBlc18xLndpbm5lcnMuYWRkV2lubmVyKHdpbm5lciwgTWF0aC5yb3VuZCh0aW1lIC8gMTAwMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICgwLCBtb2RhbFdpbmRvd18xLnNob3dNb2RhbCkod2lubmVyLCBNYXRoLnJvdW5kKHRpbWUgLyAxMDAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh5aWVsZCBhZGQpLnN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldCA9ICh5aWVsZCB0eXBlc18xLndpbm5lcnMuZ2V0V2lubmVyKHdpbm5lcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3aW5Db3VudCA9IGdldC53aW5zICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmVzdFRpbWUgPSBNYXRoLnJvdW5kKHRpbWUgLyAxMDAwKSA+IGdldC50aW1lID8gZ2V0LnRpbWUgOiBNYXRoLnJvdW5kKHRpbWUgLyAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXNfMS53aW5uZXJzLnVwZGF0ZVdpbm5lcih3aW5uZXIsIHdpbkNvdW50LCBiZXN0VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICgwLCBzaG93V2lubmVyc18xLnNob3dXaW5uZXJzKSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5zdGFydCA9IHN0YXJ0O1xyXG5mdW5jdGlvbiBnZXRCdXR0b24oYiwgbikge1xyXG4gICAgY29uc3QgYnRuID0gWy4uLmJdLmZpbmQoKGVsKSA9PiBlbC5uYW1lID09PSBuKTtcclxuICAgIHJldHVybiBidG47XHJcbn1cclxuZXhwb3J0cy5nZXRCdXR0b24gPSBnZXRCdXR0b247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMudXBkYXRlQ2FyID0gdm9pZCAwO1xyXG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzL3R5cGVzXCIpO1xyXG5jb25zdCBzaG93Q2FyXzEgPSByZXF1aXJlKFwiLi9zaG93Q2FyXCIpO1xyXG5sZXQgY2FySWQgPSAwO1xyXG5mdW5jdGlvbiB1cGRhdGVDYXIoKSB7XHJcbiAgICBjb25zdCB1cGRhdGVDYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLWNhcicpO1xyXG4gICAgY29uc3QgY2FyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGUtbmFtZScpO1xyXG4gICAgY29uc3QgY2FyQ29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLWNvbG9yJyk7XHJcbiAgICBjb25zdCB1cGRhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVwZGF0ZS1idG4nKTtcclxuICAgIHVwZGF0ZUJ0bnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY2FyTmFtZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYXJDb2xvci5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYXJDb2xvci52YWx1ZSA9ICcjZmZmZmZmJztcclxuICAgICAgICAgICAgdXBkYXRlQ2FyQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhcklkID0gTnVtYmVyKGVsLm5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB1cGRhdGVDYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhck5hbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgdHlwZXNfMS5nYXJhZ2UudXBkYXRlQ2FyKGNhcklkLCBjYXJOYW1lLnZhbHVlLCBjYXJDb2xvci52YWx1ZSk7XHJcbiAgICAgICAgICAgICgwLCBzaG93Q2FyXzEuc2hvd0NhcikoKTtcclxuICAgICAgICAgICAgY2FyTmFtZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhck5hbWUudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgY2FyQ29sb3IuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYXJDb2xvci52YWx1ZSA9ICcjZWZlZmVmJztcclxuICAgICAgICAgICAgdXBkYXRlQ2FyQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnVwZGF0ZUNhciA9IHVwZGF0ZUNhcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5yZW5kZXJXaW5uZXJzUGFnaW5hdGlvbiA9IGV4cG9ydHMucHJldkJ0biA9IGV4cG9ydHMud2lubmVyc1BhZ2VOdW1iZXIgPSBleHBvcnRzLm5leHRCdG4gPSB2b2lkIDA7XHJcbmNvbnN0IHJlbmRlckh0bWxfMSA9IHJlcXVpcmUoXCIuLi9vdGhlcnMvcmVuZGVySHRtbFwiKTtcclxuY29uc3Qgc2hvd1dpbm5lcnNfMSA9IHJlcXVpcmUoXCIuL3Nob3dXaW5uZXJzXCIpO1xyXG5leHBvcnRzLm5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuZXhwb3J0cy53aW5uZXJzUGFnZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuZXhwb3J0cy5wcmV2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmZ1bmN0aW9uIHJlbmRlcldpbm5lcnNQYWdpbmF0aW9uKCkge1xyXG4gICAgY29uc3QgcGFnaW5hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGFnaW5hdGlvbi5jbGFzc05hbWUgPSAncGFnaW5hdGlvbic7XHJcbiAgICBleHBvcnRzLndpbm5lcnNQYWdlTnVtYmVyLmNsYXNzTmFtZSA9ICdwYWctbnVtJztcclxuICAgIGV4cG9ydHMucHJldkJ0bi5jbGFzc05hbWUgPSAncGFnLXByZXYtYnRuJztcclxuICAgIGV4cG9ydHMubmV4dEJ0bi5jbGFzc05hbWUgPSAncGFnLW5leHQtYnRuJztcclxuICAgIGV4cG9ydHMud2lubmVyc1BhZ2VOdW1iZXIuaW5uZXJIVE1MID0gJzEnO1xyXG4gICAgZXhwb3J0cy5wcmV2QnRuLmlubmVySFRNTCA9ICc8JztcclxuICAgIGV4cG9ydHMubmV4dEJ0bi5pbm5lckhUTUwgPSAnPic7XHJcbiAgICBwYWdpbmF0aW9uLmFwcGVuZChleHBvcnRzLnByZXZCdG4pO1xyXG4gICAgcGFnaW5hdGlvbi5hcHBlbmQoZXhwb3J0cy53aW5uZXJzUGFnZU51bWJlcik7XHJcbiAgICBwYWdpbmF0aW9uLmFwcGVuZChleHBvcnRzLm5leHRCdG4pO1xyXG4gICAgcmVuZGVySHRtbF8xLndpbm5lcnNCbG9jay5hcHBlbmQocGFnaW5hdGlvbik7XHJcbiAgICB3aW5uZXJzUGFnaW5hdGlvbigpO1xyXG59XHJcbmV4cG9ydHMucmVuZGVyV2lubmVyc1BhZ2luYXRpb24gPSByZW5kZXJXaW5uZXJzUGFnaW5hdGlvbjtcclxuZnVuY3Rpb24gd2lubmVyc1BhZ2luYXRpb24oKSB7XHJcbiAgICBleHBvcnRzLm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZXhwb3J0cy53aW5uZXJzUGFnZU51bWJlci5pbm5lckhUTUwgPSBgJHtOdW1iZXIoZXhwb3J0cy53aW5uZXJzUGFnZU51bWJlci5pbm5lckhUTUwpICsgMX1gO1xyXG4gICAgICAgICgwLCBzaG93V2lubmVyc18xLnNob3dXaW5uZXJzKSgpO1xyXG4gICAgfSk7XHJcbiAgICBleHBvcnRzLnByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZXhwb3J0cy53aW5uZXJzUGFnZU51bWJlci5pbm5lckhUTUwgPSBgJHtOdW1iZXIoZXhwb3J0cy53aW5uZXJzUGFnZU51bWJlci5pbm5lckhUTUwpIC0gMX1gO1xyXG4gICAgICAgICgwLCBzaG93V2lubmVyc18xLnNob3dXaW5uZXJzKSgpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnJlbmRlckh0bWwgPSBleHBvcnRzLndpbm5lcnNCbG9jayA9IGV4cG9ydHMubmV4dFBhZ2UgPSBleHBvcnRzLnByZXZQYWdlID0gZXhwb3J0cy5wYWdlTnVtYmVyID0gZXhwb3J0cy5nYXJhZ2VMZW5ndGggPSBleHBvcnRzLmNhcnMgPSB2b2lkIDA7XHJcbmNvbnN0IGFkZENhcl8xID0gcmVxdWlyZShcIi4uL2dldENhcnMmV2lubmVycy9hZGRDYXJcIik7XHJcbmNvbnN0IGdlbmVyYXRlMTAwQ2Fyc18xID0gcmVxdWlyZShcIi4uL2dldENhcnMmV2lubmVycy9nZW5lcmF0ZTEwMENhcnNcIik7XHJcbmNvbnN0IHBhZ2luYXRpb25fMSA9IHJlcXVpcmUoXCIuLi9nZXRDYXJzJldpbm5lcnMvcGFnaW5hdGlvblwiKTtcclxuY29uc3QgcmFjZV8xID0gcmVxdWlyZShcIi4uL2dldENhcnMmV2lubmVycy9yYWNlXCIpO1xyXG5jb25zdCBzaG93Q2FyXzEgPSByZXF1aXJlKFwiLi4vZ2V0Q2FycyZXaW5uZXJzL3Nob3dDYXJcIik7XHJcbmNvbnN0IHdpbm5lcnNQYWdpbmF0aW9uXzEgPSByZXF1aXJlKFwiLi4vZ2V0Q2FycyZXaW5uZXJzL3dpbm5lcnNQYWdpbmF0aW9uXCIpO1xyXG5jb25zdCB2aWV3XzEgPSByZXF1aXJlKFwiLi4vdmlld3Mvdmlld1wiKTtcclxuZXhwb3J0cy5jYXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmV4cG9ydHMuZ2FyYWdlTGVuZ3RoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5leHBvcnRzLnBhZ2VOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmV4cG9ydHMucHJldlBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuZXhwb3J0cy5uZXh0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5leHBvcnRzLndpbm5lcnNCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5mdW5jdGlvbiByZW5kZXJIdG1sKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBnYXJhZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCB3aW5uZXJzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBnYXJhZ2VCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHZpZXdCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgcmFjZUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwYWdpbmF0aW9uQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBmb3JtQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBnYXJhZ2VCdG4uY2xhc3NOYW1lID0gJ2dhcmFnZS12aWV3JztcclxuICAgICAgICB3aW5uZXJzQnRuLmNsYXNzTmFtZSA9ICd3aW5uZXJzLXZpZXcnO1xyXG4gICAgICAgIGV4cG9ydHMud2lubmVyc0Jsb2NrLmNsYXNzTmFtZSA9ICd3aW5uZXJzIGhpZGRlbic7XHJcbiAgICAgICAgZ2FyYWdlQmxvY2suY2xhc3NOYW1lID0gJ2dhcmFnZSc7XHJcbiAgICAgICAgcmFjZUJ0bnMuY2xhc3NOYW1lID0gJ3JhY2UtYnRucyc7XHJcbiAgICAgICAgZXhwb3J0cy5jYXJzLmNsYXNzTmFtZSA9ICdjYXJzJztcclxuICAgICAgICBnZW5lcmF0ZUJ0bi5jbGFzc05hbWUgPSAnZ2VuLWNhcnMnO1xyXG4gICAgICAgIGV4cG9ydHMucGFnZU51bWJlci5jbGFzc05hbWUgPSAncGFnZS1udW0gcGFnLW51bSc7XHJcbiAgICAgICAgZXhwb3J0cy5wcmV2UGFnZS5jbGFzc05hbWUgPSAncHJldi1idG4gcGFnLXByZXYtYnRuJztcclxuICAgICAgICBleHBvcnRzLm5leHRQYWdlLmNsYXNzTmFtZSA9ICduZXh0LWJ0biBwYWctbmV4dC1idG4nO1xyXG4gICAgICAgIHBhZ2luYXRpb25CbG9jay5jbGFzc05hbWUgPSAncGFnaW5hdGlvbic7XHJcbiAgICAgICAgZXhwb3J0cy5nYXJhZ2VMZW5ndGguY2xhc3NOYW1lID0gJ2dhcmFnZS1sZW5ndGggbGVuZ3RoJztcclxuICAgICAgICB2aWV3QnRucy5jbGFzc05hbWUgPSAndmlldy1idG5zJztcclxuICAgICAgICBmb3JtQmxvY2suY2xhc3NOYW1lID0gJ2Zvcm0tYmxvY2snO1xyXG4gICAgICAgIG1vZGFsQm9keS5jbGFzc05hbWUgPSAnbW9kYWwtYm9keSBoaWRkZW4nO1xyXG4gICAgICAgIG1vZGFsQ29udGVudC5jbGFzc05hbWUgPSAnbW9kYWwtY29udGVudCc7XHJcbiAgICAgICAgZ2FyYWdlQnRuLmlubmVySFRNTCA9ICdHYXJhZ2UnO1xyXG4gICAgICAgIHdpbm5lcnNCdG4uaW5uZXJIVE1MID0gJ1dpbm5lcnMnO1xyXG4gICAgICAgIGdlbmVyYXRlQnRuLmlubmVySFRNTCA9ICdHZW5lcmF0ZSAxMDAgQ2Fycyc7XHJcbiAgICAgICAgZXhwb3J0cy5wYWdlTnVtYmVyLmlubmVySFRNTCA9ICcxJztcclxuICAgICAgICBleHBvcnRzLnByZXZQYWdlLmlubmVySFRNTCA9ICc8JztcclxuICAgICAgICBleHBvcnRzLm5leHRQYWdlLmlubmVySFRNTCA9ICc+JztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dENvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhY2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgZm9ybS5hY3Rpb24gPSAnIyc7XHJcbiAgICAgICAgICAgIGlucHV0VGV4dC50eXBlID0gJ3NlYXJjaCc7XHJcbiAgICAgICAgICAgIGlucHV0Q29sb3IudHlwZSA9ICdjb2xvcic7XHJcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICAgICAgICAgIGlucHV0VGV4dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFRleHQuY2xhc3NOYW1lID0gJ25hbWUnO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDb2xvci5jbGFzc05hbWUgPSAnY29sb3InO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnRuLmNsYXNzTmFtZSA9ICdhZGQtY2FyJztcclxuICAgICAgICAgICAgICAgIHJhY2VCdG4uY2xhc3NOYW1lID0gJ3N0YXJ0LXJhY2UnO1xyXG4gICAgICAgICAgICAgICAgcmFjZUJ0bi5pbm5lckhUTUwgPSAnU3RhcnQgUmFjZSc7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FkZCBOZXcgQ2FyJztcclxuICAgICAgICAgICAgICAgIGlucHV0Q29sb3IudmFsdWUgPSAnI2ZmZmZmZic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFRleHQuY2xhc3NOYW1lID0gJ3VwZGF0ZS1uYW1lJztcclxuICAgICAgICAgICAgICAgIGlucHV0Q29sb3IuY2xhc3NOYW1lID0gJ3VwZGF0ZS1jb2xvcic7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRCdG4uY2xhc3NOYW1lID0gJ3VwZGF0ZS1jYXInO1xyXG4gICAgICAgICAgICAgICAgcmFjZUJ0bi5jbGFzc05hbWUgPSAncmVzZXQtcmFjZSc7XHJcbiAgICAgICAgICAgICAgICByYWNlQnRuLmlubmVySFRNTCA9ICdSZXNldCBSYWNlJztcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnVXBkYXRlIENhcic7XHJcbiAgICAgICAgICAgICAgICBpbnB1dENvbG9yLnZhbHVlID0gJyNlZmVmZWYnO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDb2xvci5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFRleHQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZChpbnB1dFRleHQpO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZChpbnB1dENvbG9yKTtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmQoc3VibWl0QnRuKTtcclxuICAgICAgICAgICAgZm9ybUJsb2NrLmFwcGVuZChmb3JtKTtcclxuICAgICAgICAgICAgZ2FyYWdlQmxvY2suYXBwZW5kKGZvcm1CbG9jayk7XHJcbiAgICAgICAgICAgIHJhY2VCdG5zLmFwcGVuZChyYWNlQnRuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFnaW5hdGlvbkJsb2NrLmFwcGVuZChleHBvcnRzLnByZXZQYWdlKTtcclxuICAgICAgICBwYWdpbmF0aW9uQmxvY2suYXBwZW5kKGV4cG9ydHMucGFnZU51bWJlcik7XHJcbiAgICAgICAgcGFnaW5hdGlvbkJsb2NrLmFwcGVuZChleHBvcnRzLm5leHRQYWdlKTtcclxuICAgICAgICBtb2RhbEJvZHkuYXBwZW5kKG1vZGFsQ29udGVudCk7XHJcbiAgICAgICAgdmlld0J0bnMuYXBwZW5kKGdhcmFnZUJ0bik7XHJcbiAgICAgICAgdmlld0J0bnMuYXBwZW5kKHdpbm5lcnNCdG4pO1xyXG4gICAgICAgIGdhcmFnZUJsb2NrLmFwcGVuZChyYWNlQnRucyk7XHJcbiAgICAgICAgZ2FyYWdlQmxvY2suYXBwZW5kKGdlbmVyYXRlQnRuKTtcclxuICAgICAgICBnYXJhZ2VCbG9jay5hcHBlbmQoZXhwb3J0cy5nYXJhZ2VMZW5ndGgpO1xyXG4gICAgICAgIGdhcmFnZUJsb2NrLmFwcGVuZChleHBvcnRzLmNhcnMpO1xyXG4gICAgICAgIGdhcmFnZUJsb2NrLmFwcGVuZChwYWdpbmF0aW9uQmxvY2spO1xyXG4gICAgICAgIGdhcmFnZUJsb2NrLmFwcGVuZChtb2RhbEJvZHkpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHZpZXdCdG5zKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChnYXJhZ2VCbG9jayk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZXhwb3J0cy53aW5uZXJzQmxvY2spO1xyXG4gICAgICAgICgwLCB2aWV3XzEuc2hvd0hpZGUpKCk7XHJcbiAgICAgICAgKDAsIGFkZENhcl8xLmFkZE5ld0NhcikoKTtcclxuICAgICAgICAoMCwgcmFjZV8xLnJhY2UpKCk7XHJcbiAgICAgICAgKDAsIGdlbmVyYXRlMTAwQ2Fyc18xLmdlbmVyYXRlMTAwQ2FycykoKTtcclxuICAgICAgICAoMCwgc2hvd0Nhcl8xLnNob3dDYXIpKCk7XHJcbiAgICAgICAgKDAsIHBhZ2luYXRpb25fMS5wYWdpbmF0aW9uKSgpO1xyXG4gICAgICAgICgwLCB3aW5uZXJzUGFnaW5hdGlvbl8xLnJlbmRlcldpbm5lcnNQYWdpbmF0aW9uKSgpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5yZW5kZXJIdG1sID0gcmVuZGVySHRtbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zdmcgPSB2b2lkIDA7XHJcbmZ1bmN0aW9uIHN2Zyhjb2xvcikge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY2FyLW1vZGVsXCI+PHN2ZyB2ZXJzaW9uPVwiMS4yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTAwIDE2MFwiIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiNTBcIj5cclxuPHBhdGggZmlsbD0ke2NvbG9yfSBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIm00LjEgNjdsMy45LTMuNmMwIDAgMTEuNiAyLjEgMTkuNSAxLjggNy44LTAuMyAxNi40LTExLjcgOC0xMS41LTIgMC00LjItMC40LTYuMy0xcTAgMCAwIFxyXG4gICAgMGMtNy4xLTEuOS0xNC02LjEtMTQtNi4xbC00LjItOWMwIDAtNC40LTcuNSA0LjYtNi45IDkgMC42IDE4LjkgNC40IDE4LjkgNC40IDAgMCA4Ny42LTIxLjUgMTA0LjctMjQuOCAxNy4xLTMuMyBcclxuICAgIDg5LjYtMTcuNiAxNTMuMyAxNC41IDAgMCA0MC4yIDE4LjkgNDQuMSAxOS4yIDAgMCAxMTkuOSA1LjggMTU5LjQgNDEgMCAwIDAuNiAxMi45IDAgMjEuMyAwIDAgMS44IDUuNC0xLjMgMTAuNiAwIDAgMi4xIFxyXG4gICAgNC4yLTEuNCAzLjZsLTEuMSA4LjdjMCAwLTQuMi0yLjEtNi4xIDQuOSAwIDAtMjIuMSA1LjQtMjguMSA0LjEgMCAwIDYuNy02Ni45LTQxLjUtNjYuOS00OC4xIDAtNTIuNyA0Mi41LTUzLjQgNjcuMWwtMS44IFxyXG4gICAgMS41YzAgMC0yMTIuNi02LjMtMjE4LjMtMi44IDAgMC0yLjEgMC0xLjctNCAwIDAgNi45LTY1LjUtNTAuMi02NS41LTU3LjIgMC00NC4yIDYxLjMtNDQuMiA2MS4zIDAgMC00Mi44LTkuNi0zNi4zLTE2LjEgMCBcclxuICAgIDAtMTQuOS0yMC4zLTYuNS00NS44em0zNjYuMSA1LjFjMy4yLTMuOS00MS45LTQuNC00MS45LTQuNCAwIDAtNSA0LjgtMy4zIDkuMyAxLjYgNC41IDI1LjEgMy44IDMxLjggMy4xIDYuOC0wLjggMTMuNC04IFxyXG4gICAgMTMuNC04em0tODEtMTkuN2MwIDAgMjIuNSAwLjIgMjUuNiAwIDMtMC4zIDEuOS0xLjUgMS45LTEuNSAwIDAtNS42LTcuNy00NC42LTI0LjMtMzguOS0xNi41LTYyLTE0LjEtNjItMTQuMS0xMDcuNyAzLTg3LjkgXHJcbiAgICAxNi4xLTg3LjkgMTYuMWw4LjEgOS40IDI1LjIgNC44IDExMCA2Ljl6bS0xMDIuNiA3LjFjMCAxLjIgMSAyLjIgMi4yIDIuMmgxNy43YzEuMiAwIDIuMi0xIDIuMi0yLjIgMC0xLjMtMS0yLjMtMi4yLTIuM2gtMTcuN2MtMS4yIFxyXG4gICAgMC0yLjIgMS0yLjIgMi4zem0xMzQuNCAxOC43YzAgMCAwLjggMzQuMS0zIDQyLjNsLTk0LjgtM2MwIDAtMjguNyAxLTM5LjQtMTkuOCAwIDAtOS4xLTE5LTEwLjUtMjUuNSAwLjMgMi4yIDQgMzcuNSAyMi45IDQyLjcgMTkuNyBcclxuICAgIDUuNCAxMjQuOCA4LjIgMTI0LjggOC4yIDAgMCA0LjEtMzUuMSAwLTQ0Ljl6bTQ2IDE4cTAuMi0wLjMgMC41LTAuOCAwLjYtMC45IDEuMy0yIDAuMi0wLjMgMC40LTAuNyAwLjUtMC43IDEuMS0xLjUgMC4yLTAuMyBcclxuICAgIDAuNC0wLjZjMC45LTEuMSAxLjgtMi4zIDIuOC0zLjVxMC40LTAuNSAwLjgtMC45YzIuMi0yLjUgNC43LTUgNy43LTcuNHEwLjQtMC4zIDAuOC0wLjYgMC40LTAuMyAwLjgtMC42IDEuMS0wLjggMi4zLTEuNiAwLjgtMC41IFxyXG4gICAgMS42LTEuMSAxLjMtMC43IDIuNi0xLjQgMC45LTAuNSAxLjktMC45IDAuNC0wLjIgMC44LTAuNCAwLjQtMC4yIDAuOC0wLjQgMC44LTAuMyAxLjYtMC43IDEtMC4zIDEuOS0wLjYgMS4zLTAuNSAyLjYtMC44IDAuNC0wLjIgXHJcbiAgICAwLjktMC4zIDEtMC4yIDIuMS0wLjUgMS4xLTAuMiAyLjItMC40IDAuNy0wLjEgMS40LTAuMiAwLjEgMCAwLjEgMCAwLjYtMC4xIDEuMi0wLjEgMS0wLjEgMi4xLTAuMiAwLjcgMCAxLjUgMCAxLjUtMC4xIDMuMSAwYzM0LjEgXHJcbiAgICAxIDQ0IDMxLjMgNDQgMzEuM2g4LjJjMCAwIDkuOS01LjggMTkuOC01LjEgMTAgMC44IDMuMy00LjMtOC40LTYuNS0xMS43LTIuMS0yMi42LTE0LjQtMjQuNC0xNy43LTEuOC0zLjMtNDUuNC0xNC03Mi42LTEyLjggMCAwIDQwIFxyXG4gICAgMiA3MCAxNC45IDAgMCAxLjEgNC4xLTExLjcgMHEtMS42LTAuNS0zLjctMS4zLTAuNy0wLjItMS41LTAuNS0yLjItMC44LTQuOS0xLjYtMS43LTAuNS0zLjYtMS0wLjgtMC4yLTEuNS0wLjQtMC43LTAuMi0xLjUtMC4zLTAuNy0wLjItMS41LTAuMy0wLjgtMC4yLTEuNi0wLjMtMC45LTAuMi0xLjktMC4zLTEtMC4yLTItMC4yLTAuNi0wLjEtMS4xLTAuMS0wLjctMC4xLTEuNC0wLjEtMC4xIDAtMC4zIFxyXG4gICAgMC0xLTAuMS0yLjEtMC4xLTEgMC0yIDAuMS0xLjEgMC0yLjEgMC4xLTAuNyAwLjEtMS40IDAuMi0wLjYgMC0xLjEgMC4xLTAuNyAwLjEtMS41IDAuMi0wLjIgMC4xLTAuNCAwLjEtMC43IDAuMS0xLjMgXHJcbiAgICAwLjNjLTAuNSAwLjEtMC45IDAuMi0xLjQgMC40cS0wLjcgMC4xLTEuNCAwLjQtMC44IDAuMi0xLjUgMC40LTEuNCAwLjUtMi45IDEuMS0wLjcgMC4zLTEuNCAwLjctMS42IDAuNy0zLjIgMS43LTAuNSBcclxuICAgIDAuMy0xLjEgMC43Yy0wLjIgMC4xLTAuNCAwLjMtMC42IDAuNHEtMC40IDAuMi0wLjcgMC41LTAuMyAwLjItMC42IDAuNCAwIDAgMCAwLTAuNSAwLjMtMSAwLjYtMC41IDAuNC0xIDAuOC0wLjEgMC4xLTAuMiBcclxuICAgIDAuMi0wLjQgMC4zLTAuNyAwLjYtMC42IDAuNS0xLjIgMS0wLjYgMC41LTEuMSAxLTAuNiAwLjUtMS4xIDEuMS0wLjEgMC4xLTAuMyAwLjItMC43IDAuNy0xLjQgMS41LTEuMiAxLjMtMi40IDIuNy0wLjQgXHJcbiAgICAwLjYtMC45IDEuMi0xLjcgMi4yLTMuNCA0LjctMC43IDAuOS0xLjMgMi0xLjUgMi4zLTIuOSA1LTAuMiAwLjMtMC4zIDAuNiAwLjEtMC4xIDAuMi0wLjR6bTEyNS44LTguNWMtMTEuNy0xMy43LTMzLjUtMTUuNi0zMy41LTE1LjYgXHJcbiAgICAxNi4zIDE0LjYgMzMuNSAxNS42IDMzLjUgMTUuNnptLTM0NS43IDQyLjVsMjEwLjEgNC40YzguNC0zLjQtMjMuNy01LjEtMjMuNy01LjEgMCAwLTE0NC40LTUuMi0xNTcuNi01LjItMTMuMyBcclxuICAgIDAtMTguNiAxLjMtMjYuMyAyLjYtNy42IDEuMy0yLjUgMy4zLTIuNSAzLjN6bS01LjYtMzIuNWMzMy43LTIxLjIgMTcuOC0yOC44IDE3LjgtMjguOCA3LjktMS40IDE1Mi44IDIuOSAxNjEuMyBcclxuICAgIDMuMi04LjMtMC40LTE0Mi44LTYuOS0xNjYuNy02LjktMjQuNiAwLjEtMjUuNCA4LjYtMjUuNCA4LjYtMjEuOC0xMC45LTMyLjEtOC4zLTMyLjEtOC4zIDMzLjQgMS40IDQ1LjEgMzIuMiA0NS4xIFxyXG4gICAgMzIuMnptLTEwNi42LTMuOGMzLjMgMy44IDguNiA1LjcgOC42IDUuMSAxLTEyLjYgMTAuMS0yMS42IDEwLjEtMjEuNi0xNiA0LjItNDcuMi05LTQ3LjItOS0zLjIgNC43LTEuOSAxMS45LTEuOSBcclxuICAgIDExLjkgMTguNCAxLjEgMjcuMiA5LjcgMzAuNCAxMy42em0xODMuMy03OWMzMy4zIDAuOCA5My4zIDM0LjggOTMuMyAzNC44LTIuMS0wLjMtMTkuNCAwLjQtMjYuMy0xLjktMi0wLjYtMy4yLTEuNi0yLjktMi44IFxyXG4gICAgMS4zLTUuNi0xLjgtOC4yLTEuOC04LjIgMCAwLTEwLjEtNi40LTE1LjktMy4xIDAgMC0zMS43LTIxLjYtODQuOS0xMS40IDAgMC0zLjggMC40LTAuOCA1LjIgMi43IDQuMSA1LjggMTIuNyBcclxuICAgIDYuNiAxNC44LTE3LjQtMS4yLTMxLjYtMi40LTM0LjgtMy4yLTkuNy0yLjMtMTYuMyAwLjUtMjIuMi05LjctNS44LTEwLjIgNTYuMy0xNS4zIDg5LjctMTQuNXptLTY4LjUgMTguN2MzLjEgMyAxNC41IFxyXG4gICAgNC40IDE0LjUgNC40IDAgMCAyLjItMy42LTMuMi0xMS4zLTAuNC0wLjUtMTEuMyAzLjItMTEuMyAzLjIgMCAwLTMgMC42IDAgMy43em0xNzkuOSAzOC41aDMzLjJjMC44IDAgMS40IDAuNiAxLjQgMS40IDAgXHJcbiAgICAwLjctMC42IDEuMy0xLjQgMS4zaC0zMy4yYy0wLjggMC0xLjQtMC42LTEuNC0xLjMgMC0wLjggMC42LTEuNCAxLjQtMS40em0tMTQyLjUtMzAuOGMwIDAgNTcuMiA1IDY1LjYgNC4zIDAgMC0wLjItNy4zIFxyXG4gICAgNC43LTYuOSAwIDAtNC4xIDQuOCAwLjEgNy44IDAgMC0yNS42IDIuMS03MC40LTUuMnpcIi8+XHJcbjxwYXRoIGQ9XCJtNDkyLjUgMTI1LjNjMCAwLTMuOSAwLjMtNCA0LjRsLTI2IDQuN2MwIDAgNDcuOS0xLjIgMzAtOS4xelwiLz5cclxuPHBhdGggZD1cIm0zNjUuNSA5OXEwLjItMC40IDAuNC0wLjctMC4zIDAuNC0wLjQgMC43elwiLz5cclxuPHBhdGggZD1cIm0zMjkuNSA3Mi4xaDMzLjNjMC44IDAgMS40IDAuNiAxLjQgMS4zIDAgMC44LTAuNiAxLjQtMS40IDEuNGgtMzMuM2MtMC43IDAtMS4zLTAuNi0xLjMtMS40IDAtMC43IDAuNi0xLjMgMS4zLTEuM3pcIi8+XHJcbjxwYXRoIGQ9XCJtMzI5LjUgNzIuMWgzMy4zYzAuOCAwIDEuNCAwLjYgMS40IDEuMyAwIDAuOC0wLjYgMS40LTEuNCAxLjRoLTMzLjNjLTAuNyAwLTEuMy0wLjYtMS4zLTEuNCAwLTAuNyAwLjYtMS4zIDEuMy0xLjN6XCIvPlxyXG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIm0yMTguMSAxNC45YzMzLjQgMC43IDkzLjQgMzQuOCA5My40IDM0LjgtMi4xLTAuMy0xOS40IDAuNC0yNi4zLTEuOS0yLTAuNy0zLjItMS42LTIuOS0yLjggXHJcbiAgICAxLjMtNS42LTEuOC04LjItMS44LTguMiAwIDAtMTAuMi02LjQtMTUuOS0zLjEgMCAwLTMxLjctMjEuNi04NC45LTExLjQgMCAwLTMuOCAwLjQtMC44IDUuMSAyLjcgNC4yIDUuOCAxMi44IDYuNSBcclxuICAgIDE0LjktMTcuMy0xLjItMzEuNS0yLjQtMzQuOC0zLjItOS42LTIuMy0xNi4zIDAuNS0yMi4xLTkuNy01LjktMTAuMiA1Ni4zLTE1LjMgODkuNi0xNC41em0tNjguNCAxOC43YzMuMSAzIDE0LjUgNC40IDE0LjUgXHJcbiAgICA0LjQgMCAwIDIuMi0zLjctMy4yLTExLjMtMC40LTAuNS0xMS4zIDMuMi0xMS4zIDMuMiAwIDAtMy4xIDAuNiAwIDMuN3pcIi8+XHJcbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwibTE4NS40IDQyLjNjLTE3LjMtMS4yLTMxLjUtMi40LTM0LjgtMy4yLTkuNi0yLjMtMTYuMyAwLjUtMjIuMS05LjctNS45LTEwLjIgNTYuMy0xNS4zIDg5LjYtMTQuNSBcclxuICAgIDMzLjQgMC43IDkzLjQgMzQuOCA5My40IDM0LjgtMi4xLTAuMy0xOS40IDAuNC0yNi4zLTEuOS0yLTAuNy0zLjItMS42LTIuOS0yLjggMS4zLTUuNi0xLjgtOC4yLTEuOC04LjIgMCAwLTEwLjItNi40LTE1LjktMy4xIDAgXHJcbiAgICAwLTMxLjctMjEuNi04NC45LTExLjQgMCAwLTMuOCAwLjQtMC44IDUuMSAyLjcgNC4yIDUuOCAxMi44IDYuNSAxNC45em0tMzUuNy04LjdjMy4xIDMgMTQuNSA0LjQgMTQuNSA0LjQgXHJcbiAgICAwIDAgMi4yLTMuNy0zLjItMTEuMy0wLjQtMC41LTExLjMgMy4yLTExLjMgMy4yIDAgMC0zLjEgMC42IDAgMy43elwiLz5cclxuPHBhdGggZD1cIm0yNzYuOCAzNi4xYzcuMiAzLjIgNCA4LjYgMy45IDEwLjMgMCAxLjgtMTYuMSA0LjUtMTguMi0xLjItMi01LjYgMi0xMC45IDItMTAuOSAwIDAgNS4yLTEuNCAxMi4zIDEuOHpcIi8+XHJcbjxnPlxyXG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIm00MTEuNSA3Ny4yYzIyLjEgMCA0MC4xIDE4IDQwLjEgNDAuMiAwIDIyLjItMTggNDAuMi00MC4xIDQwLjItMjIuMiAwLTQwLjItMTgtNDAuMi00MC4yIDAtMjIuMiAxOC00MC4yIFxyXG4gICAgNDAuMi00MC4yem0tMzIuNSA0MC4yYzAgMTggMTQuNSAzMi41IDMyLjUgMzIuNSAxNy45IDAgMzIuNC0xNC41IDMyLjQtMzIuNSAwLTE4LTE0LjUtMzIuNS0zMi40LTMyLjUtMTggMC0zMi41IDE0LjUtMzIuNSBcclxuICAgIDMyLjV6bTEwLTIwLjdjMCAyLjUgMS45IDkuMSAxOC41IDE4LjMtMC40IDAuNi0wLjYgMS4zLTAuNiAyLTE4LjYtMS41LTI0LjEgMi43LTI1LjcgNXEtMC4zLTIuMi0wLjMtNC42YzAtOCAzLTE1LjMgXHJcbiAgICA4LjEtMjAuN3ptMTguOSAyMy43YzAuNSAwLjYgMS4xIDEgMS43IDEuMy04LjggMTUuNy03LjYgMjIuNi02LjMgMjUuMi05LTIuNC0xNi4zLTguOS0xOS45LTE3LjMgMi4xIDEuMSA4LjcgMi41IFxyXG4gICAgMjQuNS05LjJ6bTMuNi0zMy42YzQuOSAwIDkuNSAxLjEgMTMuNiAzLjItMi42IDAuOS04LjIgNS0xMi4yIDIzcS0wLjctMC4yLTEuNC0wLjItMC40IDAtMC44IDBjLTQuMy0yMC4xLTEwLjYtMjIuNy0xMi41LTIzIDQtMS45IFxyXG4gICAgOC41LTMgMTMuMy0zem0xLjQgMzVxMS4xLTAuMyAxLjgtMS4xYzEzLjggMTIuOCAyMC44IDEyLjcgMjMuMyAxMS45LTQuNSA3LjktMTIuNCAxMy42LTIxLjcgMTUuMSAxLjYtMi4xIFxyXG4gICAgMy45LTguNi0zLjQtMjUuOXptMi45LTYuMWMxOC42LTguMyAxOS45LTE1IDE5LjgtMTcuMSA0LjEgNS4yIDYuNSAxMS43IDYuNSAxOC44cS0wLjEgNC0xIDcuN2MtMS40LTIuNC02LjUtNy4xLTI1LTcuMnEwLTAuMiBcclxuICAgIDAtMC41IDAtMC45LTAuMy0xLjd6bS02LjEgNS45bC0wLjEgMC4xcTAtMC4xIDAuMS0wLjF6XCIvPlxyXG48cGF0aCBkPVwibTQxNS44IDExNS43YzE4LjYtOC4zIDE5LjktMTUgMTkuOC0xNy4xIDQuMSA1LjIgNi41IDExLjcgNi41IDE4LjhxLTAuMSA0LTEgNy43Yy0xLjQtMi40LTYuNS03LjEtMjUtNy4ycTAtMC4yIFxyXG4gICAgMC0wLjUgMC0wLjktMC4zLTEuN3pcIi8+XHJcbjxwYXRoIGQ9XCJtNDEyLjkgMTIxLjhxMS4xLTAuMyAxLjgtMS4xYzEzLjggMTIuOCAyMC44IDEyLjcgMjMuMyAxMS45LTQuNSA3LjktMTIuNCAxMy42LTIxLjcgMTUuMSAxLjYtMi4xIDMuOS04LjYtMy40LTI1Ljl6XCIvPlxyXG48cGF0aCBkPVwibTQwOS43IDEyMS42bC0wLjEgMC4xcTAtMC4xIDAuMS0wLjF6XCIvPlxyXG48cGF0aCBkPVwibTQxMS41IDg2LjhjNC45IDAgOS41IDEuMSAxMy42IDMuMi0yLjYgMC45LTguMiA1LTEyLjIgMjNxLTAuNy0wLjItMS40LTAuMi0wLjQgMC0wLjggXHJcbiAgICAwYy00LjMtMjAuMS0xMC42LTIyLjctMTIuNS0yMyA0LTEuOSA4LjUtMyAxMy4zLTN6XCIvPlxyXG48cGF0aCBkPVwibTQwNy45IDEyMC40YzAuNSAwLjYgMS4xIDEgMS43IDEuMy04LjggMTUuNy03LjYgMjIuNi02LjMgMjUuMi05LTIuNC0xNi4zLTguOS0xOS45LTE3LjMgMi4xIDEuMSA4LjcgMi41IDI0LjUtOS4yelwiLz5cclxuPHBhdGggZD1cIm0zODkgOTYuN2MwIDIuNSAxLjkgOS4xIDE4LjUgMTguMy0wLjQgMC42LTAuNiAxLjMtMC42IDItMTguNi0xLjUtMjQuMSAyLjctMjUuNyA1cS0wLjMtMi4yLTAuMy00LjZjMC04IDMtMTUuMyA4LjEtMjAuN3pcIi8+XHJcbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBmaWxsPVwid2hpdGVcIiBkPVwibTM4OSA5Ni43YzAgMi41IDEuOSA5LjEgMTguNSAxOC4zLTAuNCAwLjYtMC42IDEuMy0wLjYgMi0xOC42LTEuNS0yNC4xIDIuNy0yNS43IFxyXG4gICAgNXEtMC4zLTIuMi0wLjMtNC42YzAtOCAzLTE1LjMgOC4xLTIwLjd6bTE4LjkgMjMuN2MwLjUgMC42IDEuMSAxIDEuNyAxLjMtOC44IDE1LjctNy42IDIyLjYtNi4zIDI1LjItOS0yLjQtMTYuMy04LjktMTkuOS0xNy4zIFxyXG4gICAgMi4xIDEuMSA4LjcgMi41IDI0LjUtOS4yem0zLjYtMzMuNmM0LjkgMCA5LjUgMS4xIDEzLjYgMy4yLTIuNiAwLjktOC4yIDUtMTIuMiAyM3EtMC43LTAuMi0xLjQtMC4yLTAuNCAwLTAuOCBcclxuICAgIDBjLTQuMy0yMC4xLTEwLjYtMjIuNy0xMi41LTIzIDQtMS45IDguNS0zIDEzLjMtM3ptMS40IDM1cTEuMS0wLjMgMS44LTEuMWMxMy44IDEyLjggMjAuOCAxMi43IDIzLjMgMTEuOS00LjUgNy45LTEyLjQgXHJcbiAgICAxMy42LTIxLjcgMTUuMSAxLjYtMi4xIDMuOS04LjYtMy40LTI1Ljl6bTIuOS02LjFjMTguNi04LjMgMTkuOS0xNSAxOS44LTE3LjEgNC4xIDUuMiA2LjUgMTEuNyA2LjUgMTguOHEtMC4xIFxyXG4gICAgNC0xIDcuN2MtMS40LTIuNC02LjUtNy4xLTI1LTcuMnEwLTAuMiAwLTAuNSAwLTAuOS0wLjMtMS43em0tNi4xIDUuOWwtMC4xIDAuMXEwLTAuMSAwLjEtMC4xelwiLz5cclxuPHBhdGggZD1cIm00MDYuOCAxMTcuMXEwIDAgMC4xLTAuMWMwLTAuNyAwLjItMS40IDAuNi0ycTAgMCAwLTAuMWMwLjctMSAxLjgtMS44IDMuMS0ycTAgMCAwLjEtMC4xIDAuNCAwIDAuOCAwIDAuNyAwIDEuNCAwLjIgMC4xIFxyXG4gICAgMCAwLjEgMC4xYzEuMiAwLjQgMi4yIDEuMyAyLjcgMi41cTAuMSAwIDAuMSAwLjEgMC4zIDAuOCAwLjMgMS43IDAgMC4zIDAgMC41IDAgMC4xIDAgMC4xYy0wLjIgMS0wLjYgMS45LTEuMyAyLjZxMCAwLjEtMC4xIFxyXG4gICAgMC4xLTAuNyAwLjgtMS44IDEuMSAwIDAgMCAwLTAuNyAwLjMtMS40IDAuM2MtMC43IDAtMS4zLTAuMi0xLjktMC40bDAuMS0wLjFxLTAuMSAwLTAuMSAwLjFjLTAuNi0wLjMtMS4yLTAuNy0xLjctMS4zcTAgMCBcclxuICAgIDAtMC4xYy0wLjctMC44LTEuMS0xLjgtMS4xLTIuOXEwLTAuMSAwLTAuM3pcIi8+XHJcbjxwYXRoIGQ9XCJtNDA5LjcgMTIxLjZsLTAuMSAwLjFxMC0wLjEgMC4xLTAuMXpcIi8+XHJcbjxwYXRoIGQ9XCJtNDA5LjcgMTIxLjZsLTAuMSAwLjFxMC0wLjEgMC4xLTAuMXpcIi8+XHJcbjwvZz5cclxuPGc+XHJcbjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwibTkyLjEgNzIuOGMyMi4yIDAgNDAuMSAxOCA0MC4xIDQwLjIgMCAyMi4yLTE3LjkgNDAuMi00MC4xIDQwLjItMjIuMiAwLTQwLjEtMTgtNDAuMS00MC4yIDAtMjIuMiBcclxuICAgIDE3LjktNDAuMiA0MC4xLTQwLjJ6bS0zMi40IDQwLjJjMCAxOCAxNC41IDMyLjUgMzIuNCAzMi41IDE3LjkgMCAzMi40LTE0LjUgMzIuNC0zMi41IDAtMTgtMTQuNS0zMi41LTMyLjQtMzIuNS0xNy45IDAtMzIuNCBcclxuICAgIDE0LjUtMzIuNCAzMi41em05LjktMjAuN2MwIDIuNSAxLjkgOS4xIDE4LjUgMTguMy0wLjMgMC42LTAuNiAxLjMtMC42IDIuMS0xOC41LTEuNi0yNCAyLjYtMjUuNyA0LjlxLTAuMy0yLjItMC4zLTQuNmMwLTggMy4xLTE1LjMgXHJcbiAgICA4LjEtMjAuN3ptMTkgMjMuN2MwLjQgMC42IDEgMSAxLjcgMS4zLTguOCAxNS43LTcuNyAyMi42LTYuNCAyNS4yLTguOS0yLjQtMTYuMi04LjktMTkuOS0xNy4zIDIuMSAxLjEgOC43IDIuNSAyNC42LTkuMnptMy41LTMzLjZjNC45IFxyXG4gICAgMCA5LjYgMS4yIDEzLjcgMy4yLTIuNyAwLjktOC4zIDUtMTIuMyAyM3EtMC43LTAuMi0xLjQtMC4yLTAuNCAwLTAuOCAwYy00LjMtMjAuMS0xMC42LTIyLjctMTIuNS0yMyA0LTEuOSA4LjUtMyAxMy4zLTN6bTEuNCBcclxuICAgIDM1cTEuMS0wLjMgMS45LTEuMWMxMy43IDEyLjggMjAuNyAxMi43IDIzLjIgMTEuOS00LjUgNy45LTEyLjQgMTMuNi0yMS43IDE1LjEgMS42LTIuMSAzLjktOC42LTMuNC0yNS45em0yLjktNi4xYzE4LjYtOC4zIFxyXG4gICAgMTkuOS0xNSAxOS44LTE3LjEgNC4xIDUuMiA2LjUgMTEuNyA2LjUgMTguOHEwIDQtMSA3LjdjLTEuNC0yLjQtNi41LTcuMS0yNS03LjJxMC0wLjIgXHJcbiAgICAwLTAuNSAwLTAuOS0wLjMtMS43em0tNi4xIDUuOXYwLjFxMC0wLjEgMC0wLjF6XCIvPlxyXG48cGF0aCBkPVwibTk2LjQgMTExLjNjMTguNi04LjMgMTkuOS0xNSAxOS44LTE3LjEgNC4xIDUuMiA2LjUgMTEuNyA2LjUgMTguOHEwIDQtMSBcclxuICAgIDcuN2MtMS40LTIuNC02LjUtNy4xLTI1LTcuMnEwLTAuMiAwLTAuNSAwLTAuOS0wLjMtMS43elwiLz5cclxuPHBhdGggZD1cIm05My41IDExNy40cTEuMS0wLjMgMS45LTEuMWMxMy43IDEyLjggMjAuNyAxMi43IDIzLjIgMTEuOS00LjUgNy45LTEyLjQgMTMuNi0yMS43IDE1LjEgMS42LTIuMSAzLjktOC42LTMuNC0yNS45elwiLz5cclxuPHBhdGggZD1cIm05MC4zIDExNy4ydjAuMXEwLTAuMSAwLTAuMXpcIi8+XHJcbjxwYXRoIGQ9XCJtOTIuMSA4Mi40YzQuOSAwIDkuNiAxLjIgMTMuNyAzLjItMi43IDAuOS04LjMgNS0xMi4zIDIzcS0wLjctMC4yLTEuNC0wLjItMC40IDAtMC44IFxyXG4gICAgMGMtNC4zLTIwLjEtMTAuNi0yMi43LTEyLjUtMjMgNC0xLjkgOC41LTMgMTMuMy0zelwiLz5cclxuPHBhdGggZD1cIm04OC42IDExNmMwLjQgMC42IDEgMSAxLjcgMS4zLTguOCAxNS43LTcuNyAyMi42LTYuNCAyNS4yLTguOS0yLjQtMTYuMi04LjktMTkuOS0xNy4zIDIuMSAxLjEgOC43IDIuNSAyNC42LTkuMnpcIi8+XHJcbjxwYXRoIGQ9XCJtNjkuNiA5Mi4zYzAgMi41IDEuOSA5LjEgMTguNSAxOC4zLTAuMyAwLjYtMC42IDEuMy0wLjYgMi4xLTE4LjUtMS42LTI0IDIuNi0yNS43IFxyXG4gICAgNC45cS0wLjMtMi4yLTAuMy00LjZjMC04IDMuMS0xNS4zIDguMS0yMC43elwiLz5cclxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGZpbGw9XCJ3aGl0ZVwiIGQ9XCJtNjkuNiA5Mi4zYzAgMi41IDEuOSA5LjEgMTguNSAxOC4zLTAuMyAwLjYtMC42IDEuMy0wLjYgMi4xLTE4LjUtMS42LTI0IDIuNi0yNS43IFxyXG4gICAgNC45cS0wLjMtMi4yLTAuMy00LjZjMC04IDMuMS0xNS4zIDguMS0yMC43em0xOSAyMy43YzAuNCAwLjYgMSAxIDEuNyAxLjMtOC44IDE1LjctNy43IDIyLjYtNi40IDI1LjItOC45LTIuNC0xNi4yLTguOS0xOS45LTE3LjMgXHJcbiAgICAyLjEgMS4xIDguNyAyLjUgMjQuNi05LjJ6bTMuNS0zMy42YzQuOSAwIDkuNiAxLjIgMTMuNyAzLjItMi43IDAuOS04LjMgNS0xMi4zIDIzcS0wLjctMC4yLTEuNC0wLjItMC40IDAtMC44IFxyXG4gICAgMGMtNC4zLTIwLjEtMTAuNi0yMi43LTEyLjUtMjMgNC0xLjkgOC41LTMgMTMuMy0zem0xLjQgMzVxMS4xLTAuMyAxLjktMS4xYzEzLjcgMTIuOCAyMC43IDEyLjcgMjMuMiAxMS45LTQuNSA3LjktMTIuNCBcclxuICAgIDEzLjYtMjEuNyAxNS4xIDEuNi0yLjEgMy45LTguNi0zLjQtMjUuOXptMi45LTYuMWMxOC42LTguMyAxOS45LTE1IDE5LjgtMTcuMSA0LjEgNS4yIDYuNSAxMS43IDYuNSAxOC44cTAgNC0xIFxyXG4gICAgNy43Yy0xLjQtMi40LTYuNS03LjEtMjUtNy4ycTAtMC4yIDAtMC41IDAtMC45LTAuMy0xLjd6bS02LjEgNS45djAuMXEwLTAuMSAwLTAuMXpcIi8+XHJcbjxwYXRoIGQ9XCJtODcuNSAxMTIuN3EwIDAgMCAwYzAtMC44IDAuMy0xLjUgMC42LTIuMXEwLjEgMCAwLjEtMC4xYzAuNi0xIDEuNy0xLjggMy0ycTAuMSAwIDAuMS0wLjEgMC40IDAgMC44IDAgMC43IDAgMS40IDAuMiAwLjEgXHJcbiAgICAwIDAuMSAwLjFjMS4zIDAuNCAyLjIgMS4zIDIuOCAyLjVxMCAwIDAgMC4xIDAuMyAwLjggMC4zIDEuNyAwIDAuMyAwIDAuNSAwIDAuMSAwIDAuMWMtMC4xIDEtMC42IDEuOS0xLjMgMi42cTAgMC4xIFxyXG4gICAgMCAwLjEtMC44IDAuOC0xLjkgMS4xIDAgMCAwIDAtMC43IDAuMy0xLjQgMC4zYy0wLjcgMC0xLjMtMC4yLTEuOC0wLjR2LTAuMXEwIDAgMCAwLjFjLTAuNy0wLjMtMS4zLTAuNy0xLjctMS4zcS0wLjEgXHJcbiAgICAwLTAuMS0wLjFjLTAuNi0wLjctMS0xLjgtMS0yLjlxMC0wLjEgMC0wLjN6XCIvPlxyXG4gICAgPC9nPlxyXG48L3N2Zz5cclxuPHNwYW4gY2xhc3M9XCJsLXdoZWVsXCI+PC9zcGFuPlxyXG48c3BhbiBjbGFzcz1cInItd2hlZWxcIj48L3NwYW4+XHJcbjwvZGl2PlxyXG5gO1xyXG59XHJcbmV4cG9ydHMuc3ZnID0gc3ZnO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMud2lubmVycyA9IGV4cG9ydHMuZW5pZ2luZSA9IGV4cG9ydHMuZ2FyYWdlID0gdm9pZCAwO1xyXG52YXIgdXJscztcclxuKGZ1bmN0aW9uICh1cmxzKSB7XHJcbiAgICB1cmxzW1wiZ2FyYWdlXCJdID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2FyYWdlXCI7XHJcbiAgICB1cmxzW1wiZW5naW5lXCJdID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvZW5naW5lXCI7XHJcbiAgICB1cmxzW1wid2lubmVyc1wiXSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3dpbm5lcnNcIjtcclxufSkodXJscyB8fCAodXJscyA9IHt9KSk7XHJcbmNsYXNzIEdhcmFnZSB7XHJcbiAgICBnZXRDYXIoaWQpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2godXJscy5nYXJhZ2UgKyBgLyR7aWR9YCk7XHJcbiAgICB9XHJcbiAgICBnZXRBbGxDYXJzKCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmxzLmdhcmFnZSk7XHJcbiAgICB9XHJcbiAgICBnZXRMaW1pdGVkQ2FycyhwYWdlTikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmZXRjaCh1cmxzLmdhcmFnZSArIGA/X3BhZ2U9JHtwYWdlTn0mX2xpbWl0PTRgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFkZENhcihjYXJOYW1lLCBjYXJDb2xvcikge1xyXG4gICAgICAgIGZldGNoKHVybHMuZ2FyYWdlLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWU6IGNhck5hbWUsIGNvbG9yOiBjYXJDb2xvciB9KSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbW92ZUNhcihpZCkge1xyXG4gICAgICAgIGZldGNoKHVybHMuZ2FyYWdlICsgYC8ke2lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUNhcihpZCwgY2FyTmFtZSwgY2FyQ29sb3IpIHtcclxuICAgICAgICBmZXRjaCh1cmxzLmdhcmFnZSArIGAvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZTogY2FyTmFtZSwgY29sb3I6IGNhckNvbG9yIH0pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEVuZ2luZSB7XHJcbiAgICBzdGFydChpZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKHVybHMuZW5naW5lICsgYD9pZD0ke2lkfSZzdGF0dXM9c3RhcnRlZGAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0b3AoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB5aWVsZCBmZXRjaCh1cmxzLmVuZ2luZSArIGA/aWQ9JHtpZH0mc3RhdHVzPXN0b3BwZWRgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZHJpdmUoaWQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaCh1cmxzLmVuZ2luZSArIGA/aWQ9JHtpZH0mc3RhdHVzPWRyaXZlYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgV2lubmVycyB7XHJcbiAgICBnZXRBbGxXaW5lcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybHMud2lubmVycyk7XHJcbiAgICB9XHJcbiAgICBnZXRMaW1pdGVkV2lubmVycyhwYWdlTikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBmZXRjaCh1cmxzLndpbm5lcnMgKyBgP19wYWdlPSR7cGFnZU59Jl9saW1pdD0xMGApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkV2lubmVyKGlkLCB0aW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2godXJscy53aW5uZXJzLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQ6IGlkLCB3aW5zOiAxLCB0aW1lOiB0aW1lIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldFdpbm5lcihpZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKHVybHMud2lubmVycyArIGAvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVXaW5uZXIoaWQsIHdpbnMsIHRpbWUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaCh1cmxzLndpbm5lcnMgKyBgLyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgd2luczogd2lucywgdGltZTogdGltZSB9KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVXaW5uZXIoaWQpIHtcclxuICAgICAgICBmZXRjaCh1cmxzLndpbm5lcnMgKyBgLyR7aWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZ2FyYWdlID0gbmV3IEdhcmFnZSgpO1xyXG5leHBvcnRzLmVuaWdpbmUgPSBuZXcgRW5naW5lKCk7XHJcbmV4cG9ydHMud2lubmVycyA9IG5ldyBXaW5uZXJzKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc2hvd0hpZGUgPSB2b2lkIDA7XHJcbmNvbnN0IHNob3dXaW5uZXJzXzEgPSByZXF1aXJlKFwiLi4vZ2V0Q2FycyZXaW5uZXJzL3Nob3dXaW5uZXJzXCIpO1xyXG5mdW5jdGlvbiBzaG93SGlkZSgpIHtcclxuICAgIGNvbnN0IGdhcmFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UtdmlldycpO1xyXG4gICAgY29uc3Qgd2lubmVyc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzLXZpZXcnKTtcclxuICAgIGNvbnN0IGdhcmFnZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZScpO1xyXG4gICAgY29uc3Qgd2lubmVyc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcnMnKTtcclxuICAgIGdhcmFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhpZGVCbG9jayhnYXJhZ2VCbG9jaywgd2lubmVyc0Jsb2NrKSk7XHJcbiAgICB3aW5uZXJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGhpZGVCbG9jayh3aW5uZXJzQmxvY2ssIGdhcmFnZUJsb2NrKTtcclxuICAgICAgICAoMCwgc2hvd1dpbm5lcnNfMS5zaG93V2lubmVycykoKTtcclxuICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gaGlkZUJsb2NrKHNob3dpbmdFbCwgaGlkaW5nRWwpIHtcclxuICAgICAgICBzaG93aW5nRWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgaGlkaW5nRWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zaG93SGlkZSA9IHNob3dIaWRlO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcmVuZGVySHRtbF8xID0gcmVxdWlyZShcIi4vb3RoZXJzL3JlbmRlckh0bWxcIik7XHJcbnJlcXVpcmUoXCIuL3ZpZXdzL3ZpZXdcIik7XHJcbnJlcXVpcmUoXCIuL3N0eWxlLmNzc1wiKTtcclxucmVxdWlyZShcIi4vZ2V0Q2FycyZXaW5uZXJzL2FkZENhclwiKTtcclxucmVxdWlyZShcIi4vZ2V0Q2FycyZXaW5uZXJzL3Nob3dDYXJcIik7XHJcbnJlcXVpcmUoXCIuL2dldENhcnMmV2lubmVycy9kZWxldGVDYXJcIik7XHJcbnJlcXVpcmUoXCIuL2dldENhcnMmV2lubmVycy9zdGFydFN0b3BcIik7XHJcbnJlcXVpcmUoXCIuL2dldENhcnMmV2lubmVycy9yYWNlXCIpO1xyXG5yZXF1aXJlKFwiLi9nZXRDYXJzJldpbm5lcnMvc2hvd1dpbm5lcnNcIik7XHJcbnJlcXVpcmUoXCIuL2dldENhcnMmV2lubmVycy9tb2RhbFdpbmRvd1wiKTtcclxuKDAsIHJlbmRlckh0bWxfMS5yZW5kZXJIdG1sKSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=