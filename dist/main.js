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
    display: flex;
    justify-content: center;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,iCAAiC;IACjC,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;AAChB","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.wrapper{\n    display: grid;\n    min-width: 990px;\n    max-width: 1080px;\n    height: 100vh;\n    grid-template-rows: 70px 1fr 70px;\n    align-items: center;\n    justify-items: center;\n}\n\n.page-body{\n    border: 1px solid black;\n    width: 100%;\n    height: 100%;\n}\n.footer{\n    border: 1px solid black;\n    width: 100%;\n    height: 100%;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2I2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRDtBQUNBO0FBQ0EsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQ7QUFDQTtBQUNBLFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25EO0FBQ0E7QUFDQSxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRDtBQUNBO0FBQ0EsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQ7QUFDQTtBQUNBLFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25EO0FBQ0E7QUFDQSxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRCxVQUFVLHlDQUF5QztBQUNuRDtBQUNBO0FBQ0EsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQsVUFBVSx5Q0FBeUM7QUFDbkQ7QUFDQTtBQUNBLFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNBQXlDO0FBQ25ELFVBQVUseUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndyYXBwZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtaW4td2lkdGg6IDk5MHB4O1xuICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA3MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ucGFnZS1ib2R5e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5mb290ZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1pbi13aWR0aDogOTkwcHg7XFxuICAgIG1heC13aWR0aDogMTA4MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDcwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBhZ2UtYm9keXtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5mb290ZXJ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IFtcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlLCBpc1N1bms6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSwgaXNTdW5rOiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UsIGlzU3VuazogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgXTtcbiAgfVxuICAvL0dhbWVib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcGxhY2Ugc2hpcHMgYXQgc3BlY2lmaWMgY29vcmRpbmF0ZXMgYnkgY2FsbGluZyB0aGUgc2hpcCBmYWN0b3J5IGZ1bmN0aW9uLlxuICBwbGFjZVNoaXAoc2hpcExlbmd0aCwgcG9zaXRpb24sIHNoaXBPcmllbnRhdGlvbikge1xuICAgIGNvbnN0IHNoaXBPYmplY3QgPSBuZXcgU2hpcChzaGlwTGVuZ3RoLCBzaGlwT3JpZW50YXRpb24pO1xuICAgIHNoaXBPYmplY3Quc3RhcnRQb3N0aW9uID0gcG9zaXRpb247XG4gICAgY29uc3QgcG9zaXRpb25Sb3cgPSBwb3NpdGlvblswXTtcbiAgICBjb25zdCBwb3NpdGlvbkNvbCA9IHBvc2l0aW9uWzFdO1xuICAgIGlmICh0aGlzLmNvb3JkaW5hdGVzW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbF0uc2hpcCA9PT0gbnVsbCkge1xuICAgICAgaWYgKHNoaXBPYmplY3Qub3JpZW50YXRpb24gPT09ICdIJykge1xuICAgICAgICBjb25zdCBzaGlwRW5kcG9pbnQgPSBwb3NpdGlvbkNvbCArIChzaGlwT2JqZWN0Lmxlbmd0aCAtIDEpO1xuICAgICAgICBzaGlwT2JqZWN0LmVuZFBvc2l0aW9uID0gc2hpcEVuZHBvaW50O1xuICAgICAgICBpZiAoc2hpcE9iamVjdC5lbmRQb3NpdGlvbiA8PSA5KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29vcmRpbmF0ZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKGkgPT09IHBvc2l0aW9uUm93ICYmIGogPj0gcG9zaXRpb25Db2wgJiYgaiA8PSBzaGlwRW5kcG9pbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb29yZGluYXRlc1tpXVtqXS5zaGlwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgPSBzaGlwT2JqZWN0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcG9zaXRpb246IEFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQb3NpdGlvbjogT3V0IG9mIGJvdW5kcy4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaGlwT2JqZWN0Lm9yaWVudGF0aW9uID09PSAnVicpIHtcbiAgICAgICAgY29uc3Qgc2hpcEVuZHBvaW50ID0gcG9zaXRpb25Sb3cgKyAoc2hpcE9iamVjdC5sZW5ndGggLSAxKTtcbiAgICAgICAgc2hpcE9iamVjdC5lbmRQb3NpdGlvbiA9IHNoaXBFbmRwb2ludDtcbiAgICAgICAgaWYgKHNoaXBPYmplY3QuZW5kUG9zaXRpb24gPD0gOSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvb3JkaW5hdGVzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChqID09PSBwb3NpdGlvbkNvbCAmJiBpID49IHBvc2l0aW9uUm93ICYmIGkgPD0gc2hpcEVuZHBvaW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlc1tpXVtqXS5zaGlwID0gc2hpcE9iamVjdDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBvc2l0aW9uOiBBbHJlYWR5IGNvbnRhaW5zIGEgc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUG9zaXRpb246IE91dCBvZiBib3VuZHMuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBvc2l0aW9uOiBBbHJlYWR5IGNvbnRhaW5zIGEgc2hpcCcpO1xuICAgIH1cbiAgfVxuICByZWNlaXZlQXR0YWNrKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgcG9zaXRpb25Sb3cgPSBwb3NpdGlvblswXTtcbiAgICBjb25zdCBwb3NpdGlvbkNvbCA9IHBvc2l0aW9uWzFdO1xuICAgIHRoaXMuY29vcmRpbmF0ZXNbcG9zaXRpb25Sb3ddLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSBwb3NpdGlvbkNvbCkge1xuICAgICAgICBpZiAodmFsdWUuaXNIaXQgPT09IGZhbHNlICYmIHZhbHVlLnNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZS5zaGlwLmhpdCgpO1xuICAgICAgICAgIHZhbHVlLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodmFsdWUuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb29yZGluYXRlc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgPT09IHZhbHVlLnNoaXApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbaV1bal0uaXNTdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaXNIaXQgPT09IGZhbHNlICYmIHZhbHVlLnNoaXAgPT09IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZS5pc0hpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgbGV0IHNoaXBzTm90U3VuayA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvb3JkaW5hdGVzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgIT09IG51bGwgJiZcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLmlzU3VuayA9PT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2hpcHNOb3RTdW5rLnB1c2godGhpcy5jb29yZGluYXRlc1tpXVtqXS5zaGlwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hpcHNOb3RTdW5rLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvYXJkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gIH1cblxuICAvL21ldGhvZCB0byBwbGFjZSBzaGlwc1xuICBwbGFjZVNoaXBPbkJvYXJkKHNoaXBMZW5ndGgsIHBvc2l0aW9uLCBvcmllbnRhdGlvbikge1xuICAgIHRoaXMuYm9hcmQucGxhY2VTaGlwKHNoaXBMZW5ndGgsIHBvc2l0aW9uLCBvcmllbnRhdGlvbik7XG4gIH1cbiAgLy9tZXRob2QgdG8gYXR0YWNrIGVuZW15XG4gIGF0dGFja0VuZW15KGNvb3JkaW5hdGVzLCBlbmVteVBsYXllcikge1xuICAgIGVuZW15UGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgI25IaXRzO1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgdGhpcy4jbkhpdHMgPSAwO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICB0aGlzLnN0YXJ0UG9zdGlvbiA9IG51bGw7XG4gICAgdGhpcy5lbmRQb3NpdGlvbiA9IG51bGw7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLiNuSGl0cyA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLiNuSGl0cysrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hpdHMgY2Fubm90IGV4Y2VlZCBsZW5ndGgnKTtcbiAgICB9XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy4jbkhpdHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVCb2FyZC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyLmpzJztcblxuZnVuY3Rpb24gZ2V0UGxheWVyTmFtZSgpIHtcbiAgcmV0dXJuIHByb21wdCgnRW50ZXIgeW91ciBuYW1lOicpO1xufVxuXG5jb25zdCBnYW1lQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIC8vY3JlYXRlIGdhbWVib2FyZHNcbiAgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICBjb25zdCBjb21wdXRlckdhbWVCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgLy9jcmVhdGUgcGxheWVyc1xuICBjb25zdCBodW1hblBsYXllciA9IG5ldyBQbGF5ZXIoZ2V0UGxheWVyTmFtZSgpLCBwbGF5ZXJHYW1lQm9hcmQpO1xuICBjb25zdCBhaVBsYXllciA9IG5ldyBQbGF5ZXIoJ0FJJywgY29tcHV0ZXJHYW1lQm9hcmQpO1xuICAvL3BsYWNlIHNoaXBzXG4gIGNvbnN0IHNoaXBTaXplcyA9IFsxLCAxLCAxLCAxLCAyLCAyLCAyLCAzLCAzLCA0XTtcbiAgaHVtYW5QbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgxLCBbMCwgMF0sICdWJyk7XG4gIGh1bWFuUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMSwgWzksIDJdLCAnVicpO1xuICBodW1hblBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDEsIFs1LCAzXSwgJ1YnKTtcbiAgaHVtYW5QbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgxLCBbMiwgN10sICdWJyk7XG4gIGh1bWFuUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMiwgWzAsIDNdLCAnVicpO1xuICBodW1hblBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDIsIFszLCA5XSwgJ1YnKTtcbiAgaHVtYW5QbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgyLCBbNywgNl0sICdWJyk7XG4gIGh1bWFuUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMywgWzYsIDFdLCAnVicpO1xuICBodW1hblBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDMsIFs3LCAzXSwgJ1YnKTtcbiAgaHVtYW5QbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCg0LCBbMywgM10sICdIJyk7XG5cbiAgYWlQbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgxLCBbMCwgMF0sICdWJyk7XG4gIGFpUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMSwgWzksIDJdLCAnVicpO1xuICBhaVBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDEsIFs1LCAzXSwgJ1YnKTtcbiAgYWlQbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgxLCBbMiwgN10sICdWJyk7XG4gIGFpUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMiwgWzAsIDNdLCAnVicpO1xuICBhaVBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDIsIFszLCA5XSwgJ1YnKTtcbiAgYWlQbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCgyLCBbNywgNl0sICdWJyk7XG4gIGFpUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoMywgWzYsIDFdLCAnVicpO1xuICBhaVBsYXllci5wbGFjZVNoaXBPbkJvYXJkKDMsIFs3LCAzXSwgJ1YnKTtcbiAgYWlQbGF5ZXIucGxhY2VTaGlwT25Cb2FyZCg0LCBbMywgM10sICdIJyk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9