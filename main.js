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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGdNQUE2RTtBQUN6SCw0Q0FBNEMsMElBQWtEO0FBQzlGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsdUhBQXVIO0FBQ3ZILHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUZBQW1GLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM3TkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQy9CQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsb0I7Ozs7O1dDckJBLG1DOzs7Ozs7Ozs7Ozs7O0FDQXlCO0FBQzhDO0FBQ3ZFO0FBQ0E7QUFDQSxrRkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Mb3N0IENpdGllcywgY291bnRpbmcgYXBwLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9Mb3N0IENpdGllcywgY291bnRpbmcgYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Mb3N0IENpdGllcywgY291bnRpbmcgYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9Mb3N0IENpdGllcywgY291bnRpbmcgYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vTG9zdCBDaXRpZXMsIGNvdW50aW5nIGFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9Mb3N0IENpdGllcywgY291bnRpbmcgYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9Mb3N0IENpdGllcywgY291bnRpbmcgYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0xvc3QgQ2l0aWVzLCBjb3VudGluZyBhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vTG9zdCBDaXRpZXMsIGNvdW50aW5nIGFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0xvc3QgQ2l0aWVzLCBjb3VudGluZyBhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Mb3N0IENpdGllcywgY291bnRpbmcgYXBwLy4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL0xvc3QgQ2l0aWVzLCBjb3VudGluZyBhcHAvLi9zcmMvanMvX21vZHVsZXMvX2JlcmVrZW5pbmcuanMiLCJ3ZWJwYWNrOi8vTG9zdCBDaXRpZXMsIGNvdW50aW5nIGFwcC8uL3NyYy9qcy9fbW9kdWxlcy9faW52dWxFbGVtZW50TWFrZW4uanMiLCJ3ZWJwYWNrOi8vTG9zdCBDaXRpZXMsIGNvdW50aW5nIGFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Mb3N0IENpdGllcywgY291bnRpbmcgYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0xvc3QgQ2l0aWVzLCBjb3VudGluZyBhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0xvc3QgQ2l0aWVzLCBjb3VudGluZyBhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Mb3N0IENpdGllcywgY291bnRpbmcgYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTG9zdCBDaXRpZXMsIGNvdW50aW5nIGFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Mb3N0IENpdGllcywgY291bnRpbmcgYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0xvc3QgQ2l0aWVzLCBjb3VudGluZyBhcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL0xvc3QgQ2l0aWVzLCBjb3VudGluZyBhcHAvLi9zcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL1Ryb3BpY2FsLUp1bmdsZS1CYWNrZ3JvdW5kLUdyYXBoaWNzLTg0MzM5MjE3LTEud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZy9yb3RhdGUtcmV2ZXJzZS1zb2xpZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhaGlhbml0YSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk91dGZpdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLnJvb2Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgNjIsIDI2LCAwLjk4KTtcbn1cblxuLmdlZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCA1OSwgMC45KTtcbn1cblxuLmdyb2VuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOSwgMTU5LCA2MywgMC45NSk7XG59XG5cbi5ibGF1dyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDEyOSwgMTkzLCAwLjk1KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi53aXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQzLCAyNDYsIDAuOSk7XG59XG5cbmJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuLmNvbnRlbnRDb250YWluZXIge1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXJnaW46IDJyZW0gYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyMDBweCk7XG4gIGdhcDogMXJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XG4gIC5jb250ZW50Q29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzIwcHgpO1xuICB9XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXNoYWRvdzogMnB4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBncmlkLWNvbHVtbjogMS8tMTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM1MHB4KSB7XG4gIC50aXRsZSAudGl0bGUge1xuICAgIGdhcDogMC4xcmVtO1xuICB9XG59XG4udGl0bGVfbWFpbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkJhaGlhbml0YVwiLCBzZXJpZjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM1MHB4KSB7XG4gIC50aXRsZV9tYWluIHtcbiAgICBmb250LXNpemU6IDE1cmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNTBweCkge1xuICAudGl0bGVfbWFpbiB7XG4gICAgZm9udC1zaXplOiAyNXJlbTtcbiAgfVxufVxuLnRpdGxlX3N1YiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM1MHB4KSB7XG4gIC50aXRsZV9zdWIge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcbiAgLnRpdGxlX3N1YiB7XG4gICAgZm9udC1zaXplOiA4cmVtO1xuICB9XG59XG5cbi5lbGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1iYXNpczogYXV0bztcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgYm94LXNoYWRvdzogNnB4IDNweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5lbGVtIGgyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkJhaGlhbml0YVwiLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDRyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNTBweCkge1xuICAuZWxlbSBoMiB7XG4gICAgZm9udC1zaXplOiAxMHJlbTtcbiAgfVxufVxuLmVsZW0gZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbiAgZ2FwOiAwLjJlbTtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDJyZW0gMXJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XG4gIC5lbGVtIGZvcm0ge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufVxuLmVsZW0gZm9ybSBsZWdlbmQge1xuICBtYXJnaW46IDByZW0gYXV0byAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBncmlkLWNvbHVtbjogMS8tMTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XG4gIC5lbGVtIGZvcm0gbGVnZW5kIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxufVxuLmVsZW0gZm9ybSBsZWdlbmQ6bnRoLW9mLXR5cGUoMikge1xuICBtYXJnaW46IDJyZW0gYXV0byAwIGF1dG87XG59XG4uZWxlbSBmb3JtIGlucHV0IHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmVsZW0gZm9ybSBsYWJlbCB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcbiAgLmJ0biB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIH1cbn1cblxuLnNjb3JlRmxvYXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBhbmltYXRpb246IHNjb3JlQW5pbWF0aWUgMXMgZWFzZS1pbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XG4gIC5zY29yZUZsb2F0IHtcbiAgICBmb250LXNpemU6IDhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxufVxuQGtleWZyYW1lcyBzY29yZUFuaW1hdGllIHtcbiAgMjUlIHtcbiAgICBzY2FsZTogMCU7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XG4gICAgc2NhbGU6IDE1MCU7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICAgIHNjYWxlOiA5MCU7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgICBzY2FsZTogMTMwJTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICBzY2FsZTogOTUlO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgc2NhbGU6IDEwNSU7XG4gIH1cbiAgOTAlIHtcbiAgICBzY2FsZTogMTAwJTtcbiAgfVxufVxuXG4ucmVmcmVzaEJ1dHRvbiB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAzdnc7XG4gIGJvdHRvbTogMTAlO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xufVxuLnJlZnJlc2hCdXR0b24gLnJlZnJlc2hJY29uIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xufVxuLnJlZnJlc2hCdXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNTBweCkge1xuICAucmVmcmVzaEJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAxdnc7XG4gICAgYm90dG9tOiAwJTtcbiAgfVxufVxuXG4uaG9tZV9idG5fY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDRyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NmJmM2Q7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ob21lX2J0bl9jb250YWluZXIgYSB7XG4gIGNvbG9yOiAjZWUzMTI0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseURBQWlGO0VBQ2pGLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLDRC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YixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhaGlhbml0YSZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIk91dGZpdFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5yb29kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCA2MiwgMjYsIDAuOTgpO1xcbn1cXG5cXG4uZ2VlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCA1OSwgMC45KTtcXG59XFxuXFxuLmdyb2VuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDE1OSwgNjMsIDAuOTUpO1xcbn1cXG5cXG4uYmxhdXcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgMTI5LCAxOTMsIDAuOTUpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi53aXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0MywgMjQ2LCAwLjkpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL1Ryb3BpY2FsLUp1bmdsZS1CYWNrZ3JvdW5kLUdyYXBoaWNzLTg0MzM5MjE3LTEud2VicCk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4uY29udGVudENvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDIwMHB4KTtcXG4gIGdhcDogMXJlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcXG4gIC5jb250ZW50Q29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDMyMHB4KTtcXG4gIH1cXG59XFxuXFxuLnRpdGxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM1MHB4KSB7XFxuICAudGl0bGUgLnRpdGxlIHtcXG4gICAgZ2FwOiAwLjFyZW07XFxuICB9XFxufVxcbi50aXRsZV9tYWluIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFoaWFuaXRhXFxcIiwgc2VyaWY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM1MHB4KSB7XFxuICAudGl0bGVfbWFpbiB7XFxuICAgIGZvbnQtc2l6ZTogMTVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XFxuICAudGl0bGVfbWFpbiB7XFxuICAgIGZvbnQtc2l6ZTogMjVyZW07XFxuICB9XFxufVxcbi50aXRsZV9zdWIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNTBweCkge1xcbiAgLnRpdGxlX3N1YiB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcXG4gIC50aXRsZV9zdWIge1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICB9XFxufVxcblxcbi5lbGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1iYXNpczogYXV0bztcXG4gIGJvcmRlci1jb2xvcjogIzAwMDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBib3gtc2hhZG93OiA2cHggM3B4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4uZWxlbSBoMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogXFxcIkJhaGlhbml0YVxcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcXG4gIC5lbGVtIGgyIHtcXG4gICAgZm9udC1zaXplOiAxMHJlbTtcXG4gIH1cXG59XFxuLmVsZW0gZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgZ2FwOiAwLjJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAycmVtIDFyZW07XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XFxuICAuZWxlbSBmb3JtIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbn1cXG4uZWxlbSBmb3JtIGxlZ2VuZCB7XFxuICBtYXJnaW46IDByZW0gYXV0byAwIGF1dG87XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNTBweCkge1xcbiAgLmVsZW0gZm9ybSBsZWdlbmQge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB9XFxufVxcbi5lbGVtIGZvcm0gbGVnZW5kOm50aC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbjogMnJlbSBhdXRvIDAgYXV0bztcXG59XFxuLmVsZW0gZm9ybSBpbnB1dCB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5lbGVtIGZvcm0gbGFiZWwge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcXG4gIC5idG4ge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB9XFxufVxcblxcbi5zY29yZUZsb2F0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBhbmltYXRpb246IHNjb3JlQW5pbWF0aWUgMXMgZWFzZS1pbjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcXG4gIC5zY29yZUZsb2F0IHtcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNjb3JlQW5pbWF0aWUge1xcbiAgMjUlIHtcXG4gICAgc2NhbGU6IDAlO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xcbiAgICBzY2FsZTogMTUwJTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICAgIHNjYWxlOiA5MCU7XFxuICB9XFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcXG4gICAgc2NhbGU6IDEzMCU7XFxuICB9XFxuICA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XFxuICAgIHNjYWxlOiA5NSU7XFxuICB9XFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcXG4gICAgc2NhbGU6IDEwNSU7XFxuICB9XFxuICA5MCUge1xcbiAgICBzY2FsZTogMTAwJTtcXG4gIH1cXG59XFxuXFxuLnJlZnJlc2hCdXR0b24ge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDN2dztcXG4gIGJvdHRvbTogMTAlO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XFxufVxcbi5yZWZyZXNoQnV0dG9uIC5yZWZyZXNoSWNvbiB7XFxuICBjb250ZW50OiB1cmwoLi4vaW1nL3JvdGF0ZS1yZXZlcnNlLXNvbGlkLnN2Zyk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuLnJlZnJlc2hCdXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcXG4gIC5yZWZyZXNoQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMXZ3O1xcbiAgICBib3R0b206IDAlO1xcbiAgfVxcbn1cXG5cXG4uaG9tZV9idG5fY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NmJmM2Q7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaG9tZV9idG5fY29udGFpbmVyIGEge1xcbiAgY29sb3I6ICNlZTMxMjQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgY29uc3Qgc3ViU2NvcmVCZXJla2VuaW5nID0gZnVuY3Rpb24gKHN1YlNjb3JlID0gMCwgYmV0KSB7XHJcbiAgY29uc3Qgb3BzdGFydEtvc3RlbiA9IHN1YlNjb3JlIC0gMjA7XHJcbiAgaWYgKHN1YlNjb3JlIDw9IDEpIHJldHVybiAwOyAvLyBvciBoYW5kbGUgdGhpcyBjYXNlIGFzIG5lZWRlZFxyXG5cclxuICAvLyBNYWtlIHN1cmUgYmV0IGlzIGEgbnVtYmVyIChpZiBuZWVkZWQsIHBhcnNlIGl0KVxyXG4gIGNvbnN0IGJldE51bWJlciA9IHR5cGVvZiBiZXQgPT09IFwic3RyaW5nXCIgPyBwYXJzZUludChiZXQsIDEwKSA6IGJldDtcclxuXHJcbiAgc3dpdGNoIChiZXROdW1iZXIpIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgcmV0dXJuIG9wc3RhcnRLb3N0ZW4gKiAxO1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICByZXR1cm4gb3BzdGFydEtvc3RlbiAqIDI7XHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIHJldHVybiBvcHN0YXJ0S29zdGVuICogMzsgLy8gV2hlbiB1c2VyIHNlbGVjdHMgXCIyXCIsIG11bHRpcGx5IGJ5IDNcclxuICAgIGNhc2UgMzpcclxuICAgICAgcmV0dXJuIG9wc3RhcnRLb3N0ZW4gKiA0O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgY29uc29sZS5lcnJvcihcIk9uZ2VsZGlnZSB3ZWRkZW5zY2hhcFwiKTtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IHsgc3ViU2NvcmVCZXJla2VuaW5nIH0gZnJvbSBcIi4vX2JlcmVrZW5pbmcuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnZ1bEVsZW1lbnRlbk1ha2VuID0gZnVuY3Rpb24gKCkge1xyXG4gIC8vIERlZmluZSBhcnJheXMgZm9yIGVhY2ggY29sb3JcclxuICBsZXQgcHVudGVuUm9vZCA9IFtdO1xyXG4gIGxldCB3ZWRkZW5Sb29kID0gW107XHJcbiAgbGV0IHB1bnRlbkdlZWwgPSBbXTtcclxuICBsZXQgd2VkZGVuR2VlbCA9IFtdO1xyXG4gIGxldCBwdW50ZW5Hcm9lbiA9IFtdO1xyXG4gIGxldCB3ZWRkZW5Hcm9lbiA9IFtdO1xyXG4gIGxldCBwdW50ZW5CbGF1dyA9IFtdO1xyXG4gIGxldCB3ZWRkZW5CbGF1dyA9IFtdO1xyXG4gIGxldCBwdW50ZW5XaXQgPSBbXTtcclxuICBsZXQgd2VkZGVuV2l0ID0gW107XHJcblxyXG4gIC8vIE1hcCBjb2xvciBuYW1lcyB0byB0aGVpciBhcnJheXNcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgcm9vZDogeyBwdW50ZW46IHB1bnRlblJvb2QsIHdlZGRlbjogd2VkZGVuUm9vZCB9LFxyXG4gICAgZ2VlbDogeyBwdW50ZW46IHB1bnRlbkdlZWwsIHdlZGRlbjogd2VkZGVuR2VlbCB9LFxyXG4gICAgZ3JvZW46IHsgcHVudGVuOiBwdW50ZW5Hcm9lbiwgd2VkZGVuOiB3ZWRkZW5Hcm9lbiB9LFxyXG4gICAgYmxhdXc6IHsgcHVudGVuOiBwdW50ZW5CbGF1dywgd2VkZGVuOiB3ZWRkZW5CbGF1dyB9LFxyXG4gICAgd2l0OiB7IHB1bnRlbjogcHVudGVuV2l0LCB3ZWRkZW46IHdlZGRlbldpdCB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29udGFpbmVyXCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBBdHRhY2ggb25lIGdsb2JhbCBldmVudCBsaXN0ZW5lciBiZWZvcmUgdGhlIGZvckVhY2ggbG9vcFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBUaGlzIGxpc3RlbmVyIHVzZXMgZXZlbnQgZGVsZWdhdGlvbiB0byBoYW5kbGUgY2xpY2tzIG9uIGFueSBidXR0b24gd2l0aCB0aGUgJ2J0bicgY2xhc3MuXHJcbiAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiYnV0dG9uLmJ0blwiKSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAvLyBHZXQgdGhlIHBhcmVudCBzZWN0aW9uIHRoYXQgaGFzIHRoZSBkYXRhLWNvbG9yIGF0dHJpYnV0ZSAoZWFjaCBjb2xvciBzZWN0aW9uKVxyXG4gICAgICBjb25zdCBzZWN0aW9uID0gZS50YXJnZXQuY2xvc2VzdChcIi5lbGVtXCIpO1xyXG4gICAgICBpZiAoIXNlY3Rpb24pIHJldHVybjtcclxuXHJcbiAgICAgIC8vIFJldHJpZXZlIHRoZSBjb2xvciBmcm9tIGEgZGF0YSBhdHRyaWJ1dGUuXHJcbiAgICAgIGNvbnN0IGNvbG9yID0gc2VjdGlvbi5kYXRhc2V0LmNvbG9yO1xyXG4gICAgICBpZiAoIWRhdGFbY29sb3JdKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgTm8gZGF0YSBmb3VuZCBmb3IgY29sb3I6ICR7Y29sb3J9YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7IHB1bnRlbiwgd2VkZGVuIH0gPSBkYXRhW2NvbG9yXTtcclxuXHJcbiAgICAgIC8vIENvbnZlcnQgc3RyaW5nIElEcyB0byBudW1iZXJzIGFuZCBzdW0gdGhlbSB1cFxyXG4gICAgICBjb25zdCBzdW1QdW50ZW4gPSBwdW50ZW4ucmVkdWNlKFxyXG4gICAgICAgICh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwgKyBwYXJzZUludChjdXJyZW50LCAxMCksXHJcbiAgICAgICAgMCxcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgc3VtV2VkZGVuID0gd2VkZGVuLnJlZHVjZShcclxuICAgICAgICAodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsICsgcGFyc2VJbnQoY3VycmVudCwgMTApLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBURVNUIExvZ3NcclxuICAgICAgLy8gY29uc29sZS5sb2coYFZvb3Iga2xldXIgJHtjb2xvcn06YCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiUHVudGVuIHNvbTpcIiwgc3VtUHVudGVuKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJXZWRkZW5zY2hhcCBzb206XCIsIHN1bVdlZGRlbik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHN1YlNjb3JlQmVyZWtlbmluZyhzdW1QdW50ZW4sIHN1bVdlZGRlbikpO1xyXG5cclxuICAgICAgLy8gTG9vayBmb3IgYW4gZXhpc3RpbmcgZWxlbWVudCB0byBkaXNwbGF5IHRoZSBzY29yZS5cclxuICAgICAgbGV0IGZsb2F0RWwgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmVGbG9hdFwiKTtcclxuICAgICAgaWYgKCFmbG9hdEVsKSB7XHJcbiAgICAgICAgLy8gSWYgaXQgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0IGFuZCBhcHBlbmQgdG8gdGhlIHNlY3Rpb24uXHJcbiAgICAgICAgZmxvYXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZmxvYXRFbC5jbGFzc0xpc3QuYWRkKFwic2NvcmVGbG9hdFwiKTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGZsb2F0RWwpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgY29udGVudCBvZiB0aGUgc2NvcmUgZWxlbWVudC5cclxuICAgICAgZmxvYXRFbC5pbm5lckhUTUwgPSBzdWJTY29yZUJlcmVrZW5pbmcoc3VtUHVudGVuLCBzdW1XZWRkZW4pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gSGVscGVyIGZ1bmN0aW9ucyB0byBjcmVhdGUgRE9NIGVsZW1lbnRzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGNvbnN0IGNyZWF0ZUxlZ2VuZCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICBjb25zdCBsZWdlbmRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XHJcbiAgICBsZWdlbmRFbC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICByZXR1cm4gbGVnZW5kRWw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlTGFiZWwgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgY29uc3QgbGFiZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsRWwudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgcmV0dXJuIGxhYmVsRWw7XHJcbiAgfTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgc2V0IG9mIGlucHV0IGVsZW1lbnRzIGZvciB0aGUgZm9ybVxyXG4gIC8vIEZvciBlYWNoIGlucHV0LCBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdXBkYXRlIHRoZSBhcHByb3ByaWF0ZSBhcnJheXMgaW4gZGF0YVxyXG4gIGNvbnN0IGNyZWF0ZUlucHV0ID0gZnVuY3Rpb24gKG5hbWUsIGlucHV0TGVuZ3RoLCBjb2xvcikge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRMZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICBpbnB1dEVsLnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgIGlucHV0RWwubmFtZSA9IG5hbWU7XHJcbiAgICAgIC8vIEZvciBcIkthYXJ0XCIsIGlkIHN0YXJ0cyBhdCAyOyBmb3IgXCJXZWRkZW5zY2hhcFwiLCBhdCAxXHJcbiAgICAgIGlucHV0RWwuaWQgPSBgJHtuYW1lID09PSBcIkthYXJ0XCIgPyBpICsgMiA6IGkgKyAxfWA7XHJcblxyXG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcHVudGVuLCB3ZWRkZW4gfSA9IGRhdGFbY29sb3JdO1xyXG5cclxuICAgICAgICAvLyBXZWRkZW5zY2hhcCBkZXNlbGVjdCBldmVyeSBjaGVja2JveCBleGNlcHQgdGhlIHNlbGVjdGVkXHJcbiAgICAgICAgaWYgKHRoaXMubmFtZSA9PT0gXCJXZWRkZW5zY2hhcFwiICYmIHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgLy8gRGVzZWxlY3QgYWxsIG90aGVyIFdlZGRlbnNjaGFwIGNoZWNrYm94ZXMgaW4gdGhlIHNhbWUgY29sb3IgZ3JvdXBcclxuICAgICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICBgZGl2W2RhdGEtY29sb3I9JyR7Y29sb3J9J10gaW5wdXRbbmFtZT0nV2VkZGVuc2NoYXAnXWAsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94ICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgdW5jaGVja2VkIGNoZWNrYm94IGZyb20gdGhlIGFycmF5XHJcbiAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB3ZWRkZW4uaW5kZXhPZihjaGVja2JveC5pZCk7XHJcbiAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHdlZGRlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAgIGlmICh0aGlzLm5hbWUgPT09IFwiS2FhcnRcIikge1xyXG4gICAgICAgICAgICBwdW50ZW4ucHVzaCh0aGlzLmlkKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5uYW1lID09PSBcIldlZGRlbnNjaGFwXCIpIHtcclxuICAgICAgICAgICAgd2VkZGVuLnB1c2godGhpcy5pZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIEhlbHBlciB0byByZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5XHJcbiAgICAgICAgICBjb25zdCByZW1vdmVJdGVtID0gKGFyciwgaWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZihpZCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSBhcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZW1vdmVJdGVtKHB1bnRlbiwgdGhpcy5pZCk7XHJcbiAgICAgICAgICByZW1vdmVJdGVtKHdlZGRlbiwgdGhpcy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGVsZW1lbnRzLnB1c2goaW5wdXRFbCk7XHJcbiAgICAgIGVsZW1lbnRzLnB1c2goY3JlYXRlTGFiZWwoYCR7bmFtZX0gJHtuYW1lID09PSBcIkthYXJ0XCIgPyBpICsgMiA6IGkgKyAxfWApKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50cztcclxuICB9O1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gQ3JlYXRlIGVhY2ggY29sb3Igc2VjdGlvbiB3aXRoIGl0cyBvd24gYnV0dG9uXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGNvbnN0IGtsZXVyZW4gPSBbXCJyb29kXCIsIFwiZ2VlbFwiLCBcImdyb2VuXCIsIFwiYmxhdXdcIiwgXCJ3aXRcIl07XHJcbiAga2xldXJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjb2xvcikge1xyXG4gICAgLy8gQ3JlYXRlIHRoZSBjb250YWluZXIgZm9yIHRoaXMgY29sb3Igc2VjdGlvblxyXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAvLyBTdG9yZSB0aGUgY29sb3IgaW4gYSBkYXRhIGF0dHJpYnV0ZSBmb3IgZWFzeSBhY2Nlc3MgbGF0ZXJcclxuICAgIHNlY3Rpb24uZGF0YXNldC5jb2xvciA9IGNvbG9yO1xyXG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZWxlbVwiLCBjb2xvcik7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHRpdGxlXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gY29sb3I7XHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBmb3JtIGZvciBpbnB1dHNcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuXHJcbiAgICAvLyBBZGQgaW5wdXRzIGZvciBcIkthYXJ0ZW5cIlxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVMZWdlbmQoXCJLYWFydGVuXCIpKTtcclxuICAgIGNyZWF0ZUlucHV0KFwiS2FhcnRcIiwgOSwgY29sb3IpLmZvckVhY2goZWwgPT4gZm9ybS5hcHBlbmRDaGlsZChlbCkpO1xyXG5cclxuICAgIC8vIEFkZCBpbnB1dHMgZm9yIFwiV2VkZGVuc2NoYXBcIlxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVMZWdlbmQoXCJXZWRkZW5zY2hhcFwiKSk7XHJcbiAgICBjcmVhdGVJbnB1dChcIldlZGRlbnNjaGFwXCIsIDMsIGNvbG9yKS5mb3JFYWNoKGVsID0+IGZvcm0uYXBwZW5kQ2hpbGQoZWwpKTtcclxuXHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgYnV0dG9uIGZvciB0aGlzIHNlY3Rpb25cclxuICAgIGNvbnN0IGNhbGNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY2FsY0J1dHRvbi50ZXh0Q29udGVudCA9IFwiYmVyZWtlbmVuXCI7XHJcbiAgICBjYWxjQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNhbGNCdXR0b24pO1xyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgc2VjdGlvbiB0byB0aGUgYm9keVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuICB9KTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIENyZWF0ZSByZXNldCBidXR0b25cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgY29uc3QgY3JlYXRlUmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGNyZWF0ZVJlZnJlc2hCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlZnJlc2hCdXR0b25cIik7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNyZWF0ZUljb24uY2xhc3NMaXN0LmFkZChcInJlZnJlc2hJY29uXCIpO1xyXG5cclxuICBjcmVhdGVSZWZyZXNoQnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZUljb24pO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUmVmcmVzaEJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IHJlZmVzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVmcmVzaEJ1dHRvblwiKTtcclxuXHJcbiAgY29uc3QgcmVmcmVzaFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9O1xyXG5cclxuICByZWZlc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlZnJlc2hQYWdlKTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIENyZWF0ZSBtaWtlb3R0ZW5ob2ZmIGJ1dHRvblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgLy8gY29uc3QgaG9tZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAvLyBjb25zdCBob21lX2J0bl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAvLyBob21lX2J0bi5wcmV2ZW50RGVmYXVsdDtcclxuICAvLyBob21lX2J0bi5pbm5lckhUTUwgPSBcIm1pa2VvdHRlbmhvZmYubmxcIjtcclxuICAvLyBob21lX2J0bi5ocmVmID0gXCIuLi8uLi9pbmRleC5odG1sXCI7XHJcbiAgLy8gaG9tZV9idG5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lX2J0bl9jb250YWluZXJcIik7XHJcblxyXG4gIC8vIGhvbWVfYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChob21lX2J0bik7XHJcbiAgLy8gYm9keS5hcHBlbmRDaGlsZChob21lX2J0bl9jb250YWluZXIpO1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5iYXNlVVJJKSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL2Nzcy9tYWluLmNzc1wiO1xyXG5pbXBvcnQgeyBpbnZ1bEVsZW1lbnRlbk1ha2VuIH0gZnJvbSBcIi4vX21vZHVsZXMvX2ludnVsRWxlbWVudE1ha2VuLmpzXCI7XHJcblxyXG4vLyBNYWFrIGRlIFVJIGVsZW1lbnRlblxyXG5pbnZ1bEVsZW1lbnRlbk1ha2VuKCk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=