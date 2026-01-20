/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css"
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
(module, __webpack_exports__, __webpack_require__) {

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/Tropical-Jungle-Background-Graphics-84339217-1.webp */ "./src/img/Tropical-Jungle-Background-Graphics-84339217-1.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/rotate-reverse-solid.svg */ "./src/img/rotate-reverse-solid.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bahianita&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}
*, *::before, *::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: "Outfit", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
}

.rood {
  background-color: rgba(230, 62, 26, 0.98);
}

.geel {
  background-color: rgba(250, 204, 59, 0.9);
}

.groen {
  background-color: rgba(29, 159, 63, 0.95);
}

.blauw {
  background-color: rgba(45, 129, 193, 0.95);
  color: #fff;
}

.wit {
  background-color: rgba(245, 243, 246, 0.9);
}

body {
  width: 100%;
  margin: 0 auto;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.contentContainer {
  padding: 2rem;
  margin: 2rem auto;
  width: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: stretch;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 1rem;
}
@media only screen and (min-width: 1350px) {
  .contentContainer {
    grid-template-columns: repeat(auto-fit, 320px);
  }
}

.title {
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.8);
  grid-column: 1/-1;
}
@media only screen and (max-width: 1350px) {
  .title .title {
    gap: 0.1rem;
  }
}
.title_main {
  font-family: "Bahianita", serif;
}
@media only screen and (max-width: 1350px) {
  .title_main {
    font-size: 15rem;
  }
}
@media only screen and (min-width: 1350px) {
  .title_main {
    font-size: 25rem;
  }
}
.title_sub {
  font-size: 3rem;
}
@media only screen and (max-width: 1350px) {
  .title_sub {
    font-size: 5rem;
  }
}
@media only screen and (min-width: 1350px) {
  .title_sub {
    font-size: 8rem;
  }
}

.elem {
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  border-color: #000;
  border-style: solid;
  border-width: 1rem;
  border-radius: 1em;
  box-shadow: 6px 3px 5px 1px rgba(0, 0, 0, 0.2);
}
.elem h2 {
  background-color: #000;
  color: #fff;
  font-family: "Bahianita", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 4rem;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
}
@media only screen and (min-width: 1350px) {
  .elem h2 {
    font-size: 10rem;
  }
}
.elem form {
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 0.2em;
  padding: 1rem 1rem 2rem 1rem;
}
@media only screen and (min-width: 1350px) {
  .elem form {
    font-size: 3rem;
  }
}
.elem form legend {
  margin: 0rem auto 0 auto;
  font-size: 2.4rem;
  grid-column: 1/-1;
}
@media only screen and (min-width: 1350px) {
  .elem form legend {
    font-size: 4rem;
    font-weight: 900;
  }
}
.elem form legend:nth-of-type(2) {
  margin: 2rem auto 0 auto;
}
.elem form input {
  height: auto;
}
.elem form label {
  height: auto;
}

.btn {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 1rem;
  text-transform: capitalize;
}
@media only screen and (min-width: 1350px) {
  .btn {
    font-size: 4rem;
    font-weight: 900;
  }
}

.scoreFloat {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  font-weight: 900;
  animation: scoreAnimatie 1s ease-in;
}
@media only screen and (min-width: 1350px) {
  .scoreFloat {
    font-size: 8rem;
    font-weight: 900;
  }
}
@keyframes scoreAnimatie {
  25% {
    scale: 0%;
  }
  40% {
    transform: rotate(20deg);
    scale: 150%;
  }
  50% {
    transform: rotate(-10deg);
    scale: 90%;
  }
  60% {
    transform: rotate(5deg);
    scale: 130%;
  }
  70% {
    transform: rotate(-5deg);
    scale: 95%;
  }
  80% {
    transform: rotate(2deg);
    scale: 105%;
  }
  90% {
    scale: 100%;
  }
}

.refreshButton {
  width: 10rem;
  height: 10rem;
  background-color: #303030;
  cursor: pointer;
  border-radius: 1rem;
  position: fixed;
  right: 3vw;
  bottom: 10%;
  margin: 1rem auto;
  transition: all 200ms ease-out;
}
.refreshButton .refreshIcon {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  transform: scale(0.5);
  filter: invert(1);
}
.refreshButton:hover {
  transform: scale(1.1);
  background-color: #404040;
}
@media only screen and (min-width: 1350px) {
  .refreshButton {
    position: fixed;
    right: 1vw;
    bottom: 0%;
  }
}

