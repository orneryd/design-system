/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/banner/mds-banner.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@mcklabs/web-components/src/bind-events.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@mcklabs/web-components/src/bind-events.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {template} = __webpack_require__(/*! ./utils */ "./node_modules/@mcklabs/web-components/src/utils.js");
/**
 * @param {HTMLElement} root The root element to find all elements from.
 * @param {Object} context the context object for finding functions to bind against. default is the root element
 * @return {HTMLElement} the root element passed in.
 * @description helper function used by the loader when importing html files as a template fucntion
 * for using attributes such as "onclick" within your html templates.
 * You do not need to call this yourself if you are importing your html files using the loader
 *
 * @example
 * The event handler method signature is the exact same as standard HTML5 event handlers.
 * [standard HTML5 event handlers]{@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener}.
 *
 * Supported html5 events:
 * [onabort], [onafterprint], [onbeforeonload], [onbeforeprint], [onblur], [oncanplay], [oncanplaythrough], [onchange],
 * [onclick], [oncontextmenu], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragleave], [ondragover],
 * [ondragstart], [ondrop], [ondurationchange], [onemptied], [onended], [onerror], [onfocus], [onformchange],
 * [onforminput], [onhaschange], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata],
 * [onloadedmetadata], [onloadstart], [onmessage], [onmousedown], [onmousemove], [onmouseout], [onmouseover],
 * [onmouseup], [onmousewheel], [onoffline], [ononline], [onpagehide], [onpageshow], [onpause], [onplay], [onplaying],
 * [onpopstate], [onprogress], [onratechange], [onreadystatechange], [onredo], [onresize], [onscroll], [onseeked],
 * [onseeking], [onselect], [onstalled], [onstorage], [onsubmit], [onsuspend], [ontimeupdate], [onundo], [onunload],
 * [onvolumechange], [onwaiting]
 * @example @lang html
 * // By using the provided htmlLoader, you can use the ES6 template-literal syntax in on* HTML5 event attributes
 * <mwc-button onclick="${this.itemClick}" label="${props.text}"></mwc-button>
 * // If you are not using the loader, use the string name of the function to execute
 * // that is present on the custom element using the template
 * <mwc-button onclick="itemClick"></mwc-button>
 * // you can also use "this."
 * <mwc-button onclick="this.itemClick"></mwc-button>
 * // you can also refence properties of a member."
 * <mwc-button onclick="this.someObj.itemClick"></mwc-button>
 *
 * @example @lang html
 * <!-- list.html: -->
 * <p id="selected-item-text" style="display:${props.selectedItemText ? 'block' : 'none'};">
 *   ${props.selectedItemText}
 * </p>
 * <mwc-formfield id="input-label" alignEnd label="${this.inputLabel}">
 *   <input onkeyup="${this.onInputKeyUp}" type="text">
 * </mwc-formfield>
 * <div>
 *   <mwc-button id="add-item" onclick="${this.clickHandler}" disabled="disabled">${this.buttonLabel}</mwc-button>
 * </div>
 * <ul>
 *   ${this.items.map((text) => {
 *     return `<li><mwc-button onclick="${this.itemClick}" label="${text}"></mwc-button></li>`
 *   }).join("")}
 * </ul>
 *
 * @example @lang js
 * // define your custom element.
 * export default class ListComponent extends HTMLElement {
 *   constructor(self) {
 *     super(self);
 *     self = this;
 *     // use the shadow dom for best results.
 *     this.attachShadow({ mode: 'open' });
 *   }
 *
 *   connectedCallback() {
 *       this.shadowRoot.innerHTML = "";
 *       listTemplate({
 *           // the html template loader will wire up the event handlers for you if you have defined them in your HTML
 *           onInputKeyUp: () => console.log("input contents changed:", this),
 *           itemClick: () =>  console.log("item clicked: ", this),
 *           clickHandler: () =>  console.log("button clicked: ", this),
 *           selectedItemText: this.getAttribute('selected-item'),
 *           inputLabel: buttonLabelBlank,
 *           buttonLabel: "add item to list."
 *      }).forEach((node) => this.shadowRoot.appendChild(node));
 *   }
 * }
 * customElements.define('list-component', MainComponent);
 */
