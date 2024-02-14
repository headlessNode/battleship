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
    font-family: 'Cinzel', serif;
}

.wrapper{
    min-height: 100svh;
    display: grid;
    grid-template-rows: 150px 1fr 70px;
    align-items: center;
    justify-items: center;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}

.header{
    height: 100%;
    width: 100%;
    font-size: 30px;
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 10px;
}
.notification{
    font-size: 20px;
    grid-row: 2/3;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.page-body{
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: center;
}
.orientation-btn{
    cursor: pointer;
    width: 6rem;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: #C2C2FF;
    border-radius: 5px;
}

.orientation-btn:hover{
    background: #9999FF;
}

.current-ship{
    width: 10rem;
    text-align: center;
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 10px;
}

.btn-container{
    width: 20rem;
    font-size: 20px;
    grid-row: 1/2;
    grid-column: 1/3;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
}

.initial-board{
    grid-column: 1/3;
    margin-top: 2rem;
}

.boards{
    grid-column: 1/3;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(354px, 1fr));
    justify-items: center;
    gap: 21px;
}

.board-one .row, .board-two .row, .initial-board .row{
    display: flex;
    align-items: center;
    justify-content: center;
}

.board-one .row .block, .board-two .row .block, .initial-board .row .block{
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.board-two .row .block, .initial-board .row .block{
    border: 1px solid #b4b4ff;
}

.board-two .row .block.hover:hover, .initial-board .row .block.hover:hover{
    cursor: crosshair;
    border: 2px solid #58355E;
    background: rgba(0,0,255,.05);
}

.footer{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.footer a i{
    transform: rotateZ(0) scale(1);
    transition: transform 0.5s ease;
}

.footer a i:hover{
    transform: rotateZ(360deg) scale(1.5);
}

.end-dialog[open]{
    opacity: 1;
    transform: translateY(0);
}

.end-dialog{
    margin: auto auto;
    border: none;
    border-radius: 10px;
    width: 250px;
    height: 150px;
    transition: 
        opacity 600ms ease-in-out,
        transform 300ms ease-in-out;
}

@starting-style{
    .end-dialog[open]{
        opacity: 0;
        transform: translateY(100px);
    }
}

.end-dialog form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.end-dialog form button{
    width: 120px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background: #136290;
    color: white;
    font-size: large;
    cursor: pointer;
}

.end-dialog form button:hover{
    background: #1A87C7;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,qBAAqB;IACrB,mEAAmE;AACvE;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;AACb;AACA;IACI,eAAe;IACf,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,2DAA2D;IAC3D,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,UAAU;IACV,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb;;mCAE+B;AACnC;;AAEA;IACI;QACI,UAAU;QACV,4BAA4B;IAChC;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Cinzel', serif;\n}\n\n.wrapper{\n    min-height: 100svh;\n    display: grid;\n    grid-template-rows: 150px 1fr 70px;\n    align-items: center;\n    justify-items: center;\n    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);\n}\n\n.header{\n    height: 100%;\n    width: 100%;\n    font-size: 30px;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    gap: 10px;\n}\n.notification{\n    font-size: 20px;\n    grid-row: 2/3;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 20px;\n}\n\n.page-body{\n    height: 100%;\n    width: 100%;\n    display: grid;\n    justify-items: center;\n}\n.orientation-btn{\n    cursor: pointer;\n    width: 6rem;\n    height: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    background: #C2C2FF;\n    border-radius: 5px;\n}\n\n.orientation-btn:hover{\n    background: #9999FF;\n}\n\n.current-ship{\n    width: 10rem;\n    text-align: center;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    gap: 10px;\n}\n\n.btn-container{\n    width: 20rem;\n    font-size: 20px;\n    grid-row: 1/2;\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4rem;\n}\n\n.initial-board{\n    grid-column: 1/3;\n    margin-top: 2rem;\n}\n\n.boards{\n    grid-column: 1/3;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(354px, 1fr));\n    justify-items: center;\n    gap: 21px;\n}\n\n.board-one .row, .board-two .row, .initial-board .row{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.board-one .row .block, .board-two .row .block, .initial-board .row .block{\n    height: 2rem;\n    width: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board-two .row .block, .initial-board .row .block{\n    border: 1px solid #b4b4ff;\n}\n\n.board-two .row .block.hover:hover, .initial-board .row .block.hover:hover{\n    cursor: crosshair;\n    border: 2px solid #58355E;\n    background: rgba(0,0,255,.05);\n}\n\n.footer{\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.footer a i{\n    transform: rotateZ(0) scale(1);\n    transition: transform 0.5s ease;\n}\n\n.footer a i:hover{\n    transform: rotateZ(360deg) scale(1.5);\n}\n\n.end-dialog[open]{\n    opacity: 1;\n    transform: translateY(0);\n}\n\n.end-dialog{\n    margin: auto auto;\n    border: none;\n    border-radius: 10px;\n    width: 250px;\n    height: 150px;\n    transition: \n        opacity 600ms ease-in-out,\n        transform 300ms ease-in-out;\n}\n\n@starting-style{\n    .end-dialog[open]{\n        opacity: 0;\n        transform: translateY(100px);\n    }\n}\n\n.end-dialog form{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.end-dialog form button{\n    width: 120px;\n    height: 50px;\n    border: none;\n    border-radius: 5px;\n    background: #136290;\n    color: white;\n    font-size: large;\n    cursor: pointer;\n}\n\n.end-dialog form button:hover{\n    background: #1A87C7;\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeDOM: () => (/* binding */ initializeDOM),
/* harmony export */   renderAiBoard: () => (/* binding */ renderAiBoard),
/* harmony export */   renderHumanBoard: () => (/* binding */ renderHumanBoard),
/* harmony export */   updateAiBoard: () => (/* binding */ updateAiBoard),
/* harmony export */   updateHumanBoard: () => (/* binding */ updateHumanBoard)
/* harmony export */ });
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/modules/main.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/modules/player.js");



function renderHumanBoard(humanBoard) {
  const boardOne = document.createElement('div');
  boardOne.classList.add('board-one');
  const boards = document.querySelector('.boards');
  //create board for humanPlayer
  for (let i = 0; i <= 9; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    boardOne.appendChild(row);
    for (let j = 0; j <= 9; j++) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.dataset.xIndex = j;
      block.dataset.yIndex = i;
      if (
        //for ship with vertical orientation
        humanBoard.coordinates[i][j].ship !== null &&
        humanBoard.coordinates[i][j].ship !== 'x' &&
        humanBoard.coordinates[i][j].ship.orientation === 'V'
      ) {
        block.classList.add('ship-present');
        block.style.border = '2px solid #00f';
        block.style.background = 'rgba(0,0,255,.05)';
        //if there is a ship-part below
        if (
          i + 1 <= 9 &&
          humanBoard.coordinates[i + 1][j].ship !== null &&
          humanBoard.coordinates[i + 1][j].ship !== 'x'
        ) {
          block.style.borderBottom = 'none';
          block.style.borderBottom = '1px solid #b4b4ff';
        }
        //if there is a ship-part above
        if (
          i - 1 >= 0 &&
          humanBoard.coordinates[i - 1][j].ship !== null &&
          humanBoard.coordinates[i - 1][j].ship !== 'x'
        ) {
          block.style.borderTop = 'none';
          block.style.borderTop = '1px solid #b4b4ff';
        }
        //for ship with horizontal orientation
      } else if (
        humanBoard.coordinates[i][j].ship !== null &&
        humanBoard.coordinates[i][j].ship !== 'x' &&
        humanBoard.coordinates[i][j].ship.orientation === 'H'
      ) {
        block.classList.add('ship-present');
        block.style.border = '2px solid #00f';
        block.style.background = 'rgba(0,0,255,.05)';
        //if there is a ship-part to the right
        if (
          j + 1 <= 9 &&
          humanBoard.coordinates[i][j + 1].ship !== null &&
          humanBoard.coordinates[i][j + 1].ship !== 'x'
        ) {
          block.style.borderRight = 'none';
          block.style.borderRight = '1px solid #b4b4ff';
        }
        if (
          j - 1 >= 0 &&
          humanBoard.coordinates[i][j - 1].ship !== null &&
          humanBoard.coordinates[i][j - 1].ship !== 'x'
        ) {
          block.style.borderLeft = 'none';
          block.style.borderLeft = '1px solid #b4b4ff';
        }
      } else {
        block.style.border = '1px solid #b4b4ff';
      }
      row.appendChild(block);
    }
  }
  boards.appendChild(boardOne);
}
function renderAiBoard(aiBoard) {
  const boardTwo = document.createElement('div');
  boardTwo.classList.add('board-two');
  const boards = document.querySelector('.boards');

  //create board for aiPlayer
  for (let i = 0; i <= 9; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    boardTwo.appendChild(row);
    for (let j = 0; j <= 9; j++) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.classList.add('hover');
      block.dataset.xIndex = j;
      block.dataset.yIndex = i;
      if (
        aiBoard.coordinates[i][j].ship !== null &&
        aiBoard.coordinates[i][j].ship !== 'x'
      ) {
        block.classList.add('ship-present');
      }
      row.appendChild(block);
    }
  }
  boards.appendChild(boardTwo);
}

function updateHumanBoard(humanBoard, attackedIndex) {
  const yIndex = attackedIndex[0];
  const xIndex = attackedIndex[1];
  const board = document.querySelector('.board-one');
  const attackedCell = board.querySelector(
    `.block[data-x-index="${xIndex}"][data-y-index="${yIndex}"]`,
  );
  if (attackedCell.classList.contains('ship-present')) {
    attackedCell.innerHTML =
      '<svg width = "30" height = "30" viewBox="0 0 24 24" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><path d="M19 19 5 5m14 0L5 19" style="fill:none;stroke:red;stroke-linecap:round;stroke-linejoin:round;stroke-width:.9600000000000002"/></svg>';
    //add 1 in row and col
    if (yIndex + 1 <= 9 && xIndex + 1 <= 9) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex + 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      humanBoard.coordinates[yIndex + 1][xIndex + 1].isHit = true;
    }
    //add 1 in row subt 1 in col
    if (yIndex + 1 <= 9 && xIndex - 1 >= 0) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex + 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      humanBoard.coordinates[yIndex + 1][xIndex - 1].isHit = true;
    }
    //sub 1 in row sub 1 in col
    if (yIndex - 1 >= 0 && xIndex - 1 >= 0) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex - 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      humanBoard.coordinates[yIndex - 1][xIndex - 1].isHit = true;
    }
    //sub 1 in row add 1 in col
    if (yIndex - 1 >= 0 && xIndex + 1 <= 9) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex - 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      humanBoard.coordinates[yIndex - 1][xIndex + 1].isHit = true;
    }

    //if the ship is sunk add borders to the whole lenght of the ship
    if (humanBoard.coordinates[yIndex][xIndex].ship.isSunk()) {
      if (humanBoard.coordinates[yIndex][xIndex].ship.orientation === 'H') {
        const startIndex =
          humanBoard.coordinates[yIndex][xIndex].ship.startPosition[1];
        const endIndex =
          humanBoard.coordinates[yIndex][xIndex].ship.endPosition;
        //add dots to start - 1
        if (startIndex - 1 >= 0) {
          const dottedCellBefore = board.querySelector(
            `.block[data-x-index="${startIndex - 1}"][data-y-index="${yIndex}"]`,
          );
          dottedCellBefore.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellBefore.style.fontSize = '2rem';
          dottedCellBefore.style.background = '#CAD2E3';
          dottedCellBefore.classList.remove('hover');
          humanBoard.coordinates[yIndex][startIndex - 1].isHit = true;
        }
        //add dots to end + 1
        if (endIndex + 1 <= 9) {
          const dottedCellAfter = board.querySelector(
            `.block[data-x-index="${endIndex + 1}"][data-y-index="${yIndex}"]`,
          );
          dottedCellAfter.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellAfter.style.fontSize = '2rem';
          dottedCellAfter.style.background = '#CAD2E3';
          dottedCellAfter.classList.remove('hover');
          humanBoard.coordinates[yIndex][endIndex + 1].isHit = true;
        }
        //also add dots above and below if the ship is of length 1
        if (humanBoard.coordinates[yIndex][xIndex].ship.length === 1) {
          if (yIndex + 1 <= 9) {
            const dottedCellAbove = board.querySelector(
              `.block[data-x-index="${xIndex}"][data-y-index="${yIndex + 1}"]`,
            );
            dottedCellAbove.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellAbove.style.fontSize = '2rem';
            dottedCellAbove.style.background = '#CAD2E3';
            dottedCellAbove.classList.remove('hover');
            humanBoard.coordinates[yIndex + 1][xIndex].isHit = true;
          }
          if (yIndex - 1 >= 0) {
            const dottedCellBelow = board.querySelector(
              `.block[data-x-index="${xIndex}"][data-y-index="${yIndex - 1}"]`,
            );
            dottedCellBelow.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellBelow.style.fontSize = '2rem';
            dottedCellBelow.style.background = '#CAD2E3';
            dottedCellBelow.classList.remove('hover');
            humanBoard.coordinates[yIndex - 1][xIndex].isHit = true;
          }
        }

        for (let i = startIndex; i <= endIndex; i++) {
          const shipCell = board.querySelector(
            `.block[data-x-index="${i}"][data-y-index="${humanBoard.coordinates[yIndex][xIndex].ship.startPosition[0]}"]`,
          );
          if (i < endIndex) {
            shipCell.style.borderLeft = '2px solid red';
            shipCell.style.borderTop = '2px solid red';
            shipCell.style.borderBottom = '2px solid red';
          } else {
            shipCell.style.border = '2px solid red';
          }
        }
      } else {
        const startIndex =
          humanBoard.coordinates[yIndex][xIndex].ship.startPosition[0];
        const endIndex =
          humanBoard.coordinates[yIndex][xIndex].ship.endPosition;
        //add dots to start - 1
        if (startIndex - 1 >= 0) {
          const dottedCellBefore = board.querySelector(
            `.block[data-x-index="${xIndex}"][data-y-index="${startIndex - 1}"]`,
          );
          dottedCellBefore.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellBefore.style.fontSize = '2rem';
          dottedCellBefore.style.background = '#CAD2E3';
          dottedCellBefore.classList.remove('hover');
          humanBoard.coordinates[startIndex - 1][xIndex].isHit = true;
        }
        //add dots to end + 1
        if (endIndex + 1 <= 9) {
          const dottedCellAfter = board.querySelector(
            `.block[data-x-index="${xIndex}"][data-y-index="${endIndex + 1}"]`,
          );
          dottedCellAfter.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellAfter.style.fontSize = '2rem';
          dottedCellAfter.style.background = '#CAD2E3';
          dottedCellAfter.classList.remove('hover');
          humanBoard.coordinates[endIndex + 1][xIndex].isHit = true;
        }
        //also add dots left and right if the ship is of length 1
        if (humanBoard.coordinates[yIndex][xIndex].ship.length === 1) {
          if (xIndex + 1 <= 9) {
            const dottedCellRight = board.querySelector(
              `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex}"]`,
            );
            dottedCellRight.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellRight.style.fontSize = '2rem';
            dottedCellRight.style.background = '#CAD2E3';
            dottedCellRight.classList.remove('hover');
            humanBoard.coordinates[yIndex][xIndex + 1].isHit = true;
          }
          if (xIndex - 1 >= 0) {
            const dottedCellLeft = board.querySelector(
              `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex}"]`,
            );
            dottedCellLeft.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellLeft.style.fontSize = '2rem';
            dottedCellLeft.style.background = '#CAD2E3';
            dottedCellLeft.classList.remove('hover');
            humanBoard.coordinates[yIndex][xIndex - 1].isHit = true;
          }
        }

        for (let i = startIndex; i <= endIndex; i++) {
          const shipCell = board.querySelector(
            `.block[data-x-index="${humanBoard.coordinates[yIndex][xIndex].ship.startPosition[1]}"][data-y-index="${i}"]`,
          );
          if (i < endIndex) {
            shipCell.style.borderLeft = '2px solid red';
            shipCell.style.borderRight = '2px solid red';
            shipCell.style.borderTop = '2px solid red';
          } else {
            shipCell.style.border = '2px solid red';
          }
        }
      }
    }
  } else {
    attackedCell.innerHTML =
      '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
    attackedCell.style.fontSize = '2rem';
    attackedCell.style.background = '#CAD2E3';
  }
}

