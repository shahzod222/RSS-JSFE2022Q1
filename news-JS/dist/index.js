/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merriweather&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;\r\n    overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n    font-family: 'Merriweather', serif;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/view/news/news.css"],"names":[],"mappings":"AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,8BAA8B;IAC9B,kBAAkB;IAClB,qNAAqN;IACrN,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,sBAAsB;IACtB,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;;IAEI,YAAY;IACZ,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,8BAA8B;IAC9B,WAAW;IACX,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;IACV,kCAAkC;AACtC;;AAEA;IACI,cAAc;IACd,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,sBAAsB;IACtB,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,QAAQ;AACZ;;AAEA;;IAEI;QACI,mBAAmB;QACnB,gBAAgB;IACpB;;IAEA;QACI,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,+BAA+B;QAC/B,uBAAuB;QACvB,WAAW;QACX,gBAAgB;QAChB,WAAW;QACX,kBAAkB;QAClB,WAAW;QACX,MAAM;QACN,SAAS;QACT,WAAW;IACf;;IAEA;QACI,2BAA2B;IAC/B;;IAEA;QACI,aAAa;QACb,YAAY;QACZ,6BAA6B;QAC7B,qBAAqB;IACzB;;IAEA;QACI,kBAAkB;IACtB;;AAEJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');\r\n\r\n.news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;\r\n    overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n    font-family: 'Merriweather', serif;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Rubik&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sources {\r\n    max-width: 95%;\r\n    height:150px;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    margin: 30px 0;\r\n    overflow: auto;\r\n    font: 1.3em 'Lato', sans-serif;\r\n}\r\n\r\n.source__item {\r\n    color: #0072b5;\r\n    background: none;\r\n    border: 2px solid #34568b;\r\n    border-radius: 22px;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    color: #88B04B;\r\n    border-color: #009B77;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #88B04B;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n\r\n.alph-btns {\r\n    max-width: 280px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.letter {\r\n    width: 30px;\r\n    height: 30px;\r\n    font-family: 'Rubik', sans-serif;\r\n    font-size: 15px;\r\n    background: #a0daa9;\r\n    color: #282d3c;\r\n    margin: 5px;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    border: none;\r\n    outline: none;\r\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n    transition: 0.4s ease;\r\n}\r\n\r\n.letter:hover {\r\n    box-shadow: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/view/sources/sources.css"],"names":[],"mappings":"AAEA;IACI,cAAc;IACd,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;IACd,cAAc;IACd,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI,cAAc;IACd,qBAAqB;IACrB,wCAAwC;IACxC,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gCAAgC;IAChC,eAAe;IACf,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb;mDAC+C;IAC/C,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Rubik&display=swap');\r\n\r\n.sources {\r\n    max-width: 95%;\r\n    height:150px;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    margin: 30px 0;\r\n    overflow: auto;\r\n    font: 1.3em 'Lato', sans-serif;\r\n}\r\n\r\n.source__item {\r\n    color: #0072b5;\r\n    background: none;\r\n    border: 2px solid #34568b;\r\n    border-radius: 22px;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    color: #88B04B;\r\n    border-color: #009B77;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #88B04B;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n\r\n.alph-btns {\r\n    max-width: 280px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.letter {\r\n    width: 30px;\r\n    height: 30px;\r\n    font-family: 'Rubik', sans-serif;\r\n    font-size: 15px;\r\n    background: #a0daa9;\r\n    color: #282d3c;\r\n    margin: 5px;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    border: none;\r\n    outline: none;\r\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n    transition: 0.4s ease;\r\n}\r\n\r\n.letter:hover {\r\n    box-shadow: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter&family=Ubuntu:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\r\nbody {\r\n    height: 100%;\r\n    color: #fff;\r\n    background: #edf1ff;\r\n    font-family: sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.wrapper {\r\n    min-height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nheader {\r\n    padding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\n    color: #282d3c;\r\n    font-size: 40px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    flex: 1 1 auto;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    padding: 5px;\r\n}\r\n\r\nfooter .copyright {\r\n    color: #333;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-family: 'Inter', sans-serif;\r\n}\r\n\r\nfooter .copyright a {\r\n    color: #444;\r\n}\r\n\r\nfooter .copyright a:hover {\r\n    color: #555;\r\n}\r\n\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n\r\nfooter .github-icon {\r\n    width: 65px;\r\n    height: 65px;\r\n    transform: scale(0.9);\r\n    transition: 0.3s ease;\r\n    margin-left: 10px;\r\n}\r\n\r\nfooter .rs-icon {\r\n    width: 180px;\r\n    height: 55px;\r\n    margin-right: 10px;\r\n    transform: scale(0.9);\r\n    transition: 0.3s ease;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n\r\n    footer {\r\n        flex-direction: column;\r\n    }\r\n    footer .rs-icon,\r\n    footer .github-icon {\r\n        margin-left: 0px;\r\n        margin-right: 0px;\r\n    }\r\n\r\n}\r\n\r\n.rs-icon:hover,\r\n.github-icon:hover {\r\n    transform: scale(1.1);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;;IAEI;QACI,sBAAsB;IAC1B;IACA;;QAEI,gBAAgB;QAChB,iBAAiB;IACrB;;AAEJ;;AAEA;;IAEI,qBAAqB;AACzB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter&family=Ubuntu:wght@700&display=swap');\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    color: #fff;\r\n    background: #edf1ff;\r\n    font-family: sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.wrapper {\r\n    min-height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nheader {\r\n    padding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\n    color: #282d3c;\r\n    font-size: 40px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    flex: 1 1 auto;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    padding: 5px;\r\n}\r\n\r\nfooter .copyright {\r\n    color: #333;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-family: 'Inter', sans-serif;\r\n}\r\n\r\nfooter .copyright a {\r\n    color: #444;\r\n}\r\n\r\nfooter .copyright a:hover {\r\n    color: #555;\r\n}\r\n\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n\r\nfooter .github-icon {\r\n    width: 65px;\r\n    height: 65px;\r\n    transform: scale(0.9);\r\n    transition: 0.3s ease;\r\n    margin-left: 10px;\r\n}\r\n\r\nfooter .rs-icon {\r\n    width: 180px;\r\n    height: 55px;\r\n    margin-right: 10px;\r\n    transform: scale(0.9);\r\n    transition: 0.3s ease;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n\r\n    footer {\r\n        flex-direction: column;\r\n    }\r\n    footer .rs-icon,\r\n    footer .github-icon {\r\n        margin-left: 0px;\r\n        margin-right: 0px;\r\n    }\r\n\r\n}\r\n\r\n.rs-icon:hover,\r\n.github-icon:hover {\r\n    transform: scale(1.1);\r\n}\r\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./src/components/view/news/news.css":
/*!*******************************************!*\
  !*** ./src/components/view/news/news.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./news.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/view/sources/sources.css":
/*!*************************************************!*\
  !*** ./src/components/view/sources/sources.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./sources.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/global.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/app/app.ts":
/*!***********************************!*\
  !*** ./src/components/app/app.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const controller_1 = __importDefault(__webpack_require__(/*! ../controller/controller */ "./src/components/controller/controller.ts"));
