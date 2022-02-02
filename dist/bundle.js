/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin-left: 50px;\\n    margin-top: 50px;\\n\\n}\\n\\nheader {\\n    line-height: 100px;\\n    white-space: nowrap;\\n    background-color: lightsteelblue;\\n    color: white;\\n    font-size: 30px;\\n    font-weight: 700;\\n    padding-left: 10px;\\n    width: 1000px;\\n    \\n}\\n\\n.hi {\\n    color:blue;\\n}\\n\\n#main-container {\\n    display: flex;\\n    width: 1008px;\\n    border: 1px solid red;\\n    height: 600px;\\n    position: relative;\\n}\\n\\n#left {\\n    width: 300px;\\n    padding-left: 10px;\\n    display: flex;\\n    flex-direction: column;\\n    margin-right: 20px;\\n    background-color: #F4F4F4;\\n}\\n\\n.headers {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: 100%;\\n    padding-right: 30px;\\n}\\n\\n.main-add-btn {\\n    height: 40px;\\n    width: 40px;\\n    border-radius: 40px;\\n    \\n    background-color: white;\\n}\\n\\n#right .main-add-btn {\\n    height: 40px;\\n    width: 40px;\\n    border-radius: 40px;\\n    margin-top: 13px;\\n    margin-left: 540px;\\n}\\n\\n.project-div {\\n    height: 50px;\\n    width: 100%;\\n    /* border:1px solid black; */\\n    font-size: 25px;\\n    display: flex;\\n    align-items: center;\\n    \\n}\\n\\n.delete-btn {\\n    border:none;\\n    color: green;\\n    height: 20px;\\n    width: 20px;\\n    margin-left: 5px;\\n    margin-top: 4px;\\n    font-size: xx-small;\\n    background-color: #F4F4F4;\\n}\\n\\n\\nbutton:hover {\\n    color: blue;\\n}\\n\\nbutton.delete-btn:hover {\\n    color:lightsteelblue;\\n    font-size: small;\\n}\\n\\n#project-entry {\\n    height: 20px;\\n}\\n\\n.todo-div {\\n    position: relative;\\n    border: 1px solid green;\\n}\\n\\n#todo-task {\\n    font-size: 32px;\\n}\\n\\n#todo-duedate {\\n    color:red;\\n    position: absolute;\\n    right: 30px;\\n    top: 8px;\\n}\\n\\n#todo-box {\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;  \\n    height: 300px;\\n    width: 375px;\\n    margin: -150px 0 0 -187px;\\n    border: 1px solid green;\\n    display: none;\\n}\\n\\n#add-todo-header {\\n    display: flex;\\n    justify-content: space-between;\\n    padding-right: 12px;\\n    background-color: lightsteelblue;\\n    align-items: center;\\n    color:white;\\n    margin-top: 0;\\n    height: 45px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://top-todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject)\n/* harmony export */ });\n/* harmony import */ var _projectConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectConstructor */ \"./src/projectConstructor.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\nlet addProject = (() => {\n    let projectNameValue = document.querySelector(\"#project-entry\");\n    let mainArr = [];\n    let currentID;\n\n    let resetInputValue = (selector) => {\n        selector.value = \"\";\n    }\n    \n    let checkIfEmpty = (selector) => {\n        if (selector.value === \"\"){\n            alert (\"Please enter a value\")\n        }\n    }\n\n    let getValue = (inputField) => {\n        \n        if (inputField.value === \"\"){\n            checkIfEmpty(inputField)\n        } else {\n            return inputField.value;\n        };\n    }\n    \n    let pushToMainArr = (project) => {\n        if (project.title.length > 0){\n        mainArr.push(project);\n        }\n    };\n\n    let addProjectToList = () => {\n        let newProject = (0,_projectConstructor__WEBPACK_IMPORTED_MODULE_0__.projectConstructor)(getValue(projectNameValue));\n        pushToMainArr(newProject);\n        currentID = newProject.id;\n        resetInputValue(projectNameValue);\n        _dom_js__WEBPACK_IMPORTED_MODULE_1__.dom.render();\n        \n    }\n\n    return {pushToMainArr, addProjectToList, checkIfEmpty, mainArr, resetInputValue, currentID, getValue}\n})();\n\n\n\n//# sourceURL=webpack://top-todolist/./src/addProject.js?");

/***/ }),