const bindEvents = (root, context = root) => {
  if (!root) return;
  const domElements = Array.from(root.querySelectorAll('*'));
  domElements.forEach((el) => {
    Array.from(el.attributes).forEach((attribute) => {
      if (attribute.name.startsWith('on')) {
        let fnOrName = template(attribute.value, context);
        if (typeof context[fnOrName] === 'function') {
          fnOrName = context[fnOrName];
        }
        if (typeof fnOrName === 'function') {
          el.addEventListener(attribute.name.replace('on', ''), function(...args) {
            fnOrName.apply(context, args);
          });
        }
        el.removeAttribute(attribute.name);
      }
    });
  });
  return root;
};

module.exports = bindEvents;


/***/ }),

/***/ "./node_modules/@mcklabs/web-components/src/setup-connect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@mcklabs/web-components/src/setup-connect.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(nodeList, context) {
  nodeList.connect = function(root) {
    if (!root && context instanceof HTMLElement) {
      root = context;
    }
    if (root instanceof HTMLElement && root.shadowRoot && root.shadowRoot.mode === 'open') {
      root = root.shadowRoot;
    } else {
      root = document.createElement('div');
    }
    root.innerHTML = '';
    nodeList.forEach((node) => root.appendChild(node));
    return root;
  };
  return nodeList;
};


/***/ }),

/***/ "./node_modules/@mcklabs/web-components/src/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mcklabs/web-components/src/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @param {String} path
 * @param {Object} obj Object to find the property in
 * @param {String} fb Fallback string when not found
 * @return {*|String} whatever the value from the nested key path is or the default string '${path}'.
 * @description Returns the value of an object via the path as a string
 *
 * @example
 * let result = getFromObj('hello.foo', {
  *  hello: {
  *    foo: 'bar'
  *  }
  * });
  *
  * result == 'bar';
  */
const getFromObj = (path, obj = {}) => {
  return path && path.split('.').reduce((res, key) => res[key] != null ? res[key] : path, obj);
};

/**
  * @param {String} tmpl the string template
  * @param {Object} map Key/Value pairs to process the string against
  * @param {String} fallback they string fallback when the value is missing.
  * @return {*|String} whatever the value from the nested key path is or the default string '${path}'.
  * @description Processes a string formatted like an ES6 template against an object
  *
  * @example
  * let result = template('I am a string literal formatted ${message.label}.', {
  *  message: {
  *    label: 'to look like an ES6 template'
  *  }
  * });
  *
  * result == 'I am a string literal formatted to look like an ES6 template.';
  */
const template = (tmpl, map, fallback) => {
  const context = Object.assign({this: map}, map);
  return getFromObj(stripES6(tmpl, context), context);
};

const thisRegex = /^this\./;
const es6Regex = /\$\{.+?}/g;
/**
  * @param {String} expr The es6 expression
  * @param {Options|Object} context the context object to find values for tokens.
  * @return {String} The cleaned sxpression without the ${}.
  * @description removes the ${} wrapping from an es6 template literal expression.
  */
const stripES6 = function(expr, context) {
  return expr && expr.replace(es6Regex, (match) => {
    return getFromObj(match.substr(2, match.length - 3).trim(), context);
  }).replace(thisRegex, '');
};


/**
 * @function arrayParser
 * @param {Object} val the value to parse
 * @param {String} key the name of the value to parse
 * @param {Object} params all of the parameters that have been parsed so far.
 * @return {Boolean} returns the currently parsed value.
 * @description In the event that the search string has multiple values with the same key
 * it will convert that into an array of those values for the given key.
 *
 * While there is no defined standard in [RFC 3986 Section 3.4]{@link https://tools.ietf.org/html/rfc3986#section-3.4},
 * most web frameworks accept and serialize them in the following manner as outlined
 * in [MSDN]{@link https://docs.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms524784(v=vs.90)}
 *
 * @example @lang js
 * window.location.search = '?values=foo&values=bar&values=hello&values=world';
 * const params = toParams(window.location.search, {});
 * console.log(params) // {values: ["foo","bar","hello", "world"]}
 *
 * @example @lang js
 * window.location.search = '?values=1&values=2&values=3&values=5&values=7';
 * const params = toParams(window.location.search, {
 *     values: parseInt
 * });
 * console.log(params) // {values: [1, 2, 3, 5, 7]}
 *
 * @example @lang js
 * window.location.search = '?answer=42';
 * const params = toParams(window.location.search, {
 *     answer: parseInt
 * });
 * console.log(params) // {answer: 42}
 */