const appView_1 = __webpack_require__(/*! ../view/appView */ "./src/components/view/appView.ts");
class App {
    constructor() {
        this.controller = new controller_1.default();
        this.view = new appView_1.AppView();
    }
    start() {
        const sources = document.querySelector('.sources');
        sources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}
exports["default"] = App;


/***/ }),

/***/ "./src/components/controller/appLoader.ts":
/*!************************************************!*\
  !*** ./src/components/controller/appLoader.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const interfaces_1 = __webpack_require__(/*! ../helper/interfaces */ "./src/components/helper/interfaces.ts");
const loader_1 = __importDefault(__webpack_require__(/*! ./loader */ "./src/components/controller/loader.ts"));
class AppLoader extends loader_1.default {
    constructor() {
        super(interfaces_1.URLs.apiUrl, {
            apiKey: interfaces_1.URLs.apiKey,
        });
    }
}
exports["default"] = AppLoader;


/***/ }),

/***/ "./src/components/controller/controller.ts":
/*!*************************************************!*\
  !*** ./src/components/controller/controller.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const appLoader_1 = __importDefault(__webpack_require__(/*! ./appLoader */ "./src/components/controller/appLoader.ts"));
class AppController extends appLoader_1.default {
    getSources(callback) {
        super.getResp({
            endpoint: 'sources',
        }, callback);
    }
    getNews(e, callback) {
        let target = e.target;
        const newsContainer = e.currentTarget;
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp({
                        endpoint: 'everything',
                        options: {
                            sources: sourceId,
                        },
                    }, callback);
                }
                return;
            }
            target = target.parentNode;
        }
    }
}
exports["default"] = AppController;


/***/ }),

/***/ "./src/components/controller/loader.ts":
/*!*********************************************!*\
  !*** ./src/components/controller/loader.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Loader {
    constructor(baseLink, options) {
        this.baseLink = baseLink;
        this.options = options;
    }
    getResp({ endpoint = '', options = {} }, callback = (data) => {
        console.error('No callback for GET response', data);
    }) {
        this.load('GET', endpoint, callback, options);
    }
    errorHandler(res) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }
    makeUrl(options, endpoint) {
        const urlOptions = Object.assign(Object.assign({}, this.options), options);
        let url = `${this.baseLink}${endpoint}?`;
        let key;
        for (key in urlOptions) {
            url += `&${key}=${urlOptions[key]}`;
        }
        return url.replace('&', '');
    }
    load(method, endpoint, callback, options) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}
exports["default"] = Loader;


/***/ }),