.home_btn_container {
  width: 100%;
  margin: 0 auto;
  font-size: 4rem;
  text-align: center;
  position: 0;
  background-color: #96bf3d;
  padding: 1rem;
  cursor: pointer;
}
.home_btn_container a {
  color: #ee3124;
  text-decoration: none;
}`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,iCAAiC;EACjC,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,0CAA0C;EAC1C,WAAW;AACb;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,cAAc;EACd,yDAAiF;EACjF,sBAAsB;EACtB,kCAAkC;EAClC,4BAA4B;EAC5B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,qBAAqB;EACrB,uBAAuB;EACvB,qBAAqB;EACrB,oBAAoB;EACpB,8CAA8C;EAC9C,SAAS;AACX;AACA;EACE;IACE,8CAA8C;EAChD;AACF;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,2CAA2C;EAC3C,iBAAiB;AACnB;AACA;EACE;IACE,WAAW;EACb;AACF;AACA;EACE,+BAA+B;AACjC;AACA;EACE;IACE,gBAAgB;EAClB;AACF;AACA;EACE;IACE,gBAAgB;EAClB;AACF;AACA;EACE,eAAe;AACjB;AACA;EACE;IACE,eAAe;EACjB;AACF;AACA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,8CAA8C;AAChD;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,+BAA+B;EAC/B,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;AACb;AACA;EACE;IACE,gBAAgB;EAClB;AACF;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,UAAU;EACV,4BAA4B;AAC9B;AACA;EACE;IACE,eAAe;EACjB;AACF;AACA;EACE,wBAAwB;EACxB,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE;IACE,eAAe;IACf,gBAAgB;EAClB;AACF;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,0BAA0B;AAC5B;AACA;EACE;IACE,eAAe;IACf,gBAAgB;EAClB;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,mCAAmC;AACrC;AACA;EACE;IACE,eAAe;IACf,gBAAgB;EAClB;AACF;AACA;EACE;IACE,SAAS;EACX;EACA;IACE,wBAAwB;IACxB,WAAW;EACb;EACA;IACE,yBAAyB;IACzB,UAAU;EACZ;EACA;IACE,uBAAuB;IACvB,WAAW;EACb;EACA;IACE,wBAAwB;IACxB,UAAU;EACZ;EACA;IACE,uBAAuB;IACvB,WAAW;EACb;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,8BAA8B;AAChC;AACA;EACE,gDAA6C;EAC7C,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,qBAAqB;EACrB,yBAAyB;AAC3B;AACA;EACE;IACE,eAAe;IACf,UAAU;IACV,UAAU;EACZ;AACF;;AAEA;EACE,WAAW;EACX,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,yBAAyB;EACzB,aAAa;EACb,eAAe;AACjB;AACA;EACE,cAAc;EACd,qBAAqB;AACvB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Bahianita&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: \"Outfit\", sans-serif;\n  font-weight: 400;\n  font-size: 1.6rem;\n}\n\n.rood {\n  background-color: rgba(230, 62, 26, 0.98);\n}\n\n.geel {\n  background-color: rgba(250, 204, 59, 0.9);\n}\n\n.groen {\n  background-color: rgba(29, 159, 63, 0.95);\n}\n\n.blauw {\n  background-color: rgba(45, 129, 193, 0.95);\n  color: #fff;\n}\n\n.wit {\n  background-color: rgba(245, 243, 246, 0.9);\n}\n\nbody {\n  width: 100%;\n  margin: 0 auto;\n  background-image: url(../img/Tropical-Jungle-Background-Graphics-84339217-1.webp);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n.contentContainer {\n  padding: 2rem;\n  margin: 2rem auto;\n  width: 100%;\n  display: grid;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n  align-items: stretch;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 1rem;\n}\n@media only screen and (min-width: 1350px) {\n  .contentContainer {\n    grid-template-columns: repeat(auto-fit, 320px);\n  }\n}\n\n.title {\n  color: #fff;\n  text-transform: uppercase;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.8);\n  grid-column: 1/-1;\n}\n@media only screen and (max-width: 1350px) {\n  .title .title {\n    gap: 0.1rem;\n  }\n}\n.title_main {\n  font-family: \"Bahianita\", serif;\n}\n@media only screen and (max-width: 1350px) {\n  .title_main {\n    font-size: 15rem;\n  }\n}\n@media only screen and (min-width: 1350px) {\n  .title_main {\n    font-size: 25rem;\n  }\n}\n.title_sub {\n  font-size: 3rem;\n}\n@media only screen and (max-width: 1350px) {\n  .title_sub {\n    font-size: 5rem;\n  }\n}\n@media only screen and (min-width: 1350px) {\n  .title_sub {\n    font-size: 8rem;\n  }\n}\n\n.elem {\n  display: flex;\n  flex-direction: column;\n  flex-basis: auto;\n  border-color: #000;\n  border-style: solid;\n  border-width: 1rem;\n  border-radius: 1em;\n  box-shadow: 6px 3px 5px 1px rgba(0, 0, 0, 0.2);\n}\n.elem h2 {\n  background-color: #000;\n  color: #fff;\n  font-family: \"Bahianita\", serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 4rem;\n  text-transform: uppercase;\n  text-align: center;\n  width: 100%;\n}\n@media only screen and (min-width: 1350px) {\n  .elem h2 {\n    font-size: 10rem;\n  }\n}\n.elem form {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  gap: 0.2em;\n  padding: 1rem 1rem 2rem 1rem;\n}\n@media only screen and (min-width: 1350px) {\n  .elem form {\n    font-size: 3rem;\n  }\n}\n.elem form legend {\n  margin: 0rem auto 0 auto;\n  font-size: 2.4rem;\n  grid-column: 1/-1;\n}\n@media only screen and (min-width: 1350px) {\n  .elem form legend {\n    font-size: 4rem;\n    font-weight: 900;\n  }\n}\n.elem form legend:nth-of-type(2) {\n  margin: 2rem auto 0 auto;\n}\n.elem form input {\n  height: auto;\n}\n.elem form label {\n  height: auto;\n}\n\n.btn {\n  background-color: #000;\n  color: #fff;\n  border: none;\n  padding: 1rem;\n  text-transform: capitalize;\n}\n@media only screen and (min-width: 1350px) {\n  .btn {\n    font-size: 4rem;\n    font-weight: 900;\n  }\n}\n\n.scoreFloat {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 3rem;\n  font-weight: 900;\n  animation: scoreAnimatie 1s ease-in;\n}\n@media only screen and (min-width: 1350px) {\n  .scoreFloat {\n    font-size: 8rem;\n    font-weight: 900;\n  }\n}\n@keyframes scoreAnimatie {\n  25% {\n    scale: 0%;\n  }\n  40% {\n    transform: rotate(20deg);\n    scale: 150%;\n  }\n  50% {\n    transform: rotate(-10deg);\n    scale: 90%;\n  }\n  60% {\n    transform: rotate(5deg);\n    scale: 130%;\n  }\n  70% {\n    transform: rotate(-5deg);\n    scale: 95%;\n  }\n  80% {\n    transform: rotate(2deg);\n    scale: 105%;\n  }\n  90% {\n    scale: 100%;\n  }\n}\n\n.refreshButton {\n  width: 10rem;\n  height: 10rem;\n  background-color: #303030;\n  cursor: pointer;\n  border-radius: 1rem;\n  position: fixed;\n  right: 3vw;\n  bottom: 10%;\n  margin: 1rem auto;\n  transition: all 200ms ease-out;\n}\n.refreshButton .refreshIcon {\n  content: url(../img/rotate-reverse-solid.svg);\n  transform: scale(0.5);\n  filter: invert(1);\n}\n.refreshButton:hover {\n  transform: scale(1.1);\n  background-color: #404040;\n}\n@media only screen and (min-width: 1350px) {\n  .refreshButton {\n    position: fixed;\n    right: 1vw;\n    bottom: 0%;\n  }\n}\n\n.home_btn_container {\n  width: 100%;\n  margin: 0 auto;\n  font-size: 4rem;\n  text-align: center;\n  position: 0;\n  background-color: #96bf3d;\n  padding: 1rem;\n  cursor: pointer;\n}\n.home_btn_container a {\n  color: #ee3124;\n  text-decoration: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



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

/***/ },

/***/ "./src/css/main.css"
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/img/Tropical-Jungle-Background-Graphics-84339217-1.webp"
/*!*********************************************************************!*\
  !*** ./src/img/Tropical-Jungle-Background-Graphics-84339217-1.webp ***!
  \*********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3d9f656040548044f9d4.webp";

/***/ },

/***/ "./src/img/rotate-reverse-solid.svg"
/*!******************************************!*\
  !*** ./src/img/rotate-reverse-solid.svg ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0567a3f362b8ae1e49db.svg";

/***/ },

/***/ "./src/js/_modules/_berekening.js"
/*!****************************************!*\
  !*** ./src/js/_modules/_berekening.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subScoreBerekening: () => (/* binding */ subScoreBerekening)
/* harmony export */ });
const subScoreBerekening = function (subScore = 0, bet) {
  const opstartKosten = subScore - 20;
  if (subScore <= 1) return 0; // or handle this case as needed

  // Make sure bet is a number (if needed, parse it)
  const betNumber = typeof bet === "string" ? parseInt(bet, 10) : bet;

  switch (betNumber) {
    case 0:
      return opstartKosten * 1;
    case 1:
      return opstartKosten * 2;
    case 2:
      return opstartKosten * 3; // When user selects "2", multiply by 3
    case 3:
      return opstartKosten * 4;
    default:
      console.error("Ongeldige weddenschap");
      return 0;
  }
};


/***/ },

/***/ "./src/js/_modules/_invulElementMaken.js"
/*!***********************************************!*\
  !*** ./src/js/_modules/_invulElementMaken.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invulElementenMaken: () => (/* binding */ invulElementenMaken)
/* harmony export */ });
/* harmony import */ var _berekening_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_berekening.js */ "./src/js/_modules/_berekening.js");



const invulElementenMaken = function () {
  // Define arrays for each color
  let puntenRood = [];
  let weddenRood = [];
  let puntenGeel = [];
  let weddenGeel = [];
  let puntenGroen = [];
  let weddenGroen = [];
  let puntenBlauw = [];
  let weddenBlauw = [];
  let puntenWit = [];
  let weddenWit = [];

  // Map color names to their arrays
  const data = {
    rood: { punten: puntenRood, wedden: weddenRood },
    geel: { punten: puntenGeel, wedden: weddenGeel },
    groen: { punten: puntenGroen, wedden: weddenGroen },
    blauw: { punten: puntenBlauw, wedden: weddenBlauw },
    wit: { punten: puntenWit, wedden: weddenWit },
  };

  const body = document.body;
  const content = document.createElement("article");
  content.classList.add("contentContainer");
  body.appendChild(content);

  // ====================================================
  // Attach one global event listener before the forEach loop
  // ====================================================
  // This listener uses event delegation to handle clicks on any button with the 'btn' class.
  content.addEventListener("click", function (e) {
    if (e.target.matches("button.btn")) {
      e.preventDefault();

      // Get the parent section that has the data-color attribute (each color section)
      const section = e.target.closest(".elem");
      if (!section) return;

      // Retrieve the color from a data attribute.
      const color = section.dataset.color;
      if (!data[color]) {
        console.error(`No data found for color: ${color}`);
        return;
      }

      const { punten, wedden } = data[color];

      // Convert string IDs to numbers and sum them up
      const sumPunten = punten.reduce(
        (total, current) => total + parseInt(current, 10),
        0,
      );
      const sumWedden = wedden.reduce(
        (total, current) => total + parseInt(current, 10),
        0,
      );

      // TEST Logs
      // console.log(`Voor kleur ${color}:`);
      // console.log("Punten som:", sumPunten);
      // console.log("Weddenschap som:", sumWedden);
      // console.log(subScoreBerekening(sumPunten, sumWedden));

      // Look for an existing element to display the score.
      let floatEl = section.querySelector(".scoreFloat");
      if (!floatEl) {
        // If it doesn't exist, create it and append to the section.
        floatEl = document.createElement("div");
        floatEl.classList.add("scoreFloat");
        section.appendChild(floatEl);
      }
      // Update the content of the score element.
      floatEl.innerHTML = (0,_berekening_js__WEBPACK_IMPORTED_MODULE_0__.subScoreBerekening)(sumPunten, sumWedden);
    }
  });

  // ====================================================
  // Helper functions to create DOM elements
  // ====================================================
  const createLegend = function (name) {
    const legendEl = document.createElement("legend");
    legendEl.textContent = name;
    return legendEl;
  };

  const createLabel = function (name) {
    const labelEl = document.createElement("label");
    labelEl.textContent = name;
    return labelEl;
  };

  // Create a set of input elements for the form
  // For each input, add an event listener to update the appropriate arrays in data
  const createInput = function (name, inputLength, color) {
    const elements = [];
    for (let i = 0; i < inputLength; i++) {
      const inputEl = document.createElement("input");
      inputEl.type = "checkbox";
      inputEl.name = name;
      // For "Kaart", id starts at 2; for "Weddenschap", at 1
      inputEl.id = `${name === "Kaart" ? i + 2 : i + 1}`;

      inputEl.addEventListener("change", function () {
        const { punten, wedden } = data[color];

        // Weddenschap deselect every checkbox except the selected
        if (this.name === "Weddenschap" && this.checked) {
          // Deselect all other Weddenschap checkboxes in the same color group
          const checkboxes = document.querySelectorAll(
            `div[data-color='${color}'] input[name='Weddenschap']`,
          );
          checkboxes.forEach(checkbox => {
            if (checkbox !== this) {
              checkbox.checked = false;
              // Remove the unchecked checkbox from the array
              const index = wedden.indexOf(checkbox.id);
              if (index > -1) wedden.splice(index, 1);
            }
          });
        }

        if (this.checked) {
          if (this.name === "Kaart") {
            punten.push(this.id);
          } else if (this.name === "Weddenschap") {
            wedden.push(this.id);
          }
        } else {
          // Helper to remove an item from an array
          const removeItem = (arr, id) => {
            const index = arr.indexOf(id);
            if (index > -1) arr.splice(index, 1);
          };
          removeItem(punten, this.id);
          removeItem(wedden, this.id);
        }
      });

      elements.push(inputEl);
      elements.push(createLabel(`${name} ${name === "Kaart" ? i + 2 : i + 1}`));
    }
    return elements;
  };

  // ====================================================
  // Create each color section with its own button
  // ====================================================
  const kleuren = ["rood", "geel", "groen", "blauw", "wit"];
  kleuren.forEach(function (color) {
    // Create the container for this color section
    const section = document.createElement("div");
    // Store the color in a data attribute for easy access later
    section.dataset.color = color;
    section.classList.add("elem", color);

    // Create and append the title
    const title = document.createElement("h2");
    title.textContent = color;
    section.appendChild(title);

    // Create a form for inputs
    const form = document.createElement("form");

    // Add inputs for "Kaarten"
    form.appendChild(createLegend("Kaarten"));
    createInput("Kaart", 9, color).forEach(el => form.appendChild(el));

    // Add inputs for "Weddenschap"
    form.appendChild(createLegend("Weddenschap"));
    createInput("Weddenschap", 3, color).forEach(el => form.appendChild(el));

    section.appendChild(form);

    // Create the button for this section
    const calcButton = document.createElement("button");
    calcButton.textContent = "berekenen";
    calcButton.classList.add("btn");
    section.appendChild(calcButton);

    // Append the section to the body
    content.appendChild(section);
  });

  // ====================================================
  // Create reset button
  // ====================================================
  const createRefreshButton = document.createElement("a");
  createRefreshButton.classList.add("refreshButton");

  const createIcon = document.createElement("img");
  createIcon.classList.add("refreshIcon");

  createRefreshButton.appendChild(createIcon);
  body.appendChild(createRefreshButton);

  const refeshButton = document.querySelector(".refreshButton");

  const refreshPage = () => {
    location.reload();
  };

  refeshButton.addEventListener("click", refreshPage);

  // ====================================================
  // Create mikeottenhoff button
  // ====================================================

  // const home_btn = document.createElement("a");
  // const home_btn_container = document.createElement("div");

  // home_btn.preventDefault;
  // home_btn.innerHTML = "mikeottenhoff.nl";
  // home_btn.href = "../../index.html";
  // home_btn_container.classList.add("home_btn_container");

  // home_btn_container.appendChild(home_btn);
  // body.appendChild(home_btn_container);
};


/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _modules_invulElementMaken_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_modules/_invulElementMaken.js */ "./src/js/_modules/_invulElementMaken.js");



// Maak de UI elementen
(0,_modules_invulElementMaken_js__WEBPACK_IMPORTED_MODULE_1__.invulElementenMaken)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGdNQUE2RTtBQUN6SCw0Q0FBNEMsMElBQWtEO0FBQzlGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsdUhBQXVIO0FBQ3ZILHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUZBQW1GLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM3TkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQy9CQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsb0I7Ozs7O1dDckJBLG1DOzs7Ozs7Ozs7Ozs7O0FDQXlCO0FBQzhDO0FBQ3ZFO0FBQ0E7QUFDQSxrRkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvanMvX21vZHVsZXMvX2JlcmVrZW5pbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvanMvX21vZHVsZXMvX2ludnVsRWxlbWVudE1ha2VuLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9Ucm9waWNhbC1KdW5nbGUtQmFja2dyb3VuZC1HcmFwaGljcy04NDMzOTIxNy0xLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvcm90YXRlLXJldmVyc2Utc29saWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWhpYW5pdGEmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJPdXRmaXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5yb29kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDYyLCAyNiwgMC45OCk7XG59XG5cbi5nZWVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgNTksIDAuOSk7XG59XG5cbi5ncm9lbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDE1OSwgNjMsIDAuOTUpO1xufVxuXG4uYmxhdXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCAxMjksIDE5MywgMC45NSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ud2l0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0MywgMjQ2LCAwLjkpO1xufVxuXG5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbi5jb250ZW50Q29udGFpbmVyIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjAwcHgpO1xuICBnYXA6IDFyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNTBweCkge1xuICAuY29udGVudENvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDMyMHB4KTtcbiAgfVxufVxuXG4udGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1zaGFkb3c6IDJweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNTBweCkge1xuICAudGl0bGUgLnRpdGxlIHtcbiAgICBnYXA6IDAuMXJlbTtcbiAgfVxufVxuLnRpdGxlX21haW4ge1xuICBmb250LWZhbWlseTogXCJCYWhpYW5pdGFcIiwgc2VyaWY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNTBweCkge1xuICAudGl0bGVfbWFpbiB7XG4gICAgZm9udC1zaXplOiAxNXJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcbiAgLnRpdGxlX21haW4ge1xuICAgIGZvbnQtc2l6ZTogMjVyZW07XG4gIH1cbn1cbi50aXRsZV9zdWIge1xuICBmb250LXNpemU6IDNyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNTBweCkge1xuICAudGl0bGVfc3ViIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XG4gIC50aXRsZV9zdWIge1xuICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgfVxufVxuXG4uZWxlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtYmFzaXM6IGF1dG87XG4gIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGJveC1zaGFkb3c6IDZweCAzcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uZWxlbSBoMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJCYWhpYW5pdGFcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA0cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcbiAgLmVsZW0gaDIge1xuICAgIGZvbnQtc2l6ZTogMTByZW07XG4gIH1cbn1cbi5lbGVtIGZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XG4gIGdhcDogMC4yZW07XG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAycmVtIDFyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNTBweCkge1xuICAuZWxlbSBmb3JtIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cbi5lbGVtIGZvcm0gbGVnZW5kIHtcbiAgbWFyZ2luOiAwcmVtIGF1dG8gMCBhdXRvO1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNTBweCkge1xuICAuZWxlbSBmb3JtIGxlZ2VuZCB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIH1cbn1cbi5lbGVtIGZvcm0gbGVnZW5kOm50aC1vZi10eXBlKDIpIHtcbiAgbWFyZ2luOiAycmVtIGF1dG8gMCBhdXRvO1xufVxuLmVsZW0gZm9ybSBpbnB1dCB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5lbGVtIGZvcm0gbGFiZWwge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XG4gIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICB9XG59XG5cbi5zY29yZUZsb2F0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYW5pbWF0aW9uOiBzY29yZUFuaW1hdGllIDFzIGVhc2UtaW47XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNTBweCkge1xuICAuc2NvcmVGbG9hdCB7XG4gICAgZm9udC1zaXplOiA4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2NvcmVBbmltYXRpZSB7XG4gIDI1JSB7XG4gICAgc2NhbGU6IDAlO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xuICAgIHNjYWxlOiAxNTAlO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgICBzY2FsZTogOTAlO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gICAgc2NhbGU6IDEzMCU7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgc2NhbGU6IDk1JTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICAgIHNjYWxlOiAxMDUlO1xuICB9XG4gIDkwJSB7XG4gICAgc2NhbGU6IDEwMCU7XG4gIH1cbn1cblxuLnJlZnJlc2hCdXR0b24ge1xuICB3aWR0aDogMTByZW07XG4gIGhlaWdodDogMTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogM3Z3O1xuICBib3R0b206IDEwJTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbn1cbi5yZWZyZXNoQnV0dG9uIC5yZWZyZXNoSWNvbiB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICBmaWx0ZXI6IGludmVydCgxKTtcbn1cbi5yZWZyZXNoQnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcbiAgLnJlZnJlc2hCdXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMXZ3O1xuICAgIGJvdHRvbTogMCU7XG4gIH1cbn1cblxuLmhvbWVfYnRuX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiA0cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTZiZjNkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG9tZV9idG5fY29udGFpbmVyIGEge1xuICBjb2xvcjogI2VlMzEyNDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlEQUFpRjtFQUNqRixzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLDhDQUE4QztFQUM5QyxTQUFTO0FBQ1g7QUFDQTtFQUNFO0lBQ0UsOENBQThDO0VBQ2hEO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFVBQVU7RUFDViw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLFdBQVc7RUFDYjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGdEQUE2QztFQUM3QyxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWhpYW5pdGEmZGlzcGxheT1zd2FwXFxcIik7XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPdXRmaXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4ucm9vZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgNjIsIDI2LCAwLjk4KTtcXG59XFxuXFxuLmdlZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgNTksIDAuOSk7XFxufVxcblxcbi5ncm9lbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAxNTksIDYzLCAwLjk1KTtcXG59XFxuXFxuLmJsYXV3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDEyOSwgMTkzLCAwLjk1KTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ud2l0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDMsIDI0NiwgMC45KTtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9Ucm9waWNhbC1KdW5nbGUtQmFja2dyb3VuZC1HcmFwaGljcy04NDMzOTIxNy0xLndlYnApO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuLmNvbnRlbnRDb250YWluZXIge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyMDBweCk7XFxuICBnYXA6IDFyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XFxuICAuY29udGVudENvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAzMjBweCk7XFxuICB9XFxufVxcblxcbi50aXRsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNTBweCkge1xcbiAgLnRpdGxlIC50aXRsZSB7XFxuICAgIGdhcDogMC4xcmVtO1xcbiAgfVxcbn1cXG4udGl0bGVfbWFpbiB7XFxuICBmb250LWZhbWlseTogXFxcIkJhaGlhbml0YVxcXCIsIHNlcmlmO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNTBweCkge1xcbiAgLnRpdGxlX21haW4ge1xcbiAgICBmb250LXNpemU6IDE1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNTBweCkge1xcbiAgLnRpdGxlX21haW4ge1xcbiAgICBmb250LXNpemU6IDI1cmVtO1xcbiAgfVxcbn1cXG4udGl0bGVfc3ViIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzUwcHgpIHtcXG4gIC50aXRsZV9zdWIge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XFxuICAudGl0bGVfc3ViIHtcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgfVxcbn1cXG5cXG4uZWxlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtYmFzaXM6IGF1dG87XFxuICBib3JkZXItY29sb3I6ICMwMDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgYm94LXNoYWRvdzogNnB4IDNweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLmVsZW0gaDIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYWhpYW5pdGFcXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XFxuICAuZWxlbSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMTByZW07XFxuICB9XFxufVxcbi5lbGVtIGZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdhcDogMC4yZW07XFxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMnJlbSAxcmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNTBweCkge1xcbiAgLmVsZW0gZm9ybSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG59XFxuLmVsZW0gZm9ybSBsZWdlbmQge1xcbiAgbWFyZ2luOiAwcmVtIGF1dG8gMCBhdXRvO1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcXG4gIC5lbGVtIGZvcm0gbGVnZW5kIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgfVxcbn1cXG4uZWxlbSBmb3JtIGxlZ2VuZDpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXJnaW46IDJyZW0gYXV0byAwIGF1dG87XFxufVxcbi5lbGVtIGZvcm0gaW5wdXQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uZWxlbSBmb3JtIGxhYmVsIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XFxuICAuYnRuIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgfVxcbn1cXG5cXG4uc2NvcmVGbG9hdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYW5pbWF0aW9uOiBzY29yZUFuaW1hdGllIDFzIGVhc2UtaW47XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XFxuICAuc2NvcmVGbG9hdCB7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzY29yZUFuaW1hdGllIHtcXG4gIDI1JSB7XFxuICAgIHNjYWxlOiAwJTtcXG4gIH1cXG4gIDQwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcXG4gICAgc2NhbGU6IDE1MCU7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgICBzY2FsZTogOTAlO1xcbiAgfVxcbiAgNjAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XFxuICAgIHNjYWxlOiAxMzAlO1xcbiAgfVxcbiAgNzAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xcbiAgICBzY2FsZTogOTUlO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XFxuICAgIHNjYWxlOiAxMDUlO1xcbiAgfVxcbiAgOTAlIHtcXG4gICAgc2NhbGU6IDEwMCU7XFxuICB9XFxufVxcblxcbi5yZWZyZXNoQnV0dG9uIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGhlaWdodDogMTByZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAzdnc7XFxuICBib3R0b206IDEwJTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xcbn1cXG4ucmVmcmVzaEJ1dHRvbiAucmVmcmVzaEljb24ge1xcbiAgY29udGVudDogdXJsKC4uL2ltZy9yb3RhdGUtcmV2ZXJzZS1zb2xpZC5zdmcpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcbi5yZWZyZXNoQnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XFxuICAucmVmcmVzaEJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDF2dztcXG4gICAgYm90dG9tOiAwJTtcXG4gIH1cXG59XFxuXFxuLmhvbWVfYnRuX2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTZiZjNkO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhvbWVfYnRuX2NvbnRhaW5lciBhIHtcXG4gIGNvbG9yOiAjZWUzMTI0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGNvbnN0IHN1YlNjb3JlQmVyZWtlbmluZyA9IGZ1bmN0aW9uIChzdWJTY29yZSA9IDAsIGJldCkge1xyXG4gIGNvbnN0IG9wc3RhcnRLb3N0ZW4gPSBzdWJTY29yZSAtIDIwO1xyXG4gIGlmIChzdWJTY29yZSA8PSAxKSByZXR1cm4gMDsgLy8gb3IgaGFuZGxlIHRoaXMgY2FzZSBhcyBuZWVkZWRcclxuXHJcbiAgLy8gTWFrZSBzdXJlIGJldCBpcyBhIG51bWJlciAoaWYgbmVlZGVkLCBwYXJzZSBpdClcclxuICBjb25zdCBiZXROdW1iZXIgPSB0eXBlb2YgYmV0ID09PSBcInN0cmluZ1wiID8gcGFyc2VJbnQoYmV0LCAxMCkgOiBiZXQ7XHJcblxyXG4gIHN3aXRjaCAoYmV0TnVtYmVyKSB7XHJcbiAgICBjYXNlIDA6XHJcbiAgICAgIHJldHVybiBvcHN0YXJ0S29zdGVuICogMTtcclxuICAgIGNhc2UgMTpcclxuICAgICAgcmV0dXJuIG9wc3RhcnRLb3N0ZW4gKiAyO1xyXG4gICAgY2FzZSAyOlxyXG4gICAgICByZXR1cm4gb3BzdGFydEtvc3RlbiAqIDM7IC8vIFdoZW4gdXNlciBzZWxlY3RzIFwiMlwiLCBtdWx0aXBseSBieSAzXHJcbiAgICBjYXNlIDM6XHJcbiAgICAgIHJldHVybiBvcHN0YXJ0S29zdGVuICogNDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJPbmdlbGRpZ2Ugd2VkZGVuc2NoYXBcIik7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gIH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmltcG9ydCB7IHN1YlNjb3JlQmVyZWtlbmluZyB9IGZyb20gXCIuL19iZXJla2VuaW5nLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW52dWxFbGVtZW50ZW5NYWtlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAvLyBEZWZpbmUgYXJyYXlzIGZvciBlYWNoIGNvbG9yXHJcbiAgbGV0IHB1bnRlblJvb2QgPSBbXTtcclxuICBsZXQgd2VkZGVuUm9vZCA9IFtdO1xyXG4gIGxldCBwdW50ZW5HZWVsID0gW107XHJcbiAgbGV0IHdlZGRlbkdlZWwgPSBbXTtcclxuICBsZXQgcHVudGVuR3JvZW4gPSBbXTtcclxuICBsZXQgd2VkZGVuR3JvZW4gPSBbXTtcclxuICBsZXQgcHVudGVuQmxhdXcgPSBbXTtcclxuICBsZXQgd2VkZGVuQmxhdXcgPSBbXTtcclxuICBsZXQgcHVudGVuV2l0ID0gW107XHJcbiAgbGV0IHdlZGRlbldpdCA9IFtdO1xyXG5cclxuICAvLyBNYXAgY29sb3IgbmFtZXMgdG8gdGhlaXIgYXJyYXlzXHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIHJvb2Q6IHsgcHVudGVuOiBwdW50ZW5Sb29kLCB3ZWRkZW46IHdlZGRlblJvb2QgfSxcclxuICAgIGdlZWw6IHsgcHVudGVuOiBwdW50ZW5HZWVsLCB3ZWRkZW46IHdlZGRlbkdlZWwgfSxcclxuICAgIGdyb2VuOiB7IHB1bnRlbjogcHVudGVuR3JvZW4sIHdlZGRlbjogd2VkZGVuR3JvZW4gfSxcclxuICAgIGJsYXV3OiB7IHB1bnRlbjogcHVudGVuQmxhdXcsIHdlZGRlbjogd2VkZGVuQmxhdXcgfSxcclxuICAgIHdpdDogeyBwdW50ZW46IHB1bnRlbldpdCwgd2VkZGVuOiB3ZWRkZW5XaXQgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvbnRhaW5lclwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gQXR0YWNoIG9uZSBnbG9iYWwgZXZlbnQgbGlzdGVuZXIgYmVmb3JlIHRoZSBmb3JFYWNoIGxvb3BcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gVGhpcyBsaXN0ZW5lciB1c2VzIGV2ZW50IGRlbGVnYXRpb24gdG8gaGFuZGxlIGNsaWNrcyBvbiBhbnkgYnV0dG9uIHdpdGggdGhlICdidG4nIGNsYXNzLlxyXG4gIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcImJ1dHRvbi5idG5cIikpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgLy8gR2V0IHRoZSBwYXJlbnQgc2VjdGlvbiB0aGF0IGhhcyB0aGUgZGF0YS1jb2xvciBhdHRyaWJ1dGUgKGVhY2ggY29sb3Igc2VjdGlvbilcclxuICAgICAgY29uc3Qgc2VjdGlvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuZWxlbVwiKTtcclxuICAgICAgaWYgKCFzZWN0aW9uKSByZXR1cm47XHJcblxyXG4gICAgICAvLyBSZXRyaWV2ZSB0aGUgY29sb3IgZnJvbSBhIGRhdGEgYXR0cmlidXRlLlxyXG4gICAgICBjb25zdCBjb2xvciA9IHNlY3Rpb24uZGF0YXNldC5jb2xvcjtcclxuICAgICAgaWYgKCFkYXRhW2NvbG9yXSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYE5vIGRhdGEgZm91bmQgZm9yIGNvbG9yOiAke2NvbG9yfWApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgeyBwdW50ZW4sIHdlZGRlbiB9ID0gZGF0YVtjb2xvcl07XHJcblxyXG4gICAgICAvLyBDb252ZXJ0IHN0cmluZyBJRHMgdG8gbnVtYmVycyBhbmQgc3VtIHRoZW0gdXBcclxuICAgICAgY29uc3Qgc3VtUHVudGVuID0gcHVudGVuLnJlZHVjZShcclxuICAgICAgICAodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsICsgcGFyc2VJbnQoY3VycmVudCwgMTApLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHN1bVdlZGRlbiA9IHdlZGRlbi5yZWR1Y2UoXHJcbiAgICAgICAgKHRvdGFsLCBjdXJyZW50KSA9PiB0b3RhbCArIHBhcnNlSW50KGN1cnJlbnQsIDEwKSxcclxuICAgICAgICAwLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gVEVTVCBMb2dzXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBWb29yIGtsZXVyICR7Y29sb3J9OmApO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlB1bnRlbiBzb206XCIsIHN1bVB1bnRlbik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiV2VkZGVuc2NoYXAgc29tOlwiLCBzdW1XZWRkZW4pO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzdWJTY29yZUJlcmVrZW5pbmcoc3VtUHVudGVuLCBzdW1XZWRkZW4pKTtcclxuXHJcbiAgICAgIC8vIExvb2sgZm9yIGFuIGV4aXN0aW5nIGVsZW1lbnQgdG8gZGlzcGxheSB0aGUgc2NvcmUuXHJcbiAgICAgIGxldCBmbG9hdEVsID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlRmxvYXRcIik7XHJcbiAgICAgIGlmICghZmxvYXRFbCkge1xyXG4gICAgICAgIC8vIElmIGl0IGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBpdCBhbmQgYXBwZW5kIHRvIHRoZSBzZWN0aW9uLlxyXG4gICAgICAgIGZsb2F0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZsb2F0RWwuY2xhc3NMaXN0LmFkZChcInNjb3JlRmxvYXRcIik7XHJcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChmbG9hdEVsKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBVcGRhdGUgdGhlIGNvbnRlbnQgb2YgdGhlIHNjb3JlIGVsZW1lbnQuXHJcbiAgICAgIGZsb2F0RWwuaW5uZXJIVE1MID0gc3ViU2NvcmVCZXJla2VuaW5nKHN1bVB1bnRlbiwgc3VtV2VkZGVuKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEhlbHBlciBmdW5jdGlvbnMgdG8gY3JlYXRlIERPTSBlbGVtZW50c1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBjb25zdCBjcmVhdGVMZWdlbmQgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgY29uc3QgbGVnZW5kRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xyXG4gICAgbGVnZW5kRWwudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgcmV0dXJuIGxlZ2VuZEVsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZUxhYmVsID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIGNvbnN0IGxhYmVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbEVsLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHJldHVybiBsYWJlbEVsO1xyXG4gIH07XHJcblxyXG4gIC8vIENyZWF0ZSBhIHNldCBvZiBpbnB1dCBlbGVtZW50cyBmb3IgdGhlIGZvcm1cclxuICAvLyBGb3IgZWFjaCBpbnB1dCwgYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHVwZGF0ZSB0aGUgYXBwcm9wcmlhdGUgYXJyYXlzIGluIGRhdGFcclxuICBjb25zdCBjcmVhdGVJbnB1dCA9IGZ1bmN0aW9uIChuYW1lLCBpbnB1dExlbmd0aCwgY29sb3IpIHtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0TGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgaW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgaW5wdXRFbC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICBpbnB1dEVsLm5hbWUgPSBuYW1lO1xyXG4gICAgICAvLyBGb3IgXCJLYWFydFwiLCBpZCBzdGFydHMgYXQgMjsgZm9yIFwiV2VkZGVuc2NoYXBcIiwgYXQgMVxyXG4gICAgICBpbnB1dEVsLmlkID0gYCR7bmFtZSA9PT0gXCJLYWFydFwiID8gaSArIDIgOiBpICsgMX1gO1xyXG5cclxuICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCB7IHB1bnRlbiwgd2VkZGVuIH0gPSBkYXRhW2NvbG9yXTtcclxuXHJcbiAgICAgICAgLy8gV2VkZGVuc2NoYXAgZGVzZWxlY3QgZXZlcnkgY2hlY2tib3ggZXhjZXB0IHRoZSBzZWxlY3RlZFxyXG4gICAgICAgIGlmICh0aGlzLm5hbWUgPT09IFwiV2VkZGVuc2NoYXBcIiAmJiB0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAgIC8vIERlc2VsZWN0IGFsbCBvdGhlciBXZWRkZW5zY2hhcCBjaGVja2JveGVzIGluIHRoZSBzYW1lIGNvbG9yIGdyb3VwXHJcbiAgICAgICAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgYGRpdltkYXRhLWNvbG9yPScke2NvbG9yfSddIGlucHV0W25hbWU9J1dlZGRlbnNjaGFwJ11gLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveCAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHVuY2hlY2tlZCBjaGVja2JveCBmcm9tIHRoZSBhcnJheVxyXG4gICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gd2VkZGVuLmluZGV4T2YoY2hlY2tib3guaWQpO1xyXG4gICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB3ZWRkZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5uYW1lID09PSBcIkthYXJ0XCIpIHtcclxuICAgICAgICAgICAgcHVudGVuLnB1c2godGhpcy5pZCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmFtZSA9PT0gXCJXZWRkZW5zY2hhcFwiKSB7XHJcbiAgICAgICAgICAgIHdlZGRlbi5wdXNoKHRoaXMuaWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBIZWxwZXIgdG8gcmVtb3ZlIGFuIGl0ZW0gZnJvbSBhbiBhcnJheVxyXG4gICAgICAgICAgY29uc3QgcmVtb3ZlSXRlbSA9IChhcnIsIGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoaWQpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkgYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmVtb3ZlSXRlbShwdW50ZW4sIHRoaXMuaWQpO1xyXG4gICAgICAgICAgcmVtb3ZlSXRlbSh3ZWRkZW4sIHRoaXMuaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBlbGVtZW50cy5wdXNoKGlucHV0RWwpO1xyXG4gICAgICBlbGVtZW50cy5wdXNoKGNyZWF0ZUxhYmVsKGAke25hbWV9ICR7bmFtZSA9PT0gXCJLYWFydFwiID8gaSArIDIgOiBpICsgMX1gKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgfTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIENyZWF0ZSBlYWNoIGNvbG9yIHNlY3Rpb24gd2l0aCBpdHMgb3duIGJ1dHRvblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBjb25zdCBrbGV1cmVuID0gW1wicm9vZFwiLCBcImdlZWxcIiwgXCJncm9lblwiLCBcImJsYXV3XCIsIFwid2l0XCJdO1xyXG4gIGtsZXVyZW4uZm9yRWFjaChmdW5jdGlvbiAoY29sb3IpIHtcclxuICAgIC8vIENyZWF0ZSB0aGUgY29udGFpbmVyIGZvciB0aGlzIGNvbG9yIHNlY3Rpb25cclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgLy8gU3RvcmUgdGhlIGNvbG9yIGluIGEgZGF0YSBhdHRyaWJ1dGUgZm9yIGVhc3kgYWNjZXNzIGxhdGVyXHJcbiAgICBzZWN0aW9uLmRhdGFzZXQuY29sb3IgPSBjb2xvcjtcclxuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImVsZW1cIiwgY29sb3IpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSB0aXRsZVxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGNvbG9yO1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgZm9ybSBmb3IgaW5wdXRzXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcblxyXG4gICAgLy8gQWRkIGlucHV0cyBmb3IgXCJLYWFydGVuXCJcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlTGVnZW5kKFwiS2FhcnRlblwiKSk7XHJcbiAgICBjcmVhdGVJbnB1dChcIkthYXJ0XCIsIDksIGNvbG9yKS5mb3JFYWNoKGVsID0+IGZvcm0uYXBwZW5kQ2hpbGQoZWwpKTtcclxuXHJcbiAgICAvLyBBZGQgaW5wdXRzIGZvciBcIldlZGRlbnNjaGFwXCJcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlTGVnZW5kKFwiV2VkZGVuc2NoYXBcIikpO1xyXG4gICAgY3JlYXRlSW5wdXQoXCJXZWRkZW5zY2hhcFwiLCAzLCBjb2xvcikuZm9yRWFjaChlbCA9PiBmb3JtLmFwcGVuZENoaWxkKGVsKSk7XHJcblxyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbiBmb3IgdGhpcyBzZWN0aW9uXHJcbiAgICBjb25zdCBjYWxjQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNhbGNCdXR0b24udGV4dENvbnRlbnQgPSBcImJlcmVrZW5lblwiO1xyXG4gICAgY2FsY0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjYWxjQnV0dG9uKTtcclxuXHJcbiAgICAvLyBBcHBlbmQgdGhlIHNlY3Rpb24gdG8gdGhlIGJvZHlcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbiAgfSk7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBDcmVhdGUgcmVzZXQgYnV0dG9uXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGNvbnN0IGNyZWF0ZVJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBjcmVhdGVSZWZyZXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZWZyZXNoQnV0dG9uXCIpO1xyXG5cclxuICBjb25zdCBjcmVhdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjcmVhdGVJY29uLmNsYXNzTGlzdC5hZGQoXCJyZWZyZXNoSWNvblwiKTtcclxuXHJcbiAgY3JlYXRlUmVmcmVzaEJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVJY29uKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVJlZnJlc2hCdXR0b24pO1xyXG5cclxuICBjb25zdCByZWZlc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZnJlc2hCdXR0b25cIik7XHJcblxyXG4gIGNvbnN0IHJlZnJlc2hQYWdlID0gKCkgPT4ge1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfTtcclxuXHJcbiAgcmVmZXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZWZyZXNoUGFnZSk7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBDcmVhdGUgbWlrZW90dGVuaG9mZiBidXR0b25cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIC8vIGNvbnN0IGhvbWVfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgLy8gY29uc3QgaG9tZV9idG5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgLy8gaG9tZV9idG4ucHJldmVudERlZmF1bHQ7XHJcbiAgLy8gaG9tZV9idG4uaW5uZXJIVE1MID0gXCJtaWtlb3R0ZW5ob2ZmLm5sXCI7XHJcbiAgLy8gaG9tZV9idG4uaHJlZiA9IFwiLi4vLi4vaW5kZXguaHRtbFwiO1xyXG4gIC8vIGhvbWVfYnRuX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZV9idG5fY29udGFpbmVyXCIpO1xyXG5cclxuICAvLyBob21lX2J0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZV9idG4pO1xyXG4gIC8vIGJvZHkuYXBwZW5kQ2hpbGQoaG9tZV9idG5fY29udGFpbmVyKTtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuYmFzZVVSSSkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9jc3MvbWFpbi5jc3NcIjtcclxuaW1wb3J0IHsgaW52dWxFbGVtZW50ZW5NYWtlbiB9IGZyb20gXCIuL19tb2R1bGVzL19pbnZ1bEVsZW1lbnRNYWtlbi5qc1wiO1xyXG5cclxuLy8gTWFhayBkZSBVSSBlbGVtZW50ZW5cclxuaW52dWxFbGVtZW50ZW5NYWtlbigpO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9