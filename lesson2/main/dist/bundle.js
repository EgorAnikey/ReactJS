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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calccash.js":
/*!*************************!*\
  !*** ./src/calccash.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ["SRL", "PLO", "J&K"],
  rus: ["RusAuto", "SBO"]
};

var Sponsor =
/*#__PURE__*/
function () {
  function Sponsor(sponsors) {
    _classCallCheck(this, Sponsor);

    this.sponsors = sponsors;
  }

  _createClass(Sponsor, [{
    key: "calcCash",
    value: function calcCash() {
      var cash = this.sponsors.cash;
      return cash.reduce(function (prev, cur) {
        return prev + cur;
      });
    }
  }, {
    key: "getSponsor",
    value: function getSponsor() {
      var _this$sponsors = this.sponsors,
          eu = _this$sponsors.eu,
          rus = _this$sponsors.rus;
      return [].concat(_toConsumableArray(eu), _toConsumableArray(rus));
    }
  }, {
    key: "showInfo",
    value: function showInfo() {
      return [this.getSponsor(), this.sponsors.eu[0], this.calcCash()];
    }
  }]);

  return Sponsor;
}();

var firstSponsor = new Sponsor(sponsors);
/* harmony default export */ __webpack_exports__["default"] = (firstSponsor.showInfo());

/***/ }),

/***/ "./src/employers.js":
/*!**************************!*\
  !*** ./src/employers.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var employers = ["Alex", "", "ludmila", "Viktor", "", "oleg", "iNna", "Ivan", "Alex", "Olga", " Ann"];

var Employers =
/*#__PURE__*/
function () {
  function Employers(employers) {
    _classCallCheck(this, Employers);

    this.employers = employers;
  }

  _createClass(Employers, [{
    key: "getCorrectNames",
    value: function getCorrectNames() {
      var correctNames = this.employers.filter(function (name) {
        return name.length > 0;
      }).map(function (name) {
        return name.toLowerCase().trim();
      });
      return correctNames;
    }
  }]);

  return Employers;
}();

var employersNames = new Employers(employers);
/* harmony default export */ __webpack_exports__["default"] = (employersNames.getCorrectNames());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employers */ "./src/employers.js");
/* harmony import */ var _calccash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calccash */ "./src/calccash.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var _sponsorData = _slicedToArray(_calccash__WEBPACK_IMPORTED_MODULE_1__["default"], 3),
    sponsors = _sponsorData[0],
    danger = _sponsorData[1],
    totalMoney = _sponsorData[2];

var makeBusiness =
/*#__PURE__*/
function () {
  function makeBusiness(owner, cash, emp, sponsor, danger) {
    _classCallCheck(this, makeBusiness);

    this.owner = owner;
    this.cash = cash;
    this.emp = emp;
    this.sponsor = sponsor;
    this.danger = danger;
  }

  _createClass(makeBusiness, [{
    key: "showInfo",
    value: function showInfo() {
      var director = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Victor";
      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(director, ". Our budget: ").concat(this.cash, ". And our employers: ").concat(this.emp, ";\n    And we have a sponsors: ").concat(this.sponsor, "\n    Note. Be careful with ").concat(this.danger, ". It's a huge risk.\n    "));
    }
  }]);

  return makeBusiness;
}();

var business = new makeBusiness("Sam", totalMoney, _employers__WEBPACK_IMPORTED_MODULE_0__["default"], sponsors, danger);
business.showInfo('Egor');

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map