/***/ "./src/components/helper/functions.ts":
/*!********************************************!*\
  !*** ./src/components/helper/functions.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showByAlph = exports.sortArray = void 0;
const sources_1 = __importDefault(__webpack_require__(/*! ../view/sources/sources */ "./src/components/view/sources/sources.ts"));
function sortArray(array, letter) {
    const res = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].name[0] == letter) {
            res.push(array[i]);
        }
    }
    return res;
}
exports.sortArray = sortArray;
function showByAlph(sources) {
    const alphBlock = document.querySelector('.alph-btns');
    const buttonsBlock = document.querySelector('.buttons');
    const alph = 'ABCDEFGHILMNPRSTUVWXY';
    const drawClass = new sources_1.default();
    alphBlock.innerHTML = '';
    for (let i = 0; i < alph.length; i++) {
        const letter = document.createElement('button');
        alphBlock.append(letter);
        letter.innerHTML = alph[i];
        letter.className = 'letter';
    }
    const allLetters = document.querySelectorAll('.letter');
    allLetters.forEach((e) => {
        e.addEventListener('click', () => {
            buttonsBlock.innerHTML = '';
            drawClass.draw(sortArray(sources, e.innerHTML));
        });
    });
}
exports.showByAlph = showByAlph;


/***/ }),

/***/ "./src/components/helper/interfaces.ts":
/*!*********************************************!*\
  !*** ./src/components/helper/interfaces.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.URLs = void 0;
var URLs;
(function (URLs) {
    URLs["apiKey"] = "a628c8597cf54cf0bfd3b0c8666e1c59";
    URLs["apiUrl"] = "https://nodenews.herokuapp.com/";
    URLs["urlToAltImg"] = "https://media.istockphoto.com/vectors/abstract-globe-background-vector-id1311148884?k=20&m=1311148884&s=612x612&w=0&h=2zFGLiw0VmQbh_CFQgbTzaaamRygqILdq1T8QuglBSQ=";
})(URLs = exports.URLs || (exports.URLs = {}));


/***/ }),

/***/ "./src/components/view/appView.ts":
/*!****************************************!*\
  !*** ./src/components/view/appView.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppView = void 0;
const news_1 = __importDefault(__webpack_require__(/*! ./news/news */ "./src/components/view/news/news.ts"));
const functions_1 = __webpack_require__(/*! ../helper/functions */ "./src/components/helper/functions.ts");
class AppView {
    constructor() {
        this.news = new news_1.default();
    }
    drawNews(data) {
        const values = (data === null || data === void 0 ? void 0 : data.articles) ? data === null || data === void 0 ? void 0 : data.articles : [];
        this.news.draw(values);
    }
    drawSources(data) {
        const values = (data === null || data === void 0 ? void 0 : data.sources) ? data === null || data === void 0 ? void 0 : data.sources : [];
        (0, functions_1.showByAlph)(values);
    }
}
exports.AppView = AppView;
exports["default"] = AppView;


/***/ }),

/***/ "./src/components/view/news/news.ts":
/*!******************************************!*\
  !*** ./src/components/view/news/news.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interfaces_1 = __webpack_require__(/*! ../../helper/interfaces */ "./src/components/helper/interfaces.ts");
__webpack_require__(/*! ./news.css */ "./src/components/view/news/news.css");
class News {
    draw(data) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true);
            const newsItem = newsClone.querySelector('.news__item');
            const newsMetsPhoto = newsClone.querySelector('.news__meta-photo');
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author');
            const newsMetaDate = newsClone.querySelector('.news__meta-date');
            const newsDescTitle = newsClone.querySelector('.news__description-title');
            const newsDescSrc = newsClone.querySelector('.news__description-source');
            const newsDescContent = newsClone.querySelector('.news__description-content');
            const newsRM = newsClone.querySelector('.news__read-more a');
            if (idx % 2)
                newsItem.classList.add('alt');
            newsMetsPhoto.style.backgroundImage = `url(${item.urlToImage || interfaces_1.URLs.urlToAltImg})`;
            newsMetaAuthor.textContent = item.author || item.source.name;
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            newsDescTitle.textContent = item.title;
            newsDescSrc.textContent = item.source.name;
            newsDescContent.textContent = item.description;
            newsRM.setAttribute('href', item.url);
            fragment.append(newsClone);
        });
        const newsDiv = document.querySelector('.news');
        newsDiv.innerHTML = '';
        newsDiv.appendChild(fragment);
    }
}
exports["default"] = News;