function updateAiBoard(aiBoard, attackedIndex) {
  const yIndex = attackedIndex[0];
  const xIndex = attackedIndex[1];
  const board = document.querySelector('.board-two');
  const attackedCell = board.querySelector(
    `.block[data-x-index="${xIndex}"][data-y-index="${yIndex}"]`,
  );
  attackedCell.classList.remove('hover');
  attackedCell.removeEventListener('click', clickHandler);
  if (attackedCell.classList.contains('ship-present')) {
    attackedCell.innerHTML =
      '<svg width = "30" height = "30" viewBox="0 0 24 24" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><path d="M19 19 5 5m14 0L5 19" style="fill:none;stroke:red;stroke-linecap:round;stroke-linejoin:round;stroke-width:.9600000000000002"/></svg>';
    //add 1 in row and col
    if (yIndex + 1 <= 9 && xIndex + 1 <= 9) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex + 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      diagonalCell.removeEventListener('click', clickHandler);
      aiBoard.coordinates[yIndex + 1][xIndex + 1].isHit = true;
    }
    //add 1 in row subt 1 in col
    if (yIndex + 1 <= 9 && xIndex - 1 >= 0) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex + 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      diagonalCell.removeEventListener('click', clickHandler);
      aiBoard.coordinates[yIndex + 1][xIndex - 1].isHit = true;
    }
    //sub 1 in row sub 1 in col
    if (yIndex - 1 >= 0 && xIndex - 1 >= 0) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex - 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      diagonalCell.removeEventListener('click', clickHandler);
      aiBoard.coordinates[yIndex - 1][xIndex - 1].isHit = true;
    }
    //sub 1 in row add 1 in col
    if (yIndex - 1 >= 0 && xIndex + 1 <= 9) {
      const diagonalCell = board.querySelector(
        `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex - 1}"]`,
      );
      diagonalCell.innerHTML =
        '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
      diagonalCell.style.fontSize = '2rem';
      diagonalCell.style.background = '#CAD2E3';
      diagonalCell.classList.remove('hover');
      diagonalCell.removeEventListener('click', clickHandler);
      aiBoard.coordinates[yIndex - 1][xIndex + 1].isHit = true;
    }

    //if the ship is sunk add borders to the whole lenght of the ship
    if (aiBoard.coordinates[yIndex][xIndex].ship.isSunk()) {
      if (aiBoard.coordinates[yIndex][xIndex].ship.orientation === 'H') {
        const startIndex =
          aiBoard.coordinates[yIndex][xIndex].ship.startPosition[1];
        const endIndex = aiBoard.coordinates[yIndex][xIndex].ship.endPosition;
        //add dots to start - 1
        if (startIndex - 1 >= 0) {
          const dottedCellBefore = board.querySelector(
            `.block[data-x-index="${startIndex - 1}"][data-y-index="${yIndex}"]`,
          );
          dottedCellBefore.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellBefore.style.fontSize = '2rem';
          dottedCellBefore.style.background = '#CAD2E3';
          dottedCellBefore.classList.remove('hover');
          dottedCellBefore.removeEventListener('click', clickHandler);
          aiBoard.coordinates[yIndex][startIndex - 1].isHit = true;
        }
        //add dots to end + 1
        if (endIndex + 1 <= 9) {
          const dottedCellAfter = board.querySelector(
            `.block[data-x-index="${endIndex + 1}"][data-y-index="${yIndex}"]`,
          );
          dottedCellAfter.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellAfter.style.fontSize = '2rem';
          dottedCellAfter.style.background = '#CAD2E3';
          dottedCellAfter.classList.remove('hover');
          dottedCellAfter.removeEventListener('click', clickHandler);
          aiBoard.coordinates[yIndex][endIndex + 1].isHit = true;
        }
        //also add dots above and below if the ship is of length 1
        if (aiBoard.coordinates[yIndex][xIndex].ship.length === 1) {
          if (yIndex + 1 <= 9) {
            const dottedCellAbove = board.querySelector(
              `.block[data-x-index="${xIndex}"][data-y-index="${yIndex + 1}"]`,
            );
            dottedCellAbove.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellAbove.style.fontSize = '2rem';
            dottedCellAbove.style.background = '#CAD2E3';
            dottedCellAbove.classList.remove('hover');
            dottedCellAbove.removeEventListener('click', clickHandler);
            aiBoard.coordinates[yIndex + 1][xIndex].isHit = true;
          }
          if (yIndex - 1 >= 0) {
            const dottedCellBelow = board.querySelector(
              `.block[data-x-index="${xIndex}"][data-y-index="${yIndex - 1}"]`,
            );
            dottedCellBelow.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellBelow.style.fontSize = '2rem';
            dottedCellBelow.style.background = '#CAD2E3';
            dottedCellBelow.classList.remove('hover');
            dottedCellBelow.removeEventListener('click', clickHandler);
            aiBoard.coordinates[yIndex - 1][xIndex].isHit = true;
          }
        }

        for (let i = startIndex; i <= endIndex; i++) {
          const shipCell = board.querySelector(
            `.block[data-x-index="${i}"][data-y-index="${aiBoard.coordinates[yIndex][xIndex].ship.startPosition[0]}"]`,
          );
          if (i < endIndex) {
            shipCell.style.borderLeft = '2px solid red';
            shipCell.style.borderTop = '2px solid red';
            shipCell.style.borderBottom = '2px solid red';
          } else {
            shipCell.style.border = '2px solid red';
          }
        }
      } else {
        const startIndex =
          aiBoard.coordinates[yIndex][xIndex].ship.startPosition[0];
        const endIndex = aiBoard.coordinates[yIndex][xIndex].ship.endPosition;
        //add dots to start - 1
        if (startIndex - 1 >= 0) {
          const dottedCellBefore = board.querySelector(
            `.block[data-x-index="${xIndex}"][data-y-index="${startIndex - 1}"]`,
          );
          dottedCellBefore.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellBefore.style.fontSize = '2rem';
          dottedCellBefore.style.background = '#CAD2E3';
          dottedCellBefore.classList.remove('hover');
          dottedCellBefore.removeEventListener('click', clickHandler);
          aiBoard.coordinates[startIndex - 1][xIndex].isHit = true;
        }
        //add dots to end + 1
        if (endIndex + 1 <= 9) {
          const dottedCellAfter = board.querySelector(
            `.block[data-x-index="${xIndex}"][data-y-index="${endIndex + 1}"]`,
          );
          dottedCellAfter.innerHTML =
            '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
          dottedCellAfter.style.fontSize = '2rem';
          dottedCellAfter.style.background = '#CAD2E3';
          dottedCellAfter.classList.remove('hover');
          dottedCellAfter.removeEventListener('click', clickHandler);
          aiBoard.coordinates[endIndex + 1][xIndex].isHit = true;
        }
        //also add dots left and right if the ship is of length 1
        if (aiBoard.coordinates[yIndex][xIndex].ship.length === 1) {
          if (xIndex + 1 <= 9) {
            const dottedCellRight = board.querySelector(
              `.block[data-x-index="${xIndex + 1}"][data-y-index="${yIndex}"]`,
            );
            dottedCellRight.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellRight.style.fontSize = '2rem';
            dottedCellRight.style.background = '#CAD2E3';
            dottedCellRight.classList.remove('hover');
            dottedCellRight.removeEventListener('click', clickHandler);
            aiBoard.coordinates[yIndex][xIndex + 1].isHit = true;
          }
          if (xIndex - 1 >= 0) {
            const dottedCellLeft = board.querySelector(
              `.block[data-x-index="${xIndex - 1}"][data-y-index="${yIndex}"]`,
            );
            dottedCellLeft.innerHTML =
              '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
            dottedCellLeft.style.fontSize = '2rem';
            dottedCellLeft.style.background = '#CAD2E3';
            dottedCellLeft.classList.remove('hover');
            dottedCellLeft.removeEventListener('click', clickHandler);
            aiBoard.coordinates[yIndex][xIndex - 1].isHit = true;
          }
        }

        for (let i = startIndex; i <= endIndex; i++) {
          const shipCell = board.querySelector(
            `.block[data-x-index="${aiBoard.coordinates[yIndex][xIndex].ship.startPosition[1]}"][data-y-index="${i}"]`,
          );
          if (i < endIndex) {
            shipCell.style.borderLeft = '2px solid red';
            shipCell.style.borderRight = '2px solid red';
            shipCell.style.borderTop = '2px solid red';
          } else {
            shipCell.style.border = '2px solid red';
          }
        }
      }
    }
  } else {
    attackedCell.innerHTML =
      '<svg width="10" height="10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="256" fill-rule="evenodd"/></svg>';
    attackedCell.style.fontSize = '2rem';
    attackedCell.style.background = '#CAD2E3';
  }
}

function placeHumanShips(humanPlayer) {
  return new Promise((resolve) => {
    const initialBoard = document.createElement('div');
    initialBoard.classList.add('initial-board');
    const pageBody = document.querySelector('.page-body');
    pageBody.appendChild(initialBoard);
    const notification = document.querySelector('.header .notification');
    notification.textContent = 'Place your ships';
    //create the board
    for (let i = 0; i <= 9; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      initialBoard.appendChild(row);
      for (let j = 0; j <= 9; j++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.classList.add('hover');
        block.dataset.xIndex = j;
        block.dataset.yIndex = i;
        row.appendChild(block);
      }
    }
    const shipSizes = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
    let currentShipIndex = 0;
    let isHorizontal = true;
    let isVertical = false;
    //ships
    const scout = document.createElement('div');
    scout.classList.add('scout');
    scout.style.width = '32px';
    scout.style.height = '32px';
    scout.style.border = '2px solid #00f';
    scout.style.background = 'rgba(0,0,255,.05)';
    const frigate = document.createElement('div');
    frigate.classList.add('frigate');
    frigate.style.width = '64px';
    frigate.style.height = '32px';
    frigate.style.border = '2px solid #00f';
    frigate.style.background = 'rgba(0,0,255,.05)';
    const brig = document.createElement('div');
    brig.classList.add('brig');
    brig.style.width = '96px';
    brig.style.height = '32px';
    brig.style.border = '2px solid #00f';
    brig.style.background = 'rgba(0,0,255,.05)';
    const mowar = document.createElement('div');
    mowar.classList.add('mowar');
    mowar.style.width = '128px';
    mowar.style.height = '32px';
    mowar.style.border = '2px solid #00f';
    mowar.style.background = 'rgba(0,0,255,.05)';
    //add a button for ship orientation
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    const currentShip = document.createElement('div');
    currentShip.classList.add('current-ship');
    currentShip.textContent = 'Scout';
    currentShip.appendChild(scout);
    const button = document.createElement('button');
    button.classList.add('orientation-btn');
    button.textContent = 'Horizontal';
    btnContainer.appendChild(currentShip);
    btnContainer.appendChild(button);
    pageBody.appendChild(btnContainer);

    button.addEventListener('click', () => {
      if (isHorizontal && !isVertical) {
        button.textContent = 'Vertical';
        isHorizontal = false;
        isVertical = true;
      } else if (!isHorizontal && isVertical) {
        button.textContent = 'Horizontal';
        isHorizontal = true;
        isVertical = false;
      }
    });
    function updateInitialBoard() {
      for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
          if (
            humanPlayer.board.coordinates[i][j].ship !== null &&
            humanPlayer.board.coordinates[i][j].ship !== 'x'
          ) {
            const shipCell = initialBoard.querySelector(
              `.block[data-x-index="${j}"][data-y-index="${i}"]`,
            );
            if (humanPlayer.board.coordinates[i][j].ship.orientation === 'V') {
              shipCell.style.border = '2px solid #00f';
              shipCell.style.background = 'rgba(0,0,255,.05)';
              //if there is a ship-part below
              if (
                i + 1 <= 9 &&
                humanPlayer.board.coordinates[i + 1][j].ship !== null &&
                humanPlayer.board.coordinates[i + 1][j].ship !== 'x'
              ) {
                shipCell.style.borderBottom = 'none';
                shipCell.style.borderBottom = '1px solid #b4b4ff';
              }
              //if there is a ship-part above
              if (
                i - 1 >= 0 &&
                humanPlayer.board.coordinates[i - 1][j].ship !== null &&
                humanPlayer.board.coordinates[i - 1][j].ship !== 'x'
              ) {
                shipCell.style.borderTop = 'none';
                shipCell.style.borderTop = '1px solid #b4b4ff';
              }
              //for ship with horizontal orientation
            } else if (
              humanPlayer.board.coordinates[i][j].ship.orientation === 'H'
            ) {
              shipCell.style.border = '2px solid #00f';
              shipCell.style.background = 'rgba(0,0,255,.05)';
              //if there is a ship-part to the right
              if (
                j + 1 <= 9 &&
                humanPlayer.board.coordinates[i][j + 1].ship !== null &&
                humanPlayer.board.coordinates[i][j + 1].ship !== 'x'
              ) {
                shipCell.style.borderRight = 'none';
                shipCell.style.borderRight = '1px solid #b4b4ff';
              }
              if (
                j - 1 >= 0 &&
                humanPlayer.board.coordinates[i][j - 1].ship !== null &&
                humanPlayer.board.coordinates[i][j - 1].ship !== 'x'
              ) {
                shipCell.style.borderLeft = 'none';
                shipCell.style.borderLeft = '1px solid #b4b4ff';
              }
            }
          }
        }
      }
    }
    function handleBlockClick(e) {
      if (shipSizes[currentShipIndex + 1] === 1) {
        currentShip.removeChild(scout);
        currentShip.textContent = 'Scout';
        currentShip.appendChild(scout);
      } else if (shipSizes[currentShipIndex + 1] === 2) {
        if (scout === currentShip.lastChild) {
          currentShip.removeChild(scout);
        }
        if (frigate === currentShip.lastChild) {
          currentShip.removeChild(frigate);
        }
        currentShip.textContent = 'Frigate';
        currentShip.appendChild(frigate);
      } else if (shipSizes[currentShipIndex + 1] === 3) {
        if (frigate === currentShip.lastChild) {
          currentShip.removeChild(frigate);
        }
        if (brig === currentShip.lastChild) {
          currentShip.removeChild(brig);
        }
        currentShip.textContent = 'Brig';
        currentShip.appendChild(brig);
      } else if (shipSizes[currentShipIndex + 1] === 4) {
        if (brig === currentShip.lastChild) {
          currentShip.removeChild(brig);
        }
        if (mowar === currentShip.lastChild) {
          currentShip.removeChild(mowar);
        }
        currentShip.textContent = 'Man-of-War';
        currentShip.appendChild(mowar);
      }
      const blockClicked = e.target;
      const xIndex = parseInt(blockClicked.dataset.xIndex);
      const yIndex = parseInt(blockClicked.dataset.yIndex);
      let orientation;
      if (isHorizontal && !isVertical) {
        orientation = 'H';
      } else if (!isHorizontal && isVertical) {
        orientation = 'V';
      }
      try {
        humanPlayer.placeShipOnBoard(
          shipSizes[currentShipIndex],
          [yIndex, xIndex],
          orientation,
        );
        updateInitialBoard();
        currentShipIndex++;
        if (currentShipIndex === shipSizes.length) {
          resolve();
        }
      } catch (error) {
        if (error.message === 'Invalid position: Already contains a ship') {
          window.alert(
            'Invalid Position: Already contains a ship or is immediately adjacent to a ship',
          );
        } else {
          window.alert(error.message);
        }
      }
    }

    const blocks = initialBoard.querySelectorAll('.block');
    blocks.forEach((block) => {
      block.addEventListener('click', handleBlockClick);
    });
  });
}

