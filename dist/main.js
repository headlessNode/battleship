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
}

.page-body{
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 100px 1fr;
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
    grid-row: 2/3;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,qBAAqB;IACrB,mEAAmE;AACvE;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;AACb;AACA;IACI,eAAe;IACf,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,2DAA2D;IAC3D,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,UAAU;IACV,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb;;mCAE+B;AACnC;;AAEA;IACI;QACI,UAAU;QACV,4BAA4B;IAChC;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Cinzel', serif;\n}\n\n.wrapper{\n    min-height: 100svh;\n    display: grid;\n    grid-template-rows: 150px 1fr 70px;\n    align-items: center;\n    justify-items: center;\n    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);\n}\n\n.header{\n    height: 100%;\n    width: 100%;\n    font-size: 30px;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    gap: 10px;\n}\n.notification{\n    font-size: 20px;\n    grid-row: 2/3;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.page-body{\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows: 100px 1fr;\n    justify-items: center;\n}\n.orientation-btn{\n    cursor: pointer;\n    width: 6rem;\n    height: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    background: #C2C2FF;\n    border-radius: 5px;\n}\n\n.orientation-btn:hover{\n    background: #9999FF;\n}\n\n.current-ship{\n    width: 10rem;\n    text-align: center;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    gap: 10px;\n}\n\n.btn-container{\n    width: 20rem;\n    font-size: 20px;\n    grid-row: 1/2;\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4rem;\n}\n\n.initial-board{\n    grid-column: 1/3;\n    margin-top: 2rem;\n}\n\n.boards{\n    grid-row: 2/3;\n    grid-column: 1/3;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(354px, 1fr));\n    justify-items: center;\n    gap: 21px;\n}\n\n.board-one .row, .board-two .row, .initial-board .row{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.board-one .row .block, .board-two .row .block, .initial-board .row .block{\n    height: 2rem;\n    width: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board-two .row .block, .initial-board .row .block{\n    border: 1px solid #b4b4ff;\n}\n\n.board-two .row .block.hover:hover, .initial-board .row .block.hover:hover{\n    cursor: crosshair;\n    border: 2px solid #58355E;\n    background: rgba(0,0,255,.05);\n}\n\n.footer{\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.footer a i{\n    transform: rotateZ(0) scale(1);\n    transition: transform 0.5s ease;\n}\n\n.footer a i:hover{\n    transform: rotateZ(360deg) scale(1.5);\n}\n\n.end-dialog[open]{\n    opacity: 1;\n    transform: translateY(0);\n}\n\n.end-dialog{\n    margin: auto auto;\n    border: none;\n    border-radius: 10px;\n    width: 250px;\n    height: 150px;\n    transition: \n        opacity 600ms ease-in-out,\n        transform 300ms ease-in-out;\n}\n\n@starting-style{\n    .end-dialog[open]{\n        opacity: 0;\n        transform: translateY(100px);\n    }\n}\n\n.end-dialog form{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.end-dialog form button{\n    width: 120px;\n    height: 50px;\n    border: none;\n    border-radius: 5px;\n    background: #136290;\n    color: white;\n    font-size: large;\n    cursor: pointer;\n}\n\n.end-dialog form button:hover{\n    background: #1A87C7;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQixRQUFRO0FBQzlCLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRSxtQkFBbUIsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLGVBQWU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLHVCQUF1QixtQkFBbUIsdUJBQXVCO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRUFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBYztBQUN0QixPQUFPO0FBQ1A7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx1QkFBdUIsbUJBQW1CLHVCQUF1QjtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELDhCQUE4QixtQkFBbUIsOEJBQThCO0FBQzVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdFQUFvQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdEQUFjO0FBQ3hCLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0VBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0RBQWM7QUFDNUIsYUFBYTtBQUNiLFlBQVk7QUFDWjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0EsSUFBSSx5REFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqNEI2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQztBQUNBO0FBQ0EsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEM7QUFDQTtBQUNBLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDO0FBQ0E7QUFDQSxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQztBQUNBO0FBQ0EsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEM7QUFDQTtBQUNBLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDO0FBQ0E7QUFDQSxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQyxVQUFVLDBCQUEwQjtBQUNwQztBQUNBO0FBQ0EsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEMsVUFBVSwwQkFBMEI7QUFDcEM7QUFDQTtBQUNBLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDLFVBQVUsMEJBQTBCO0FBQ3BDO0FBQ0E7QUFDQSxVQUFVLDBCQUEwQjtBQUNw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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ3pCcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9tYWluLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICdDaW56ZWwnLCBzZXJpZjtcbn1cblxuLndyYXBwZXJ7XG4gICAgbWluLWhlaWdodDogMTAwc3ZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCAxZnIgNzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjZmRmYmZiIDAlLCAjZWJlZGVlIDEwMCUpO1xufVxuXG4uaGVhZGVye1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG4ubm90aWZpY2F0aW9ue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wYWdlLWJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuLm9yaWVudGF0aW9uLWJ0bntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDZyZW07XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI0MyQzJGRjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5vcmllbnRhdGlvbi1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzk5OTlGRjtcbn1cblxuLmN1cnJlbnQtc2hpcHtcbiAgICB3aWR0aDogMTByZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uYnRuLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMjByZW07XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0cmVtO1xufVxuXG4uaW5pdGlhbC1ib2FyZHtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5ib2FyZHN7XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTRweCwgMWZyKSk7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjFweDtcbn1cblxuLmJvYXJkLW9uZSAucm93LCAuYm9hcmQtdHdvIC5yb3csIC5pbml0aWFsLWJvYXJkIC5yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm9hcmQtb25lIC5yb3cgLmJsb2NrLCAuYm9hcmQtdHdvIC5yb3cgLmJsb2NrLCAuaW5pdGlhbC1ib2FyZCAucm93IC5ibG9ja3tcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9hcmQtdHdvIC5yb3cgLmJsb2NrLCAuaW5pdGlhbC1ib2FyZCAucm93IC5ibG9ja3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjRiNGZmO1xufVxuXG4uYm9hcmQtdHdvIC5yb3cgLmJsb2NrLmhvdmVyOmhvdmVyLCAuaW5pdGlhbC1ib2FyZCAucm93IC5ibG9jay5ob3Zlcjpob3ZlcntcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTgzNTVFO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDI1NSwuMDUpO1xufVxuXG4uZm9vdGVye1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5mb290ZXIgYSBpe1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigwKSBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xufVxuXG4uZm9vdGVyIGEgaTpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSBzY2FsZSgxLjUpO1xufVxuXG4uZW5kLWRpYWxvZ1tvcGVuXXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cblxuLmVuZC1kaWFsb2d7XG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgdHJhbnNpdGlvbjogXG4gICAgICAgIG9wYWNpdHkgNjAwbXMgZWFzZS1pbi1vdXQsXG4gICAgICAgIHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuQHN0YXJ0aW5nLXN0eWxle1xuICAgIC5lbmQtZGlhbG9nW29wZW5de1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgIH1cbn1cblxuLmVuZC1kaWFsb2cgZm9ybXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5lbmQtZGlhbG9nIGZvcm0gYnV0dG9ue1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMTM2MjkwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVuZC1kaWFsb2cgZm9ybSBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzFBODdDNztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtRUFBbUU7QUFDdkU7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxxQkFBcUI7SUFDckIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiOzttQ0FFK0I7QUFDbkM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDViw0QkFBNEI7SUFDaEM7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJywgc2VyaWY7XFxufVxcblxcbi53cmFwcGVye1xcbiAgICBtaW4taGVpZ2h0OiAxMDBzdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggMWZyIDcwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2ZkZmJmYiAwJSwgI2ViZWRlZSAxMDAlKTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLm5vdGlmaWNhdGlvbntcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGFnZS1ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4ub3JpZW50YXRpb24tYnRue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNDMkMyRkY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm9yaWVudGF0aW9uLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogIzk5OTlGRjtcXG59XFxuXFxuLmN1cnJlbnQtc2hpcHtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRyZW07XFxufVxcblxcbi5pbml0aWFsLWJvYXJke1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uYm9hcmRze1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTRweCwgMWZyKSk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMXB4O1xcbn1cXG5cXG4uYm9hcmQtb25lIC5yb3csIC5ib2FyZC10d28gLnJvdywgLmluaXRpYWwtYm9hcmQgLnJvd3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1vbmUgLnJvdyAuYmxvY2ssIC5ib2FyZC10d28gLnJvdyAuYmxvY2ssIC5pbml0aWFsLWJvYXJkIC5yb3cgLmJsb2Nre1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkLXR3byAucm93IC5ibG9jaywgLmluaXRpYWwtYm9hcmQgLnJvdyAuYmxvY2t7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNGI0ZmY7XFxufVxcblxcbi5ib2FyZC10d28gLnJvdyAuYmxvY2suaG92ZXI6aG92ZXIsIC5pbml0aWFsLWJvYXJkIC5yb3cgLmJsb2NrLmhvdmVyOmhvdmVye1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzU4MzU1RTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMjU1LC4wNSk7XFxufVxcblxcbi5mb290ZXJ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uZm9vdGVyIGEgaXtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDApIHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xcbn1cXG5cXG4uZm9vdGVyIGEgaTpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgc2NhbGUoMS41KTtcXG59XFxuXFxuLmVuZC1kaWFsb2dbb3Blbl17XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLmVuZC1kaWFsb2d7XFxuICAgIG1hcmdpbjogYXV0byBhdXRvO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgdHJhbnNpdGlvbjogXFxuICAgICAgICBvcGFjaXR5IDYwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Ac3RhcnRpbmctc3R5bGV7XFxuICAgIC5lbmQtZGlhbG9nW29wZW5de1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XFxuICAgIH1cXG59XFxuXFxuLmVuZC1kaWFsb2cgZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmVuZC1kaWFsb2cgZm9ybSBidXR0b257XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogIzEzNjI5MDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lbmQtZGlhbG9nIGZvcm0gYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiAjMUE4N0M3O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcGxhY2VFbmVteVNoaXBzLCBpbml0aWFsaXplR2FtZSB9IGZyb20gJy4vbWFpbi5qcyc7XG5pbXBvcnQgeyByZXNldEdsb2JhbFZhcmlhYmxlcyB9IGZyb20gJy4vcGxheWVyLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckh1bWFuQm9hcmQoaHVtYW5Cb2FyZCkge1xuICBjb25zdCBib2FyZE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZE9uZS5jbGFzc0xpc3QuYWRkKCdib2FyZC1vbmUnKTtcbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcycpO1xuICAvL2NyZWF0ZSBib2FyZCBmb3IgaHVtYW5QbGF5ZXJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgIGJvYXJkT25lLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gOTsgaisrKSB7XG4gICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICAgIGJsb2NrLmRhdGFzZXQueEluZGV4ID0gajtcbiAgICAgIGJsb2NrLmRhdGFzZXQueUluZGV4ID0gaTtcbiAgICAgIGlmIChcbiAgICAgICAgLy9mb3Igc2hpcCB3aXRoIHZlcnRpY2FsIG9yaWVudGF0aW9uXG4gICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgIT09ICd4JyAmJlxuICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAub3JpZW50YXRpb24gPT09ICdWJ1xuICAgICAgKSB7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcHJlc2VudCcpO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkICMwMGYnO1xuICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMCwwLDI1NSwuMDUpJztcbiAgICAgICAgLy9pZiB0aGVyZSBpcyBhIHNoaXAtcGFydCBiZWxvd1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaSArIDEgPD0gOSAmJlxuICAgICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbaSArIDFdW2pdLnNoaXAgIT09IG51bGwgJiZcbiAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW2kgKyAxXVtqXS5zaGlwICE9PSAneCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyQm90dG9tID0gJ25vbmUnO1xuICAgICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgI2I0YjRmZic7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiB0aGVyZSBpcyBhIHNoaXAtcGFydCBhYm92ZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgaSAtIDEgPj0gMCAmJlxuICAgICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbaSAtIDFdW2pdLnNoaXAgIT09IG51bGwgJiZcbiAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW2kgLSAxXVtqXS5zaGlwICE9PSAneCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyVG9wID0gJ25vbmUnO1xuICAgICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlclRvcCA9ICcxcHggc29saWQgI2I0YjRmZic7XG4gICAgICAgIH1cbiAgICAgICAgLy9mb3Igc2hpcCB3aXRoIGhvcml6b250YWwgb3JpZW50YXRpb25cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgIT09ICd4JyAmJlxuICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAub3JpZW50YXRpb24gPT09ICdIJ1xuICAgICAgKSB7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcHJlc2VudCcpO1xuICAgICAgICBibG9jay5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkICMwMGYnO1xuICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMCwwLDI1NSwuMDUpJztcbiAgICAgICAgLy9pZiB0aGVyZSBpcyBhIHNoaXAtcGFydCB0byB0aGUgcmlnaHRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGogKyAxIDw9IDkgJiZcbiAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW2ldW2ogKyAxXS5zaGlwICE9PSBudWxsICYmXG4gICAgICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1tpXVtqICsgMV0uc2hpcCAhPT0gJ3gnXG4gICAgICAgICkge1xuICAgICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlclJpZ2h0ID0gJ25vbmUnO1xuICAgICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlclJpZ2h0ID0gJzFweCBzb2xpZCAjYjRiNGZmJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgaiAtIDEgPj0gMCAmJlxuICAgICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbaV1baiAtIDFdLnNoaXAgIT09IG51bGwgJiZcbiAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW2ldW2ogLSAxXS5zaGlwICE9PSAneCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyTGVmdCA9ICdub25lJztcbiAgICAgICAgICBibG9jay5zdHlsZS5ib3JkZXJMZWZ0ID0gJzFweCBzb2xpZCAjYjRiNGZmJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjYjRiNGZmJztcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChibG9jayk7XG4gICAgfVxuICB9XG4gIGJvYXJkcy5hcHBlbmRDaGlsZChib2FyZE9uZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQWlCb2FyZChhaUJvYXJkKSB7XG4gIGNvbnN0IGJvYXJkVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkVHdvLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXR3bycpO1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzJyk7XG5cbiAgLy9jcmVhdGUgYm9hcmQgZm9yIGFpUGxheWVyXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICBib2FyZFR3by5hcHBlbmRDaGlsZChyb3cpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XG4gICAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgYmxvY2suZGF0YXNldC54SW5kZXggPSBqO1xuICAgICAgYmxvY2suZGF0YXNldC55SW5kZXggPSBpO1xuICAgICAgaWYgKFxuICAgICAgICBhaUJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgIT09IG51bGwgJiZcbiAgICAgICAgYWlCb2FyZC5jb29yZGluYXRlc1tpXVtqXS5zaGlwICE9PSAneCdcbiAgICAgICkge1xuICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdzaGlwLXByZXNlbnQnKTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChibG9jayk7XG4gICAgfVxuICB9XG4gIGJvYXJkcy5hcHBlbmRDaGlsZChib2FyZFR3byk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVIdW1hbkJvYXJkKGh1bWFuQm9hcmQsIGF0dGFja2VkSW5kZXgpIHtcbiAgY29uc3QgeUluZGV4ID0gYXR0YWNrZWRJbmRleFswXTtcbiAgY29uc3QgeEluZGV4ID0gYXR0YWNrZWRJbmRleFsxXTtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtb25lJyk7XG4gIGNvbnN0IGF0dGFja2VkQ2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleH1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXh9XCJdYCxcbiAgKTtcbiAgaWYgKGF0dGFja2VkQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcHJlc2VudCcpKSB7XG4gICAgYXR0YWNrZWRDZWxsLmlubmVySFRNTCA9XG4gICAgICAnPHN2ZyB3aWR0aCA9IFwiMzBcIiBoZWlnaHQgPSBcIjMwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGRhdGEtbmFtZT1cIkZsYXQgTGluZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb24gZmxhdC1saW5lXCI+PHBhdGggZD1cIk0xOSAxOSA1IDVtMTQgMEw1IDE5XCIgc3R5bGU9XCJmaWxsOm5vbmU7c3Ryb2tlOnJlZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOi45NjAwMDAwMDAwMDAwMDAyXCIvPjwvc3ZnPic7XG4gICAgLy9hZGQgMSBpbiByb3cgYW5kIGNvbFxuICAgIGlmICh5SW5kZXggKyAxIDw9IDkgJiYgeEluZGV4ICsgMSA8PSA5KSB7XG4gICAgICBjb25zdCBkaWFnb25hbENlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4ICsgMX1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXggKyAxfVwiXWAsXG4gICAgICApO1xuICAgICAgZGlhZ29uYWxDZWxsLmlubmVySFRNTCA9XG4gICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICBkaWFnb25hbENlbGwuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICBkaWFnb25hbENlbGwuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgIGRpYWdvbmFsQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXggKyAxXVt4SW5kZXggKyAxXS5pc0hpdCA9IHRydWU7XG4gICAgfVxuICAgIC8vYWRkIDEgaW4gcm93IHN1YnQgMSBpbiBjb2xcbiAgICBpZiAoeUluZGV4ICsgMSA8PSA5ICYmIHhJbmRleCAtIDEgPj0gMCkge1xuICAgICAgY29uc3QgZGlhZ29uYWxDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleCAtIDF9XCJdW2RhdGEteS1pbmRleD1cIiR7eUluZGV4ICsgMX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGRpYWdvbmFsQ2VsbC5pbm5lckhUTUwgPVxuICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgZGlhZ29uYWxDZWxsLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgZGlhZ29uYWxDZWxsLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICBkaWFnb25hbENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4ICsgMV1beEluZGV4IC0gMV0uaXNIaXQgPSB0cnVlO1xuICAgIH1cbiAgICAvL3N1YiAxIGluIHJvdyBzdWIgMSBpbiBjb2xcbiAgICBpZiAoeUluZGV4IC0gMSA+PSAwICYmIHhJbmRleCAtIDEgPj0gMCkge1xuICAgICAgY29uc3QgZGlhZ29uYWxDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleCAtIDF9XCJdW2RhdGEteS1pbmRleD1cIiR7eUluZGV4IC0gMX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGRpYWdvbmFsQ2VsbC5pbm5lckhUTUwgPVxuICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgZGlhZ29uYWxDZWxsLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgZGlhZ29uYWxDZWxsLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICBkaWFnb25hbENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4IC0gMV1beEluZGV4IC0gMV0uaXNIaXQgPSB0cnVlO1xuICAgIH1cbiAgICAvL3N1YiAxIGluIHJvdyBhZGQgMSBpbiBjb2xcbiAgICBpZiAoeUluZGV4IC0gMSA+PSAwICYmIHhJbmRleCArIDEgPD0gOSkge1xuICAgICAgY29uc3QgZGlhZ29uYWxDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleCArIDF9XCJdW2RhdGEteS1pbmRleD1cIiR7eUluZGV4IC0gMX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGRpYWdvbmFsQ2VsbC5pbm5lckhUTUwgPVxuICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgZGlhZ29uYWxDZWxsLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgZGlhZ29uYWxDZWxsLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICBkaWFnb25hbENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4IC0gMV1beEluZGV4ICsgMV0uaXNIaXQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vaWYgdGhlIHNoaXAgaXMgc3VuayBhZGQgYm9yZGVycyB0byB0aGUgd2hvbGUgbGVuZ2h0IG9mIHRoZSBzaGlwXG4gICAgaWYgKGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgIGlmIChodW1hbkJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLm9yaWVudGF0aW9uID09PSAnSCcpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9XG4gICAgICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5zdGFydFBvc2l0aW9uWzFdO1xuICAgICAgICBjb25zdCBlbmRJbmRleCA9XG4gICAgICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5lbmRQb3NpdGlvbjtcbiAgICAgICAgLy9hZGQgZG90cyB0byBzdGFydCAtIDFcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggLSAxID49IDApIHtcbiAgICAgICAgICBjb25zdCBkb3R0ZWRDZWxsQmVmb3JlID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHtzdGFydEluZGV4IC0gMX1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXh9XCJdYCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGRvdHRlZENlbGxCZWZvcmUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICAgICAgZG90dGVkQ2VsbEJlZm9yZS5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgICAgICBkb3R0ZWRDZWxsQmVmb3JlLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICAgICAgZG90dGVkQ2VsbEJlZm9yZS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVtzdGFydEluZGV4IC0gMV0uaXNIaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vYWRkIGRvdHMgdG8gZW5kICsgMVxuICAgICAgICBpZiAoZW5kSW5kZXggKyAxIDw9IDkpIHtcbiAgICAgICAgICBjb25zdCBkb3R0ZWRDZWxsQWZ0ZXIgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke2VuZEluZGV4ICsgMX1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXh9XCJdYCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGRvdHRlZENlbGxBZnRlci5pbm5lckhUTUwgPVxuICAgICAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgICAgICBkb3R0ZWRDZWxsQWZ0ZXIuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICAgICAgZG90dGVkQ2VsbEFmdGVyLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICAgICAgZG90dGVkQ2VsbEFmdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW2VuZEluZGV4ICsgMV0uaXNIaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vYWxzbyBhZGQgZG90cyBhYm92ZSBhbmQgYmVsb3cgaWYgdGhlIHNoaXAgaXMgb2YgbGVuZ3RoIDFcbiAgICAgICAgaWYgKGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgaWYgKHlJbmRleCArIDEgPD0gOSkge1xuICAgICAgICAgICAgY29uc3QgZG90dGVkQ2VsbEFib3ZlID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleH1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXggKyAxfVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZG90dGVkQ2VsbEFib3ZlLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsQWJvdmUuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsQWJvdmUuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgICAgICAgIGRvdHRlZENlbGxBYm92ZS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXggKyAxXVt4SW5kZXhdLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHlJbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgY29uc3QgZG90dGVkQ2VsbEJlbG93ID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleH1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXggLSAxfVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZG90dGVkQ2VsbEJlbG93LmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsQmVsb3cuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsQmVsb3cuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgICAgICAgIGRvdHRlZENlbGxCZWxvdy5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXggLSAxXVt4SW5kZXhdLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8PSBlbmRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcENlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke2l9XCJdW2RhdGEteS1pbmRleD1cIiR7aHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5zdGFydFBvc2l0aW9uWzBdfVwiXWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoaSA8IGVuZEluZGV4KSB7XG4gICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXJMZWZ0ID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyVG9wID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyQm90dG9tID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGFydEluZGV4ID1cbiAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLnN0YXJ0UG9zaXRpb25bMF07XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID1cbiAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLmVuZFBvc2l0aW9uO1xuICAgICAgICAvL2FkZCBkb3RzIHRvIHN0YXJ0IC0gMVxuICAgICAgICBpZiAoc3RhcnRJbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgIGNvbnN0IGRvdHRlZENlbGxCZWZvcmUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleH1cIl1bZGF0YS15LWluZGV4PVwiJHtzdGFydEluZGV4IC0gMX1cIl1gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgZG90dGVkQ2VsbEJlZm9yZS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgICAgICBkb3R0ZWRDZWxsQmVmb3JlLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgICAgIGRvdHRlZENlbGxCZWZvcmUuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgICAgICBkb3R0ZWRDZWxsQmVmb3JlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgaHVtYW5Cb2FyZC5jb29yZGluYXRlc1tzdGFydEluZGV4IC0gMV1beEluZGV4XS5pc0hpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy9hZGQgZG90cyB0byBlbmQgKyAxXG4gICAgICAgIGlmIChlbmRJbmRleCArIDEgPD0gOSkge1xuICAgICAgICAgIGNvbnN0IGRvdHRlZENlbGxBZnRlciA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4fVwiXVtkYXRhLXktaW5kZXg9XCIke2VuZEluZGV4ICsgMX1cIl1gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgZG90dGVkQ2VsbEFmdGVyLmlubmVySFRNTCA9XG4gICAgICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgICAgIGRvdHRlZENlbGxBZnRlci5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgICAgICBkb3R0ZWRDZWxsQWZ0ZXIuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgICAgICBkb3R0ZWRDZWxsQWZ0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW2VuZEluZGV4ICsgMV1beEluZGV4XS5pc0hpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy9hbHNvIGFkZCBkb3RzIGxlZnQgYW5kIHJpZ2h0IGlmIHRoZSBzaGlwIGlzIG9mIGxlbmd0aCAxXG4gICAgICAgIGlmIChodW1hbkJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGlmICh4SW5kZXggKyAxIDw9IDkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvdHRlZENlbGxSaWdodCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHt4SW5kZXggKyAxfVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleH1cIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRvdHRlZENlbGxSaWdodC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgICAgICAgZG90dGVkQ2VsbFJpZ2h0LnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgICAgICAgZG90dGVkQ2VsbFJpZ2h0LnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsUmlnaHQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgICAgIGh1bWFuQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXggKyAxXS5pc0hpdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh4SW5kZXggLSAxID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRvdHRlZENlbGxMZWZ0ID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleCAtIDF9XCJdW2RhdGEteS1pbmRleD1cIiR7eUluZGV4fVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZG90dGVkQ2VsbExlZnQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgICAgICAgIGRvdHRlZENlbGxMZWZ0LnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgICAgICAgZG90dGVkQ2VsbExlZnQuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgICAgICAgIGRvdHRlZENlbGxMZWZ0LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgICBodW1hbkJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4IC0gMV0uaXNIaXQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDw9IGVuZEluZGV4OyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzaGlwQ2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7aHVtYW5Cb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5zdGFydFBvc2l0aW9uWzFdfVwiXVtkYXRhLXktaW5kZXg9XCIke2l9XCJdYCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChpIDwgZW5kSW5kZXgpIHtcbiAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlckxlZnQgPSAnMnB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9ICcycHggc29saWQgcmVkJztcbiAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlclRvcCA9ICcycHggc29saWQgcmVkJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhdHRhY2tlZENlbGwuaW5uZXJIVE1MID1cbiAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgYXR0YWNrZWRDZWxsLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgIGF0dGFja2VkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBaUJvYXJkKGFpQm9hcmQsIGF0dGFja2VkSW5kZXgpIHtcbiAgY29uc3QgeUluZGV4ID0gYXR0YWNrZWRJbmRleFswXTtcbiAgY29uc3QgeEluZGV4ID0gYXR0YWNrZWRJbmRleFsxXTtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtdHdvJyk7XG4gIGNvbnN0IGF0dGFja2VkQ2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleH1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXh9XCJdYCxcbiAgKTtcbiAgYXR0YWNrZWRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gIGF0dGFja2VkQ2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gIGlmIChhdHRhY2tlZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXByZXNlbnQnKSkge1xuICAgIGF0dGFja2VkQ2VsbC5pbm5lckhUTUwgPVxuICAgICAgJzxzdmcgd2lkdGggPSBcIjMwXCIgaGVpZ2h0ID0gXCIzMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBkYXRhLW5hbWU9XCJGbGF0IExpbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJpY29uIGZsYXQtbGluZVwiPjxwYXRoIGQ9XCJNMTkgMTkgNSA1bTE0IDBMNSAxOVwiIHN0eWxlPVwiZmlsbDpub25lO3N0cm9rZTpyZWQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDouOTYwMDAwMDAwMDAwMDAwMlwiLz48L3N2Zz4nO1xuICAgIC8vYWRkIDEgaW4gcm93IGFuZCBjb2xcbiAgICBpZiAoeUluZGV4ICsgMSA8PSA5ICYmIHhJbmRleCArIDEgPD0gOSkge1xuICAgICAgY29uc3QgZGlhZ29uYWxDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleCArIDF9XCJdW2RhdGEteS1pbmRleD1cIiR7eUluZGV4ICsgMX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGRpYWdvbmFsQ2VsbC5pbm5lckhUTUwgPVxuICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgZGlhZ29uYWxDZWxsLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgZGlhZ29uYWxDZWxsLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICBkaWFnb25hbENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgIGRpYWdvbmFsQ2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICBhaUJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleCArIDFdW3hJbmRleCArIDFdLmlzSGl0ID0gdHJ1ZTtcbiAgICB9XG4gICAgLy9hZGQgMSBpbiByb3cgc3VidCAxIGluIGNvbFxuICAgIGlmICh5SW5kZXggKyAxIDw9IDkgJiYgeEluZGV4IC0gMSA+PSAwKSB7XG4gICAgICBjb25zdCBkaWFnb25hbENlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4IC0gMX1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXggKyAxfVwiXWAsXG4gICAgICApO1xuICAgICAgZGlhZ29uYWxDZWxsLmlubmVySFRNTCA9XG4gICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICBkaWFnb25hbENlbGwuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICBkaWFnb25hbENlbGwuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgIGRpYWdvbmFsQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgZGlhZ29uYWxDZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgIGFpQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4ICsgMV1beEluZGV4IC0gMV0uaXNIaXQgPSB0cnVlO1xuICAgIH1cbiAgICAvL3N1YiAxIGluIHJvdyBzdWIgMSBpbiBjb2xcbiAgICBpZiAoeUluZGV4IC0gMSA+PSAwICYmIHhJbmRleCAtIDEgPj0gMCkge1xuICAgICAgY29uc3QgZGlhZ29uYWxDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleCAtIDF9XCJdW2RhdGEteS1pbmRleD1cIiR7eUluZGV4IC0gMX1cIl1gLFxuICAgICAgKTtcbiAgICAgIGRpYWdvbmFsQ2VsbC5pbm5lckhUTUwgPVxuICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgZGlhZ29uYWxDZWxsLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgZGlhZ29uYWxDZWxsLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICBkaWFnb25hbENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgIGRpYWdvbmFsQ2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICBhaUJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleCAtIDFdW3hJbmRleCAtIDFdLmlzSGl0ID0gdHJ1ZTtcbiAgICB9XG4gICAgLy9zdWIgMSBpbiByb3cgYWRkIDEgaW4gY29sXG4gICAgaWYgKHlJbmRleCAtIDEgPj0gMCAmJiB4SW5kZXggKyAxIDw9IDkpIHtcbiAgICAgIGNvbnN0IGRpYWdvbmFsQ2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHt4SW5kZXggKyAxfVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleCAtIDF9XCJdYCxcbiAgICAgICk7XG4gICAgICBkaWFnb25hbENlbGwuaW5uZXJIVE1MID1cbiAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgIGRpYWdvbmFsQ2VsbC5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgIGRpYWdvbmFsQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICAgICAgZGlhZ29uYWxDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICBkaWFnb25hbENlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgYWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXggLSAxXVt4SW5kZXggKyAxXS5pc0hpdCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy9pZiB0aGUgc2hpcCBpcyBzdW5rIGFkZCBib3JkZXJzIHRvIHRoZSB3aG9sZSBsZW5naHQgb2YgdGhlIHNoaXBcbiAgICBpZiAoYWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5pc1N1bmsoKSkge1xuICAgICAgaWYgKGFpQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAub3JpZW50YXRpb24gPT09ICdIJykge1xuICAgICAgICBjb25zdCBzdGFydEluZGV4ID1cbiAgICAgICAgICBhaUJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLnN0YXJ0UG9zaXRpb25bMV07XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gYWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5lbmRQb3NpdGlvbjtcbiAgICAgICAgLy9hZGQgZG90cyB0byBzdGFydCAtIDFcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggLSAxID49IDApIHtcbiAgICAgICAgICBjb25zdCBkb3R0ZWRDZWxsQmVmb3JlID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHtzdGFydEluZGV4IC0gMX1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXh9XCJdYCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGRvdHRlZENlbGxCZWZvcmUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICAgICAgZG90dGVkQ2VsbEJlZm9yZS5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgICAgICBkb3R0ZWRDZWxsQmVmb3JlLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICAgICAgZG90dGVkQ2VsbEJlZm9yZS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICAgIGRvdHRlZENlbGxCZWZvcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgIGFpQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVtzdGFydEluZGV4IC0gMV0uaXNIaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vYWRkIGRvdHMgdG8gZW5kICsgMVxuICAgICAgICBpZiAoZW5kSW5kZXggKyAxIDw9IDkpIHtcbiAgICAgICAgICBjb25zdCBkb3R0ZWRDZWxsQWZ0ZXIgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke2VuZEluZGV4ICsgMX1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXh9XCJdYCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGRvdHRlZENlbGxBZnRlci5pbm5lckhUTUwgPVxuICAgICAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgICAgICBkb3R0ZWRDZWxsQWZ0ZXIuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICAgICAgZG90dGVkQ2VsbEFmdGVyLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gICAgICAgICAgZG90dGVkQ2VsbEFmdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgZG90dGVkQ2VsbEFmdGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICBhaUJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1bZW5kSW5kZXggKyAxXS5pc0hpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy9hbHNvIGFkZCBkb3RzIGFib3ZlIGFuZCBiZWxvdyBpZiB0aGUgc2hpcCBpcyBvZiBsZW5ndGggMVxuICAgICAgICBpZiAoYWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBpZiAoeUluZGV4ICsgMSA8PSA5KSB7XG4gICAgICAgICAgICBjb25zdCBkb3R0ZWRDZWxsQWJvdmUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4fVwiXVtkYXRhLXktaW5kZXg9XCIke3lJbmRleCArIDF9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsQWJvdmUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgICAgICAgIGRvdHRlZENlbGxBYm92ZS5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgICAgICAgIGRvdHRlZENlbGxBYm92ZS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICAgICAgICAgICAgZG90dGVkQ2VsbEFib3ZlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsQWJvdmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgYWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXggKyAxXVt4SW5kZXhdLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHlJbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgY29uc3QgZG90dGVkQ2VsbEJlbG93ID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke3hJbmRleH1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXggLSAxfVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZG90dGVkQ2VsbEJlbG93LmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsQmVsb3cuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsQmVsb3cuc3R5bGUuYmFja2dyb3VuZCA9ICcjQ0FEMkUzJztcbiAgICAgICAgICAgIGRvdHRlZENlbGxCZWxvdy5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICAgICAgZG90dGVkQ2VsbEJlbG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIGFpQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4IC0gMV1beEluZGV4XS5pc0hpdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPD0gZW5kSW5kZXg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHNoaXBDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHtpfVwiXVtkYXRhLXktaW5kZXg9XCIke2FpQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAuc3RhcnRQb3NpdGlvblswXX1cIl1gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGkgPCBlbmRJbmRleCkge1xuICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyTGVmdCA9ICcycHggc29saWQgcmVkJztcbiAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlclRvcCA9ICcycHggc29saWQgcmVkJztcbiAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcycHggc29saWQgcmVkJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9XG4gICAgICAgICAgYWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5zdGFydFBvc2l0aW9uWzBdO1xuICAgICAgICBjb25zdCBlbmRJbmRleCA9IGFpQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAuZW5kUG9zaXRpb247XG4gICAgICAgIC8vYWRkIGRvdHMgdG8gc3RhcnQgLSAxXG4gICAgICAgIGlmIChzdGFydEluZGV4IC0gMSA+PSAwKSB7XG4gICAgICAgICAgY29uc3QgZG90dGVkQ2VsbEJlZm9yZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4fVwiXVtkYXRhLXktaW5kZXg9XCIke3N0YXJ0SW5kZXggLSAxfVwiXWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkb3R0ZWRDZWxsQmVmb3JlLmlubmVySFRNTCA9XG4gICAgICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgICAgIGRvdHRlZENlbGxCZWZvcmUuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICAgICAgZG90dGVkQ2VsbEJlZm9yZS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICAgICAgICAgIGRvdHRlZENlbGxCZWZvcmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgICBkb3R0ZWRDZWxsQmVmb3JlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICBhaUJvYXJkLmNvb3JkaW5hdGVzW3N0YXJ0SW5kZXggLSAxXVt4SW5kZXhdLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvL2FkZCBkb3RzIHRvIGVuZCArIDFcbiAgICAgICAgaWYgKGVuZEluZGV4ICsgMSA8PSA5KSB7XG4gICAgICAgICAgY29uc3QgZG90dGVkQ2VsbEFmdGVyID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHt4SW5kZXh9XCJdW2RhdGEteS1pbmRleD1cIiR7ZW5kSW5kZXggKyAxfVwiXWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkb3R0ZWRDZWxsQWZ0ZXIuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICc8c3ZnIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI1MTJcIiBjeT1cIjUxMlwiIHI9XCIyNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPic7XG4gICAgICAgICAgZG90dGVkQ2VsbEFmdGVyLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xuICAgICAgICAgIGRvdHRlZENlbGxBZnRlci5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICAgICAgICAgIGRvdHRlZENlbGxBZnRlci5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgICAgICAgIGRvdHRlZENlbGxBZnRlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgYWlCb2FyZC5jb29yZGluYXRlc1tlbmRJbmRleCArIDFdW3hJbmRleF0uaXNIaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vYWxzbyBhZGQgZG90cyBsZWZ0IGFuZCByaWdodCBpZiB0aGUgc2hpcCBpcyBvZiBsZW5ndGggMVxuICAgICAgICBpZiAoYWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBpZiAoeEluZGV4ICsgMSA8PSA5KSB7XG4gICAgICAgICAgICBjb25zdCBkb3R0ZWRDZWxsUmlnaHQgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4ICsgMX1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXh9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsUmlnaHQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICAgICAgICAgIGRvdHRlZENlbGxSaWdodC5zdHlsZS5mb250U2l6ZSA9ICcycmVtJztcbiAgICAgICAgICAgIGRvdHRlZENlbGxSaWdodC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICAgICAgICAgICAgZG90dGVkQ2VsbFJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsUmlnaHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgYWlCb2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleCArIDFdLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHhJbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgY29uc3QgZG90dGVkQ2VsbExlZnQgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7eEluZGV4IC0gMX1cIl1bZGF0YS15LWluZGV4PVwiJHt5SW5kZXh9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsTGVmdC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAnPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNTEyXCIgY3k9XCI1MTJcIiByPVwiMjU2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nO1xuICAgICAgICAgICAgZG90dGVkQ2VsbExlZnQuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgICAgICAgICBkb3R0ZWRDZWxsTGVmdC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNDQUQyRTMnO1xuICAgICAgICAgICAgZG90dGVkQ2VsbExlZnQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgICAgIGRvdHRlZENlbGxMZWZ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIGFpQm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXggLSAxXS5pc0hpdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPD0gZW5kSW5kZXg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHNoaXBDZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHthaUJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwLnN0YXJ0UG9zaXRpb25bMV19XCJdW2RhdGEteS1pbmRleD1cIiR7aX1cIl1gLFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGkgPCBlbmRJbmRleCkge1xuICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyTGVmdCA9ICcycHggc29saWQgcmVkJztcbiAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlclJpZ2h0ID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyVG9wID0gJzJweCBzb2xpZCByZWQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGF0dGFja2VkQ2VsbC5pbm5lckhUTUwgPVxuICAgICAgJzxzdmcgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjUxMlwiIGN5PVwiNTEyXCIgcj1cIjI1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+JztcbiAgICBhdHRhY2tlZENlbGwuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XG4gICAgYXR0YWNrZWRDZWxsLnN0eWxlLmJhY2tncm91bmQgPSAnI0NBRDJFMyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxhY2VIdW1hblNoaXBzKGh1bWFuUGxheWVyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluaXRpYWxCb2FyZC5jbGFzc0xpc3QuYWRkKCdpbml0aWFsLWJvYXJkJyk7XG4gICAgY29uc3QgcGFnZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1ib2R5Jyk7XG4gICAgcGFnZUJvZHkuYXBwZW5kQ2hpbGQoaW5pdGlhbEJvYXJkKTtcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyIC5ub3RpZmljYXRpb24nKTtcbiAgICBub3RpZmljYXRpb24udGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBzaGlwcyc7XG4gICAgLy9jcmVhdGUgdGhlIGJvYXJkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgIGluaXRpYWxCb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gOTsgaisrKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgIGJsb2NrLmRhdGFzZXQueEluZGV4ID0gajtcbiAgICAgICAgYmxvY2suZGF0YXNldC55SW5kZXggPSBpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYmxvY2spO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzaGlwU2l6ZXMgPSBbMSwgMSwgMSwgMSwgMiwgMiwgMiwgMywgMywgNF07XG4gICAgbGV0IGN1cnJlbnRTaGlwSW5kZXggPSAwO1xuICAgIGxldCBpc0hvcml6b250YWwgPSB0cnVlO1xuICAgIGxldCBpc1ZlcnRpY2FsID0gZmFsc2U7XG4gICAgLy9zaGlwc1xuICAgIGNvbnN0IHNjb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NvdXQuY2xhc3NMaXN0LmFkZCgnc2NvdXQnKTtcbiAgICBzY291dC5zdHlsZS53aWR0aCA9ICczMnB4JztcbiAgICBzY291dC5zdHlsZS5oZWlnaHQgPSAnMzJweCc7XG4gICAgc2NvdXQuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCAjMDBmJztcbiAgICBzY291dC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMCwwLDI1NSwuMDUpJztcbiAgICBjb25zdCBmcmlnYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnJpZ2F0ZS5jbGFzc0xpc3QuYWRkKCdmcmlnYXRlJyk7XG4gICAgZnJpZ2F0ZS5zdHlsZS53aWR0aCA9ICc2NHB4JztcbiAgICBmcmlnYXRlLnN0eWxlLmhlaWdodCA9ICczMnB4JztcbiAgICBmcmlnYXRlLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgIzAwZic7XG4gICAgZnJpZ2F0ZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMCwwLDI1NSwuMDUpJztcbiAgICBjb25zdCBicmlnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnJpZy5jbGFzc0xpc3QuYWRkKCdicmlnJyk7XG4gICAgYnJpZy5zdHlsZS53aWR0aCA9ICc5NnB4JztcbiAgICBicmlnLnN0eWxlLmhlaWdodCA9ICczMnB4JztcbiAgICBicmlnLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgIzAwZic7XG4gICAgYnJpZy5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoMCwwLDI1NSwuMDUpJztcbiAgICBjb25zdCBtb3dhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vd2FyLmNsYXNzTGlzdC5hZGQoJ21vd2FyJyk7XG4gICAgbW93YXIuc3R5bGUud2lkdGggPSAnMTI4cHgnO1xuICAgIG1vd2FyLnN0eWxlLmhlaWdodCA9ICczMnB4JztcbiAgICBtb3dhci5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkICMwMGYnO1xuICAgIG1vd2FyLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgwLDAsMjU1LC4wNSknO1xuICAgIC8vYWRkIGEgYnV0dG9uIGZvciBzaGlwIG9yaWVudGF0aW9uXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bi1jb250YWluZXInKTtcbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGN1cnJlbnRTaGlwLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtc2hpcCcpO1xuICAgIGN1cnJlbnRTaGlwLnRleHRDb250ZW50ID0gJ1Njb3V0JztcbiAgICBjdXJyZW50U2hpcC5hcHBlbmRDaGlsZChzY291dCk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ29yaWVudGF0aW9uLWJ0bicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFNoaXApO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIHBhZ2VCb2R5LmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoaXNIb3Jpem9udGFsICYmICFpc1ZlcnRpY2FsKSB7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG4gICAgICAgIGlzSG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICBpc1ZlcnRpY2FsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzSG9yaXpvbnRhbCAmJiBpc1ZlcnRpY2FsKSB7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgICAgICAgaXNIb3Jpem9udGFsID0gdHJ1ZTtcbiAgICAgICAgaXNWZXJ0aWNhbCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUluaXRpYWxCb2FyZCgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSA5OyBqKyspIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBodW1hblBsYXllci5ib2FyZC5jb29yZGluYXRlc1tpXVtqXS5zaGlwICE9PSBudWxsICYmXG4gICAgICAgICAgICBodW1hblBsYXllci5ib2FyZC5jb29yZGluYXRlc1tpXVtqXS5zaGlwICE9PSAneCdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBDZWxsID0gaW5pdGlhbEJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHtqfVwiXVtkYXRhLXktaW5kZXg9XCIke2l9XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoaHVtYW5QbGF5ZXIuYm9hcmQuY29vcmRpbmF0ZXNbaV1bal0uc2hpcC5vcmllbnRhdGlvbiA9PT0gJ1YnKSB7XG4gICAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgIzAwZic7XG4gICAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgwLDAsMjU1LC4wNSknO1xuICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGEgc2hpcC1wYXJ0IGJlbG93XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBpICsgMSA8PSA5ICYmXG4gICAgICAgICAgICAgICAgaHVtYW5QbGF5ZXIuYm9hcmQuY29vcmRpbmF0ZXNbaSArIDFdW2pdLnNoaXAgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICBodW1hblBsYXllci5ib2FyZC5jb29yZGluYXRlc1tpICsgMV1bal0uc2hpcCAhPT0gJ3gnXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlckJvdHRvbSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICNiNGI0ZmYnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXMgYSBzaGlwLXBhcnQgYWJvdmVcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGkgLSAxID49IDAgJiZcbiAgICAgICAgICAgICAgICBodW1hblBsYXllci5ib2FyZC5jb29yZGluYXRlc1tpIC0gMV1bal0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIGh1bWFuUGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW2kgLSAxXVtqXS5zaGlwICE9PSAneCdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyVG9wID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlclRvcCA9ICcxcHggc29saWQgI2I0YjRmZic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy9mb3Igc2hpcCB3aXRoIGhvcml6b250YWwgb3JpZW50YXRpb25cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIGh1bWFuUGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAub3JpZW50YXRpb24gPT09ICdIJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgIzAwZic7XG4gICAgICAgICAgICAgIHNoaXBDZWxsLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgwLDAsMjU1LC4wNSknO1xuICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGEgc2hpcC1wYXJ0IHRvIHRoZSByaWdodFxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaiArIDEgPD0gOSAmJlxuICAgICAgICAgICAgICAgIGh1bWFuUGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW2ldW2ogKyAxXS5zaGlwICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgaHVtYW5QbGF5ZXIuYm9hcmQuY29vcmRpbmF0ZXNbaV1baiArIDFdLnNoaXAgIT09ICd4J1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9ICdub25lJztcbiAgICAgICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXJSaWdodCA9ICcxcHggc29saWQgI2I0YjRmZic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGogLSAxID49IDAgJiZcbiAgICAgICAgICAgICAgICBodW1hblBsYXllci5ib2FyZC5jb29yZGluYXRlc1tpXVtqIC0gMV0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIGh1bWFuUGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW2ldW2ogLSAxXS5zaGlwICE9PSAneCdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2hpcENlbGwuc3R5bGUuYm9yZGVyTGVmdCA9ICdub25lJztcbiAgICAgICAgICAgICAgICBzaGlwQ2VsbC5zdHlsZS5ib3JkZXJMZWZ0ID0gJzFweCBzb2xpZCAjYjRiNGZmJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVCbG9ja0NsaWNrKGUpIHtcbiAgICAgIGlmIChzaGlwU2l6ZXNbY3VycmVudFNoaXBJbmRleCArIDFdID09PSAxKSB7XG4gICAgICAgIGN1cnJlbnRTaGlwLnJlbW92ZUNoaWxkKHNjb3V0KTtcbiAgICAgICAgY3VycmVudFNoaXAudGV4dENvbnRlbnQgPSAnU2NvdXQnO1xuICAgICAgICBjdXJyZW50U2hpcC5hcHBlbmRDaGlsZChzY291dCk7XG4gICAgICB9IGVsc2UgaWYgKHNoaXBTaXplc1tjdXJyZW50U2hpcEluZGV4ICsgMV0gPT09IDIpIHtcbiAgICAgICAgaWYgKHNjb3V0ID09PSBjdXJyZW50U2hpcC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICBjdXJyZW50U2hpcC5yZW1vdmVDaGlsZChzY291dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyaWdhdGUgPT09IGN1cnJlbnRTaGlwLmxhc3RDaGlsZCkge1xuICAgICAgICAgIGN1cnJlbnRTaGlwLnJlbW92ZUNoaWxkKGZyaWdhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRTaGlwLnRleHRDb250ZW50ID0gJ0ZyaWdhdGUnO1xuICAgICAgICBjdXJyZW50U2hpcC5hcHBlbmRDaGlsZChmcmlnYXRlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcFNpemVzW2N1cnJlbnRTaGlwSW5kZXggKyAxXSA9PT0gMykge1xuICAgICAgICBpZiAoZnJpZ2F0ZSA9PT0gY3VycmVudFNoaXAubGFzdENoaWxkKSB7XG4gICAgICAgICAgY3VycmVudFNoaXAucmVtb3ZlQ2hpbGQoZnJpZ2F0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJyaWcgPT09IGN1cnJlbnRTaGlwLmxhc3RDaGlsZCkge1xuICAgICAgICAgIGN1cnJlbnRTaGlwLnJlbW92ZUNoaWxkKGJyaWcpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRTaGlwLnRleHRDb250ZW50ID0gJ0JyaWcnO1xuICAgICAgICBjdXJyZW50U2hpcC5hcHBlbmRDaGlsZChicmlnKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcFNpemVzW2N1cnJlbnRTaGlwSW5kZXggKyAxXSA9PT0gNCkge1xuICAgICAgICBpZiAoYnJpZyA9PT0gY3VycmVudFNoaXAubGFzdENoaWxkKSB7XG4gICAgICAgICAgY3VycmVudFNoaXAucmVtb3ZlQ2hpbGQoYnJpZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vd2FyID09PSBjdXJyZW50U2hpcC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICBjdXJyZW50U2hpcC5yZW1vdmVDaGlsZChtb3dhcik7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFNoaXAudGV4dENvbnRlbnQgPSAnTWFuLW9mLVdhcic7XG4gICAgICAgIGN1cnJlbnRTaGlwLmFwcGVuZENoaWxkKG1vd2FyKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJsb2NrQ2xpY2tlZCA9IGUudGFyZ2V0O1xuICAgICAgY29uc3QgeEluZGV4ID0gcGFyc2VJbnQoYmxvY2tDbGlja2VkLmRhdGFzZXQueEluZGV4KTtcbiAgICAgIGNvbnN0IHlJbmRleCA9IHBhcnNlSW50KGJsb2NrQ2xpY2tlZC5kYXRhc2V0LnlJbmRleCk7XG4gICAgICBsZXQgb3JpZW50YXRpb247XG4gICAgICBpZiAoaXNIb3Jpem9udGFsICYmICFpc1ZlcnRpY2FsKSB7XG4gICAgICAgIG9yaWVudGF0aW9uID0gJ0gnO1xuICAgICAgfSBlbHNlIGlmICghaXNIb3Jpem9udGFsICYmIGlzVmVydGljYWwpIHtcbiAgICAgICAgb3JpZW50YXRpb24gPSAnVic7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBodW1hblBsYXllci5wbGFjZVNoaXBPbkJvYXJkKFxuICAgICAgICAgIHNoaXBTaXplc1tjdXJyZW50U2hpcEluZGV4XSxcbiAgICAgICAgICBbeUluZGV4LCB4SW5kZXhdLFxuICAgICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICApO1xuICAgICAgICB1cGRhdGVJbml0aWFsQm9hcmQoKTtcbiAgICAgICAgY3VycmVudFNoaXBJbmRleCsrO1xuICAgICAgICBpZiAoY3VycmVudFNoaXBJbmRleCA9PT0gc2hpcFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UgPT09ICdJbnZhbGlkIHBvc2l0aW9uOiBBbHJlYWR5IGNvbnRhaW5zIGEgc2hpcCcpIHtcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXG4gICAgICAgICAgICAnSW52YWxpZCBQb3NpdGlvbjogQWxyZWFkeSBjb250YWlucyBhIHNoaXAgb3IgaXMgaW1tZWRpYXRlbHkgYWRqYWNlbnQgdG8gYSBzaGlwJyxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5hbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrcyA9IGluaXRpYWxCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvY2snKTtcbiAgICBibG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQmxvY2tDbGljayk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1dpbkNvbmRpdGlvbihodW1hblBsYXllciwgYWlQbGF5ZXIpIHtcbiAgY29uc3QgZW5kRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kaWFsb2cnKTtcbiAgY29uc3Qgd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kaWFsb2cgLndpbm5lcicpO1xuICBsZXQgZ2FtZUVuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24nKTtcbiAgaWYgKGh1bWFuUGxheWVyLmJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgd2lubmVyLnRleHRDb250ZW50ID0gYCR7YWlQbGF5ZXIubmFtZX0gd29uIHRoZSBnYW1lYDtcbiAgICBub3RpZmljYXRpb24udGV4dENvbnRlbnQgPSAnJztcbiAgICBnYW1lRW5kID0gdHJ1ZTtcbiAgICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtdHdvIC5ibG9jaycpO1xuICAgIGJsb2Nrcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgdmFsdWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgdmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICB9KTtcbiAgICBlbmREaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgZW5kRGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZW5kRGlhbG9nLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgICBlbmREaWFsb2cuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbiAgICBlbmREaWFsb2cuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICB9IGVsc2UgaWYgKGFpUGxheWVyLmJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgd2lubmVyLnRleHRDb250ZW50ID0gYFlvdSB3b24gdGhlIGdhbWVgO1xuICAgIGdhbWVFbmQgPSB0cnVlO1xuICAgIG5vdGlmaWNhdGlvbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC10d28gLmJsb2NrJyk7XG4gICAgYmxvY2tzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICB2YWx1ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICB2YWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICAgIH0pO1xuICAgIGVuZERpYWxvZy5zaG93TW9kYWwoKTtcbiAgICBlbmREaWFsb2cuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBlbmREaWFsb2cuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgIGVuZERpYWxvZy5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuICAgIGVuZERpYWxvZy5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gIH1cbiAgcmV0dXJuIGdhbWVFbmQ7XG59XG5cbmZ1bmN0aW9uIGdhbWVMb29wKGh1bWFuUGxheWVyLCBhaVBsYXllciwgYXR0YWNrZWRDb29yZGluYXRlcykge1xuICBjb25zdCBhaUJvYXJkQXR0YWNrZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLmJvYXJkcyAuYm9hcmQtdHdvIC5ibG9ja1tkYXRhLXgtaW5kZXg9XCIke2F0dGFja2VkQ29vcmRpbmF0ZXNbMV19XCJdW2RhdGEteS1pbmRleD1cIiR7YXR0YWNrZWRDb29yZGluYXRlc1swXX1cIl1gLFxuICApO1xuICBjb25zdCBlbmREaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRpYWxvZycpO1xuICBjb25zdCBwYWdlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWJvZHknKTtcbiAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbicpO1xuICBodW1hblBsYXllci5hdHRhY2tFbmVteShhdHRhY2tlZENvb3JkaW5hdGVzLCBhaVBsYXllcik7XG4gIHVwZGF0ZUFpQm9hcmQoYWlQbGF5ZXIuYm9hcmQsIGF0dGFja2VkQ29vcmRpbmF0ZXMpO1xuICBpZiAoYWlCb2FyZEF0dGFja2VkQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcHJlc2VudCcpKSB7XG4gICAgbm90aWZpY2F0aW9uLnRleHRDb250ZW50ID0gJ1lvdXIgdHVybic7XG4gICAgaWYgKGNoZWNrV2luQ29uZGl0aW9uKGh1bWFuUGxheWVyLCBhaVBsYXllcikpIHtcbiAgICAgIGVuZERpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGVuZERpYWxvZy5jbG9zZSgpO1xuICAgICAgICBlbmREaWFsb2cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcmVzZXRHbG9iYWxWYXJpYWJsZXMoKTtcbiAgICAgICAgd2hpbGUgKHBhZ2VCb2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBwYWdlQm9keS5yZW1vdmVDaGlsZChwYWdlQm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpbml0aWFsaXplR2FtZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG5vdGlmaWNhdGlvbi50ZXh0Q29udGVudCA9ICdBSSBhdHRhY2tpbmcuIC4gLic7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBhaUF0dGFja0Nvb3JkaW5hdGVzID1cbiAgICAgICAgYWlQbGF5ZXIuZ2VuZXJhdGVBdHRhY2tDb29yZGluYXRlcyhodW1hblBsYXllcik7XG4gICAgICBjb25zdCBodW1hbkJvYXJkQXR0YWNrZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5ib2FyZHMgLmJvYXJkLW9uZSAuYmxvY2tbZGF0YS14LWluZGV4PVwiJHthaUF0dGFja0Nvb3JkaW5hdGVzWzFdfVwiXVtkYXRhLXktaW5kZXg9XCIke2FpQXR0YWNrQ29vcmRpbmF0ZXNbMF19XCJdYCxcbiAgICAgICk7XG4gICAgICBhaVBsYXllci5hdHRhY2tFbmVteShhaUF0dGFja0Nvb3JkaW5hdGVzLCBodW1hblBsYXllcik7XG4gICAgICB1cGRhdGVIdW1hbkJvYXJkKGh1bWFuUGxheWVyLmJvYXJkLCBhaUF0dGFja0Nvb3JkaW5hdGVzKTtcbiAgICAgIGZ1bmN0aW9uIGNvbnNlcXVlbnRBdHRhY2tzKGhpdEFub3RoZXJTaGlwKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFoaXRBbm90aGVyU2hpcCkge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgZXh0cmFUdXJuQXR0YWNrQ29vcmRpbmF0ZXMgPVxuICAgICAgICAgICAgICAgIGFpUGxheWVyLmdlbmVyYXRlQXR0YWNrQ29vcmRpbmF0ZXMoaHVtYW5QbGF5ZXIpO1xuICAgICAgICAgICAgICBhaVBsYXllci5hdHRhY2tFbmVteShleHRyYVR1cm5BdHRhY2tDb29yZGluYXRlcywgaHVtYW5QbGF5ZXIpO1xuICAgICAgICAgICAgICB1cGRhdGVIdW1hbkJvYXJkKGh1bWFuUGxheWVyLmJvYXJkLCBleHRyYVR1cm5BdHRhY2tDb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgIGhpdEFub3RoZXJTaGlwID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIGAuYm9hcmRzIC5ib2FyZC1vbmUgLmJsb2NrW2RhdGEteC1pbmRleD1cIiR7ZXh0cmFUdXJuQXR0YWNrQ29vcmRpbmF0ZXNbMV19XCJdW2RhdGEteS1pbmRleD1cIiR7ZXh0cmFUdXJuQXR0YWNrQ29vcmRpbmF0ZXNbMF19XCJdYCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wcmVzZW50Jyk7XG4gICAgICAgICAgICAgIGlmICghaGl0QW5vdGhlclNoaXApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGVja1dpbkNvbmRpdGlvbihodW1hblBsYXllciwgYWlQbGF5ZXIpKSB7XG4gICAgICAgIGVuZERpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlbmREaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICBlbmREaWFsb2cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICByZXNldEdsb2JhbFZhcmlhYmxlcygpO1xuICAgICAgICAgIHdoaWxlIChwYWdlQm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwYWdlQm9keS5yZW1vdmVDaGlsZChwYWdlQm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5pdGlhbGl6ZUdhbWUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaGl0QW5vdGhlclNoaXAgPVxuICAgICAgICAgIGh1bWFuQm9hcmRBdHRhY2tlZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXByZXNlbnQnKTtcbiAgICAgICAgY29uc2VxdWVudEF0dGFja3MoaGl0QW5vdGhlclNoaXApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGlmIChjaGVja1dpbkNvbmRpdGlvbihodW1hblBsYXllciwgYWlQbGF5ZXIpKSB7XG4gICAgICAgICAgICBlbmREaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBlbmREaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgZW5kRGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgIHJlc2V0R2xvYmFsVmFyaWFibGVzKCk7XG4gICAgICAgICAgICAgIHdoaWxlIChwYWdlQm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgcGFnZUJvZHkucmVtb3ZlQ2hpbGQocGFnZUJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5pdGlhbGl6ZUdhbWUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub3RpZmljYXRpb24udGV4dENvbnRlbnQgPSAnWW91ciB0dXJuJztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIDgwMCk7XG4gIH1cbn1cblxubGV0IGNsaWNrSGFuZGxlcjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVET00oaHVtYW5QbGF5ZXIsIGFpUGxheWVyKSB7XG4gIHBsYWNlSHVtYW5TaGlwcyhodW1hblBsYXllcikudGhlbigoKSA9PiB7XG4gICAgLy9wbGFjZSBlbmVteSBzaGlwc1xuICAgIHBsYWNlRW5lbXlTaGlwcyhhaVBsYXllcik7XG4gICAgLy9jbGVhciB0aGUgcGFnZUJvZHlcbiAgICBjb25zdCBwYWdlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWJvZHknKTtcbiAgICB3aGlsZSAocGFnZUJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgcGFnZUJvZHkucmVtb3ZlQ2hpbGQocGFnZUJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkcy5jbGFzc0xpc3QuYWRkKCdib2FyZHMnKTtcbiAgICBwYWdlQm9keS5hcHBlbmRDaGlsZChib2FyZHMpO1xuICAgIC8vcmVuZGVyIGdhbWVib2FyZHNcbiAgICByZW5kZXJIdW1hbkJvYXJkKGh1bWFuUGxheWVyLmJvYXJkKTtcbiAgICByZW5kZXJBaUJvYXJkKGFpUGxheWVyLmJvYXJkKTtcbiAgICAvL2FkZGV2ZW50bGlzdGVuZXIgdG8gZW5lbXlib2FyZCBibG9ja3NcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uJyk7XG4gICAgbm90aWZpY2F0aW9uLnRleHRDb250ZW50ID0gJ1lvdXIgdHVybic7XG4gICAgY29uc3QgZW5lbXlCb2FyZEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnLmJvYXJkLXR3byAucm93IC5ibG9jaycsXG4gICAgKTtcbiAgICBjbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGdhbWVMb29wKGh1bWFuUGxheWVyLCBhaVBsYXllciwgW1xuICAgICAgICBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC55SW5kZXgpLFxuICAgICAgICBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC54SW5kZXgpLFxuICAgICAgXSk7XG4gICAgfTtcbiAgICBlbmVteUJvYXJkQmxvY2tzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICB2YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IFtcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICAgIHsgc2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgICB7IHNoaXA6IG51bGwsIGlzSGl0OiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgICAgeyBzaGlwOiBudWxsLCBpc0hpdDogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgXTtcbiAgfVxuICAvL0dhbWVib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcGxhY2Ugc2hpcHMgYXQgc3BlY2lmaWMgY29vcmRpbmF0ZXMgYnkgY2FsbGluZyB0aGUgc2hpcCBmYWN0b3J5IGZ1bmN0aW9uLlxuICBwbGFjZVNoaXAoc2hpcExlbmd0aCwgcG9zaXRpb24sIHNoaXBPcmllbnRhdGlvbikge1xuICAgIGNvbnN0IHNoaXBPYmplY3QgPSBuZXcgU2hpcChzaGlwTGVuZ3RoLCBzaGlwT3JpZW50YXRpb24pO1xuICAgIHNoaXBPYmplY3Quc3RhcnRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIGNvbnN0IHBvc2l0aW9uUm93ID0gcG9zaXRpb25bMF07XG4gICAgY29uc3QgcG9zaXRpb25Db2wgPSBwb3NpdGlvblsxXTtcbiAgICBpZiAodGhpcy5jb29yZGluYXRlc1twb3NpdGlvblJvd11bcG9zaXRpb25Db2xdLnNoaXAgPT09IG51bGwpIHtcbiAgICAgIGlmIChzaGlwT2JqZWN0Lm9yaWVudGF0aW9uID09PSAnSCcpIHtcbiAgICAgICAgY29uc3Qgc2hpcEVuZHBvaW50ID0gcG9zaXRpb25Db2wgKyAoc2hpcE9iamVjdC5sZW5ndGggLSAxKTtcbiAgICAgICAgc2hpcE9iamVjdC5lbmRQb3NpdGlvbiA9IHNoaXBFbmRwb2ludDtcbiAgICAgICAgaWYgKHNoaXBPYmplY3QuZW5kUG9zaXRpb24gPD0gOSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbcG9zaXRpb25Sb3ddW3NoaXBPYmplY3QuZW5kUG9zaXRpb25dLnNoaXAgPT09IG51bGxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29vcmRpbmF0ZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBpID09PSBwb3NpdGlvblJvdyAmJlxuICAgICAgICAgICAgICAgICAgaiA+PSBwb3NpdGlvbkNvbCAmJlxuICAgICAgICAgICAgICAgICAgaiA8PSBzaGlwRW5kcG9pbnRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlc1tpXVtqXS5zaGlwID0gc2hpcE9iamVjdDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBwb3NpdGlvbjogQWxyZWFkeSBjb250YWlucyBhIHNoaXAnLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRvcEFkamFjZW50Um93ID0gcG9zaXRpb25Sb3cgLSAxO1xuICAgICAgICAgICAgbGV0IHRvcEFkamFjZW50Q29sID0gcG9zaXRpb25Db2wgLSAxO1xuICAgICAgICAgICAgbGV0IGJ0bUFkamFjZW50Um93ID0gcG9zaXRpb25Sb3cgKyAxO1xuICAgICAgICAgICAgbGV0IGJ0bUFkamFjZW50Q29sID0gcG9zaXRpb25Db2wgLSAxO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBwb3NpdGlvblJvdyA+PSAwICYmXG4gICAgICAgICAgICAgIHBvc2l0aW9uUm93IDw9IDkgJiZcbiAgICAgICAgICAgICAgcG9zaXRpb25Db2wgLSAxID49IDAgJiZcbiAgICAgICAgICAgICAgcG9zaXRpb25Db2wgLSAxIDw9IDlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbCAtIDFdLnNoaXAgPSAneCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHBvc2l0aW9uUm93ID49IDAgJiZcbiAgICAgICAgICAgICAgcG9zaXRpb25Sb3cgPD0gOSAmJlxuICAgICAgICAgICAgICBzaGlwRW5kcG9pbnQgKyAxID49IDAgJiZcbiAgICAgICAgICAgICAgc2hpcEVuZHBvaW50ICsgMSA8PSA5XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlc1twb3NpdGlvblJvd11bc2hpcEVuZHBvaW50ICsgMV0uc2hpcCA9ICd4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHNoaXBPYmplY3QubGVuZ3RoIC0gMSArIDI7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdG9wQWRqYWNlbnRSb3cgPj0gMCAmJlxuICAgICAgICAgICAgICAgIHRvcEFkamFjZW50Um93IDw9IDkgJiZcbiAgICAgICAgICAgICAgICB0b3BBZGphY2VudENvbCA+PSAwICYmXG4gICAgICAgICAgICAgICAgdG9wQWRqYWNlbnRDb2wgPD0gOVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3RvcEFkamFjZW50Um93XVt0b3BBZGphY2VudENvbF0uc2hpcCA9ICd4JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYnRtQWRqYWNlbnRSb3cgPj0gMCAmJlxuICAgICAgICAgICAgICAgIGJ0bUFkamFjZW50Um93IDw9IDkgJiZcbiAgICAgICAgICAgICAgICBidG1BZGphY2VudENvbCA+PSAwICYmXG4gICAgICAgICAgICAgICAgYnRtQWRqYWNlbnRDb2wgPD0gOVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW2J0bUFkamFjZW50Um93XVtidG1BZGphY2VudENvbF0uc2hpcCA9ICd4JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0b3BBZGphY2VudENvbCsrO1xuICAgICAgICAgICAgICBidG1BZGphY2VudENvbCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcG9zaXRpb246IEFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQb3NpdGlvbjogT3V0IG9mIGJvdW5kcy4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaGlwT2JqZWN0Lm9yaWVudGF0aW9uID09PSAnVicpIHtcbiAgICAgICAgY29uc3Qgc2hpcEVuZHBvaW50ID0gcG9zaXRpb25Sb3cgKyAoc2hpcE9iamVjdC5sZW5ndGggLSAxKTtcbiAgICAgICAgc2hpcE9iamVjdC5lbmRQb3NpdGlvbiA9IHNoaXBFbmRwb2ludDtcbiAgICAgICAgaWYgKHNoaXBPYmplY3QuZW5kUG9zaXRpb24gPD0gOSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbc2hpcE9iamVjdC5lbmRQb3NpdGlvbl1bcG9zaXRpb25Db2xdLnNoaXAgPT09IG51bGxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29vcmRpbmF0ZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBqID09PSBwb3NpdGlvbkNvbCAmJlxuICAgICAgICAgICAgICAgICAgaSA+PSBwb3NpdGlvblJvdyAmJlxuICAgICAgICAgICAgICAgICAgaSA8PSBzaGlwRW5kcG9pbnRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlc1tpXVtqXS5zaGlwID0gc2hpcE9iamVjdDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBwb3NpdGlvbjogQWxyZWFkeSBjb250YWlucyBhIHNoaXAnLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGxlZnRBZGphY2VudFJvdyA9IHBvc2l0aW9uUm93IC0gMTtcbiAgICAgICAgICAgIGxldCBsZWZ0QWRqYWNlbnRDb2wgPSBwb3NpdGlvbkNvbCAtIDE7XG4gICAgICAgICAgICBsZXQgcmlnaHRBZGphY2VudFJvdyA9IHBvc2l0aW9uUm93IC0gMTtcbiAgICAgICAgICAgIGxldCByaWdodEFkamFjZW50Q29sID0gcG9zaXRpb25Db2wgKyAxO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBwb3NpdGlvblJvdyAtIDEgPj0gMCAmJlxuICAgICAgICAgICAgICBwb3NpdGlvblJvdyAtIDEgPD0gOSAmJlxuICAgICAgICAgICAgICBwb3NpdGlvbkNvbCA+PSAwICYmXG4gICAgICAgICAgICAgIHBvc2l0aW9uQ29sIDw9IDlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW3Bvc2l0aW9uUm93IC0gMV1bcG9zaXRpb25Db2xdLnNoaXAgPSAneCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHNoaXBFbmRwb2ludCArIDEgPj0gMCAmJlxuICAgICAgICAgICAgICBzaGlwRW5kcG9pbnQgKyAxIDw9IDkgJiZcbiAgICAgICAgICAgICAgcG9zaXRpb25Db2wgPj0gMCAmJlxuICAgICAgICAgICAgICBwb3NpdGlvbkNvbCA8PSA5XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlc1tzaGlwRW5kcG9pbnQgKyAxXVtwb3NpdGlvbkNvbF0uc2hpcCA9ICd4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHNoaXBPYmplY3QubGVuZ3RoIC0gMSArIDI7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbGVmdEFkamFjZW50Um93ID49IDAgJiZcbiAgICAgICAgICAgICAgICBsZWZ0QWRqYWNlbnRSb3cgPD0gOSAmJlxuICAgICAgICAgICAgICAgIGxlZnRBZGphY2VudENvbCA+PSAwICYmXG4gICAgICAgICAgICAgICAgbGVmdEFkamFjZW50Q29sIDw9IDlcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlc1tsZWZ0QWRqYWNlbnRSb3ddW2xlZnRBZGphY2VudENvbF0uc2hpcCA9ICd4JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcmlnaHRBZGphY2VudFJvdyA+PSAwICYmXG4gICAgICAgICAgICAgICAgcmlnaHRBZGphY2VudFJvdyA8PSA5ICYmXG4gICAgICAgICAgICAgICAgcmlnaHRBZGphY2VudENvbCA+PSAwICYmXG4gICAgICAgICAgICAgICAgcmlnaHRBZGphY2VudENvbCA8PSA5XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbcmlnaHRBZGphY2VudFJvd11bcmlnaHRBZGphY2VudENvbF0uc2hpcCA9ICd4JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZWZ0QWRqYWNlbnRSb3crKztcbiAgICAgICAgICAgICAgcmlnaHRBZGphY2VudFJvdysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcG9zaXRpb246IEFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQb3NpdGlvbjogT3V0IG9mIGJvdW5kcy4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcG9zaXRpb246IEFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7XG4gICAgfVxuICB9XG4gIHJlY2VpdmVBdHRhY2socG9zaXRpb24pIHtcbiAgICBjb25zdCBwb3NpdGlvblJvdyA9IHBvc2l0aW9uWzBdO1xuICAgIGNvbnN0IHBvc2l0aW9uQ29sID0gcG9zaXRpb25bMV07XG4gICAgdGhpcy5jb29yZGluYXRlc1twb3NpdGlvblJvd10uZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5pc0hpdCA9PT0gZmFsc2UgJiZcbiAgICAgICAgICB2YWx1ZS5zaGlwICE9PSBudWxsICYmXG4gICAgICAgICAgdHlwZW9mIHZhbHVlLnNoaXAgPT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHZhbHVlLnNoaXAuaGl0KCk7XG4gICAgICAgICAgdmFsdWUuaXNIaXQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmlzSGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgIHZhbHVlLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBsZXQgc2hpcHNOb3RTdW5rID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29vcmRpbmF0ZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbaV1bal0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgICAgIHR5cGVvZiB0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXAgPT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICghdGhpcy5jb29yZGluYXRlc1tpXVtqXS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICBzaGlwc05vdFN1bmsucHVzaCh0aGlzLmNvb3JkaW5hdGVzW2ldW2pdLnNoaXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hpcHNOb3RTdW5rLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkLmpzJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyLmpzJztcbmltcG9ydCB7IGluaXRpYWxpemVET00gfSBmcm9tICcuL2RvbS5qcyc7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXMoKSB7XG4gIGNvbnN0IHlJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgY29uc3QgeEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICByZXR1cm4gW3lJbmRleCwgeEluZGV4XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlRW5lbXlTaGlwcyhhaVBsYXllcikge1xuICBjb25zdCBzaGlwU2l6ZXMgPSBbMSwgMSwgMSwgMSwgMiwgMiwgMiwgMywgMywgNF07XG4gIGNvbnN0IG9yaWVudGF0aW9ucyA9IFsnVicsICdIJ107XG5cbiAgc2hpcFNpemVzLmZvckVhY2goKHNpemUpID0+IHtcbiAgICBsZXQgaXNQbGFjZW1lbnRWYWxpZCA9IGZhbHNlO1xuICAgIGxldCBjb29yZGluYXRlcywgb3JpZW50YXRpb247XG5cbiAgICBkbyB7XG4gICAgICBjb29yZGluYXRlcyA9IGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZXMoKTtcbiAgICAgIG9yaWVudGF0aW9uID1cbiAgICAgICAgb3JpZW50YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9yaWVudGF0aW9ucy5sZW5ndGgpXTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYWlQbGF5ZXIucGxhY2VTaGlwT25Cb2FyZChzaXplLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pO1xuICAgICAgICBpc1BsYWNlbWVudFZhbGlkID0gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlzUGxhY2VtZW50VmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IHdoaWxlICghaXNQbGFjZW1lbnRWYWxpZCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUdhbWUoKSB7XG4gIC8vY3JlYXRlIGdhbWVib2FyZHNcbiAgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICBjb25zdCBjb21wdXRlckdhbWVCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgLy9jcmVhdGUgcGxheWVyc1xuICBjb25zdCBodW1hblBsYXllciA9IG5ldyBQbGF5ZXIoJ0h1bWFuJywgcGxheWVyR2FtZUJvYXJkKTtcbiAgY29uc3QgYWlQbGF5ZXIgPSBuZXcgUGxheWVyKCdBSScsIGNvbXB1dGVyR2FtZUJvYXJkKTtcblxuICBpbml0aWFsaXplRE9NKGh1bWFuUGxheWVyLCBhaVBsYXllcik7XG59XG5cbmluaXRpYWxpemVHYW1lKCk7XG4iLCJsZXQgYWlBdHRhY2tDb29yZGluYXRlcyA9IFtdO1xubGV0IHRhcmdldGluZ0xpc3QgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0R2xvYmFsVmFyaWFibGVzKCkge1xuICBhaUF0dGFja0Nvb3JkaW5hdGVzID0gW107XG4gIHRhcmdldGluZ0xpc3QgPSBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGJvYXJkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gIH1cblxuICAvL21ldGhvZCB0byBwbGFjZSBzaGlwc1xuICBwbGFjZVNoaXBPbkJvYXJkKHNoaXBMZW5ndGgsIHBvc2l0aW9uLCBvcmllbnRhdGlvbikge1xuICAgIHRoaXMuYm9hcmQucGxhY2VTaGlwKHNoaXBMZW5ndGgsIHBvc2l0aW9uLCBvcmllbnRhdGlvbik7XG4gIH1cbiAgLy9tZXRob2QgdG8gYXR0YWNrIGVuZW15XG4gIGF0dGFja0VuZW15KGNvb3JkaW5hdGVzLCBlbmVteVBsYXllcikge1xuICAgIGVuZW15UGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICB9XG4gIC8vbWV0aG9kIGZvciBnZW5lcmF0aW5nIHJhbmRvbSBhdHRhY2sgY29vcmRpbmF0ZXMgZm9yIEFJXG4gIGdlbmVyYXRlQXR0YWNrQ29vcmRpbmF0ZXMoZW5lbXlQbGF5ZXIpIHtcbiAgICBmdW5jdGlvbiByYW5kb21Db29yZGluYXRlc0dlbmVyYXRvcigpIHtcbiAgICAgIGxldCB5SW5kZXg7XG4gICAgICBsZXQgeEluZGV4O1xuICAgICAgbGV0IHBhaXJJc05vdFVuaXF1ZSA9IHRydWU7XG4gICAgICBkbyB7XG4gICAgICAgIHlJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgeEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgICAgIHBhaXJJc05vdFVuaXF1ZSA9IGFpQXR0YWNrQ29vcmRpbmF0ZXMuc29tZShcbiAgICAgICAgICAocGFpcikgPT4gcGFpclswXSA9PT0geUluZGV4ICYmIHBhaXJbMV0gPT09IHhJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFwYWlySXNOb3RVbmlxdWUgJiZcbiAgICAgICAgICBlbmVteVBsYXllci5ib2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uaXNIaXQgPT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGVuZW15UGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwICE9PSBudWxsICYmXG4gICAgICAgICAgICBlbmVteVBsYXllci5ib2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcCAhPT0gJ3gnICYmXG4gICAgICAgICAgICAhZW5lbXlQbGF5ZXIuYm9hcmQuY29vcmRpbmF0ZXNbeUluZGV4XVt4SW5kZXhdLnNoaXAuaXNTdW5rKClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh5SW5kZXggKyAxIDw9IDkpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0aW5nTGlzdC5wdXNoKFt5SW5kZXggKyAxLCB4SW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh5SW5kZXggLSAxID49IDApIHtcbiAgICAgICAgICAgICAgdGFyZ2V0aW5nTGlzdC5wdXNoKFt5SW5kZXggLSAxLCB4SW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh4SW5kZXggKyAxIDw9IDkpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0aW5nTGlzdC5wdXNoKFt5SW5kZXgsIHhJbmRleCArIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh4SW5kZXggLSAxID49IDApIHtcbiAgICAgICAgICAgICAgdGFyZ2V0aW5nTGlzdC5wdXNoKFt5SW5kZXgsIHhJbmRleCAtIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYWlBdHRhY2tDb29yZGluYXRlcy5wdXNoKFt5SW5kZXgsIHhJbmRleF0pO1xuICAgICAgICB9XG4gICAgICB9IHdoaWxlIChcbiAgICAgICAgcGFpcklzTm90VW5pcXVlIHx8XG4gICAgICAgIGVuZW15UGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5pc0hpdFxuICAgICAgKTtcbiAgICAgIHJldHVybiBbeUluZGV4LCB4SW5kZXhdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaWx0ZXJUYXJnZXRpbmdMaXN0KCkge1xuICAgICAgbGV0IHBhaXJJc05vdFVuaXF1ZSA9IHRydWU7XG4gICAgICBsZXQgeEluZGV4O1xuICAgICAgbGV0IHlJbmRleDtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKHRhcmdldGluZ0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgeEluZGV4ID0gbnVsbDtcbiAgICAgICAgICB5SW5kZXggPSBudWxsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IHRhcmdldGluZ0xpc3Quc2hpZnQoKTtcbiAgICAgICAgeUluZGV4ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICAgIHhJbmRleCA9IGNvb3JkaW5hdGVzWzFdO1xuICAgICAgICBwYWlySXNOb3RVbmlxdWUgPSBhaUF0dGFja0Nvb3JkaW5hdGVzLnNvbWUoXG4gICAgICAgICAgKHBhaXIpID0+IHBhaXJbMF0gPT09IHlJbmRleCAmJiBwYWlyWzFdID09PSB4SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBlbmVteVBsYXllci5ib2FyZC5jb29yZGluYXRlc1t5SW5kZXhdW3hJbmRleF0uc2hpcCAhPT0gbnVsbCAmJlxuICAgICAgICAgIGVuZW15UGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwICE9PSAneCcgJiZcbiAgICAgICAgICAhcGFpcklzTm90VW5pcXVlXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICh5SW5kZXggKyAxIDw9IDkpIHtcbiAgICAgICAgICAgIHRhcmdldGluZ0xpc3QucHVzaChbeUluZGV4ICsgMSwgeEluZGV4XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh5SW5kZXggLSAxID49IDApIHtcbiAgICAgICAgICAgIHRhcmdldGluZ0xpc3QucHVzaChbeUluZGV4IC0gMSwgeEluZGV4XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh4SW5kZXggKyAxIDw9IDkpIHtcbiAgICAgICAgICAgIHRhcmdldGluZ0xpc3QucHVzaChbeUluZGV4LCB4SW5kZXggKyAxXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh4SW5kZXggLSAxID49IDApIHtcbiAgICAgICAgICAgIHRhcmdldGluZ0xpc3QucHVzaChbeUluZGV4LCB4SW5kZXggLSAxXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFpQXR0YWNrQ29vcmRpbmF0ZXMucHVzaChbeUluZGV4LCB4SW5kZXhdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAoXG4gICAgICAgIGVuZW15UGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwID09PSBudWxsIHx8XG4gICAgICAgIGVuZW15UGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5zaGlwID09PSAneCcgfHxcbiAgICAgICAgcGFpcklzTm90VW5pcXVlXG4gICAgICApO1xuICAgICAgcmV0dXJuIFt5SW5kZXgsIHhJbmRleF07XG4gICAgfVxuICAgIGlmICh0YXJnZXRpbmdMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHJhbmRvbUNvb3JkaW5hdGVzR2VuZXJhdG9yKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb29yZGluYXRlcyA9IGZpbHRlclRhcmdldGluZ0xpc3QoKTtcbiAgICAgIGxldCB5SW5kZXggPSBjb29yZGluYXRlc1swXTtcbiAgICAgIGxldCB4SW5kZXggPSBjb29yZGluYXRlc1sxXTtcbiAgICAgIGlmIChcbiAgICAgICAgKHhJbmRleCA9PT0gbnVsbCAmJiB5SW5kZXggPT09IG51bGwpIHx8XG4gICAgICAgIGVuZW15UGxheWVyLmJvYXJkLmNvb3JkaW5hdGVzW3lJbmRleF1beEluZGV4XS5pc0hpdFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiByYW5kb21Db29yZGluYXRlc0dlbmVyYXRvcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFt5SW5kZXgsIHhJbmRleF07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJjbGFzcyBTaGlwIHtcbiAgI25IaXRzO1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgdGhpcy4jbkhpdHMgPSAwO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMuZW5kUG9zaXRpb24gPSBudWxsO1xuICB9XG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy4jbkhpdHMgPCB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy4jbkhpdHMrKztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIaXRzIGNhbm5vdCBleGNlZWQgbGVuZ3RoJyk7XG4gICAgfVxuICB9XG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuI25IaXRzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbW9kdWxlcy9tYWluLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9