/***/ }),

/***/ "./src/components/view/sources/sources.ts":
/*!************************************************!*\
  !*** ./src/components/view/sources/sources.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./sources.css */ "./src/components/view/sources/sources.css");
class Sources {
    draw(data) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            const srcItemName = sourceClone.querySelector('.source__item-name');
            const srcItem = sourceClone.querySelector('.source__item');
            srcItemName.textContent = item.name;
            srcItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        const sources = document.querySelector('.sources');
        sources.append(fragment);
    }
}
exports["default"] = Sources;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __importDefault(__webpack_require__(/*! ./components/app/app */ "./src/components/app/app.ts"));
__webpack_require__(/*! ./global.css */ "./src/global.css");
const app = new app_1.default();
app.start();


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0FBQzdELG1CQUFPLENBQUMsZ0VBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ25CRjtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDhCQUE4QixtQkFBTyxDQUFDLHlEQUFzQjtBQUM1RCxtQkFBTyxDQUFDLHNDQUFjO0FBQ3RCO0FBQ0E7Ozs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25ld3Nqcy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvbmV3cy9uZXdzLmNzcyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy92aWV3L3NvdXJjZXMvc291cmNlcy5jc3MiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9uZXdzanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy92aWV3L25ld3MvbmV3cy5jc3M/ZTIwNiIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy92aWV3L3NvdXJjZXMvc291cmNlcy5jc3M/NTJiMSIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvZ2xvYmFsLmNzcz9kM2JjIiwid2VicGFjazovL25ld3Nqcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvYXBwTG9hZGVyLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy9jb250cm9sbGVyL2xvYWRlci50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy9oZWxwZXIvZnVuY3Rpb25zLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9jb21wb25lbnRzL2hlbHBlci9pbnRlcmZhY2VzLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvYXBwVmlldy50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy92aWV3L25ld3MvbmV3cy50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvY29tcG9uZW50cy92aWV3L3NvdXJjZXMvc291cmNlcy50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXdzanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9uZXdzanMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVycml3ZWF0aGVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5uZXdzX19pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNiU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS40O1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMXB4IDJweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMnB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggNHB4IDhweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggOHB4IDE2cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDE2cHggMzJweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMzJweCA2NHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbTpob3ZlciAubmV3c19fbWV0YS1waG90byB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKSByb3RhdGUoM2RlZyk7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1waG90byB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzLFxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhLWRldGFpbHMgdWwge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhLWRldGFpbHMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogLTEyMCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjJzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gaDIge1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogI2EyYTJhMjtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSBhIHtcXHJcXG4gICAgY29sb3I6ICM1YWQ2N2Q7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiAubmV3c19fcmVhZC1tb3JlIGE6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAn4oaSJztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4zcywgb3BhY2l0eSAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSBhOmhvdmVyOmFmdGVyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gcCB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwIDA7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIHA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gcDpmaXJzdC1vZi10eXBlOmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNWFkNjdkO1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgdG9wOiAtMC43NXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbTpob3ZlciAubmV3c19fbWV0YS1kZXRhaWxzIHtcXHJcXG4gICAgbGVmdDogMCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcclxcblxcclxcbiAgICAubmV3c19faXRlbSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3c19faXRlbSAubmV3c19fbWV0YSB7XFxyXFxuICAgICAgICBmbGV4LWJhc2lzOiA0MCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIGZsZXgtYmFzaXM6IDYwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb246YmVmb3JlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtM2RlZyk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC0zZGVnKTtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogLTEwcHg7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3c19faXRlbS5hbHQge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uZXdzX19pdGVtLmFsdCAubmV3c19fZGVzY3JpcHRpb246YmVmb3JlIHtcXHJcXG4gICAgICAgIGxlZnQ6IGluaGVyaXQ7XFxyXFxuICAgICAgICByaWdodDogLTEwcHg7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygzZGVnKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2tldygzZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3c19faXRlbS5hbHQgLm5ld3NfX21ldGEtZGV0YWlscyB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9uZXdzL25ld3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIscU5BQXFOO0lBQ3JOLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7O0lBRUk7UUFDSSxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksK0JBQStCO1FBQy9CLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLE1BQU07UUFDTixTQUFTO1FBQ1QsV0FBVztJQUNmOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWiw2QkFBNkI7UUFDN0IscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcnJpd2VhdGhlciZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4ubmV3c19faXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjYlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDFweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDJweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDRweCA4cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDhweCAxNnB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAxNnB4IDMycHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDMycHggNjRweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW06aG92ZXIgLm5ld3NfX21ldGEtcGhvdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgcm90YXRlKDNkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtcGhvdG8ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtZGV0YWlscyxcXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzIHVsIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IC0xMjAlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHRyYW5zaXRpb246IGxlZnQgMC4ycztcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIGgyIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgY29sb3I6ICNhMmEyYTI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUgYSB7XFxyXFxuICAgIGNvbG9yOiAjNWFkNjdkO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSBhOmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJ+KGkic7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MsIG9wYWNpdHkgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUgYTpob3ZlcjphZnRlciB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIHAge1xcclxcbiAgICBtYXJnaW46IDFyZW0gMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSBwOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIHA6Zmlyc3Qtb2YtdHlwZTpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzVhZDY3ZDtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIHRvcDogLTAuNzVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW06aG92ZXIgLm5ld3NfX21ldGEtZGV0YWlscyB7XFxyXFxuICAgIGxlZnQ6IDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0ge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEge1xcclxcbiAgICAgICAgZmxleC1iYXNpczogNDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBmbGV4LWJhc2lzOiA2MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uOmJlZm9yZSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTNkZWcpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtM2RlZyk7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgei1pbmRleDogLTE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0uYWx0IHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3c19faXRlbS5hbHQgLm5ld3NfX2Rlc2NyaXB0aW9uOmJlZm9yZSB7XFxyXFxuICAgICAgICBsZWZ0OiBpbmhlcml0O1xcclxcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoM2RlZyk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoM2RlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0uYWx0IC5uZXdzX19tZXRhLWRldGFpbHMge1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEA3MDAmZmFtaWx5PVJ1YmlrJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zb3VyY2VzIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA5NSU7XFxyXFxuICAgIGhlaWdodDoxNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMzBweCAwO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgZm9udDogMS4zZW0gJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uc291cmNlX19pdGVtIHtcXHJcXG4gICAgY29sb3I6ICMwMDcyYjU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNDU2OGI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICBtYXJnaW46IDAuNWVtO1xcclxcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc291cmNlX19pdGVtOmhvdmVyLFxcclxcbi5zb3VyY2VfX2l0ZW06Zm9jdXMge1xcclxcbiAgICBjb2xvcjogIzg4QjA0QjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA5Qjc3O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAuNWVtIDAuNWVtIC0wLjRlbSAjODhCMDRCO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VfX2l0ZW0tbmFtZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5hbHBoLWJ0bnMge1xcclxcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2EwZGFhOTtcXHJcXG4gICAgY29sb3I6ICMyODJkM2M7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LFxcclxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3VyY2VzL3NvdXJjZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsY0FBYztJQUNkLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksY0FBYztJQUNkLHFCQUFxQjtJQUNyQix3Q0FBd0M7SUFDeEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiO21EQUMrQztJQUMvQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDcwMCZmYW1pbHk9UnViaWsmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLnNvdXJjZXMge1xcclxcbiAgICBtYXgtd2lkdGg6IDk1JTtcXHJcXG4gICAgaGVpZ2h0OjE1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAzMHB4IDA7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBmb250OiAxLjNlbSAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VfX2l0ZW0ge1xcclxcbiAgICBjb2xvcjogIzAwNzJiNTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM0NTY4YjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIG1hcmdpbjogMC41ZW07XFxyXFxuICAgIHBhZGRpbmc6IDFlbSAyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VfX2l0ZW06aG92ZXIsXFxyXFxuLnNvdXJjZV9faXRlbTpmb2N1cyB7XFxyXFxuICAgIGNvbG9yOiAjODhCMDRCO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMwMDlCNzc7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMC41ZW0gMC41ZW0gLTAuNGVtICM4OEIwNEI7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdXJjZV9faXRlbS1uYW1lIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmFscGgtYnRucyB7XFxyXFxuICAgIG1heC13aWR0aDogMjgwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXIge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYTBkYWE5O1xcclxcbiAgICBjb2xvcjogIzI4MmQzYztcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsXFxyXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXI6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlciZmYW1pbHk9VWJ1bnR1OndnaHRANzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlZGYxZmY7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgICBjb2xvcjogIzI4MmQzYztcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0IHtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQgYSB7XFxyXFxuICAgIGNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmNvcHlyaWdodCBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICfCqSc7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuZ2l0aHViLWljb24ge1xcclxcbiAgICB3aWR0aDogNjVweDtcXHJcXG4gICAgaGVpZ2h0OiA2NXB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAucnMtaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG5cXHJcXG4gICAgZm9vdGVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgZm9vdGVyIC5ycy1pY29uLFxcclxcbiAgICBmb290ZXIgLmdpdGh1Yi1pY29uIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucnMtaWNvbjpob3ZlcixcXHJcXG4uZ2l0aHViLWljb246aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBOztRQUVJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0FBRUo7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyJmZhbWlseT1VYnVudHU6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZDogI2VkZjFmZjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBoMSB7XFxyXFxuICAgIGNvbG9yOiAjMjgyZDNjO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQge1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmNvcHlyaWdodCBhIHtcXHJcXG4gICAgY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0IGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQ6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJ8KpJztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5naXRodWItaWNvbiB7XFxyXFxuICAgIHdpZHRoOiA2NXB4O1xcclxcbiAgICBoZWlnaHQ6IDY1cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5ycy1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDU1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcblxcclxcbiAgICBmb290ZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICBmb290ZXIgLnJzLWljb24sXFxyXFxuICAgIGZvb3RlciAuZ2l0aHViLWljb24ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5ycy1pY29uOmhvdmVyLFxcclxcbi5naXRodWItaWNvbjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25ld3MuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zb3VyY2VzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29udHJvbGxlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb250cm9sbGVyL2NvbnRyb2xsZXJcIikpO1xyXG5jb25zdCBhcHBWaWV3XzEgPSByZXF1aXJlKFwiLi4vdmlldy9hcHBWaWV3XCIpO1xyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IGNvbnRyb2xsZXJfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IGFwcFZpZXdfMS5BcHBWaWV3KCk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCBzb3VyY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvdXJjZXMnKTtcclxuICAgICAgICBzb3VyY2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuY29udHJvbGxlci5nZXROZXdzKGUsIChkYXRhKSA9PiB0aGlzLnZpZXcuZHJhd05ld3MoZGF0YSkpKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZ2V0U291cmNlcygoZGF0YSkgPT4gdGhpcy52aWV3LmRyYXdTb3VyY2VzKGRhdGEpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVyZmFjZXNfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXIvaW50ZXJmYWNlc1wiKTtcclxuY29uc3QgbG9hZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbG9hZGVyXCIpKTtcclxuY2xhc3MgQXBwTG9hZGVyIGV4dGVuZHMgbG9hZGVyXzEuZGVmYXVsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihpbnRlcmZhY2VzXzEuVVJMcy5hcGlVcmwsIHtcclxuICAgICAgICAgICAgYXBpS2V5OiBpbnRlcmZhY2VzXzEuVVJMcy5hcGlLZXksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gQXBwTG9hZGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcHBMb2FkZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hcHBMb2FkZXJcIikpO1xyXG5jbGFzcyBBcHBDb250cm9sbGVyIGV4dGVuZHMgYXBwTG9hZGVyXzEuZGVmYXVsdCB7XHJcbiAgICBnZXRTb3VyY2VzKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgc3VwZXIuZ2V0UmVzcCh7XHJcbiAgICAgICAgICAgIGVuZHBvaW50OiAnc291cmNlcycsXHJcbiAgICAgICAgfSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgZ2V0TmV3cyhlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICBjb25zdCBuZXdzQ29udGFpbmVyID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIHdoaWxlICh0YXJnZXQgIT09IG5ld3NDb250YWluZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NvdXJjZV9faXRlbScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc291cmNlLWlkJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3c0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc291cmNlJykgIT09IHNvdXJjZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3c0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtc291cmNlJywgc291cmNlSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmdldFJlc3Aoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogJ2V2ZXJ5dGhpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzOiBzb3VyY2VJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcENvbnRyb2xsZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIExvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihiYXNlTGluaywgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYmFzZUxpbmsgPSBiYXNlTGluaztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgfVxyXG4gICAgZ2V0UmVzcCh7IGVuZHBvaW50ID0gJycsIG9wdGlvbnMgPSB7fSB9LCBjYWxsYmFjayA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gY2FsbGJhY2sgZm9yIEdFVCByZXNwb25zZScsIGRhdGEpO1xyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMubG9hZCgnR0VUJywgZW5kcG9pbnQsIGNhbGxiYWNrLCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGVycm9ySGFuZGxlcihyZXMpIHtcclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxIHx8IHJlcy5zdGF0dXMgPT09IDQwNClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTb3JyeSwgYnV0IHRoZXJlIGlzICR7cmVzLnN0YXR1c30gZXJyb3I6ICR7cmVzLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlcy5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICAgIG1ha2VVcmwob3B0aW9ucywgZW5kcG9pbnQpIHtcclxuICAgICAgICBjb25zdCB1cmxPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpLCBvcHRpb25zKTtcclxuICAgICAgICBsZXQgdXJsID0gYCR7dGhpcy5iYXNlTGlua30ke2VuZHBvaW50fT9gO1xyXG4gICAgICAgIGxldCBrZXk7XHJcbiAgICAgICAgZm9yIChrZXkgaW4gdXJsT3B0aW9ucykge1xyXG4gICAgICAgICAgICB1cmwgKz0gYCYke2tleX09JHt1cmxPcHRpb25zW2tleV19YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybC5yZXBsYWNlKCcmJywgJycpO1xyXG4gICAgfVxyXG4gICAgbG9hZChtZXRob2QsIGVuZHBvaW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xyXG4gICAgICAgIGZldGNoKHRoaXMubWFrZVVybChvcHRpb25zLCBlbmRwb2ludCksIHsgbWV0aG9kIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHRoaXMuZXJyb3JIYW5kbGVyKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gY2FsbGJhY2soZGF0YSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zaG93QnlBbHBoID0gZXhwb3J0cy5zb3J0QXJyYXkgPSB2b2lkIDA7XHJcbmNvbnN0IHNvdXJjZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdmlldy9zb3VyY2VzL3NvdXJjZXNcIikpO1xyXG5mdW5jdGlvbiBzb3J0QXJyYXkoYXJyYXksIGxldHRlcikge1xyXG4gICAgY29uc3QgcmVzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFycmF5W2ldLm5hbWVbMF0gPT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgIHJlcy5wdXNoKGFycmF5W2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbmV4cG9ydHMuc29ydEFycmF5ID0gc29ydEFycmF5O1xyXG5mdW5jdGlvbiBzaG93QnlBbHBoKHNvdXJjZXMpIHtcclxuICAgIGNvbnN0IGFscGhCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbHBoLWJ0bnMnKTtcclxuICAgIGNvbnN0IGJ1dHRvbnNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zJyk7XHJcbiAgICBjb25zdCBhbHBoID0gJ0FCQ0RFRkdISUxNTlBSU1RVVldYWSc7XHJcbiAgICBjb25zdCBkcmF3Q2xhc3MgPSBuZXcgc291cmNlc18xLmRlZmF1bHQoKTtcclxuICAgIGFscGhCbG9jay5pbm5lckhUTUwgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxwaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGFscGhCbG9jay5hcHBlbmQobGV0dGVyKTtcclxuICAgICAgICBsZXR0ZXIuaW5uZXJIVE1MID0gYWxwaFtpXTtcclxuICAgICAgICBsZXR0ZXIuY2xhc3NOYW1lID0gJ2xldHRlcic7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhbGxMZXR0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxldHRlcicpO1xyXG4gICAgYWxsTGV0dGVycy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uc0Jsb2NrLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBkcmF3Q2xhc3MuZHJhdyhzb3J0QXJyYXkoc291cmNlcywgZS5pbm5lckhUTUwpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuc2hvd0J5QWxwaCA9IHNob3dCeUFscGg7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVVJMcyA9IHZvaWQgMDtcclxudmFyIFVSTHM7XHJcbihmdW5jdGlvbiAoVVJMcykge1xyXG4gICAgVVJMc1tcImFwaUtleVwiXSA9IFwiYTYyOGM4NTk3Y2Y1NGNmMGJmZDNiMGM4NjY2ZTFjNTlcIjtcclxuICAgIFVSTHNbXCJhcGlVcmxcIl0gPSBcImh0dHBzOi8vbm9kZW5ld3MuaGVyb2t1YXBwLmNvbS9cIjtcclxuICAgIFVSTHNbXCJ1cmxUb0FsdEltZ1wiXSA9IFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vdmVjdG9ycy9hYnN0cmFjdC1nbG9iZS1iYWNrZ3JvdW5kLXZlY3Rvci1pZDEzMTExNDg4ODQ/az0yMCZtPTEzMTExNDg4ODQmcz02MTJ4NjEyJnc9MCZoPTJ6RkdMaXcwVm1RYmhfQ0ZRZ2JUemFhYW1SeWdxSUxkcTFUOFF1Z2xCU1E9XCI7XHJcbn0pKFVSTHMgPSBleHBvcnRzLlVSTHMgfHwgKGV4cG9ydHMuVVJMcyA9IHt9KSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQXBwVmlldyA9IHZvaWQgMDtcclxuY29uc3QgbmV3c18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25ld3MvbmV3c1wiKSk7XHJcbmNvbnN0IGZ1bmN0aW9uc18xID0gcmVxdWlyZShcIi4uL2hlbHBlci9mdW5jdGlvbnNcIik7XHJcbmNsYXNzIEFwcFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdzID0gbmV3IG5ld3NfMS5kZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3TmV3cyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5hcnRpY2xlcykgPyBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEuYXJ0aWNsZXMgOiBbXTtcclxuICAgICAgICB0aGlzLm5ld3MuZHJhdyh2YWx1ZXMpO1xyXG4gICAgfVxyXG4gICAgZHJhd1NvdXJjZXMoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEuc291cmNlcykgPyBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEuc291cmNlcyA6IFtdO1xyXG4gICAgICAgICgwLCBmdW5jdGlvbnNfMS5zaG93QnlBbHBoKSh2YWx1ZXMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQXBwVmlldyA9IEFwcFZpZXc7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcFZpZXc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVyZmFjZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi9oZWxwZXIvaW50ZXJmYWNlc1wiKTtcclxucmVxdWlyZShcIi4vbmV3cy5jc3NcIik7XHJcbmNsYXNzIE5ld3Mge1xyXG4gICAgZHJhdyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgbmV3cyA9IGRhdGEubGVuZ3RoID49IDEwID8gZGF0YS5maWx0ZXIoKF9pdGVtLCBpZHgpID0+IGlkeCA8IDEwKSA6IGRhdGE7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgY29uc3QgbmV3c0l0ZW1UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3NJdGVtVGVtcCcpO1xyXG4gICAgICAgIG5ld3MuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld3NDbG9uZSA9IG5ld3NJdGVtVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3c0l0ZW0gPSBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX2l0ZW0nKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3c01ldHNQaG90byA9IG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fbWV0YS1waG90bycpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdzTWV0YUF1dGhvciA9IG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fbWV0YS1hdXRob3InKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3c01ldGFEYXRlID0gbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19tZXRhLWRhdGUnKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3c0Rlc2NUaXRsZSA9IG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fZGVzY3JpcHRpb24tdGl0bGUnKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3c0Rlc2NTcmMgPSBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX2Rlc2NyaXB0aW9uLXNvdXJjZScpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdzRGVzY0NvbnRlbnQgPSBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX2Rlc2NyaXB0aW9uLWNvbnRlbnQnKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3c1JNID0gbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19yZWFkLW1vcmUgYScpO1xyXG4gICAgICAgICAgICBpZiAoaWR4ICUgMilcclxuICAgICAgICAgICAgICAgIG5ld3NJdGVtLmNsYXNzTGlzdC5hZGQoJ2FsdCcpO1xyXG4gICAgICAgICAgICBuZXdzTWV0c1Bob3RvLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpdGVtLnVybFRvSW1hZ2UgfHwgaW50ZXJmYWNlc18xLlVSTHMudXJsVG9BbHRJbWd9KWA7XHJcbiAgICAgICAgICAgIG5ld3NNZXRhQXV0aG9yLnRleHRDb250ZW50ID0gaXRlbS5hdXRob3IgfHwgaXRlbS5zb3VyY2UubmFtZTtcclxuICAgICAgICAgICAgbmV3c01ldGFEYXRlLnRleHRDb250ZW50ID0gaXRlbS5wdWJsaXNoZWRBdC5zbGljZSgwLCAxMCkuc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLScpO1xyXG4gICAgICAgICAgICBuZXdzRGVzY1RpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcclxuICAgICAgICAgICAgbmV3c0Rlc2NTcmMudGV4dENvbnRlbnQgPSBpdGVtLnNvdXJjZS5uYW1lO1xyXG4gICAgICAgICAgICBuZXdzRGVzY0NvbnRlbnQudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBuZXdzUk0uc2V0QXR0cmlidXRlKCdocmVmJywgaXRlbS51cmwpO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQobmV3c0Nsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBuZXdzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MnKTtcclxuICAgICAgICBuZXdzRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIG5ld3NEaXYuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE5ld3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL3NvdXJjZXMuY3NzXCIpO1xyXG5jbGFzcyBTb3VyY2VzIHtcclxuICAgIGRyYXcoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZUl0ZW1UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdXJjZUl0ZW1UZW1wJyk7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZUNsb25lID0gc291cmNlSXRlbVRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNyY0l0ZW1OYW1lID0gc291cmNlQ2xvbmUucXVlcnlTZWxlY3RvcignLnNvdXJjZV9faXRlbS1uYW1lJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNyY0l0ZW0gPSBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc291cmNlX19pdGVtJyk7XHJcbiAgICAgICAgICAgIHNyY0l0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG4gICAgICAgICAgICBzcmNJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UtaWQnLCBpdGVtLmlkKTtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kKHNvdXJjZUNsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzb3VyY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvdXJjZXMnKTtcclxuICAgICAgICBzb3VyY2VzLmFwcGVuZChmcmFnbWVudCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU291cmNlcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYXBwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tcG9uZW50cy9hcHAvYXBwXCIpKTtcclxucmVxdWlyZShcIi4vZ2xvYmFsLmNzc1wiKTtcclxuY29uc3QgYXBwID0gbmV3IGFwcF8xLmRlZmF1bHQoKTtcclxuYXBwLnN0YXJ0KCk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9