const arrayParser = (val, key, params) => {
  let current = params[key];
  if (current) {
    if (!Array.isArray(current)) {
      current = [current];
    }
    current.push(val);
  } else {
    current = val;
  }
  return current;
};

/**
 * @function toParams
 * @param {String} str
 * @param {Object} options custom parser functions based on the key name
 * @return {Object} seach params as an object
 * @description Converts URL parameters to a Object collection of key/value pairs
 * Decodes encoded url characters to back to normal strings.
 * @example <caption>convert query string to object:</caption>
 * import {toParams} from '@mcklabs/web-components';
 * let paramsObject = toParams('?foo=bar&hello=world&hello=array&unsafe=I%20am%20an%20unsafe%20string');
 *
 * console.log(paramsObject) // { foo: 'bar', hello: ['world', 'array'], unsafe: 'I am an unsafe string'}
 * @example <caption>pass an optional parser object</caption>
 * import {toParams} from '@mcklabs/web-components';
 * let paramsObject = toParams('?intvals=1&intvals=2&intvals=3', {
 *     intvals: parseInt
 * });
 *
 * console.log(paramsObject) // { intvals: [ 1, 2, 3 ] }
 * @example <caption>without psassing an optional parser object</caption>
 * import {toParams} from '@mcklabs/web-components';
 * let paramsObject = toParams('?intvals=1&intvals=2&intvals=3');
 *
 * console.log(paramsObject) // { intvals: [ "1", "2", "3" ] }
 */
const toParams = (str, options = {}) => {
  const parts = str.split('?');
  const queryString = parts[1] || '';
  const params = {};
  queryString.split('&').forEach((val) => {
    const innerParts = val.split('=');
    if (innerParts.length !== 2) return;
    const paramKey = decodeURIComponent(innerParts[0]);
    const paramVal = decodeURIComponent(innerParts[1]);
    const parser = options[paramKey] || (() => paramVal);
    params[paramKey] = arrayParser(parser(paramVal, paramKey, params), paramKey, params);
  });
  return params;
};

/**
 *
 * @param {Object} options
 * @param {String} base
 * @return {String} the object represented as a query string.
 * @description Converts an Object of String/Value pairs to a query string for URL parameters prepended with the "base" character.
 * Encodes unsafe url characters to url safe encodings.
 * @example <caption>convert object to query string</caption>
 *
 * import {toSearch} from '@mcklabs/web-components';
 * let queryString = toSearch({
 *  foo: 'bar',
 *  hello: ['world', 'array'],
 *  unsafe: 'I am an unsafe string'
 *
 * }, '#');
 *
 * queryString == '#?foo=bar&hello=world&hello=array&unsafe=I%20am%20an%20unsafe%20string';
 */
const toSearch = (options) => {
  const filtered = Object.entries(options).filter((ent) => !!ent[1]);
  return encodeURI(`?${filtered.map((ent) => {
    if (Array.isArray(ent[1])) {
      return ent[1].map((val) => [ent[0], val].join('=')).join('&');
    } else {
      return ent.join('=');
    }
  }).join('&')}`);
};

/**
 *
 * @param {Object} obj
 * @param {String} prefix
 * @return {Object} The new object with transformed keys.
 * @description Convenience method that converts the keys of an object to have a prefix.
 * This is faster than stringification.
 *
 * @example
 * import {prefixKeys} from '@mcklabs/web-components';
 * let newObj = prefixKeys({
 *  foo: 'bar',
 *  hello: ['world', 'array'],
 *  unsafe: 'I am an unsafe string'
 *
 * }, 'zoo-');
 *
 * newObj == {
 *   'zoo-foo': 'bar',
 *   'zoo-hello': ['world', 'array']',
 *   'zoo-unsafe': 'I am an unsafe string'
 * };
 */
