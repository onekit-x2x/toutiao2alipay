module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tt = function () {
  function tt() {
    _classCallCheck(this, tt);
  }

  tt.canIUse = function canIUse(schema) {
    return my.canIUse(schema);
  };

  tt.base64ToArrayBuffer = function base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+');
    var commonContent = Buffer.from(base64, 'base64');
    return commonContent;
  };

  tt.arrayBufferToBase64 = function arrayBufferToBase64(arrayBuffer) {
    var base64Content = Buffer.from(arrayBuffer).toString('base64');
    return base64Content;
  };

  return tt;
}();

exports.default = tt;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("oneutil");

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.GLOBAL = exports.tt = exports.OnekitPage = exports.OnekitComponent = exports.OnekitBehavior = exports.OnekitApp = void 0;
var OnekitApp_1 = __webpack_require__(25);
exports.OnekitApp = OnekitApp_1.default;
var OnekitBehavior_1 = __webpack_require__(26);
exports.OnekitBehavior = OnekitBehavior_1.default;
var OnekitComponent_1 = __webpack_require__(27);
exports.OnekitComponent = OnekitComponent_1.default;
var OnekitPage_1 = __webpack_require__(28);
exports.OnekitPage = OnekitPage_1.default;
var tt_1 = __webpack_require__(0);
exports.tt = tt_1.default;
var global_1 = __webpack_require__(29);
exports.GLOBAL = global_1.default;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitApp;
/* eslint-disable no-console */
/* eslint-disable camelcase */

function OnekitApp(tt_object) {
  var my_object = {
    onekit_nodes: {},
    onLaunch: function onLaunch() {
      my.onError(function (my_error) {
        console.error('[my.onError]', my_error);
        var tt_error = my_error;
        if (getApp().onekit_onError) {
          getApp().onekit_onError(tt_error);
        }
        if (tt_object.onError) {
          tt_object.onError(tt_error);
        }
      });
      //

      // 小程序不支持
      // my.onPageNotFound(function (my_error) {
      //   var tt_error = my_error;
      //   if (getApp().onekit_onPageNotFound) {
      //     getApp().onekit_onPageNotFound(tt_error);
      //   }
      //   if (tt_object.onPageNotFound) {
      //     tt_object.onPageNotFound(tt_error);
      //   }
      // });
      // /////////////////
      if (tt_object.onLaunch) {
        tt_object.onLaunch();
      }
    },
    onShow: function onShow() {
      if (getApp().onekit_onAppShow) {
        getApp().onekit_onAppShow();
      }
      if (tt_object.onShow) {
        tt_object.onShow();
      }
    },
    onHide: function onHide() {
      if (getApp().onekit_onAppShow) {
        getApp().onekit_onAppShow();
      }
      if (tt_object.onHide) {
        tt_object.onHide();
      }
    },
    onError: function onError() {
      if (tt_object.onError) {
        tt_object.onError();
      }
    }
  };
  for (var _iterator = Object.keys(tt_object), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var key = _ref;

    var member = tt_object[key];
    switch (key) {
      case 'onLaunch':
      case 'onShow':
      case 'onHide':
      case 'onError':
      case 'onPageNotFound':
      case 'onUnhandledRejection':
      case 'onThemeChange':
        break;
      default:
        my_object[key] = member;
        break;
    }
  }
  return App(my_object);
}

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitBehavior;

var _oneutil = __webpack_require__(1);

var _oneutil2 = _interopRequireDefault(_oneutil);

var _tt = __webpack_require__(0);