function checkWinCondition(humanPlayer, aiPlayer) {
  const endDialog = document.querySelector('.end-dialog');
  const winner = document.querySelector('.end-dialog .winner');
  let gameEnd = false;

  const notification = document.querySelector('.notification');
  if (humanPlayer.board.allShipsSunk()) {
    winner.textContent = `${aiPlayer.name} won the game`;
    notification.textContent = '';
    gameEnd = true;
    const blocks = document.querySelectorAll('.board-two .block');
    blocks.forEach((value) => {
      value.removeEventListener('click', clickHandler);
      value.classList.remove('hover');
    });
    endDialog.showModal();
    endDialog.style.display = 'flex';
    endDialog.style.flexDirection = 'column';
    endDialog.style.justifyContent = 'center';
    endDialog.style.alignItems = 'center';
  } else if (aiPlayer.board.allShipsSunk()) {
    winner.textContent = `You won the game`;
    gameEnd = true;
    notification.textContent = '';
    const blocks = document.querySelectorAll('.board-two .block');
    blocks.forEach((value) => {
      value.removeEventListener('click', clickHandler);
      value.classList.remove('hover');
    });
    endDialog.showModal();
    endDialog.style.display = 'flex';
    endDialog.style.flexDirection = 'column';
    endDialog.style.justifyContent = 'center';
    endDialog.style.alignItems = 'center';
  }
  return gameEnd;
}

function gameLoop(humanPlayer, aiPlayer, attackedCoordinates) {
  const aiBoardAttackedCell = document.querySelector(
    `.boards .board-two .block[data-x-index="${attackedCoordinates[1]}"][data-y-index="${attackedCoordinates[0]}"]`,
  );
  const endDialog = document.querySelector('.end-dialog');
  const pageBody = document.querySelector('.page-body');
  const notification = document.querySelector('.notification');
  humanPlayer.attackEnemy(attackedCoordinates, aiPlayer);
  updateAiBoard(aiPlayer.board, attackedCoordinates);
  if (aiBoardAttackedCell.classList.contains('ship-present')) {
    notification.textContent = 'Your turn';
    if (checkWinCondition(humanPlayer, aiPlayer)) {
      endDialog.addEventListener('submit', (e) => {
        e.preventDefault();
        endDialog.close();
        endDialog.style.display = 'none';
        (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.resetGlobalVariables)();
        while (pageBody.firstChild) {
          pageBody.removeChild(pageBody.firstChild);
        }
        (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.initializeGame)();
      });
    }
  } else {
    notification.textContent = 'AI attacking. . .';
    setTimeout(() => {
      const aiAttackCoordinates =
        aiPlayer.generateAttackCoordinates(humanPlayer);
      const humanBoardAttackedCell = document.querySelector(
        `.boards .board-one .block[data-x-index="${aiAttackCoordinates[1]}"][data-y-index="${aiAttackCoordinates[0]}"]`,
      );
      aiPlayer.attackEnemy(aiAttackCoordinates, humanPlayer);
      updateHumanBoard(humanPlayer.board, aiAttackCoordinates);
      function consequentAttacks(hitAnotherShip) {
        return new Promise((resolve) => {
          const interval = setInterval(() => {
            if (!hitAnotherShip) {
              clearInterval(interval);
              resolve();
            } else {
              const extraTurnAttackCoordinates =
                aiPlayer.generateAttackCoordinates(humanPlayer);
              aiPlayer.attackEnemy(extraTurnAttackCoordinates, humanPlayer);
              updateHumanBoard(humanPlayer.board, extraTurnAttackCoordinates);
              hitAnotherShip = document
                .querySelector(
                  `.boards .board-one .block[data-x-index="${extraTurnAttackCoordinates[1]}"][data-y-index="${extraTurnAttackCoordinates[0]}"]`,
                )
                .classList.contains('ship-present');
              if (!hitAnotherShip) {
                clearInterval(interval);
                resolve();
              }
            }
          }, 500);
        });
      }
      if (checkWinCondition(humanPlayer, aiPlayer)) {
        endDialog.addEventListener('submit', (e) => {
          e.preventDefault();
          endDialog.close();
          endDialog.style.display = 'none';
          (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.resetGlobalVariables)();
          while (pageBody.firstChild) {
            pageBody.removeChild(pageBody.firstChild);
          }
          (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.initializeGame)();
        });
      } else {
        let hitAnotherShip =
          humanBoardAttackedCell.classList.contains('ship-present');
        consequentAttacks(hitAnotherShip).then(() => {
          if (checkWinCondition(humanPlayer, aiPlayer)) {
            endDialog.addEventListener('submit', (e) => {
              e.preventDefault();
              endDialog.close();
              endDialog.style.display = 'none';
              (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.resetGlobalVariables)();
              while (pageBody.firstChild) {
                pageBody.removeChild(pageBody.firstChild);
              }
              (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.initializeGame)();
            });
          } else {
            notification.textContent = 'Your turn';
          }
        });
      }
    }, 800);
  }
}

let clickHandler;