const prefixKeys = (obj, prefix) => {
  let keys = [];
  if (Array.isArray(obj)) {
    keys = obj.map((val, i) => i);
  } else {
    keys = Object.keys(obj);
  }
  return Object.assign(
      {},
      ...keys.map((key) => ({[prefix + key]: obj[key]}))
  );
};

/**
 *
 * @param {Object} obj
 * @param {Boolean} stringify wether or not to stringify the values for each key.
 * @return {Object} The new object with transformed keys.
 * @description Convenience method that wraps prefixKeys with 'data-' for easier
 * property spreading within other frameworks such as react.
 * This is preferrable over stringifying objects as parsing json is slow in the browser
 * @example <caption>React example</caption>
 * const stringTestData = {
 *  color: "black and white",
 *  animal: "panda"
 * };
 *
 * const MyComponent = (props) => {
 *   const dataAttrs = toDataAttrs(stringTestData);
 *   return (<div>
 *     <div>
 *       <i18n-message
 *         data-key="tokenized.message"
 *         {...dataAttrs}/>
 *     </div>
 *     <div>
 *       <i18n-message
 *         data-id="tokenized.message"
 *         {...dataAttrs}
 *         data-color="red"/>
 *     </div>
 *   </div>);
 * };

const dataAttrs = toDataAttrs(stringTestData);
 */
const toDataAttrs = (obj) => {
  return prefixKeys(obj, 'data-');
};

module.exports = {
  getFromObj,
  template,
  stripES6,
  toParams,
  arrayParser,
  toSearch,
  prefixKeys,
  toDataAttrs,
};


/***/ }),

/***/ "./node_modules/@mcklabs/web-components/templates.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mcklabs/web-components/templates.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const bindEvents = __webpack_require__(/*! ./src/bind-events */ "./node_modules/@mcklabs/web-components/src/bind-events.js");
const setupConnect = __webpack_require__(/*! ./src/setup-connect */ "./node_modules/@mcklabs/web-components/src/setup-connect.js");

module.exports = {
  bindEvents,
  setupConnect,
};


/***/ }),

/***/ "./packages/banner/mds-banner.html":
/*!*****************************************!*\
  !*** ./packages/banner/mds-banner.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {bindEvents, setupConnect} = __webpack_require__(/*! @mcklabs/web-components/templates */ "./node_modules/@mcklabs/web-components/templates.js"); module.exports = (p = {})=> { const parsed = new DOMParser().parseFromString(function(props){return "<style>h1 {\n  text-align: center;\n  margin: 0 25% 1rem 25%;\n  padding-top: 1rem; }\n\np {\n  text-align: center;\n  margin: 0% 25% 0% 25%;\n  font-size: 0.7rem; }\n</style>\n<link href=\"./mds-banner.scss\"/> <div> <h1> <slot class=\"header\" name=\"header\"></slot> </h1> <p> <slot class=\"content\" name=\"content\"></slot> </p> </div> "}.call(p, p), 'text/html'); const elements = [...parsed.head.children, ...bindEvents(parsed.body, p).childNodes]; return setupConnect(elements, p)}

/***/ }),

/***/ "./packages/banner/mds-banner.js":
/*!***************************************!*\
  !*** ./packages/banner/mds-banner.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MdsBanner; });
/* harmony import */ var _mds_banner_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mds-banner.html */ "./packages/banner/mds-banner.html");
/* harmony import */ var _mds_banner_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mds_banner_html__WEBPACK_IMPORTED_MODULE_0__);


class MdsBanner extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    _mds_banner_html__WEBPACK_IMPORTED_MODULE_0___default()(this).connect()
  }
}

customElements.define('mds-banner', MdsBanner)


/***/ })

/******/ });
//# sourceMappingURL=mds-banner.js.js.map