var _tt2 = _interopRequireDefault(_tt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
function OnekitBehavior(object) {
  var tt_object = {
    onInit: function onInit(query) {
      var created = void 0;
      if (object.lifetimes && object.lifetimes.created) {
        created = object.lifetimes.created;
      } else if (object.created) {
        created = object.created;
      } else {
        created = function created() {};
      }
      created.call(this, query);
    },
    didMount: function didMount() {
      var attached = void 0;
      if (object.lifetimes && object.lifetimes.attached) {
        attached = object.lifetimes.attached;
      } else if (object.attached) {
        attached = object.attached;
      } else {
        attached = function attached() {};
      }
      attached.call(this);
      // //////
      var ready = void 0;
      if (object.lifetimes && object.lifetimes.ready) {
        ready = object.lifetimes.ready;
      } else if (object.ready) {
        ready = object.ready;
      } else {
        ready = function ready() {};
      }
      ready.call(this);
    },
    didUnmount: function didUnmount() {
      var detached = void 0;
      if (object.lifetimes && object.lifetimes.detached) {
        detached = object.lifetimes.detached;
      } else if (object.detached) {
        detached = object.detached;
      } else {
        detached = function detached() {};
      }
      detached.call(this);
    }
  };
  if (object) {
    if (!object.methods) {
      object.methods = {};
    }
    object.methods.triggerEvent = function (name, data) {
      var funcName = 'on' + _oneutil2.default.firstUpper(name);
      if (this.props[funcName]) {
        this.props[funcName](data);
      }
    };
    object.methods.createSelectorQuery = _tt2.default.createSelectorQuery;
  }
  for (var _iterator = Object.keys(object), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var key = _ref;

    var value = object[key];
    if (!value) {
      continue;
    }
    switch (key) {
      case 'properties':
        tt_object.props = {};
        for (var _iterator2 = Object.keys(value), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var p = _ref2;

          var v = value[p];
          tt_object.props[p] = v && v.value ? v.value : null;
        }
        break;
      default:
        tt_object[key] = value;
    }
  }

  return tt_object;
}

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitComponent;

var _oneutil = __webpack_require__(1);

var _oneutil2 = _interopRequireDefault(_oneutil);

var _tt = __webpack_require__(0);

var _tt2 = _interopRequireDefault(_tt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
function OnekitComponent(object) {
  var properties = {};
  var tt_object = {
    data: function data() {
      '';
    },
    onInit: function onInit(query) {
      var created = void 0;
      if (object.lifetimes && object.lifetimes.created) {
        created = object.lifetimes.created;
      } else if (object.created) {
        created = object.created;
      } else {
        created = function created() {};
      }
      created.call(this, query);
    },
    didMount: function didMount() {
      for (var _iterator = Object.keys(this.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var k = _ref;

        var v = this.props[k];
        properties[k] = v;
        this.data[k] = v;
      }
      var attached = void 0;
      if (object.lifetimes && object.lifetimes.attached) {
        attached = object.lifetimes.attached;
      } else if (object.attached) {
        attached = object.attached;
      } else {
        attached = function attached() {};
      }
      attached.call(this);
      // //////
      var ready = void 0;
      if (object.lifetimes && object.lifetimes.ready) {
        ready = object.lifetimes.ready;
      } else if (object.ready) {
        ready = object.ready;
      } else {
        ready = function ready() {};
      }
      ready.call(this);
    },
    didUnmount: function didUnmount() {
      var detached = void 0;
      if (object.lifetimes && object.lifetimes.detached) {
        detached = object.lifetimes.detached;
      } else if (object.detached) {
        detached = object.detached;
      } else {
        detached = function detached() {};
      }
      detached.call(this);
    },

    methods: {
      get properties() {
        return properties;
      }

    }
  };
  if (object) {
    if (!object.methods) {
      object.methods = {};
    }
    object.methods.triggerEvent = function (name, data) {
      var funcName = 'on' + _oneutil2.default.firstUpper(name);
      if (this.props[funcName]) {
        this.props[funcName](data);
      }
    };
    object.methods.createSelectorQuery = _tt2.default.createSelectorQuery;
  }
  for (var _iterator2 = Object.keys(object), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref2 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var key = _ref2;

    var value = object[key];
    if (!value) {
      continue;
    }
    switch (key) {
      case 'properties':
        tt_object.props = {};
        for (var _iterator3 = Object.keys(value), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
          }

          var k = _ref3;

          var p = value[k];
          var v = p && p.value ? p.value : null;
          tt_object.props[k] = v;
          properties[k] = v;
        }
        break;
      case 'methods':
        for (var _iterator4 = Object.keys(value), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
          var _ref4;

          if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref4 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref4 = _i4.value;
          }

          var _k = _ref4;

          tt_object.methods[_k] = value[_k];
        }
        break;
      case 'data':
        for (var _iterator5 = Object.keys(value), _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
          var _ref5;

          if (_isArray5) {
            if (_i5 >= _iterator5.length) break;
            _ref5 = _iterator5[_i5++];
          } else {
            _i5 = _iterator5.next();
            if (_i5.done) break;
            _ref5 = _i5.value;
          }

          var _k2 = _ref5;

          tt_object.data[_k2] = value[_k2];
        }
        break;
      case 'behaviors':
        tt_object.mixins = value;
        break;
      default:
        tt_object[key] = value;
        break;
    }
  }
  return Component(tt_object);
}

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitPage;
/* eslint-disable no-console */
/* eslint-disable camelcase */
function OnekitPage(tt_object) {
  var my_object = {
    events: {
      onKeyboardHeight: function onKeyboardHeight(e) {
        for (var _iterator = getApp().onekit_onKeyboardHeight, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var onKeyboardHeight = _ref;

          onKeyboardHeight(e);
        }
      }
    },
    onLoad: function onLoad(query) {
      if (!getApp().onekit_onKeyboardHeight) {
        getApp().onekit_onKeyboardHeight = [];
      }
      if (tt_object.onLoad) {
        tt_object.onLoad.call(this, query);
      }
    },
    animate: function animate() {},
    selectComponent: function selectComponent(selector) {
      // selector = selector.replace(".","$");
      // selector = selector.replace("-","_");
      for (var _iterator2 = Object.keys(this), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var key = _ref2;

        if (key.indexOf(selector) >= 0) {
          return this[key];
        }
      }
      return null;
    },
    selectAllComponents: function selectAllComponents(selector) {
      //  selector = selector.replace(".","$");
      //   selector = selector.replace("-","_");
      for (var _iterator3 = Object.keys(this), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var key = _ref3;

        if (key.indexOf(selector) >= 0) {
          return [this[key]];
        }
      }
      return [];
    }
  };
  if (tt_object.behaviors) {
    for (var _iterator4 = tt_object.behaviors, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref4 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref4 = _i4.value;
      }

      var behavior = _ref4;

      for (var _iterator5 = Object.keys(behavior), _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
        var _ref5;

        if (_isArray5) {
          if (_i5 >= _iterator5.length) break;
          _ref5 = _iterator5[_i5++];
        } else {
          _i5 = _iterator5.next();
          if (_i5.done) break;
          _ref5 = _i5.value;
        }

        var behavior_key = _ref5;

        var behavior_value = behavior[behavior_key];
        switch (behavior_key) {
          case 'methods':
            for (var _iterator6 = Object.keys(behavior_value), _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
              var _ref6;

              if (_isArray6) {
                if (_i6 >= _iterator6.length) break;
                _ref6 = _iterator6[_i6++];
              } else {
                _i6 = _iterator6.next();
                if (_i6.done) break;
                _ref6 = _i6.value;
              }

              var method_key = _ref6;

              var method = behavior_value[method_key];
              my_object[method_key] = method;
            }
            break;
          default:
            my_object[behavior_key] = behavior_value;
            break;
        }
      }
    }
  }
  for (var _iterator7 = Object.keys(tt_object), _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
    var _ref7;

    if (_isArray7) {
      if (_i7 >= _iterator7.length) break;
      _ref7 = _iterator7[_i7++];
    } else {
      _i7 = _iterator7.next();
      if (_i7.done) break;
      _ref7 = _i7.value;
    }

    var key = _ref7;

    var value = tt_object[key];
    switch (key) {
      case 'behaviors':
        break;
      case 'onLoad':
        break;
      default:
        my_object[key] = value;
        break;
    }
  }
  return Page(my_object);
}

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var global = function () {
  function global() {
    _classCallCheck(this, global);
  }

  global.btoa = function (_btoa) {
    function btoa() {
      return _btoa.apply(this, arguments);
    }

    btoa.toString = function () {
      return _btoa.toString();
    };

    return btoa;
  }(function () {
    // eslint-disable-next-line no-undef
    return btoa();
  });

  _createClass(global, null, [{
    key: "isDemo",
    get: function get() {
      return false;
    }
  }]);

  return global;
}();

exports.default = global;

/***/ })

/******/ });