/***/ "./src/addtodo.js":
/*!************************!*\
  !*** ./src/addtodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo)\n/* harmony export */ });\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ \"./src/addProject.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _todoConstructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoConstructor */ \"./src/todoConstructor.js\");\n\n\n\n\nlet addTodo = (() => {\n    let todoBox = document.querySelector(\"#todo-box\");\n    let tasktodo = document.querySelector(\"#task-title\");\n    let descriptiontodo = document.querySelector(\"#task-description\");\n    let duedatetodo = document.querySelector(\"#task-duedate\");\n    let prioritytodo = document.querySelector(\"#task-priority\");\n    //do I need \"completed\"?\n\n    let clickTodoButton = () => {\n        \n        todoBox.style.display =  true ? todoBox.style.display = \"block\" : 0;\n    };\n\n    let getTaskTodo = () => {\n        return _addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.getValue(tasktodo)\n    };\n    let getDescriptionTodo = () => {\n        return _addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.getValue(descriptiontodo)\n    }\n    let getDueDateTodo = () => {\n        return _addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.getValue(duedatetodo)\n    }\n    let getPriorityTodo = () => {\n        return _addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.getValue(prioritytodo)\n    };\n\n    let resetTodoDiv = () => {\n        todoBox.style.display = \"none\";\n        _addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.resetInputValue(tasktodo)\n        _addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.resetInputValue(descriptiontodo)\n        _addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.resetInputValue(duedatetodo)\n        _addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.resetInputValue(prioritytodo)\n    }\n\n    let pushToDo = () => {\n        let newTodo = (0,_todoConstructor__WEBPACK_IMPORTED_MODULE_2__.todoConstructor)(getTaskTodo(),getDescriptionTodo(),getDueDateTodo(),getPriorityTodo());\n        \n        _addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.mainArr.forEach(project => {\n            if (project.id === Number(newTodo.id)) {\n                project.tasks.push(newTodo)\n            }\n        });\n\n        resetTodoDiv();\n        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.render();\n        \n    }\n\n\n    \n\n    return { clickTodoButton, pushToDo}\n\n})();\n\n\n\n//# sourceURL=webpack://top-todolist/./src/addtodo.js?");

/***/ }),

