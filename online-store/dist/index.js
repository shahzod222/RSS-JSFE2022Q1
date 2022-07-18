/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/nouislider/dist/nouislider.css"],"names":[],"mappings":"AAAA;;;EAGE;AACF;;EAEE,2BAA2B;EAC3B,6CAA6C;EAC7C,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,iBAAiB;EACjB,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE;AACF;EACE,gBAAgB;EAChB,UAAU;AACZ;AACA;;EAEE,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,6BAA6B;EAC7B,oCAAoC;EACpC,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE;AACF;EACE,OAAO;EACP,WAAW;AACb;AACA;;EAEE;AACF;EACE,UAAU;EACV,QAAQ;AACV;AACA;EACE,SAAS;AACX;AACA;EACE,mCAAmC;EACnC,2BAA2B;EAC3B,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;;EAEE,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE;AACF;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,aAAa;AACf;AACA;EACE,WAAW;EACX,WAAW;AACb;AACA;;EAEE;AACF;EACE,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,wDAAwD;AAC1D;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE;AACF;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,4EAA4E;AAC9E;AACA;EACE,yEAAyE;AAC3E;AACA;EACE;AACF;;EAEE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,UAAU;EACV,QAAQ;AACV;AACA;EACE,UAAU;AACZ;AACA;;EAEE,WAAW;EACX,WAAW;EACX,SAAS;EACT,SAAS;AACX;AACA;EACE,SAAS;AACX;AACA;EACE;AACF;EACE,mBAAmB;AACrB;AACA;;;EAGE,mBAAmB;AACrB;AACA;;EAEE;AACF;;EAEE,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE;AACF;EACE,eAAe;EACf,YAAY;EACZ,SAAS;EACT,OAAO;EACP,WAAW;AACb;AACA;EACE,uCAAuC;EACvC,+BAA+B;AACjC;AACA;EACE,sCAAsC;EACtC,8BAA8B;AAChC;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;;EAEE;AACF;EACE,eAAe;EACf,YAAY;EACZ,MAAM;EACN,UAAU;AACZ;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,kBAAkB;AACpB;AACA;EACE,oCAAoC;EACpC,4BAA4B;AAC9B;AACA;EACE,UAAU;EACV,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,SAAS;EACT,YAAY;AACd;AACA;EACE,qCAAqC;EACrC,6BAA6B;EAC7B,QAAQ;EACR,WAAW;AACb;AACA;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,UAAU;EACV,YAAY;AACd;AACA;EACE,sCAAsC;EACtC,8BAA8B;EAC9B,SAAS;EACT,WAAW;AACb","sourcesContent":["/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n/* Offset direction\n */\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n  left: 0;\n  right: auto;\n}\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  top: -100%;\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  -webkit-transition: transform 0.3s;\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  right: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  right: -6px;\n  bottom: -17px;\n}\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n  left: -17px;\n  right: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  -webkit-transform: translate(-50%, 50%);\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  -webkit-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  -webkit-transform: translate(0, 50%);\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(50%, 0);\n  transform: translate(50%, 0);\n  left: auto;\n  bottom: 10px;\n}\n.noUi-vertical .noUi-origin > .noUi-tooltip {\n  -webkit-transform: translate(0, -18px);\n  transform: translate(0, -18px);\n  top: auto;\n  right: 28px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/cards/cards.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/cards/cards.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter&family=Roboto+Slab&family=Cabin:wght@500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cards-block {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.card {\r\n    width: 420px;\r\n    height: fit-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 10px;\r\n    border-radius: 20px;\r\n    overflow: hidden;\r\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n    background-color: #edf1ff;\r\n}\r\n\r\n.card-img {\r\n    width: 100%;\r\n    min-height: 220px;\r\n}\r\n\r\n.card-desc {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    padding: 10px;\r\n}\r\n\r\n.card-title {\r\n    font-family: 'Roboto Slab', serif;\r\n    margin: 10px 0 0 0;\r\n    text-align: center;\r\n    color: #363945;\r\n}\r\n\r\n.card-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.card-list-item {\r\n    display: flex;\r\n    font-family: 'Inter', sans-serif;\r\n    font-size: 20px;\r\n    color: #363945;\r\n    margin: 3px 0;\r\n}\r\n\r\n.logo {\r\n    width: 17px;\r\n    height: 17px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: 17px 17px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.add-to-cart {\r\n    width: 150px;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 20px;\r\n    outline: none;\r\n    color: #edf1ff;\r\n    background-color: #0072b5;\r\n    font-size: 15px;\r\n    font-family: 'Cabin', sans-serif;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    margin: 10px 0 3px 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.active-btn {\r\n    background-color: #88b04b;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/cards/cards.css"],"names":[],"mappings":"AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB;mDAC+C;IAC/C,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,eAAe;IACf,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mDAAqC;IACrC,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,yBAAyB;IACzB,eAAe;IACf,gCAAgC;IAChC,4EAA4E;IAC5E,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter&family=Roboto+Slab&family=Cabin:wght@500&display=swap');\r\n\r\n.cards-block {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.card {\r\n    width: 420px;\r\n    height: fit-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 10px;\r\n    border-radius: 20px;\r\n    overflow: hidden;\r\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\r\n        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n    background-color: #edf1ff;\r\n}\r\n\r\n.card-img {\r\n    width: 100%;\r\n    min-height: 220px;\r\n}\r\n\r\n.card-desc {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    padding: 10px;\r\n}\r\n\r\n.card-title {\r\n    font-family: 'Roboto Slab', serif;\r\n    margin: 10px 0 0 0;\r\n    text-align: center;\r\n    color: #363945;\r\n}\r\n\r\n.card-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.card-list-item {\r\n    display: flex;\r\n    font-family: 'Inter', sans-serif;\r\n    font-size: 20px;\r\n    color: #363945;\r\n    margin: 3px 0;\r\n}\r\n\r\n.logo {\r\n    width: 17px;\r\n    height: 17px;\r\n    background: url('../assets/logo.png');\r\n    background-size: 17px 17px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.add-to-cart {\r\n    width: 150px;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 20px;\r\n    outline: none;\r\n    color: #edf1ff;\r\n    background-color: #0072b5;\r\n    font-size: 15px;\r\n    font-family: 'Cabin', sans-serif;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    margin: 10px 0 3px 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.active-btn {\r\n    background-color: #88b04b;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/filters/typeFilters.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/filters/typeFilters.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&family=Ubuntu:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".filters-by-value,\r\n.range-filters {\r\n    width: 380px;\r\n    height: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    font-family: 'Roboto Slab', serif;\r\n    font-size: 17px;\r\n    padding: 5px;\r\n    background-color: #d9eee1;\r\n}\r\n\r\n.filters h3 {\r\n    margin: 0 10px 0 0;\r\n    font-weight: 400;\r\n}\r\n\r\n.range-filters h3 {\r\n    margin: 0 15px 0 0;\r\n}\r\n\r\n.popularity-filter,\r\n.type-filters,\r\n.sort-filter,\r\n.search-filter,\r\n.color-filters,\r\n.quantity-filters,\r\n.price-filters {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.sort {\r\n    width: 230px;\r\n    height: 30px;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    background: #98b4d4;\r\n    border: none;\r\n    outline: none;\r\n    border-radius: 5px;\r\n    font-family: 'Roboto Slab', serif;\r\n}\r\n\r\n.search {\r\n    width: 200px;\r\n    height: 40px;\r\n    font-size: 20px;\r\n    font-family: 'Roboto Slab', serif;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.styled-checkbox {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: white;\r\n    border-radius: 4px;\r\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\r\n    align-items: center;\r\n    outline: none;\r\n    transition: 0.2s ease;\r\n    cursor: pointer;\r\n}\r\n\r\n.styled-checkbox:checked {\r\n    background-color: #88b04b;\r\n}\r\n.styled-checkbox:after {\r\n    font-family: 'Font Awesome 5 Free';\r\n    content: '\\f00c';\r\n    font-weight: 900;\r\n    font-size: 18px;\r\n    color: white;\r\n    text-shadow: 0 0 3px black;\r\n    display: none;\r\n}\r\n.styled-checkbox:checked:after {\r\n    display: block;\r\n}\r\n\r\n.type-filters label {\r\n    cursor: pointer;\r\n}\r\n\r\n.c-red,\r\n.c-red:checked {\r\n    background-color: #dd4124;\r\n}\r\n.c-blue,\r\n.c-blue:checked {\r\n    background-color: #34568b;\r\n}\r\n.c-white,\r\n.c-white:checked {\r\n    background-color: white;\r\n}\r\n.c-yellow,\r\n.c-yellow:checked {\r\n    background-color: #f5df4d;\r\n}\r\n.c-black,\r\n.c-black:checked {\r\n    background-color: #363945;\r\n}\r\n.c-gray,\r\n.c-gray:checked {\r\n    background-color: #939597;\r\n}\r\n\r\n#quantity-slider,\r\n#price-slider {\r\n    width: 250px;\r\n    font-size: 20px;\r\n}\r\n\r\n.reset-btn {\r\n    width: 180px;\r\n    height: 40px;\r\n    font-size: 20px;\r\n    font-family: 'Roboto Slab', serif;\r\n    border: none;\r\n    outline: none;\r\n    border-radius: 10px;\r\n    background: #88b04b;\r\n    cursor: pointer;\r\n}\r\n\r\n.reset-buttons {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.no-items {\r\n    font-size: 50px;\r\n    color: white;\r\n    text-shadow: 0px 0px 5px black;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/filters/typeFilters.css"],"names":[],"mappings":"AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,iCAAiC;IACjC,eAAe;IACf,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;;;;;;IAOI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,iCAAiC;IACjC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;IAClB,yFAAyF;IACzF,mBAAmB;IACnB,aAAa;IACb,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,kCAAkC;IAClC,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,0BAA0B;IAC1B,aAAa;AACjB;AACA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,yBAAyB;AAC7B;AACA;;IAEI,yBAAyB;AAC7B;AACA;;IAEI,uBAAuB;AAC3B;AACA;;IAEI,yBAAyB;AAC7B;AACA;;IAEI,yBAAyB;AAC7B;AACA;;IAEI,yBAAyB;AAC7B;;AAEA;;IAEI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,iCAAiC;IACjC,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,8BAA8B;IAC9B,iCAAiC;AACrC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&family=Ubuntu:wght@700&display=swap');\r\n\r\n.filters-by-value,\r\n.range-filters {\r\n    width: 380px;\r\n    height: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    font-family: 'Roboto Slab', serif;\r\n    font-size: 17px;\r\n    padding: 5px;\r\n    background-color: #d9eee1;\r\n}\r\n\r\n.filters h3 {\r\n    margin: 0 10px 0 0;\r\n    font-weight: 400;\r\n}\r\n\r\n.range-filters h3 {\r\n    margin: 0 15px 0 0;\r\n}\r\n\r\n.popularity-filter,\r\n.type-filters,\r\n.sort-filter,\r\n.search-filter,\r\n.color-filters,\r\n.quantity-filters,\r\n.price-filters {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.sort {\r\n    width: 230px;\r\n    height: 30px;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    background: #98b4d4;\r\n    border: none;\r\n    outline: none;\r\n    border-radius: 5px;\r\n    font-family: 'Roboto Slab', serif;\r\n}\r\n\r\n.search {\r\n    width: 200px;\r\n    height: 40px;\r\n    font-size: 20px;\r\n    font-family: 'Roboto Slab', serif;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.styled-checkbox {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: white;\r\n    border-radius: 4px;\r\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\r\n    align-items: center;\r\n    outline: none;\r\n    transition: 0.2s ease;\r\n    cursor: pointer;\r\n}\r\n\r\n.styled-checkbox:checked {\r\n    background-color: #88b04b;\r\n}\r\n.styled-checkbox:after {\r\n    font-family: 'Font Awesome 5 Free';\r\n    content: '\\f00c';\r\n    font-weight: 900;\r\n    font-size: 18px;\r\n    color: white;\r\n    text-shadow: 0 0 3px black;\r\n    display: none;\r\n}\r\n.styled-checkbox:checked:after {\r\n    display: block;\r\n}\r\n\r\n.type-filters label {\r\n    cursor: pointer;\r\n}\r\n\r\n.c-red,\r\n.c-red:checked {\r\n    background-color: #dd4124;\r\n}\r\n.c-blue,\r\n.c-blue:checked {\r\n    background-color: #34568b;\r\n}\r\n.c-white,\r\n.c-white:checked {\r\n    background-color: white;\r\n}\r\n.c-yellow,\r\n.c-yellow:checked {\r\n    background-color: #f5df4d;\r\n}\r\n.c-black,\r\n.c-black:checked {\r\n    background-color: #363945;\r\n}\r\n.c-gray,\r\n.c-gray:checked {\r\n    background-color: #939597;\r\n}\r\n\r\n#quantity-slider,\r\n#price-slider {\r\n    width: 250px;\r\n    font-size: 20px;\r\n}\r\n\r\n.reset-btn {\r\n    width: 180px;\r\n    height: 40px;\r\n    font-size: 20px;\r\n    font-family: 'Roboto Slab', serif;\r\n    border: none;\r\n    outline: none;\r\n    border-radius: 10px;\r\n    background: #88b04b;\r\n    cursor: pointer;\r\n}\r\n\r\n.reset-buttons {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.no-items {\r\n    font-size: 50px;\r\n    color: white;\r\n    text-shadow: 0px 0px 5px black;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/background2.jpg */ "./src/assets/background2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Finlandica:wght@700&family=Ubuntu:wght@700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n}\r\n\r\nhtml {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\r\n    background-size: cover;\r\n}\r\n\r\nheader,\r\nfooter {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0 10px;\r\n    color: #f0ead6;\r\n    text-shadow: 2px 2px 5px black;\r\n}\r\n\r\nheader .cart-img {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\nheader .cart-block {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nheader .cart-count {\r\n    font-size: 30px;\r\n    font-family: 'Finlandica', sans-serif;\r\n}\r\n\r\nheader h2 {\r\n    font-size: 40px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    margin: 0;\r\n}\r\n\r\n.wrapper {\r\n    min-height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.filters {\r\n    padding: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nmain {\r\n    flex: 1 1 auto;\r\n}\r\n\r\nfooter .github-icon {\r\n    width: 65px;\r\n    height: 65px;\r\n    transform: scale(0.9);\r\n    transition: 0.3s ease;\r\n}\r\n\r\nfooter .rs-icon {\r\n    width: 180px;\r\n    height: 55px;\r\n    transform: scale(0.9);\r\n    transition: 0.3s ease;\r\n}\r\n\r\nfooter p {\r\n    font-size: 20px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.rs-icon:hover,\r\n.github-icon:hover {\r\n    transform: scale(1.1);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AACA;;IAEI,SAAS;IACT,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,iFAAyE;IACzE,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,cAAc;IACd,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,qCAAqC;AACzC;;AAEA;IACI,eAAe;IACf,iCAAiC;IACjC,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,iCAAiC;AACrC;;AAEA;;IAEI,qBAAqB;AACzB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Finlandica:wght@700&family=Ubuntu:wght@700&display=swap');\r\nhtml,\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n}\r\n\r\nhtml {\r\n    background: url('./assets/background2.jpg') no-repeat center center fixed;\r\n    background-size: cover;\r\n}\r\n\r\nheader,\r\nfooter {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0 10px;\r\n    color: #f0ead6;\r\n    text-shadow: 2px 2px 5px black;\r\n}\r\n\r\nheader .cart-img {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\nheader .cart-block {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nheader .cart-count {\r\n    font-size: 30px;\r\n    font-family: 'Finlandica', sans-serif;\r\n}\r\n\r\nheader h2 {\r\n    font-size: 40px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    margin: 0;\r\n}\r\n\r\n.wrapper {\r\n    min-height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.filters {\r\n    padding: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nmain {\r\n    flex: 1 1 auto;\r\n}\r\n\r\nfooter .github-icon {\r\n    width: 65px;\r\n    height: 65px;\r\n    transform: scale(0.9);\r\n    transition: 0.3s ease;\r\n}\r\n\r\nfooter .rs-icon {\r\n    width: 180px;\r\n    height: 55px;\r\n    transform: scale(0.9);\r\n    transition: 0.3s ease;\r\n}\r\n\r\nfooter p {\r\n    font-size: 20px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.rs-icon:hover,\r\n.github-icon:hover {\r\n    transform: scale(1.1);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/types/cars.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/types/cars.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/m5.webp */ "./src/assets/m5.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/m8.webp */ "./src/assets/m8.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/x4m.webp */ "./src/assets/x4m.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/x6.webp */ "./src/assets/x6.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/x7.webp */ "./src/assets/x7.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/5series.webp */ "./src/assets/5series.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/8series.webp */ "./src/assets/8series.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/i4.webp */ "./src/assets/i4.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/i7.webp */ "./src/assets/i7.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/ix.webp */ "./src/assets/ix.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/x5m.webp */ "./src/assets/x5m.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/z4.webp */ "./src/assets/z4.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".m5 {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n.m8 {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n.x4m {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n.x6 {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n.x7 {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n}\r\n.s5 {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n}\r\n.s8 {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n}\r\n.i4 {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\r\n}\r\n.i7 {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\r\n}\r\n.ix {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\r\n}\r\n.x5m {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\r\n}\r\n.z4 {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\r\n}\r\n\r\n.i4,\r\n.i7,\r\n.ix,\r\n.m5,\r\n.m8,\r\n.s5,\r\n.s8,\r\n.x4m,\r\n.x5m,\r\n.x6,\r\n.x7,\r\n.z4 {\r\n    background-color: white;\r\n    background-size: 420px 220px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/types/cars.css"],"names":[],"mappings":"AAAA;IACI,mDAAoC;AACxC;AACA;IACI,mDAAoC;AACxC;AACA;IACI,mDAAqC;AACzC;AACA;IACI,mDAAoC;AACxC;AACA;IACI,mDAAoC;AACxC;AACA;IACI,mDAAyC;AAC7C;AACA;IACI,mDAAyC;AAC7C;AACA;IACI,mDAAoC;AACxC;AACA;IACI,mDAAoC;AACxC;AACA;IACI,mDAAoC;AACxC;AACA;IACI,oDAAqC;AACzC;AACA;IACI,oDAAoC;AACxC;;AAEA;;;;;;;;;;;;IAYI,uBAAuB;IACvB,4BAA4B;AAChC","sourcesContent":[".m5 {\r\n    background: url('../assets/m5.webp');\r\n}\r\n.m8 {\r\n    background: url('../assets/m8.webp');\r\n}\r\n.x4m {\r\n    background: url('../assets/x4m.webp');\r\n}\r\n.x6 {\r\n    background: url('../assets/x6.webp');\r\n}\r\n.x7 {\r\n    background: url('../assets/x7.webp');\r\n}\r\n.s5 {\r\n    background: url('../assets/5series.webp');\r\n}\r\n.s8 {\r\n    background: url('../assets/8series.webp');\r\n}\r\n.i4 {\r\n    background: url('../assets/i4.webp');\r\n}\r\n.i7 {\r\n    background: url('../assets/i7.webp');\r\n}\r\n.ix {\r\n    background: url('../assets/ix.webp');\r\n}\r\n.x5m {\r\n    background: url('../assets/x5m.webp');\r\n}\r\n.z4 {\r\n    background: url('../assets/z4.webp');\r\n}\r\n\r\n.i4,\r\n.i7,\r\n.ix,\r\n.m5,\r\n.m8,\r\n.s5,\r\n.s8,\r\n.x4m,\r\n.x5m,\r\n.x6,\r\n.x7,\r\n.z4 {\r\n    background-color: white;\r\n    background-size: 420px 220px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./node_modules/nouislider/dist/nouislider.js":
/*!****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    exports.PipsMode = void 0;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    exports.PipsType = void 0;
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    //region Helper Methods
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        // partial formatters only need a to function and not a from function
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y,
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup",
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp",
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend",
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                },
            });
            // @ts-ignore
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    //endregion
    //region Spectrum
    var Spectrum = /** @class */ (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var distances = [];
            for (var index = 0; index < this.xNumSteps.length - 1; index++) {
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        // Calculate the percentual distance over the whole scale of ranges.
        // direction: 0 = backwards / 1 = forwards
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            // Calculate what part of the start range the value is
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
                // Calculate the percentage of total range
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                // Detect if the margin, padding or limit is larger then the current range and calculate
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    // If larger then take the percentual distance of the whole range
                    rel_range_distance = range_pct * start_factor;
                    // Rest factor of relative percentual distance still to be calculated
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    // Set start factor to 1 as for next range it does not apply.
                    start_factor = 1;
                }
                else {
                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    // No rest left as the rest fits in current range
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    // Limit range to first range when distance becomes outside of minimum range
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    // Limit range to last range when distance becomes outside of maximum range
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                // Rest of relative percentual distance still to be calculated
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2],
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1],
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j],
                },
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            // Store values.
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            // Factor to range ratio
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This will prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number,
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub",
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria",
    };
    //endregion
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        }
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        var smoothSteps = entry.indexOf("smooth-steps") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            smoothSteps: smoothSteps,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained,
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a attributes for all handles.");
        }
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter,
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses },
            handleAttributes: { r: false, t: testHandleAttributes },
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10,
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [
            ["left", "top"],
            ["right", "bottom"],
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            if (options.handleAttributes !== undefined) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach(function (attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                // Map all percentages to on-range values.
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return pips.values;
            }
            return []; // pips.mode = never
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            // Fix #669
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                },
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
                return;
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            if (options.events.smoothSteps) {
                data.handleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                });
                data.handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                });
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice(),
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            }
            else {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= options.keyboardPageMultiplier;
                }
                else {
                    step *= options.keyboardMultiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index],
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true,
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    var handlesToDrag = [handleBefore, handleAfter];
                    var handleNumbersToDrag = [index - 1, index];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect: connect,
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            if (!smoothSteps) {
                to = scope_Spectrum.getStep(to);
            }
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            // Store first handle now, so we still have it in case handleNumbers is reversed
            var firstHandle = handleNumbers[0];
            var smoothSteps = options.events.smoothSteps;
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state =
                    setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                // If target is a connect, then fire drag event
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = transformDirection(to, 0) - scope_DirOffset;
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Spread handles evenly across the slider if the range has no size (min=max)
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    });
                }
            }
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet(unencoded) {
            if (unencoded === void 0) { unencoded = false; }
            if (unencoded) {
                // return a copy of the raw values
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null,
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updatable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips",
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
                return scope_Locations.slice();
            },
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips, // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize,
    };

    exports.create = initialize;
    exports.cssClasses = cssClasses;
    exports["default"] = nouislider;

    Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.css":
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./nouislider.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/cards/cards.css":
/*!*****************************!*\
  !*** ./src/cards/cards.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./cards.css */ "./node_modules/css-loader/dist/cjs.js!./src/cards/cards.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/filters/typeFilters.css":
/*!*************************************!*\
  !*** ./src/filters/typeFilters.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_typeFilters_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./typeFilters.css */ "./node_modules/css-loader/dist/cjs.js!./src/filters/typeFilters.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_typeFilters_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_typeFilters_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_typeFilters_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_typeFilters_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/types/cars.css":
/*!****************************!*\
  !*** ./src/types/cars.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cars_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./cars.css */ "./node_modules/css-loader/dist/cjs.js!./src/types/cars.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cars_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cars_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cars_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cars_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/cards/cards.ts":
/*!****************************!*\
  !*** ./src/cards/cards.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showCards = void 0;
__webpack_require__(/*! ./cards.css */ "./src/cards/cards.css");
const cart_1 = __webpack_require__(/*! ./cart */ "./src/cards/cart.ts");
let cardsBlock = document.querySelector('.cards-block');
if (!localStorage.cart)
    localStorage.setItem('cart', '');
function showCards(array) {
    cardsBlock.innerHTML = '';
    if (array.length == 0) {
        cardsBlock.innerHTML = '<h1 class="no-items">Items not found</h1>';
    }
    for (let i = 0; i < array.length; i++) {
        let card = document.createElement('div');
        let cardImg = document.createElement('img');
        let cardDesc = document.createElement('div');
        let cardTitle = document.createElement('h2');
        let firstColumn = document.createElement('ul');
        let secondColumn = document.createElement('ul');
        let cardBrand = document.createElement('li');
        let cardPopularity = document.createElement('li');
        let cardColor = document.createElement('li');
        let cardQuantity = document.createElement('li');
        let cardPrice = document.createElement('li');
        let cardType = document.createElement('li');
        let addToCart = document.createElement('button');
        cardImg.className = `card-img ${array[i].cssClass}`;
        card.className = 'card';
        cardTitle.className = 'card-title';
        cardDesc.className = 'card-desc';
        firstColumn.className = 'card-list';
        secondColumn.className = 'card-list';
        cardBrand.className = 'card-list-item card-brand';
        cardPrice.className = 'card-list-item card-price';
        cardPopularity.className = 'card-list-item card-popular';
        cardColor.className = 'card-list-item card-color';
        cardQuantity.className = 'card-list-item card-quantity';
        cardType.className = 'card-list-item card-type';
        !localStorage.cart.includes(array[i].cssClass)
            ? (addToCart.className = 'add-to-cart')
            : (addToCart.className = 'add-to-cart active-btn');
        addToCart.name = array[i].cssClass;
        cardsBlock.append(card);
        card.append(cardImg);
        card.append(cardTitle);
        card.append(cardDesc);
        cardDesc.append(firstColumn);
        cardDesc.append(secondColumn);
        cardDesc.append(addToCart);
        firstColumn.append(cardBrand);
        firstColumn.append(cardPrice);
        firstColumn.append(cardPopularity);
        secondColumn.append(cardType);
        secondColumn.append(cardColor);
        secondColumn.append(cardQuantity);
        cardTitle.innerHTML = `${array[i].brand} ${array[i].model}`;
        cardBrand.innerHTML = `Brand: ${array[i].brand}<img class="logo"></img>`;
        cardPrice.innerHTML = `Price: ${array[i].price}$`;
        cardPopularity.innerHTML = `Popularity: ${array[i].popularity}`;
        cardQuantity.innerHTML = `Quantity In Stock: ${array[i].quantityInStock}`;
        cardColor.innerHTML = `Color: ${array[i].color}`;
        cardType.innerHTML = `Type: ${array[i].type}`;
        addToCart.innerHTML = 'Add To Cart';
        (0, cart_1.cart)(addToCart);
    }
}
exports.showCards = showCards;


/***/ }),

/***/ "./src/cards/cart.ts":
/*!***************************!*\
  !*** ./src/cards/cart.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cart = void 0;
function cart(el) {
    let cartCount = document.querySelector('.cart-count');
    el.addEventListener('click', () => {
        el.classList.toggle('active-btn');
        if (el.className == 'add-to-cart active-btn') {
            localStorage.cart += `${el.name} `;
            cartCount.innerHTML = String(Number(cartCount.innerHTML) + 1);
        }
        else {
            localStorage.cart = localStorage.cart.replace(el.name, '');
            cartCount.innerHTML = String(Number(cartCount.innerHTML) - 1);
        }
    });
}
exports.cart = cart;


/***/ }),

/***/ "./src/filters/colorFilters.ts":
/*!*************************************!*\
  !*** ./src/filters/colorFilters.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const cards_1 = __webpack_require__(/*! ../cards/cards */ "./src/cards/cards.ts");
const sortByValue_1 = __webpack_require__(/*! ../functions/sortByValue */ "./src/functions/sortByValue.ts");
let colors = document.getElementsByName('car-color');
if (!localStorage.color)
    localStorage.setItem('color', '');
colors.forEach((el) => {
    el.addEventListener('click', () => {
        if (el.checked) {
            (0, cards_1.showCards)((0, sortByValue_1.sortByType)('color', el.value, true));
            localStorage.color += `${el.value} `;
        }
        else {
            (0, cards_1.showCards)((0, sortByValue_1.sortByType)('color', el.value, false));
            localStorage.color = localStorage.color.replace(el.value, '');
        }
    });
});


/***/ }),

/***/ "./src/filters/popularityFilter.ts":
/*!*****************************************!*\
  !*** ./src/filters/popularityFilter.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const cards_1 = __webpack_require__(/*! ../cards/cards */ "./src/cards/cards.ts");
const sortByValue_1 = __webpack_require__(/*! ../functions/sortByValue */ "./src/functions/sortByValue.ts");
let popularBtn = document.getElementById('popular-btn');
if (!localStorage.popular)
    localStorage.setItem('popular', '');
popularBtn.addEventListener('click', () => {
    if (popularBtn.checked) {
        (0, cards_1.showCards)((0, sortByValue_1.sortByType)('popularity', popularBtn.value, true));
        localStorage.popular = 'Yes';
    }
    else {
        (0, cards_1.showCards)((0, sortByValue_1.sortByType)('popularity', popularBtn.value, false));
        localStorage.popular = 'No';
    }
});


/***/ }),

/***/ "./src/filters/rangeFilters.ts":
/*!*************************************!*\
  !*** ./src/filters/rangeFilters.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
let noUiSlider = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
let wNumb = __webpack_require__(/*! wnumb */ "./node_modules/wnumb/wNumb.js");
__webpack_require__(/*! nouislider/dist/nouislider.css */ "./node_modules/nouislider/dist/nouislider.css");
const cards_1 = __webpack_require__(/*! ../cards/cards */ "./src/cards/cards.ts");
const sortByValue_1 = __webpack_require__(/*! ../functions/sortByValue */ "./src/functions/sortByValue.ts");
let quantitySlider = document.getElementById('quantity-slider');
let priceSlider = document.getElementById('price-slider');
if (!localStorage.quantity) {
    localStorage.setItem('quantity', '1 5');
}
if (!localStorage.price) {
    localStorage.setItem('price', '55000 140000');
}
noUiSlider.create(quantitySlider, {
    start: [Number(localStorage.quantity.split(' ')[0]), Number(localStorage.quantity.split(' ')[1])],
    connect: true,
    step: 1,
    tooltips: true,
    range: {
        min: 1,
        max: 5,
    },
    pips: {
        mode: 'positions',
        stepped: true,
        values: [0, 25, 50, 75, 100],
        density: 3,
    },
});
noUiSlider.create(priceSlider, {
    start: [Number(localStorage.price.split(' ')[0]), Number(localStorage.price.split(' ')[1])],
    connect: true,
    step: 5000,
    tooltips: true,
    range: {
        min: 55000,
        max: 140000,
    },
    pips: {
        mode: 'positions',
        stepped: true,
        values: [0, 50, 100],
        density: 3,
        format: wNumb({
            decimals: 0,
            prefix: '$',
        }),
    },
});
quantitySlider.addEventListener('click', () => {
    let tooltips = document.getElementsByClassName('noUi-tooltip');
    let quanityValues = [tooltips[0].innerHTML, tooltips[1].innerHTML];
    (0, cards_1.showCards)((0, sortByValue_1.sortByType)('quantity', quanityValues, true));
    localStorage.quantity = `${tooltips[0].innerHTML} ${tooltips[1].innerHTML}`;
});
priceSlider.addEventListener('click', () => {
    let tooltips = document.getElementsByClassName('noUi-tooltip');
    let priceValues = [tooltips[2].innerHTML, tooltips[3].innerHTML];
    (0, cards_1.showCards)((0, sortByValue_1.sortByType)('price', priceValues, true));
    localStorage.price = `${tooltips[2].innerHTML} ${tooltips[3].innerHTML}`;
});


/***/ }),

/***/ "./src/filters/resetFilters.ts":
/*!*************************************!*\
  !*** ./src/filters/resetFilters.ts ***!
  \*************************************/
/***/ (() => {

"use strict";

let resetFilters = document.querySelector('.reset-filters');
let resetPage = document.querySelector('.reset-page');
resetFilters.addEventListener('click', () => {
    let cartFilters = localStorage.cart;
    let sortFilters = localStorage.sort;
    localStorage.clear();
    localStorage.setItem('cart', cartFilters);
    localStorage.setItem('sort', sortFilters);
    location.reload();
});
resetPage.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});


/***/ }),

/***/ "./src/filters/sortSearchFilters.ts":
/*!******************************************!*\
  !*** ./src/filters/sortSearchFilters.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const cards_1 = __webpack_require__(/*! ../cards/cards */ "./src/cards/cards.ts");
const sortByValue_1 = __webpack_require__(/*! ../functions/sortByValue */ "./src/functions/sortByValue.ts");
let search = document.querySelector('.search');
let sort = document.querySelector('.sort');
if (!localStorage.sort)
    localStorage.setItem('sort', '');
if (!localStorage.search)
    localStorage.setItem('search', '');
search.addEventListener('input', () => {
    (0, cards_1.showCards)((0, sortByValue_1.sortByType)('search', search.value, true));
    localStorage.search = search.value;
});
sort.addEventListener('change', () => {
    (0, cards_1.showCards)((0, sortByValue_1.sortByType)('sort', sort.value, true));
    localStorage.sort = sort.value;
});


/***/ }),

/***/ "./src/filters/typeFilters.ts":
/*!************************************!*\
  !*** ./src/filters/typeFilters.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const cards_1 = __webpack_require__(/*! ../cards/cards */ "./src/cards/cards.ts");
const sortByValue_1 = __webpack_require__(/*! ../functions/sortByValue */ "./src/functions/sortByValue.ts");
__webpack_require__(/*! ./typeFilters.css */ "./src/filters/typeFilters.css");
__webpack_require__(/*! ./colorFilters */ "./src/filters/colorFilters.ts");
let types = document.getElementsByName('car-type');
if (!localStorage.types)
    localStorage.setItem('types', '');
types.forEach((el) => {
    el.addEventListener('click', () => {
        if (el.checked) {
            (0, cards_1.showCards)((0, sortByValue_1.sortByType)('type', el.value, true));
            localStorage.types += `${el.value} `;
        }
        else {
            (0, cards_1.showCards)((0, sortByValue_1.sortByType)('type', el.value, false));
            localStorage.types = localStorage.types.replace(el.value, '');
        }
    });
});


/***/ }),

/***/ "./src/functions/checkLS.ts":
/*!**********************************!*\
  !*** ./src/functions/checkLS.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkLS = void 0;
const cards_1 = __webpack_require__(/*! ../cards/cards */ "./src/cards/cards.ts");
const sortByValue_1 = __webpack_require__(/*! ./sortByValue */ "./src/functions/sortByValue.ts");
function checkLS() {
    checkType();
    checkColor();
    checkPopular();
    checkSearch();
    checkSort();
    checkRanges();
    checkCart();
}
exports.checkLS = checkLS;
function checkType() {
    if (localStorage.types) {
        let arr = localStorage.types.trim().split(' ');
        let types = document.getElementsByName('car-type');
        types.forEach((el) => {
            for (let i = 0; i < arr.length; i++) {
                if (el.value == arr[i]) {
                    el.checked = true;
                    (0, cards_1.showCards)((0, sortByValue_1.sortByType)('type', el.value, true));
                }
            }
        });
    }
}
function checkColor() {
    if (localStorage.color) {
        let arr = localStorage.color.trim().split(' ');
        let colors = document.getElementsByName('car-color');
        colors.forEach((el) => {
            for (let i = 0; i < arr.length; i++) {
                if (el.value == arr[i]) {
                    el.checked = true;
                    (0, cards_1.showCards)((0, sortByValue_1.sortByType)('color', el.value, true));
                }
            }
        });
    }
}
function checkPopular() {
    if (localStorage.popular == 'Yes') {
        let popularBtn = document.getElementById('popular-btn');
        (0, cards_1.showCards)((0, sortByValue_1.sortByType)('popularity', popularBtn.value, true));
        popularBtn.checked = true;
    }
}
function checkSearch() {
    if (localStorage.search) {
        let search = document.querySelector('.search');
        search.value = localStorage.search;
        (0, cards_1.showCards)((0, sortByValue_1.sortByType)('search', localStorage.search, true));
    }
}
function checkSort() {
    if (localStorage.sort) {
        let sort = document.querySelector('.sort');
        sort.value = localStorage.sort;
        (0, cards_1.showCards)((0, sortByValue_1.sortByType)('sort', localStorage.sort, true));
    }
}
function checkRanges() {
    (0, cards_1.showCards)((0, sortByValue_1.sortByType)('quantity', [localStorage.quantity.split(' ')[0], localStorage.quantity.split(' ')[1]], true));
    (0, cards_1.showCards)((0, sortByValue_1.sortByType)('price', [localStorage.price.split(' ')[0], localStorage.price.split(' ')[1]], true));
}
function checkCart() {
    let cartCount = document.querySelector('.cart-count');
    if (localStorage.cart.trim().length !== 0) {
        let selectedCards = localStorage.cart.trim().split(' ');
        let cartBtns = document.querySelectorAll('.add-to-cart');
        cartBtns.forEach((el) => {
            for (let j = 0; j < selectedCards.length; j++) {
                if (el.name == selectedCards[j]) {
                    el.className = 'add-to-cart active-btn';
                }
            }
        });
        cartCount.innerHTML = String(selectedCards.length);
    }
    else {
        cartCount.innerHTML = '0';
    }
}


/***/ }),

/***/ "./src/functions/sortByValue.ts":
/*!**************************************!*\
  !*** ./src/functions/sortByValue.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sortByName = exports.sortByType = void 0;
const cars_1 = __webpack_require__(/*! ../types/cars */ "./src/types/cars.ts");
let carTypes = new Array();
let colorFilters = new Array();
let popularityFilter;
let quanityValues = [1, 5];
let priceValues = [55000, 140000];
let searchFilter;
let sortFilter = 'sortNameAZ';
var sortTypes;
(function (sortTypes) {
    sortTypes["name"] = "sortNameAZ";
    sortTypes["nameRvr"] = "sortNameZA";
    sortTypes["price"] = "sortPriceIncr";
    sortTypes["priceRvr"] = "sortPriceDecr";
    sortTypes["quantity"] = "sortQuantityIncr";
    sortTypes["quantityRvr"] = "sortQuantityDecr";
})(sortTypes || (sortTypes = {}));
function sortByType(type, value, showHtml) {
    let sortedArr = cars_1.allCars.slice();
    switch (type) {
        case 'type':
            if (showHtml)
                carTypes.push(value);
            else
                carTypes.splice(carTypes.indexOf(value), 1);
            break;
        case 'color':
            if (showHtml)
                colorFilters.push(value);
            else
                colorFilters.splice(colorFilters.indexOf(value), 1);
            break;
        case 'popularity':
            if (showHtml)
                popularityFilter = true;
            else
                popularityFilter = false;
            break;
        case 'quantity':
            quanityValues[0] = Number(value[0]);
            quanityValues[1] = Number(value[1]);
            break;
        case 'price':
            priceValues[0] = Number(value[0]);
            priceValues[1] = Number(value[1]);
            break;
        case 'search':
            searchFilter = String(value);
            break;
        case 'sort':
            sortFilter = String(value);
            break;
    }
    if (carTypes.length !== 3 && carTypes.length !== 0) {
        sortedArr = sortedArr.filter((car) => carTypes.includes(car.type));
    }
    if (colorFilters.length !== 6 && colorFilters.length !== 0) {
        sortedArr = sortedArr.filter((car) => colorFilters.includes(car.color));
    }
    if (popularityFilter) {
        sortedArr = sortedArr.filter((car) => car.popularity == 'Yes');
    }
    sortedArr = sortedArr.filter((car) => car.quantityInStock >= quanityValues[0] && car.quantityInStock <= quanityValues[1]);
    sortedArr = sortedArr.filter((car) => car.price >= priceValues[0] && car.price <= priceValues[1]);
    if (searchFilter) {
        sortedArr = sortedArr.filter((car) => (car.brand + ' ' + car.model).toLowerCase().includes(searchFilter.toLowerCase()));
    }
    switch (sortFilter) {
        case sortTypes.name:
            sortedArr = sortByName(sortedArr, 'model');
            break;
        case sortTypes.nameRvr:
            sortedArr = sortByName(sortedArr, 'model').reverse();
            break;
        case sortTypes.price:
            sortedArr = sortedArr.sort((a, b) => a.price - b.price);
            break;
        case sortTypes.priceRvr:
            sortedArr = sortedArr.sort((a, b) => a.price - b.price).reverse();
            break;
        case sortTypes.quantity:
            sortedArr = sortedArr.sort((a, b) => a.quantityInStock - b.quantityInStock);
            break;
        case sortTypes.quantityRvr:
            sortedArr = sortedArr.sort((a, b) => a.quantityInStock - b.quantityInStock).reverse();
            break;
    }
    return sortedArr;
}
exports.sortByType = sortByType;
function sortByName(array, value) {
    let arr = array.sort(function (a, b) {
        if (a[value] < b[value]) {
            return -1;
        }
        if (a[value] > b[value]) {
            return 1;
        }
        return 0;
    });
    return arr;
}
exports.sortByName = sortByName;


/***/ }),

/***/ "./src/types/cars.ts":
/*!***************************!*\
  !*** ./src/types/cars.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.allCars = void 0;
const types_1 = __webpack_require__(/*! ./types */ "./src/types/types.ts");
__webpack_require__(/*! ./cars.css */ "./src/types/cars.css");
let car1 = new types_1.Car('M5', 105000, 'Yes', 3, 'm5', 'Red', 'Sedan');
let car2 = new types_1.Car('M8', 130000, 'No', 4, 'm8', 'Red', 'Sedan');
let car3 = new types_1.Car('X4 M', 75000, 'No', 1, 'x4m', 'Yellow', 'SUV');
let car4 = new types_1.Car('X6', 70000, 'No', 1, 'x6', 'Gray', 'SUV');
let car5 = new types_1.Car('X7', 140000, 'Yes', 5, 'x7', 'Black', 'SUV');
let car6 = new types_1.Car('5 Series', 55000, 'No', 3, 's5', 'Blue', 'Sedan');
let car7 = new types_1.Car('8 Series', 90000, 'Yes', 2, 's8', 'Blue', 'Sedan');
let car8 = new types_1.Car('I4', 60000, 'No', 4, 'i4', 'Gray', 'Electric-Car');
let car9 = new types_1.Car('I7', 120000, 'Yes', 1, 'i7', 'White', 'Electric-Car');
let car10 = new types_1.Car('IX', 90000, 'Yes', 4, 'ix', 'White', 'Electric-Car');
let car11 = new types_1.Car('X5 M', 105000, 'No', 3, 'x5m', 'Blue', 'SUV');
let car12 = new types_1.Car('Z4', 55000, 'No', 2, 'z4', 'White', 'Sedan');
exports.allCars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12];


/***/ }),

/***/ "./src/types/types.ts":
/*!****************************!*\
  !*** ./src/types/types.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cart = exports.Car = void 0;
class Car {
    constructor(model, price, popularity, quantityInStock, cssClass, color, type) {
        this.model = model;
        this.brand = 'BMW';
        this.price = price;
        this.popularity = popularity;
        this.quantityInStock = quantityInStock;
        this.cssClass = cssClass;
        this.color = color;
        this.type = type;
    }
}
exports.Car = Car;
class Cart {
    putToCart(el, countEl) {
        countEl.innerHTML = `${Number(countEl.innerHTML) + 1}`;
        el.innerHTML = 'Added To Cart';
    }
    removeFromCart(el, countEl) {
        countEl.innerHTML = `${Number(countEl.innerHTML) - 1}`;
        el.innerHTML = 'Add To Cart';
    }
}
exports.Cart = Cart;


/***/ }),

/***/ "./node_modules/wnumb/wNumb.js":
/*!*************************************!*\
  !*** ./node_modules/wnumb/wNumb.js ***!
  \*************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function() {
  "use strict";

  var FormatOptions = [
    "decimals",
    "thousand",
    "mark",
    "prefix",
    "suffix",
    "encoder",
    "decoder",
    "negativeBefore",
    "negative",
    "edit",
    "undo"
  ];

  // General

  // Reverse a string
  function strReverse(a) {
    return a
      .split("")
      .reverse()
      .join("");
  }

  // Check if a string starts with a specified prefix.
  function strStartsWith(input, match) {
    return input.substring(0, match.length) === match;
  }

  // Check is a string ends in a specified suffix.
  function strEndsWith(input, match) {
    return input.slice(-1 * match.length) === match;
  }

  // Throw an error if formatting options are incompatible.
  function throwEqualError(F, a, b) {
    if ((F[a] || F[b]) && F[a] === F[b]) {
      throw new Error(a);
    }
  }

  // Check if a number is finite and not NaN
  function isValidNumber(input) {
    return typeof input === "number" && isFinite(input);
  }

  // Provide rounding-accurate toFixed method.
  // Borrowed: http://stackoverflow.com/a/21323330/775265
  function toFixed(value, exp) {
    value = value.toString().split("e");
    value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] + exp : exp)));
    value = value.toString().split("e");
    return (+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))).toFixed(exp);
  }

  // Formatting

  // Accept a number as input, output formatted string.
  function formatTo(
    decimals,
    thousand,
    mark,
    prefix,
    suffix,
    encoder,
    decoder,
    negativeBefore,
    negative,
    edit,
    undo,
    input
  ) {
    var originalInput = input,
      inputIsNegative,
      inputPieces,
      inputBase,
      inputDecimals = "",
      output = "";

    // Apply user encoder to the input.
    // Expected outcome: number.
    if (encoder) {
      input = encoder(input);
    }

    // Stop if no valid number was provided, the number is infinite or NaN.
    if (!isValidNumber(input)) {
      return false;
    }

    // Rounding away decimals might cause a value of -0
    // when using very small ranges. Remove those cases.
    if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
      input = 0;
    }

    // Formatting is done on absolute numbers,
    // decorated by an optional negative symbol.
    if (input < 0) {
      inputIsNegative = true;
      input = Math.abs(input);
    }

    // Reduce the number of decimals to the specified option.
    if (decimals !== false) {
      input = toFixed(input, decimals);
    }

    // Transform the number into a string, so it can be split.
    input = input.toString();

    // Break the number on the decimal separator.
    if (input.indexOf(".") !== -1) {
      inputPieces = input.split(".");

      inputBase = inputPieces[0];

      if (mark) {
        inputDecimals = mark + inputPieces[1];
      }
    } else {
      // If it isn't split, the entire number will do.
      inputBase = input;
    }

    // Group numbers in sets of three.
    if (thousand) {
      inputBase = strReverse(inputBase).match(/.{1,3}/g);
      inputBase = strReverse(inputBase.join(strReverse(thousand)));
    }

    // If the number is negative, prefix with negation symbol.
    if (inputIsNegative && negativeBefore) {
      output += negativeBefore;
    }

    // Prefix the number
    if (prefix) {
      output += prefix;
    }

    // Normal negative option comes after the prefix. Defaults to '-'.
    if (inputIsNegative && negative) {
      output += negative;
    }

    // Append the actual number.
    output += inputBase;
    output += inputDecimals;

    // Apply the suffix.
    if (suffix) {
      output += suffix;
    }

    // Run the output through a user-specified post-formatter.
    if (edit) {
      output = edit(output, originalInput);
    }

    // All done.
    return output;
  }

  // Accept a sting as input, output decoded number.
  function formatFrom(
    decimals,
    thousand,
    mark,
    prefix,
    suffix,
    encoder,
    decoder,
    negativeBefore,
    negative,
    edit,
    undo,
    input
  ) {
    var originalInput = input,
      inputIsNegative,
      output = "";

    // User defined pre-decoder. Result must be a non empty string.
    if (undo) {
      input = undo(input);
    }

    // Test the input. Can't be empty.
    if (!input || typeof input !== "string") {
      return false;
    }

    // If the string starts with the negativeBefore value: remove it.
    // Remember is was there, the number is negative.
    if (negativeBefore && strStartsWith(input, negativeBefore)) {
      input = input.replace(negativeBefore, "");
      inputIsNegative = true;
    }

    // Repeat the same procedure for the prefix.
    if (prefix && strStartsWith(input, prefix)) {
      input = input.replace(prefix, "");
    }

    // And again for negative.
    if (negative && strStartsWith(input, negative)) {
      input = input.replace(negative, "");
      inputIsNegative = true;
    }

    // Remove the suffix.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
    if (suffix && strEndsWith(input, suffix)) {
      input = input.slice(0, -1 * suffix.length);
    }

    // Remove the thousand grouping.
    if (thousand) {
      input = input.split(thousand).join("");
    }

    // Set the decimal separator back to period.
    if (mark) {
      input = input.replace(mark, ".");
    }

    // Prepend the negative symbol.
    if (inputIsNegative) {
      output += "-";
    }

    // Add the number
    output += input;

    // Trim all non-numeric characters (allow '.' and '-');
    output = output.replace(/[^0-9\.\-.]/g, "");

    // The value contains no parse-able number.
    if (output === "") {
      return false;
    }

    // Covert to number.
    output = Number(output);

    // Run the user-specified post-decoder.
    if (decoder) {
      output = decoder(output);
    }

    // Check is the output is valid, otherwise: return false.
    if (!isValidNumber(output)) {
      return false;
    }

    return output;
  }

  // Framework

  // Validate formatting options
  function validate(inputOptions) {
    var i,
      optionName,
      optionValue,
      filteredOptions = {};

    if (inputOptions["suffix"] === undefined) {
      inputOptions["suffix"] = inputOptions["postfix"];
    }

    for (i = 0; i < FormatOptions.length; i += 1) {
      optionName = FormatOptions[i];
      optionValue = inputOptions[optionName];

      if (optionValue === undefined) {
        // Only default if negativeBefore isn't set.
        if (optionName === "negative" && !filteredOptions.negativeBefore) {
          filteredOptions[optionName] = "-";
          // Don't set a default for mark when 'thousand' is set.
        } else if (optionName === "mark" && filteredOptions.thousand !== ".") {
          filteredOptions[optionName] = ".";
        } else {
          filteredOptions[optionName] = false;
        }

        // Floating points in JS are stable up to 7 decimals.
      } else if (optionName === "decimals") {
        if (optionValue >= 0 && optionValue < 8) {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        }

        // These options, when provided, must be functions.
      } else if (
        optionName === "encoder" ||
        optionName === "decoder" ||
        optionName === "edit" ||
        optionName === "undo"
      ) {
        if (typeof optionValue === "function") {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        }

        // Other options are strings.
      } else {
        if (typeof optionValue === "string") {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        }
      }
    }

    // Some values can't be extracted from a
    // string if certain combinations are present.
    throwEqualError(filteredOptions, "mark", "thousand");
    throwEqualError(filteredOptions, "prefix", "negative");
    throwEqualError(filteredOptions, "prefix", "negativeBefore");

    return filteredOptions;
  }

  // Pass all options as function arguments
  function passAll(options, method, input) {
    var i,
      args = [];

    // Add all options in order of FormatOptions
    for (i = 0; i < FormatOptions.length; i += 1) {
      args.push(options[FormatOptions[i]]);
    }

    // Append the input, then call the method, presenting all
    // options as arguments.
    args.push(input);
    return method.apply("", args);
  }

  function wNumb(options) {
    if (!(this instanceof wNumb)) {
      return new wNumb(options);
    }

    if (typeof options !== "object") {
      return;
    }

    options = validate(options);

    // Call 'formatTo' with proper arguments.
    this.to = function(input) {
      return passAll(options, formatTo, input);
    };

    // Call 'formatFrom' with proper arguments.
    this.from = function(input) {
      return passAll(options, formatFrom, input);
    };
  }

  return wNumb;
});


/***/ }),

/***/ "./src/assets/5series.webp":
/*!*********************************!*\
  !*** ./src/assets/5series.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "946c2395716dd8e7a109.webp";

/***/ }),

/***/ "./src/assets/8series.webp":
/*!*********************************!*\
  !*** ./src/assets/8series.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "13981cb7557620bed377.webp";

/***/ }),

/***/ "./src/assets/background2.jpg":
/*!************************************!*\
  !*** ./src/assets/background2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "aeedab6d796b0aa5d61a.jpg";

/***/ }),

/***/ "./src/assets/i4.webp":
/*!****************************!*\
  !*** ./src/assets/i4.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "104d6f5437a74d415a28.webp";

/***/ }),

/***/ "./src/assets/i7.webp":
/*!****************************!*\
  !*** ./src/assets/i7.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c47ef5e0286ca1f8b5c.webp";

/***/ }),

/***/ "./src/assets/ix.webp":
/*!****************************!*\
  !*** ./src/assets/ix.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5d06e5d93f3ea7100c1d.webp";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e393261e188c0adab753.png";

/***/ }),

/***/ "./src/assets/m5.webp":
/*!****************************!*\
  !*** ./src/assets/m5.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "07b8aef3b567ce866f4f.webp";

/***/ }),

/***/ "./src/assets/m8.webp":
/*!****************************!*\
  !*** ./src/assets/m8.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8974e71248775ffc102d.webp";

/***/ }),

/***/ "./src/assets/x4m.webp":
/*!*****************************!*\
  !*** ./src/assets/x4m.webp ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e675d3015989d7e8843e.webp";

/***/ }),

/***/ "./src/assets/x5m.webp":
/*!*****************************!*\
  !*** ./src/assets/x5m.webp ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cbcd96ff1c13b95c565b.webp";

/***/ }),

/***/ "./src/assets/x6.webp":
/*!****************************!*\
  !*** ./src/assets/x6.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6079d653240ba7f4421f.webp";

/***/ }),

/***/ "./src/assets/x7.webp":
/*!****************************!*\
  !*** ./src/assets/x7.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d1a1fdba55e74e3640c4.webp";

/***/ }),

/***/ "./src/assets/z4.webp":
/*!****************************!*\
  !*** ./src/assets/z4.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a6ccf154cad1937a5931.webp";

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles.css */ "./src/styles.css");
__webpack_require__(/*! ./cards/cards */ "./src/cards/cards.ts");
const cards_1 = __webpack_require__(/*! ./cards/cards */ "./src/cards/cards.ts");
const cars_1 = __webpack_require__(/*! ./types/cars */ "./src/types/cars.ts");
__webpack_require__(/*! ../src/filters/rangeFilters */ "./src/filters/rangeFilters.ts");
__webpack_require__(/*! ../src/filters/typeFilters */ "./src/filters/typeFilters.ts");
__webpack_require__(/*! ../src/filters/popularityFilter */ "./src/filters/popularityFilter.ts");
__webpack_require__(/*! ../src/filters/sortSearchFilters */ "./src/filters/sortSearchFilters.ts");
const sortByValue_1 = __webpack_require__(/*! ./functions/sortByValue */ "./src/functions/sortByValue.ts");
const checkLS_1 = __webpack_require__(/*! ./functions/checkLS */ "./src/functions/checkLS.ts");
__webpack_require__(/*! ./filters/resetFilters */ "./src/filters/resetFilters.ts");
(0, cards_1.showCards)((0, sortByValue_1.sortByName)(cars_1.allCars, 'model'));
(0, checkLS_1.checkLS)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDJDQUEyQyxtQ0FBbUMsY0FBYyxnQkFBZ0IsR0FBRyxTQUFTLGdIQUFnSCxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sT0FBTyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxN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Q0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1DQUFtQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUE4QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQyxzQ0FBc0MseUNBQXlDO0FBQy9FLGtDQUFrQyxxQ0FBcUM7QUFDdkUsbUNBQW1DLHNDQUFzQztBQUN6RSxxQkFBcUIsdUJBQXVCO0FBQzVDLHVCQUF1Qix5QkFBeUI7QUFDaEQseUJBQXlCLDJCQUEyQjtBQUNwRCxvQkFBb0IsdUJBQXVCO0FBQzNDLHVCQUF1QiwwQkFBMEI7QUFDakQsaUNBQWlDLG9DQUFvQztBQUNyRSxxQkFBcUIsdUJBQXVCO0FBQzVDLDJCQUEyQiw4QkFBOEI7QUFDekQsc0JBQXNCLHlCQUF5QjtBQUMvQyxxQkFBcUIsd0JBQXdCO0FBQzdDLHVCQUF1QiwwQkFBMEI7QUFDakQseUJBQXlCLDJCQUEyQjtBQUNwRCwwQkFBMEIsNkJBQTZCO0FBQ3ZELHNCQUFzQix5QkFBeUI7QUFDL0Msd0JBQXdCLDJCQUEyQjtBQUNuRCwrQkFBK0IsaUNBQWlDO0FBQ2hFLCtCQUErQixrQ0FBa0M7QUFDakUseUJBQXlCLDJCQUEyQjtBQUNwRCwwQkFBMEIsNEJBQTRCO0FBQ3RELGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLGdCQUFnQjtBQUNoRztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLCtCQUErQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQsYUFBYTs7QUFFaEUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNXNFRCxNQUFxRjtBQUNyRixNQUEyRTtBQUMzRSxNQUFrRjtBQUNsRixNQUFxRztBQUNyRyxNQUE4RjtBQUM5RixNQUE4RjtBQUM5RixNQUE4RjtBQUM5RjtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qix3RkFBbUI7QUFDL0Msd0JBQXdCLHFHQUFhOztBQUVyQyx1QkFBdUIsMEZBQWE7QUFDcEM7QUFDQSxpQkFBaUIsa0ZBQU07QUFDdkIsNkJBQTZCLHlGQUFrQjs7QUFFL0MsYUFBYSw2RkFBRyxDQUFDLDhFQUFPOzs7O0FBSXdDO0FBQ2hFLE9BQU8saUVBQWUsOEVBQU8sSUFBSSxxRkFBYyxHQUFHLHFGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUE0RztBQUM1RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRGQUFPOzs7O0FBSXNEO0FBQzlFLE9BQU8saUVBQWUsNEZBQU8sSUFBSSxtR0FBYyxHQUFHLG1HQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFxRztBQUNyRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSStDO0FBQ3ZFLE9BQU8saUVBQWUscUZBQU8sSUFBSSw0RkFBYyxHQUFHLDRGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNmYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakIsbUJBQU8sQ0FBQywwQ0FBYTtBQUNyQixlQUFlLG1CQUFPLENBQUMsbUNBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msa0JBQWtCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQixFQUFFLGVBQWU7QUFDbEUsd0NBQXdDLGVBQWU7QUFDdkQsd0NBQXdDLGVBQWU7QUFDdkQsa0RBQWtELG9CQUFvQjtBQUN0RSx1REFBdUQseUJBQXlCO0FBQ2hGLHdDQUF3QyxlQUFlO0FBQ3ZELHNDQUFzQyxjQUFjO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7Ozs7QUNuRUo7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxZQUFZOzs7Ozs7Ozs7Ozs7QUNqQkM7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCLG1CQUFPLENBQUMsNENBQWdCO0FBQ3hDLHNCQUFzQixtQkFBTyxDQUFDLGdFQUEwQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbEJZO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLDRDQUFnQjtBQUN4QyxzQkFBc0IsbUJBQU8sQ0FBQyxnRUFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDaEJZO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQixtQkFBTyxDQUFDLGdFQUFZO0FBQ3JDLFlBQVksbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQixtQkFBTyxDQUFDLHFGQUFnQztBQUN4QyxnQkFBZ0IsbUJBQU8sQ0FBQyw0Q0FBZ0I7QUFDeEMsc0JBQXNCLG1CQUFPLENBQUMsZ0VBQTBCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVCQUF1QixFQUFFLHNCQUFzQjtBQUM5RSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCLEVBQUUsc0JBQXNCO0FBQzNFLENBQUM7Ozs7Ozs7Ozs7OztBQzlEWTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNkWTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0IsbUJBQU8sQ0FBQyw0Q0FBZ0I7QUFDeEMsc0JBQXNCLG1CQUFPLENBQUMsZ0VBQTBCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNqQlk7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCLG1CQUFPLENBQUMsNENBQWdCO0FBQ3hDLHNCQUFzQixtQkFBTyxDQUFDLGdFQUEwQjtBQUN4RCxtQkFBTyxDQUFDLHdEQUFtQjtBQUMzQixtQkFBTyxDQUFDLHFEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcEJZO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWU7QUFDZixnQkFBZ0IsbUJBQU8sQ0FBQyw0Q0FBZ0I7QUFDeEMsc0JBQXNCLG1CQUFPLENBQUMscURBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JGYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0IsR0FBRyxrQkFBa0I7QUFDdkMsZUFBZSxtQkFBTyxDQUFDLDBDQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtCQUFrQjs7Ozs7Ozs7Ozs7O0FDekdMO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWU7QUFDZixnQkFBZ0IsbUJBQU8sQ0FBQyxxQ0FBUztBQUNqQyxtQkFBTyxDQUFDLHdDQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7Ozs7Ozs7Ozs7OztBQ2pCRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZLEdBQUcsV0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLCtCQUErQiw4QkFBOEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhCQUE4QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxZQUFZOzs7Ozs7Ozs7OztBQzFCWjtBQUNBLE1BQU0sSUFBMEM7QUFDaEQ7QUFDQSxJQUFJLGlDQUFPLEVBQUUsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxrR0FBQztBQUN2QixJQUFJLEtBQUssRUFNTjtBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxJQUFJO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwQkFBMEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwQkFBMEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNVhEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQU8sQ0FBQyxzQ0FBYztBQUN0QixtQkFBTyxDQUFDLDJDQUFlO0FBQ3ZCLGdCQUFnQixtQkFBTyxDQUFDLDJDQUFlO0FBQ3ZDLGVBQWUsbUJBQU8sQ0FBQyx5Q0FBYztBQUNyQyxtQkFBTyxDQUFDLGtFQUE2QjtBQUNyQyxtQkFBTyxDQUFDLGdFQUE0QjtBQUNwQyxtQkFBTyxDQUFDLDBFQUFpQztBQUN6QyxtQkFBTyxDQUFDLDRFQUFrQztBQUMxQyxzQkFBc0IsbUJBQU8sQ0FBQywrREFBeUI7QUFDdkQsa0JBQWtCLG1CQUFPLENBQUMsdURBQXFCO0FBQy9DLG1CQUFPLENBQUMsNkRBQXdCO0FBQ2hDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jYXJkcy9jYXJkcy5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2ZpbHRlcnMvdHlwZUZpbHRlcnMuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy90eXBlcy9jYXJzLmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9ub3Vpc2xpZGVyL2Rpc3Qvbm91aXNsaWRlci5jc3M/YzNkNSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY2FyZHMvY2FyZHMuY3NzPzE3OTIiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2ZpbHRlcnMvdHlwZUZpbHRlcnMuY3NzPzFjOWMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvdHlwZXMvY2Fycy5jc3M/ZTM1OSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jYXJkcy9jYXJkcy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY2FyZHMvY2FydC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvZmlsdGVycy9jb2xvckZpbHRlcnMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2ZpbHRlcnMvcG9wdWxhcml0eUZpbHRlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvZmlsdGVycy9yYW5nZUZpbHRlcnMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2ZpbHRlcnMvcmVzZXRGaWx0ZXJzLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9maWx0ZXJzL3NvcnRTZWFyY2hGaWx0ZXJzLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9maWx0ZXJzL3R5cGVGaWx0ZXJzLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9mdW5jdGlvbnMvY2hlY2tMUy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvZnVuY3Rpb25zL3NvcnRCeVZhbHVlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy90eXBlcy9jYXJzLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy90eXBlcy90eXBlcy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvd251bWIvd051bWIuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogRnVuY3Rpb25hbCBzdHlsaW5nO1xcbiAqIFRoZXNlIHN0eWxlcyBhcmUgcmVxdWlyZWQgZm9yIG5vVWlTbGlkZXIgdG8gZnVuY3Rpb24uXFxuICogWW91IGRvbid0IG5lZWQgdG8gY2hhbmdlIHRoZXNlIHJ1bGVzIHRvIGFwcGx5IHlvdXIgZGVzaWduLlxcbiAqL1xcbi5ub1VpLXRhcmdldCxcXG4ubm9VaS10YXJnZXQgKiB7XFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ub1VpLXRhcmdldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ub1VpLWJhc2UsXFxuLm5vVWktY29ubmVjdHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4vKiBXcmFwcGVyIGZvciBhbGwgY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMDtcXG59XFxuLm5vVWktY29ubmVjdCxcXG4ubm9VaS1vcmlnaW4ge1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xcbn1cXG4vKiBPZmZzZXQgZGlyZWN0aW9uXFxuICovXFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcbi8qIEdpdmUgb3JpZ2lucyAwIGhlaWdodC93aWR0aCBzbyB0aGV5IGRvbid0IGludGVyZmVyZSB3aXRoIGNsaWNraW5nIHRoZVxcbiAqIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luIHtcXG4gIHRvcDogLTEwMCU7XFxuICB3aWR0aDogMDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4ubm9VaS1oYW5kbGUge1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5ub1VpLXRvdWNoLWFyZWEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1jb25uZWN0LFxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1vcmlnaW4ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG4ubm9VaS1zdGF0ZS1kcmFnICoge1xcbiAgY3Vyc29yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxufVxcbi8qIFNsaWRlciBzaXplIGFuZCBoYW5kbGUgcGxhY2VtZW50O1xcbiAqL1xcbi5ub1VpLWhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIHJpZ2h0OiAtMTdweDtcXG4gIHRvcDogLTZweDtcXG59XFxuLm5vVWktdmVydGljYWwge1xcbiAgd2lkdGg6IDE4cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIHJpZ2h0OiAtNnB4O1xcbiAgYm90dG9tOiAtMTdweDtcXG59XFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICBsZWZ0OiAtMTdweDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4vKiBTdHlsaW5nO1xcbiAqIEdpdmluZyB0aGUgY29ubmVjdCBlbGVtZW50IGEgYm9yZGVyIHJhZGl1cyBjYXVzZXMgaXNzdWVzIHdpdGggdXNpbmcgdHJhbnNmb3JtOiBzY2FsZVxcbiAqL1xcbi5ub1VpLXRhcmdldCB7XFxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0QzRDNEMztcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjRjBGMEYwLCAwIDNweCA2cHggLTVweCAjQkJCO1xcbn1cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogIzNGQjhBRjtcXG59XFxuLyogSGFuZGxlcyBhbmQgY3Vyc29ycztcXG4gKi9cXG4ubm9VaS1kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuLm5vVWktaGFuZGxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0VCRUJFQiwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuLm5vVWktYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNEREQsIDAgM3B4IDZweCAtM3B4ICNCQkI7XFxufVxcbi8qIEhhbmRsZSBzdHJpcGVzO1xcbiAqL1xcbi5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICB3aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZDogI0U4RTdFNjtcXG4gIGxlZnQ6IDE0cHg7XFxuICB0b3A6IDZweDtcXG59XFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGxlZnQ6IDE3cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBsZWZ0OiA2cHg7XFxuICB0b3A6IDE0cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuICB0b3A6IDE3cHg7XFxufVxcbi8qIERpc2FibGVkIHN0YXRlO1xcbiAqL1xcbltkaXNhYmxlZF0gLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjQjhCOEI4O1xcbn1cXG5bZGlzYWJsZWRdLm5vVWktdGFyZ2V0LFxcbltkaXNhYmxlZF0ubm9VaS1oYW5kbGUsXFxuW2Rpc2FibGVkXSAubm9VaS1oYW5kbGUge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLyogQmFzZTtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMsXFxuLm5vVWktcGlwcyAqIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ub1VpLXBpcHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi8qIFZhbHVlcztcXG4gKlxcbiAqL1xcbi5ub1VpLXZhbHVlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ub1VpLXZhbHVlLXN1YiB7XFxuICBjb2xvcjogI2NjYztcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuLyogTWFya2luZ3M7XFxuICpcXG4gKi9cXG4ubm9VaS1tYXJrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI0NDQztcXG59XFxuLm5vVWktbWFya2VyLXN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG4ubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgYmFja2dyb3VuZDogI0FBQTtcXG59XFxuLyogSG9yaXpvbnRhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLWhvcml6b250YWwge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxufVxcbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlciB7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDVweDtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItc3ViIHtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG4vKiBWZXJ0aWNhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLXZlcnRpY2FsIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcbi5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlciB7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItc3ViIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcbi5ub1VpLXRvb2x0aXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJvdHRvbTogMTIwJTtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxMjAlO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gIGxlZnQ6IGF1dG87XFxuICBib3R0b206IDEwcHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMThweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMThweCk7XFxuICB0b3A6IGF1dG87XFxuICByaWdodDogMjhweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL25vdWlzbGlkZXIvZGlzdC9ub3Vpc2xpZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0U7QUFDRjs7RUFFRSwyQkFBMkI7RUFDM0IsNkNBQTZDO0VBQzdDLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixzQkFBc0I7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QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsUUFBUTtFQUNSLFdBQVc7QUFDYjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRnVuY3Rpb25hbCBzdHlsaW5nO1xcbiAqIFRoZXNlIHN0eWxlcyBhcmUgcmVxdWlyZWQgZm9yIG5vVWlTbGlkZXIgdG8gZnVuY3Rpb24uXFxuICogWW91IGRvbid0IG5lZWQgdG8gY2hhbmdlIHRoZXNlIHJ1bGVzIHRvIGFwcGx5IHlvdXIgZGVzaWduLlxcbiAqL1xcbi5ub1VpLXRhcmdldCxcXG4ubm9VaS10YXJnZXQgKiB7XFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ub1VpLXRhcmdldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5ub1VpLWJhc2UsXFxuLm5vVWktY29ubmVjdHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4vKiBXcmFwcGVyIGZvciBhbGwgY29ubmVjdCBlbGVtZW50cy5cXG4gKi9cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogMDtcXG59XFxuLm5vVWktY29ubmVjdCxcXG4ubm9VaS1vcmlnaW4ge1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xcbn1cXG4vKiBPZmZzZXQgZGlyZWN0aW9uXFxuICovXFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcbi8qIEdpdmUgb3JpZ2lucyAwIGhlaWdodC93aWR0aCBzbyB0aGV5IGRvbid0IGludGVyZmVyZSB3aXRoIGNsaWNraW5nIHRoZVxcbiAqIGNvbm5lY3QgZWxlbWVudHMuXFxuICovXFxuLm5vVWktdmVydGljYWwgLm5vVWktb3JpZ2luIHtcXG4gIHRvcDogLTEwMCU7XFxuICB3aWR0aDogMDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS1vcmlnaW4ge1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4ubm9VaS1oYW5kbGUge1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5ub1VpLXRvdWNoLWFyZWEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1jb25uZWN0LFxcbi5ub1VpLXN0YXRlLXRhcCAubm9VaS1vcmlnaW4ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG4ubm9VaS1zdGF0ZS1kcmFnICoge1xcbiAgY3Vyc29yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxufVxcbi8qIFNsaWRlciBzaXplIGFuZCBoYW5kbGUgcGxhY2VtZW50O1xcbiAqL1xcbi5ub1VpLWhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIHJpZ2h0OiAtMTdweDtcXG4gIHRvcDogLTZweDtcXG59XFxuLm5vVWktdmVydGljYWwge1xcbiAgd2lkdGg6IDE4cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZSB7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIHJpZ2h0OiAtNnB4O1xcbiAgYm90dG9tOiAtMTdweDtcXG59XFxuLm5vVWktdHh0LWRpci1ydGwubm9VaS1ob3Jpem9udGFsIC5ub1VpLWhhbmRsZSB7XFxuICBsZWZ0OiAtMTdweDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4vKiBTdHlsaW5nO1xcbiAqIEdpdmluZyB0aGUgY29ubmVjdCBlbGVtZW50IGEgYm9yZGVyIHJhZGl1cyBjYXVzZXMgaXNzdWVzIHdpdGggdXNpbmcgdHJhbnNmb3JtOiBzY2FsZVxcbiAqL1xcbi5ub1VpLXRhcmdldCB7XFxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0QzRDNEMztcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCAjRjBGMEYwLCAwIDNweCA2cHggLTVweCAjQkJCO1xcbn1cXG4ubm9VaS1jb25uZWN0cyB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5ub1VpLWNvbm5lY3Qge1xcbiAgYmFja2dyb3VuZDogIzNGQjhBRjtcXG59XFxuLyogSGFuZGxlcyBhbmQgY3Vyc29ycztcXG4gKi9cXG4ubm9VaS1kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuLm5vVWktaGFuZGxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjRkZGLCBpbnNldCAwIDFweCA3cHggI0VCRUJFQiwgMCAzcHggNnB4IC0zcHggI0JCQjtcXG59XFxuLm5vVWktYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggI0ZGRiwgaW5zZXQgMCAxcHggN3B4ICNEREQsIDAgM3B4IDZweCAtM3B4ICNCQkI7XFxufVxcbi8qIEhhbmRsZSBzdHJpcGVzO1xcbiAqL1xcbi5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICB3aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZDogI0U4RTdFNjtcXG4gIGxlZnQ6IDE0cHg7XFxuICB0b3A6IDZweDtcXG59XFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIGxlZnQ6IDE3cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTpiZWZvcmUsXFxuLm5vVWktdmVydGljYWwgLm5vVWktaGFuZGxlOmFmdGVyIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBsZWZ0OiA2cHg7XFxuICB0b3A6IDE0cHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLWhhbmRsZTphZnRlciB7XFxuICB0b3A6IDE3cHg7XFxufVxcbi8qIERpc2FibGVkIHN0YXRlO1xcbiAqL1xcbltkaXNhYmxlZF0gLm5vVWktY29ubmVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjQjhCOEI4O1xcbn1cXG5bZGlzYWJsZWRdLm5vVWktdGFyZ2V0LFxcbltkaXNhYmxlZF0ubm9VaS1oYW5kbGUsXFxuW2Rpc2FibGVkXSAubm9VaS1oYW5kbGUge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLyogQmFzZTtcXG4gKlxcbiAqL1xcbi5ub1VpLXBpcHMsXFxuLm5vVWktcGlwcyAqIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5ub1VpLXBpcHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi8qIFZhbHVlcztcXG4gKlxcbiAqL1xcbi5ub1VpLXZhbHVlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ub1VpLXZhbHVlLXN1YiB7XFxuICBjb2xvcjogI2NjYztcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuLyogTWFya2luZ3M7XFxuICpcXG4gKi9cXG4ubm9VaS1tYXJrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI0NDQztcXG59XFxuLm5vVWktbWFya2VyLXN1YiB7XFxuICBiYWNrZ3JvdW5kOiAjQUFBO1xcbn1cXG4ubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgYmFja2dyb3VuZDogI0FBQTtcXG59XFxuLyogSG9yaXpvbnRhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLWhvcml6b250YWwge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XFxufVxcbi5ub1VpLXJ0bCAubm9VaS12YWx1ZS1ob3Jpem9udGFsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xcbn1cXG4ubm9VaS1tYXJrZXItaG9yaXpvbnRhbC5ub1VpLW1hcmtlciB7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDVweDtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItc3ViIHtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuLm5vVWktbWFya2VyLWhvcml6b250YWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbn1cXG4vKiBWZXJ0aWNhbCBsYXlvdXQ7XFxuICpcXG4gKi9cXG4ubm9VaS1waXBzLXZlcnRpY2FsIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcbi5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuLm5vVWktcnRsIC5ub1VpLXZhbHVlLXZlcnRpY2FsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxufVxcbi5ub1VpLW1hcmtlci12ZXJ0aWNhbC5ub1VpLW1hcmtlciB7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItc3ViIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG4ubm9VaS1tYXJrZXItdmVydGljYWwubm9VaS1tYXJrZXItbGFyZ2Uge1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcbi5ub1VpLXRvb2x0aXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm5vVWktaG9yaXpvbnRhbCAubm9VaS10b29sdGlwIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJvdHRvbTogMTIwJTtcXG59XFxuLm5vVWktdmVydGljYWwgLm5vVWktdG9vbHRpcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxMjAlO1xcbn1cXG4ubm9VaS1ob3Jpem9udGFsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcXG4gIGxlZnQ6IGF1dG87XFxuICBib3R0b206IDEwcHg7XFxufVxcbi5ub1VpLXZlcnRpY2FsIC5ub1VpLW9yaWdpbiA+IC5ub1VpLXRvb2x0aXAge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMThweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMThweCk7XFxuICB0b3A6IGF1dG87XFxuICByaWdodDogMjhweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyJmZhbWlseT1Sb2JvdG8rU2xhYiZmYW1pbHk9Q2FiaW46d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkcy1ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDQyMHB4O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsXFxyXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMWZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDogMjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRlc2Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjMzYzOTQ1O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbGlzdC1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgY29sb3I6ICMzNjM5NDU7XFxyXFxuICAgIG1hcmdpbjogM3B4IDA7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDE3cHg7XFxyXFxuICAgIGhlaWdodDogMTdweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxN3B4IDE3cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10by1jYXJ0IHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNlZGYxZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcyYjU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDYWJpbicsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDNweCAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4YjA0YjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NhcmRzL2NhcmRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQjttREFDK0M7SUFDL0MseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtREFBcUM7SUFDckMsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLDRFQUE0RTtJQUM1RSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlciZmYW1pbHk9Um9ib3RvK1NsYWImZmFtaWx5PUNhYmluOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi5jYXJkcy1ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDQyMHB4O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsXFxyXFxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMWZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDogMjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRlc2Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjMzYzOTQ1O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbGlzdC1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgY29sb3I6ICMzNjM5NDU7XFxyXFxuICAgIG1hcmdpbjogM3B4IDA7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDE3cHg7XFxyXFxuICAgIGhlaWdodDogMTdweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvbG9nby5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxN3B4IDE3cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10by1jYXJ0IHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNlZGYxZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcyYjU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDYWJpbicsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDNweCAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4YjA0YjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK1NsYWI6d2dodEA1MDAmZmFtaWx5PVVidW50dTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZmlsdGVycy1ieS12YWx1ZSxcXHJcXG4ucmFuZ2UtZmlsdGVycyB7XFxyXFxuICAgIHdpZHRoOiAzODBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZWUxO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycyBoMyB7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmdlLWZpbHRlcnMgaDMge1xcclxcbiAgICBtYXJnaW46IDAgMTVweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1bGFyaXR5LWZpbHRlcixcXHJcXG4udHlwZS1maWx0ZXJzLFxcclxcbi5zb3J0LWZpbHRlcixcXHJcXG4uc2VhcmNoLWZpbHRlcixcXHJcXG4uY29sb3ItZmlsdGVycyxcXHJcXG4ucXVhbnRpdHktZmlsdGVycyxcXHJcXG4ucHJpY2UtZmlsdGVycyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zb3J0IHtcXHJcXG4gICAgd2lkdGg6IDIzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjOThiNGQ0O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdHlsZWQtY2hlY2tib3gge1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAxcHggM3B4IDFweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdHlsZWQtY2hlY2tib3g6Y2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OGIwNGI7XFxyXFxufVxcclxcbi5zdHlsZWQtY2hlY2tib3g6YWZ0ZXIge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xcclxcbiAgICBjb250ZW50OiAnXFxcXGYwMGMnO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5zdHlsZWQtY2hlY2tib3g6Y2hlY2tlZDphZnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZS1maWx0ZXJzIGxhYmVsIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYy1yZWQsXFxyXFxuLmMtcmVkOmNoZWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0MTI0O1xcclxcbn1cXHJcXG4uYy1ibHVlLFxcclxcbi5jLWJsdWU6Y2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDU2OGI7XFxyXFxufVxcclxcbi5jLXdoaXRlLFxcclxcbi5jLXdoaXRlOmNoZWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmMteWVsbG93LFxcclxcbi5jLXllbGxvdzpjaGVja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZGY0ZDtcXHJcXG59XFxyXFxuLmMtYmxhY2ssXFxyXFxuLmMtYmxhY2s6Y2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM5NDU7XFxyXFxufVxcclxcbi5jLWdyYXksXFxyXFxuLmMtZ3JheTpjaGVja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzOTU5NztcXHJcXG59XFxyXFxuXFxyXFxuI3F1YW50aXR5LXNsaWRlcixcXHJcXG4jcHJpY2Utc2xpZGVyIHtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1idG4ge1xcclxcbiAgICB3aWR0aDogMTgwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzg4YjA0YjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubm8taXRlbXMge1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9maWx0ZXJzL3R5cGVGaWx0ZXJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7Ozs7SUFPSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHlGQUF5RjtJQUN6RixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSx5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSx1QkFBdUI7QUFDM0I7QUFDQTs7SUFFSSx5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSx5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDUwMCZmYW1pbHk9VWJ1bnR1OndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi5maWx0ZXJzLWJ5LXZhbHVlLFxcclxcbi5yYW5nZS1maWx0ZXJzIHtcXHJcXG4gICAgd2lkdGg6IDM4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWVlZTE7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzIGgzIHtcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHggMCAwO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFuZ2UtZmlsdGVycyBoMyB7XFxyXFxuICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVsYXJpdHktZmlsdGVyLFxcclxcbi50eXBlLWZpbHRlcnMsXFxyXFxuLnNvcnQtZmlsdGVyLFxcclxcbi5zZWFyY2gtZmlsdGVyLFxcclxcbi5jb2xvci1maWx0ZXJzLFxcclxcbi5xdWFudGl0eS1maWx0ZXJzLFxcclxcbi5wcmljZS1maWx0ZXJzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQge1xcclxcbiAgICB3aWR0aDogMjMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM5OGI0ZDQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0eWxlZC1jaGVja2JveCB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDFweCAzcHggMXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0eWxlZC1jaGVja2JveDpjaGVja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4YjA0YjtcXHJcXG59XFxyXFxuLnN0eWxlZC1jaGVja2JveDphZnRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XFxyXFxuICAgIGNvbnRlbnQ6ICdcXFxcZjAwYyc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDNweCBibGFjaztcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLnN0eWxlZC1jaGVja2JveDpjaGVja2VkOmFmdGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi50eXBlLWZpbHRlcnMgbGFiZWwge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jLXJlZCxcXHJcXG4uYy1yZWQ6Y2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDQxMjQ7XFxyXFxufVxcclxcbi5jLWJsdWUsXFxyXFxuLmMtYmx1ZTpjaGVja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NTY4YjtcXHJcXG59XFxyXFxuLmMtd2hpdGUsXFxyXFxuLmMtd2hpdGU6Y2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uYy15ZWxsb3csXFxyXFxuLmMteWVsbG93OmNoZWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVkZjRkO1xcclxcbn1cXHJcXG4uYy1ibGFjayxcXHJcXG4uYy1ibGFjazpjaGVja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2Mzk0NTtcXHJcXG59XFxyXFxuLmMtZ3JheSxcXHJcXG4uYy1ncmF5OmNoZWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTM5NTk3O1xcclxcbn1cXHJcXG5cXHJcXG4jcXVhbnRpdHktc2xpZGVyLFxcclxcbiNwcmljZS1zbGlkZXIge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWJ0biB7XFxyXFxuICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjODhiMDRiO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uby1pdGVtcyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpbmxhbmRpY2E6d2dodEA3MDAmZmFtaWx5PVVidW50dTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIsXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIGNvbG9yOiAjZjBlYWQ2O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAuY2FydC1pbWcge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmNhcnQtYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5jYXJ0LWNvdW50IHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0ZpbmxhbmRpY2EnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDIge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzIHtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5naXRodWItaWNvbiB7XFxyXFxuICAgIHdpZHRoOiA2NXB4O1xcclxcbiAgICBoZWlnaHQ6IDY1cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLnJzLWljb24ge1xcclxcbiAgICB3aWR0aDogMTgwcHg7XFxyXFxuICAgIGhlaWdodDogNTVweDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5ycy1pY29uOmhvdmVyLFxcclxcbi5naXRodWItaWNvbjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7O0lBRUksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUZBQXlFO0lBQ3pFLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaW5sYW5kaWNhOndnaHRANzAwJmZhbWlseT1VYnVudHU6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2JhY2tncm91bmQyLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIsXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIGNvbG9yOiAjZjBlYWQ2O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAuY2FydC1pbWcge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmNhcnQtYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5jYXJ0LWNvdW50IHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0ZpbmxhbmRpY2EnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDIge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzIHtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5naXRodWItaWNvbiB7XFxyXFxuICAgIHdpZHRoOiA2NXB4O1xcclxcbiAgICBoZWlnaHQ6IDY1cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLnJzLWljb24ge1xcclxcbiAgICB3aWR0aDogMTgwcHg7XFxyXFxuICAgIGhlaWdodDogNTVweDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5ycy1pY29uOmhvdmVyLFxcclxcbi5naXRodWItaWNvbjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvbTUud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9tOC53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3g0bS53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3g2LndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMveDcud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy81c2VyaWVzLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvOHNlcmllcy53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2k0LndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaTcud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9peC53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy94NW0ud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvejQud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tNSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcbi5tOCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcbi54NG0ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbn1cXHJcXG4ueDYge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbn1cXHJcXG4ueDcge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbn1cXHJcXG4uczUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcclxcbn1cXHJcXG4uczgge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpO1xcclxcbn1cXHJcXG4uaTQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpO1xcclxcbn1cXHJcXG4uaTcge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpO1xcclxcbn1cXHJcXG4uaXgge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpO1xcclxcbn1cXHJcXG4ueDVtIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIik7XFxyXFxufVxcclxcbi56NCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaTQsXFxyXFxuLmk3LFxcclxcbi5peCxcXHJcXG4ubTUsXFxyXFxuLm04LFxcclxcbi5zNSxcXHJcXG4uczgsXFxyXFxuLng0bSxcXHJcXG4ueDVtLFxcclxcbi54NixcXHJcXG4ueDcsXFxyXFxuLno0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDIwcHggMjIwcHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90eXBlcy9jYXJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1EQUFvQztBQUN4QztBQUNBO0lBQ0ksbURBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxtREFBcUM7QUFDekM7QUFDQTtJQUNJLG1EQUFvQztBQUN4QztBQUNBO0lBQ0ksbURBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxtREFBeUM7QUFDN0M7QUFDQTtJQUNJLG1EQUF5QztBQUM3QztBQUNBO0lBQ0ksbURBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxtREFBb0M7QUFDeEM7QUFDQTtJQUNJLG1EQUFvQztBQUN4QztBQUNBO0lBQ0ksb0RBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxvREFBb0M7QUFDeEM7O0FBRUE7Ozs7Ozs7Ozs7OztJQVlJLHVCQUF1QjtJQUN2Qiw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm01IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvbTUud2VicCcpO1xcclxcbn1cXHJcXG4ubTgge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9tOC53ZWJwJyk7XFxyXFxufVxcclxcbi54NG0ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy94NG0ud2VicCcpO1xcclxcbn1cXHJcXG4ueDYge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy94Ni53ZWJwJyk7XFxyXFxufVxcclxcbi54NyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL3g3LndlYnAnKTtcXHJcXG59XFxyXFxuLnM1IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvNXNlcmllcy53ZWJwJyk7XFxyXFxufVxcclxcbi5zOCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzLzhzZXJpZXMud2VicCcpO1xcclxcbn1cXHJcXG4uaTQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pNC53ZWJwJyk7XFxyXFxufVxcclxcbi5pNyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL2k3LndlYnAnKTtcXHJcXG59XFxyXFxuLml4IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaXgud2VicCcpO1xcclxcbn1cXHJcXG4ueDVtIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMveDVtLndlYnAnKTtcXHJcXG59XFxyXFxuLno0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvejQud2VicCcpO1xcclxcbn1cXHJcXG5cXHJcXG4uaTQsXFxyXFxuLmk3LFxcclxcbi5peCxcXHJcXG4ubTUsXFxyXFxuLm04LFxcclxcbi5zNSxcXHJcXG4uczgsXFxyXFxuLng0bSxcXHJcXG4ueDVtLFxcclxcbi54NixcXHJcXG4ueDcsXFxyXFxuLno0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDIwcHggMjIwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwubm9VaVNsaWRlciA9IHt9KSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgZXhwb3J0cy5QaXBzTW9kZSA9IHZvaWQgMDtcbiAgICAoZnVuY3Rpb24gKFBpcHNNb2RlKSB7XG4gICAgICAgIFBpcHNNb2RlW1wiUmFuZ2VcIl0gPSBcInJhbmdlXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiU3RlcHNcIl0gPSBcInN0ZXBzXCI7XG4gICAgICAgIFBpcHNNb2RlW1wiUG9zaXRpb25zXCJdID0gXCJwb3NpdGlvbnNcIjtcbiAgICAgICAgUGlwc01vZGVbXCJDb3VudFwiXSA9IFwiY291bnRcIjtcbiAgICAgICAgUGlwc01vZGVbXCJWYWx1ZXNcIl0gPSBcInZhbHVlc1wiO1xuICAgIH0pKGV4cG9ydHMuUGlwc01vZGUgfHwgKGV4cG9ydHMuUGlwc01vZGUgPSB7fSkpO1xuICAgIGV4cG9ydHMuUGlwc1R5cGUgPSB2b2lkIDA7XG4gICAgKGZ1bmN0aW9uIChQaXBzVHlwZSkge1xuICAgICAgICBQaXBzVHlwZVtQaXBzVHlwZVtcIk5vbmVcIl0gPSAtMV0gPSBcIk5vbmVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJOb1ZhbHVlXCJdID0gMF0gPSBcIk5vVmFsdWVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJMYXJnZVZhbHVlXCJdID0gMV0gPSBcIkxhcmdlVmFsdWVcIjtcbiAgICAgICAgUGlwc1R5cGVbUGlwc1R5cGVbXCJTbWFsbFZhbHVlXCJdID0gMl0gPSBcIlNtYWxsVmFsdWVcIjtcbiAgICB9KShleHBvcnRzLlBpcHNUeXBlIHx8IChleHBvcnRzLlBpcHNUeXBlID0ge30pKTtcbiAgICAvL3JlZ2lvbiBIZWxwZXIgTWV0aG9kc1xuICAgIGZ1bmN0aW9uIGlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGVudHJ5KSAmJiB0eXBlb2YgZW50cnkuZnJvbSA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkge1xuICAgICAgICAvLyBwYXJ0aWFsIGZvcm1hdHRlcnMgb25seSBuZWVkIGEgdG8gZnVuY3Rpb24gYW5kIG5vdCBhIGZyb20gZnVuY3Rpb25cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlbnRyeSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZW50cnkudG8gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbCkge1xuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNTZXQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIEJpbmRhYmxlIHZlcnNpb25cbiAgICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlcyBkdXBsaWNhdGVzIGZyb20gYW4gYXJyYXkuXG4gICAgZnVuY3Rpb24gdW5pcXVlKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpc1thXSA/ICh0aGlzW2FdID0gdHJ1ZSkgOiBmYWxzZTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICAvLyBSb3VuZCBhIHZhbHVlIHRvIHRoZSBjbG9zZXN0ICd0bycuXG4gICAgZnVuY3Rpb24gY2xvc2VzdCh2YWx1ZSwgdG8pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyB0bykgKiB0bztcbiAgICB9XG4gICAgLy8gQ3VycmVudCBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudC5cbiAgICBmdW5jdGlvbiBvZmZzZXQoZWxlbSwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgdmFyIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICAgICAgICB2YXIgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciBwYWdlT2Zmc2V0ID0gZ2V0UGFnZU9mZnNldChkb2MpO1xuICAgICAgICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgY29udGFpbnMgbGVmdCBzY3JvbGwgaW4gQ2hyb21lIG9uIEFuZHJvaWQuXG4gICAgICAgIC8vIEkgaGF2ZW4ndCBmb3VuZCBhIGZlYXR1cmUgZGV0ZWN0aW9uIHRoYXQgcHJvdmVzIHRoaXMuIFdvcnN0IGNhc2VcbiAgICAgICAgLy8gc2NlbmFyaW8gb24gbWlzLW1hdGNoOiB0aGUgJ3RhcCcgZmVhdHVyZSBvbiBob3Jpem9udGFsIHNsaWRlcnMgYnJlYWtzLlxuICAgICAgICBpZiAoL3dlYmtpdC4qQ2hyb21lLipNb2JpbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBwYWdlT2Zmc2V0LnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmllbnRhdGlvbiA/IHJlY3QudG9wICsgcGFnZU9mZnNldC55IC0gZG9jRWxlbS5jbGllbnRUb3AgOiByZWN0LmxlZnQgKyBwYWdlT2Zmc2V0LnggLSBkb2NFbGVtLmNsaWVudExlZnQ7XG4gICAgfVxuICAgIC8vIENoZWNrcyB3aGV0aGVyIGEgdmFsdWUgaXMgbnVtZXJpY2FsLlxuICAgIGZ1bmN0aW9uIGlzTnVtZXJpYyhhKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4oYSkgJiYgaXNGaW5pdGUoYSk7XG4gICAgfVxuICAgIC8vIFNldHMgYSBjbGFzcyBhbmQgcmVtb3ZlcyBpdCBhZnRlciBbZHVyYXRpb25dIG1zLlxuICAgIGZ1bmN0aW9uIGFkZENsYXNzRm9yKGVsZW1lbnQsIGNsYXNzTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgaWYgKGR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTGltaXRzIGEgdmFsdWUgdG8gMCAtIDEwMFxuICAgIGZ1bmN0aW9uIGxpbWl0KGEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGEsIDEwMCksIDApO1xuICAgIH1cbiAgICAvLyBXcmFwcyBhIHZhcmlhYmxlIGFzIGFuIGFycmF5LCBpZiBpdCBpc24ndCBvbmUgeWV0LlxuICAgIC8vIE5vdGUgdGhhdCBhbiBpbnB1dCBhcnJheSBpcyByZXR1cm5lZCBieSByZWZlcmVuY2UhXG4gICAgZnVuY3Rpb24gYXNBcnJheShhKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpID8gYSA6IFthXTtcbiAgICB9XG4gICAgLy8gQ291bnRzIGRlY2ltYWxzXG4gICAgZnVuY3Rpb24gY291bnREZWNpbWFscyhudW1TdHIpIHtcbiAgICAgICAgbnVtU3RyID0gU3RyaW5nKG51bVN0cik7XG4gICAgICAgIHZhciBwaWVjZXMgPSBudW1TdHIuc3BsaXQoXCIuXCIpO1xuICAgICAgICByZXR1cm4gcGllY2VzLmxlbmd0aCA+IDEgPyBwaWVjZXNbMV0ubGVuZ3RoIDogMDtcbiAgICB9XG4gICAgLy8gaHR0cDovL3lvdW1pZ2h0bm90bmVlZGpxdWVyeS5jb20vI2FkZF9jbGFzc1xuICAgIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaHR0cDovL3lvdW1pZ2h0bm90bmVlZGpxdWVyeS5jb20vI3JlbW92ZV9jbGFzc1xuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhL1xccy8udGVzdChjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXGIpXCIgKyBjbGFzc05hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpICsgXCIoXFxcXGJ8JClcIiwgXCJnaVwiKSwgXCIgXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vcGxhaW5qcy5jb20vamF2YXNjcmlwdC9hdHRyaWJ1dGVzL2FkZGluZy1yZW1vdmluZy1hbmQtdGVzdGluZy1mb3ItY2xhc3Nlcy05L1xuICAgIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdCA/IGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpIDogbmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBjbGFzc05hbWUgKyBcIlxcXFxiXCIpLnRlc3QoZWwuY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9zY3JvbGxZI05vdGVzXG4gICAgZnVuY3Rpb24gZ2V0UGFnZU9mZnNldChkb2MpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBpc0NTUzFDb21wYXQgPSAoZG9jLmNvbXBhdE1vZGUgfHwgXCJcIikgPT09IFwiQ1NTMUNvbXBhdFwiO1xuICAgICAgICB2YXIgeCA9IHN1cHBvcnRQYWdlT2Zmc2V0XG4gICAgICAgICAgICA/IHdpbmRvdy5wYWdlWE9mZnNldFxuICAgICAgICAgICAgOiBpc0NTUzFDb21wYXRcbiAgICAgICAgICAgICAgICA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgICAgdmFyIHkgPSBzdXBwb3J0UGFnZU9mZnNldFxuICAgICAgICAgICAgPyB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAgIDogaXNDU1MxQ29tcGF0XG4gICAgICAgICAgICAgICAgPyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgIDogZG9jLmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHksXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIHdlIHByb3ZpZGUgYSBmdW5jdGlvbiB0byBjb21wdXRlIGNvbnN0YW50cyBpbnN0ZWFkXG4gICAgLy8gb2YgYWNjZXNzaW5nIHdpbmRvdy4qIGFzIHNvb24gYXMgdGhlIG1vZHVsZSBuZWVkcyBpdFxuICAgIC8vIHNvIHRoYXQgd2UgZG8gbm90IGNvbXB1dGUgYW55dGhpbmcgaWYgbm90IG5lZWRlZFxuICAgIGZ1bmN0aW9uIGdldEFjdGlvbnMoKSB7XG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZXZlbnRzIHRvIGJpbmQuIElFMTEgaW1wbGVtZW50cyBwb2ludGVyRXZlbnRzIHdpdGhvdXRcbiAgICAgICAgLy8gYSBwcmVmaXgsIHdoaWNoIGJyZWFrcyBjb21wYXRpYmlsaXR5IHdpdGggdGhlIElFMTAgaW1wbGVtZW50YXRpb24uXG4gICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBzdGFydDogXCJwb2ludGVyZG93blwiLFxuICAgICAgICAgICAgICAgIG1vdmU6IFwicG9pbnRlcm1vdmVcIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwicG9pbnRlcnVwXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCJNU1BvaW50ZXJEb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IFwiTVNQb2ludGVyTW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwiTVNQb2ludGVyVXBcIixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIm1vdXNlZG93biB0b3VjaHN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IFwibW91c2Vtb3ZlIHRvdWNobW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwibW91c2V1cCB0b3VjaGVuZFwiLFxuICAgICAgICAgICAgICAgIH07XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG4gICAgLy8gSXNzdWUgIzc4NVxuICAgIGZ1bmN0aW9uIGdldFN1cHBvcnRzUGFzc2l2ZSgpIHtcbiAgICAgICAgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIFwicGFzc2l2ZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsIG51bGwsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5DU1MgJiYgQ1NTLnN1cHBvcnRzICYmIENTUy5zdXBwb3J0cyhcInRvdWNoLWFjdGlvblwiLCBcIm5vbmVcIik7XG4gICAgfVxuICAgIC8vZW5kcmVnaW9uXG4gICAgLy9yZWdpb24gUmFuZ2UgQ2FsY3VsYXRpb25cbiAgICAvLyBEZXRlcm1pbmUgdGhlIHNpemUgb2YgYSBzdWItcmFuZ2UgaW4gcmVsYXRpb24gdG8gYSBmdWxsIHJhbmdlLlxuICAgIGZ1bmN0aW9uIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSB7XG4gICAgICAgIHJldHVybiAxMDAgLyAocGIgLSBwYSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBIb3cgbWFueSBwZXJjZW50IGlzIHRoaXMgdmFsdWUgb2YgdGhpcyByYW5nZT9cbiAgICBmdW5jdGlvbiBmcm9tUGVyY2VudGFnZShyYW5nZSwgdmFsdWUsIHN0YXJ0UmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIDEwMCkgLyAocmFuZ2Vbc3RhcnRSYW5nZSArIDFdIC0gcmFuZ2Vbc3RhcnRSYW5nZV0pO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgV2hlcmUgaXMgdGhpcyB2YWx1ZSBvbiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIHRvUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZyb21QZXJjZW50YWdlKHJhbmdlLCByYW5nZVswXSA8IDAgPyB2YWx1ZSArIE1hdGguYWJzKHJhbmdlWzBdKSA6IHZhbHVlIC0gcmFuZ2VbMF0sIDApO1xuICAgIH1cbiAgICAvLyAodmFsdWUpIEhvdyBtdWNoIGlzIHRoaXMgcGVyY2VudGFnZSBvbiB0aGlzIHJhbmdlP1xuICAgIGZ1bmN0aW9uIGlzUGVyY2VudGFnZShyYW5nZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAqIChyYW5nZVsxXSAtIHJhbmdlWzBdKSkgLyAxMDAgKyByYW5nZVswXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Sih2YWx1ZSwgYXJyKSB7XG4gICAgICAgIHZhciBqID0gMTtcbiAgICAgICAgd2hpbGUgKHZhbHVlID49IGFycltqXSkge1xuICAgICAgICAgICAgaiArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqO1xuICAgIH1cbiAgICAvLyAocGVyY2VudGFnZSkgSW5wdXQgYSB2YWx1ZSwgZmluZCB3aGVyZSwgb24gYSBzY2FsZSBvZiAwLTEwMCwgaXQgYXBwbGllcy5cbiAgICBmdW5jdGlvbiB0b1N0ZXBwaW5nKHhWYWwsIHhQY3QsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+PSB4VmFsLnNsaWNlKC0xKVswXSkge1xuICAgICAgICAgICAgcmV0dXJuIDEwMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhWYWwpO1xuICAgICAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcbiAgICAgICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICAgICAgdmFyIHBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBwYiA9IHhQY3Rbal07XG4gICAgICAgIHJldHVybiBwYSArIHRvUGVyY2VudGFnZShbdmEsIHZiXSwgdmFsdWUpIC8gc3ViUmFuZ2VSYXRpbyhwYSwgcGIpO1xuICAgIH1cbiAgICAvLyAodmFsdWUpIElucHV0IGEgcGVyY2VudGFnZSwgZmluZCB3aGVyZSBpdCBpcyBvbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxuICAgIGZ1bmN0aW9uIGZyb21TdGVwcGluZyh4VmFsLCB4UGN0LCB2YWx1ZSkge1xuICAgICAgICAvLyBUaGVyZSBpcyBubyByYW5nZSBncm91cCB0aGF0IGZpdHMgMTAwXG4gICAgICAgIGlmICh2YWx1ZSA+PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiB4VmFsLnNsaWNlKC0xKVswXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhQY3QpO1xuICAgICAgICB2YXIgdmEgPSB4VmFsW2ogLSAxXTtcbiAgICAgICAgdmFyIHZiID0geFZhbFtqXTtcbiAgICAgICAgdmFyIHBhID0geFBjdFtqIC0gMV07XG4gICAgICAgIHZhciBwYiA9IHhQY3Rbal07XG4gICAgICAgIHJldHVybiBpc1BlcmNlbnRhZ2UoW3ZhLCB2Yl0sICh2YWx1ZSAtIHBhKSAqIHN1YlJhbmdlUmF0aW8ocGEsIHBiKSk7XG4gICAgfVxuICAgIC8vIChwZXJjZW50YWdlKSBHZXQgdGhlIHN0ZXAgdGhhdCBhcHBsaWVzIGF0IGEgY2VydGFpbiB2YWx1ZS5cbiAgICBmdW5jdGlvbiBnZXRTdGVwKHhQY3QsIHhTdGVwcywgc25hcCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaiA9IGdldEoodmFsdWUsIHhQY3QpO1xuICAgICAgICB2YXIgYSA9IHhQY3RbaiAtIDFdO1xuICAgICAgICB2YXIgYiA9IHhQY3Rbal07XG4gICAgICAgIC8vIElmICdzbmFwJyBpcyBzZXQsIHN0ZXBzIGFyZSB1c2VkIGFzIGZpeGVkIHBvaW50cyBvbiB0aGUgc2xpZGVyLlxuICAgICAgICBpZiAoc25hcCkge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCBwb3NpdGlvbiwgYSBvciBiLlxuICAgICAgICAgICAgaWYgKHZhbHVlIC0gYSA+IChiIC0gYSkgLyAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXhTdGVwc1tqIC0gMV0pIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geFBjdFtqIC0gMV0gKyBjbG9zZXN0KHZhbHVlIC0geFBjdFtqIC0gMV0sIHhTdGVwc1tqIC0gMV0pO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIC8vcmVnaW9uIFNwZWN0cnVtXG4gICAgdmFyIFNwZWN0cnVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBTcGVjdHJ1bShlbnRyeSwgc25hcCwgc2luZ2xlU3RlcCkge1xuICAgICAgICAgICAgdGhpcy54UGN0ID0gW107XG4gICAgICAgICAgICB0aGlzLnhWYWwgPSBbXTtcbiAgICAgICAgICAgIHRoaXMueFN0ZXBzID0gW107XG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcCA9IFtdO1xuICAgICAgICAgICAgdGhpcy54U3RlcHMgPSBbc2luZ2xlU3RlcCB8fCBmYWxzZV07XG4gICAgICAgICAgICB0aGlzLnhOdW1TdGVwcyA9IFtmYWxzZV07XG4gICAgICAgICAgICB0aGlzLnNuYXAgPSBzbmFwO1xuICAgICAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICAgICAgdmFyIG9yZGVyZWQgPSBbXTtcbiAgICAgICAgICAgIC8vIE1hcCB0aGUgb2JqZWN0IGtleXMgdG8gYW4gYXJyYXkuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBvcmRlcmVkLnB1c2goW2FzQXJyYXkoZW50cnlbaW5kZXhdKSwgaW5kZXhdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gU29ydCBhbGwgZW50cmllcyBieSB2YWx1ZSAobnVtZXJpYyBzb3J0KS5cbiAgICAgICAgICAgIG9yZGVyZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhWzBdWzBdIC0gYlswXVswXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQ29udmVydCBhbGwgZW50cmllcyB0byBzdWJyYW5nZXMuXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBvcmRlcmVkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRW50cnlQb2ludChvcmRlcmVkW2luZGV4XVsxXSwgb3JkZXJlZFtpbmRleF1bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGFjdHVhbCBzdGVwIHZhbHVlcy5cbiAgICAgICAgICAgIC8vIHhTdGVwcyBpcyBzb3J0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgeFBjdCBhbmQgeFZhbC5cbiAgICAgICAgICAgIHRoaXMueE51bVN0ZXBzID0gdGhpcy54U3RlcHMuc2xpY2UoMCk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGFsbCBudW1lcmljIHN0ZXBzIHRvIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBzdWJyYW5nZSB0aGV5IHJlcHJlc2VudC5cbiAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RlcFBvaW50KGluZGV4LCB0aGlzLnhOdW1TdGVwc1tpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXREaXN0YW5jZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMueE51bVN0ZXBzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXNbaW5kZXhdID0gZnJvbVBlcmNlbnRhZ2UodGhpcy54VmFsLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlcztcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG92ZXIgdGhlIHdob2xlIHNjYWxlIG9mIHJhbmdlcy5cbiAgICAgICAgLy8gZGlyZWN0aW9uOiAwID0gYmFja3dhcmRzIC8gMSA9IGZvcndhcmRzXG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXRBYnNvbHV0ZURpc3RhbmNlID0gZnVuY3Rpb24gKHZhbHVlLCBkaXN0YW5jZXMsIGRpcmVjdGlvbikge1xuICAgICAgICAgICAgdmFyIHhQY3RfaW5kZXggPSAwO1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHJhbmdlIHdoZXJlIHRvIHN0YXJ0IGNhbGN1bGF0aW9uXG4gICAgICAgICAgICBpZiAodmFsdWUgPCB0aGlzLnhQY3RbdGhpcy54UGN0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHZhbHVlID4gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICB4UGN0X2luZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IHRoaXMueFBjdFt0aGlzLnhQY3QubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICB4UGN0X2luZGV4ID0gdGhpcy54UGN0Lmxlbmd0aCAtIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBsb29raW5nIGJhY2t3YXJkcyBhbmQgdGhlIHZhbHVlIGlzIGV4YWN0bHkgYXQgYSByYW5nZSBzZXBhcmF0b3IgdGhlbiBsb29rIG9uZSByYW5nZSBmdXJ0aGVyXG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvbiAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHhQY3RfaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGFydF9mYWN0b3I7XG4gICAgICAgICAgICB2YXIgcmVzdF9mYWN0b3IgPSAxO1xuICAgICAgICAgICAgdmFyIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXhdO1xuICAgICAgICAgICAgdmFyIHJhbmdlX3BjdCA9IDA7XG4gICAgICAgICAgICB2YXIgcmVsX3JhbmdlX2Rpc3RhbmNlID0gMDtcbiAgICAgICAgICAgIHZhciBhYnNfZGlzdGFuY2VfY291bnRlciA9IDA7XG4gICAgICAgICAgICB2YXIgcmFuZ2VfY291bnRlciA9IDA7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgd2hhdCBwYXJ0IG9mIHRoZSBzdGFydCByYW5nZSB0aGUgdmFsdWUgaXNcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBzdGFydF9mYWN0b3IgPSAodmFsdWUgLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pIC8gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gKHRoaXMueFBjdFt4UGN0X2luZGV4ICsgMV0gLSB2YWx1ZSkgLyAodGhpcy54UGN0W3hQY3RfaW5kZXggKyAxXSAtIHRoaXMueFBjdFt4UGN0X2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEbyB1bnRpbCB0aGUgY29tcGxldGUgZGlzdGFuY2UgYWNyb3NzIHJhbmdlcyBpcyBjYWxjdWxhdGVkXG4gICAgICAgICAgICB3aGlsZSAocmVzdF9yZWxfZGlzdGFuY2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwZXJjZW50YWdlIG9mIHRvdGFsIHJhbmdlXG4gICAgICAgICAgICAgICAgcmFuZ2VfcGN0ID0gdGhpcy54UGN0W3hQY3RfaW5kZXggKyAxICsgcmFuZ2VfY291bnRlcl0gLSB0aGlzLnhQY3RbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdO1xuICAgICAgICAgICAgICAgIC8vIERldGVjdCBpZiB0aGUgbWFyZ2luLCBwYWRkaW5nIG9yIGxpbWl0IGlzIGxhcmdlciB0aGVuIHRoZSBjdXJyZW50IHJhbmdlIGFuZCBjYWxjdWxhdGVcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJlc3RfZmFjdG9yICsgMTAwIC0gc3RhcnRfZmFjdG9yICogMTAwID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGxhcmdlciB0aGVuIHRha2UgdGhlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugb2YgdGhlIHdob2xlIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIHJlbF9yYW5nZV9kaXN0YW5jZSA9IHJhbmdlX3BjdCAqIHN0YXJ0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzdCBmYWN0b3Igb2YgcmVsYXRpdmUgcGVyY2VudHVhbCBkaXN0YW5jZSBzdGlsbCB0byBiZSBjYWxjdWxhdGVkXG4gICAgICAgICAgICAgICAgICAgIHJlc3RfZmFjdG9yID0gKHJlc3RfcmVsX2Rpc3RhbmNlIC0gMTAwICogc3RhcnRfZmFjdG9yKSAvIGRpc3RhbmNlc1t4UGN0X2luZGV4ICsgcmFuZ2VfY291bnRlcl07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBzdGFydCBmYWN0b3IgdG8gMSBhcyBmb3IgbmV4dCByYW5nZSBpdCBkb2VzIG5vdCBhcHBseS5cbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfZmFjdG9yID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHNtYWxsZXIgb3IgZXF1YWwgdGhlbiB0YWtlIHRoZSBwZXJjZW50dWFsIGRpc3RhbmNlIG9mIHRoZSBjYWxjdWxhdGUgcGVyY2VudHVhbCBwYXJ0IG9mIHRoYXQgcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVsX3JhbmdlX2Rpc3RhbmNlID0gKChkaXN0YW5jZXNbeFBjdF9pbmRleCArIHJhbmdlX2NvdW50ZXJdICogcmFuZ2VfcGN0KSAvIDEwMCkgKiByZXN0X2ZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gcmVzdCBsZWZ0IGFzIHRoZSByZXN0IGZpdHMgaW4gY3VycmVudCByYW5nZVxuICAgICAgICAgICAgICAgICAgICByZXN0X2ZhY3RvciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgYWJzX2Rpc3RhbmNlX2NvdW50ZXIgPSBhYnNfZGlzdGFuY2VfY291bnRlciAtIHJlbF9yYW5nZV9kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gTGltaXQgcmFuZ2UgdG8gZmlyc3QgcmFuZ2Ugd2hlbiBkaXN0YW5jZSBiZWNvbWVzIG91dHNpZGUgb2YgbWluaW11bSByYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy54UGN0Lmxlbmd0aCArIHJhbmdlX2NvdW50ZXIgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VfY291bnRlci0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhYnNfZGlzdGFuY2VfY291bnRlciA9IGFic19kaXN0YW5jZV9jb3VudGVyICsgcmVsX3JhbmdlX2Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBMaW1pdCByYW5nZSB0byBsYXN0IHJhbmdlIHdoZW4gZGlzdGFuY2UgYmVjb21lcyBvdXRzaWRlIG9mIG1heGltdW0gcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMueFBjdC5sZW5ndGggLSByYW5nZV9jb3VudGVyID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlX2NvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXN0IG9mIHJlbGF0aXZlIHBlcmNlbnR1YWwgZGlzdGFuY2Ugc3RpbGwgdG8gYmUgY2FsY3VsYXRlZFxuICAgICAgICAgICAgICAgIHJlc3RfcmVsX2Rpc3RhbmNlID0gZGlzdGFuY2VzW3hQY3RfaW5kZXggKyByYW5nZV9jb3VudGVyXSAqIHJlc3RfZmFjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgYWJzX2Rpc3RhbmNlX2NvdW50ZXI7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS50b1N0ZXBwaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvU3RlcHBpbmcodGhpcy54VmFsLCB0aGlzLnhQY3QsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmZyb21TdGVwcGluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21TdGVwcGluZyh0aGlzLnhWYWwsIHRoaXMueFBjdCwgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0U3RlcCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBnZXRTdGVwKHRoaXMueFBjdCwgdGhpcy54U3RlcHMsIHRoaXMuc25hcCwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuZ2V0RGVmYXVsdFN0ZXAgPSBmdW5jdGlvbiAodmFsdWUsIGlzRG93biwgc2l6ZSkge1xuICAgICAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xuICAgICAgICAgICAgLy8gV2hlbiBhdCB0aGUgdG9wIG9yIHN0ZXBwaW5nIGRvd24sIGxvb2sgYXQgdGhlIHByZXZpb3VzIHN1Yi1yYW5nZVxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAxMDAgfHwgKGlzRG93biAmJiB2YWx1ZSA9PT0gdGhpcy54UGN0W2ogLSAxXSkpIHtcbiAgICAgICAgICAgICAgICBqID0gTWF0aC5tYXgoaiAtIDEsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnhWYWxbal0gLSB0aGlzLnhWYWxbaiAtIDFdKSAvIHNpemU7XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5nZXROZWFyYnlTdGVwcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGogPSBnZXRKKHZhbHVlLCB0aGlzLnhQY3QpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGVwQmVmb3JlOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWU6IHRoaXMueFZhbFtqIC0gMl0sXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMueE51bVN0ZXBzW2ogLSAyXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbaiAtIDJdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpc1N0ZXA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2ogLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogdGhpcy54TnVtU3RlcHNbaiAtIDFdLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0U3RlcDogdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtqIC0gMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdGVwQWZ0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWYWx1ZTogdGhpcy54VmFsW2pdLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiB0aGlzLnhOdW1TdGVwc1tqXSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXBbal0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFNwZWN0cnVtLnByb3RvdHlwZS5jb3VudFN0ZXBEZWNpbWFscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdGVwRGVjaW1hbHMgPSB0aGlzLnhOdW1TdGVwcy5tYXAoY291bnREZWNpbWFscyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgc3RlcERlY2ltYWxzKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhc05vU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnhWYWxbMF0gPT09IHRoaXMueFZhbFt0aGlzLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgIH07XG4gICAgICAgIC8vIE91dHNpZGUgdGVzdGluZ1xuICAgICAgICBTcGVjdHJ1bS5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RlcCh0aGlzLnRvU3RlcHBpbmcodmFsdWUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZUVudHJ5UG9pbnQgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZTtcbiAgICAgICAgICAgIC8vIENvdmVydCBtaW4vbWF4IHN5bnRheCB0byAwIGFuZCAxMDAuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IFwibWluXCIpIHtcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSBcIm1heFwiKSB7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZSA9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSBwYXJzZUZsb2F0KGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBjb3JyZWN0IGlucHV0LlxuICAgICAgICAgICAgaWYgKCFpc051bWVyaWMocGVyY2VudGFnZSkgfHwgIWlzTnVtZXJpYyh2YWx1ZVswXSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncmFuZ2UnIHZhbHVlIGlzbid0IG51bWVyaWMuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RvcmUgdmFsdWVzLlxuICAgICAgICAgICAgdGhpcy54UGN0LnB1c2gocGVyY2VudGFnZSk7XG4gICAgICAgICAgICB0aGlzLnhWYWwucHVzaCh2YWx1ZVswXSk7XG4gICAgICAgICAgICB2YXIgdmFsdWUxID0gTnVtYmVyKHZhbHVlWzFdKTtcbiAgICAgICAgICAgIC8vIE5hTiB3aWxsIGV2YWx1YXRlIHRvIGZhbHNlIHRvbywgYnV0IHRvIGtlZXBcbiAgICAgICAgICAgIC8vIGxvZ2dpbmcgY2xlYXIsIHNldCBzdGVwIGV4cGxpY2l0bHkuIE1ha2Ugc3VyZVxuICAgICAgICAgICAgLy8gbm90IHRvIG92ZXJyaWRlIHRoZSAnc3RlcCcgc2V0dGluZyB3aXRoIGZhbHNlLlxuICAgICAgICAgICAgaWYgKCFwZXJjZW50YWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih2YWx1ZTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzWzBdID0gdmFsdWUxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzLnB1c2goaXNOYU4odmFsdWUxKSA/IGZhbHNlIDogdmFsdWUxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMueEhpZ2hlc3RDb21wbGV0ZVN0ZXAucHVzaCgwKTtcbiAgICAgICAgfTtcbiAgICAgICAgU3BlY3RydW0ucHJvdG90eXBlLmhhbmRsZVN0ZXBQb2ludCA9IGZ1bmN0aW9uIChpLCBuKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgJ2ZhbHNlJyBzdGVwcGluZy5cbiAgICAgICAgICAgIGlmICghbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xuICAgICAgICAgICAgaWYgKHRoaXMueFZhbFtpXSA9PT0gdGhpcy54VmFsW2kgKyAxXSkge1xuICAgICAgICAgICAgICAgIHRoaXMueFN0ZXBzW2ldID0gdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtpXSA9IHRoaXMueFZhbFtpXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGYWN0b3IgdG8gcmFuZ2UgcmF0aW9cbiAgICAgICAgICAgIHRoaXMueFN0ZXBzW2ldID1cbiAgICAgICAgICAgICAgICBmcm9tUGVyY2VudGFnZShbdGhpcy54VmFsW2ldLCB0aGlzLnhWYWxbaSArIDFdXSwgbiwgMCkgLyBzdWJSYW5nZVJhdGlvKHRoaXMueFBjdFtpXSwgdGhpcy54UGN0W2kgKyAxXSk7XG4gICAgICAgICAgICB2YXIgdG90YWxTdGVwcyA9ICh0aGlzLnhWYWxbaSArIDFdIC0gdGhpcy54VmFsW2ldKSAvIHRoaXMueE51bVN0ZXBzW2ldO1xuICAgICAgICAgICAgdmFyIGhpZ2hlc3RTdGVwID0gTWF0aC5jZWlsKE51bWJlcih0b3RhbFN0ZXBzLnRvRml4ZWQoMykpIC0gMSk7XG4gICAgICAgICAgICB2YXIgc3RlcCA9IHRoaXMueFZhbFtpXSArIHRoaXMueE51bVN0ZXBzW2ldICogaGlnaGVzdFN0ZXA7XG4gICAgICAgICAgICB0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwW2ldID0gc3RlcDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFNwZWN0cnVtO1xuICAgIH0oKSk7XG4gICAgLy9lbmRyZWdpb25cbiAgICAvL3JlZ2lvbiBPcHRpb25zXG4gICAgLypcdEV2ZXJ5IGlucHV0IG9wdGlvbiBpcyB0ZXN0ZWQgYW5kIHBhcnNlZC4gVGhpcyB3aWxsIHByZXZlbnRcbiAgICAgICAgZW5kbGVzcyB2YWxpZGF0aW9uIGluIGludGVybmFsIG1ldGhvZHMuIFRoZXNlIHRlc3RzIGFyZVxuICAgICAgICBzdHJ1Y3R1cmVkIHdpdGggYW4gaXRlbSBmb3IgZXZlcnkgb3B0aW9uIGF2YWlsYWJsZS4gQW5cbiAgICAgICAgb3B0aW9uIGNhbiBiZSBtYXJrZWQgYXMgcmVxdWlyZWQgYnkgc2V0dGluZyB0aGUgJ3InIGZsYWcuXG4gICAgICAgIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICAgICAgICAgICAgLSBUaGUgcHJvdmlkZWQgdmFsdWUgZm9yIHRoZSBvcHRpb247XG4gICAgICAgICAgICAtIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIG9iamVjdDtcbiAgICAgICAgICAgIC0gVGhlIG5hbWUgZm9yIHRoZSBvcHRpb247XG5cbiAgICAgICAgVGhlIHRlc3RpbmcgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSB3aGVuIGFuIGVycm9yIGlzIGRldGVjdGVkLFxuICAgICAgICBvciB0cnVlIHdoZW4gZXZlcnl0aGluZyBpcyBPSy4gSXQgY2FuIGFsc28gbW9kaWZ5IHRoZSBvcHRpb25cbiAgICAgICAgb2JqZWN0LCB0byBtYWtlIHN1cmUgYWxsIHZhbHVlcyBjYW4gYmUgY29ycmVjdGx5IGxvb3BlZCBlbHNld2hlcmUuICovXG4gICAgLy9yZWdpb24gRGVmYXVsdHNcbiAgICB2YXIgZGVmYXVsdEZvcm1hdHRlciA9IHtcbiAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBcIlwiIDogdmFsdWUudG9GaXhlZCgyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnJvbTogTnVtYmVyLFxuICAgIH07XG4gICAgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgICAgIHRhcmdldDogXCJ0YXJnZXRcIixcbiAgICAgICAgYmFzZTogXCJiYXNlXCIsXG4gICAgICAgIG9yaWdpbjogXCJvcmlnaW5cIixcbiAgICAgICAgaGFuZGxlOiBcImhhbmRsZVwiLFxuICAgICAgICBoYW5kbGVMb3dlcjogXCJoYW5kbGUtbG93ZXJcIixcbiAgICAgICAgaGFuZGxlVXBwZXI6IFwiaGFuZGxlLXVwcGVyXCIsXG4gICAgICAgIHRvdWNoQXJlYTogXCJ0b3VjaC1hcmVhXCIsXG4gICAgICAgIGhvcml6b250YWw6IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICB2ZXJ0aWNhbDogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcImJhY2tncm91bmRcIixcbiAgICAgICAgY29ubmVjdDogXCJjb25uZWN0XCIsXG4gICAgICAgIGNvbm5lY3RzOiBcImNvbm5lY3RzXCIsXG4gICAgICAgIGx0cjogXCJsdHJcIixcbiAgICAgICAgcnRsOiBcInJ0bFwiLFxuICAgICAgICB0ZXh0RGlyZWN0aW9uTHRyOiBcInR4dC1kaXItbHRyXCIsXG4gICAgICAgIHRleHREaXJlY3Rpb25SdGw6IFwidHh0LWRpci1ydGxcIixcbiAgICAgICAgZHJhZ2dhYmxlOiBcImRyYWdnYWJsZVwiLFxuICAgICAgICBkcmFnOiBcInN0YXRlLWRyYWdcIixcbiAgICAgICAgdGFwOiBcInN0YXRlLXRhcFwiLFxuICAgICAgICBhY3RpdmU6IFwiYWN0aXZlXCIsXG4gICAgICAgIHRvb2x0aXA6IFwidG9vbHRpcFwiLFxuICAgICAgICBwaXBzOiBcInBpcHNcIixcbiAgICAgICAgcGlwc0hvcml6b250YWw6IFwicGlwcy1ob3Jpem9udGFsXCIsXG4gICAgICAgIHBpcHNWZXJ0aWNhbDogXCJwaXBzLXZlcnRpY2FsXCIsXG4gICAgICAgIG1hcmtlcjogXCJtYXJrZXJcIixcbiAgICAgICAgbWFya2VySG9yaXpvbnRhbDogXCJtYXJrZXItaG9yaXpvbnRhbFwiLFxuICAgICAgICBtYXJrZXJWZXJ0aWNhbDogXCJtYXJrZXItdmVydGljYWxcIixcbiAgICAgICAgbWFya2VyTm9ybWFsOiBcIm1hcmtlci1ub3JtYWxcIixcbiAgICAgICAgbWFya2VyTGFyZ2U6IFwibWFya2VyLWxhcmdlXCIsXG4gICAgICAgIG1hcmtlclN1YjogXCJtYXJrZXItc3ViXCIsXG4gICAgICAgIHZhbHVlOiBcInZhbHVlXCIsXG4gICAgICAgIHZhbHVlSG9yaXpvbnRhbDogXCJ2YWx1ZS1ob3Jpem9udGFsXCIsXG4gICAgICAgIHZhbHVlVmVydGljYWw6IFwidmFsdWUtdmVydGljYWxcIixcbiAgICAgICAgdmFsdWVOb3JtYWw6IFwidmFsdWUtbm9ybWFsXCIsXG4gICAgICAgIHZhbHVlTGFyZ2U6IFwidmFsdWUtbGFyZ2VcIixcbiAgICAgICAgdmFsdWVTdWI6IFwidmFsdWUtc3ViXCIsXG4gICAgfTtcbiAgICAvLyBOYW1lc3BhY2VzIG9mIGludGVybmFsIGV2ZW50IGxpc3RlbmVyc1xuICAgIHZhciBJTlRFUk5BTF9FVkVOVF9OUyA9IHtcbiAgICAgICAgdG9vbHRpcHM6IFwiLl9fdG9vbHRpcHNcIixcbiAgICAgICAgYXJpYTogXCIuX19hcmlhXCIsXG4gICAgfTtcbiAgICAvL2VuZHJlZ2lvblxuICAgIGZ1bmN0aW9uIHRlc3RTdGVwKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSBzdGVwIG9wdGlvbiBjYW4gc3RpbGwgYmUgdXNlZCB0byBzZXQgc3RlcHBpbmdcbiAgICAgICAgLy8gZm9yIGxpbmVhciBzbGlkZXJzLiBPdmVyd3JpdHRlbiBpZiBzZXQgaW4gJ3JhbmdlJy5cbiAgICAgICAgcGFyc2VkLnNpbmdsZVN0ZXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkUGFnZU11bHRpcGxpZXIocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZFBhZ2VNdWx0aXBsaWVyJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkUGFnZU11bHRpcGxpZXIgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkTXVsdGlwbGllcihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNOdW1lcmljKGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2tleWJvYXJkTXVsdGlwbGllcicgaXMgbm90IG51bWVyaWMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5rZXlib2FyZE11bHRpcGxpZXIgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEtleWJvYXJkRGVmYXVsdFN0ZXAocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZERlZmF1bHRTdGVwJyBpcyBub3QgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkRGVmYXVsdFN0ZXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFJhbmdlKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gRmlsdGVyIGluY29ycmVjdCBpbnB1dC5cbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3JhbmdlJyBpcyBub3QgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYXRjaCBtaXNzaW5nIHN0YXJ0IG9yIGVuZC5cbiAgICAgICAgaWYgKGVudHJ5Lm1pbiA9PT0gdW5kZWZpbmVkIHx8IGVudHJ5Lm1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBNaXNzaW5nICdtaW4nIG9yICdtYXgnIGluICdyYW5nZScuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5zcGVjdHJ1bSA9IG5ldyBTcGVjdHJ1bShlbnRyeSwgcGFyc2VkLnNuYXAgfHwgZmFsc2UsIHBhcnNlZC5zaW5nbGVTdGVwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFN0YXJ0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAgICAgLy8gVmFsaWRhdGUgaW5wdXQuIFZhbHVlcyBhcmVuJ3QgdGVzdGVkLCBhcyB0aGUgcHVibGljIC52YWwgbWV0aG9kXG4gICAgICAgIC8vIHdpbGwgYWx3YXlzIHByb3ZpZGUgYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSB8fCAhZW50cnkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc3RhcnQnIG9wdGlvbiBpcyBpbmNvcnJlY3QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0b3JlIHRoZSBudW1iZXIgb2YgaGFuZGxlcy5cbiAgICAgICAgcGFyc2VkLmhhbmRsZXMgPSBlbnRyeS5sZW5ndGg7XG4gICAgICAgIC8vIFdoZW4gdGhlIHNsaWRlciBpcyBpbml0aWFsaXplZCwgdGhlIC52YWwgbWV0aG9kIHdpbGxcbiAgICAgICAgLy8gYmUgY2FsbGVkIHdpdGggdGhlIHN0YXJ0IG9wdGlvbnMuXG4gICAgICAgIHBhcnNlZC5zdGFydCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0U25hcChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnc25hcCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbmZvcmNlIDEwMCUgc3RlcHBpbmcgd2l0aGluIHN1YnJhbmdlcy5cbiAgICAgICAgcGFyc2VkLnNuYXAgPSBlbnRyeTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEFuaW1hdGUocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2FuaW1hdGUnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5mb3JjZSAxMDAlIHN0ZXBwaW5nIHdpdGhpbiBzdWJyYW5nZXMuXG4gICAgICAgIHBhcnNlZC5hbmltYXRlID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RBbmltYXRpb25EdXJhdGlvbihwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW50cnkgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdhbmltYXRpb25EdXJhdGlvbicgb3B0aW9uIG11c3QgYmUgYSBudW1iZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5hbmltYXRpb25EdXJhdGlvbiA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0Q29ubmVjdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIHZhciBjb25uZWN0ID0gW2ZhbHNlXTtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIC8vIE1hcCBsZWdhY3kgb3B0aW9uc1xuICAgICAgICBpZiAoZW50cnkgPT09IFwibG93ZXJcIikge1xuICAgICAgICAgICAgZW50cnkgPSBbdHJ1ZSwgZmFsc2VdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVudHJ5ID09PSBcInVwcGVyXCIpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gW2ZhbHNlLCB0cnVlXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgYm9vbGVhbiBvcHRpb25zXG4gICAgICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBlbnRyeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBwYXJzZWQuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdC5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbm5lY3QucHVzaChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVqZWN0IGludmFsaWQgaW5wdXRcbiAgICAgICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZW50cnkpIHx8ICFlbnRyeS5sZW5ndGggfHwgZW50cnkubGVuZ3RoICE9PSBwYXJzZWQuaGFuZGxlcyArIDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdjb25uZWN0JyBvcHRpb24gZG9lc24ndCBtYXRjaCBoYW5kbGUgY291bnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29ubmVjdCA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5jb25uZWN0ID0gY29ubmVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdE9yaWVudGF0aW9uKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gU2V0IG9yaWVudGF0aW9uIHRvIGFuIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5XG4gICAgICAgIC8vIGFycmF5IHNlbGVjdGlvbi5cbiAgICAgICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWxcIjpcbiAgICAgICAgICAgICAgICBwYXJzZWQub3J0ID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5vcnQgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnb3JpZW50YXRpb24nIG9wdGlvbiBpcyBpbnZhbGlkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0TWFyZ2luKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbWFyZ2luJyBvcHRpb24gbXVzdCBiZSBudW1lcmljLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJc3N1ZSAjNTgyXG4gICAgICAgIGlmIChlbnRyeSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5tYXJnaW4gPSBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0TGltaXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYyhlbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdsaW1pdCcgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmxpbWl0ID0gcGFyc2VkLnNwZWN0cnVtLmdldERpc3RhbmNlKGVudHJ5KTtcbiAgICAgICAgaWYgKCFwYXJzZWQubGltaXQgfHwgcGFyc2VkLmhhbmRsZXMgPCAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnbGltaXQnIG9wdGlvbiBpcyBvbmx5IHN1cHBvcnRlZCBvbiBsaW5lYXIgc2xpZGVycyB3aXRoIDIgb3IgbW9yZSBoYW5kbGVzLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0UGFkZGluZyhwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgaWYgKCFpc051bWVyaWMoZW50cnkpICYmICFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMgb3IgYXJyYXkgb2YgZXhhY3RseSAyIG51bWJlcnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVudHJ5KSAmJiAhKGVudHJ5Lmxlbmd0aCA9PT0gMiB8fCBpc051bWVyaWMoZW50cnlbMF0pIHx8IGlzTnVtZXJpYyhlbnRyeVsxXSkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVudHJ5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgICAgZW50cnkgPSBbZW50cnksIGVudHJ5XTtcbiAgICAgICAgfVxuICAgICAgICAvLyAnZ2V0RGlzdGFuY2UnIHJldHVybnMgZmFsc2UgZm9yIGludmFsaWQgdmFsdWVzLlxuICAgICAgICBwYXJzZWQucGFkZGluZyA9IFtwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMF0pLCBwYXJzZWQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZW50cnlbMV0pXTtcbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgcGFyc2VkLnNwZWN0cnVtLnhOdW1TdGVwcy5sZW5ndGggLSAxOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAvLyBsYXN0IFwicmFuZ2VcIiBjYW4ndCBjb250YWluIHN0ZXAgc2l6ZSBhcyBpdCBpcyBwdXJlbHkgYW4gZW5kcG9pbnQuXG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhZGRpbmdbMF1baW5kZXhdIDwgMCB8fCBwYXJzZWQucGFkZGluZ1sxXVtpbmRleF0gPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyKHMpLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdG90YWxQYWRkaW5nID0gZW50cnlbMF0gKyBlbnRyeVsxXTtcbiAgICAgICAgdmFyIGZpcnN0VmFsdWUgPSBwYXJzZWQuc3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgdmFyIGxhc3RWYWx1ZSA9IHBhcnNlZC5zcGVjdHJ1bS54VmFsW3BhcnNlZC5zcGVjdHJ1bS54VmFsLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodG90YWxQYWRkaW5nIC8gKGxhc3RWYWx1ZSAtIGZpcnN0VmFsdWUpID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IG5vdCBleGNlZWQgMTAwJSBvZiB0aGUgcmFuZ2UuXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3REaXJlY3Rpb24ocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICAvLyBTZXQgZGlyZWN0aW9uIGFzIGEgbnVtZXJpY2FsIHZhbHVlIGZvciBlYXN5IHBhcnNpbmcuXG4gICAgICAgIC8vIEludmVydCBjb25uZWN0aW9uIGZvciBSVEwgc2xpZGVycywgc28gdGhhdCB0aGUgcHJvcGVyXG4gICAgICAgIC8vIGhhbmRsZXMgZ2V0IHRoZSBjb25uZWN0L2JhY2tncm91bmQgY2xhc3Nlcy5cbiAgICAgICAgc3dpdGNoIChlbnRyeSkge1xuICAgICAgICAgICAgY2FzZSBcImx0clwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJ0bFwiOlxuICAgICAgICAgICAgICAgIHBhcnNlZC5kaXIgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZGlyZWN0aW9uJyBvcHRpb24gd2FzIG5vdCByZWNvZ25pemVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QmVoYXZpb3VyKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpbnB1dCBpcyBhIHN0cmluZy5cbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2JlaGF2aW91cicgbXVzdCBiZSBhIHN0cmluZyBjb250YWluaW5nIG9wdGlvbnMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBzdHJpbmcgY29udGFpbnMgYW55IGtleXdvcmRzLlxuICAgICAgICAvLyBOb25lIGFyZSByZXF1aXJlZC5cbiAgICAgICAgdmFyIHRhcCA9IGVudHJ5LmluZGV4T2YoXCJ0YXBcIikgPj0gMDtcbiAgICAgICAgdmFyIGRyYWcgPSBlbnRyeS5pbmRleE9mKFwiZHJhZ1wiKSA+PSAwO1xuICAgICAgICB2YXIgZml4ZWQgPSBlbnRyeS5pbmRleE9mKFwiZml4ZWRcIikgPj0gMDtcbiAgICAgICAgdmFyIHNuYXAgPSBlbnRyeS5pbmRleE9mKFwic25hcFwiKSA+PSAwO1xuICAgICAgICB2YXIgaG92ZXIgPSBlbnRyeS5pbmRleE9mKFwiaG92ZXJcIikgPj0gMDtcbiAgICAgICAgdmFyIHVuY29uc3RyYWluZWQgPSBlbnRyeS5pbmRleE9mKFwidW5jb25zdHJhaW5lZFwiKSA+PSAwO1xuICAgICAgICB2YXIgZHJhZ0FsbCA9IGVudHJ5LmluZGV4T2YoXCJkcmFnLWFsbFwiKSA+PSAwO1xuICAgICAgICB2YXIgc21vb3RoU3RlcHMgPSBlbnRyeS5pbmRleE9mKFwic21vb3RoLXN0ZXBzXCIpID49IDA7XG4gICAgICAgIGlmIChmaXhlZCkge1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5oYW5kbGVzICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2ZpeGVkJyBiZWhhdmlvdXIgbXVzdCBiZSB1c2VkIHdpdGggMiBoYW5kbGVzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXNlIG1hcmdpbiB0byBlbmZvcmNlIGZpeGVkIHN0YXRlXG4gICAgICAgICAgICB0ZXN0TWFyZ2luKHBhcnNlZCwgcGFyc2VkLnN0YXJ0WzFdIC0gcGFyc2VkLnN0YXJ0WzBdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5jb25zdHJhaW5lZCAmJiAocGFyc2VkLm1hcmdpbiB8fCBwYXJzZWQubGltaXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAndW5jb25zdHJhaW5lZCcgYmVoYXZpb3VyIGNhbm5vdCBiZSB1c2VkIHdpdGggbWFyZ2luIG9yIGxpbWl0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5ldmVudHMgPSB7XG4gICAgICAgICAgICB0YXA6IHRhcCB8fCBzbmFwLFxuICAgICAgICAgICAgZHJhZzogZHJhZyxcbiAgICAgICAgICAgIGRyYWdBbGw6IGRyYWdBbGwsXG4gICAgICAgICAgICBzbW9vdGhTdGVwczogc21vb3RoU3RlcHMsXG4gICAgICAgICAgICBmaXhlZDogZml4ZWQsXG4gICAgICAgICAgICBzbmFwOiBzbmFwLFxuICAgICAgICAgICAgaG92ZXI6IGhvdmVyLFxuICAgICAgICAgICAgdW5jb25zdHJhaW5lZDogdW5jb25zdHJhaW5lZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFRvb2x0aXBzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeSA9PT0gdHJ1ZSB8fCBpc1ZhbGlkUGFydGlhbEZvcm1hdHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWQuaGFuZGxlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnRvb2x0aXBzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW50cnkgPSBhc0FycmF5KGVudHJ5KTtcbiAgICAgICAgICAgIGlmIChlbnRyeS5sZW5ndGggIT09IHBhcnNlZC5oYW5kbGVzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogbXVzdCBwYXNzIGEgZm9ybWF0dGVyIGZvciBhbGwgaGFuZGxlcy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZvcm1hdHRlciAhPT0gXCJib29sZWFuXCIgJiYgIWlzVmFsaWRQYXJ0aWFsRm9ybWF0dGVyKGZvcm1hdHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3Rvb2x0aXBzJyBtdXN0IGJlIHBhc3NlZCBhIGZvcm1hdHRlciBvciAnZmFsc2UnLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBhcnNlZC50b29sdGlwcyA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RIYW5kbGVBdHRyaWJ1dGVzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKGVudHJ5Lmxlbmd0aCAhPT0gcGFyc2VkLmhhbmRsZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IG11c3QgcGFzcyBhIGF0dHJpYnV0ZXMgZm9yIGFsbCBoYW5kbGVzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuaGFuZGxlQXR0cmlidXRlcyA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0QXJpYUZvcm1hdChwYXJzZWQsIGVudHJ5KSB7XG4gICAgICAgIGlmICghaXNWYWxpZFBhcnRpYWxGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnYXJpYUZvcm1hdCcgcmVxdWlyZXMgJ3RvJyBtZXRob2QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZC5hcmlhRm9ybWF0ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RGb3JtYXQocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAoIWlzVmFsaWRGb3JtYXR0ZXIoZW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiAnZm9ybWF0JyByZXF1aXJlcyAndG8nIGFuZCAnZnJvbScgbWV0aG9kcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmZvcm1hdCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0S2V5Ym9hcmRTdXBwb3J0KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdrZXlib2FyZFN1cHBvcnQnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkLmtleWJvYXJkU3VwcG9ydCA9IGVudHJ5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0RG9jdW1lbnRFbGVtZW50KHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBhbiBhZHZhbmNlZCBvcHRpb24uIFBhc3NlZCB2YWx1ZXMgYXJlIHVzZWQgd2l0aG91dCB2YWxpZGF0aW9uLlxuICAgICAgICBwYXJzZWQuZG9jdW1lbnRFbGVtZW50ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDc3NQcmVmaXgocGFyc2VkLCBlbnRyeSkge1xuICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSBcInN0cmluZ1wiICYmIGVudHJ5ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc1ByZWZpeCcgbXVzdCBiZSBhIHN0cmluZyBvciBgZmFsc2VgLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWQuY3NzUHJlZml4ID0gZW50cnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RDc3NDbGFzc2VzKHBhcnNlZCwgZW50cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ2Nzc0NsYXNzZXMnIG11c3QgYmUgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZC5jc3NQcmVmaXggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhcnNlZC5jc3NDbGFzc2VzID0ge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnRyeSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLmNzc0NsYXNzZXNba2V5XSA9IHBhcnNlZC5jc3NQcmVmaXggKyBlbnRyeVtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQuY3NzQ2xhc3NlcyA9IGVudHJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFRlc3QgYWxsIGRldmVsb3BlciBzZXR0aW5ncyBhbmQgcGFyc2UgdG8gYXNzdW1wdGlvbi1zYWZlIHZhbHVlcy5cbiAgICBmdW5jdGlvbiB0ZXN0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIC8vIFRvIHByb3ZlIGEgZml4IGZvciAjNTM3LCBmcmVlemUgb3B0aW9ucyBoZXJlLlxuICAgICAgICAvLyBJZiB0aGUgb2JqZWN0IGlzIG1vZGlmaWVkLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAgICAgICAgLy8gT2JqZWN0LmZyZWV6ZShvcHRpb25zKTtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHtcbiAgICAgICAgICAgIG1hcmdpbjogbnVsbCxcbiAgICAgICAgICAgIGxpbWl0OiBudWxsLFxuICAgICAgICAgICAgcGFkZGluZzogbnVsbCxcbiAgICAgICAgICAgIGFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgYXJpYUZvcm1hdDogZGVmYXVsdEZvcm1hdHRlcixcbiAgICAgICAgICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdHRlcixcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVGVzdHMgYXJlIGV4ZWN1dGVkIGluIHRoZSBvcmRlciB0aGV5IGFyZSBwcmVzZW50ZWQgaGVyZS5cbiAgICAgICAgdmFyIHRlc3RzID0ge1xuICAgICAgICAgICAgc3RlcDogeyByOiBmYWxzZSwgdDogdGVzdFN0ZXAgfSxcbiAgICAgICAgICAgIGtleWJvYXJkUGFnZU11bHRpcGxpZXI6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZFBhZ2VNdWx0aXBsaWVyIH0sXG4gICAgICAgICAgICBrZXlib2FyZE11bHRpcGxpZXI6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZE11bHRpcGxpZXIgfSxcbiAgICAgICAgICAgIGtleWJvYXJkRGVmYXVsdFN0ZXA6IHsgcjogZmFsc2UsIHQ6IHRlc3RLZXlib2FyZERlZmF1bHRTdGVwIH0sXG4gICAgICAgICAgICBzdGFydDogeyByOiB0cnVlLCB0OiB0ZXN0U3RhcnQgfSxcbiAgICAgICAgICAgIGNvbm5lY3Q6IHsgcjogdHJ1ZSwgdDogdGVzdENvbm5lY3QgfSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogeyByOiB0cnVlLCB0OiB0ZXN0RGlyZWN0aW9uIH0sXG4gICAgICAgICAgICBzbmFwOiB7IHI6IGZhbHNlLCB0OiB0ZXN0U25hcCB9LFxuICAgICAgICAgICAgYW5pbWF0ZTogeyByOiBmYWxzZSwgdDogdGVzdEFuaW1hdGUgfSxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB7IHI6IGZhbHNlLCB0OiB0ZXN0QW5pbWF0aW9uRHVyYXRpb24gfSxcbiAgICAgICAgICAgIHJhbmdlOiB7IHI6IHRydWUsIHQ6IHRlc3RSYW5nZSB9LFxuICAgICAgICAgICAgb3JpZW50YXRpb246IHsgcjogZmFsc2UsIHQ6IHRlc3RPcmllbnRhdGlvbiB9LFxuICAgICAgICAgICAgbWFyZ2luOiB7IHI6IGZhbHNlLCB0OiB0ZXN0TWFyZ2luIH0sXG4gICAgICAgICAgICBsaW1pdDogeyByOiBmYWxzZSwgdDogdGVzdExpbWl0IH0sXG4gICAgICAgICAgICBwYWRkaW5nOiB7IHI6IGZhbHNlLCB0OiB0ZXN0UGFkZGluZyB9LFxuICAgICAgICAgICAgYmVoYXZpb3VyOiB7IHI6IHRydWUsIHQ6IHRlc3RCZWhhdmlvdXIgfSxcbiAgICAgICAgICAgIGFyaWFGb3JtYXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RBcmlhRm9ybWF0IH0sXG4gICAgICAgICAgICBmb3JtYXQ6IHsgcjogZmFsc2UsIHQ6IHRlc3RGb3JtYXQgfSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0VG9vbHRpcHMgfSxcbiAgICAgICAgICAgIGtleWJvYXJkU3VwcG9ydDogeyByOiB0cnVlLCB0OiB0ZXN0S2V5Ym9hcmRTdXBwb3J0IH0sXG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQ6IHsgcjogZmFsc2UsIHQ6IHRlc3REb2N1bWVudEVsZW1lbnQgfSxcbiAgICAgICAgICAgIGNzc1ByZWZpeDogeyByOiB0cnVlLCB0OiB0ZXN0Q3NzUHJlZml4IH0sXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiB7IHI6IHRydWUsIHQ6IHRlc3RDc3NDbGFzc2VzIH0sXG4gICAgICAgICAgICBoYW5kbGVBdHRyaWJ1dGVzOiB7IHI6IGZhbHNlLCB0OiB0ZXN0SGFuZGxlQXR0cmlidXRlcyB9LFxuICAgICAgICB9O1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBjb25uZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgICAgICAgICAgIGJlaGF2aW91cjogXCJ0YXBcIixcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgIGtleWJvYXJkU3VwcG9ydDogdHJ1ZSxcbiAgICAgICAgICAgIGNzc1ByZWZpeDogXCJub1VpLVwiLFxuICAgICAgICAgICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICAgICAgICAgIGtleWJvYXJkUGFnZU11bHRpcGxpZXI6IDUsXG4gICAgICAgICAgICBrZXlib2FyZE11bHRpcGxpZXI6IDEsXG4gICAgICAgICAgICBrZXlib2FyZERlZmF1bHRTdGVwOiAxMCxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQXJpYUZvcm1hdCBkZWZhdWx0cyB0byByZWd1bGFyIGZvcm1hdCwgaWYgYW55LlxuICAgICAgICBpZiAob3B0aW9ucy5mb3JtYXQgJiYgIW9wdGlvbnMuYXJpYUZvcm1hdCkge1xuICAgICAgICAgICAgb3B0aW9ucy5hcmlhRm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUnVuIGFsbCBvcHRpb25zIHRocm91Z2ggYSB0ZXN0aW5nIG1lY2hhbmlzbSB0byBlbnN1cmUgY29ycmVjdFxuICAgICAgICAvLyBpbnB1dC4gSXQgc2hvdWxkIGJlIG5vdGVkIHRoYXQgb3B0aW9ucyBtaWdodCBnZXQgbW9kaWZpZWQgdG9cbiAgICAgICAgLy8gYmUgaGFuZGxlZCBwcm9wZXJseS4gRS5nLiB3cmFwcGluZyBpbnRlZ2VycyBpbiBhcnJheXMuXG4gICAgICAgIE9iamVjdC5rZXlzKHRlc3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9uIGlzbid0IHNldCwgYnV0IGl0IGlzIHJlcXVpcmVkLCB0aHJvdyBhbiBlcnJvci5cbiAgICAgICAgICAgIGlmICghaXNTZXQob3B0aW9uc1tuYW1lXSkgJiYgZGVmYXVsdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0c1tuYW1lXS5yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6ICdcIiArIG5hbWUgKyBcIicgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXN0c1tuYW1lXS50KHBhcnNlZCwgIWlzU2V0KG9wdGlvbnNbbmFtZV0pID8gZGVmYXVsdHNbbmFtZV0gOiBvcHRpb25zW25hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZvcndhcmQgcGlwcyBvcHRpb25zXG4gICAgICAgIHBhcnNlZC5waXBzID0gb3B0aW9ucy5waXBzO1xuICAgICAgICAvLyBBbGwgcmVjZW50IGJyb3dzZXJzIGFjY2VwdCB1bnByZWZpeGVkIHRyYW5zZm9ybS5cbiAgICAgICAgLy8gV2UgbmVlZCAtbXMtIGZvciBJRTkgYW5kIC13ZWJraXQtIGZvciBvbGRlciBBbmRyb2lkO1xuICAgICAgICAvLyBBc3N1bWUgdXNlIG9mIC13ZWJraXQtIGlmIHVucHJlZml4ZWQgYW5kIC1tcy0gYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAgICAgIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI2ZlYXQ9dHJhbnNmb3JtczJkXG4gICAgICAgIHZhciBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG1zUHJlZml4ID0gZC5zdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgbm9QcmVmaXggPSBkLnN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBwYXJzZWQudHJhbnNmb3JtUnVsZSA9IG5vUHJlZml4ID8gXCJ0cmFuc2Zvcm1cIiA6IG1zUHJlZml4ID8gXCJtc1RyYW5zZm9ybVwiIDogXCJ3ZWJraXRUcmFuc2Zvcm1cIjtcbiAgICAgICAgLy8gUGlwcyBkb24ndCBtb3ZlLCBzbyB3ZSBjYW4gcGxhY2UgdGhlbSB1c2luZyBsZWZ0L3RvcC5cbiAgICAgICAgdmFyIHN0eWxlcyA9IFtcbiAgICAgICAgICAgIFtcImxlZnRcIiwgXCJ0b3BcIl0sXG4gICAgICAgICAgICBbXCJyaWdodFwiLCBcImJvdHRvbVwiXSxcbiAgICAgICAgXTtcbiAgICAgICAgcGFyc2VkLnN0eWxlID0gc3R5bGVzW3BhcnNlZC5kaXJdW3BhcnNlZC5vcnRdO1xuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbiAgICAvL2VuZHJlZ2lvblxuICAgIGZ1bmN0aW9uIHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgICAgICB2YXIgc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgPSBnZXRTdXBwb3J0c1RvdWNoQWN0aW9uTm9uZSgpO1xuICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gc3VwcG9ydHNUb3VjaEFjdGlvbk5vbmUgJiYgZ2V0U3VwcG9ydHNQYXNzaXZlKCk7XG4gICAgICAgIC8vIEFsbCB2YXJpYWJsZXMgbG9jYWwgdG8gJ3Njb3BlJyBhcmUgcHJlZml4ZWQgd2l0aCAnc2NvcGVfJ1xuICAgICAgICAvLyBTbGlkZXIgRE9NIE5vZGVzXG4gICAgICAgIHZhciBzY29wZV9UYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHZhciBzY29wZV9CYXNlO1xuICAgICAgICB2YXIgc2NvcGVfSGFuZGxlcztcbiAgICAgICAgdmFyIHNjb3BlX0Nvbm5lY3RzO1xuICAgICAgICB2YXIgc2NvcGVfUGlwcztcbiAgICAgICAgdmFyIHNjb3BlX1Rvb2x0aXBzO1xuICAgICAgICAvLyBTbGlkZXIgc3RhdGUgdmFsdWVzXG4gICAgICAgIHZhciBzY29wZV9TcGVjdHJ1bSA9IG9wdGlvbnMuc3BlY3RydW07XG4gICAgICAgIHZhciBzY29wZV9WYWx1ZXMgPSBbXTtcbiAgICAgICAgdmFyIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfSGFuZGxlTnVtYmVycyA9IFtdO1xuICAgICAgICB2YXIgc2NvcGVfQWN0aXZlSGFuZGxlc0NvdW50ID0gMDtcbiAgICAgICAgdmFyIHNjb3BlX0V2ZW50cyA9IHt9O1xuICAgICAgICAvLyBEb2N1bWVudCBOb2Rlc1xuICAgICAgICB2YXIgc2NvcGVfRG9jdW1lbnQgPSB0YXJnZXQub3duZXJEb2N1bWVudDtcbiAgICAgICAgdmFyIHNjb3BlX0RvY3VtZW50RWxlbWVudCA9IG9wdGlvbnMuZG9jdW1lbnRFbGVtZW50IHx8IHNjb3BlX0RvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHNjb3BlX0JvZHkgPSBzY29wZV9Eb2N1bWVudC5ib2R5O1xuICAgICAgICAvLyBGb3IgaG9yaXpvbnRhbCBzbGlkZXJzIGluIHN0YW5kYXJkIGx0ciBkb2N1bWVudHMsXG4gICAgICAgIC8vIG1ha2UgLm5vVWktb3JpZ2luIG92ZXJmbG93IHRvIHRoZSBsZWZ0IHNvIHRoZSBkb2N1bWVudCBkb2Vzbid0IHNjcm9sbC5cbiAgICAgICAgdmFyIHNjb3BlX0Rpck9mZnNldCA9IHNjb3BlX0RvY3VtZW50LmRpciA9PT0gXCJydGxcIiB8fCBvcHRpb25zLm9ydCA9PT0gMSA/IDAgOiAxMDA7XG4gICAgICAgIC8vIENyZWF0ZXMgYSBub2RlLCBhZGRzIGl0IHRvIHRhcmdldCwgcmV0dXJucyB0aGUgbmV3IG5vZGUuXG4gICAgICAgIGZ1bmN0aW9uIGFkZE5vZGVUbyhhZGRUYXJnZXQsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdmFyIGRpdiA9IHNjb3BlX0RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoZGl2LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGVuZCBhIG9yaWdpbiB0byB0aGUgYmFzZVxuICAgICAgICBmdW5jdGlvbiBhZGRPcmlnaW4oYmFzZSwgaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gYWRkTm9kZVRvKGJhc2UsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5vcmlnaW4pO1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZE5vZGVUbyhvcmlnaW4sIG9wdGlvbnMuY3NzQ2xhc3Nlcy5oYW5kbGUpO1xuICAgICAgICAgICAgYWRkTm9kZVRvKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnRvdWNoQXJlYSk7XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVcIiwgU3RyaW5nKGhhbmRsZU51bWJlcikpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMua2V5Ym9hcmRTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9HbG9iYWxfYXR0cmlidXRlcy90YWJpbmRleFxuICAgICAgICAgICAgICAgIC8vIDAgPSBmb2N1c2FibGUgYW5kIHJlYWNoYWJsZVxuICAgICAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRLZXlkb3duKGV2ZW50LCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXNfMSA9IG9wdGlvbnMuaGFuZGxlQXR0cmlidXRlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXNfMSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzXzFbYXR0cmlidXRlXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInNsaWRlclwiKTtcbiAgICAgICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLW9yaWVudGF0aW9uXCIsIG9wdGlvbnMub3J0ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZUxvd2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhhbmRsZU51bWJlciA9PT0gb3B0aW9ucy5oYW5kbGVzIC0gMSkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGhhbmRsZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmhhbmRsZVVwcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5zZXJ0IG5vZGVzIGZvciBjb25uZWN0IGVsZW1lbnRzXG4gICAgICAgIGZ1bmN0aW9uIGFkZENvbm5lY3QoYmFzZSwgYWRkKSB7XG4gICAgICAgICAgICBpZiAoIWFkZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oYmFzZSwgb3B0aW9ucy5jc3NDbGFzc2VzLmNvbm5lY3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBoYW5kbGVzIHRvIHRoZSBzbGlkZXIgYmFzZS5cbiAgICAgICAgZnVuY3Rpb24gYWRkRWxlbWVudHMoY29ubmVjdE9wdGlvbnMsIGJhc2UpIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0QmFzZSA9IGFkZE5vZGVUbyhiYXNlLCBvcHRpb25zLmNzc0NsYXNzZXMuY29ubmVjdHMpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcyA9IFtdO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHMgPSBbXTtcbiAgICAgICAgICAgIHNjb3BlX0Nvbm5lY3RzLnB1c2goYWRkQ29ubmVjdChjb25uZWN0QmFzZSwgY29ubmVjdE9wdGlvbnNbMF0pKTtcbiAgICAgICAgICAgIC8vIFs6Ojo6Tz09PT1PPT09PU89PT09XVxuICAgICAgICAgICAgLy8gY29ubmVjdE9wdGlvbnMgPSBbMCwgMSwgMSwgMV1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5oYW5kbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBLZWVwIGEgbGlzdCBvZiBhbGwgYWRkZWQgaGFuZGxlcy5cbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLnB1c2goYWRkT3JpZ2luKGJhc2UsIGkpKTtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVOdW1iZXJzW2ldID0gaTtcbiAgICAgICAgICAgICAgICBzY29wZV9Db25uZWN0cy5wdXNoKGFkZENvbm5lY3QoY29ubmVjdEJhc2UsIGNvbm5lY3RPcHRpb25zW2kgKyAxXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemUgYSBzaW5nbGUgc2xpZGVyLlxuICAgICAgICBmdW5jdGlvbiBhZGRTbGlkZXIoYWRkVGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBBcHBseSBjbGFzc2VzIGFuZCBkYXRhIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMubHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnJ0bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vcnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5ob3Jpem9udGFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKGFkZFRhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnZlcnRpY2FsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0ZXh0RGlyZWN0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZShhZGRUYXJnZXQpLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIGlmICh0ZXh0RGlyZWN0aW9uID09PSBcInJ0bFwiKSB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMudGV4dERpcmVjdGlvblJ0bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhhZGRUYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uTHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGROb2RlVG8oYWRkVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuYmFzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkVG9vbHRpcChoYW5kbGUsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnRvb2x0aXBzIHx8ICFvcHRpb25zLnRvb2x0aXBzW2hhbmRsZU51bWJlcl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkTm9kZVRvKGhhbmRsZS5maXJzdENoaWxkLCBvcHRpb25zLmNzc0NsYXNzZXMudG9vbHRpcCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaXNTbGlkZXJEaXNhYmxlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZV9UYXJnZXQuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGlzYWJsZSB0aGUgc2xpZGVyIGRyYWdnaW5nIGlmIGFueSBoYW5kbGUgaXMgZGlzYWJsZWRcbiAgICAgICAgZnVuY3Rpb24gaXNIYW5kbGVEaXNhYmxlZChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVPcmlnaW4gPSBzY29wZV9IYW5kbGVzW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlT3JpZ2luLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgICAgICAgICAgaWYgKHNjb3BlX1Rvb2x0aXBzKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzKTtcbiAgICAgICAgICAgICAgICBzY29wZV9Ub29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50KHRvb2x0aXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSB0b29sdGlwcyBvcHRpb24gaXMgYSBzaG9ydGhhbmQgZm9yIHVzaW5nIHRoZSAndXBkYXRlJyBldmVudC5cbiAgICAgICAgZnVuY3Rpb24gdG9vbHRpcHMoKSB7XG4gICAgICAgICAgICByZW1vdmVUb29sdGlwcygpO1xuICAgICAgICAgICAgLy8gVG9vbHRpcHMgYXJlIGFkZGVkIHdpdGggb3B0aW9ucy50b29sdGlwcyBpbiBvcmlnaW5hbCBvcmRlci5cbiAgICAgICAgICAgIHNjb3BlX1Rvb2x0aXBzID0gc2NvcGVfSGFuZGxlcy5tYXAoYWRkVG9vbHRpcCk7XG4gICAgICAgICAgICBiaW5kRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGVOdW1iZXIsIHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgICAgIGlmICghc2NvcGVfVG9vbHRpcHMgfHwgIW9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSB2YWx1ZXNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gb3B0aW9ucy50b29sdGlwc1toYW5kbGVOdW1iZXJdLnRvKHVuZW5jb2RlZFtoYW5kbGVOdW1iZXJdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2NvcGVfVG9vbHRpcHNbaGFuZGxlTnVtYmVyXS5pbm5lckhUTUwgPSBmb3JtYXR0ZWRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFyaWEoKSB7XG4gICAgICAgICAgICByZW1vdmVFdmVudChcInVwZGF0ZVwiICsgSU5URVJOQUxfRVZFTlRfTlMuYXJpYSk7XG4gICAgICAgICAgICBiaW5kRXZlbnQoXCJ1cGRhdGVcIiArIElOVEVSTkFMX0VWRU5UX05TLmFyaWEsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZU51bWJlciwgdW5lbmNvZGVkLCB0YXAsIHBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBBcmlhIFZhbHVlcyBmb3IgYWxsIGhhbmRsZXMsIGFzIGEgY2hhbmdlIGluIG9uZSBjaGFuZ2VzIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgdGhlIG5leHQuXG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlID0gc2NvcGVfSGFuZGxlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaW5kZXgsIDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gY2hlY2tIYW5kbGVQb3NpdGlvbihzY29wZV9Mb2NhdGlvbnMsIGluZGV4LCAxMDAsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm93ID0gcG9zaXRpb25zW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9ybWF0dGVkIHZhbHVlIGZvciBkaXNwbGF5XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gU3RyaW5nKG9wdGlvbnMuYXJpYUZvcm1hdC50byh1bmVuY29kZWRbaW5kZXhdKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1hcCB0byBzbGlkZXIgcmFuZ2UgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtaW4pLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIG1heCA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhtYXgpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIG5vdyA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhub3cpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWluXCIsIG1pbik7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbWF4XCIsIG1heCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVlbm93XCIsIG5vdyk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiLCB0ZXh0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEdyb3VwKHBpcHMpIHtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgcmFuZ2UuXG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlJhbmdlIHx8IHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5TdGVwcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9TcGVjdHJ1bS54VmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5Db3VudCkge1xuICAgICAgICAgICAgICAgIGlmIChwaXBzLnZhbHVlcyA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlcjogJ3ZhbHVlcycgKD49IDIpIHJlcXVpcmVkIGZvciBtb2RlICdjb3VudCcuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEaXZpZGUgMCAtIDEwMCBpbiAnY291bnQnIHBhcnRzLlxuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IHBpcHMudmFsdWVzIC0gMTtcbiAgICAgICAgICAgICAgICB2YXIgc3ByZWFkID0gMTAwIC8gaW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIExpc3QgdGhlc2UgcGFydHMgYW5kIGhhdmUgdGhlbSBoYW5kbGVkIGFzICdwb3NpdGlvbnMnLlxuICAgICAgICAgICAgICAgIHdoaWxlIChpbnRlcnZhbC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpbnRlcnZhbF0gPSBpbnRlcnZhbCAqIHNwcmVhZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goMTAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwVG9SYW5nZSh2YWx1ZXMsIHBpcHMuc3RlcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlBvc2l0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIE1hcCBhbGwgcGVyY2VudGFnZXMgdG8gb24tcmFuZ2UgdmFsdWVzLlxuICAgICAgICAgICAgICAgIHJldHVybiBtYXBUb1JhbmdlKHBpcHMudmFsdWVzLCBwaXBzLnN0ZXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpcHMubW9kZSA9PT0gZXhwb3J0cy5QaXBzTW9kZS5WYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgbXVzdCBiZSBzdGVwcGVkLCBpdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBwZXJjZW50YWdlIGZpcnN0LlxuICAgICAgICAgICAgICAgIGlmIChwaXBzLnN0ZXBwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBpcHMudmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gcGVyY2VudGFnZSwgYXBwbHkgc3RlcCwgcmV0dXJuIHRvIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyhzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodmFsdWUpKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGNhbiBzaW1wbHkgdXNlIHRoZSB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpcHMudmFsdWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtdOyAvLyBwaXBzLm1vZGUgPSBuZXZlclxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1hcFRvUmFuZ2UodmFsdWVzLCBzdGVwcGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHN0ZXBwZWQgPyBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHZhbHVlKSA6IHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlU3ByZWFkKHBpcHMpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhZmVJbmNyZW1lbnQodmFsdWUsIGluY3JlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIEF2b2lkIGZsb2F0aW5nIHBvaW50IHZhcmlhbmNlIGJ5IGRyb3BwaW5nIHRoZSBzbWFsbGVzdCBkZWNpbWFsIHBsYWNlcy5cbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKCh2YWx1ZSArIGluY3JlbWVudCkudG9GaXhlZCg3KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZ3JvdXAgPSBnZXRHcm91cChwaXBzKTtcbiAgICAgICAgICAgIHZhciBpbmRleGVzID0ge307XG4gICAgICAgICAgICB2YXIgZmlyc3RJblJhbmdlID0gc2NvcGVfU3BlY3RydW0ueFZhbFswXTtcbiAgICAgICAgICAgIHZhciBsYXN0SW5SYW5nZSA9IHNjb3BlX1NwZWN0cnVtLnhWYWxbc2NvcGVfU3BlY3RydW0ueFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBpZ25vcmVGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGlnbm9yZUxhc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBwcmV2UGN0ID0gMDtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGdyb3VwLCBzb3J0IGl0IGFuZCBmaWx0ZXIgYXdheSBhbGwgZHVwbGljYXRlcy5cbiAgICAgICAgICAgIGdyb3VwID0gdW5pcXVlKGdyb3VwLnNsaWNlKCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcmFuZ2Ugc3RhcnRzIHdpdGggdGhlIGZpcnN0IGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoZ3JvdXBbMF0gIT09IGZpcnN0SW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnVuc2hpZnQoZmlyc3RJblJhbmdlKTtcbiAgICAgICAgICAgICAgICBpZ25vcmVGaXJzdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMaWtld2lzZSBmb3IgdGhlIGxhc3Qgb25lLlxuICAgICAgICAgICAgaWYgKGdyb3VwW2dyb3VwLmxlbmd0aCAtIDFdICE9PSBsYXN0SW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnB1c2gobGFzdEluUmFuZ2UpO1xuICAgICAgICAgICAgICAgIGlnbm9yZUxhc3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBhbmQgdGhlIGxvd2VyICsgdXBwZXIgcG9zaXRpb25zLlxuICAgICAgICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIHZhciBxO1xuICAgICAgICAgICAgICAgIHZhciBsb3cgPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgIHZhciBoaWdoID0gZ3JvdXBbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UGN0O1xuICAgICAgICAgICAgICAgIHZhciBwY3REaWZmZXJlbmNlO1xuICAgICAgICAgICAgICAgIHZhciBwY3RQb3M7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGU7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBzO1xuICAgICAgICAgICAgICAgIHZhciByZWFsU3RlcHM7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgIHZhciBpc1N0ZXBzID0gcGlwcy5tb2RlID09PSBleHBvcnRzLlBpcHNNb2RlLlN0ZXBzO1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gdXNpbmcgJ3N0ZXBzJyBtb2RlLCB1c2UgdGhlIHByb3ZpZGVkIHN0ZXBzLlxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UnbGwgc3RlcCBvbiB0byB0aGUgbmV4dCBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICBpZiAoaXNTdGVwcykge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0ueE51bVN0ZXBzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBhICdmdWxsJyBzdGVwLlxuICAgICAgICAgICAgICAgIGlmICghc3RlcCkge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gaGlnaCAtIGxvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgaGlnaCBpcyB1bmRlZmluZWQgd2UgYXJlIGF0IHRoZSBsYXN0IHN1YnJhbmdlLiBNYWtlIHN1cmUgaXQgaXRlcmF0ZXMgb25jZSAoIzEwODgpXG4gICAgICAgICAgICAgICAgaWYgKGhpZ2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBoaWdoID0gbG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgc3RlcCBpc24ndCAwLCB3aGljaCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wICgjNjU0KVxuICAgICAgICAgICAgICAgIHN0ZXAgPSBNYXRoLm1heChzdGVwLCAwLjAwMDAwMDEpO1xuICAgICAgICAgICAgICAgIC8vIEZpbmQgYWxsIHN0ZXBzIGluIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsb3c7IGkgPD0gaGlnaDsgaSA9IHNhZmVJbmNyZW1lbnQoaSwgc3RlcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBwZXJjZW50YWdlIHZhbHVlIGZvciB0aGUgY3VycmVudCBzdGVwLFxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHNpemUgZm9yIHRoZSBzdWJyYW5nZS5cbiAgICAgICAgICAgICAgICAgICAgbmV3UGN0ID0gc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyhpKTtcbiAgICAgICAgICAgICAgICAgICAgcGN0RGlmZmVyZW5jZSA9IG5ld1BjdCAtIHByZXZQY3Q7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzID0gcGN0RGlmZmVyZW5jZSAvIChwaXBzLmRlbnNpdHkgfHwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxTdGVwcyA9IE1hdGgucm91bmQoc3RlcHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHJhdGlvIHJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiBwZXJjZW50YWdlLXNwYWNlIGEgcG9pbnQgaW5kaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgYSBkZW5zaXR5IDEgdGhlIHBvaW50cy9wZXJjZW50YWdlID0gMS4gRm9yIGRlbnNpdHkgMiwgdGhhdCBwZXJjZW50YWdlIG5lZWRzIHRvIGJlIHJlLWRpdmlkZWQuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJvdW5kIHRoZSBwZXJjZW50YWdlIG9mZnNldCB0byBhbiBldmVuIG51bWJlciwgdGhlbiBkaXZpZGUgYnkgdHdvXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIHNwcmVhZCB0aGUgb2Zmc2V0IG9uIGJvdGggc2lkZXMgb2YgdGhlIHJhbmdlLlxuICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZSA9IHBjdERpZmZlcmVuY2UgLyByZWFsU3RlcHM7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpdmlkZSBhbGwgcG9pbnRzIGV2ZW5seSwgYWRkaW5nIHRoZSBjb3JyZWN0IG51bWJlciB0byB0aGlzIHN1YnJhbmdlLlxuICAgICAgICAgICAgICAgICAgICAvLyBSdW4gdXAgdG8gPD0gc28gdGhhdCAxMDAlIGdldHMgYSBwb2ludCwgZXZlbnQgaWYgaWdub3JlTGFzdCBpcyBzZXQuXG4gICAgICAgICAgICAgICAgICAgIGZvciAocSA9IDE7IHEgPD0gcmVhbFN0ZXBzOyBxICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByYXRpbyBiZXR3ZWVuIHRoZSByb3VuZGVkIHZhbHVlIGFuZCB0aGUgYWN0dWFsIHNpemUgbWlnaHQgYmUgfjElIG9mZi5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvcnJlY3QgdGhlIHBlcmNlbnRhZ2Ugb2Zmc2V0IGJ5IHRoZSBudW1iZXIgb2YgcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXIgc3VicmFuZ2UuIGRlbnNpdHkgPSAxIHdpbGwgcmVzdWx0IGluIDEwMCBwb2ludHMgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmdWxsIHJhbmdlLCAyIGZvciA1MCwgNCBmb3IgMjUsIGV0Yy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBjdFBvcyA9IHByZXZQY3QgKyBxICogc3RlcFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleGVzW3BjdFBvcy50b0ZpeGVkKDUpXSA9IFtzY29wZV9TcGVjdHJ1bS5mcm9tU3RlcHBpbmcocGN0UG9zKSwgMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBwb2ludCB0eXBlLlxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gZ3JvdXAuaW5kZXhPZihpKSA+IC0xID8gZXhwb3J0cy5QaXBzVHlwZS5MYXJnZVZhbHVlIDogaXNTdGVwcyA/IGV4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZSA6IGV4cG9ydHMuUGlwc1R5cGUuTm9WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5mb3JjZSB0aGUgJ2lnbm9yZUZpcnN0JyBvcHRpb24gYnkgb3ZlcndyaXRpbmcgdGhlIHR5cGUgZm9yIDAuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5kZXggJiYgaWdub3JlRmlyc3QgJiYgaSAhPT0gaGlnaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaSA9PT0gaGlnaCAmJiBpZ25vcmVMYXN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFyayB0aGUgJ3R5cGUnIG9mIHRoaXMgcG9pbnQuIDAgPSBwbGFpbiwgMSA9IHJlYWwgdmFsdWUsIDIgPSBzdGVwIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlc1tuZXdQY3QudG9GaXhlZCg1KV0gPSBbaSwgdHlwZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBwZXJjZW50YWdlIGNvdW50LlxuICAgICAgICAgICAgICAgICAgICBwcmV2UGN0ID0gbmV3UGN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlckZ1bmMsIGZvcm1hdHRlcikge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGVfRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZVNpemVDbGFzc2VzID0gKF9hID0ge30sXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5Ob25lXSA9IFwiXCIsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZU5vcm1hbCxcbiAgICAgICAgICAgICAgICBfYVtleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlTGFyZ2UsXG4gICAgICAgICAgICAgICAgX2FbZXhwb3J0cy5QaXBzVHlwZS5TbWFsbFZhbHVlXSA9IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZVN1YixcbiAgICAgICAgICAgICAgICBfYSk7XG4gICAgICAgICAgICB2YXIgbWFya2VyU2l6ZUNsYXNzZXMgPSAoX2IgPSB7fSxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLk5vbmVdID0gXCJcIixcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLk5vVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlck5vcm1hbCxcbiAgICAgICAgICAgICAgICBfYltleHBvcnRzLlBpcHNUeXBlLkxhcmdlVmFsdWVdID0gb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlckxhcmdlLFxuICAgICAgICAgICAgICAgIF9iW2V4cG9ydHMuUGlwc1R5cGUuU21hbGxWYWx1ZV0gPSBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyU3ViLFxuICAgICAgICAgICAgICAgIF9iKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZU9yaWVudGF0aW9uQ2xhc3NlcyA9IFtvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVIb3Jpem9udGFsLCBvcHRpb25zLmNzc0NsYXNzZXMudmFsdWVWZXJ0aWNhbF07XG4gICAgICAgICAgICB2YXIgbWFya2VyT3JpZW50YXRpb25DbGFzc2VzID0gW29wdGlvbnMuY3NzQ2xhc3Nlcy5tYXJrZXJIb3Jpem9udGFsLCBvcHRpb25zLmNzc0NsYXNzZXMubWFya2VyVmVydGljYWxdO1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5jc3NDbGFzc2VzLnBpcHMpO1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgb3B0aW9ucy5vcnQgPT09IDAgPyBvcHRpb25zLmNzc0NsYXNzZXMucGlwc0hvcml6b250YWwgOiBvcHRpb25zLmNzc0NsYXNzZXMucGlwc1ZlcnRpY2FsKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldENsYXNzZXModHlwZSwgc291cmNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBzb3VyY2UgPT09IG9wdGlvbnMuY3NzQ2xhc3Nlcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZW50YXRpb25DbGFzc2VzID0gYSA/IHZhbHVlT3JpZW50YXRpb25DbGFzc2VzIDogbWFya2VyT3JpZW50YXRpb25DbGFzc2VzO1xuICAgICAgICAgICAgICAgIHZhciBzaXplQ2xhc3NlcyA9IGEgPyB2YWx1ZVNpemVDbGFzc2VzIDogbWFya2VyU2l6ZUNsYXNzZXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSArIFwiIFwiICsgb3JpZW50YXRpb25DbGFzc2VzW29wdGlvbnMub3J0XSArIFwiIFwiICsgc2l6ZUNsYXNzZXNbdHlwZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRTcHJlYWQob2Zmc2V0LCB2YWx1ZSwgdHlwZSkge1xuICAgICAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBmaWx0ZXIgZnVuY3Rpb24sIGlmIGl0IGlzIHNldC5cbiAgICAgICAgICAgICAgICB0eXBlID0gZmlsdGVyRnVuYyA/IGZpbHRlckZ1bmModmFsdWUsIHR5cGUpIDogdHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5QaXBzVHlwZS5Ob25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIGEgbWFya2VyIGZvciBldmVyeSBwb2ludFxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gYWRkTm9kZVRvKGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLm1hcmtlcik7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtvcHRpb25zLnN0eWxlXSA9IG9mZnNldCArIFwiJVwiO1xuICAgICAgICAgICAgICAgIC8vIFZhbHVlcyBhcmUgb25seSBhcHBlbmRlZCBmb3IgcG9pbnRzIG1hcmtlZCAnMScgb3IgJzInLlxuICAgICAgICAgICAgICAgIGlmICh0eXBlID4gZXhwb3J0cy5QaXBzVHlwZS5Ob1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBhZGROb2RlVG8oZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGdldENsYXNzZXModHlwZSwgb3B0aW9ucy5jc3NDbGFzc2VzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW29wdGlvbnMuc3R5bGVdID0gb2Zmc2V0ICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gU3RyaW5nKGZvcm1hdHRlci50byh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFwcGVuZCBhbGwgcG9pbnRzLlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3ByZWFkKS5mb3JFYWNoKGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBhZGRTcHJlYWQob2Zmc2V0LCBzcHJlYWRbb2Zmc2V0XVswXSwgc3ByZWFkW29mZnNldF1bMV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVQaXBzKCkge1xuICAgICAgICAgICAgaWYgKHNjb3BlX1BpcHMpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50KHNjb3BlX1BpcHMpO1xuICAgICAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBpcHMocGlwcykge1xuICAgICAgICAgICAgLy8gRml4ICM2NjlcbiAgICAgICAgICAgIHJlbW92ZVBpcHMoKTtcbiAgICAgICAgICAgIHZhciBzcHJlYWQgPSBnZW5lcmF0ZVNwcmVhZChwaXBzKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBwaXBzLmZpbHRlcjtcbiAgICAgICAgICAgIHZhciBmb3JtYXQgPSBwaXBzLmZvcm1hdCB8fCB7XG4gICAgICAgICAgICAgICAgdG86IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKE1hdGgucm91bmQodmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNjb3BlX1BpcHMgPSBzY29wZV9UYXJnZXQuYXBwZW5kQ2hpbGQoYWRkTWFya2luZyhzcHJlYWQsIGZpbHRlciwgZm9ybWF0KSk7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfUGlwcztcbiAgICAgICAgfVxuICAgICAgICAvLyBTaG9ydGhhbmQgZm9yIGJhc2UgZGltZW5zaW9ucy5cbiAgICAgICAgZnVuY3Rpb24gYmFzZVNpemUoKSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNjb3BlX0Jhc2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB2YXIgYWx0ID0gKFwib2Zmc2V0XCIgKyBbXCJXaWR0aFwiLCBcIkhlaWdodFwiXVtvcHRpb25zLm9ydF0pO1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMub3J0ID09PSAwID8gcmVjdC53aWR0aCB8fCBzY29wZV9CYXNlW2FsdF0gOiByZWN0LmhlaWdodCB8fCBzY29wZV9CYXNlW2FsdF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlciBmb3IgYXR0YWNoaW5nIGV2ZW50cyB0cm91Z2ggYSBwcm94eS5cbiAgICAgICAgZnVuY3Rpb24gYXR0YWNoRXZlbnQoZXZlbnRzLCBlbGVtZW50LCBjYWxsYmFjaywgZGF0YSkge1xuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byAnZmlsdGVyJyBldmVudHMgdG8gdGhlIHNsaWRlci5cbiAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYSBub2RlLCBub3QgYSBub2RlTGlzdFxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gZml4RXZlbnQoZXZlbnQsIGRhdGEucGFnZU9mZnNldCwgZGF0YS50YXJnZXQgfHwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgLy8gZml4RXZlbnQgcmV0dXJucyBmYWxzZSBpZiB0aGlzIGV2ZW50IGhhcyBhIGRpZmZlcmVudCB0YXJnZXRcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGhhbmRsaW5nIChtdWx0aS0pIHRvdWNoIGV2ZW50cztcbiAgICAgICAgICAgICAgICBpZiAoIWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb05vdFJlamVjdCBpcyBwYXNzZWQgYnkgYWxsIGVuZCBldmVudHMgdG8gbWFrZSBzdXJlIHJlbGVhc2VkIHRvdWNoZXNcbiAgICAgICAgICAgICAgICAvLyBhcmUgbm90IHJlamVjdGVkLCBsZWF2aW5nIHRoZSBzbGlkZXIgXCJzdHVja1wiIHRvIHRoZSBjdXJzb3I7XG4gICAgICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSAmJiAhZGF0YS5kb05vdFJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3AgaWYgYW4gYWN0aXZlICd0YXAnIHRyYW5zaXRpb24gaXMgdGFraW5nIHBsYWNlLlxuICAgICAgICAgICAgICAgIGlmIChoYXNDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXApICYmICFkYXRhLmRvTm90UmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIHJpZ2h0IG9yIG1pZGRsZSBjbGlja3Mgb24gc3RhcnQgIzQ1NFxuICAgICAgICAgICAgICAgIGlmIChldmVudHMgPT09IGFjdGlvbnMuc3RhcnQgJiYgZS5idXR0b25zICE9PSB1bmRlZmluZWQgJiYgZS5idXR0b25zID4gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSByaWdodCBvciBtaWRkbGUgY2xpY2tzIG9uIHN0YXJ0ICM0NTRcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5ob3ZlciAmJiBlLmJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAnc3VwcG9ydHNQYXNzaXZlJyBpcyBvbmx5IHRydWUgaWYgYSBicm93c2VyIGFsc28gc3VwcG9ydHMgdG91Y2gtYWN0aW9uOiBub25lIGluIENTUy5cbiAgICAgICAgICAgICAgICAvLyBpT1Mgc2FmYXJpIGRvZXMgbm90LCBzbyBpdCBkb2Vzbid0IGdldCB0byBiZW5lZml0IGZyb20gcGFzc2l2ZSBzY3JvbGxpbmcuIGlPUyBkb2VzIHN1cHBvcnRcbiAgICAgICAgICAgICAgICAvLyB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbiwgYnV0IHRoYXQgYWxsb3dzIHBhbm5pbmcsIHdoaWNoIGJyZWFrc1xuICAgICAgICAgICAgICAgIC8vIHNsaWRlcnMgYWZ0ZXIgem9vbWluZy9vbiBub24tcmVzcG9uc2l2ZSBwYWdlcy5cbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzMxMTJcbiAgICAgICAgICAgICAgICBpZiAoIXN1cHBvcnRzUGFzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUuY2FsY1BvaW50ID0gZS5wb2ludHNbb3B0aW9ucy5vcnRdO1xuICAgICAgICAgICAgICAgIC8vIENhbGwgdGhlIGV2ZW50IGhhbmRsZXIgd2l0aCB0aGUgZXZlbnQgWyBhbmQgYWRkaXRpb25hbCBkYXRhIF0uXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBtZXRob2RzID0gW107XG4gICAgICAgICAgICAvLyBCaW5kIGEgY2xvc3VyZSBvbiB0aGUgdGFyZ2V0IGZvciBldmVyeSBldmVudCB0eXBlLlxuICAgICAgICAgICAgZXZlbnRzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBtZXRob2QsIHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2UpO1xuICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaChbZXZlbnROYW1lLCBtZXRob2RdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJvdmlkZSBhIGNsZWFuIGV2ZW50IHdpdGggc3RhbmRhcmRpemVkIG9mZnNldCB2YWx1ZXMuXG4gICAgICAgIGZ1bmN0aW9uIGZpeEV2ZW50KGUsIHBhZ2VPZmZzZXQsIGV2ZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBGaWx0ZXIgdGhlIGV2ZW50IHRvIHJlZ2lzdGVyIHRoZSB0eXBlLCB3aGljaCBjYW4gYmVcbiAgICAgICAgICAgIC8vIHRvdWNoLCBtb3VzZSBvciBwb2ludGVyLiBPZmZzZXQgY2hhbmdlcyBuZWVkIHRvIGJlXG4gICAgICAgICAgICAvLyBtYWRlIG9uIGFuIGV2ZW50IHNwZWNpZmljIGJhc2lzLlxuICAgICAgICAgICAgdmFyIHRvdWNoID0gZS50eXBlLmluZGV4T2YoXCJ0b3VjaFwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciBtb3VzZSA9IGUudHlwZS5pbmRleE9mKFwibW91c2VcIikgPT09IDA7XG4gICAgICAgICAgICB2YXIgcG9pbnRlciA9IGUudHlwZS5pbmRleE9mKFwicG9pbnRlclwiKSA9PT0gMDtcbiAgICAgICAgICAgIHZhciB4ID0gMDtcbiAgICAgICAgICAgIHZhciB5ID0gMDtcbiAgICAgICAgICAgIC8vIElFMTAgaW1wbGVtZW50ZWQgcG9pbnRlciBldmVudHMgd2l0aCBhIHByZWZpeDtcbiAgICAgICAgICAgIGlmIChlLnR5cGUuaW5kZXhPZihcIk1TUG9pbnRlclwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBvaW50ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRXJyb25lb3VzIGV2ZW50cyBzZWVtIHRvIGJlIHBhc3NlZCBpbiBvY2Nhc2lvbmFsbHkgb24gaU9TL2lQYWRPUyBhZnRlciB1c2VyIGZpbmlzaGVzIGludGVyYWN0aW5nIHdpdGhcbiAgICAgICAgICAgIC8vIHRoZSBzbGlkZXIuIFRoZXkgYXBwZWFyIHRvIGJlIG9mIHR5cGUgTW91c2VFdmVudCwgeWV0IHRoZXkgZG9uJ3QgaGF2ZSB1c3VhbCBwcm9wZXJ0aWVzIHNldC4gSWdub3JlXG4gICAgICAgICAgICAvLyBldmVudHMgdGhhdCBoYXZlIG5vIHRvdWNoZXMgb3IgYnV0dG9ucyBhc3NvY2lhdGVkIHdpdGggdGhlbS4gKCMxMDU3LCAjMTA3OSwgIzEwOTUpXG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlZG93blwiICYmICFlLmJ1dHRvbnMgJiYgIWUudG91Y2hlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBvbmx5IHRoaW5nIG9uZSBoYW5kbGUgc2hvdWxkIGJlIGNvbmNlcm5lZCBhYm91dCBpcyB0aGUgdG91Y2hlcyB0aGF0IG9yaWdpbmF0ZWQgb24gdG9wIG9mIGl0LlxuICAgICAgICAgICAgaWYgKHRvdWNoKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJucyB0cnVlIGlmIGEgdG91Y2ggb3JpZ2luYXRlZCBvbiB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgICAgIHZhciBpc1RvdWNoT25UYXJnZXQgPSBmdW5jdGlvbiAoY2hlY2tUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gY2hlY2tUb3VjaC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodGFyZ2V0ID09PSBldmVudFRhcmdldCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuY29udGFpbnModGFyZ2V0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGUuY29tcG9zZWQgJiYgZS5jb21wb3NlZFBhdGgoKS5zaGlmdCgpID09PSBldmVudFRhcmdldCkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGNhc2Ugb2YgdG91Y2hzdGFydCBldmVudHMsIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoZXJlIGlzIHN0aWxsIG5vIG1vcmUgdGhhbiBvbmVcbiAgICAgICAgICAgICAgICAvLyB0b3VjaCBvbiB0aGUgdGFyZ2V0IHNvIHdlIGxvb2sgYW1vbmdzdCBhbGwgdG91Y2hlcy5cbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0VG91Y2hlcyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlLnRvdWNoZXMsIGlzVG91Y2hPblRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBzdXBwb3J0IG1vcmUgdGhhbiBvbmUgdG91Y2ggcGVyIGhhbmRsZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggPSB0YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB5ID0gdGFyZ2V0VG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHRoZSBvdGhlciBjYXNlcywgZmluZCBvbiBjaGFuZ2VkVG91Y2hlcyBpcyBlbm91Z2guXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRUb3VjaCA9IEFycmF5LnByb3RvdHlwZS5maW5kLmNhbGwoZS5jaGFuZ2VkVG91Y2hlcywgaXNUb3VjaE9uVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FuY2VsIGlmIHRoZSB0YXJnZXQgdG91Y2ggaGFzIG5vdCBtb3ZlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHggPSB0YXJnZXRUb3VjaC5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRhcmdldFRvdWNoLnBhZ2VZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZ2VPZmZzZXQgPSBwYWdlT2Zmc2V0IHx8IGdldFBhZ2VPZmZzZXQoc2NvcGVfRG9jdW1lbnQpO1xuICAgICAgICAgICAgaWYgKG1vdXNlIHx8IHBvaW50ZXIpIHtcbiAgICAgICAgICAgICAgICB4ID0gZS5jbGllbnRYICsgcGFnZU9mZnNldC54O1xuICAgICAgICAgICAgICAgIHkgPSBlLmNsaWVudFkgKyBwYWdlT2Zmc2V0Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnBhZ2VPZmZzZXQgPSBwYWdlT2Zmc2V0O1xuICAgICAgICAgICAgZS5wb2ludHMgPSBbeCwgeV07XG4gICAgICAgICAgICBlLmN1cnNvciA9IG1vdXNlIHx8IHBvaW50ZXI7IC8vIEZpeCAjNDM1XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUcmFuc2xhdGUgYSBjb29yZGluYXRlIGluIHRoZSBkb2N1bWVudCB0byBhIHBlcmNlbnRhZ2Ugb24gdGhlIHNsaWRlclxuICAgICAgICBmdW5jdGlvbiBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoY2FsY1BvaW50KSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBjYWxjUG9pbnQgLSBvZmZzZXQoc2NvcGVfQmFzZSwgb3B0aW9ucy5vcnQpO1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gKGxvY2F0aW9uICogMTAwKSAvIGJhc2VTaXplKCk7XG4gICAgICAgICAgICAvLyBDbGFtcCBwcm9wb3NhbCBiZXR3ZWVuIDAlIGFuZCAxMDAlXG4gICAgICAgICAgICAvLyBPdXQtb2YtYm91bmQgY29vcmRpbmF0ZXMgbWF5IG9jY3VyIHdoZW4gLm5vVWktYmFzZSBwc2V1ZG8tZWxlbWVudHNcbiAgICAgICAgICAgIC8vIGFyZSB1c2VkIChlLmcuIGNvbnRhaW5lZCBoYW5kbGVzIGZlYXR1cmUpXG4gICAgICAgICAgICBwcm9wb3NhbCA9IGxpbWl0KHByb3Bvc2FsKTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIHByb3Bvc2FsIDogcHJvcG9zYWw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmluZCBoYW5kbGUgY2xvc2VzdCB0byBhIGNlcnRhaW4gcGVyY2VudGFnZSBvbiB0aGUgc2xpZGVyXG4gICAgICAgIGZ1bmN0aW9uIGdldENsb3Nlc3RIYW5kbGUoY2xpY2tlZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc21hbGxlc3REaWZmZXJlbmNlID0gMTAwO1xuICAgICAgICAgICAgdmFyIGhhbmRsZU51bWJlciA9IGZhbHNlO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRGlzYWJsZWQgaGFuZGxlcyBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgIGlmIChpc0hhbmRsZURpc2FibGVkKGluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVQb3NpdGlvbiA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgdmFyIGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA9IE1hdGguYWJzKGhhbmRsZVBvc2l0aW9uIC0gY2xpY2tlZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsIHN0YXRlXG4gICAgICAgICAgICAgICAgdmFyIGNsaWNrQXRFZGdlID0gZGlmZmVyZW5jZVdpdGhUaGlzSGFuZGxlID09PSAxMDAgJiYgc21hbGxlc3REaWZmZXJlbmNlID09PSAxMDA7XG4gICAgICAgICAgICAgICAgLy8gRGlmZmVyZW5jZSB3aXRoIHRoaXMgaGFuZGxlIGlzIHNtYWxsZXIgdGhhbiB0aGUgcHJldmlvdXNseSBjaGVja2VkIGhhbmRsZVxuICAgICAgICAgICAgICAgIHZhciBpc0Nsb3NlciA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA8IHNtYWxsZXN0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICB2YXIgaXNDbG9zZXJBZnRlciA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZSA8PSBzbWFsbGVzdERpZmZlcmVuY2UgJiYgY2xpY2tlZFBvc2l0aW9uID4gaGFuZGxlUG9zaXRpb247XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2xvc2VyIHx8IGlzQ2xvc2VyQWZ0ZXIgfHwgY2xpY2tBdEVkZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHNtYWxsZXN0RGlmZmVyZW5jZSA9IGRpZmZlcmVuY2VXaXRoVGhpc0hhbmRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyZSAnZW5kJyB3aGVuIGEgbW91c2Ugb3IgcGVuIGxlYXZlcyB0aGUgZG9jdW1lbnQuXG4gICAgICAgIGZ1bmN0aW9uIGRvY3VtZW50TGVhdmUoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlb3V0XCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiSFRNTFwiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQucmVsYXRlZFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgbW92ZW1lbnQgb24gZG9jdW1lbnQgZm9yIGhhbmRsZSBhbmQgcmFuZ2UgZHJhZy5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRNb3ZlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAvLyBGaXggIzQ5OFxuICAgICAgICAgICAgLy8gQ2hlY2sgdmFsdWUgb2YgLmJ1dHRvbnMgaW4gJ3N0YXJ0JyB0byB3b3JrIGFyb3VuZCBhIGJ1ZyBpbiBJRTEwIG1vYmlsZSAoZGF0YS5idXR0b25zUHJvcGVydHkpLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy85MjcwMDUvbW9iaWxlLWllMTAtd2luZG93cy1waG9uZS1idXR0b25zLXByb3BlcnR5LW9mLXBvaW50ZXJtb3ZlLWV2ZW50LWFsd2F5cy16ZXJvXG4gICAgICAgICAgICAvLyBJRTkgaGFzIC5idXR0b25zIGFuZCAud2hpY2ggemVybyBvbiBtb3VzZW1vdmUuXG4gICAgICAgICAgICAvLyBGaXJlZm94IGJyZWFrcyB0aGUgc3BlYyBNRE4gZGVmaW5lcy5cbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSA5XCIpID09PSAtMSAmJiBldmVudC5idXR0b25zID09PSAwICYmIGRhdGEuYnV0dG9uc1Byb3BlcnR5ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50RW5kKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIGFyZSBtb3ZpbmcgdXAgb3IgZG93blxuICAgICAgICAgICAgdmFyIG1vdmVtZW50ID0gKG9wdGlvbnMuZGlyID8gLTEgOiAxKSAqIChldmVudC5jYWxjUG9pbnQgLSBkYXRhLnN0YXJ0Q2FsY1BvaW50KTtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIG1vdmVtZW50IGludG8gYSBwZXJjZW50YWdlIG9mIHRoZSBzbGlkZXIgd2lkdGgvaGVpZ2h0XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSAobW92ZW1lbnQgKiAxMDApIC8gZGF0YS5iYXNlU2l6ZTtcbiAgICAgICAgICAgIG1vdmVIYW5kbGVzKG1vdmVtZW50ID4gMCwgcHJvcG9zYWwsIGRhdGEubG9jYXRpb25zLCBkYXRhLmhhbmRsZU51bWJlcnMsIGRhdGEuY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW5iaW5kIG1vdmUgZXZlbnRzIG9uIGRvY3VtZW50LCBjYWxsIGNhbGxiYWNrcy5cbiAgICAgICAgZnVuY3Rpb24gZXZlbnRFbmQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIFRoZSBoYW5kbGUgaXMgbm8gbG9uZ2VyIGFjdGl2ZSwgc28gcmVtb3ZlIHRoZSBjbGFzcy5cbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGRhdGEuaGFuZGxlLCBvcHRpb25zLmNzc0NsYXNzZXMuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVuYmluZCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cywgd2hpY2ggYXJlIGFkZGVkIG9uICdzdGFydCcuXG4gICAgICAgICAgICBkYXRhLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfRG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoY1swXSwgY1sxXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHJhZ2dpbmcgY2xhc3MuXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XG4gICAgICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGN1cnNvciBzdHlsZXMgYW5kIHRleHQtc2VsZWN0aW9uIGV2ZW50cyBib3VuZCB0byB0aGUgYm9keS5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfQm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgcHJldmVudERlZmF1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmV2ZW50cy5zbW9vdGhTdGVwcykge1xuICAgICAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZGF0YS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJlbmRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJpbmQgbW92ZSBldmVudHMgb24gZG9jdW1lbnQuXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50U3RhcnQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBldmVudCBpZiBhbnkgaGFuZGxlIGlzIGRpc2FibGVkXG4gICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVOdW1iZXJzLnNvbWUoaXNIYW5kbGVEaXNhYmxlZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFuZGxlO1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlTnVtYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlT3JpZ2luID0gc2NvcGVfSGFuZGxlc1tkYXRhLmhhbmRsZU51bWJlcnNbMF1dO1xuICAgICAgICAgICAgICAgIGhhbmRsZSA9IGhhbmRsZU9yaWdpbi5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICBzY29wZV9BY3RpdmVIYW5kbGVzQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSBoYW5kbGUgYXMgJ2FjdGl2ZScgc28gaXQgY2FuIGJlIHN0eWxlZC5cbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhoYW5kbGUsIG9wdGlvbnMuY3NzQ2xhc3Nlcy5hY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQSBkcmFnIHNob3VsZCBuZXZlciBwcm9wYWdhdGUgdXAgdG8gdGhlICd0YXAnIGV2ZW50LlxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvLyBSZWNvcmQgdGhlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgbW92ZSBhbmQgZW5kIGV2ZW50cy5cbiAgICAgICAgICAgIHZhciBtb3ZlRXZlbnQgPSBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRNb3ZlLCB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGV2ZW50IHRhcmdldCBoYXMgY2hhbmdlZCBzbyB3ZSBuZWVkIHRvIHByb3BhZ2F0ZSB0aGUgb3JpZ2luYWwgb25lIHNvIHRoYXQgd2Uga2VlcFxuICAgICAgICAgICAgICAgIC8vIHJlbHlpbmcgb24gaXQgdG8gZXh0cmFjdCB0YXJnZXQgdG91Y2hlcy5cbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBjb25uZWN0OiBkYXRhLmNvbm5lY3QsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgc3RhcnRDYWxjUG9pbnQ6IGV2ZW50LmNhbGNQb2ludCxcbiAgICAgICAgICAgICAgICBiYXNlU2l6ZTogYmFzZVNpemUoKSxcbiAgICAgICAgICAgICAgICBwYWdlT2Zmc2V0OiBldmVudC5wYWdlT2Zmc2V0LFxuICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IGRhdGEuaGFuZGxlTnVtYmVycyxcbiAgICAgICAgICAgICAgICBidXR0b25zUHJvcGVydHk6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zOiBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGVuZEV2ZW50ID0gYXR0YWNoRXZlbnQoYWN0aW9ucy5lbmQsIHNjb3BlX0RvY3VtZW50RWxlbWVudCwgZXZlbnRFbmQsIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgICAgICAgICBkb05vdFJlamVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBkYXRhLmhhbmRsZU51bWJlcnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBvdXRFdmVudCA9IGF0dGFjaEV2ZW50KFwibW91c2VvdXRcIiwgc2NvcGVfRG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudExlYXZlLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsXG4gICAgICAgICAgICAgICAgZG9Ob3RSZWplY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyczogZGF0YS5oYW5kbGVOdW1iZXJzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBXZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBwdXNoZWQgdGhlIGxpc3RlbmVycyBpbiB0aGUgbGlzdGVuZXIgbGlzdCByYXRoZXIgdGhhbiBjcmVhdGluZ1xuICAgICAgICAgICAgLy8gYSBuZXcgb25lIGFzIGl0IGhhcyBhbHJlYWR5IGJlZW4gcGFzc2VkIHRvIHRoZSBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoLmFwcGx5KGxpc3RlbmVycywgbW92ZUV2ZW50LmNvbmNhdChlbmRFdmVudCwgb3V0RXZlbnQpKTtcbiAgICAgICAgICAgIC8vIFRleHQgc2VsZWN0aW9uIGlzbid0IGFuIGlzc3VlIG9uIHRvdWNoIGRldmljZXMsXG4gICAgICAgICAgICAvLyBzbyBhZGRpbmcgY3Vyc29yIHN0eWxlcyBjYW4gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgIGlmIChldmVudC5jdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSAnSScgY3Vyc29yIGFuZCBleHRlbmQgdGhlIHJhbmdlLWRyYWcgY3Vyc29yLlxuICAgICAgICAgICAgICAgIHNjb3BlX0JvZHkuc3R5bGUuY3Vyc29yID0gZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQpLmN1cnNvcjtcbiAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSB0YXJnZXQgd2l0aCBhIGRyYWdnaW5nIHN0YXRlLlxuICAgICAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3Moc2NvcGVfVGFyZ2V0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGV4dCBzZWxlY3Rpb24gd2hlbiBkcmFnZ2luZyB0aGUgaGFuZGxlcy5cbiAgICAgICAgICAgICAgICAvLyBJbiBub1VpU2xpZGVyIDw9IDkuMi4wLCB0aGlzIHdhcyBoYW5kbGVkIGJ5IGNhbGxpbmcgcHJldmVudERlZmF1bHQgb24gbW91c2UvdG91Y2ggc3RhcnQvbW92ZSxcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBpcyBzY3JvbGwgYmxvY2tpbmcuIFRoZSBzZWxlY3RzdGFydCBldmVudCBpcyBzdXBwb3J0ZWQgYnkgRmlyZUZveCBzdGFydGluZyBmcm9tIHZlcnNpb24gNTIsXG4gICAgICAgICAgICAgICAgLy8gbWVhbmluZyB0aGUgb25seSBob2xkb3V0IGlzIGlPUyBTYWZhcmkuIFRoaXMgZG9lc24ndCBtYXR0ZXI6IHRleHQgc2VsZWN0aW9uIGlzbid0IHRyaWdnZXJlZCB0aGVyZS5cbiAgICAgICAgICAgICAgICAvLyBUaGUgJ2N1cnNvcicgZmxhZyBpcyBmYWxzZS5cbiAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHA6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXNlbGVjdHN0YXJ0XG4gICAgICAgICAgICAgICAgc2NvcGVfQm9keS5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzdGFydFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZSBjbG9zZXN0IGhhbmRsZSB0byB0YXBwZWQgbG9jYXRpb24uXG4gICAgICAgIGZ1bmN0aW9uIGV2ZW50VGFwKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBUaGUgdGFwIGV2ZW50IHNob3VsZG4ndCBwcm9wYWdhdGUgdXBcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyIHByb3Bvc2FsID0gY2FsY1BvaW50VG9QZXJjZW50YWdlKGV2ZW50LmNhbGNQb2ludCk7XG4gICAgICAgICAgICB2YXIgaGFuZGxlTnVtYmVyID0gZ2V0Q2xvc2VzdEhhbmRsZShwcm9wb3NhbCk7XG4gICAgICAgICAgICAvLyBUYWNrbGUgdGhlIGNhc2UgdGhhdCBhbGwgaGFuZGxlcyBhcmUgJ2Rpc2FibGVkJy5cbiAgICAgICAgICAgIGlmIChoYW5kbGVOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmxhZyB0aGUgc2xpZGVyIGFzIGl0IGlzIG5vdyBpbiBhIHRyYW5zaXRpb25hbCBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFRyYW5zaXRpb24gdGFrZXMgYSBjb25maWd1cmFibGUgYW1vdW50IG9mIG1zIChkZWZhdWx0IDMwMCkuIFJlLWVuYWJsZSB0aGUgc2xpZGVyIGFmdGVyIHRoYXQuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc0ZvcihzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlcy50YXAsIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcHJvcG9zYWwsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgc2V0WmluZGV4KCk7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzbGlkZVwiLCBoYW5kbGVOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGhhbmRsZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZXZlbnRzLnNuYXApIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJjaGFuZ2VcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50U3RhcnQoZXZlbnQsIHsgaGFuZGxlTnVtYmVyczogW2hhbmRsZU51bWJlcl0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyZXMgYSAnaG92ZXInIGV2ZW50IGZvciBhIGhvdmVyZWQgbW91c2UvcGVuIHBvc2l0aW9uLlxuICAgICAgICBmdW5jdGlvbiBldmVudEhvdmVyKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcHJvcG9zYWwgPSBjYWxjUG9pbnRUb1BlcmNlbnRhZ2UoZXZlbnQuY2FsY1BvaW50KTtcbiAgICAgICAgICAgIHZhciB0byA9IHNjb3BlX1NwZWN0cnVtLmdldFN0ZXAocHJvcG9zYWwpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc2NvcGVfU3BlY3RydW0uZnJvbVN0ZXBwaW5nKHRvKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNjb3BlX0V2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJob3ZlclwiID09PSB0YXJnZXRFdmVudC5zcGxpdChcIi5cIilbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfRXZlbnRzW3RhcmdldEV2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChzY29wZV9TZWxmLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZXMga2V5ZG93biBvbiBmb2N1c2VkIGhhbmRsZXNcbiAgICAgICAgLy8gRG9uJ3QgbW92ZSB0aGUgZG9jdW1lbnQgd2hlbiBwcmVzc2luZyBhcnJvdyBrZXlzIG9uIGZvY3VzZWQgaGFuZGxlc1xuICAgICAgICBmdW5jdGlvbiBldmVudEtleWRvd24oZXZlbnQsIGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKGlzU2xpZGVyRGlzYWJsZWQoKSB8fCBpc0hhbmRsZURpc2FibGVkKGhhbmRsZU51bWJlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaG9yaXpvbnRhbEtleXMgPSBbXCJMZWZ0XCIsIFwiUmlnaHRcIl07XG4gICAgICAgICAgICB2YXIgdmVydGljYWxLZXlzID0gW1wiRG93blwiLCBcIlVwXCJdO1xuICAgICAgICAgICAgdmFyIGxhcmdlU3RlcEtleXMgPSBbXCJQYWdlRG93blwiLCBcIlBhZ2VVcFwiXTtcbiAgICAgICAgICAgIHZhciBlZGdlS2V5cyA9IFtcIkhvbWVcIiwgXCJFbmRcIl07XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kaXIgJiYgIW9wdGlvbnMub3J0KSB7XG4gICAgICAgICAgICAgICAgLy8gT24gYW4gcmlnaHQtdG8tbGVmdCBzbGlkZXIsIHRoZSBsZWZ0IGFuZCByaWdodCBrZXlzIGFjdCBpbnZlcnRlZFxuICAgICAgICAgICAgICAgIGhvcml6b250YWxLZXlzLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMub3J0ICYmICFvcHRpb25zLmRpcikge1xuICAgICAgICAgICAgICAgIC8vIE9uIGEgdG9wLXRvLWJvdHRvbSBzbGlkZXIsIHRoZSB1cCBhbmQgZG93biBrZXlzIGFjdCBpbnZlcnRlZFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgbGFyZ2VTdGVwS2V5cy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdHJpcCBcIkFycm93XCIgZm9yIElFIGNvbXBhdGliaWxpdHkuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50L2tleVxuICAgICAgICAgICAgdmFyIGtleSA9IGV2ZW50LmtleS5yZXBsYWNlKFwiQXJyb3dcIiwgXCJcIik7XG4gICAgICAgICAgICB2YXIgaXNMYXJnZURvd24gPSBrZXkgPT09IGxhcmdlU3RlcEtleXNbMF07XG4gICAgICAgICAgICB2YXIgaXNMYXJnZVVwID0ga2V5ID09PSBsYXJnZVN0ZXBLZXlzWzFdO1xuICAgICAgICAgICAgdmFyIGlzRG93biA9IGtleSA9PT0gdmVydGljYWxLZXlzWzBdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMF0gfHwgaXNMYXJnZURvd247XG4gICAgICAgICAgICB2YXIgaXNVcCA9IGtleSA9PT0gdmVydGljYWxLZXlzWzFdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMV0gfHwgaXNMYXJnZVVwO1xuICAgICAgICAgICAgdmFyIGlzTWluID0ga2V5ID09PSBlZGdlS2V5c1swXTtcbiAgICAgICAgICAgIHZhciBpc01heCA9IGtleSA9PT0gZWRnZUtleXNbMV07XG4gICAgICAgICAgICBpZiAoIWlzRG93biAmJiAhaXNVcCAmJiAhaXNNaW4gJiYgIWlzTWF4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIHRvO1xuICAgICAgICAgICAgaWYgKGlzVXAgfHwgaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGlzRG93biA/IDAgOiAxO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwcyA9IGdldE5leHRTdGVwc0ZvckhhbmRsZShoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIHZhciBzdGVwID0gc3RlcHNbZGlyZWN0aW9uXTtcbiAgICAgICAgICAgICAgICAvLyBBdCB0aGUgZWRnZSBvZiBhIHNsaWRlciwgZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gc3RlcCBzZXQsIHVzZSB0aGUgZGVmYXVsdCBvZiAxMCUgb2YgdGhlIHN1Yi1yYW5nZVxuICAgICAgICAgICAgICAgIGlmIChzdGVwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBzdGVwID0gc2NvcGVfU3BlY3RydW0uZ2V0RGVmYXVsdFN0ZXAoc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0sIGlzRG93biwgb3B0aW9ucy5rZXlib2FyZERlZmF1bHRTdGVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzTGFyZ2VVcCB8fCBpc0xhcmdlRG93bikge1xuICAgICAgICAgICAgICAgICAgICBzdGVwICo9IG9wdGlvbnMua2V5Ym9hcmRQYWdlTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXAgKj0gb3B0aW9ucy5rZXlib2FyZE11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0ZXAgb3ZlciB6ZXJvLWxlbmd0aCByYW5nZXMgKCM5NDgpO1xuICAgICAgICAgICAgICAgIHN0ZXAgPSBNYXRoLm1heChzdGVwLCAwLjAwMDAwMDEpO1xuICAgICAgICAgICAgICAgIC8vIERlY3JlbWVudCBmb3IgZG93biBzdGVwc1xuICAgICAgICAgICAgICAgIHN0ZXAgPSAoaXNEb3duID8gLTEgOiAxKSAqIHN0ZXA7XG4gICAgICAgICAgICAgICAgdG8gPSBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSArIHN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc01heCkge1xuICAgICAgICAgICAgICAgIC8vIEVuZCBrZXlcbiAgICAgICAgICAgICAgICB0byA9IG9wdGlvbnMuc3BlY3RydW0ueFZhbFtvcHRpb25zLnNwZWN0cnVtLnhWYWwubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBIb21lIGtleVxuICAgICAgICAgICAgICAgIHRvID0gb3B0aW9ucy5zcGVjdHJ1bS54VmFsWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgc2NvcGVfU3BlY3RydW0udG9TdGVwcGluZyh0byksIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgZmlyZUV2ZW50KFwiY2hhbmdlXCIsIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdHRhY2ggZXZlbnRzIHRvIHNldmVyYWwgc2xpZGVyIHBhcnRzLlxuICAgICAgICBmdW5jdGlvbiBiaW5kU2xpZGVyRXZlbnRzKGJlaGF2aW91cikge1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBzdGFuZGFyZCBkcmFnIGV2ZW50IHRvIHRoZSBoYW5kbGVzLlxuICAgICAgICAgICAgaWYgKCFiZWhhdmlvdXIuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9IYW5kbGVzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2UgZXZlbnRzIGFyZSBvbmx5IGJvdW5kIHRvIHRoZSB2aXN1YWwgaGFuZGxlXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQsIG5vdCB0aGUgJ3JlYWwnIG9yaWdpbiBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBoYW5kbGUuY2hpbGRyZW5bMF0sIGV2ZW50U3RhcnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU51bWJlcnM6IFtpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSB0YXAgZXZlbnQgdG8gdGhlIHNsaWRlciBiYXNlLlxuICAgICAgICAgICAgaWYgKGJlaGF2aW91ci50YXApIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLnN0YXJ0LCBzY29wZV9CYXNlLCBldmVudFRhcCwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlyZSBob3ZlciBldmVudHNcbiAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuaG92ZXIpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hFdmVudChhY3Rpb25zLm1vdmUsIHNjb3BlX0Jhc2UsIGV2ZW50SG92ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHRoZSByYW5nZSBkcmFnZ2FibGUuXG4gICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmRyYWcpIHtcbiAgICAgICAgICAgICAgICBzY29wZV9Db25uZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChjb25uZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29ubmVjdCA9PT0gZmFsc2UgfHwgaW5kZXggPT09IDAgfHwgaW5kZXggPT09IHNjb3BlX0Nvbm5lY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQmVmb3JlID0gc2NvcGVfSGFuZGxlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQWZ0ZXIgPSBzY29wZV9IYW5kbGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50SG9sZGVycyA9IFtjb25uZWN0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXNUb0RyYWcgPSBbaGFuZGxlQmVmb3JlLCBoYW5kbGVBZnRlcl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVOdW1iZXJzVG9EcmFnID0gW2luZGV4IC0gMSwgaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyhjb25uZWN0LCBvcHRpb25zLmNzc0NsYXNzZXMuZHJhZ2dhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgcmFuZ2UgaXMgZml4ZWQsIHRoZSBlbnRpcmUgcmFuZ2UgY2FuXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlIGRyYWdnZWQgYnkgdGhlIGhhbmRsZXMuIFRoZSBoYW5kbGUgaW4gdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgIC8vIG9yaWdpbiB3aWxsIHByb3BhZ2F0ZSB0aGUgc3RhcnQgZXZlbnQgdXB3YXJkLFxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgaXQgbmVlZHMgdG8gYmUgYm91bmQgbWFudWFsbHkgb24gdGhlIG90aGVyLlxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3VyLmZpeGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMucHVzaChoYW5kbGVCZWZvcmUuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIb2xkZXJzLnB1c2goaGFuZGxlQWZ0ZXIuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvdXIuZHJhZ0FsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlc1RvRHJhZyA9IHNjb3BlX0hhbmRsZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzVG9EcmFnID0gc2NvcGVfSGFuZGxlTnVtYmVycztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBldmVudEhvbGRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIb2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaEV2ZW50KGFjdGlvbnMuc3RhcnQsIGV2ZW50SG9sZGVyLCBldmVudFN0YXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlczogaGFuZGxlc1RvRHJhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzOiBoYW5kbGVOdW1iZXJzVG9EcmFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXR0YWNoIGFuIGV2ZW50IHRvIHRoaXMgc2xpZGVyLCBwb3NzaWJseSBpbmNsdWRpbmcgYSBuYW1lc3BhY2VcbiAgICAgICAgZnVuY3Rpb24gYmluZEV2ZW50KG5hbWVzcGFjZWRFdmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNjb3BlX0V2ZW50c1tuYW1lc3BhY2VkRXZlbnRdID0gc2NvcGVfRXZlbnRzW25hbWVzcGFjZWRFdmVudF0gfHwgW107XG4gICAgICAgICAgICBzY29wZV9FdmVudHNbbmFtZXNwYWNlZEV2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBldmVudCBib3VuZCBpcyAndXBkYXRlLCcgZmlyZSBpdCBpbW1lZGlhdGVseSBmb3IgYWxsIGhhbmRsZXMuXG4gICAgICAgICAgICBpZiAobmFtZXNwYWNlZEV2ZW50LnNwbGl0KFwiLlwiKVswXSA9PT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZXMuZm9yRWFjaChmdW5jdGlvbiAoYSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwidXBkYXRlXCIsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc0ludGVybmFsTmFtZXNwYWNlKG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWVzcGFjZSA9PT0gSU5URVJOQUxfRVZFTlRfTlMuYXJpYSB8fCBuYW1lc3BhY2UgPT09IElOVEVSTkFMX0VWRU5UX05TLnRvb2x0aXBzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuZG8gYXR0YWNobWVudCBvZiBldmVudFxuICAgICAgICBmdW5jdGlvbiByZW1vdmVFdmVudChuYW1lc3BhY2VkRXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5hbWVzcGFjZWRFdmVudCAmJiBuYW1lc3BhY2VkRXZlbnQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGV2ZW50ID8gbmFtZXNwYWNlZEV2ZW50LnN1YnN0cmluZyhldmVudC5sZW5ndGgpIDogbmFtZXNwYWNlZEV2ZW50O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVfRXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChiaW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRFdmVudCA9IGJpbmQuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgICAgIHZhciB0TmFtZXNwYWNlID0gYmluZC5zdWJzdHJpbmcodEV2ZW50Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKCghZXZlbnQgfHwgZXZlbnQgPT09IHRFdmVudCkgJiYgKCFuYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSB0TmFtZXNwYWNlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGRlbGV0ZSBwcm90ZWN0ZWQgaW50ZXJuYWwgZXZlbnQgaWYgaW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0ludGVybmFsTmFtZXNwYWNlKHROYW1lc3BhY2UpIHx8IG5hbWVzcGFjZSA9PT0gdE5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNjb3BlX0V2ZW50c1tiaW5kXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV4dGVybmFsIGV2ZW50IGhhbmRsaW5nXG4gICAgICAgIGZ1bmN0aW9uIGZpcmVFdmVudChldmVudE5hbWUsIGhhbmRsZU51bWJlciwgdGFwKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZV9FdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50VHlwZSA9IHRhcmdldEV2ZW50LnNwbGl0KFwiLlwiKVswXTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSBldmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfRXZlbnRzW3RhcmdldEV2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgc2xpZGVyIHB1YmxpYyBBUEkgYXMgdGhlIHNjb3BlICgndGhpcycpXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9TZWxmLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiB2YWx1ZXMgYXMgYXJyYXksIHNvIGFyZ18xW2FyZ18yXSBpcyBhbHdheXMgdmFsaWQuXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgaW5kZXgsIDAgb3IgMVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuLWZvcm1hdHRlZCBzbGlkZXIgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9WYWx1ZXMuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFdmVudCBpcyBmaXJlZCBieSB0YXAsIHRydWUgb3IgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcCB8fCBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMZWZ0IG9mZnNldCBvZiB0aGUgaGFuZGxlLCBpbiByZWxhdGlvbiB0byB0aGUgc2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnMuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHNsaWRlciBwdWJsaWMgQVBJIHRvIGFuIGFjY2Vzc2libGUgcGFyYW1ldGVyIHdoZW4gdGhpcyBpcyB1bmF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVfU2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNwbGl0IG91dCB0aGUgaGFuZGxlIHBvc2l0aW9uaW5nIGxvZ2ljIHNvIHRoZSBNb3ZlIGV2ZW50IGNhbiB1c2UgaXQsIHRvb1xuICAgICAgICBmdW5jdGlvbiBjaGVja0hhbmRsZVBvc2l0aW9uKHJlZmVyZW5jZSwgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZ2V0VmFsdWUsIHNtb290aFN0ZXBzKSB7XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2U7XG4gICAgICAgICAgICAvLyBGb3Igc2xpZGVycyB3aXRoIG11bHRpcGxlIGhhbmRsZXMsIGxpbWl0IG1vdmVtZW50IHRvIHRoZSBvdGhlciBoYW5kbGUuXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgbWFyZ2luIG9wdGlvbiBieSBhZGRpbmcgaXQgdG8gdGhlIGhhbmRsZSBwb3NpdGlvbnMuXG4gICAgICAgICAgICBpZiAoc2NvcGVfSGFuZGxlcy5sZW5ndGggPiAxICYmICFvcHRpb25zLmV2ZW50cy51bmNvbnN0cmFpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tCYWNrd2FyZCAmJiBoYW5kbGVOdW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZShyZWZlcmVuY2VbaGFuZGxlTnVtYmVyIC0gMV0sIG9wdGlvbnMubWFyZ2luLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLm1hcmdpbiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgbGltaXQgb3B0aW9uIGhhcyB0aGUgb3Bwb3NpdGUgZWZmZWN0LCBsaW1pdGluZyBoYW5kbGVzIHRvIGFcbiAgICAgICAgICAgIC8vIG1heGltdW0gZGlzdGFuY2UgZnJvbSBhbm90aGVyLiBMaW1pdCBtdXN0IGJlID4gMCwgYXMgb3RoZXJ3aXNlXG4gICAgICAgICAgICAvLyBoYW5kbGVzIHdvdWxkIGJlIHVubW92YWJsZS5cbiAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVzLmxlbmd0aCA+IDEgJiYgb3B0aW9ucy5saW1pdCkge1xuICAgICAgICAgICAgICAgIGlmIChsb29rQmFja3dhcmQgJiYgaGFuZGxlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciAtIDFdLCBvcHRpb25zLmxpbWl0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxvb2tGb3J3YXJkICYmIGhhbmRsZU51bWJlciA8IHNjb3BlX0hhbmRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UocmVmZXJlbmNlW2hhbmRsZU51bWJlciArIDFdLCBvcHRpb25zLmxpbWl0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBwYWRkaW5nIG9wdGlvbiBrZWVwcyB0aGUgaGFuZGxlcyBhIGNlcnRhaW4gZGlzdGFuY2UgZnJvbSB0aGVcbiAgICAgICAgICAgIC8vIGVkZ2VzIG9mIHRoZSBzbGlkZXIuIFBhZGRpbmcgbXVzdCBiZSA+IDAuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5wYWRkaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHNjb3BlX1NwZWN0cnVtLmdldEFic29sdXRlRGlzdGFuY2UoMCwgb3B0aW9ucy5wYWRkaW5nWzBdLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5tYXgodG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZU51bWJlciA9PT0gc2NvcGVfSGFuZGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gc2NvcGVfU3BlY3RydW0uZ2V0QWJzb2x1dGVEaXN0YW5jZSgxMDAsIG9wdGlvbnMucGFkZGluZ1sxXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvID0gTWF0aC5taW4odG8sIGRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNtb290aFN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgdG8gPSBzY29wZV9TcGVjdHJ1bS5nZXRTdGVwKHRvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExpbWl0IHBlcmNlbnRhZ2UgdG8gdGhlIDAgLSAxMDAgcmFuZ2VcbiAgICAgICAgICAgIHRvID0gbGltaXQodG8pO1xuICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIGhhbmRsZSBjYW4ndCBtb3ZlXG4gICAgICAgICAgICBpZiAodG8gPT09IHJlZmVyZW5jZVtoYW5kbGVOdW1iZXJdICYmICFnZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfVxuICAgICAgICAvLyBVc2VzIHNsaWRlciBvcmllbnRhdGlvbiB0byBjcmVhdGUgQ1NTIHJ1bGVzLiBhID0gYmFzZSB2YWx1ZTtcbiAgICAgICAgZnVuY3Rpb24gaW5SdWxlT3JkZXIodiwgYSkge1xuICAgICAgICAgICAgdmFyIG8gPSBvcHRpb25zLm9ydDtcbiAgICAgICAgICAgIHJldHVybiAobyA/IGEgOiB2KSArIFwiLCBcIiArIChvID8gdiA6IGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmVzIGhhbmRsZShzKSBieSBhIHBlcmNlbnRhZ2VcbiAgICAgICAgLy8gKGJvb2wsICUgdG8gbW92ZSwgWyUgd2hlcmUgaGFuZGxlIHN0YXJ0ZWQsIC4uLl0sIFtpbmRleCBpbiBzY29wZV9IYW5kbGVzLCAuLi5dKVxuICAgICAgICBmdW5jdGlvbiBtb3ZlSGFuZGxlcyh1cHdhcmQsIHByb3Bvc2FsLCBsb2NhdGlvbnMsIGhhbmRsZU51bWJlcnMsIGNvbm5lY3QpIHtcbiAgICAgICAgICAgIHZhciBwcm9wb3NhbHMgPSBsb2NhdGlvbnMuc2xpY2UoKTtcbiAgICAgICAgICAgIC8vIFN0b3JlIGZpcnN0IGhhbmRsZSBub3csIHNvIHdlIHN0aWxsIGhhdmUgaXQgaW4gY2FzZSBoYW5kbGVOdW1iZXJzIGlzIHJldmVyc2VkXG4gICAgICAgICAgICB2YXIgZmlyc3RIYW5kbGUgPSBoYW5kbGVOdW1iZXJzWzBdO1xuICAgICAgICAgICAgdmFyIHNtb290aFN0ZXBzID0gb3B0aW9ucy5ldmVudHMuc21vb3RoU3RlcHM7XG4gICAgICAgICAgICB2YXIgYiA9IFshdXB3YXJkLCB1cHdhcmRdO1xuICAgICAgICAgICAgdmFyIGYgPSBbdXB3YXJkLCAhdXB3YXJkXTtcbiAgICAgICAgICAgIC8vIENvcHkgaGFuZGxlTnVtYmVycyBzbyB3ZSBkb24ndCBjaGFuZ2UgdGhlIGRhdGFzZXRcbiAgICAgICAgICAgIGhhbmRsZU51bWJlcnMgPSBoYW5kbGVOdW1iZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgd2hpY2ggaGFuZGxlIGlzICdsZWFkaW5nJy5cbiAgICAgICAgICAgIC8vIElmIHRoYXQgb25lIGNhbid0IG1vdmUgdGhlIHNlY29uZCBjYW4ndCBlaXRoZXIuXG4gICAgICAgICAgICBpZiAodXB3YXJkKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdGVwIDE6IGdldCB0aGUgbWF4aW11bSBwZXJjZW50YWdlIHRoYXQgYW55IG9mIHRoZSBoYW5kbGVzIGNhbiBtb3ZlXG4gICAgICAgICAgICBpZiAoaGFuZGxlTnVtYmVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvID0gY2hlY2tIYW5kbGVQb3NpdGlvbihwcm9wb3NhbHMsIGhhbmRsZU51bWJlciwgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gKyBwcm9wb3NhbCwgYltvXSwgZltvXSwgZmFsc2UsIHNtb290aFN0ZXBzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCBpZiBvbmUgb2YgdGhlIGhhbmRsZXMgY2FuJ3QgbW92ZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgPSB0byAtIHByb3Bvc2Fsc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWxzW2hhbmRsZU51bWJlcl0gPSB0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXNpbmcgb25lIGhhbmRsZSwgY2hlY2sgYmFja3dhcmQgQU5EIGZvcndhcmRcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGIgPSBmID0gW3RydWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBTdGVwIDI6IFRyeSB0byBzZXQgdGhlIGhhbmRsZXMgd2l0aCB0aGUgZm91bmQgcGVyY2VudGFnZVxuICAgICAgICAgICAgaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIsIG8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9XG4gICAgICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIGxvY2F0aW9uc1toYW5kbGVOdW1iZXJdICsgcHJvcG9zYWwsIGJbb10sIGZbb10sIGZhbHNlLCBzbW9vdGhTdGVwcykgfHwgc3RhdGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFN0ZXAgMzogSWYgYSBoYW5kbGUgbW92ZWQsIGZpcmUgZXZlbnRzXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgZmlyZUV2ZW50KFwic2xpZGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBjb25uZWN0LCB0aGVuIGZpcmUgZHJhZyBldmVudFxuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJkcmFnXCIsIGZpcnN0SGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGFrZXMgYSBiYXNlIHZhbHVlIGFuZCBhbiBvZmZzZXQuIFRoaXMgb2Zmc2V0IGlzIHVzZWQgZm9yIHRoZSBjb25uZWN0IGJhciBzaXplLlxuICAgICAgICAvLyBJbiB0aGUgaW5pdGlhbCBkZXNpZ24gZm9yIHRoaXMgZmVhdHVyZSwgdGhlIG9yaWdpbiBlbGVtZW50IHdhcyAxJSB3aWRlLlxuICAgICAgICAvLyBVbmZvcnR1bmF0ZWx5LCBhIHJvdW5kaW5nIGJ1ZyBpbiBDaHJvbWUgbWFrZXMgaXQgaW1wb3NzaWJsZSB0byBpbXBsZW1lbnQgdGhpcyBmZWF0dXJlXG4gICAgICAgIC8vIGluIHRoaXMgbWFubmVyOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03OTgyMjNcbiAgICAgICAgZnVuY3Rpb24gdHJhbnNmb3JtRGlyZWN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRpciA/IDEwMCAtIGEgLSBiIDogYTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGVzIHNjb3BlX0xvY2F0aW9ucyBhbmQgc2NvcGVfVmFsdWVzLCB1cGRhdGVzIHZpc3VhbCBzdGF0ZVxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgbG9jYXRpb25zLlxuICAgICAgICAgICAgc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPSB0bztcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHZhbHVlIHRvIHRoZSBzbGlkZXIgc3RlcHBpbmcvcmFuZ2UuXG4gICAgICAgICAgICBzY29wZV9WYWx1ZXNbaGFuZGxlTnVtYmVyXSA9IHNjb3BlX1NwZWN0cnVtLmZyb21TdGVwcGluZyh0byk7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRpb24gPSB0cmFuc2Zvcm1EaXJlY3Rpb24odG8sIDApIC0gc2NvcGVfRGlyT2Zmc2V0O1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zbGF0aW9uICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPSB0cmFuc2xhdGVSdWxlO1xuICAgICAgICAgICAgdXBkYXRlQ29ubmVjdChoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgdXBkYXRlQ29ubmVjdChoYW5kbGVOdW1iZXIgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGVzIGJlZm9yZSB0aGUgc2xpZGVyIG1pZGRsZSBhcmUgc3RhY2tlZCBsYXRlciA9IGhpZ2hlcixcbiAgICAgICAgLy8gSGFuZGxlcyBhZnRlciB0aGUgbWlkZGxlIGxhdGVyIGlzIGxvd2VyXG4gICAgICAgIC8vIFtbN10gWzhdIC4uLi4uLi4uLi4gfCAuLi4uLi4uLi4uIFs1XSBbNF1cbiAgICAgICAgZnVuY3Rpb24gc2V0WmluZGV4KCkge1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlyID0gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl0gPiA1MCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICB2YXIgekluZGV4ID0gMyArIChzY29wZV9IYW5kbGVzLmxlbmd0aCArIGRpciAqIGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlc1toYW5kbGVOdW1iZXJdLnN0eWxlLnpJbmRleCA9IFN0cmluZyh6SW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGVzdCBzdWdnZXN0ZWQgdmFsdWVzIGFuZCBhcHBseSBtYXJnaW4sIHN0ZXAuXG4gICAgICAgIC8vIGlmIGV4YWN0SW5wdXQgaXMgdHJ1ZSwgZG9uJ3QgcnVuIGNoZWNrSGFuZGxlUG9zaXRpb24sIHRoZW4gdGhlIGhhbmRsZSBjYW4gYmUgcGxhY2VkIGluIGJldHdlZW4gc3RlcHMgKCM0MzYpXG4gICAgICAgIGZ1bmN0aW9uIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHRvLCBsb29rQmFja3dhcmQsIGxvb2tGb3J3YXJkLCBleGFjdElucHV0LCBzbW9vdGhTdGVwcykge1xuICAgICAgICAgICAgaWYgKCFleGFjdElucHV0KSB7XG4gICAgICAgICAgICAgICAgdG8gPSBjaGVja0hhbmRsZVBvc2l0aW9uKHNjb3BlX0xvY2F0aW9ucywgaGFuZGxlTnVtYmVyLCB0bywgbG9va0JhY2t3YXJkLCBsb29rRm9yd2FyZCwgZmFsc2UsIHNtb290aFN0ZXBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVIYW5kbGVQb3NpdGlvbihoYW5kbGVOdW1iZXIsIHRvKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZXMgc3R5bGUgYXR0cmlidXRlIGZvciBjb25uZWN0IG5vZGVzXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbm5lY3QoaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIFNraXAgY29ubmVjdHMgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoIXNjb3BlX0Nvbm5lY3RzW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsID0gMDtcbiAgICAgICAgICAgIHZhciBoID0gMTAwO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgbCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBzY29wZV9Db25uZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaCA9IHNjb3BlX0xvY2F0aW9uc1tpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSB1c2UgdHdvIHJ1bGVzOlxuICAgICAgICAgICAgLy8gJ3RyYW5zbGF0ZScgdG8gY2hhbmdlIHRoZSBsZWZ0L3RvcCBvZmZzZXQ7XG4gICAgICAgICAgICAvLyAnc2NhbGUnIHRvIGNoYW5nZSB0aGUgd2lkdGggb2YgdGhlIGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBBcyB0aGUgZWxlbWVudCBoYXMgYSB3aWR0aCBvZiAxMDAlLCBhIHRyYW5zbGF0aW9uIG9mIDEwMCUgaXMgZXF1YWwgdG8gMTAwJSBvZiB0aGUgcGFyZW50ICgubm9VaS1iYXNlKVxuICAgICAgICAgICAgdmFyIGNvbm5lY3RXaWR0aCA9IGggLSBsO1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZVJ1bGUgPSBcInRyYW5zbGF0ZShcIiArIGluUnVsZU9yZGVyKHRyYW5zZm9ybURpcmVjdGlvbihsLCBjb25uZWN0V2lkdGgpICsgXCIlXCIsIFwiMFwiKSArIFwiKVwiO1xuICAgICAgICAgICAgdmFyIHNjYWxlUnVsZSA9IFwic2NhbGUoXCIgKyBpblJ1bGVPcmRlcihjb25uZWN0V2lkdGggLyAxMDAsIFwiMVwiKSArIFwiKVwiO1xuICAgICAgICAgICAgc2NvcGVfQ29ubmVjdHNbaW5kZXhdLnN0eWxlW29wdGlvbnMudHJhbnNmb3JtUnVsZV0gPVxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVJ1bGUgKyBcIiBcIiArIHNjYWxlUnVsZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQYXJzZXMgdmFsdWUgcGFzc2VkIHRvIC5zZXQgbWV0aG9kLiBSZXR1cm5zIGN1cnJlbnQgdmFsdWUgaWYgbm90IHBhcnNlLWFibGUuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVUb1ZhbHVlKHRvLCBoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgIC8vIFNldHRpbmcgd2l0aCBudWxsIGluZGljYXRlcyBhbiAnaWdub3JlJy5cbiAgICAgICAgICAgIC8vIElucHV0dGluZyAnZmFsc2UnIGlzIGludmFsaWQuXG4gICAgICAgICAgICBpZiAodG8gPT09IG51bGwgfHwgdG8gPT09IGZhbHNlIHx8IHRvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhIGZvcm1hdHRlZCBudW1iZXIgd2FzIHBhc3NlZCwgYXR0ZW1wdCB0byBkZWNvZGUgaXQuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdG8gPSBTdHJpbmcodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8gPSBvcHRpb25zLmZvcm1hdC5mcm9tKHRvKTtcbiAgICAgICAgICAgIGlmICh0byAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0byA9IHNjb3BlX1NwZWN0cnVtLnRvU3RlcHBpbmcodG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgcGFyc2luZyB0aGUgbnVtYmVyIGZhaWxlZCwgdXNlIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgICAgICAgICAgaWYgKHRvID09PSBmYWxzZSB8fCBpc05hTih0bykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zW2hhbmRsZU51bWJlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHRoZSBzbGlkZXIgdmFsdWUuXG4gICAgICAgIGZ1bmN0aW9uIHZhbHVlU2V0KGlucHV0LCBmaXJlU2V0RXZlbnQsIGV4YWN0SW5wdXQpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBhc0FycmF5KGlucHV0KTtcbiAgICAgICAgICAgIHZhciBpc0luaXQgPSBzY29wZV9Mb2NhdGlvbnNbMF0gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIC8vIEV2ZW50IGZpcmVzIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgIGZpcmVTZXRFdmVudCA9IGZpcmVTZXRFdmVudCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZpcmVTZXRFdmVudDtcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBpcyBvcHRpb25hbC5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaW5pdGlhbCB2YWx1ZXMgd2VyZSBzZXQgYmVmb3JlIHVzaW5nIGFuaW1hdGVkIHBsYWNlbWVudC5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGUgJiYgIWlzSW5pdCkge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzRm9yKHNjb3BlX1RhcmdldCwgb3B0aW9ucy5jc3NDbGFzc2VzLnRhcCwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJzdCBwYXNzLCB3aXRob3V0IGxvb2tBaGVhZCBidXQgd2l0aCBsb29rQmFja3dhcmQuIFZhbHVlcyBhcmUgc2V0IGZyb20gbGVmdCB0byByaWdodC5cbiAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgc2V0SGFuZGxlKGhhbmRsZU51bWJlciwgcmVzb2x2ZVRvVmFsdWUodmFsdWVzW2hhbmRsZU51bWJlcl0sIGhhbmRsZU51bWJlciksIHRydWUsIGZhbHNlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGkgPSBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCA9PT0gMSA/IDAgOiAxO1xuICAgICAgICAgICAgLy8gU3ByZWFkIGhhbmRsZXMgZXZlbmx5IGFjcm9zcyB0aGUgc2xpZGVyIGlmIHRoZSByYW5nZSBoYXMgbm8gc2l6ZSAobWluPW1heClcbiAgICAgICAgICAgIGlmIChpc0luaXQgJiYgc2NvcGVfU3BlY3RydW0uaGFzTm9TaXplKCkpIHtcbiAgICAgICAgICAgICAgICBleGFjdElucHV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzY29wZV9Mb2NhdGlvbnNbMF0gPSAwO1xuICAgICAgICAgICAgICAgIGlmIChzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwYWNlXzEgPSAxMDAgLyAoc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdID0gaGFuZGxlTnVtYmVyICogc3BhY2VfMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2Vjb25kYXJ5IHBhc3Nlcy4gTm93IHRoYXQgYWxsIGJhc2UgdmFsdWVzIGFyZSBzZXQsIGFwcGx5IGNvbnN0cmFpbnRzLlxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBhbGwgaGFuZGxlcyB0byBlbnN1cmUgY29uc3RyYWludHMgYXJlIGFwcGxpZWQgZm9yIHRoZSBlbnRpcmUgc2xpZGVyIChJc3N1ZSAjMTAwOSlcbiAgICAgICAgICAgIGZvciAoOyBpIDwgc2NvcGVfSGFuZGxlTnVtYmVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHNjb3BlX0hhbmRsZU51bWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHNjb3BlX0xvY2F0aW9uc1toYW5kbGVOdW1iZXJdLCB0cnVlLCB0cnVlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFppbmRleCgpO1xuICAgICAgICAgICAgc2NvcGVfSGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJ1cGRhdGVcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAvLyBGaXJlIHRoZSBldmVudCBvbmx5IGZvciBoYW5kbGVzIHRoYXQgcmVjZWl2ZWQgYSBuZXcgdmFsdWUsIGFzIHBlciAjNTc5XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlc1toYW5kbGVOdW1iZXJdICE9PSBudWxsICYmIGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlRXZlbnQoXCJzZXRcIiwgaGFuZGxlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCBzbGlkZXIgdG8gaW5pdGlhbCB2YWx1ZXNcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVSZXNldChmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgIHZhbHVlU2V0KG9wdGlvbnMuc3RhcnQsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHZhbHVlIGZvciBhIHNpbmdsZSBoYW5kbGVcbiAgICAgICAgZnVuY3Rpb24gdmFsdWVTZXRIYW5kbGUoaGFuZGxlTnVtYmVyLCB2YWx1ZSwgZmlyZVNldEV2ZW50LCBleGFjdElucHV0KSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgbnVtZXJpYyBpbnB1dFxuICAgICAgICAgICAgaGFuZGxlTnVtYmVyID0gTnVtYmVyKGhhbmRsZU51bWJlcik7XG4gICAgICAgICAgICBpZiAoIShoYW5kbGVOdW1iZXIgPj0gMCAmJiBoYW5kbGVOdW1iZXIgPCBzY29wZV9IYW5kbGVOdW1iZXJzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyOiBpbnZhbGlkIGhhbmRsZSBudW1iZXIsIGdvdDogXCIgKyBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTG9vayBib3RoIGJhY2t3YXJkIGFuZCBmb3J3YXJkLCBzaW5jZSB3ZSBkb24ndCB3YW50IHRoaXMgaGFuZGxlIHRvIFwicHVzaFwiIG90aGVyIGhhbmRsZXMgKCM5NjApO1xuICAgICAgICAgICAgLy8gVGhlIGV4YWN0SW5wdXQgYXJndW1lbnQgY2FuIGJlIHVzZWQgdG8gaWdub3JlIHNsaWRlciBzdGVwcGluZyAoIzQzNilcbiAgICAgICAgICAgIHNldEhhbmRsZShoYW5kbGVOdW1iZXIsIHJlc29sdmVUb1ZhbHVlKHZhbHVlLCBoYW5kbGVOdW1iZXIpLCB0cnVlLCB0cnVlLCBleGFjdElucHV0KTtcbiAgICAgICAgICAgIGZpcmVFdmVudChcInVwZGF0ZVwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKGZpcmVTZXRFdmVudCkge1xuICAgICAgICAgICAgICAgIGZpcmVFdmVudChcInNldFwiLCBoYW5kbGVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgc2xpZGVyIHZhbHVlLlxuICAgICAgICBmdW5jdGlvbiB2YWx1ZUdldCh1bmVuY29kZWQpIHtcbiAgICAgICAgICAgIGlmICh1bmVuY29kZWQgPT09IHZvaWQgMCkgeyB1bmVuY29kZWQgPSBmYWxzZTsgfVxuICAgICAgICAgICAgaWYgKHVuZW5jb2RlZCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBhIGNvcHkgb2YgdGhlIHJhdyB2YWx1ZXNcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfVmFsdWVzLmxlbmd0aCA9PT0gMSA/IHNjb3BlX1ZhbHVlc1swXSA6IHNjb3BlX1ZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBzY29wZV9WYWx1ZXMubWFwKG9wdGlvbnMuZm9ybWF0LnRvKTtcbiAgICAgICAgICAgIC8vIElmIG9ubHkgb25lIGhhbmRsZSBpcyB1c2VkLCByZXR1cm4gYSBzaW5nbGUgdmFsdWUuXG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZXMgY2xhc3NlcyBmcm9tIHRoZSByb290IGFuZCBlbXB0aWVzIGl0LlxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHByb3RlY3RlZCBpbnRlcm5hbCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KElOVEVSTkFMX0VWRU5UX05TLmFyaWEpO1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQoSU5URVJOQUxfRVZFTlRfTlMudG9vbHRpcHMpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5jc3NDbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhzY29wZV9UYXJnZXQsIG9wdGlvbnMuY3NzQ2xhc3Nlc1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2hpbGUgKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVfVGFyZ2V0LnJlbW92ZUNoaWxkKHNjb3BlX1RhcmdldC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBzY29wZV9UYXJnZXQubm9VaVNsaWRlcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0U3RlcHNGb3JIYW5kbGUoaGFuZGxlTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSBzY29wZV9Mb2NhdGlvbnNbaGFuZGxlTnVtYmVyXTtcbiAgICAgICAgICAgIHZhciBuZWFyYnlTdGVwcyA9IHNjb3BlX1NwZWN0cnVtLmdldE5lYXJieVN0ZXBzKGxvY2F0aW9uKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNjb3BlX1ZhbHVlc1toYW5kbGVOdW1iZXJdO1xuICAgICAgICAgICAgdmFyIGluY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgICAgICB2YXIgZGVjcmVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIC8vIElmIHNuYXBwZWQsIGRpcmVjdGx5IHVzZSBkZWZpbmVkIHN0ZXAgdmFsdWVcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNuYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtIG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuc3RhcnRWYWx1ZSB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBuZWFyYnlTdGVwcy5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSAtIHZhbHVlIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBuZXh0IHZhbHVlIGluIHRoaXMgc3RlcCBtb3ZlcyBpbnRvIHRoZSBuZXh0IHN0ZXAsXG4gICAgICAgICAgICAvLyB0aGUgaW5jcmVtZW50IGlzIHRoZSBzdGFydCBvZiB0aGUgbmV4dCBzdGVwIC0gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIGlmIChpbmNyZW1lbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICsgaW5jcmVtZW50ID4gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gbmVhcmJ5U3RlcHMuc3RlcEFmdGVyLnN0YXJ0VmFsdWUgLSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYmV5b25kIHRoZSBzdGFydGluZyBwb2ludFxuICAgICAgICAgICAgaWYgKHZhbHVlID4gbmVhcmJ5U3RlcHMudGhpc1N0ZXAuc3RhcnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGRlY3JlbWVudCA9IG5lYXJieVN0ZXBzLnRoaXNTdGVwLnN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZWFyYnlTdGVwcy5zdGVwQmVmb3JlLnN0ZXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZGVjcmVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhIGhhbmRsZSBpcyBhdCB0aGUgc3RhcnQgb2YgYSBzdGVwLCBpdCBhbHdheXMgc3RlcHMgYmFjayBpbnRvIHRoZSBwcmV2aW91cyBzdGVwIGZpcnN0XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSB2YWx1ZSAtIG5lYXJieVN0ZXBzLnN0ZXBCZWZvcmUuaGlnaGVzdFN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBOb3csIGlmIGF0IHRoZSBzbGlkZXIgZWRnZXMsIHRoZXJlIGlzIG5vIGluL2RlY3JlbWVudFxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09PSAxMDApIHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobG9jYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXMgcGVyICMzOTEsIHRoZSBjb21wYXJpc29uIGZvciB0aGUgZGVjcmVtZW50IHN0ZXAgY2FuIGhhdmUgc29tZSByb3VuZGluZyBpc3N1ZXMuXG4gICAgICAgICAgICB2YXIgc3RlcERlY2ltYWxzID0gc2NvcGVfU3BlY3RydW0uY291bnRTdGVwRGVjaW1hbHMoKTtcbiAgICAgICAgICAgIC8vIFJvdW5kIHBlciAjMzkxXG4gICAgICAgICAgICBpZiAoaW5jcmVtZW50ICE9PSBudWxsICYmIGluY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnQgPSBOdW1iZXIoaW5jcmVtZW50LnRvRml4ZWQoc3RlcERlY2ltYWxzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVjcmVtZW50ICE9PSBudWxsICYmIGRlY3JlbWVudCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBkZWNyZW1lbnQgPSBOdW1iZXIoZGVjcmVtZW50LnRvRml4ZWQoc3RlcERlY2ltYWxzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW2RlY3JlbWVudCwgaW5jcmVtZW50XTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgc3RlcCBzaXplIGZvciB0aGUgc2xpZGVyLlxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0U3RlcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVfSGFuZGxlTnVtYmVycy5tYXAoZ2V0TmV4dFN0ZXBzRm9ySGFuZGxlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGFibGU6IG1hcmdpbiwgbGltaXQsIHBhZGRpbmcsIHN0ZXAsIHJhbmdlLCBhbmltYXRlLCBzbmFwXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0aW9uc1RvVXBkYXRlLCBmaXJlU2V0RXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFNwZWN0cnVtIGlzIGNyZWF0ZWQgdXNpbmcgdGhlIHJhbmdlLCBzbmFwLCBkaXJlY3Rpb24gYW5kIHN0ZXAgb3B0aW9ucy5cbiAgICAgICAgICAgIC8vICdzbmFwJyBhbmQgJ3N0ZXAnIGNhbiBiZSB1cGRhdGVkLlxuICAgICAgICAgICAgLy8gSWYgJ3NuYXAnIGFuZCAnc3RlcCcgYXJlIG5vdCBwYXNzZWQsIHRoZXkgc2hvdWxkIHJlbWFpbiB1bmNoYW5nZWQuXG4gICAgICAgICAgICB2YXIgdiA9IHZhbHVlR2V0KCk7XG4gICAgICAgICAgICB2YXIgdXBkYXRlQWJsZSA9IFtcbiAgICAgICAgICAgICAgICBcIm1hcmdpblwiLFxuICAgICAgICAgICAgICAgIFwibGltaXRcIixcbiAgICAgICAgICAgICAgICBcInBhZGRpbmdcIixcbiAgICAgICAgICAgICAgICBcInJhbmdlXCIsXG4gICAgICAgICAgICAgICAgXCJhbmltYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJzbmFwXCIsXG4gICAgICAgICAgICAgICAgXCJzdGVwXCIsXG4gICAgICAgICAgICAgICAgXCJmb3JtYXRcIixcbiAgICAgICAgICAgICAgICBcInBpcHNcIixcbiAgICAgICAgICAgICAgICBcInRvb2x0aXBzXCIsXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gT25seSBjaGFuZ2Ugb3B0aW9ucyB0aGF0IHdlJ3JlIGFjdHVhbGx5IHBhc3NlZCB0byB1cGRhdGUuXG4gICAgICAgICAgICB1cGRhdGVBYmxlLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgdW5kZWZpbmVkLiBudWxsIHJlbW92ZXMgdGhlIHZhbHVlLlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zVG9VcGRhdGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbE9wdGlvbnNbbmFtZV0gPSBvcHRpb25zVG9VcGRhdGVbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IHRlc3RPcHRpb25zKG9yaWdpbmFsT3B0aW9ucyk7XG4gICAgICAgICAgICAvLyBMb2FkIG5ldyBvcHRpb25zIGludG8gdGhlIHNsaWRlciBzdGF0ZVxuICAgICAgICAgICAgdXBkYXRlQWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNUb1VwZGF0ZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSBuZXdPcHRpb25zW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NvcGVfU3BlY3RydW0gPSBuZXdPcHRpb25zLnNwZWN0cnVtO1xuICAgICAgICAgICAgLy8gTGltaXQsIG1hcmdpbiBhbmQgcGFkZGluZyBkZXBlbmQgb24gdGhlIHNwZWN0cnVtIGJ1dCBhcmUgc3RvcmVkIG91dHNpZGUgb2YgaXQuICgjNjc3KVxuICAgICAgICAgICAgb3B0aW9ucy5tYXJnaW4gPSBuZXdPcHRpb25zLm1hcmdpbjtcbiAgICAgICAgICAgIG9wdGlvbnMubGltaXQgPSBuZXdPcHRpb25zLmxpbWl0O1xuICAgICAgICAgICAgb3B0aW9ucy5wYWRkaW5nID0gbmV3T3B0aW9ucy5wYWRkaW5nO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHBpcHMsIHJlbW92ZXMgZXhpc3RpbmcuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRvb2x0aXBzLCByZW1vdmVzIGV4aXN0aW5nLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEludmFsaWRhdGUgdGhlIGN1cnJlbnQgcG9zaXRpb25pbmcgc28gdmFsdWVTZXQgZm9yY2VzIGFuIHVwZGF0ZS5cbiAgICAgICAgICAgIHNjb3BlX0xvY2F0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdmFsdWVTZXQoaXNTZXQob3B0aW9uc1RvVXBkYXRlLnN0YXJ0KSA/IG9wdGlvbnNUb1VwZGF0ZS5zdGFydCA6IHYsIGZpcmVTZXRFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gc3RlcHNcbiAgICAgICAgZnVuY3Rpb24gc2V0dXBTbGlkZXIoKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGJhc2UgZWxlbWVudCwgaW5pdGlhbGl6ZSBIVE1MIGFuZCBzZXQgY2xhc3Nlcy5cbiAgICAgICAgICAgIC8vIEFkZCBoYW5kbGVzIGFuZCBjb25uZWN0IGVsZW1lbnRzLlxuICAgICAgICAgICAgc2NvcGVfQmFzZSA9IGFkZFNsaWRlcihzY29wZV9UYXJnZXQpO1xuICAgICAgICAgICAgYWRkRWxlbWVudHMob3B0aW9ucy5jb25uZWN0LCBzY29wZV9CYXNlKTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB1c2VyIGV2ZW50cy5cbiAgICAgICAgICAgIGJpbmRTbGlkZXJFdmVudHMob3B0aW9ucy5ldmVudHMpO1xuICAgICAgICAgICAgLy8gVXNlIHRoZSBwdWJsaWMgdmFsdWUgbWV0aG9kIHRvIHNldCB0aGUgc3RhcnQgdmFsdWVzLlxuICAgICAgICAgICAgdmFsdWVTZXQob3B0aW9ucy5zdGFydCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5waXBzKSB7XG4gICAgICAgICAgICAgICAgcGlwcyhvcHRpb25zLnBpcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9vbHRpcHMpIHtcbiAgICAgICAgICAgICAgICB0b29sdGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJpYSgpO1xuICAgICAgICB9XG4gICAgICAgIHNldHVwU2xpZGVyKCk7XG4gICAgICAgIHZhciBzY29wZV9TZWxmID0ge1xuICAgICAgICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgICAgICAgIHN0ZXBzOiBnZXROZXh0U3RlcHMsXG4gICAgICAgICAgICBvbjogYmluZEV2ZW50LFxuICAgICAgICAgICAgb2ZmOiByZW1vdmVFdmVudCxcbiAgICAgICAgICAgIGdldDogdmFsdWVHZXQsXG4gICAgICAgICAgICBzZXQ6IHZhbHVlU2V0LFxuICAgICAgICAgICAgc2V0SGFuZGxlOiB2YWx1ZVNldEhhbmRsZSxcbiAgICAgICAgICAgIHJlc2V0OiB2YWx1ZVJlc2V0LFxuICAgICAgICAgICAgLy8gRXhwb3NlZCBmb3IgdW5pdCB0ZXN0aW5nLCBkb24ndCB1c2UgdGhpcyBpbiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgX19tb3ZlSGFuZGxlczogZnVuY3Rpb24gKHVwd2FyZCwgcHJvcG9zYWwsIGhhbmRsZU51bWJlcnMpIHtcbiAgICAgICAgICAgICAgICBtb3ZlSGFuZGxlcyh1cHdhcmQsIHByb3Bvc2FsLCBzY29wZV9Mb2NhdGlvbnMsIGhhbmRsZU51bWJlcnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9yaWdpbmFsT3B0aW9ucyxcbiAgICAgICAgICAgIHVwZGF0ZU9wdGlvbnM6IHVwZGF0ZU9wdGlvbnMsXG4gICAgICAgICAgICB0YXJnZXQ6IHNjb3BlX1RhcmdldCxcbiAgICAgICAgICAgIHJlbW92ZVBpcHM6IHJlbW92ZVBpcHMsXG4gICAgICAgICAgICByZW1vdmVUb29sdGlwczogcmVtb3ZlVG9vbHRpcHMsXG4gICAgICAgICAgICBnZXRQb3NpdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfTG9jYXRpb25zLnNsaWNlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0VG9vbHRpcHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVfVG9vbHRpcHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0T3JpZ2luczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZV9IYW5kbGVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBpcHM6IHBpcHMsIC8vIElzc3VlICM1OTRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNjb3BlX1NlbGY7XG4gICAgfVxuICAgIC8vIFJ1biB0aGUgc3RhbmRhcmQgaW5pdGlhbGl6ZXJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKHRhcmdldCwgb3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQubm9kZU5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IGNyZWF0ZSByZXF1aXJlcyBhIHNpbmdsZSBlbGVtZW50LCBnb3Q6IFwiICsgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgc2xpZGVyIHdhcyBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgICAgICBpZiAodGFyZ2V0Lm5vVWlTbGlkZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXI6IFNsaWRlciB3YXMgYWxyZWFkeSBpbml0aWFsaXplZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGVzdCB0aGUgb3B0aW9ucyBhbmQgY3JlYXRlIHRoZSBzbGlkZXIgZW52aXJvbm1lbnQ7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGVzdE9wdGlvbnMob3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgdmFyIGFwaSA9IHNjb3BlKHRhcmdldCwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zKTtcbiAgICAgICAgdGFyZ2V0Lm5vVWlTbGlkZXIgPSBhcGk7XG4gICAgICAgIHJldHVybiBhcGk7XG4gICAgfVxuICAgIHZhciBub3Vpc2xpZGVyID0ge1xuICAgICAgICAvLyBFeHBvc2VkIGZvciB1bml0IHRlc3RpbmcsIGRvbid0IHVzZSB0aGlzIGluIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICAgIF9fc3BlY3RydW06IFNwZWN0cnVtLFxuICAgICAgICAvLyBBIHJlZmVyZW5jZSB0byB0aGUgZGVmYXVsdCBjbGFzc2VzLCBhbGxvd3MgZ2xvYmFsIGNoYW5nZXMuXG4gICAgICAgIC8vIFVzZSB0aGUgY3NzQ2xhc3NlcyBvcHRpb24gZm9yIGNoYW5nZXMgdG8gb25lIHNsaWRlci5cbiAgICAgICAgY3NzQ2xhc3NlczogY3NzQ2xhc3NlcyxcbiAgICAgICAgY3JlYXRlOiBpbml0aWFsaXplLFxuICAgIH07XG5cbiAgICBleHBvcnRzLmNyZWF0ZSA9IGluaXRpYWxpemU7XG4gICAgZXhwb3J0cy5jc3NDbGFzc2VzID0gY3NzQ2xhc3NlcztcbiAgICBleHBvcnRzW1wiZGVmYXVsdFwiXSA9IG5vdWlzbGlkZXI7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3Vpc2xpZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3Vpc2xpZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmRzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90eXBlRmlsdGVycy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cGVGaWx0ZXJzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcnMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNob3dDYXJkcyA9IHZvaWQgMDtcclxucmVxdWlyZShcIi4vY2FyZHMuY3NzXCIpO1xyXG5jb25zdCBjYXJ0XzEgPSByZXF1aXJlKFwiLi9jYXJ0XCIpO1xyXG5sZXQgY2FyZHNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1ibG9jaycpO1xyXG5pZiAoIWxvY2FsU3RvcmFnZS5jYXJ0KVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCAnJyk7XHJcbmZ1bmN0aW9uIHNob3dDYXJkcyhhcnJheSkge1xyXG4gICAgY2FyZHNCbG9jay5pbm5lckhUTUwgPSAnJztcclxuICAgIGlmIChhcnJheS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIGNhcmRzQmxvY2suaW5uZXJIVE1MID0gJzxoMSBjbGFzcz1cIm5vLWl0ZW1zXCI+SXRlbXMgbm90IGZvdW5kPC9oMT4nO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGNhcmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBsZXQgY2FyZERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBsZXQgZmlyc3RDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGxldCBzZWNvbmRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGxldCBjYXJkQnJhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxldCBjYXJkUG9wdWxhcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGV0IGNhcmRDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGV0IGNhcmRRdWFudGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGV0IGNhcmRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGV0IGNhcmRUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsZXQgYWRkVG9DYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY2FyZEltZy5jbGFzc05hbWUgPSBgY2FyZC1pbWcgJHthcnJheVtpXS5jc3NDbGFzc31gO1xyXG4gICAgICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQnO1xyXG4gICAgICAgIGNhcmRUaXRsZS5jbGFzc05hbWUgPSAnY2FyZC10aXRsZSc7XHJcbiAgICAgICAgY2FyZERlc2MuY2xhc3NOYW1lID0gJ2NhcmQtZGVzYyc7XHJcbiAgICAgICAgZmlyc3RDb2x1bW4uY2xhc3NOYW1lID0gJ2NhcmQtbGlzdCc7XHJcbiAgICAgICAgc2Vjb25kQ29sdW1uLmNsYXNzTmFtZSA9ICdjYXJkLWxpc3QnO1xyXG4gICAgICAgIGNhcmRCcmFuZC5jbGFzc05hbWUgPSAnY2FyZC1saXN0LWl0ZW0gY2FyZC1icmFuZCc7XHJcbiAgICAgICAgY2FyZFByaWNlLmNsYXNzTmFtZSA9ICdjYXJkLWxpc3QtaXRlbSBjYXJkLXByaWNlJztcclxuICAgICAgICBjYXJkUG9wdWxhcml0eS5jbGFzc05hbWUgPSAnY2FyZC1saXN0LWl0ZW0gY2FyZC1wb3B1bGFyJztcclxuICAgICAgICBjYXJkQ29sb3IuY2xhc3NOYW1lID0gJ2NhcmQtbGlzdC1pdGVtIGNhcmQtY29sb3InO1xyXG4gICAgICAgIGNhcmRRdWFudGl0eS5jbGFzc05hbWUgPSAnY2FyZC1saXN0LWl0ZW0gY2FyZC1xdWFudGl0eSc7XHJcbiAgICAgICAgY2FyZFR5cGUuY2xhc3NOYW1lID0gJ2NhcmQtbGlzdC1pdGVtIGNhcmQtdHlwZSc7XHJcbiAgICAgICAgIWxvY2FsU3RvcmFnZS5jYXJ0LmluY2x1ZGVzKGFycmF5W2ldLmNzc0NsYXNzKVxyXG4gICAgICAgICAgICA/IChhZGRUb0NhcnQuY2xhc3NOYW1lID0gJ2FkZC10by1jYXJ0JylcclxuICAgICAgICAgICAgOiAoYWRkVG9DYXJ0LmNsYXNzTmFtZSA9ICdhZGQtdG8tY2FydCBhY3RpdmUtYnRuJyk7XHJcbiAgICAgICAgYWRkVG9DYXJ0Lm5hbWUgPSBhcnJheVtpXS5jc3NDbGFzcztcclxuICAgICAgICBjYXJkc0Jsb2NrLmFwcGVuZChjYXJkKTtcclxuICAgICAgICBjYXJkLmFwcGVuZChjYXJkSW1nKTtcclxuICAgICAgICBjYXJkLmFwcGVuZChjYXJkVGl0bGUpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kKGNhcmREZXNjKTtcclxuICAgICAgICBjYXJkRGVzYy5hcHBlbmQoZmlyc3RDb2x1bW4pO1xyXG4gICAgICAgIGNhcmREZXNjLmFwcGVuZChzZWNvbmRDb2x1bW4pO1xyXG4gICAgICAgIGNhcmREZXNjLmFwcGVuZChhZGRUb0NhcnQpO1xyXG4gICAgICAgIGZpcnN0Q29sdW1uLmFwcGVuZChjYXJkQnJhbmQpO1xyXG4gICAgICAgIGZpcnN0Q29sdW1uLmFwcGVuZChjYXJkUHJpY2UpO1xyXG4gICAgICAgIGZpcnN0Q29sdW1uLmFwcGVuZChjYXJkUG9wdWxhcml0eSk7XHJcbiAgICAgICAgc2Vjb25kQ29sdW1uLmFwcGVuZChjYXJkVHlwZSk7XHJcbiAgICAgICAgc2Vjb25kQ29sdW1uLmFwcGVuZChjYXJkQ29sb3IpO1xyXG4gICAgICAgIHNlY29uZENvbHVtbi5hcHBlbmQoY2FyZFF1YW50aXR5KTtcclxuICAgICAgICBjYXJkVGl0bGUuaW5uZXJIVE1MID0gYCR7YXJyYXlbaV0uYnJhbmR9ICR7YXJyYXlbaV0ubW9kZWx9YDtcclxuICAgICAgICBjYXJkQnJhbmQuaW5uZXJIVE1MID0gYEJyYW5kOiAke2FycmF5W2ldLmJyYW5kfTxpbWcgY2xhc3M9XCJsb2dvXCI+PC9pbWc+YDtcclxuICAgICAgICBjYXJkUHJpY2UuaW5uZXJIVE1MID0gYFByaWNlOiAke2FycmF5W2ldLnByaWNlfSRgO1xyXG4gICAgICAgIGNhcmRQb3B1bGFyaXR5LmlubmVySFRNTCA9IGBQb3B1bGFyaXR5OiAke2FycmF5W2ldLnBvcHVsYXJpdHl9YDtcclxuICAgICAgICBjYXJkUXVhbnRpdHkuaW5uZXJIVE1MID0gYFF1YW50aXR5IEluIFN0b2NrOiAke2FycmF5W2ldLnF1YW50aXR5SW5TdG9ja31gO1xyXG4gICAgICAgIGNhcmRDb2xvci5pbm5lckhUTUwgPSBgQ29sb3I6ICR7YXJyYXlbaV0uY29sb3J9YDtcclxuICAgICAgICBjYXJkVHlwZS5pbm5lckhUTUwgPSBgVHlwZTogJHthcnJheVtpXS50eXBlfWA7XHJcbiAgICAgICAgYWRkVG9DYXJ0LmlubmVySFRNTCA9ICdBZGQgVG8gQ2FydCc7XHJcbiAgICAgICAgKDAsIGNhcnRfMS5jYXJ0KShhZGRUb0NhcnQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc2hvd0NhcmRzID0gc2hvd0NhcmRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmNhcnQgPSB2b2lkIDA7XHJcbmZ1bmN0aW9uIGNhcnQoZWwpIHtcclxuICAgIGxldCBjYXJ0Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1jb3VudCcpO1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlLWJ0bicpO1xyXG4gICAgICAgIGlmIChlbC5jbGFzc05hbWUgPT0gJ2FkZC10by1jYXJ0IGFjdGl2ZS1idG4nKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jYXJ0ICs9IGAke2VsLm5hbWV9IGA7XHJcbiAgICAgICAgICAgIGNhcnRDb3VudC5pbm5lckhUTUwgPSBTdHJpbmcoTnVtYmVyKGNhcnRDb3VudC5pbm5lckhUTUwpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2FydCA9IGxvY2FsU3RvcmFnZS5jYXJ0LnJlcGxhY2UoZWwubmFtZSwgJycpO1xyXG4gICAgICAgICAgICBjYXJ0Q291bnQuaW5uZXJIVE1MID0gU3RyaW5nKE51bWJlcihjYXJ0Q291bnQuaW5uZXJIVE1MKSAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuY2FydCA9IGNhcnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNhcmRzXzEgPSByZXF1aXJlKFwiLi4vY2FyZHMvY2FyZHNcIik7XHJcbmNvbnN0IHNvcnRCeVZhbHVlXzEgPSByZXF1aXJlKFwiLi4vZnVuY3Rpb25zL3NvcnRCeVZhbHVlXCIpO1xyXG5sZXQgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2Nhci1jb2xvcicpO1xyXG5pZiAoIWxvY2FsU3RvcmFnZS5jb2xvcilcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2xvcicsICcnKTtcclxuY29sb3JzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoZWwuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAoMCwgY2FyZHNfMS5zaG93Q2FyZHMpKCgwLCBzb3J0QnlWYWx1ZV8xLnNvcnRCeVR5cGUpKCdjb2xvcicsIGVsLnZhbHVlLCB0cnVlKSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jb2xvciArPSBgJHtlbC52YWx1ZX0gYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICgwLCBjYXJkc18xLnNob3dDYXJkcykoKDAsIHNvcnRCeVZhbHVlXzEuc29ydEJ5VHlwZSkoJ2NvbG9yJywgZWwudmFsdWUsIGZhbHNlKSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jb2xvciA9IGxvY2FsU3RvcmFnZS5jb2xvci5yZXBsYWNlKGVsLnZhbHVlLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjYXJkc18xID0gcmVxdWlyZShcIi4uL2NhcmRzL2NhcmRzXCIpO1xyXG5jb25zdCBzb3J0QnlWYWx1ZV8xID0gcmVxdWlyZShcIi4uL2Z1bmN0aW9ucy9zb3J0QnlWYWx1ZVwiKTtcclxubGV0IHBvcHVsYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdWxhci1idG4nKTtcclxuaWYgKCFsb2NhbFN0b3JhZ2UucG9wdWxhcilcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3B1bGFyJywgJycpO1xyXG5wb3B1bGFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKHBvcHVsYXJCdG4uY2hlY2tlZCkge1xyXG4gICAgICAgICgwLCBjYXJkc18xLnNob3dDYXJkcykoKDAsIHNvcnRCeVZhbHVlXzEuc29ydEJ5VHlwZSkoJ3BvcHVsYXJpdHknLCBwb3B1bGFyQnRuLnZhbHVlLCB0cnVlKSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnBvcHVsYXIgPSAnWWVzJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgICgwLCBjYXJkc18xLnNob3dDYXJkcykoKDAsIHNvcnRCeVZhbHVlXzEuc29ydEJ5VHlwZSkoJ3BvcHVsYXJpdHknLCBwb3B1bGFyQnRuLnZhbHVlLCBmYWxzZSkpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5wb3B1bGFyID0gJ05vJztcclxuICAgIH1cclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmxldCBub1VpU2xpZGVyID0gcmVxdWlyZSgnbm91aXNsaWRlcicpO1xyXG5sZXQgd051bWIgPSByZXF1aXJlKCd3bnVtYicpO1xyXG5yZXF1aXJlKFwibm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzXCIpO1xyXG5jb25zdCBjYXJkc18xID0gcmVxdWlyZShcIi4uL2NhcmRzL2NhcmRzXCIpO1xyXG5jb25zdCBzb3J0QnlWYWx1ZV8xID0gcmVxdWlyZShcIi4uL2Z1bmN0aW9ucy9zb3J0QnlWYWx1ZVwiKTtcclxubGV0IHF1YW50aXR5U2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5LXNsaWRlcicpO1xyXG5sZXQgcHJpY2VTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpY2Utc2xpZGVyJyk7XHJcbmlmICghbG9jYWxTdG9yYWdlLnF1YW50aXR5KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncXVhbnRpdHknLCAnMSA1Jyk7XHJcbn1cclxuaWYgKCFsb2NhbFN0b3JhZ2UucHJpY2UpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmljZScsICc1NTAwMCAxNDAwMDAnKTtcclxufVxyXG5ub1VpU2xpZGVyLmNyZWF0ZShxdWFudGl0eVNsaWRlciwge1xyXG4gICAgc3RhcnQ6IFtOdW1iZXIobG9jYWxTdG9yYWdlLnF1YW50aXR5LnNwbGl0KCcgJylbMF0pLCBOdW1iZXIobG9jYWxTdG9yYWdlLnF1YW50aXR5LnNwbGl0KCcgJylbMV0pXSxcclxuICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICBzdGVwOiAxLFxyXG4gICAgdG9vbHRpcHM6IHRydWUsXHJcbiAgICByYW5nZToge1xyXG4gICAgICAgIG1pbjogMSxcclxuICAgICAgICBtYXg6IDUsXHJcbiAgICB9LFxyXG4gICAgcGlwczoge1xyXG4gICAgICAgIG1vZGU6ICdwb3NpdGlvbnMnLFxyXG4gICAgICAgIHN0ZXBwZWQ6IHRydWUsXHJcbiAgICAgICAgdmFsdWVzOiBbMCwgMjUsIDUwLCA3NSwgMTAwXSxcclxuICAgICAgICBkZW5zaXR5OiAzLFxyXG4gICAgfSxcclxufSk7XHJcbm5vVWlTbGlkZXIuY3JlYXRlKHByaWNlU2xpZGVyLCB7XHJcbiAgICBzdGFydDogW051bWJlcihsb2NhbFN0b3JhZ2UucHJpY2Uuc3BsaXQoJyAnKVswXSksIE51bWJlcihsb2NhbFN0b3JhZ2UucHJpY2Uuc3BsaXQoJyAnKVsxXSldLFxyXG4gICAgY29ubmVjdDogdHJ1ZSxcclxuICAgIHN0ZXA6IDUwMDAsXHJcbiAgICB0b29sdGlwczogdHJ1ZSxcclxuICAgIHJhbmdlOiB7XHJcbiAgICAgICAgbWluOiA1NTAwMCxcclxuICAgICAgICBtYXg6IDE0MDAwMCxcclxuICAgIH0sXHJcbiAgICBwaXBzOiB7XHJcbiAgICAgICAgbW9kZTogJ3Bvc2l0aW9ucycsXHJcbiAgICAgICAgc3RlcHBlZDogdHJ1ZSxcclxuICAgICAgICB2YWx1ZXM6IFswLCA1MCwgMTAwXSxcclxuICAgICAgICBkZW5zaXR5OiAzLFxyXG4gICAgICAgIGZvcm1hdDogd051bWIoe1xyXG4gICAgICAgICAgICBkZWNpbWFsczogMCxcclxuICAgICAgICAgICAgcHJlZml4OiAnJCcsXHJcbiAgICAgICAgfSksXHJcbiAgICB9LFxyXG59KTtcclxucXVhbnRpdHlTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsZXQgdG9vbHRpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdub1VpLXRvb2x0aXAnKTtcclxuICAgIGxldCBxdWFuaXR5VmFsdWVzID0gW3Rvb2x0aXBzWzBdLmlubmVySFRNTCwgdG9vbHRpcHNbMV0uaW5uZXJIVE1MXTtcclxuICAgICgwLCBjYXJkc18xLnNob3dDYXJkcykoKDAsIHNvcnRCeVZhbHVlXzEuc29ydEJ5VHlwZSkoJ3F1YW50aXR5JywgcXVhbml0eVZhbHVlcywgdHJ1ZSkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnF1YW50aXR5ID0gYCR7dG9vbHRpcHNbMF0uaW5uZXJIVE1MfSAke3Rvb2x0aXBzWzFdLmlubmVySFRNTH1gO1xyXG59KTtcclxucHJpY2VTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsZXQgdG9vbHRpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdub1VpLXRvb2x0aXAnKTtcclxuICAgIGxldCBwcmljZVZhbHVlcyA9IFt0b29sdGlwc1syXS5pbm5lckhUTUwsIHRvb2x0aXBzWzNdLmlubmVySFRNTF07XHJcbiAgICAoMCwgY2FyZHNfMS5zaG93Q2FyZHMpKCgwLCBzb3J0QnlWYWx1ZV8xLnNvcnRCeVR5cGUpKCdwcmljZScsIHByaWNlVmFsdWVzLCB0cnVlKSk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucHJpY2UgPSBgJHt0b29sdGlwc1syXS5pbm5lckhUTUx9ICR7dG9vbHRpcHNbM10uaW5uZXJIVE1MfWA7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxubGV0IHJlc2V0RmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1maWx0ZXJzJyk7XHJcbmxldCByZXNldFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtcGFnZScpO1xyXG5yZXNldEZpbHRlcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsZXQgY2FydEZpbHRlcnMgPSBsb2NhbFN0b3JhZ2UuY2FydDtcclxuICAgIGxldCBzb3J0RmlsdGVycyA9IGxvY2FsU3RvcmFnZS5zb3J0O1xyXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIGNhcnRGaWx0ZXJzKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzb3J0Jywgc29ydEZpbHRlcnMpO1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbn0pO1xyXG5yZXNldFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY2FyZHNfMSA9IHJlcXVpcmUoXCIuLi9jYXJkcy9jYXJkc1wiKTtcclxuY29uc3Qgc29ydEJ5VmFsdWVfMSA9IHJlcXVpcmUoXCIuLi9mdW5jdGlvbnMvc29ydEJ5VmFsdWVcIik7XHJcbmxldCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XHJcbmxldCBzb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQnKTtcclxuaWYgKCFsb2NhbFN0b3JhZ2Uuc29ydClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzb3J0JywgJycpO1xyXG5pZiAoIWxvY2FsU3RvcmFnZS5zZWFyY2gpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoJywgJycpO1xyXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAoMCwgY2FyZHNfMS5zaG93Q2FyZHMpKCgwLCBzb3J0QnlWYWx1ZV8xLnNvcnRCeVR5cGUpKCdzZWFyY2gnLCBzZWFyY2gudmFsdWUsIHRydWUpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZWFyY2ggPSBzZWFyY2gudmFsdWU7XHJcbn0pO1xyXG5zb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICgwLCBjYXJkc18xLnNob3dDYXJkcykoKDAsIHNvcnRCeVZhbHVlXzEuc29ydEJ5VHlwZSkoJ3NvcnQnLCBzb3J0LnZhbHVlLCB0cnVlKSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc29ydCA9IHNvcnQudmFsdWU7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjYXJkc18xID0gcmVxdWlyZShcIi4uL2NhcmRzL2NhcmRzXCIpO1xyXG5jb25zdCBzb3J0QnlWYWx1ZV8xID0gcmVxdWlyZShcIi4uL2Z1bmN0aW9ucy9zb3J0QnlWYWx1ZVwiKTtcclxucmVxdWlyZShcIi4vdHlwZUZpbHRlcnMuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi9jb2xvckZpbHRlcnNcIik7XHJcbmxldCB0eXBlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdjYXItdHlwZScpO1xyXG5pZiAoIWxvY2FsU3RvcmFnZS50eXBlcylcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0eXBlcycsICcnKTtcclxudHlwZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChlbC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICgwLCBjYXJkc18xLnNob3dDYXJkcykoKDAsIHNvcnRCeVZhbHVlXzEuc29ydEJ5VHlwZSkoJ3R5cGUnLCBlbC52YWx1ZSwgdHJ1ZSkpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UudHlwZXMgKz0gYCR7ZWwudmFsdWV9IGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAoMCwgY2FyZHNfMS5zaG93Q2FyZHMpKCgwLCBzb3J0QnlWYWx1ZV8xLnNvcnRCeVR5cGUpKCd0eXBlJywgZWwudmFsdWUsIGZhbHNlKSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS50eXBlcyA9IGxvY2FsU3RvcmFnZS50eXBlcy5yZXBsYWNlKGVsLnZhbHVlLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmNoZWNrTFMgPSB2b2lkIDA7XHJcbmNvbnN0IGNhcmRzXzEgPSByZXF1aXJlKFwiLi4vY2FyZHMvY2FyZHNcIik7XHJcbmNvbnN0IHNvcnRCeVZhbHVlXzEgPSByZXF1aXJlKFwiLi9zb3J0QnlWYWx1ZVwiKTtcclxuZnVuY3Rpb24gY2hlY2tMUygpIHtcclxuICAgIGNoZWNrVHlwZSgpO1xyXG4gICAgY2hlY2tDb2xvcigpO1xyXG4gICAgY2hlY2tQb3B1bGFyKCk7XHJcbiAgICBjaGVja1NlYXJjaCgpO1xyXG4gICAgY2hlY2tTb3J0KCk7XHJcbiAgICBjaGVja1JhbmdlcygpO1xyXG4gICAgY2hlY2tDYXJ0KCk7XHJcbn1cclxuZXhwb3J0cy5jaGVja0xTID0gY2hlY2tMUztcclxuZnVuY3Rpb24gY2hlY2tUeXBlKCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS50eXBlcykge1xyXG4gICAgICAgIGxldCBhcnIgPSBsb2NhbFN0b3JhZ2UudHlwZXMudHJpbSgpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbGV0IHR5cGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2Nhci10eXBlJyk7XHJcbiAgICAgICAgdHlwZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC52YWx1ZSA9PSBhcnJbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAoMCwgY2FyZHNfMS5zaG93Q2FyZHMpKCgwLCBzb3J0QnlWYWx1ZV8xLnNvcnRCeVR5cGUpKCd0eXBlJywgZWwudmFsdWUsIHRydWUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNoZWNrQ29sb3IoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmNvbG9yKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IGxvY2FsU3RvcmFnZS5jb2xvci50cmltKCkuc3BsaXQoJyAnKTtcclxuICAgICAgICBsZXQgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2Nhci1jb2xvcicpO1xyXG4gICAgICAgIGNvbG9ycy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLnZhbHVlID09IGFycltpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICgwLCBjYXJkc18xLnNob3dDYXJkcykoKDAsIHNvcnRCeVZhbHVlXzEuc29ydEJ5VHlwZSkoJ2NvbG9yJywgZWwudmFsdWUsIHRydWUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNoZWNrUG9wdWxhcigpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UucG9wdWxhciA9PSAnWWVzJykge1xyXG4gICAgICAgIGxldCBwb3B1bGFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVsYXItYnRuJyk7XHJcbiAgICAgICAgKDAsIGNhcmRzXzEuc2hvd0NhcmRzKSgoMCwgc29ydEJ5VmFsdWVfMS5zb3J0QnlUeXBlKSgncG9wdWxhcml0eScsIHBvcHVsYXJCdG4udmFsdWUsIHRydWUpKTtcclxuICAgICAgICBwb3B1bGFyQnRuLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNoZWNrU2VhcmNoKCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5zZWFyY2gpIHtcclxuICAgICAgICBsZXQgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpO1xyXG4gICAgICAgIHNlYXJjaC52YWx1ZSA9IGxvY2FsU3RvcmFnZS5zZWFyY2g7XHJcbiAgICAgICAgKDAsIGNhcmRzXzEuc2hvd0NhcmRzKSgoMCwgc29ydEJ5VmFsdWVfMS5zb3J0QnlUeXBlKSgnc2VhcmNoJywgbG9jYWxTdG9yYWdlLnNlYXJjaCwgdHJ1ZSkpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNoZWNrU29ydCgpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2Uuc29ydCkge1xyXG4gICAgICAgIGxldCBzb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQnKTtcclxuICAgICAgICBzb3J0LnZhbHVlID0gbG9jYWxTdG9yYWdlLnNvcnQ7XHJcbiAgICAgICAgKDAsIGNhcmRzXzEuc2hvd0NhcmRzKSgoMCwgc29ydEJ5VmFsdWVfMS5zb3J0QnlUeXBlKSgnc29ydCcsIGxvY2FsU3RvcmFnZS5zb3J0LCB0cnVlKSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tSYW5nZXMoKSB7XHJcbiAgICAoMCwgY2FyZHNfMS5zaG93Q2FyZHMpKCgwLCBzb3J0QnlWYWx1ZV8xLnNvcnRCeVR5cGUpKCdxdWFudGl0eScsIFtsb2NhbFN0b3JhZ2UucXVhbnRpdHkuc3BsaXQoJyAnKVswXSwgbG9jYWxTdG9yYWdlLnF1YW50aXR5LnNwbGl0KCcgJylbMV1dLCB0cnVlKSk7XHJcbiAgICAoMCwgY2FyZHNfMS5zaG93Q2FyZHMpKCgwLCBzb3J0QnlWYWx1ZV8xLnNvcnRCeVR5cGUpKCdwcmljZScsIFtsb2NhbFN0b3JhZ2UucHJpY2Uuc3BsaXQoJyAnKVswXSwgbG9jYWxTdG9yYWdlLnByaWNlLnNwbGl0KCcgJylbMV1dLCB0cnVlKSk7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tDYXJ0KCkge1xyXG4gICAgbGV0IGNhcnRDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LWNvdW50Jyk7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmNhcnQudHJpbSgpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZENhcmRzID0gbG9jYWxTdG9yYWdlLmNhcnQudHJpbSgpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbGV0IGNhcnRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC10by1jYXJ0Jyk7XHJcbiAgICAgICAgY2FydEJ0bnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWxlY3RlZENhcmRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubmFtZSA9PSBzZWxlY3RlZENhcmRzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ2FkZC10by1jYXJ0IGFjdGl2ZS1idG4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2FydENvdW50LmlubmVySFRNTCA9IFN0cmluZyhzZWxlY3RlZENhcmRzLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjYXJ0Q291bnQuaW5uZXJIVE1MID0gJzAnO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc29ydEJ5TmFtZSA9IGV4cG9ydHMuc29ydEJ5VHlwZSA9IHZvaWQgMDtcclxuY29uc3QgY2Fyc18xID0gcmVxdWlyZShcIi4uL3R5cGVzL2NhcnNcIik7XHJcbmxldCBjYXJUeXBlcyA9IG5ldyBBcnJheSgpO1xyXG5sZXQgY29sb3JGaWx0ZXJzID0gbmV3IEFycmF5KCk7XHJcbmxldCBwb3B1bGFyaXR5RmlsdGVyO1xyXG5sZXQgcXVhbml0eVZhbHVlcyA9IFsxLCA1XTtcclxubGV0IHByaWNlVmFsdWVzID0gWzU1MDAwLCAxNDAwMDBdO1xyXG5sZXQgc2VhcmNoRmlsdGVyO1xyXG5sZXQgc29ydEZpbHRlciA9ICdzb3J0TmFtZUFaJztcclxudmFyIHNvcnRUeXBlcztcclxuKGZ1bmN0aW9uIChzb3J0VHlwZXMpIHtcclxuICAgIHNvcnRUeXBlc1tcIm5hbWVcIl0gPSBcInNvcnROYW1lQVpcIjtcclxuICAgIHNvcnRUeXBlc1tcIm5hbWVSdnJcIl0gPSBcInNvcnROYW1lWkFcIjtcclxuICAgIHNvcnRUeXBlc1tcInByaWNlXCJdID0gXCJzb3J0UHJpY2VJbmNyXCI7XHJcbiAgICBzb3J0VHlwZXNbXCJwcmljZVJ2clwiXSA9IFwic29ydFByaWNlRGVjclwiO1xyXG4gICAgc29ydFR5cGVzW1wicXVhbnRpdHlcIl0gPSBcInNvcnRRdWFudGl0eUluY3JcIjtcclxuICAgIHNvcnRUeXBlc1tcInF1YW50aXR5UnZyXCJdID0gXCJzb3J0UXVhbnRpdHlEZWNyXCI7XHJcbn0pKHNvcnRUeXBlcyB8fCAoc29ydFR5cGVzID0ge30pKTtcclxuZnVuY3Rpb24gc29ydEJ5VHlwZSh0eXBlLCB2YWx1ZSwgc2hvd0h0bWwpIHtcclxuICAgIGxldCBzb3J0ZWRBcnIgPSBjYXJzXzEuYWxsQ2Fycy5zbGljZSgpO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAndHlwZSc6XHJcbiAgICAgICAgICAgIGlmIChzaG93SHRtbClcclxuICAgICAgICAgICAgICAgIGNhclR5cGVzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBjYXJUeXBlcy5zcGxpY2UoY2FyVHlwZXMuaW5kZXhPZih2YWx1ZSksIDEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdjb2xvcic6XHJcbiAgICAgICAgICAgIGlmIChzaG93SHRtbClcclxuICAgICAgICAgICAgICAgIGNvbG9yRmlsdGVycy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgY29sb3JGaWx0ZXJzLnNwbGljZShjb2xvckZpbHRlcnMuaW5kZXhPZih2YWx1ZSksIDEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdwb3B1bGFyaXR5JzpcclxuICAgICAgICAgICAgaWYgKHNob3dIdG1sKVxyXG4gICAgICAgICAgICAgICAgcG9wdWxhcml0eUZpbHRlciA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHBvcHVsYXJpdHlGaWx0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncXVhbnRpdHknOlxyXG4gICAgICAgICAgICBxdWFuaXR5VmFsdWVzWzBdID0gTnVtYmVyKHZhbHVlWzBdKTtcclxuICAgICAgICAgICAgcXVhbml0eVZhbHVlc1sxXSA9IE51bWJlcih2YWx1ZVsxXSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3ByaWNlJzpcclxuICAgICAgICAgICAgcHJpY2VWYWx1ZXNbMF0gPSBOdW1iZXIodmFsdWVbMF0pO1xyXG4gICAgICAgICAgICBwcmljZVZhbHVlc1sxXSA9IE51bWJlcih2YWx1ZVsxXSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NlYXJjaCc6XHJcbiAgICAgICAgICAgIHNlYXJjaEZpbHRlciA9IFN0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NvcnQnOlxyXG4gICAgICAgICAgICBzb3J0RmlsdGVyID0gU3RyaW5nKHZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBpZiAoY2FyVHlwZXMubGVuZ3RoICE9PSAzICYmIGNhclR5cGVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHNvcnRlZEFyciA9IHNvcnRlZEFyci5maWx0ZXIoKGNhcikgPT4gY2FyVHlwZXMuaW5jbHVkZXMoY2FyLnR5cGUpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xvckZpbHRlcnMubGVuZ3RoICE9PSA2ICYmIGNvbG9yRmlsdGVycy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBzb3J0ZWRBcnIgPSBzb3J0ZWRBcnIuZmlsdGVyKChjYXIpID0+IGNvbG9yRmlsdGVycy5pbmNsdWRlcyhjYXIuY29sb3IpKTtcclxuICAgIH1cclxuICAgIGlmIChwb3B1bGFyaXR5RmlsdGVyKSB7XHJcbiAgICAgICAgc29ydGVkQXJyID0gc29ydGVkQXJyLmZpbHRlcigoY2FyKSA9PiBjYXIucG9wdWxhcml0eSA9PSAnWWVzJyk7XHJcbiAgICB9XHJcbiAgICBzb3J0ZWRBcnIgPSBzb3J0ZWRBcnIuZmlsdGVyKChjYXIpID0+IGNhci5xdWFudGl0eUluU3RvY2sgPj0gcXVhbml0eVZhbHVlc1swXSAmJiBjYXIucXVhbnRpdHlJblN0b2NrIDw9IHF1YW5pdHlWYWx1ZXNbMV0pO1xyXG4gICAgc29ydGVkQXJyID0gc29ydGVkQXJyLmZpbHRlcigoY2FyKSA9PiBjYXIucHJpY2UgPj0gcHJpY2VWYWx1ZXNbMF0gJiYgY2FyLnByaWNlIDw9IHByaWNlVmFsdWVzWzFdKTtcclxuICAgIGlmIChzZWFyY2hGaWx0ZXIpIHtcclxuICAgICAgICBzb3J0ZWRBcnIgPSBzb3J0ZWRBcnIuZmlsdGVyKChjYXIpID0+IChjYXIuYnJhbmQgKyAnICcgKyBjYXIubW9kZWwpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoRmlsdGVyLnRvTG93ZXJDYXNlKCkpKTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoc29ydEZpbHRlcikge1xyXG4gICAgICAgIGNhc2Ugc29ydFR5cGVzLm5hbWU6XHJcbiAgICAgICAgICAgIHNvcnRlZEFyciA9IHNvcnRCeU5hbWUoc29ydGVkQXJyLCAnbW9kZWwnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBzb3J0VHlwZXMubmFtZVJ2cjpcclxuICAgICAgICAgICAgc29ydGVkQXJyID0gc29ydEJ5TmFtZShzb3J0ZWRBcnIsICdtb2RlbCcpLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBzb3J0VHlwZXMucHJpY2U6XHJcbiAgICAgICAgICAgIHNvcnRlZEFyciA9IHNvcnRlZEFyci5zb3J0KChhLCBiKSA9PiBhLnByaWNlIC0gYi5wcmljZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Ugc29ydFR5cGVzLnByaWNlUnZyOlxyXG4gICAgICAgICAgICBzb3J0ZWRBcnIgPSBzb3J0ZWRBcnIuc29ydCgoYSwgYikgPT4gYS5wcmljZSAtIGIucHJpY2UpLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBzb3J0VHlwZXMucXVhbnRpdHk6XHJcbiAgICAgICAgICAgIHNvcnRlZEFyciA9IHNvcnRlZEFyci5zb3J0KChhLCBiKSA9PiBhLnF1YW50aXR5SW5TdG9jayAtIGIucXVhbnRpdHlJblN0b2NrKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBzb3J0VHlwZXMucXVhbnRpdHlSdnI6XHJcbiAgICAgICAgICAgIHNvcnRlZEFyciA9IHNvcnRlZEFyci5zb3J0KChhLCBiKSA9PiBhLnF1YW50aXR5SW5TdG9jayAtIGIucXVhbnRpdHlJblN0b2NrKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNvcnRlZEFycjtcclxufVxyXG5leHBvcnRzLnNvcnRCeVR5cGUgPSBzb3J0QnlUeXBlO1xyXG5mdW5jdGlvbiBzb3J0QnlOYW1lKGFycmF5LCB2YWx1ZSkge1xyXG4gICAgbGV0IGFyciA9IGFycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICBpZiAoYVt2YWx1ZV0gPCBiW3ZhbHVlXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhW3ZhbHVlXSA+IGJbdmFsdWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFycjtcclxufVxyXG5leHBvcnRzLnNvcnRCeU5hbWUgPSBzb3J0QnlOYW1lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmFsbENhcnMgPSB2b2lkIDA7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxucmVxdWlyZShcIi4vY2Fycy5jc3NcIik7XHJcbmxldCBjYXIxID0gbmV3IHR5cGVzXzEuQ2FyKCdNNScsIDEwNTAwMCwgJ1llcycsIDMsICdtNScsICdSZWQnLCAnU2VkYW4nKTtcclxubGV0IGNhcjIgPSBuZXcgdHlwZXNfMS5DYXIoJ004JywgMTMwMDAwLCAnTm8nLCA0LCAnbTgnLCAnUmVkJywgJ1NlZGFuJyk7XHJcbmxldCBjYXIzID0gbmV3IHR5cGVzXzEuQ2FyKCdYNCBNJywgNzUwMDAsICdObycsIDEsICd4NG0nLCAnWWVsbG93JywgJ1NVVicpO1xyXG5sZXQgY2FyNCA9IG5ldyB0eXBlc18xLkNhcignWDYnLCA3MDAwMCwgJ05vJywgMSwgJ3g2JywgJ0dyYXknLCAnU1VWJyk7XHJcbmxldCBjYXI1ID0gbmV3IHR5cGVzXzEuQ2FyKCdYNycsIDE0MDAwMCwgJ1llcycsIDUsICd4NycsICdCbGFjaycsICdTVVYnKTtcclxubGV0IGNhcjYgPSBuZXcgdHlwZXNfMS5DYXIoJzUgU2VyaWVzJywgNTUwMDAsICdObycsIDMsICdzNScsICdCbHVlJywgJ1NlZGFuJyk7XHJcbmxldCBjYXI3ID0gbmV3IHR5cGVzXzEuQ2FyKCc4IFNlcmllcycsIDkwMDAwLCAnWWVzJywgMiwgJ3M4JywgJ0JsdWUnLCAnU2VkYW4nKTtcclxubGV0IGNhcjggPSBuZXcgdHlwZXNfMS5DYXIoJ0k0JywgNjAwMDAsICdObycsIDQsICdpNCcsICdHcmF5JywgJ0VsZWN0cmljLUNhcicpO1xyXG5sZXQgY2FyOSA9IG5ldyB0eXBlc18xLkNhcignSTcnLCAxMjAwMDAsICdZZXMnLCAxLCAnaTcnLCAnV2hpdGUnLCAnRWxlY3RyaWMtQ2FyJyk7XHJcbmxldCBjYXIxMCA9IG5ldyB0eXBlc18xLkNhcignSVgnLCA5MDAwMCwgJ1llcycsIDQsICdpeCcsICdXaGl0ZScsICdFbGVjdHJpYy1DYXInKTtcclxubGV0IGNhcjExID0gbmV3IHR5cGVzXzEuQ2FyKCdYNSBNJywgMTA1MDAwLCAnTm8nLCAzLCAneDVtJywgJ0JsdWUnLCAnU1VWJyk7XHJcbmxldCBjYXIxMiA9IG5ldyB0eXBlc18xLkNhcignWjQnLCA1NTAwMCwgJ05vJywgMiwgJ3o0JywgJ1doaXRlJywgJ1NlZGFuJyk7XHJcbmV4cG9ydHMuYWxsQ2FycyA9IFtjYXIxLCBjYXIyLCBjYXIzLCBjYXI0LCBjYXI1LCBjYXI2LCBjYXI3LCBjYXI4LCBjYXI5LCBjYXIxMCwgY2FyMTEsIGNhcjEyXTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5DYXJ0ID0gZXhwb3J0cy5DYXIgPSB2b2lkIDA7XHJcbmNsYXNzIENhciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCwgcHJpY2UsIHBvcHVsYXJpdHksIHF1YW50aXR5SW5TdG9jaywgY3NzQ2xhc3MsIGNvbG9yLCB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgIHRoaXMuYnJhbmQgPSAnQk1XJztcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICAgICAgdGhpcy5wb3B1bGFyaXR5ID0gcG9wdWxhcml0eTtcclxuICAgICAgICB0aGlzLnF1YW50aXR5SW5TdG9jayA9IHF1YW50aXR5SW5TdG9jaztcclxuICAgICAgICB0aGlzLmNzc0NsYXNzID0gY3NzQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5DYXIgPSBDYXI7XHJcbmNsYXNzIENhcnQge1xyXG4gICAgcHV0VG9DYXJ0KGVsLCBjb3VudEVsKSB7XHJcbiAgICAgICAgY291bnRFbC5pbm5lckhUTUwgPSBgJHtOdW1iZXIoY291bnRFbC5pbm5lckhUTUwpICsgMX1gO1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9ICdBZGRlZCBUbyBDYXJ0JztcclxuICAgIH1cclxuICAgIHJlbW92ZUZyb21DYXJ0KGVsLCBjb3VudEVsKSB7XHJcbiAgICAgICAgY291bnRFbC5pbm5lckhUTUwgPSBgJHtOdW1iZXIoY291bnRFbC5pbm5lckhUTUwpIC0gMX1gO1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9ICdBZGQgVG8gQ2FydCc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5DYXJ0ID0gQ2FydDtcclxuIiwiKGZ1bmN0aW9uKGZhY3RvcnkpIHtcclxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cclxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgLy8gTm9kZS9Db21tb25KU1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xyXG4gICAgd2luZG93LndOdW1iID0gZmFjdG9yeSgpO1xyXG4gIH1cclxufSkoZnVuY3Rpb24oKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIHZhciBGb3JtYXRPcHRpb25zID0gW1xyXG4gICAgXCJkZWNpbWFsc1wiLFxyXG4gICAgXCJ0aG91c2FuZFwiLFxyXG4gICAgXCJtYXJrXCIsXHJcbiAgICBcInByZWZpeFwiLFxyXG4gICAgXCJzdWZmaXhcIixcclxuICAgIFwiZW5jb2RlclwiLFxyXG4gICAgXCJkZWNvZGVyXCIsXHJcbiAgICBcIm5lZ2F0aXZlQmVmb3JlXCIsXHJcbiAgICBcIm5lZ2F0aXZlXCIsXHJcbiAgICBcImVkaXRcIixcclxuICAgIFwidW5kb1wiXHJcbiAgXTtcclxuXHJcbiAgLy8gR2VuZXJhbFxyXG5cclxuICAvLyBSZXZlcnNlIGEgc3RyaW5nXHJcbiAgZnVuY3Rpb24gc3RyUmV2ZXJzZShhKSB7XHJcbiAgICByZXR1cm4gYVxyXG4gICAgICAuc3BsaXQoXCJcIilcclxuICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAuam9pbihcIlwiKTtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIGEgc3RyaW5nIHN0YXJ0cyB3aXRoIGEgc3BlY2lmaWVkIHByZWZpeC5cclxuICBmdW5jdGlvbiBzdHJTdGFydHNXaXRoKGlucHV0LCBtYXRjaCkge1xyXG4gICAgcmV0dXJuIGlucHV0LnN1YnN0cmluZygwLCBtYXRjaC5sZW5ndGgpID09PSBtYXRjaDtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlzIGEgc3RyaW5nIGVuZHMgaW4gYSBzcGVjaWZpZWQgc3VmZml4LlxyXG4gIGZ1bmN0aW9uIHN0ckVuZHNXaXRoKGlucHV0LCBtYXRjaCkge1xyXG4gICAgcmV0dXJuIGlucHV0LnNsaWNlKC0xICogbWF0Y2gubGVuZ3RoKSA9PT0gbWF0Y2g7XHJcbiAgfVxyXG5cclxuICAvLyBUaHJvdyBhbiBlcnJvciBpZiBmb3JtYXR0aW5nIG9wdGlvbnMgYXJlIGluY29tcGF0aWJsZS5cclxuICBmdW5jdGlvbiB0aHJvd0VxdWFsRXJyb3IoRiwgYSwgYikge1xyXG4gICAgaWYgKChGW2FdIHx8IEZbYl0pICYmIEZbYV0gPT09IEZbYl0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgYSBudW1iZXIgaXMgZmluaXRlIGFuZCBub3QgTmFOXHJcbiAgZnVuY3Rpb24gaXNWYWxpZE51bWJlcihpbnB1dCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZShpbnB1dCk7XHJcbiAgfVxyXG5cclxuICAvLyBQcm92aWRlIHJvdW5kaW5nLWFjY3VyYXRlIHRvRml4ZWQgbWV0aG9kLlxyXG4gIC8vIEJvcnJvd2VkOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTMyMzMzMC83NzUyNjVcclxuICBmdW5jdGlvbiB0b0ZpeGVkKHZhbHVlLCBleHApIHtcclxuICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdChcImVcIik7XHJcbiAgICB2YWx1ZSA9IE1hdGgucm91bmQoKyh2YWx1ZVswXSArIFwiZVwiICsgKHZhbHVlWzFdID8gK3ZhbHVlWzFdICsgZXhwIDogZXhwKSkpO1xyXG4gICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KFwiZVwiKTtcclxuICAgIHJldHVybiAoKyh2YWx1ZVswXSArIFwiZVwiICsgKHZhbHVlWzFdID8gK3ZhbHVlWzFdIC0gZXhwIDogLWV4cCkpKS50b0ZpeGVkKGV4cCk7XHJcbiAgfVxyXG5cclxuICAvLyBGb3JtYXR0aW5nXHJcblxyXG4gIC8vIEFjY2VwdCBhIG51bWJlciBhcyBpbnB1dCwgb3V0cHV0IGZvcm1hdHRlZCBzdHJpbmcuXHJcbiAgZnVuY3Rpb24gZm9ybWF0VG8oXHJcbiAgICBkZWNpbWFscyxcclxuICAgIHRob3VzYW5kLFxyXG4gICAgbWFyayxcclxuICAgIHByZWZpeCxcclxuICAgIHN1ZmZpeCxcclxuICAgIGVuY29kZXIsXHJcbiAgICBkZWNvZGVyLFxyXG4gICAgbmVnYXRpdmVCZWZvcmUsXHJcbiAgICBuZWdhdGl2ZSxcclxuICAgIGVkaXQsXHJcbiAgICB1bmRvLFxyXG4gICAgaW5wdXRcclxuICApIHtcclxuICAgIHZhciBvcmlnaW5hbElucHV0ID0gaW5wdXQsXHJcbiAgICAgIGlucHV0SXNOZWdhdGl2ZSxcclxuICAgICAgaW5wdXRQaWVjZXMsXHJcbiAgICAgIGlucHV0QmFzZSxcclxuICAgICAgaW5wdXREZWNpbWFscyA9IFwiXCIsXHJcbiAgICAgIG91dHB1dCA9IFwiXCI7XHJcblxyXG4gICAgLy8gQXBwbHkgdXNlciBlbmNvZGVyIHRvIHRoZSBpbnB1dC5cclxuICAgIC8vIEV4cGVjdGVkIG91dGNvbWU6IG51bWJlci5cclxuICAgIGlmIChlbmNvZGVyKSB7XHJcbiAgICAgIGlucHV0ID0gZW5jb2RlcihpbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RvcCBpZiBubyB2YWxpZCBudW1iZXIgd2FzIHByb3ZpZGVkLCB0aGUgbnVtYmVyIGlzIGluZmluaXRlIG9yIE5hTi5cclxuICAgIGlmICghaXNWYWxpZE51bWJlcihpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJvdW5kaW5nIGF3YXkgZGVjaW1hbHMgbWlnaHQgY2F1c2UgYSB2YWx1ZSBvZiAtMFxyXG4gICAgLy8gd2hlbiB1c2luZyB2ZXJ5IHNtYWxsIHJhbmdlcy4gUmVtb3ZlIHRob3NlIGNhc2VzLlxyXG4gICAgaWYgKGRlY2ltYWxzICE9PSBmYWxzZSAmJiBwYXJzZUZsb2F0KGlucHV0LnRvRml4ZWQoZGVjaW1hbHMpKSA9PT0gMCkge1xyXG4gICAgICBpbnB1dCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9ybWF0dGluZyBpcyBkb25lIG9uIGFic29sdXRlIG51bWJlcnMsXHJcbiAgICAvLyBkZWNvcmF0ZWQgYnkgYW4gb3B0aW9uYWwgbmVnYXRpdmUgc3ltYm9sLlxyXG4gICAgaWYgKGlucHV0IDwgMCkge1xyXG4gICAgICBpbnB1dElzTmVnYXRpdmUgPSB0cnVlO1xyXG4gICAgICBpbnB1dCA9IE1hdGguYWJzKGlucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWR1Y2UgdGhlIG51bWJlciBvZiBkZWNpbWFscyB0byB0aGUgc3BlY2lmaWVkIG9wdGlvbi5cclxuICAgIGlmIChkZWNpbWFscyAhPT0gZmFsc2UpIHtcclxuICAgICAgaW5wdXQgPSB0b0ZpeGVkKGlucHV0LCBkZWNpbWFscyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJhbnNmb3JtIHRoZSBudW1iZXIgaW50byBhIHN0cmluZywgc28gaXQgY2FuIGJlIHNwbGl0LlxyXG4gICAgaW5wdXQgPSBpbnB1dC50b1N0cmluZygpO1xyXG5cclxuICAgIC8vIEJyZWFrIHRoZSBudW1iZXIgb24gdGhlIGRlY2ltYWwgc2VwYXJhdG9yLlxyXG4gICAgaWYgKGlucHV0LmluZGV4T2YoXCIuXCIpICE9PSAtMSkge1xyXG4gICAgICBpbnB1dFBpZWNlcyA9IGlucHV0LnNwbGl0KFwiLlwiKTtcclxuXHJcbiAgICAgIGlucHV0QmFzZSA9IGlucHV0UGllY2VzWzBdO1xyXG5cclxuICAgICAgaWYgKG1hcmspIHtcclxuICAgICAgICBpbnB1dERlY2ltYWxzID0gbWFyayArIGlucHV0UGllY2VzWzFdO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJZiBpdCBpc24ndCBzcGxpdCwgdGhlIGVudGlyZSBudW1iZXIgd2lsbCBkby5cclxuICAgICAgaW5wdXRCYXNlID0gaW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3JvdXAgbnVtYmVycyBpbiBzZXRzIG9mIHRocmVlLlxyXG4gICAgaWYgKHRob3VzYW5kKSB7XHJcbiAgICAgIGlucHV0QmFzZSA9IHN0clJldmVyc2UoaW5wdXRCYXNlKS5tYXRjaCgvLnsxLDN9L2cpO1xyXG4gICAgICBpbnB1dEJhc2UgPSBzdHJSZXZlcnNlKGlucHV0QmFzZS5qb2luKHN0clJldmVyc2UodGhvdXNhbmQpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdGhlIG51bWJlciBpcyBuZWdhdGl2ZSwgcHJlZml4IHdpdGggbmVnYXRpb24gc3ltYm9sLlxyXG4gICAgaWYgKGlucHV0SXNOZWdhdGl2ZSAmJiBuZWdhdGl2ZUJlZm9yZSkge1xyXG4gICAgICBvdXRwdXQgKz0gbmVnYXRpdmVCZWZvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJlZml4IHRoZSBudW1iZXJcclxuICAgIGlmIChwcmVmaXgpIHtcclxuICAgICAgb3V0cHV0ICs9IHByZWZpeDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3JtYWwgbmVnYXRpdmUgb3B0aW9uIGNvbWVzIGFmdGVyIHRoZSBwcmVmaXguIERlZmF1bHRzIHRvICctJy5cclxuICAgIGlmIChpbnB1dElzTmVnYXRpdmUgJiYgbmVnYXRpdmUpIHtcclxuICAgICAgb3V0cHV0ICs9IG5lZ2F0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgYWN0dWFsIG51bWJlci5cclxuICAgIG91dHB1dCArPSBpbnB1dEJhc2U7XHJcbiAgICBvdXRwdXQgKz0gaW5wdXREZWNpbWFscztcclxuXHJcbiAgICAvLyBBcHBseSB0aGUgc3VmZml4LlxyXG4gICAgaWYgKHN1ZmZpeCkge1xyXG4gICAgICBvdXRwdXQgKz0gc3VmZml4O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJ1biB0aGUgb3V0cHV0IHRocm91Z2ggYSB1c2VyLXNwZWNpZmllZCBwb3N0LWZvcm1hdHRlci5cclxuICAgIGlmIChlZGl0KSB7XHJcbiAgICAgIG91dHB1dCA9IGVkaXQob3V0cHV0LCBvcmlnaW5hbElucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBbGwgZG9uZS5cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgfVxyXG5cclxuICAvLyBBY2NlcHQgYSBzdGluZyBhcyBpbnB1dCwgb3V0cHV0IGRlY29kZWQgbnVtYmVyLlxyXG4gIGZ1bmN0aW9uIGZvcm1hdEZyb20oXHJcbiAgICBkZWNpbWFscyxcclxuICAgIHRob3VzYW5kLFxyXG4gICAgbWFyayxcclxuICAgIHByZWZpeCxcclxuICAgIHN1ZmZpeCxcclxuICAgIGVuY29kZXIsXHJcbiAgICBkZWNvZGVyLFxyXG4gICAgbmVnYXRpdmVCZWZvcmUsXHJcbiAgICBuZWdhdGl2ZSxcclxuICAgIGVkaXQsXHJcbiAgICB1bmRvLFxyXG4gICAgaW5wdXRcclxuICApIHtcclxuICAgIHZhciBvcmlnaW5hbElucHV0ID0gaW5wdXQsXHJcbiAgICAgIGlucHV0SXNOZWdhdGl2ZSxcclxuICAgICAgb3V0cHV0ID0gXCJcIjtcclxuXHJcbiAgICAvLyBVc2VyIGRlZmluZWQgcHJlLWRlY29kZXIuIFJlc3VsdCBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZy5cclxuICAgIGlmICh1bmRvKSB7XHJcbiAgICAgIGlucHV0ID0gdW5kbyhpbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGVzdCB0aGUgaW5wdXQuIENhbid0IGJlIGVtcHR5LlxyXG4gICAgaWYgKCFpbnB1dCB8fCB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSBzdHJpbmcgc3RhcnRzIHdpdGggdGhlIG5lZ2F0aXZlQmVmb3JlIHZhbHVlOiByZW1vdmUgaXQuXHJcbiAgICAvLyBSZW1lbWJlciBpcyB3YXMgdGhlcmUsIHRoZSBudW1iZXIgaXMgbmVnYXRpdmUuXHJcbiAgICBpZiAobmVnYXRpdmVCZWZvcmUgJiYgc3RyU3RhcnRzV2l0aChpbnB1dCwgbmVnYXRpdmVCZWZvcmUpKSB7XHJcbiAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZShuZWdhdGl2ZUJlZm9yZSwgXCJcIik7XHJcbiAgICAgIGlucHV0SXNOZWdhdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVwZWF0IHRoZSBzYW1lIHByb2NlZHVyZSBmb3IgdGhlIHByZWZpeC5cclxuICAgIGlmIChwcmVmaXggJiYgc3RyU3RhcnRzV2l0aChpbnB1dCwgcHJlZml4KSkge1xyXG4gICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UocHJlZml4LCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBbmQgYWdhaW4gZm9yIG5lZ2F0aXZlLlxyXG4gICAgaWYgKG5lZ2F0aXZlICYmIHN0clN0YXJ0c1dpdGgoaW5wdXQsIG5lZ2F0aXZlKSkge1xyXG4gICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UobmVnYXRpdmUsIFwiXCIpO1xyXG4gICAgICBpbnB1dElzTmVnYXRpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgc3VmZml4LlxyXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL3NsaWNlXHJcbiAgICBpZiAoc3VmZml4ICYmIHN0ckVuZHNXaXRoKGlucHV0LCBzdWZmaXgpKSB7XHJcbiAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMCwgLTEgKiBzdWZmaXgubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgdGhlIHRob3VzYW5kIGdyb3VwaW5nLlxyXG4gICAgaWYgKHRob3VzYW5kKSB7XHJcbiAgICAgIGlucHV0ID0gaW5wdXQuc3BsaXQodGhvdXNhbmQpLmpvaW4oXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IHRoZSBkZWNpbWFsIHNlcGFyYXRvciBiYWNrIHRvIHBlcmlvZC5cclxuICAgIGlmIChtYXJrKSB7XHJcbiAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZShtYXJrLCBcIi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJlcGVuZCB0aGUgbmVnYXRpdmUgc3ltYm9sLlxyXG4gICAgaWYgKGlucHV0SXNOZWdhdGl2ZSkge1xyXG4gICAgICBvdXRwdXQgKz0gXCItXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHRoZSBudW1iZXJcclxuICAgIG91dHB1dCArPSBpbnB1dDtcclxuXHJcbiAgICAvLyBUcmltIGFsbCBub24tbnVtZXJpYyBjaGFyYWN0ZXJzIChhbGxvdyAnLicgYW5kICctJyk7XHJcbiAgICBvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSgvW14wLTlcXC5cXC0uXS9nLCBcIlwiKTtcclxuXHJcbiAgICAvLyBUaGUgdmFsdWUgY29udGFpbnMgbm8gcGFyc2UtYWJsZSBudW1iZXIuXHJcbiAgICBpZiAob3V0cHV0ID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb3ZlcnQgdG8gbnVtYmVyLlxyXG4gICAgb3V0cHV0ID0gTnVtYmVyKG91dHB1dCk7XHJcblxyXG4gICAgLy8gUnVuIHRoZSB1c2VyLXNwZWNpZmllZCBwb3N0LWRlY29kZXIuXHJcbiAgICBpZiAoZGVjb2Rlcikge1xyXG4gICAgICBvdXRwdXQgPSBkZWNvZGVyKG91dHB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaXMgdGhlIG91dHB1dCBpcyB2YWxpZCwgb3RoZXJ3aXNlOiByZXR1cm4gZmFsc2UuXHJcbiAgICBpZiAoIWlzVmFsaWROdW1iZXIob3V0cHV0KSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxuICB9XHJcblxyXG4gIC8vIEZyYW1ld29ya1xyXG5cclxuICAvLyBWYWxpZGF0ZSBmb3JtYXR0aW5nIG9wdGlvbnNcclxuICBmdW5jdGlvbiB2YWxpZGF0ZShpbnB1dE9wdGlvbnMpIHtcclxuICAgIHZhciBpLFxyXG4gICAgICBvcHRpb25OYW1lLFxyXG4gICAgICBvcHRpb25WYWx1ZSxcclxuICAgICAgZmlsdGVyZWRPcHRpb25zID0ge307XHJcblxyXG4gICAgaWYgKGlucHV0T3B0aW9uc1tcInN1ZmZpeFwiXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlucHV0T3B0aW9uc1tcInN1ZmZpeFwiXSA9IGlucHV0T3B0aW9uc1tcInBvc3RmaXhcIl07XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IEZvcm1hdE9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgb3B0aW9uTmFtZSA9IEZvcm1hdE9wdGlvbnNbaV07XHJcbiAgICAgIG9wdGlvblZhbHVlID0gaW5wdXRPcHRpb25zW29wdGlvbk5hbWVdO1xyXG5cclxuICAgICAgaWYgKG9wdGlvblZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyBPbmx5IGRlZmF1bHQgaWYgbmVnYXRpdmVCZWZvcmUgaXNuJ3Qgc2V0LlxyXG4gICAgICAgIGlmIChvcHRpb25OYW1lID09PSBcIm5lZ2F0aXZlXCIgJiYgIWZpbHRlcmVkT3B0aW9ucy5uZWdhdGl2ZUJlZm9yZSkge1xyXG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zW29wdGlvbk5hbWVdID0gXCItXCI7XHJcbiAgICAgICAgICAvLyBEb24ndCBzZXQgYSBkZWZhdWx0IGZvciBtYXJrIHdoZW4gJ3Rob3VzYW5kJyBpcyBzZXQuXHJcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25OYW1lID09PSBcIm1hcmtcIiAmJiBmaWx0ZXJlZE9wdGlvbnMudGhvdXNhbmQgIT09IFwiLlwiKSB7XHJcbiAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnNbb3B0aW9uTmFtZV0gPSBcIi5cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zW29wdGlvbk5hbWVdID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGbG9hdGluZyBwb2ludHMgaW4gSlMgYXJlIHN0YWJsZSB1cCB0byA3IGRlY2ltYWxzLlxyXG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbk5hbWUgPT09IFwiZGVjaW1hbHNcIikge1xyXG4gICAgICAgIGlmIChvcHRpb25WYWx1ZSA+PSAwICYmIG9wdGlvblZhbHVlIDwgOCkge1xyXG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zW29wdGlvbk5hbWVdID0gb3B0aW9uVmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihvcHRpb25OYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRoZXNlIG9wdGlvbnMsIHdoZW4gcHJvdmlkZWQsIG11c3QgYmUgZnVuY3Rpb25zLlxyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIG9wdGlvbk5hbWUgPT09IFwiZW5jb2RlclwiIHx8XHJcbiAgICAgICAgb3B0aW9uTmFtZSA9PT0gXCJkZWNvZGVyXCIgfHxcclxuICAgICAgICBvcHRpb25OYW1lID09PSBcImVkaXRcIiB8fFxyXG4gICAgICAgIG9wdGlvbk5hbWUgPT09IFwidW5kb1wiXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zW29wdGlvbk5hbWVdID0gb3B0aW9uVmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihvcHRpb25OYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE90aGVyIG9wdGlvbnMgYXJlIHN0cmluZ3MuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgZmlsdGVyZWRPcHRpb25zW29wdGlvbk5hbWVdID0gb3B0aW9uVmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihvcHRpb25OYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTb21lIHZhbHVlcyBjYW4ndCBiZSBleHRyYWN0ZWQgZnJvbSBhXHJcbiAgICAvLyBzdHJpbmcgaWYgY2VydGFpbiBjb21iaW5hdGlvbnMgYXJlIHByZXNlbnQuXHJcbiAgICB0aHJvd0VxdWFsRXJyb3IoZmlsdGVyZWRPcHRpb25zLCBcIm1hcmtcIiwgXCJ0aG91c2FuZFwiKTtcclxuICAgIHRocm93RXF1YWxFcnJvcihmaWx0ZXJlZE9wdGlvbnMsIFwicHJlZml4XCIsIFwibmVnYXRpdmVcIik7XHJcbiAgICB0aHJvd0VxdWFsRXJyb3IoZmlsdGVyZWRPcHRpb25zLCBcInByZWZpeFwiLCBcIm5lZ2F0aXZlQmVmb3JlXCIpO1xyXG5cclxuICAgIHJldHVybiBmaWx0ZXJlZE9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICAvLyBQYXNzIGFsbCBvcHRpb25zIGFzIGZ1bmN0aW9uIGFyZ3VtZW50c1xyXG4gIGZ1bmN0aW9uIHBhc3NBbGwob3B0aW9ucywgbWV0aG9kLCBpbnB1dCkge1xyXG4gICAgdmFyIGksXHJcbiAgICAgIGFyZ3MgPSBbXTtcclxuXHJcbiAgICAvLyBBZGQgYWxsIG9wdGlvbnMgaW4gb3JkZXIgb2YgRm9ybWF0T3B0aW9uc1xyXG4gICAgZm9yIChpID0gMDsgaSA8IEZvcm1hdE9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgYXJncy5wdXNoKG9wdGlvbnNbRm9ybWF0T3B0aW9uc1tpXV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgaW5wdXQsIHRoZW4gY2FsbCB0aGUgbWV0aG9kLCBwcmVzZW50aW5nIGFsbFxyXG4gICAgLy8gb3B0aW9ucyBhcyBhcmd1bWVudHMuXHJcbiAgICBhcmdzLnB1c2goaW5wdXQpO1xyXG4gICAgcmV0dXJuIG1ldGhvZC5hcHBseShcIlwiLCBhcmdzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHdOdW1iKG9wdGlvbnMpIHtcclxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiB3TnVtYikpIHtcclxuICAgICAgcmV0dXJuIG5ldyB3TnVtYihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbnMgPSB2YWxpZGF0ZShvcHRpb25zKTtcclxuXHJcbiAgICAvLyBDYWxsICdmb3JtYXRUbycgd2l0aCBwcm9wZXIgYXJndW1lbnRzLlxyXG4gICAgdGhpcy50byA9IGZ1bmN0aW9uKGlucHV0KSB7XHJcbiAgICAgIHJldHVybiBwYXNzQWxsKG9wdGlvbnMsIGZvcm1hdFRvLCBpbnB1dCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENhbGwgJ2Zvcm1hdEZyb20nIHdpdGggcHJvcGVyIGFyZ3VtZW50cy5cclxuICAgIHRoaXMuZnJvbSA9IGZ1bmN0aW9uKGlucHV0KSB7XHJcbiAgICAgIHJldHVybiBwYXNzQWxsKG9wdGlvbnMsIGZvcm1hdEZyb20sIGlucHV0KTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd051bWI7XHJcbn0pO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcIi4vc3R5bGVzLmNzc1wiKTtcclxucmVxdWlyZShcIi4vY2FyZHMvY2FyZHNcIik7XHJcbmNvbnN0IGNhcmRzXzEgPSByZXF1aXJlKFwiLi9jYXJkcy9jYXJkc1wiKTtcclxuY29uc3QgY2Fyc18xID0gcmVxdWlyZShcIi4vdHlwZXMvY2Fyc1wiKTtcclxucmVxdWlyZShcIi4uL3NyYy9maWx0ZXJzL3JhbmdlRmlsdGVyc1wiKTtcclxucmVxdWlyZShcIi4uL3NyYy9maWx0ZXJzL3R5cGVGaWx0ZXJzXCIpO1xyXG5yZXF1aXJlKFwiLi4vc3JjL2ZpbHRlcnMvcG9wdWxhcml0eUZpbHRlclwiKTtcclxucmVxdWlyZShcIi4uL3NyYy9maWx0ZXJzL3NvcnRTZWFyY2hGaWx0ZXJzXCIpO1xyXG5jb25zdCBzb3J0QnlWYWx1ZV8xID0gcmVxdWlyZShcIi4vZnVuY3Rpb25zL3NvcnRCeVZhbHVlXCIpO1xyXG5jb25zdCBjaGVja0xTXzEgPSByZXF1aXJlKFwiLi9mdW5jdGlvbnMvY2hlY2tMU1wiKTtcclxucmVxdWlyZShcIi4vZmlsdGVycy9yZXNldEZpbHRlcnNcIik7XHJcbigwLCBjYXJkc18xLnNob3dDYXJkcykoKDAsIHNvcnRCeVZhbHVlXzEuc29ydEJ5TmFtZSkoY2Fyc18xLmFsbENhcnMsICdtb2RlbCcpKTtcclxuKDAsIGNoZWNrTFNfMS5jaGVja0xTKSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=