function initializeDOM(humanPlayer, aiPlayer) {
  placeHumanShips(humanPlayer).then(() => {
    //place enemy ships
    (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.placeEnemyShips)(aiPlayer);
    //clear the pageBody
    const pageBody = document.querySelector('.page-body');
    while (pageBody.firstChild) {
      pageBody.removeChild(pageBody.firstChild);
    }
    const boards = document.createElement('div');
    boards.classList.add('boards');
    pageBody.appendChild(boards);
    //render gameboards
    renderHumanBoard(humanPlayer.board);
    renderAiBoard(aiPlayer.board);
    //addeventlistener to enemyboard blocks
    const notification = document.querySelector('.notification');
    notification.textContent = 'Your turn';
    const enemyBoardBlocks = document.querySelectorAll(
      '.board-two .row .block',
    );
    clickHandler = (event) => {
      gameLoop(humanPlayer, aiPlayer, [
        parseInt(event.target.dataset.yIndex),
        parseInt(event.target.dataset.xIndex),
      ]);
    };
    enemyBoardBlocks.forEach((value) => {
      value.addEventListener('click', clickHandler);
    });
  });
}


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
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
      [
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
        { ship: null, isHit: false },
      ],
    ];
  }
  //Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
  placeShip(shipLength, position, shipOrientation) {
    const shipObject = new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](shipLength, shipOrientation);
    shipObject.startPosition = position;
    const positionRow = position[0];
    const positionCol = position[1];
    if (this.coordinates[positionRow][positionCol].ship === null) {
      if (shipObject.orientation === 'H') {
        const shipEndpoint = positionCol + (shipObject.length - 1);
        shipObject.endPosition = shipEndpoint;
        if (shipObject.endPosition <= 9) {
          if (
            this.coordinates[positionRow][shipObject.endPosition].ship === null
          ) {
            for (let i = 0; i < this.coordinates.length; i++) {
              for (let j = 0; j < this.coordinates[i].length; j++) {
                if (
                  i === positionRow &&
                  j >= positionCol &&
                  j <= shipEndpoint
                ) {
                  if (this.coordinates[i][j].ship === null) {
                    this.coordinates[i][j].ship = shipObject;
                  } else {
                    throw new Error(
                      'Invalid position: Already contains a ship',
                    );
                  }
                }
              }
            }
            let topAdjacentRow = positionRow - 1;
            let topAdjacentCol = positionCol - 1;
            let btmAdjacentRow = positionRow + 1;
            let btmAdjacentCol = positionCol - 1;
            if (
              positionRow >= 0 &&
              positionRow <= 9 &&
              positionCol - 1 >= 0 &&
              positionCol - 1 <= 9
            ) {
              this.coordinates[positionRow][positionCol - 1].ship = 'x';
            }
            if (
              positionRow >= 0 &&
              positionRow <= 9 &&
              shipEndpoint + 1 >= 0 &&
              shipEndpoint + 1 <= 9
            ) {
              this.coordinates[positionRow][shipEndpoint + 1].ship = 'x';
            }
            for (let i = 0; i <= shipObject.length - 1 + 2; i++) {
              if (
                topAdjacentRow >= 0 &&
                topAdjacentRow <= 9 &&
                topAdjacentCol >= 0 &&
                topAdjacentCol <= 9
              ) {
                this.coordinates[topAdjacentRow][topAdjacentCol].ship = 'x';
              }
              if (
                btmAdjacentRow >= 0 &&
                btmAdjacentRow <= 9 &&
                btmAdjacentCol >= 0 &&
                btmAdjacentCol <= 9
              ) {
                this.coordinates[btmAdjacentRow][btmAdjacentCol].ship = 'x';
              }
              topAdjacentCol++;
              btmAdjacentCol++;
            }
          } else {
            throw new Error('Invalid position: Already contains a ship');
          }
        } else {
          throw new Error('Invalid Position: Out of bounds.');
        }
      } else if (shipObject.orientation === 'V') {
        const shipEndpoint = positionRow + (shipObject.length - 1);
        shipObject.endPosition = shipEndpoint;
        if (shipObject.endPosition <= 9) {
          if (
            this.coordinates[shipObject.endPosition][positionCol].ship === null
          ) {
            for (let i = 0; i < this.coordinates.length; i++) {
              for (let j = 0; j < this.coordinates[i].length; j++) {
                if (
                  j === positionCol &&
                  i >= positionRow &&
                  i <= shipEndpoint
                ) {
                  if (this.coordinates[i][j].ship === null) {
                    this.coordinates[i][j].ship = shipObject;
                  } else {
                    throw new Error(
                      'Invalid position: Already contains a ship',
                    );
                  }
                }
              }
            }
            let leftAdjacentRow = positionRow - 1;
            let leftAdjacentCol = positionCol - 1;
            let rightAdjacentRow = positionRow - 1;
            let rightAdjacentCol = positionCol + 1;
            if (
              positionRow - 1 >= 0 &&
              positionRow - 1 <= 9 &&
              positionCol >= 0 &&
              positionCol <= 9
            ) {
              this.coordinates[positionRow - 1][positionCol].ship = 'x';
            }
            if (
              shipEndpoint + 1 >= 0 &&
              shipEndpoint + 1 <= 9 &&
              positionCol >= 0 &&
              positionCol <= 9
            ) {
              this.coordinates[shipEndpoint + 1][positionCol].ship = 'x';
            }
            for (let i = 0; i <= shipObject.length - 1 + 2; i++) {
              if (
                leftAdjacentRow >= 0 &&
                leftAdjacentRow <= 9 &&
                leftAdjacentCol >= 0 &&
                leftAdjacentCol <= 9
              ) {
                this.coordinates[leftAdjacentRow][leftAdjacentCol].ship = 'x';
              }
              if (
                rightAdjacentRow >= 0 &&
                rightAdjacentRow <= 9 &&
                rightAdjacentCol >= 0 &&
                rightAdjacentCol <= 9
              ) {
                this.coordinates[rightAdjacentRow][rightAdjacentCol].ship = 'x';
              }
              leftAdjacentRow++;
              rightAdjacentRow++;
            }
          } else {
            throw new Error('Invalid position: Already contains a ship');
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
        if (
          value.isHit === false &&
          value.ship !== null &&
          typeof value.ship === 'object'
        ) {
          value.ship.hit();
          value.isHit = true;
        } else if (value.isHit === false) {
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
          typeof this.coordinates[i][j].ship === 'object'
        ) {
          if (!this.coordinates[i][j].ship.isSunk()) {
            shipsNotSunk.push(this.coordinates[i][j].ship);
          }
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

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeGame: () => (/* binding */ initializeGame),
/* harmony export */   placeEnemyShips: () => (/* binding */ placeEnemyShips)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard.js */ "./src/modules/gameBoard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ "./src/modules/player.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/modules/dom.js");





function generateRandomCoordinates() {
  const yIndex = Math.floor(Math.random() * 10);
  const xIndex = Math.floor(Math.random() * 10);
  return [yIndex, xIndex];
}

function placeEnemyShips(aiPlayer) {
  const shipSizes = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
  const orientations = ['V', 'H'];

  shipSizes.forEach((size) => {
    let isPlacementValid = false;
    let coordinates, orientation;

    do {
      coordinates = generateRandomCoordinates();
      orientation =
        orientations[Math.floor(Math.random() * orientations.length)];

      try {
        aiPlayer.placeShipOnBoard(size, coordinates, orientation);
        isPlacementValid = true;
      } catch (error) {
        isPlacementValid = false;
      }
    } while (!isPlacementValid);
  });
}

function initializeGame() {
  //create gameboards
  const playerGameBoard = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const computerGameBoard = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  //create players
  const humanPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_2__.Player('Human', playerGameBoard);
  const aiPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_2__.Player('AI', computerGameBoard);

  (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.initializeDOM)(humanPlayer, aiPlayer);
}

initializeGame();


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   resetGlobalVariables: () => (/* binding */ resetGlobalVariables)
/* harmony export */ });
let aiAttackCoordinates = [];
let targetingList = [];

function resetGlobalVariables() {
  aiAttackCoordinates = [];
  targetingList = [];
}

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
  //method for generating random attack coordinates for AI
  generateAttackCoordinates(enemyPlayer) {
    function randomCoordinatesGenerator() {
      let yIndex;
      let xIndex;
      let pairIsNotUnique = true;
      do {
        yIndex = Math.floor(Math.random() * 10);
        xIndex = Math.floor(Math.random() * 10);

        pairIsNotUnique = aiAttackCoordinates.some(
          (pair) => pair[0] === yIndex && pair[1] === xIndex,
        );
        if (
          !pairIsNotUnique &&
          enemyPlayer.board.coordinates[yIndex][xIndex].isHit === false
        ) {
          if (
            enemyPlayer.board.coordinates[yIndex][xIndex].ship !== null &&
            enemyPlayer.board.coordinates[yIndex][xIndex].ship !== 'x' &&
            !enemyPlayer.board.coordinates[yIndex][xIndex].ship.isSunk()
          ) {
            if (yIndex + 1 <= 9) {
              targetingList.push([yIndex + 1, xIndex]);
            }
            if (yIndex - 1 >= 0) {
              targetingList.push([yIndex - 1, xIndex]);
            }
            if (xIndex + 1 <= 9) {
              targetingList.push([yIndex, xIndex + 1]);
            }
            if (xIndex - 1 >= 0) {
              targetingList.push([yIndex, xIndex - 1]);
            }
          }
          aiAttackCoordinates.push([yIndex, xIndex]);
        }
      } while (
        pairIsNotUnique ||
        enemyPlayer.board.coordinates[yIndex][xIndex].isHit
      );
      return [yIndex, xIndex];
    }
    function filterTargetingList() {
      let pairIsNotUnique = true;
      let xIndex;
      let yIndex;
      do {
        if (targetingList.length === 0) {
          xIndex = null;
          yIndex = null;
          break;
        }
        let coordinates = targetingList.shift();
        yIndex = coordinates[0];
        xIndex = coordinates[1];
        pairIsNotUnique = aiAttackCoordinates.some(
          (pair) => pair[0] === yIndex && pair[1] === xIndex,
        );
        if (
          enemyPlayer.board.coordinates[yIndex][xIndex].ship !== null &&
          enemyPlayer.board.coordinates[yIndex][xIndex].ship !== 'x' &&
          !pairIsNotUnique
        ) {
          if (yIndex + 1 <= 9) {
            targetingList.push([yIndex + 1, xIndex]);
          }
          if (yIndex - 1 >= 0) {
            targetingList.push([yIndex - 1, xIndex]);
          }
          if (xIndex + 1 <= 9) {
            targetingList.push([yIndex, xIndex + 1]);
          }
          if (xIndex - 1 >= 0) {
            targetingList.push([yIndex, xIndex - 1]);
          }
          aiAttackCoordinates.push([yIndex, xIndex]);
          break;
        }
      } while (
        enemyPlayer.board.coordinates[yIndex][xIndex].ship === null ||
        enemyPlayer.board.coordinates[yIndex][xIndex].ship === 'x' ||
        pairIsNotUnique
      );
      return [yIndex, xIndex];
    }
    if (targetingList.length === 0) {
      return randomCoordinatesGenerator();
    } else {
      let coordinates = filterTargetingList();
      let yIndex = coordinates[0];
      let xIndex = coordinates[1];
      if (
        (xIndex === null && yIndex === null) ||
        enemyPlayer.board.coordinates[yIndex][xIndex].isHit
      ) {
        return randomCoordinatesGenerator();
      } else {
        return [yIndex, xIndex];
      }
    }
  }
}


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
    this.startPosition = null;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDajRCNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEM7QUFDQTtBQUNBLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDO0FBQ0E7QUFDQSxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQztBQUNBO0FBQ0EsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEM7QUFDQTtBQUNBLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDO0FBQ0E7QUFDQSxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQztBQUNBO0FBQ0EsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEM7QUFDQTtBQUNBLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDO0FBQ0E7QUFDQSxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQztBQUNBO0FBQ0EsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUN6QnBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJywgc2VyaWY7XG59XG5cbi53cmFwcGVye1xuICAgIG1pbi1oZWlnaHQ6IDEwMHN2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggMWZyIDcwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2ZkZmJmYiAwJSwgI2ViZWRlZSAxMDAlKTtcbn1cblxuLmhlYWRlcntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuLm5vdGlmaWNhdGlvbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wYWdlLWJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuLm9yaWVudGF0aW9uLWJ0bntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDZyZW07XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI0MyQzJGRjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5vcmllbnRhdGlvbi1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzk5OTlGRjtcbn1cblxuLmN1cnJlbnQtc2hpcHtcbiAgICB3aWR0aDogMTByZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uYnRuLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMjByZW07XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0cmVtO1xufVxuXG4uaW5pdGlhbC1ib2FyZHtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5ib2FyZHN7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzU0cHgsIDFmcikpO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIxcHg7XG59XG5cbi5ib2FyZC1vbmUgLnJvdywgLmJvYXJkLXR3byAucm93LCAuaW5pdGlhbC1ib2FyZCAucm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJvYXJkLW9uZSAucm93IC5ibG9jaywgLmJvYXJkLXR3byAucm93IC5ibG9jaywgLmluaXRpYWwtYm9hcmQgLnJvdyAuYmxvY2t7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvYXJkLXR3byAucm93IC5ibG9jaywgLmluaXRpYWwtYm9hcmQgLnJvdyAuYmxvY2t7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRmZjtcbn1cblxuLmJvYXJkLXR3byAucm93IC5ibG9jay5ob3Zlcjpob3ZlciwgLmluaXRpYWwtYm9hcmQgLnJvdyAuYmxvY2suaG92ZXI6aG92ZXJ7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzU4MzU1RTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwyNTUsLjA1KTtcbn1cblxuLmZvb3RlcntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xufVxuXG4uZm9vdGVyIGEgaXtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMCkgc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbn1cblxuLmZvb3RlciBhIGk6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgc2NhbGUoMS41KTtcbn1cblxuLmVuZC1kaWFsb2dbb3Blbl17XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbi5lbmQtZGlhbG9ne1xuICAgIG1hcmdpbjogYXV0byBhdXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHRyYW5zaXRpb246IFxuICAgICAgICBvcGFjaXR5IDYwMG1zIGVhc2UtaW4tb3V0LFxuICAgICAgICB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBzdGFydGluZy1zdHlsZXtcbiAgICAuZW5kLWRpYWxvZ1tvcGVuXXtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgICB9XG59XG5cbi5lbmQtZGlhbG9nIGZvcm17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uZW5kLWRpYWxvZyBmb3JtIGJ1dHRvbntcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogIzEzNjI5MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lbmQtZGlhbG9nIGZvcm0gYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICMxQTg3Qzc7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsbUVBQW1FO0FBQ3ZFOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsU0FBUztBQUNiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxxQkFBcUI7SUFDckIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiOzttQ0FFK0I7QUFDbkM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDViw0QkFBNEI7SUFDaEM7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJywgc2VyaWY7XFxufVxcblxcbi53cmFwcGVye1xcbiAgICBtaW4taGVpZ2h0OiAxMDBzdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggMWZyIDcwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2ZkZmJmYiAwJSwgI2ViZWRlZSAxMDAlKTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLm5vdGlmaWNhdGlvbntcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ucGFnZS1ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5vcmllbnRhdGlvbi1idG57XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogI0MyQzJGRjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ub3JpZW50YXRpb24tYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiAjOTk5OUZGO1xcbn1cXG5cXG4uY3VycmVudC1zaGlwe1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5idG4tY29udGFpbmVye1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHJlbTtcXG59XFxuXFxuLmluaXRpYWwtYm9hcmR7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5ib2FyZHN7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1NHB4LCAxZnIpKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIxcHg7XFxufVxcblxcbi5ib2FyZC1vbmUgLnJvdywgLmJvYXJkLXR3byAucm93LCAuaW5pdGlhbC1ib2FyZCAucm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLW9uZSAucm93IC5ibG9jaywgLmJvYXJkLXR3byAucm93IC5ibG9jaywgLmluaXRpYWwtYm9hcmQgLnJvdyAuYmxvY2t7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQtdHdvIC5yb3cgLmJsb2NrLCAuaW5pdGlhbC1ib2FyZCAucm93IC5ibG9ja3tcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRmZjtcXG59XFxuXFxuLmJvYXJkLXR3byAucm93IC5ibG9jay5ob3Zlcjpob3ZlciwgLmluaXRpYWwtYm9hcmQgLnJvdyAuYmxvY2suaG92ZXI6aG92ZXJ7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTgzNTVFO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwyNTUsLjA1KTtcXG59XFxuXFxuLmZvb3RlcntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5mb290ZXIgYSBpe1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMCkgc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XFxufVxcblxcbi5mb290ZXIgYSBpOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uZW5kLWRpYWxvZ1tvcGVuXXtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4uZW5kLWRpYWxvZ3tcXG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiBcXG4gICAgICAgIG9wYWNpdHkgNjAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBzdGFydGluZy1zdHlsZXtcXG4gICAgLmVuZC1kaWFsb2dbb3Blbl17XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcXG4gICAgfVxcbn1cXG5cXG4uZW5kLWRpYWxvZyBmb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZW5kLWRpYWxvZyBmb3JtIGJ1dHRvbntcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMTM2MjkwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVuZC1kaWFsb2cgZm9ybSBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6ICMxQTg3Qzc7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwbGFjZUVuZW15U2hpcHMsIGluaXRpYWxpemVHYW1lIH0gZnJvbSAnLi9tYWluLmpzJztcbmltcG9ydCB7IHJlc2V0R2xvYmFsVmFyaWFibGVzIH0gZnJvbSAnLi9wbGF5ZXIuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySHVtYW5Cb2FyZChodW1hbkJvYXJkKSB7XG4gIGNvbnN0IGJvYXJkT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkT25lLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLW9uZScpO1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzJyk7XG4gIC8vY3JlYXRlIGJvYXJkIGZvciBodW1hblBsYXllclxuICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgYm9hcmRPbmUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSA5OyBqKyspIHtcbiAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xuICAgICAgYmxvY2suZGF0YXNldC54SW5kZXggPSBqO1xuICAgICAgYmxvY2suZGF0YXNldC55SW5kZXggPSBpO1xuICAgICAgaWYgKFxuICAgICAgICAvL2ZvciBzaGlwIHdpdGggdmVydGljYWwgb3JpZW50YXRpb25cbiAgICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1tpXVtqXS5zaGlwICE9PSBudWxsICYmXG4gICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCAhPT0gJ3gnICYmXG4gICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0uc2hpcC5vcmllbnRhdGlvbiA9PT0gJ1YnXG4gICAgICApIHtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnc2hpcC1wcmVzZW50Jyk7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgIzAwZic7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgwLDAsMjU1LC4wNSknO1xuICAgICAgICAvL2lmIHRoZXJlIGlzIGEgc2hpcC1wYXJ0IGJlbG93XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpICsgMSA8PSA5ICYmXG4gICAgICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1tpICsgMV1bal0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbaSArIDFdW2pdLnNoaXAgIT09ICd4J1xuICAgICAgICApIHtcbiAgICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJCb3R0b20gPSAnbm9uZSc7XG4gICAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCAjYjRiNGZmJztcbiAgICAgICAgfVxuICAgICAgICAvL2lmIHRoZXJlIGlzIGEgc2hpcC1wYXJ0IGFib3ZlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBpIC0gMSA+PSAwICYmXG4gICAgICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1tpIC0gMV1bal0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbaSAtIDFdW2pdLnNoaXAgIT09ICd4J1xuICAgICAgICApIHtcbiAgICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJUb3AgPSAnbm9uZSc7XG4gICAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyVG9wID0gJzFweCBzb2xpZCAjYjRiNGZmJztcbiAgICAgICAgfVxuICAgICAgICAvL2ZvciBzaGlwIHdpdGggaG9yaXpvbnRhbCBvcmllbnRhdGlvblxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1tpXVtqXS5zaGlwICE9PSBudWxsICYmXG4gICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCAhPT0gJ3gnICYmXG4gICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0uc2hpcC5vcmllbnRhdGlvbiA9PT0gJ0gnXG4gICAgICApIHtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnc2hpcC1wcmVzZW50Jyk7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgIzAwZic7XG4gICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgwLDAsMjU1LC4wNSknO1xuICAgICAgICAvL2lmIHRoZXJlIGlzIGEgc2hpcC1wYXJ0IHRvIHRoZSByaWdodFxuICAgICAgICBpZiAoXG4gICAgICAgICAgaiArIDEgPD0gOSAmJlxuICAgICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbaV1baiArIDFdLnNoaXAgIT09IG51bGwgJiZcbiAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW2ldW2ogKyAxXS5zaGlwICE9PSAneCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyUmlnaHQgPSAnbm9uZSc7XG4gICAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyUmlnaHQgPSAnMXB4IHNvbGlkICNiNGI0ZmYnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICBqIC0gMSA+PSAwICYmXG4gICAgICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1tpXVtqIC0gMV0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbaV1baiAtIDFdLnNoaXAgIT09ICd4J1xuICAgICAgICApIHtcbiAgICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJMZWZ0ID0gJ25vbmUnO1xuICAgICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlckxlZnQgPSAnMXB4IHNvbGlkICNiNGI0ZmYnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICNiNGI0ZmYnO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZENoaWxkKGJsb2NrKTtcbiAgICB9XG4gIH1cbiAgYm9hcmRzLmFwcGVuZENoaWxkKGJvYXJkT25lKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJBaUJvYXJkKGFpQm9hcmQpIHtcbiAgY29uc3QgYm9hcmRUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmRUd28uY2xhc3NMaXN0LmFkZCgnYm9hcmQtdHdvJyk7XG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMnKTtcblxuICAvL2NyZWF0ZSBib2FyZCBmb3IgYWlQbGF5ZXJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIGJvYXJkVHdvLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gOTsgaisrKSB7XG4gICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICBibG9jay5kYXRhc2V0LnhJbmRleCA9IGo7XG4gICAgICBibG9jay5kYXRhc2V0LnlJbmRleCA9IGk7XG4gICAgICBpZiAoXG4gICAgICAgIGFpQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgICBhaUJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgIT09ICd4J1xuICAgICAgKSB7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcHJlc2VudCcpO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZENoaWxkKGJsb2NrKTtcbiAgICB9XG4gIH1cbiAgYm9hcmRzLmFwcGVuZENoaWxkKGJvYXJkVHdvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUh1bWFuQm9hcmQoaHVtYW5Cb2FyZCwgYXR0YWNrZWRJbmRleCkge1xuICBjb25zdCB5SW5kZXggPSBhdHRhY2tlZEluZGV4WzBdO1xuICBjb25zdCB4SW5kZXggPSBhdHRhY2tlZEluZGV4WzFdO1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1vbmUnKTtcbiAgY29uc3QgYXR0YWNrZWRDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4fVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleH1cIl1gLFxuICApO1xuICBpZiAoYXR0YWNrZWRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wcmVzZW50JykpIHtcbiAgICBhdHRhY2tlZENlbGwuaW5uZXJIVE1MID1cbiAgICAgICc8c3ZnIHdpZHRoID0gXCIzMFwiIGhlaWdodCA9IFwiMzBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZGF0YS1uYW1lPVwiRmxhdCBMaW5lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaWNvbiBmbGF0LWxpbmVcIj48cGF0aCBkPVwiTTE5IDE5IDUgNW0xNCAwTDUgMTlcIiBzdHlsZT1cImZpbGw6bm9uZTtzdHJva2U6cmVkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6Ljk2MDAwMDAwMDAwMDAwMDJcIi8+PC9zdmc+JztcbiAgICAvL2FkZCAxIGluIHJvdyBhbmQgY29sXG4gICAgaWYgKHlJbmRleCArIDEgPD0gOSAmJiB4SW5kZXggKyAxIDw9IDkpIHtcbiAgICAgIGNvbnN0IGRpYWdvbmFsQ2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHt4SW5kZXggKyAxfVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleCArIDF9XCJdYCxcbiAgICAgICk7XG4gICAgICBkaWFnb25hbENlbGwuaW5uZXJIVE1MID1cbiAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgIGRpYWdvbmFsQ2VsbC5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgIGRpYWdvbmFsQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICAgICAgZGlhZ29uYWxDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleCArIDFdW3hJbmRleCArIDFdLmlzSGl0ID0gdHJ1ZTtcbiAgICB9XG4gICAgLy9hZGQgMSBpbiByb3cgc3VidCAxIGluIGNvbFxuICAgIGlmICh5SW5kZXggKyAxIDw9IDkgJiYgeEluZGV4IC0gMSA+PSAwKSB7XG4gICAgICBjb25zdCBkaWFnb25hbENlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4IC0gMX1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXggKyAxfVwiXWAsXG4gICAgICApO1xuICAgICAgZGlhZ29uYWxDZWxsLmlubmVySFRNTCA9XG4gICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICBkaWFnb25hbENlbGwuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICBkaWFnb25hbENlbGwuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgIGRpYWdvbmFsQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXggKyAxXVt4SW5kZXggLSAxXS5pc0hpdCA9IHRydWU7XG4gICAgfVxuICAgIC8vc3ViIDEgaW4gcm93IHN1YiAxIGluIGNvbFxuICAgIGlmICh5SW5kZXggLSAxID49IDAgJiYgeEluZGV4IC0gMSA+PSAwKSB7XG4gICAgICBjb25zdCBkaWFnb25hbENlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4IC0gMX1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXggLSAxfVwiXWAsXG4gICAgICApO1xuICAgICAgZGlhZ29uYWxDZWxsLmlubmVySFRNTCA9XG4gICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICBkaWFnb25hbENlbGwuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICBkaWFnb25hbENlbGwuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgIGRpYWdvbmFsQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXggLSAxXVt4SW5kZXggLSAxXS5pc0hpdCA9IHRydWU7XG4gICAgfVxuICAgIC8vc3ViIDEgaW4gcm93IGFkZCAxIGluIGNvbFxuICAgIGlmICh5SW5kZXggLSAxID49IDAgJiYgeEluZGV4ICsgMSA8PSA5KSB7XG4gICAgICBjb25zdCBkaWFnb25hbENlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4ICsgMX1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXggLSAxfVwiXWAsXG4gICAgICApO1xuICAgICAgZGlhZ29uYWxDZWxsLmlubmVySFRNTCA9XG4gICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICBkaWFnb25hbENlbGwuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICBkaWFnb25hbENlbGwuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgIGRpYWdvbmFsQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXggLSAxXVt4SW5kZXggKyAxXS5pc0hpdCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy9pZiB0aGUgc2hpcCBpcyBzdW5rIGFkZCBib3JkZXJzIHRvIHRoZSB3aG9sZSBsZW5naHQgb2YgdGhlIHNoaXBcbiAgICBpZiAoaHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5pc1N1bmsoKSkge1xuICAgICAgaWYgKGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAub3JpZW50YXRpb24gPT09ICdIJykge1xuICAgICAgICBjb25zdCBzdGFydEluZGV4ID1cbiAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLnN0YXJ0UG9zaXRpb25bMV07XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID1cbiAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLmVuZFBvc2l0aW9uO1xuICAgICAgICAvL2FkZCBkb3RzIHRvIHN0YXJ0IC0gMVxuICAgICAgICBpZiAoc3RhcnRJbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgIGNvbnN0IGRvdHRlZENlbGxCZWZvcmUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3N0YXJ0SW5kZXggLSAxfVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleH1cIl1gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgZG90dGVkQ2VsbEJlZm9yZS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgICAgICBkb3R0ZWRDZWxsQmVmb3JlLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgICAgIGRvdHRlZENlbGxCZWZvcmUuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgICAgICBkb3R0ZWRDZWxsQmVmb3JlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3N0YXJ0SW5kZXggLSAxXS5pc0hpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy9hZGQgZG90cyB0byBlbmQgKyAxXG4gICAgICAgIGlmIChlbmRJbmRleCArIDEgPD0gOSkge1xuICAgICAgICAgIGNvbnN0IGRvdHRlZENlbGxBZnRlciA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7ZW5kSW5kZXggKyAxfVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleH1cIl1gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgZG90dGVkQ2VsbEFmdGVyLmlubmVySFRNTCA9XG4gICAgICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgICAgIGRvdHRlZENlbGxBZnRlci5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgICAgICBkb3R0ZWRDZWxsQWZ0ZXIuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgICAgICBkb3R0ZWRDZWxsQWZ0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1bZW5kSW5kZXggKyAxXS5pc0hpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy9hbHNvIGFkZCBkb3RzIGFib3ZlIGFuZCBiZWxvdyBpZiB0aGUgc2hpcCBpcyBvZiBsZW5ndGggMVxuICAgICAgICBpZiAoaHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBpZiAoeUluZGV4ICsgMSA8PSA5KSB7XG4gICAgICAgICAgICBjb25zdCBkb3R0ZWRDZWxsQWJvdmUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4fVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleCArIDF9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsQWJvdmUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgICAgICAgIGRvdHRlZENlbGxBYm92ZS5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgICAgICAgIGRvdHRlZENlbGxBYm92ZS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICAgICAgICAgICAgZG90dGVkQ2VsbEFib3ZlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleCArIDFdW3hJbmRleF0uaXNIaXQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoeUluZGV4IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBkb3R0ZWRDZWxsQmVsb3cgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4fVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleCAtIDF9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsQmVsb3cuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgICAgICAgIGRvdHRlZENlbGxCZWxvdy5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgICAgICAgIGRvdHRlZENlbGxCZWxvdy5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICAgICAgICAgICAgZG90dGVkQ2VsbEJlbG93LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleCAtIDFdW3hJbmRleF0uaXNIaXQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDw9IGVuZEluZGV4OyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzaGlwQ2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7aX1cIl1bZGF0YS15LWluZGV4PVwiJHtodW1hbkJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLnN0YXJ0UG9zaXRpb25bMF19XCJdYCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChpIDwgZW5kSW5kZXgpIHtcbiAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlckxlZnQgPSAnMnB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXJUb3AgPSAnMnB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMnB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgcmVkJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPVxuICAgICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAuc3RhcnRQb3NpdGlvblswXTtcbiAgICAgICAgY29uc3QgZW5kSW5kZXggPVxuICAgICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAuZW5kUG9zaXRpb247XG4gICAgICAgIC8vYWRkIGRvdHMgdG8gc3RhcnQgLSAxXG4gICAgICAgIGlmIChzdGFydEluZGV4IC0gMSA+PSAwKSB7XG4gICAgICAgICAgY29uc3QgZG90dGVkQ2VsbEJlZm9yZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4fVwiXVtkYXRhLXktaW5kZXg9XCIke3N0YXJ0SW5kZXggLSAxfVwiXWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkb3R0ZWRDZWxsQmVmb3JlLmlubmVySFRNTCA9XG4gICAgICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgICAgIGRvdHRlZENlbGxCZWZvcmUuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICAgICAgZG90dGVkQ2VsbEJlZm9yZS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICAgICAgICAgIGRvdHRlZENlbGxCZWZvcmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW3N0YXJ0SW5kZXggLSAxXVt4SW5kZXhdLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvL2FkZCBkb3RzIHRvIGVuZCArIDFcbiAgICAgICAgaWYgKGVuZEluZGV4ICsgMSA8PSA5KSB7XG4gICAgICAgICAgY29uc3QgZG90dGVkQ2VsbEFmdGVyID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHt4SW5kZXh9XCJdW2RhdGEteS1pbmRleD1cIiR7ZW5kSW5kZXggKyAxfVwiXWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkb3R0ZWRDZWxsQWZ0ZXIuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICAgICAgZG90dGVkQ2VsbEFmdGVyLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgICAgIGRvdHRlZENlbGxBZnRlci5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICAgICAgICAgIGRvdHRlZENlbGxBZnRlci5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbZW5kSW5kZXggKyAxXVt4SW5kZXhdLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvL2Fsc28gYWRkIGRvdHMgbGVmdCBhbmQgcmlnaHQgaWYgdGhlIHNoaXAgaXMgb2YgbGVuZ3RoIDFcbiAgICAgICAgaWYgKGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgaWYgKHhJbmRleCArIDEgPD0gOSkge1xuICAgICAgICAgICAgY29uc3QgZG90dGVkQ2VsbFJpZ2h0ID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleCArIDF9XCJdW2RhdGEteS1pbmRleD1cIiR7eUluZGV4fVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZG90dGVkQ2VsbFJpZ2h0LmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsUmlnaHQuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsUmlnaHQuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgICAgICAgIGRvdHRlZENlbGxSaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleCArIDFdLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHhJbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgY29uc3QgZG90dGVkQ2VsbExlZnQgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4IC0gMX1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXh9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsTGVmdC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgICAgICAgZG90dGVkQ2VsbExlZnQuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsTGVmdC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICAgICAgICAgICAgZG90dGVkQ2VsbExlZnQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXggLSAxXS5pc0hpdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPD0gZW5kSW5kZXg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHNoaXBDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHtodW1hbkJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLnN0YXJ0UG9zaXRpb25bMV19XCJdW2RhdGEteS1pbmRleD1cIiR7aX1cIl1gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGkgPCBlbmRJbmRleCkge1xuICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyTGVmdCA9ICcycHggc29saWQgcmVkJztcbiAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyVG9wID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGF0dGFja2VkQ2VsbC5pbm5lckhUTUwgPVxuICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICBhdHRhY2tlZENlbGwuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgYXR0YWNrZWRDZWxsLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFpQm9hcmQoYWlCb2FyZCwgYXR0YWNrZWRJbmRleCkge1xuICBjb25zdCB5SW5kZXggPSBhdHRhY2tlZEluZGV4WzBdO1xuICBjb25zdCB4SW5kZXggPSBhdHRhY2tlZEluZGV4WzFdO1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC10d28nKTtcbiAgY29uc3QgYXR0YWNrZWRDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4fVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleH1cIl1gLFxuICApO1xuICBhdHRhY2tlZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgYXR0YWNrZWRDZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgaWYgKGF0dGFja2VkQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcHJlc2VudCcpKSB7XG4gICAgYXR0YWNrZWRDZWxsLmlubmVySFRNTCA9XG4gICAgICAnPHN2ZyB3aWR0aCA9IFwiMzBcIiBoZWlnaHQgPSBcIjMwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGRhdGEtbmFtZT1cIkZsYXQgTGluZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb24gZmxhdC1saW5lXCI+PHBhdGggZD1cIk0xOSAxOSA1IDVtMTQgMEw1IDE5XCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOnJlZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOi45NjAwMDAwMDAwMDAwMDAyXCIvPjwvc3ZnPic7XG4gICAgLy9hZGQgMSBpbiByb3cgYW5kIGNvbFxuICAgIGlmICh5SW5kZXggKyAxIDw9IDkgJiYgeEluZGV4ICsgMSA8PSA5KSB7XG4gICAgICBjb25zdCBkaWFnb25hbENlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4ICsgMX1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXggKyAxfVwiXWAsXG4gICAgICApO1xuICAgICAgZGlhZ29uYWxDZWxsLmlubmVySFRNTCA9XG4gICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICBkaWFnb25hbENlbGwuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICBkaWFnb25hbENlbGwuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgIGRpYWdvbmFsQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgZGlhZ29uYWxDZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgIGFpQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4ICsgMV1beEluZGV4ICsgMV0uaXNIaXQgPSB0cnVlO1xuICAgIH1cbiAgICAvL2FkZCAxIGluIHJvdyBzdWJ0IDEgaW4gY29sXG4gICAgaWYgKHlJbmRleCArIDEgPD0gOSAmJiB4SW5kZXggLSAxID49IDApIHtcbiAgICAgIGNvbnN0IGRpYWdvbmFsQ2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHt4SW5kZXggLSAxfVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleCArIDF9XCJdYCxcbiAgICAgICk7XG4gICAgICBkaWFnb25hbENlbGwuaW5uZXJIVE1MID1cbiAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgIGRpYWdvbmFsQ2VsbC5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgIGRpYWdvbmFsQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICAgICAgZGlhZ29uYWxDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICBkaWFnb25hbENlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgYWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXggKyAxXVt4SW5kZXggLSAxXS5pc0hpdCA9IHRydWU7XG4gICAgfVxuICAgIC8vc3ViIDEgaW4gcm93IHN1YiAxIGluIGNvbFxuICAgIGlmICh5SW5kZXggLSAxID49IDAgJiYgeEluZGV4IC0gMSA+PSAwKSB7XG4gICAgICBjb25zdCBkaWFnb25hbENlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4IC0gMX1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXggLSAxfVwiXWAsXG4gICAgICApO1xuICAgICAgZGlhZ29uYWxDZWxsLmlubmVySFRNTCA9XG4gICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICBkaWFnb25hbENlbGwuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICBkaWFnb25hbENlbGwuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgIGRpYWdvbmFsQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgZGlhZ29uYWxDZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgIGFpQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4IC0gMV1beEluZGV4IC0gMV0uaXNIaXQgPSB0cnVlO1xuICAgIH1cbiAgICAvL3N1YiAxIGluIHJvdyBhZGQgMSBpbiBjb2xcbiAgICBpZiAoeUluZGV4IC0gMSA+PSAwICYmIHhJbmRleCArIDEgPD0gOSkge1xuICAgICAgY29uc3QgZGlhZ29uYWxDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleCArIDF9XCJdW2RhdGEteS1pbmRleD1cIiR7eUluZGV4IC0gMX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGRpYWdvbmFsQ2VsbC5pbm5lckhUTUwgPVxuICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgZGlhZ29uYWxDZWxsLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgZGlhZ29uYWxDZWxsLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICBkaWFnb25hbENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgIGRpYWdvbmFsQ2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICBhaUJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleCAtIDFdW3hJbmRleCArIDFdLmlzSGl0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvL2lmIHRoZSBzaGlwIGlzIHN1bmsgYWRkIGJvcmRlcnMgdG8gdGhlIHdob2xlIGxlbmdodCBvZiB0aGUgc2hpcFxuICAgIGlmIChhaUJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICBpZiAoYWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5vcmllbnRhdGlvbiA9PT0gJ0gnKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPVxuICAgICAgICAgIGFpQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAuc3RhcnRQb3NpdGlvblsxXTtcbiAgICAgICAgY29uc3QgZW5kSW5kZXggPSBhaUJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLmVuZFBvc2l0aW9uO1xuICAgICAgICAvL2FkZCBkb3RzIHRvIHN0YXJ0IC0gMVxuICAgICAgICBpZiAoc3RhcnRJbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgIGNvbnN0IGRvdHRlZENlbGxCZWZvcmUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3N0YXJ0SW5kZXggLSAxfVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleH1cIl1gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgZG90dGVkQ2VsbEJlZm9yZS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgICAgICBkb3R0ZWRDZWxsQmVmb3JlLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgICAgIGRvdHRlZENlbGxCZWZvcmUuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgICAgICBkb3R0ZWRDZWxsQmVmb3JlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgZG90dGVkQ2VsbEJlZm9yZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgYWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3N0YXJ0SW5kZXggLSAxXS5pc0hpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy9hZGQgZG90cyB0byBlbmQgKyAxXG4gICAgICAgIGlmIChlbmRJbmRleCArIDEgPD0gOSkge1xuICAgICAgICAgIGNvbnN0IGRvdHRlZENlbGxBZnRlciA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7ZW5kSW5kZXggKyAxfVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleH1cIl1gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgZG90dGVkQ2VsbEFmdGVyLmlubmVySFRNTCA9XG4gICAgICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgICAgIGRvdHRlZENlbGxBZnRlci5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgICAgICBkb3R0ZWRDZWxsQWZ0ZXIuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgICAgICBkb3R0ZWRDZWxsQWZ0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgICBkb3R0ZWRDZWxsQWZ0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgIGFpQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVtlbmRJbmRleCArIDFdLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvL2Fsc28gYWRkIGRvdHMgYWJvdmUgYW5kIGJlbG93IGlmIHRoZSBzaGlwIGlzIG9mIGxlbmd0aCAxXG4gICAgICAgIGlmIChhaUJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGlmICh5SW5kZXggKyAxIDw9IDkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvdHRlZENlbGxBYm92ZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHt4SW5kZXh9XCJdW2RhdGEteS1pbmRleD1cIiR7eUluZGV4ICsgMX1cIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRvdHRlZENlbGxBYm92ZS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgICAgICAgZG90dGVkQ2VsbEFib3ZlLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgICAgICAgZG90dGVkQ2VsbEFib3ZlLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsQWJvdmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgICAgIGRvdHRlZENlbGxBYm92ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICBhaUJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleCArIDFdW3hJbmRleF0uaXNIaXQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoeUluZGV4IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBkb3R0ZWRDZWxsQmVsb3cgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4fVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleCAtIDF9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsQmVsb3cuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgICAgICAgIGRvdHRlZENlbGxCZWxvdy5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgICAgICAgIGRvdHRlZENlbGxCZWxvdy5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICAgICAgICAgICAgZG90dGVkQ2VsbEJlbG93LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsQmVsb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgYWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXggLSAxXVt4SW5kZXhdLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8PSBlbmRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcENlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke2l9XCJdW2RhdGEteS1pbmRleD1cIiR7YWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5zdGFydFBvc2l0aW9uWzBdfVwiXWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoaSA8IGVuZEluZGV4KSB7XG4gICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXJMZWZ0ID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyVG9wID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyQm90dG9tID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGFydEluZGV4ID1cbiAgICAgICAgICBhaUJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLnN0YXJ0UG9zaXRpb25bMF07XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gYWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5lbmRQb3NpdGlvbjtcbiAgICAgICAgLy9hZGQgZG90cyB0byBzdGFydCAtIDFcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggLSAxID49IDApIHtcbiAgICAgICAgICBjb25zdCBkb3R0ZWRDZWxsQmVmb3JlID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHt4SW5kZXh9XCJdW2RhdGEteS1pbmRleD1cIiR7c3RhcnRJbmRleCAtIDF9XCJdYCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGRvdHRlZENlbGxCZWZvcmUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICAgICAgZG90dGVkQ2VsbEJlZm9yZS5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgICAgICBkb3R0ZWRDZWxsQmVmb3JlLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICAgICAgZG90dGVkQ2VsbEJlZm9yZS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICAgIGRvdHRlZENlbGxCZWZvcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgIGFpQm9hcmQuY29vcmRpbmF0ZXNbc3RhcnRJbmRleCAtIDFdW3hJbmRleF0uaXNIaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vYWRkIGRvdHMgdG8gZW5kICsgMVxuICAgICAgICBpZiAoZW5kSW5kZXggKyAxIDw9IDkpIHtcbiAgICAgICAgICBjb25zdCBkb3R0ZWRDZWxsQWZ0ZXIgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleH1cIl1bZGF0YS15LWluZGV4PVwiJHtlbmRJbmRleCArIDF9XCJdYCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGRvdHRlZENlbGxBZnRlci5pbm5lckhUTUwgPVxuICAgICAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgICAgICBkb3R0ZWRDZWxsQWZ0ZXIuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICAgICAgZG90dGVkQ2VsbEFmdGVyLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICAgICAgZG90dGVkQ2VsbEFmdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgZG90dGVkQ2VsbEFmdGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICBhaUJvYXJkLmNvb3JkaW5hdGVzW2VuZEluZGV4ICsgMV1beEluZGV4XS5pc0hpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy9hbHNvIGFkZCBkb3RzIGxlZnQgYW5kIHJpZ2h0IGlmIHRoZSBzaGlwIGlzIG9mIGxlbmd0aCAxXG4gICAgICAgIGlmIChhaUJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGlmICh4SW5kZXggKyAxIDw9IDkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvdHRlZENlbGxSaWdodCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHt4SW5kZXggKyAxfVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleH1cIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRvdHRlZENlbGxSaWdodC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgICAgICAgZG90dGVkQ2VsbFJpZ2h0LnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgICAgICAgZG90dGVkQ2VsbFJpZ2h0LnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsUmlnaHQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgICAgIGRvdHRlZENlbGxSaWdodC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICBhaUJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4ICsgMV0uaXNIaXQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoeEluZGV4IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBkb3R0ZWRDZWxsTGVmdCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHt4SW5kZXggLSAxfVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleH1cIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRvdHRlZENlbGxMZWZ0LmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsTGVmdC5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgICAgICAgIGRvdHRlZENlbGxMZWZ0LnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsTGVmdC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICAgICAgZG90dGVkQ2VsbExlZnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgYWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleCAtIDFdLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8PSBlbmRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcENlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke2FpQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAuc3RhcnRQb3NpdGlvblsxXX1cIl1bZGF0YS15LWluZGV4PVwiJHtpfVwiXWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoaSA8IGVuZEluZGV4KSB7XG4gICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXJMZWZ0ID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyUmlnaHQgPSAnMnB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXJUb3AgPSAnMnB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgcmVkJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYXR0YWNrZWRDZWxsLmlubmVySFRNTCA9XG4gICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgIGF0dGFja2VkQ2VsbC5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICBhdHRhY2tlZENlbGwuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgfVxufVxuXG5mdW5jdGlvbiBwbGFjZUh1bWFuU2hpcHMoaHVtYW5QbGF5ZXIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbEJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5pdGlhbEJvYXJkLmNsYXNzTGlzdC5hZGQoJ2luaXRpYWwtYm9hcmQnKTtcbiAgICBjb25zdCBwYWdlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWJvZHknKTtcbiAgICBwYWdlQm9keS5hcHBlbmRDaGlsZChpbml0aWFsQm9hcmQpO1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXIgLm5vdGlmaWNhdGlvbicpO1xuICAgIG5vdGlmaWNhdGlvbi50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIHNoaXBzJztcbiAgICAvL2NyZWF0ZSB0aGUgYm9hcmRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgaW5pdGlhbEJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSA5OyBqKyspIHtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgYmxvY2suZGF0YXNldC54SW5kZXggPSBqO1xuICAgICAgICBibG9jay5kYXRhc2V0LnlJbmRleCA9IGk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChibG9jayk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNoaXBTaXplcyA9IFsxLCAxLCAxLCAxLCAyLCAyLCAyLCAzLCAzLCA0XTtcbiAgICBsZXQgY3VycmVudFNoaXBJbmRleCA9IDA7XG4gICAgbGV0IGlzSG9yaXpvbnRhbCA9IHRydWU7XG4gICAgbGV0IGlzVmVydGljYWwgPSBmYWxzZTtcbiAgICAvL3NoaXBzXG4gICAgY29uc3Qgc2NvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY291dC5jbGFzc0xpc3QuYWRkKCdzY291dCcpO1xuICAgIHNjb3V0LnN0eWxlLndpZHRoID0gJzMycHgnO1xuICAgIHNjb3V0LnN0eWxlLmhlaWdodCA9ICczMnB4JztcbiAgICBzY291dC5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkICMwMGYnO1xuICAgIHNjb3V0LnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgwLDAsMjU1LC4wNSknO1xuICAgIGNvbnN0IGZyaWdhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmcmlnYXRlLmNsYXNzTGlzdC5hZGQoJ2ZyaWdhdGUnKTtcbiAgICBmcmlnYXRlLnN0eWxlLndpZHRoID0gJzY0cHgnO1xuICAgIGZyaWdhdGUuc3R5bGUuaGVpZ2h0ID0gJzMycHgnO1xuICAgIGZyaWdhdGUuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCAjMDBmJztcbiAgICBmcmlnYXRlLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgwLDAsMjU1LC4wNSknO1xuICAgIGNvbnN0IGJyaWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBicmlnLmNsYXNzTGlzdC5hZGQoJ2JyaWcnKTtcbiAgICBicmlnLnN0eWxlLndpZHRoID0gJzk2cHgnO1xuICAgIGJyaWcuc3R5bGUuaGVpZ2h0ID0gJzMycHgnO1xuICAgIGJyaWcuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCAjMDBmJztcbiAgICBicmlnLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgwLDAsMjU1LC4wNSknO1xuICAgIGNvbnN0IG1vd2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW93YXIuY2xhc3NMaXN0LmFkZCgnbW93YXInKTtcbiAgICBtb3dhci5zdHlsZS53aWR0aCA9ICcxMjhweCc7XG4gICAgbW93YXIuc3R5bGUuaGVpZ2h0ID0gJzMycHgnO1xuICAgIG1vd2FyLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgIzAwZic7XG4gICAgbW93YXIuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDAsMCwyNTUsLjA1KSc7XG4gICAgLy9hZGQgYSBidXR0b24gZm9yIHNoaXAgb3JpZW50YXRpb25cbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VycmVudFNoaXAuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1zaGlwJyk7XG4gICAgY3VycmVudFNoaXAudGV4dENvbnRlbnQgPSAnU2NvdXQnO1xuICAgIGN1cnJlbnRTaGlwLmFwcGVuZENoaWxkKHNjb3V0KTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnb3JpZW50YXRpb24tYnRuJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50U2hpcCk7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgcGFnZUJvZHkuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChpc0hvcml6b250YWwgJiYgIWlzVmVydGljYWwpIHtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJztcbiAgICAgICAgaXNIb3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgIGlzVmVydGljYWwgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICghaXNIb3Jpem9udGFsICYmIGlzVmVydGljYWwpIHtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnO1xuICAgICAgICBpc0hvcml6b250YWwgPSB0cnVlO1xuICAgICAgICBpc1ZlcnRpY2FsID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gdXBkYXRlSW5pdGlhbEJvYXJkKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGh1bWFuUGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGh1bWFuUGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgIT09ICd4J1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcENlbGwgPSBpbml0aWFsQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke2p9XCJdW2RhdGEteS1pbmRleD1cIiR7aX1cIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChodW1hblBsYXllci5ib2FyZC5jb29yZGluYXRlc1tpXVtqXS5zaGlwLm9yaWVudGF0aW9uID09PSAnVicpIHtcbiAgICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCAjMDBmJztcbiAgICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDAsMCwyNTUsLjA1KSc7XG4gICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXMgYSBzaGlwLXBhcnQgYmVsb3dcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGkgKyAxIDw9IDkgJiZcbiAgICAgICAgICAgICAgICBodW1hblBsYXllci5ib2FyZC5jb29yZGluYXRlc1tpICsgMV1bal0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIGh1bWFuUGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW2kgKyAxXVtqXS5zaGlwICE9PSAneCdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyQm90dG9tID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgI2I0YjRmZic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhIHNoaXAtcGFydCBhYm92ZVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaSAtIDEgPj0gMCAmJlxuICAgICAgICAgICAgICAgIGh1bWFuUGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW2kgLSAxXVtqXS5zaGlwICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgaHVtYW5QbGF5ZXIuYm9hcmQuY29vcmRpbmF0ZXNbaSAtIDFdW2pdLnNoaXAgIT09ICd4J1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXJUb3AgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyVG9wID0gJzFweCBzb2xpZCAjYjRiNGZmJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvL2ZvciBzaGlwIHdpdGggaG9yaXpvbnRhbCBvcmllbnRhdGlvblxuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgaHVtYW5QbGF5ZXIuYm9hcmQuY29vcmRpbmF0ZXNbaV1bal0uc2hpcC5vcmllbnRhdGlvbiA9PT0gJ0gnXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCAjMDBmJztcbiAgICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDAsMCwyNTUsLjA1KSc7XG4gICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXMgYSBzaGlwLXBhcnQgdG8gdGhlIHJpZ2h0XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBqICsgMSA8PSA5ICYmXG4gICAgICAgICAgICAgICAgaHVtYW5QbGF5ZXIuYm9hcmQuY29vcmRpbmF0ZXNbaV1baiArIDFdLnNoaXAgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICBodW1hblBsYXllci5ib2FyZC5jb29yZGluYXRlc1tpXVtqICsgMV0uc2hpcCAhPT0gJ3gnXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gJzFweCBzb2xpZCAjYjRiNGZmJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaiAtIDEgPj0gMCAmJlxuICAgICAgICAgICAgICAgIGh1bWFuUGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW2ldW2ogLSAxXS5zaGlwICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgaHVtYW5QbGF5ZXIuYm9hcmQuY29vcmRpbmF0ZXNbaV1baiAtIDFdLnNoaXAgIT09ICd4J1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXJMZWZ0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlckxlZnQgPSAnMXB4IHNvbGlkICNiNGI0ZmYnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUJsb2NrQ2xpY2soZSkge1xuICAgICAgaWYgKHNoaXBTaXplc1tjdXJyZW50U2hpcEluZGV4ICsgMV0gPT09IDEpIHtcbiAgICAgICAgY3VycmVudFNoaXAucmVtb3ZlQ2hpbGQoc2NvdXQpO1xuICAgICAgICBjdXJyZW50U2hpcC50ZXh0Q29udGVudCA9ICdTY291dCc7XG4gICAgICAgIGN1cnJlbnRTaGlwLmFwcGVuZENoaWxkKHNjb3V0KTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcFNpemVzW2N1cnJlbnRTaGlwSW5kZXggKyAxXSA9PT0gMikge1xuICAgICAgICBpZiAoc2NvdXQgPT09IGN1cnJlbnRTaGlwLmxhc3RDaGlsZCkge1xuICAgICAgICAgIGN1cnJlbnRTaGlwLnJlbW92ZUNoaWxkKHNjb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJpZ2F0ZSA9PT0gY3VycmVudFNoaXAubGFzdENoaWxkKSB7XG4gICAgICAgICAgY3VycmVudFNoaXAucmVtb3ZlQ2hpbGQoZnJpZ2F0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFNoaXAudGV4dENvbnRlbnQgPSAnRnJpZ2F0ZSc7XG4gICAgICAgIGN1cnJlbnRTaGlwLmFwcGVuZENoaWxkKGZyaWdhdGUpO1xuICAgICAgfSBlbHNlIGlmIChzaGlwU2l6ZXNbY3VycmVudFNoaXBJbmRleCArIDFdID09PSAzKSB7XG4gICAgICAgIGlmIChmcmlnYXRlID09PSBjdXJyZW50U2hpcC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICBjdXJyZW50U2hpcC5yZW1vdmVDaGlsZChmcmlnYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnJpZyA9PT0gY3VycmVudFNoaXAubGFzdENoaWxkKSB7XG4gICAgICAgICAgY3VycmVudFNoaXAucmVtb3ZlQ2hpbGQoYnJpZyk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFNoaXAudGV4dENvbnRlbnQgPSAnQnJpZyc7XG4gICAgICAgIGN1cnJlbnRTaGlwLmFwcGVuZENoaWxkKGJyaWcpO1xuICAgICAgfSBlbHNlIGlmIChzaGlwU2l6ZXNbY3VycmVudFNoaXBJbmRleCArIDFdID09PSA0KSB7XG4gICAgICAgIGlmIChicmlnID09PSBjdXJyZW50U2hpcC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICBjdXJyZW50U2hpcC5yZW1vdmVDaGlsZChicmlnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW93YXIgPT09IGN1cnJlbnRTaGlwLmxhc3RDaGlsZCkge1xuICAgICAgICAgIGN1cnJlbnRTaGlwLnJlbW92ZUNoaWxkKG1vd2FyKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50U2hpcC50ZXh0Q29udGVudCA9ICdNYW4tb2YtV2FyJztcbiAgICAgICAgY3VycmVudFNoaXAuYXBwZW5kQ2hpbGQobW93YXIpO1xuICAgICAgfVxuICAgICAgY29uc3QgYmxvY2tDbGlja2VkID0gZS50YXJnZXQ7XG4gICAgICBjb25zdCB4SW5kZXggPSBwYXJzZUludChibG9ja0NsaWNrZWQuZGF0YXNldC54SW5kZXgpO1xuICAgICAgY29uc3QgeUluZGV4ID0gcGFyc2VJbnQoYmxvY2tDbGlja2VkLmRhdGFzZXQueUluZGV4KTtcbiAgICAgIGxldCBvcmllbnRhdGlvbjtcbiAgICAgIGlmIChpc0hvcml6b250YWwgJiYgIWlzVmVydGljYWwpIHtcbiAgICAgICAgb3JpZW50YXRpb24gPSAnSCc7XG4gICAgICB9IGVsc2UgaWYgKCFpc0hvcml6b250YWwgJiYgaXNWZXJ0aWNhbCkge1xuICAgICAgICBvcmllbnRhdGlvbiA9ICdWJztcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGh1bWFuUGxheWVyLnBsYWNlU2hpcE9uQm9hcmQoXG4gICAgICAgICAgc2hpcFNpemVzW2N1cnJlbnRTaGlwSW5kZXhdLFxuICAgICAgICAgIFt5SW5kZXgsIHhJbmRleF0sXG4gICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICk7XG4gICAgICAgIHVwZGF0ZUluaXRpYWxCb2FyZCgpO1xuICAgICAgICBjdXJyZW50U2hpcEluZGV4Kys7XG4gICAgICAgIGlmIChjdXJyZW50U2hpcEluZGV4ID09PSBzaGlwU2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSA9PT0gJ0ludmFsaWQgcG9zaXRpb246IEFscmVhZHkgY29udGFpbnMgYSBzaGlwJykge1xuICAgICAgICAgIHdpbmRvdy5hbGVydChcbiAgICAgICAgICAgICdJbnZhbGlkIFBvc2l0aW9uOiBBbHJlYWR5IGNvbnRhaW5zIGEgc2hpcCBvciBpcyBpbW1lZGlhdGVseSBhZGphY2VudCB0byBhIHNoaXAnLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LmFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tzID0gaW5pdGlhbEJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9jaycpO1xuICAgIGJsb2Nrcy5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVCbG9ja0NsaWNrKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2luQ29uZGl0aW9uKGh1bWFuUGxheWVyLCBhaVBsYXllcikge1xuICBjb25zdCBlbmREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRpYWxvZycpO1xuICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRpYWxvZyAud2lubmVyJyk7XG4gIGxldCBnYW1lRW5kID0gZmFsc2U7XG5cbiAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbicpO1xuICBpZiAoaHVtYW5QbGF5ZXIuYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBgJHthaVBsYXllci5uYW1lfSB3b24gdGhlIGdhbWVgO1xuICAgIG5vdGlmaWNhdGlvbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIGdhbWVFbmQgPSB0cnVlO1xuICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC10d28gLmJsb2NrJyk7XG4gICAgYmxvY2tzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICB2YWx1ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICB2YWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgIH0pO1xuICAgIGVuZERpYWxvZy5zaG93TW9kYWwoKTtcbiAgICBlbmREaWFsb2cuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBlbmREaWFsb2cuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgIGVuZERpYWxvZy5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuICAgIGVuZERpYWxvZy5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gIH0gZWxzZSBpZiAoYWlQbGF5ZXIuYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBgWW91IHdvbiB0aGUgZ2FtZWA7XG4gICAgZ2FtZUVuZCA9IHRydWU7XG4gICAgbm90aWZpY2F0aW9uLnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLXR3byAuYmxvY2snKTtcbiAgICBibG9ja3MuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIHZhbHVlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgIHZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgfSk7XG4gICAgZW5kRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIGVuZERpYWxvZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGVuZERpYWxvZy5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgZW5kRGlhbG9nLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG4gICAgZW5kRGlhbG9nLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcbiAgfVxuICByZXR1cm4gZ2FtZUVuZDtcbn1cblxuZnVuY3Rpb24gZ2FtZUxvb3AoaHVtYW5QbGF5ZXIsIGFpUGxheWVyLCBhdHRhY2tlZENvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGFpQm9hcmRBdHRhY2tlZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuYm9hcmRzIC5ib2FyZC10d28gLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7YXR0YWNrZWRDb29yZGluYXRlc1sxXX1cIl1bZGF0YS15LWluZGV4PVwiJHthdHRhY2tlZENvb3JkaW5hdGVzWzBdfVwiXWAsXG4gICk7XG4gIGNvbnN0IGVuZERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQtZGlhbG9nJyk7XG4gIGNvbnN0IHBhZ2VCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtYm9keScpO1xuICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uJyk7XG4gIGh1bWFuUGxheWVyLmF0dGFja0VuZW15KGF0dGFja2VkQ29vcmRpbmF0ZXMsIGFpUGxheWVyKTtcbiAgdXBkYXRlQWlCb2FyZChhaVBsYXllci5ib2FyZCwgYXR0YWNrZWRDb29yZGluYXRlcyk7XG4gIGlmIChhaUJvYXJkQXR0YWNrZWRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wcmVzZW50JykpIHtcbiAgICBub3RpZmljYXRpb24udGV4dENvbnRlbnQgPSAnWW91ciB0dXJuJztcbiAgICBpZiAoY2hlY2tXaW5Db25kaXRpb24oaHVtYW5QbGF5ZXIsIGFpUGxheWVyKSkge1xuICAgICAgZW5kRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZW5kRGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIGVuZERpYWxvZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXNldEdsb2JhbFZhcmlhYmxlcygpO1xuICAgICAgICB3aGlsZSAocGFnZUJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIHBhZ2VCb2R5LnJlbW92ZUNoaWxkKHBhZ2VCb2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGluaXRpYWxpemVHYW1lKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbm90aWZpY2F0aW9uLnRleHRDb250ZW50ID0gJ0FJIGF0dGFja2luZy4gLiAuJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGFpQXR0YWNrQ29vcmRpbmF0ZXMgPVxuICAgICAgICBhaVBsYXllci5nZW5lcmF0ZUF0dGFja0Nvb3JkaW5hdGVzKGh1bWFuUGxheWVyKTtcbiAgICAgIGNvbnN0IGh1bWFuQm9hcmRBdHRhY2tlZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmJvYXJkcyAuYm9hcmQtb25lIC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke2FpQXR0YWNrQ29vcmRpbmF0ZXNbMV19XCJdW2RhdGEteS1pbmRleD1cIiR7YWlBdHRhY2tDb29yZGluYXRlc1swXX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGFpUGxheWVyLmF0dGFja0VuZW15KGFpQXR0YWNrQ29vcmRpbmF0ZXMsIGh1bWFuUGxheWVyKTtcbiAgICAgIHVwZGF0ZUh1bWFuQm9hcmQoaHVtYW5QbGF5ZXIuYm9hcmQsIGFpQXR0YWNrQ29vcmRpbmF0ZXMpO1xuICAgICAgZnVuY3Rpb24gY29uc2VxdWVudEF0dGFja3MoaGl0QW5vdGhlclNoaXApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWhpdEFub3RoZXJTaGlwKSB7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBleHRyYVR1cm5BdHRhY2tDb29yZGluYXRlcyA9XG4gICAgICAgICAgICAgICAgYWlQbGF5ZXIuZ2VuZXJhdGVBdHRhY2tDb29yZGluYXRlcyhodW1hblBsYXllcik7XG4gICAgICAgICAgICAgIGFpUGxheWVyLmF0dGFja0VuZW15KGV4dHJhVHVybkF0dGFja0Nvb3JkaW5hdGVzLCBodW1hblBsYXllcik7XG4gICAgICAgICAgICAgIHVwZGF0ZUh1bWFuQm9hcmQoaHVtYW5QbGF5ZXIuYm9hcmQsIGV4dHJhVHVybkF0dGFja0Nvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgaGl0QW5vdGhlclNoaXAgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgYC5ib2FyZHMgLmJvYXJkLW9uZSAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHtleHRyYVR1cm5BdHRhY2tDb29yZGluYXRlc1sxXX1cIl1bZGF0YS15LWluZGV4PVwiJHtleHRyYVR1cm5BdHRhY2tDb29yZGluYXRlc1swXX1cIl1gLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXByZXNlbnQnKTtcbiAgICAgICAgICAgICAgaWYgKCFoaXRBbm90aGVyU2hpcCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGNoZWNrV2luQ29uZGl0aW9uKGh1bWFuUGxheWVyLCBhaVBsYXllcikpIHtcbiAgICAgICAgZW5kRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGVuZERpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgIGVuZERpYWxvZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIHJlc2V0R2xvYmFsVmFyaWFibGVzKCk7XG4gICAgICAgICAgd2hpbGUgKHBhZ2VCb2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhZ2VCb2R5LnJlbW92ZUNoaWxkKHBhZ2VCb2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbml0aWFsaXplR2FtZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBoaXRBbm90aGVyU2hpcCA9XG4gICAgICAgICAgaHVtYW5Cb2FyZEF0dGFja2VkQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcHJlc2VudCcpO1xuICAgICAgICBjb25zZXF1ZW50QXR0YWNrcyhoaXRBbm90aGVyU2hpcCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgaWYgKGNoZWNrV2luQ29uZGl0aW9uKGh1bWFuUGxheWVyLCBhaVBsYXllcikpIHtcbiAgICAgICAgICAgIGVuZERpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGVuZERpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgICBlbmREaWFsb2cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgcmVzZXRHbG9iYWxWYXJpYWJsZXMoKTtcbiAgICAgICAgICAgICAgd2hpbGUgKHBhZ2VCb2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBwYWdlQm9keS5yZW1vdmVDaGlsZChwYWdlQm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbml0aWFsaXplR2FtZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi50ZXh0Q29udGVudCA9ICdZb3VyIHR1cm4nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgODAwKTtcbiAgfVxufVxuXG5sZXQgY2xpY2tIYW5kbGVyO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURPTShodW1hblBsYXllciwgYWlQbGF5ZXIpIHtcbiAgcGxhY2VIdW1hblNoaXBzKGh1bWFuUGxheWVyKS50aGVuKCgpID0+IHtcbiAgICAvL3BsYWNlIGVuZW15IHNoaXBzXG4gICAgcGxhY2VFbmVteVNoaXBzKGFpUGxheWVyKTtcbiAgICAvL2NsZWFyIHRoZSBwYWdlQm9keVxuICAgIGNvbnN0IHBhZ2VCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtYm9keScpO1xuICAgIHdoaWxlIChwYWdlQm9keS5maXJzdENoaWxkKSB7XG4gICAgICBwYWdlQm9keS5yZW1vdmVDaGlsZChwYWdlQm9keS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmRzLmNsYXNzTGlzdC5hZGQoJ2JvYXJkcycpO1xuICAgIHBhZ2VCb2R5LmFwcGVuZENoaWxkKGJvYXJkcyk7XG4gICAgLy9yZW5kZXIgZ2FtZWJvYXJkc1xuICAgIHJlbmRlckh1bWFuQm9hcmQoaHVtYW5QbGF5ZXIuYm9hcmQpO1xuICAgIHJlbmRlckFpQm9hcmQoYWlQbGF5ZXIuYm9hcmQpO1xuICAgIC8vYWRkZXZlbnRsaXN0ZW5lciB0byBlbmVteWJvYXJkIGJsb2Nrc1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24nKTtcbiAgICBub3RpZmljYXRpb24udGV4dENvbnRlbnQgPSAnWW91ciB0dXJuJztcbiAgICBjb25zdCBlbmVteUJvYXJkQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICcuYm9hcmQtdHdvIC5yb3cgLmJsb2NrJyxcbiAgICApO1xuICAgIGNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgZ2FtZUxvb3AoaHVtYW5QbGF5ZXIsIGFpUGxheWVyLCBbXG4gICAgICAgIHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LnlJbmRleCksXG4gICAgICAgIHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LnhJbmRleCksXG4gICAgICBdKTtcbiAgICB9O1xuICAgIGVuZW15Qm9hcmRCbG9ja3MuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIHZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gW1xuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICBdO1xuICB9XG4gIC8vR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byBwbGFjZSBzaGlwcyBhdCBzcGVjaWZpYyBjb29yZGluYXRlcyBieSBjYWxsaW5nIHRoZSBzaGlwIGZhY3RvcnkgZnVuY3Rpb24uXG4gIHBsYWNlU2hpcChzaGlwTGVuZ3RoLCBwb3NpdGlvbiwgc2hpcE9yaWVudGF0aW9uKSB7XG4gICAgY29uc3Qgc2hpcE9iamVjdCA9IG5ldyBTaGlwKHNoaXBMZW5ndGgsIHNoaXBPcmllbnRhdGlvbik7XG4gICAgc2hpcE9iamVjdC5zdGFydFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgY29uc3QgcG9zaXRpb25Sb3cgPSBwb3NpdGlvblswXTtcbiAgICBjb25zdCBwb3NpdGlvbkNvbCA9IHBvc2l0aW9uWzFdO1xuICAgIGlmICh0aGlzLmNvb3JkaW5hdGVzW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbF0uc2hpcCA9PT0gbnVsbCkge1xuICAgICAgaWYgKHNoaXBPYmplY3Qub3JpZW50YXRpb24gPT09ICdIJykge1xuICAgICAgICBjb25zdCBzaGlwRW5kcG9pbnQgPSBwb3NpdGlvbkNvbCArIChzaGlwT2JqZWN0Lmxlbmd0aCAtIDEpO1xuICAgICAgICBzaGlwT2JqZWN0LmVuZFBvc2l0aW9uID0gc2hpcEVuZHBvaW50O1xuICAgICAgICBpZiAoc2hpcE9iamVjdC5lbmRQb3NpdGlvbiA8PSA5KSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlc1twb3NpdGlvblJvd11bc2hpcE9iamVjdC5lbmRQb3NpdGlvbl0uc2hpcCA9PT0gbnVsbFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb29yZGluYXRlc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGkgPT09IHBvc2l0aW9uUm93ICYmXG4gICAgICAgICAgICAgICAgICBqID49IHBvc2l0aW9uQ29sICYmXG4gICAgICAgICAgICAgICAgICBqIDw9IHNoaXBFbmRwb2ludFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgPSBzaGlwT2JqZWN0O1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdJbnZhbGlkIHBvc2l0aW9uOiBBbHJlYWR5IGNvbnRhaW5zIGEgc2hpcCcsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdG9wQWRqYWNlbnRSb3cgPSBwb3NpdGlvblJvdyAtIDE7XG4gICAgICAgICAgICBsZXQgdG9wQWRqYWNlbnRDb2wgPSBwb3NpdGlvbkNvbCAtIDE7XG4gICAgICAgICAgICBsZXQgYnRtQWRqYWNlbnRSb3cgPSBwb3NpdGlvblJvdyArIDE7XG4gICAgICAgICAgICBsZXQgYnRtQWRqYWNlbnRDb2wgPSBwb3NpdGlvbkNvbCAtIDE7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHBvc2l0aW9uUm93ID49IDAgJiZcbiAgICAgICAgICAgICAgcG9zaXRpb25Sb3cgPD0gOSAmJlxuICAgICAgICAgICAgICBwb3NpdGlvbkNvbCAtIDEgPj0gMCAmJlxuICAgICAgICAgICAgICBwb3NpdGlvbkNvbCAtIDEgPD0gOVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbcG9zaXRpb25Sb3ddW3Bvc2l0aW9uQ29sIC0gMV0uc2hpcCA9ICd4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgcG9zaXRpb25Sb3cgPj0gMCAmJlxuICAgICAgICAgICAgICBwb3NpdGlvblJvdyA8PSA5ICYmXG4gICAgICAgICAgICAgIHNoaXBFbmRwb2ludCArIDEgPj0gMCAmJlxuICAgICAgICAgICAgICBzaGlwRW5kcG9pbnQgKyAxIDw9IDlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3Bvc2l0aW9uUm93XVtzaGlwRW5kcG9pbnQgKyAxXS5zaGlwID0gJ3gnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc2hpcE9iamVjdC5sZW5ndGggLSAxICsgMjsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0b3BBZGphY2VudFJvdyA+PSAwICYmXG4gICAgICAgICAgICAgICAgdG9wQWRqYWNlbnRSb3cgPD0gOSAmJlxuICAgICAgICAgICAgICAgIHRvcEFkamFjZW50Q29sID49IDAgJiZcbiAgICAgICAgICAgICAgICB0b3BBZGphY2VudENvbCA8PSA5XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbdG9wQWRqYWNlbnRSb3ddW3RvcEFkamFjZW50Q29sXS5zaGlwID0gJ3gnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBidG1BZGphY2VudFJvdyA+PSAwICYmXG4gICAgICAgICAgICAgICAgYnRtQWRqYWNlbnRSb3cgPD0gOSAmJlxuICAgICAgICAgICAgICAgIGJ0bUFkamFjZW50Q29sID49IDAgJiZcbiAgICAgICAgICAgICAgICBidG1BZGphY2VudENvbCA8PSA5XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbYnRtQWRqYWNlbnRSb3ddW2J0bUFkamFjZW50Q29sXS5zaGlwID0gJ3gnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRvcEFkamFjZW50Q29sKys7XG4gICAgICAgICAgICAgIGJ0bUFkamFjZW50Q29sKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwb3NpdGlvbjogQWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBvc2l0aW9uOiBPdXQgb2YgYm91bmRzLicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNoaXBPYmplY3Qub3JpZW50YXRpb24gPT09ICdWJykge1xuICAgICAgICBjb25zdCBzaGlwRW5kcG9pbnQgPSBwb3NpdGlvblJvdyArIChzaGlwT2JqZWN0Lmxlbmd0aCAtIDEpO1xuICAgICAgICBzaGlwT2JqZWN0LmVuZFBvc2l0aW9uID0gc2hpcEVuZHBvaW50O1xuICAgICAgICBpZiAoc2hpcE9iamVjdC5lbmRQb3NpdGlvbiA8PSA5KSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlc1tzaGlwT2JqZWN0LmVuZFBvc2l0aW9uXVtwb3NpdGlvbkNvbF0uc2hpcCA9PT0gbnVsbFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb29yZGluYXRlc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGogPT09IHBvc2l0aW9uQ29sICYmXG4gICAgICAgICAgICAgICAgICBpID49IHBvc2l0aW9uUm93ICYmXG4gICAgICAgICAgICAgICAgICBpIDw9IHNoaXBFbmRwb2ludFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgPSBzaGlwT2JqZWN0O1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdJbnZhbGlkIHBvc2l0aW9uOiBBbHJlYWR5IGNvbnRhaW5zIGEgc2hpcCcsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbGVmdEFkamFjZW50Um93ID0gcG9zaXRpb25Sb3cgLSAxO1xuICAgICAgICAgICAgbGV0IGxlZnRBZGphY2VudENvbCA9IHBvc2l0aW9uQ29sIC0gMTtcbiAgICAgICAgICAgIGxldCByaWdodEFkamFjZW50Um93ID0gcG9zaXRpb25Sb3cgLSAxO1xuICAgICAgICAgICAgbGV0IHJpZ2h0QWRqYWNlbnRDb2wgPSBwb3NpdGlvbkNvbCArIDE7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHBvc2l0aW9uUm93IC0gMSA+PSAwICYmXG4gICAgICAgICAgICAgIHBvc2l0aW9uUm93IC0gMSA8PSA5ICYmXG4gICAgICAgICAgICAgIHBvc2l0aW9uQ29sID49IDAgJiZcbiAgICAgICAgICAgICAgcG9zaXRpb25Db2wgPD0gOVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbcG9zaXRpb25Sb3cgLSAxXVtwb3NpdGlvbkNvbF0uc2hpcCA9ICd4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgc2hpcEVuZHBvaW50ICsgMSA+PSAwICYmXG4gICAgICAgICAgICAgIHNoaXBFbmRwb2ludCArIDEgPD0gOSAmJlxuICAgICAgICAgICAgICBwb3NpdGlvbkNvbCA+PSAwICYmXG4gICAgICAgICAgICAgIHBvc2l0aW9uQ29sIDw9IDlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3NoaXBFbmRwb2ludCArIDFdW3Bvc2l0aW9uQ29sXS5zaGlwID0gJ3gnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc2hpcE9iamVjdC5sZW5ndGggLSAxICsgMjsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBsZWZ0QWRqYWNlbnRSb3cgPj0gMCAmJlxuICAgICAgICAgICAgICAgIGxlZnRBZGphY2VudFJvdyA8PSA5ICYmXG4gICAgICAgICAgICAgICAgbGVmdEFkamFjZW50Q29sID49IDAgJiZcbiAgICAgICAgICAgICAgICBsZWZ0QWRqYWNlbnRDb2wgPD0gOVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW2xlZnRBZGphY2VudFJvd11bbGVmdEFkamFjZW50Q29sXS5zaGlwID0gJ3gnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICByaWdodEFkamFjZW50Um93ID49IDAgJiZcbiAgICAgICAgICAgICAgICByaWdodEFkamFjZW50Um93IDw9IDkgJiZcbiAgICAgICAgICAgICAgICByaWdodEFkamFjZW50Q29sID49IDAgJiZcbiAgICAgICAgICAgICAgICByaWdodEFkamFjZW50Q29sIDw9IDlcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlc1tyaWdodEFkamFjZW50Um93XVtyaWdodEFkamFjZW50Q29sXS5zaGlwID0gJ3gnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxlZnRBZGphY2VudFJvdysrO1xuICAgICAgICAgICAgICByaWdodEFkamFjZW50Um93Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwb3NpdGlvbjogQWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBvc2l0aW9uOiBPdXQgb2YgYm91bmRzLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwb3NpdGlvbjogQWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTtcbiAgICB9XG4gIH1cbiAgcmVjZWl2ZUF0dGFjayhwb3NpdGlvbikge1xuICAgIGNvbnN0IHBvc2l0aW9uUm93ID0gcG9zaXRpb25bMF07XG4gICAgY29uc3QgcG9zaXRpb25Db2wgPSBwb3NpdGlvblsxXTtcbiAgICB0aGlzLmNvb3JkaW5hdGVzW3Bvc2l0aW9uUm93XS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gcG9zaXRpb25Db2wpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZhbHVlLmlzSGl0ID09PSBmYWxzZSAmJlxuICAgICAgICAgIHZhbHVlLnNoaXAgIT09IG51bGwgJiZcbiAgICAgICAgICB0eXBlb2YgdmFsdWUuc2hpcCA9PT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFsdWUuc2hpcC5oaXQoKTtcbiAgICAgICAgICB2YWx1ZS5pc0hpdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaXNIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdmFsdWUuaXNIaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIGxldCBzaGlwc05vdFN1bmsgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb29yZGluYXRlc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5jb29yZGluYXRlc1tpXVtqXS5zaGlwICE9PSBudWxsICYmXG4gICAgICAgICAgdHlwZW9mIHRoaXMuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCA9PT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHNoaXBzTm90U3Vuay5wdXNoKHRoaXMuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwc05vdFN1bmsubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQuanMnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXIuanMnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZURPTSB9IGZyb20gJy4vZG9tLmpzJztcblxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcygpIHtcbiAgY29uc3QgeUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBjb25zdCB4SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIHJldHVybiBbeUluZGV4LCB4SW5kZXhdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VFbmVteVNoaXBzKGFpUGxheWVyKSB7XG4gIGNvbnN0IHNoaXBTaXplcyA9IFsxLCAxLCAxLCAxLCAyLCAyLCAyLCAzLCAzLCA0XTtcbiAgY29uc3Qgb3JpZW50YXRpb25zID0gWydWJywgJ0gnXTtcblxuICBzaGlwU2l6ZXMuZm9yRWFjaCgoc2l6ZSkgPT4ge1xuICAgIGxldCBpc1BsYWNlbWVudFZhbGlkID0gZmFsc2U7XG4gICAgbGV0IGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbjtcblxuICAgIGRvIHtcbiAgICAgIGNvb3JkaW5hdGVzID0gZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlcygpO1xuICAgICAgb3JpZW50YXRpb24gPVxuICAgICAgICBvcmllbnRhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogb3JpZW50YXRpb25zLmxlbmd0aCldO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhaVBsYXllci5wbGFjZVNoaXBPbkJvYXJkKHNpemUsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbik7XG4gICAgICAgIGlzUGxhY2VtZW50VmFsaWQgPSB0cnVlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaXNQbGFjZW1lbnRWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKCFpc1BsYWNlbWVudFZhbGlkKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplR2FtZSgpIHtcbiAgLy9jcmVhdGUgZ2FtZWJvYXJkc1xuICBjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGNvbXB1dGVyR2FtZUJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAvL2NyZWF0ZSBwbGF5ZXJzXG4gIGNvbnN0IGh1bWFuUGxheWVyID0gbmV3IFBsYXllcignSHVtYW4nLCBwbGF5ZXJHYW1lQm9hcmQpO1xuICBjb25zdCBhaVBsYXllciA9IG5ldyBQbGF5ZXIoJ0FJJywgY29tcHV0ZXJHYW1lQm9hcmQpO1xuXG4gIGluaXRpYWxpemVET00oaHVtYW5QbGF5ZXIsIGFpUGxheWVyKTtcbn1cblxuaW5pdGlhbGl6ZUdhbWUoKTtcbiIsImxldCBhaUF0dGFja0Nvb3JkaW5hdGVzID0gW107XG5sZXQgdGFyZ2V0aW5nTGlzdCA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHbG9iYWxWYXJpYWJsZXMoKSB7XG4gIGFpQXR0YWNrQ29vcmRpbmF0ZXMgPSBbXTtcbiAgdGFyZ2V0aW5nTGlzdCA9IFtdO1xufVxuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgYm9hcmQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgfVxuXG4gIC8vbWV0aG9kIHRvIHBsYWNlIHNoaXBzXG4gIHBsYWNlU2hpcE9uQm9hcmQoc2hpcExlbmd0aCwgcG9zaXRpb24sIG9yaWVudGF0aW9uKSB7XG4gICAgdGhpcy5ib2FyZC5wbGFjZVNoaXAoc2hpcExlbmd0aCwgcG9zaXRpb24sIG9yaWVudGF0aW9uKTtcbiAgfVxuICAvL21ldGhvZCB0byBhdHRhY2sgZW5lbXlcbiAgYXR0YWNrRW5lbXkoY29vcmRpbmF0ZXMsIGVuZW15UGxheWVyKSB7XG4gICAgZW5lbXlQbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gIH1cbiAgLy9tZXRob2QgZm9yIGdlbmVyYXRpbmcgcmFuZG9tIGF0dGFjayBjb29yZGluYXRlcyBmb3IgQUlcbiAgZ2VuZXJhdGVBdHRhY2tDb29yZGluYXRlcyhlbmVteVBsYXllcikge1xuICAgIGZ1bmN0aW9uIHJhbmRvbUNvb3JkaW5hdGVzR2VuZXJhdG9yKCkge1xuICAgICAgbGV0IHlJbmRleDtcbiAgICAgIGxldCB4SW5kZXg7XG4gICAgICBsZXQgcGFpcklzTm90VW5pcXVlID0gdHJ1ZTtcbiAgICAgIGRvIHtcbiAgICAgICAgeUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB4SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAgICAgcGFpcklzTm90VW5pcXVlID0gYWlBdHRhY2tDb29yZGluYXRlcy5zb21lKFxuICAgICAgICAgIChwYWlyKSA9PiBwYWlyWzBdID09PSB5SW5kZXggJiYgcGFpclsxXSA9PT0geEluZGV4LFxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXBhaXJJc05vdFVuaXF1ZSAmJlxuICAgICAgICAgIGVuZW15UGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5pc0hpdCA9PT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZW5lbXlQbGF5ZXIuYm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGVuZW15UGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwICE9PSAneCcgJiZcbiAgICAgICAgICAgICFlbmVteVBsYXllci5ib2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5pc1N1bmsoKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHlJbmRleCArIDEgPD0gOSkge1xuICAgICAgICAgICAgICB0YXJnZXRpbmdMaXN0LnB1c2goW3lJbmRleCArIDEsIHhJbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHlJbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICB0YXJnZXRpbmdMaXN0LnB1c2goW3lJbmRleCAtIDEsIHhJbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHhJbmRleCArIDEgPD0gOSkge1xuICAgICAgICAgICAgICB0YXJnZXRpbmdMaXN0LnB1c2goW3lJbmRleCwgeEluZGV4ICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHhJbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICB0YXJnZXRpbmdMaXN0LnB1c2goW3lJbmRleCwgeEluZGV4IC0gMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhaUF0dGFja0Nvb3JkaW5hdGVzLnB1c2goW3lJbmRleCwgeEluZGV4XSk7XG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKFxuICAgICAgICBwYWlySXNOb3RVbmlxdWUgfHxcbiAgICAgICAgZW5lbXlQbGF5ZXIuYm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLmlzSGl0XG4gICAgICApO1xuICAgICAgcmV0dXJuIFt5SW5kZXgsIHhJbmRleF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpbHRlclRhcmdldGluZ0xpc3QoKSB7XG4gICAgICBsZXQgcGFpcklzTm90VW5pcXVlID0gdHJ1ZTtcbiAgICAgIGxldCB4SW5kZXg7XG4gICAgICBsZXQgeUluZGV4O1xuICAgICAgZG8ge1xuICAgICAgICBpZiAodGFyZ2V0aW5nTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB4SW5kZXggPSBudWxsO1xuICAgICAgICAgIHlJbmRleCA9IG51bGw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGFyZ2V0aW5nTGlzdC5zaGlmdCgpO1xuICAgICAgICB5SW5kZXggPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgeEluZGV4ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgICAgIHBhaXJJc05vdFVuaXF1ZSA9IGFpQXR0YWNrQ29vcmRpbmF0ZXMuc29tZShcbiAgICAgICAgICAocGFpcikgPT4gcGFpclswXSA9PT0geUluZGV4ICYmIHBhaXJbMV0gPT09IHhJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGVuZW15UGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwICE9PSBudWxsICYmXG4gICAgICAgICAgZW5lbXlQbGF5ZXIuYm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAgIT09ICd4JyAmJlxuICAgICAgICAgICFwYWlySXNOb3RVbmlxdWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHlJbmRleCArIDEgPD0gOSkge1xuICAgICAgICAgICAgdGFyZ2V0aW5nTGlzdC5wdXNoKFt5SW5kZXggKyAxLCB4SW5kZXhdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHlJbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgdGFyZ2V0aW5nTGlzdC5wdXNoKFt5SW5kZXggLSAxLCB4SW5kZXhdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHhJbmRleCArIDEgPD0gOSkge1xuICAgICAgICAgICAgdGFyZ2V0aW5nTGlzdC5wdXNoKFt5SW5kZXgsIHhJbmRleCArIDFdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHhJbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgdGFyZ2V0aW5nTGlzdC5wdXNoKFt5SW5kZXgsIHhJbmRleCAtIDFdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWlBdHRhY2tDb29yZGluYXRlcy5wdXNoKFt5SW5kZXgsIHhJbmRleF0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IHdoaWxlIChcbiAgICAgICAgZW5lbXlQbGF5ZXIuYm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAgPT09IG51bGwgfHxcbiAgICAgICAgZW5lbXlQbGF5ZXIuYm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAgPT09ICd4JyB8fFxuICAgICAgICBwYWlySXNOb3RVbmlxdWVcbiAgICAgICk7XG4gICAgICByZXR1cm4gW3lJbmRleCwgeEluZGV4XTtcbiAgICB9XG4gICAgaWYgKHRhcmdldGluZ0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gcmFuZG9tQ29vcmRpbmF0ZXNHZW5lcmF0b3IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZmlsdGVyVGFyZ2V0aW5nTGlzdCgpO1xuICAgICAgbGV0IHlJbmRleCA9IGNvb3JkaW5hdGVzWzBdO1xuICAgICAgbGV0IHhJbmRleCA9IGNvb3JkaW5hdGVzWzFdO1xuICAgICAgaWYgKFxuICAgICAgICAoeEluZGV4ID09PSBudWxsICYmIHlJbmRleCA9PT0gbnVsbCkgfHxcbiAgICAgICAgZW5lbXlQbGF5ZXIuYm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLmlzSGl0XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHJhbmRvbUNvb3JkaW5hdGVzR2VuZXJhdG9yKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW3lJbmRleCwgeEluZGV4XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImNsYXNzIFNoaXAge1xuICAjbkhpdHM7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgb3JpZW50YXRpb24pIHtcbiAgICB0aGlzLiNuSGl0cyA9IDA7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IG51bGw7XG4gICAgdGhpcy5lbmRQb3NpdGlvbiA9IG51bGw7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLiNuSGl0cyA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLiNuSGl0cysrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hpdHMgY2Fubm90IGV4Y2VlZCBsZW5ndGgnKTtcbiAgICB9XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy4jbkhpdHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tb2R1bGVzL21haW4uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=