/***/ "./src/deleteproject.js":
/*!******************************!*\
  !*** ./src/deleteproject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject)\n/* harmony export */ });\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ \"./src/addProject.js\");\n\n\nlet deleteProject = (() => {\n\n    let deleteProjectDiv = (el) => {\n        el.target.parentElement.remove();\n    }\n    \n    //string\n    let getDataIDDelete = (el) => {\n        return Number(el.target.getAttribute(\"data-id\"));\n    };\n\n    //identification will be passed as a string\n    let getIndexOfDeletedProject = (identification) => {\n        \n        for (let i = 0; i < _addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.mainArr.length; i++){\n            if(_addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.mainArr[i].id === identification){\n                return i;\n            }\n        }\n    };\n    \n\n    let deleteFromMainArr = (index) => {\n        \n        _addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.mainArr.splice(index,1);\n        \n    };\n\n    \n\n    let removeProject = (el) => {\n        deleteProjectDiv(el);\n        let t = getIndexOfDeletedProject(getDataIDDelete(el));\n        deleteFromMainArr(t);\n    }\n    \n\n    return {getDataIDDelete, deleteProjectDiv, removeProject};\n\n})();\n\n\n\n//# sourceURL=webpack://top-todolist/./src/deleteproject.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ \"./src/addProject.js\");\n\n\n\nlet dom = (() => {\n\n    let projectList = document.querySelector(\"#project-list\");\n    let todoList = document.querySelector(\"#todo-section\");\n\n    let createProjectDiv = (title, id) => {\n        let div = document.createElement('div');\n        div.classList.add(\"project-div\");\n        div.textContent = title;\n        div.dataset.id = id;\n        // addProject.currentID = id;\n\n        let deletebtn = document.createElement('button');\n        deletebtn.textContent = \"X\";\n        deletebtn.classList.add('delete-btn');\n        deletebtn.dataset.id = id;\n        deletebtn.id = \"delete-project\";\n\n        div.appendChild(deletebtn);\n        \n        return div;\n    };\n\n    let createToDoDiv = (task, duedate,description,priority,complete) => {\n        let todoDiv = document.createElement('div');\n        todoDiv.classList.add(\"todo-div\");\n        \n        let todoTask = document.createElement('div');\n        todoTask.id = \"todo-task\"\n        let todoDescription = document.createElement('div')\n        todoDescription.id = \"todo-description\"\n        let todoDueDate = document.createElement('div')\n        todoDueDate.id = \"todo-duedate\"\n        let todoPriority = document.createElement('div');\n        todoPriority.id = \"todo-priority\"\n        let todoComplete = document.createElement('div');\n        todoComplete.id = \"todo-complete\"\n\n        let todoInformationArray = [todoTask, todoDescription,todoDueDate,todoPriority,todoComplete];\n\n        todoInformationArray.forEach(item => {\n            item.classList.add(\"todoInfo\");\n            todoDiv.appendChild(item);\n        });\n\n        todoTask.textContent = task;    \n        todoDescription.textContent = description;\n        todoDueDate.textContent = `Due: ${duedate}`;\n        todoPriority.textContent = priority;\n        todoComplete.textContent = complete;\n\n        return todoDiv;\n        \n    };\n\n\n    let appendToDoDiv = (div) => {\n        todoList.appendChild(div);\n    }\n\n    let appendProjectDiv = (div) => {\n        projectList.appendChild(div);\n    };\n\n    let clearPage = (el) => {\n        while (el.firstChild) {\n          el.removeChild(el.firstChild)\n        }\n      }\n\n    let render = () => {    \n        clearPage(projectList);\n        clearPage(todoList);\n        console.log(_addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.currentID);\n        \n        _addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.mainArr.forEach(project => {\n            dom.appendProjectDiv(dom.createProjectDiv(project.title, project.id));\n        })\n\n        _addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.mainArr.forEach(item => {\n            if (item.id === Number(_addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.currentID)){\n                for(let i = 0; i <= item.tasks.length; i++){\n                appendToDoDiv(createToDoDiv(item.tasks[i].task, item.tasks[i].duedate, item.tasks[i].description, item.tasks[i].priority, item.tasks[i].completed));\n                }\n            }\n        })\n        \n    };\n\n    return {createProjectDiv, appendProjectDiv, render }\n})();\n\n\n\n\n\n//# sourceURL=webpack://top-todolist/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _projectConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectConstructor */ \"./src/projectConstructor.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addProject */ \"./src/addProject.js\");\n/* harmony import */ var _deleteproject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteproject */ \"./src/deleteproject.js\");\n/* harmony import */ var _addtodo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addtodo */ \"./src/addtodo.js\");\n\n\n\n\n\n\n\n\n\n//Default Project\nlet defaultProject = (0,_projectConstructor__WEBPACK_IMPORTED_MODULE_1__.projectConstructor)(\"Default\");\ndefaultProject.tasks.push({task: \"Yard Work\", description: \"cut the grass\", duedate: \"Feb-12-22\", priority: \"medium\", completed: \"no\"})\ndefaultProject.tasks.push({task: \"Grocery\", description: \"pick up food and cook\", duedate: \"Mar-17-22\", priority: \"high\", completed: \"yes\"})\n_addProject__WEBPACK_IMPORTED_MODULE_3__.addProject.pushToMainArr(defaultProject);\n\nlet projectLists = document.querySelector(\"#project-list\")\n\n\n//All Event Listeners\n\n//Add Project Button on main page\ndocument.addEventListener(\"click\", (el) => {\n    if (el.target.id === \"add-project-btn\"){\n        _addProject__WEBPACK_IMPORTED_MODULE_3__.addProject.addProjectToList();\n    }\n})\n\n// Delete Project Button on main page\ndocument.addEventListener(\"click\", (el) => {\n    if (el.target.id === \"delete-project\"){\n        _deleteproject__WEBPACK_IMPORTED_MODULE_4__.deleteProject.removeProject(el);\n       \n    }\n})\n\n//Select Project with mouse\nprojectLists.addEventListener(\"click\", (el) => {\n    if (el.target.classList.contains(\"project-div\")){\n        _addProject__WEBPACK_IMPORTED_MODULE_3__.addProject.currentID = el.target.dataset.id;\n        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.render();\n    }\n})\n\n//Main Add To Do button\ndocument.addEventListener(\"click\", (el) => {\n    if (el.target.id === \"add-todo-btn\"){\n        _addtodo__WEBPACK_IMPORTED_MODULE_5__.addTodo.clickTodoButton();\n    }\n});\n\n//submitting from Todo Div\ndocument.addEventListener(\"click\", (el) => {\n    if(el.target.id === \"submit-todo\"){\n        _addtodo__WEBPACK_IMPORTED_MODULE_5__.addTodo.pushToDo();\n    }\n})\n\n_dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.render();\n\n//# sourceURL=webpack://top-todolist/./src/index.js?");

/***/ }),

/***/ "./src/projectConstructor.js":
/*!***********************************!*\
  !*** ./src/projectConstructor.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectConstructor\": () => (/* binding */ projectConstructor)\n/* harmony export */ });\nlet projectConstructor = (title, id, tasks) => {\n    tasks = [];\n    return {title, id:Date.now(), tasks}\n}\n\n\n\n//# sourceURL=webpack://top-todolist/./src/projectConstructor.js?");

/***/ }),

/***/ "./src/todoConstructor.js":
/*!********************************!*\
  !*** ./src/todoConstructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoConstructor\": () => (/* binding */ todoConstructor)\n/* harmony export */ });\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ \"./src/addProject.js\");\n\n\nlet todoConstructor = (task, description, duedate, priority, completed, id) => {\n    id = _addProject__WEBPACK_IMPORTED_MODULE_0__.addProject.currentID;\n    return { task, description, duedate, priority, completed, id}\n}\n\n\n\n//# sourceURL=webpack://top-todolist/./src/todoConstructor.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;