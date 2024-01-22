/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    display: grid;
    justify-items: center;
    align-items: center;
}

.wrapper{
    display: grid;
    min-width: 990px;
    max-width: 1080px;
    height: 100vh;
    grid-template-rows: 70px 1fr 70px;
    align-items: center;
    justify-items: center;
}

.page-body{
    border: 1px solid black;
    width: 100%;
    height: 100%;
}
.footer{
    border: 1px solid black;
    width: 100%;
    height: 100%;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,iCAAiC;IACjC,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;AAChB","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n.wrapper{\n    display: grid;\n    min-width: 990px;\n    max-width: 1080px;\n    height: 100vh;\n    grid-template-rows: 70px 1fr 70px;\n    align-items: center;\n    justify-items: center;\n}\n\n.page-body{\n    border: 1px solid black;\n    width: 100%;\n    height: 100%;\n}\n.footer{\n    border: 1px solid black;\n    width: 100%;\n    height: 100%;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/modules/gameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/modules/ship.js");


class Gameboard {
  constructor() {
    this.coordinates = [
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
      [
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
        { ship: null, isHit: false, isSunk: false },
      ],
    ];
  }
  //Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
  placeShip(shipLength, position, shipOrientation) {
    const shipObject = new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](shipLength, shipOrientation);
    shipObject.startPostion = position;
    const positionRow = position[0];
    const positionCol = position[1];
    if (this.coordinates[positionRow][positionCol].ship === null) {
      if (shipObject.orientation === 'H') {
        const shipEndpoint = positionCol + (shipObject.length - 1);
        shipObject.endPosition = shipEndpoint;
        if (shipObject.endPosition <= 9) {
          for (let i = 0; i < this.coordinates.length; i++) {
            for (let j = 0; j < this.coordinates[i].length; j++) {
              if (i === positionRow && j >= positionCol && j <= shipEndpoint) {
                if (this.coordinates[i][j].ship === null) {
                  this.coordinates[i][j].ship = shipObject;
                } else {
                  throw new Error('Invalid position: Already contains a ship');
                }
              }
            }
          }
        } else {
          throw new Error('Invalid Position: Out of bounds.');
        }
      } else if (shipObject.orientation === 'V') {
        const shipEndpoint = positionRow + (shipObject.length - 1);
        shipObject.endPosition = shipEndpoint;
        if (shipObject.endPosition <= 9) {
          for (let i = 0; i < this.coordinates.length; i++) {
            for (let j = 0; j < this.coordinates[i].length; j++) {
              if (j === positionCol && i >= positionRow && i <= shipEndpoint) {
                if (this.coordinates[i][j].ship === null) {
                  this.coordinates[i][j].ship = shipObject;
                } else {
                  throw new Error('Invalid position: Already contains a ship');
                }
              }
            }
          }
        } else {
          throw new Error('Invalid Position: Out of bounds.');
        }
      }
    } else {
      throw new Error('Invalid position: Already contains a ship');
    }
  }
  receiveAttack(position) {
    const positionRow = position[0];
    const positionCol = position[1];
    this.coordinates[positionRow].forEach((value, index) => {
      if (index === positionCol) {
        if (value.isHit === false && value.ship !== null) {
          value.ship.hit();
          value.isHit = true;
          if (value.ship.isSunk()) {
            for (let i = 0; i < this.coordinates.length; i++) {
              for (let j = 0; j < this.coordinates[i].length; j++) {
                if (this.coordinates[i][j].ship === value.ship) {
                  this.coordinates[i][j].isSunk = true;
                }
              }
            }
          }
        } else if (value.isHit === false && value.ship === null) {
          value.isHit = true;
        }
      }
    });
  }
  allShipsSunk() {
    let shipsNotSunk = [];
    for (let i = 0; i < this.coordinates.length; i++) {
      for (let j = 0; j < this.coordinates[i].length; j++) {
        if (
          this.coordinates[i][j].ship !== null &&
          this.coordinates[i][j].isSunk === false
        ) {
          shipsNotSunk.push(this.coordinates[i][j].ship);
        }
      }
    }
    if (shipsNotSunk.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Player {
  constructor(name, board) {
    this.name = name;
    this.board = board;
  }

  //method to place ships
  placeShipOnBoard(shipLength, position, orientation) {
    this.board.placeShip(shipLength, position, orientation);
  }
  //method to attack enemy
  attackEnemy(coordinates, enemyPlayer) {
    enemyPlayer.board.receiveAttack(coordinates);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  #nHits;
  constructor(length, orientation) {
    this.#nHits = 0;
    this.length = length;
    this.orientation = orientation;
    this.startPostion = null;
    this.endPosition = null;
  }
  hit() {
    if (this.#nHits < this.length) {
      this.#nHits++;
    } else {
      throw new Error('Hits cannot exceed length');
    }
  }
  isSunk() {
    if (this.length === this.#nHits) {
      return true;
    } else {
      return false;
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard.js */ "./src/modules/gameBoard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ "./src/modules/player.js");




function getPlayerName() {
  return prompt('Enter your name:');
}

const gameController = (() => {
  //create gameboards
  const playerGameBoard = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const computerGameBoard = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  //create players
  const humanPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_2__["default"](getPlayerName(), playerGameBoard);
  const aiPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_2__["default"]('AI', computerGameBoard);
  //place ships
  const shipSizes = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
  humanPlayer.placeShipOnBoard(1, [0, 0], 'V');
  humanPlayer.placeShipOnBoard(1, [9, 2], 'V');
  humanPlayer.placeShipOnBoard(1, [5, 3], 'V');
  humanPlayer.placeShipOnBoard(1, [2, 7], 'V');
  humanPlayer.placeShipOnBoard(2, [0, 3], 'V');
  humanPlayer.placeShipOnBoard(2, [3, 9], 'V');
  humanPlayer.placeShipOnBoard(2, [7, 6], 'V');
  humanPlayer.placeShipOnBoard(3, [6, 1], 'V');
  humanPlayer.placeShipOnBoard(3, [7, 3], 'V');
  humanPlayer.placeShipOnBoard(4, [3, 3], 'H');

  aiPlayer.placeShipOnBoard(1, [0, 0], 'V');
  aiPlayer.placeShipOnBoard(1, [9, 2], 'V');
  aiPlayer.placeShipOnBoard(1, [5, 3], 'V');
  aiPlayer.placeShipOnBoard(1, [2, 7], 'V');
  aiPlayer.placeShipOnBoard(2, [0, 3], 'V');
  aiPlayer.placeShipOnBoard(2, [3, 9], 'V');
  aiPlayer.placeShipOnBoard(2, [7, 6], 'V');
  aiPlayer.placeShipOnBoard(3, [6, 1], 'V');
  aiPlayer.placeShipOnBoard(3, [7, 3], 'V');
  aiPlayer.placeShipOnBoard(4, [3, 3], 'H');
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2I2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRDtBQUNBO0FBQ0EsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQ7QUFDQTtBQUNBLFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25EO0FBQ0E7QUFDQSxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRDtBQUNBO0FBQ0EsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQ7QUFDQTtBQUNBLFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25EO0FBQ0E7QUFDQSxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRDtBQUNBO0FBQ0EsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQ7QUFDQTtBQUNBLFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53cmFwcGVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWluLXdpZHRoOiA5OTBweDtcbiAgICBtYXgtd2lkdGg6IDEwODBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnIgNzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnBhZ2UtYm9keXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uZm9vdGVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud3JhcHBlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWluLXdpZHRoOiA5OTBweDtcXG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnIgNzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGFnZS1ib2R5e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLmZvb3RlcntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gW1xuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICBdO1xuICB9XG4gIC8vR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byBwbGFjZSBzaGlwcyBhdCBzcGVjaWZpYyBjb29yZGluYXRlcyBieSBjYWxsaW5nIHRoZSBzaGlwIGZhY3RvcnkgZnVuY3Rpb24uXG4gIHBsYWNlU2hpcChzaGlwTGVuZ3RoLCBwb3NpdGlvbiwgc2hpcE9yaWVudGF0aW9uKSB7XG4gICAgY29uc3Qgc2hpcE9iamVjdCA9IG5ldyBTaGlwKHNoaXBMZW5ndGgsIHNoaXBPcmllbnRhdGlvbik7XG4gICAgc2hpcE9iamVjdC5zdGFydFBvc3Rpb24gPSBwb3NpdGlvbjtcbiAgICBjb25zdCBwb3NpdGlvblJvdyA9IHBvc2l0aW9uWzBdO1xuICAgIGNvbnN0IHBvc2l0aW9uQ29sID0gcG9zaXRpb25bMV07XG4gICAgaWYgKHRoaXMuY29vcmRpbmF0ZXNbcG9zaXRpb25Sb3ddW3Bvc2l0aW9uQ29sXS5zaGlwID09PSBudWxsKSB7XG4gICAgICBpZiAoc2hpcE9iamVjdC5vcmllbnRhdGlvbiA9PT0gJ0gnKSB7XG4gICAgICAgIGNvbnN0IHNoaXBFbmRwb2ludCA9IHBvc2l0aW9uQ29sICsgKHNoaXBPYmplY3QubGVuZ3RoIC0gMSk7XG4gICAgICAgIHNoaXBPYmplY3QuZW5kUG9zaXRpb24gPSBzaGlwRW5kcG9pbnQ7XG4gICAgICAgIGlmIChzaGlwT2JqZWN0LmVuZFBvc2l0aW9uIDw9IDkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb29yZGluYXRlc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICBpZiAoaSA9PT0gcG9zaXRpb25Sb3cgJiYgaiA+PSBwb3NpdGlvbkNvbCAmJiBqIDw9IHNoaXBFbmRwb2ludCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCA9IHNoaXBPYmplY3Q7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwb3NpdGlvbjogQWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBvc2l0aW9uOiBPdXQgb2YgYm91bmRzLicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNoaXBPYmplY3Qub3JpZW50YXRpb24gPT09ICdWJykge1xuICAgICAgICBjb25zdCBzaGlwRW5kcG9pbnQgPSBwb3NpdGlvblJvdyArIChzaGlwT2JqZWN0Lmxlbmd0aCAtIDEpO1xuICAgICAgICBzaGlwT2JqZWN0LmVuZFBvc2l0aW9uID0gc2hpcEVuZHBvaW50O1xuICAgICAgICBpZiAoc2hpcE9iamVjdC5lbmRQb3NpdGlvbiA8PSA5KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29vcmRpbmF0ZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKGogPT09IHBvc2l0aW9uQ29sICYmIGkgPj0gcG9zaXRpb25Sb3cgJiYgaSA8PSBzaGlwRW5kcG9pbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb29yZGluYXRlc1tpXVtqXS5zaGlwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgPSBzaGlwT2JqZWN0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcG9zaXRpb246IEFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQb3NpdGlvbjogT3V0IG9mIGJvdW5kcy4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcG9zaXRpb246IEFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7XG4gICAgfVxuICB9XG4gIHJlY2VpdmVBdHRhY2socG9zaXRpb24pIHtcbiAgICBjb25zdCBwb3NpdGlvblJvdyA9IHBvc2l0aW9uWzBdO1xuICAgIGNvbnN0IHBvc2l0aW9uQ29sID0gcG9zaXRpb25bMV07XG4gICAgdGhpcy5jb29yZGluYXRlc1twb3NpdGlvblJvd10uZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGlmICh2YWx1ZS5pc0hpdCA9PT0gZmFsc2UgJiYgdmFsdWUuc2hpcCAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlLnNoaXAuaGl0KCk7XG4gICAgICAgICAgdmFsdWUuaXNIaXQgPSB0cnVlO1xuICAgICAgICAgIGlmICh2YWx1ZS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvb3JkaW5hdGVzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCA9PT0gdmFsdWUuc2hpcCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlc1tpXVtqXS5pc1N1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pc0hpdCA9PT0gZmFsc2UgJiYgdmFsdWUuc2hpcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBsZXQgc2hpcHNOb3RTdW5rID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29vcmRpbmF0ZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbaV1bal0uaXNTdW5rID09PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwc05vdFN1bmsucHVzaCh0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwc05vdFN1bmsubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgYm9hcmQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgfVxuXG4gIC8vbWV0aG9kIHRvIHBsYWNlIHNoaXBzXG4gIHBsYWNlU2hpcE9uQm9hcmQoc2hpcExlbmd0aCwgcG9zaXRpb24sIG9yaWVudGF0aW9uKSB7XG4gICAgdGhpcy5ib2FyZC5wbGFjZVNoaXAoc2hpcExlbmd0aCwgcG9zaXRpb24sIG9yaWVudGF0aW9uKTtcbiAgfVxuICAvL21ldGhvZCB0byBhdHRhY2sgZW5lbXlcbiAgYXR0YWNrRW5lbXkoY29vcmRpbmF0ZXMsIGVuZW15UGxheWVyKSB7XG4gICAgZW5lbXlQbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICAjbkhpdHM7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgb3JpZW50YXRpb24pIHtcbiAgICB0aGlzLiNuSGl0cyA9IDA7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgIHRoaXMuc3RhcnRQb3N0aW9uID0gbnVsbDtcbiAgICB0aGlzLmVuZFBvc2l0aW9uID0gbnVsbDtcbiAgfVxuICBoaXQoKSB7XG4gICAgaWYgKHRoaXMuI25IaXRzIDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuI25IaXRzKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGl0cyBjYW5ub3QgZXhjZWVkIGxlbmd0aCcpO1xuICAgIH1cbiAgfVxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLiNuSGl0cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIuanMnO1xuXG5mdW5jdGlvbiBnZXRQbGF5ZXJOYW1lKCkge1xuICByZXR1cm4gcHJvbXB0KCdFbnRlciB5b3VyIG5hbWU6Jyk7XG59XG5cbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKCgpID0+IHtcbiAgLy9jcmVhdGUgZ2FtZWJvYXJkc1xuICBjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGNvbXB1dGVyR2FtZUJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAvL2NyZWF0ZSBwbGF5ZXJzXG4gIGNvbnN0IGh1bWFuUGxheWVyID0gbmV3IFBsYXllcihnZXRQbGF5ZXJOYW1lKCksIHBsYXllckdhbWVCb2FyZCk7XG4gIGNvbnN0IGFpUGxheWVyID0gbmV3IFBsYXllcignQUknLCBjb21wdXRlckdhbWVCb2FyZCk7XG4gIC8vcGxhY2Ugc2hpcHNcbiAgY29uc3Qgc2hpcFNpemVzID0gWzEsIDEsIDEsIDEsIDIsIDIsIDIsIDMsIDMsIDRdO1xuICBodW1hblBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDEsIFswLCAwXSwgJ1YnKTtcbiAgaHVtYW5QbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgxLCBbOSwgMl0sICdWJyk7XG4gIGh1bWFuUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMSwgWzUsIDNdLCAnVicpO1xuICBodW1hblBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDEsIFsyLCA3XSwgJ1YnKTtcbiAgaHVtYW5QbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgyLCBbMCwgM10sICdWJyk7XG4gIGh1bWFuUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMiwgWzMsIDldLCAnVicpO1xuICBodW1hblBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDIsIFs3LCA2XSwgJ1YnKTtcbiAgaHVtYW5QbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgzLCBbNiwgMV0sICdWJyk7XG4gIGh1bWFuUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMywgWzcsIDNdLCAnVicpO1xuICBodW1hblBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDQsIFszLCAzXSwgJ0gnKTtcblxuICBhaVBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDEsIFswLCAwXSwgJ1YnKTtcbiAgYWlQbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgxLCBbOSwgMl0sICdWJyk7XG4gIGFpUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMSwgWzUsIDNdLCAnVicpO1xuICBhaVBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDEsIFsyLCA3XSwgJ1YnKTtcbiAgYWlQbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgyLCBbMCwgM10sICdWJyk7XG4gIGFpUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMiwgWzMsIDldLCAnVicpO1xuICBhaVBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDIsIFs3LCA2XSwgJ1YnKTtcbiAgYWlQbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgzLCBbNiwgMV0sICdWJyk7XG4gIGFpUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMywgWzcsIDNdLCAnVicpO1xuICBhaVBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDQsIFszLCAzXSwgJ0gnKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=