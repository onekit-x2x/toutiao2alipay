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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint-disable no-console */
exports.default = {
  props: {
    onekitId:  false || 'id_' + Math.random() * 1000,
    onekitClass: '',
    onekitStyle: '',
    onekitVersion: '',
    onekitDataset: null
  },
  data: {},
  onInit: function onInit() {
    if (this.props.onekitId) {
      getApp().onekit_nodes['_' + this.props.onekitId] = this;
      console.log();
    }
    //
    if (this.props.onekitClass) {
      getApp().onekit_nodes['__' + this.props.onekitClass] = this;
    }
  },

  methods: {
    _dataset: function _dataset() {
      if (!this.props.onekitDataset) {
        return {};
      }
      var json = '{' + this.props.onekitDataset + '}';
      return JSON.parse(json);
    },
    _e: function _e(detail, dataset) {
      // currentTarget: {
      //   dataset: {},
      //   id: '',
      //   offsetLeft: ret[0].left,
      //   offsetTop: ret[0].top
      // },
      // detail: {
      //   curPercent: parseInt(curPercent, 10)
      // },
      // mark: {},
      // mut: false,
      // target: {
      //   dataset: {},
      //   id: '',
      //   offsetLeft: ret[0].left,
      //   offsetTop: ret[0].top
      // },
      // timeStamp: 8888888, //
      // type: 'activeend',
      // _userTap: false
      return {
        detail: detail || {},
        dataset: dataset || {}
      };
    }
  }
};

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  props: {},
  methods: {
    ui_tap: function ui_tap(e) {
      if (this.props.onTap) {
        this.props.onTap(e);
      }
    },
    ui_touchstart: function ui_touchstart() {
      if (this.props.onTouchstart) {
        this.props.onTouchstart();
      }
    },
    ui_touchmove: function ui_touchmove() {
      if (this.props.onTouchmove) {
        this.props.onTouchmove();
      }
    },
    ui_touchcancel: function ui_touchcancel() {
      if (this.props.onTouchcancel) {
        this.props.onTouchcancel();
      }
    },
    ui_touchend: function ui_touchend() {
      if (this.props.onTouchend) {
        this.props.onTouchend();
      }
    },
    ui_longpress: function ui_longpress() {
      if (this.props.onLongpress) {
        this.props.onLongpress();
      }
    },
    ui_longtap: function ui_longtap() {
      if (this.props.onLongtap) {
        this.props.onLongtap();
      }
    },
    ui_transitionend: function ui_transitionend() {
      if (this.props.onTransitionend) {
        this.props.onTransitionend();
      }
    },
    ui_animationstart: function ui_animationstart() {
      if (this.props.onAnimationstart) {
        this.props.onAnimationstart();
      }
    },
    ui_animationiteration: function ui_animationiteration() {
      if (this.props.onAnimationiteration) {
        this.props.onAnimationiteration();
      }
    },
    ui_animationend: function ui_animationend() {
      if (this.props.onAnimationend) {
        this.props.onAnimationend();
      }
    },
    ui_touchforcechange: function ui_touchforcechange() {
      if (this.props.onTouchforcechange) {
        this.props.onTouchforcechange();
      }
    }
  }
};

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _onekit_behavior = __webpack_require__(0);

var _onekit_behavior2 = _interopRequireDefault(_onekit_behavior);

var _toutiao_behavior = __webpack_require__(1);

var _toutiao_behavior2 = _interopRequireDefault(_toutiao_behavior);

var _RenderingContext = __webpack_require__(16);

var _RenderingContext2 = _interopRequireDefault(_RenderingContext);

var _Image = __webpack_require__(17);

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
/* eslint-disable camelcase */
Component({
  mixins: [_onekit_behavior2.default, _toutiao_behavior2.default],
  data: {},
  props: {
    type: '2d',
    canvasId: ''
  },

  didMount: function didMount() {
    var onekitId = this.props.canvasId || this.props.onekitId;
    this.setData({
      onekitId: onekitId
    });
  },

  methods: {
    getContext: function getContext(type) {
      switch (type) {
        case '2d':
          return new _RenderingContext2.default(my.createCanvasContext(this.data.onekitId));
        case 'webGL':
          console.warn('xxx');
          return {};
        default:
          throw new Error();
      }
    },
    requestAnimationFrame: function requestAnimationFrame(callback) {
      return setInterval(callback, 50);
    },
    cancelAnimationFrame: function cancelAnimationFrame(id) {
      return clearInterval(id);
    },
    createImage: function createImage() {
      return new _Image2.default();
    },
    canvas_touchstart: function canvas_touchstart(_ref) {
      var detail = _ref.detail;

      var dataset = this._dataset();
      if (this.props.onTouchstart) {
        this.props.onTouchstart({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },
    canvas_touchmove: function canvas_touchmove(_ref2) {
      var detail = _ref2.detail;

      var dataset = this._dataset();
      if (this.props.onTouchmove) {
        this.props.onTouchmove({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },
    canvas_touchend: function canvas_touchend(_ref3) {
      var detail = _ref3.detail;

      var dataset = this._dataset();
      if (this.props.onTouchend) {
        this.props.onTouchend({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },
    canvas_touchcancel: function canvas_touchcancel(_ref4) {
      var detail = _ref4.detail;

      var dataset = this._dataset();
      if (this.props.onTouchcancel) {
        this.props.onTouchcancel({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    }
  }
});

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */
/* eslint-disable max-len */
var CanvasContext = function () {
  function CanvasContext(alipayCanvasContext) {
    _classCallCheck(this, CanvasContext);

    this.alipayCanvasContext = alipayCanvasContext;
  }

  CanvasContext.prototype.arc = function arc(x, y, radius, startAngle, endAngle) {
    var anticlockwise = 0;
    return this.alipayCanvasContext.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  };

  CanvasContext.prototype.arcTo = function arcTo(x1, y1, x2, y2, radius) {
    return this.alipayCanvasContext.arcTo(x1, y1, x2, y2, radius);
  };

  CanvasContext.prototype.beginPath = function beginPath() {
    return this.alipayCanvasContext.beginPath();
  };

  CanvasContext.prototype.bezierCurveTo = function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.alipayCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  };

  CanvasContext.prototype.clearRect = function clearRect(x, y, width, height) {
    return this.alipayCanvasContext.clearRect(x, y, width, height);
  };

  CanvasContext.prototype.clip = function clip() {
    var path = '';
    return this.alipayCanvasContext.clip(path);
  };

  CanvasContext.prototype.closePath = function closePath() {
    return this.alipayCanvasContext.closePath();
  };

  CanvasContext.prototype.createImageData = function createImageData(width, height) {
    return this.alipayCanvasContext.createImageData(width, height);
  };

  CanvasContext.prototype.createLinearGradient = function createLinearGradient(x0, y0, x1, y1) {
    return this.alipayCanvasContext.createLinearGradient(x0, y0, x1, y1);
  };

  CanvasContext.prototype.createPattern = function createPattern(image, repetition) {
    return this.alipayCanvasContext.createPattern(image, repetition);
  };

  CanvasContext.prototype.createRadialGradient = function createRadialGradient(x0, y0, r0, x1, y1, r1) {
    return this.alipayCanvasContext.createRadialGradient(x0, y0, r0, x1, y1, r1);
  };

  CanvasContext.prototype.drawImage = function drawImage(image, sx, sy) {
    var sWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : image.width;
    var sHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : image.height;
    var dx = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var dy = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var dWidth = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : image.width;
    var dHeight = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : image.height;

    console.log(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    this.alipayCanvasContext.drawImage(image.src, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    this.alipayCanvasContext.draw();
  };

  CanvasContext.prototype.ellipse = function ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle) {
    var anticlockwise = false;
    return this.alipayCanvasContext.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
  };

  CanvasContext.prototype.fill = function fill() {
    var path = '';
    return this.alipayCanvasContext.fill(path);
  };

  CanvasContext.prototype.fillRect = function fillRect(x, y, width, height) {
    return this.alipayCanvasContext.fillRect(x, y, width, height);
  };

  //


  CanvasContext.prototype.fillText = function fillText(text, x, y) {
    var maxWidth = 0;
    return this.alipayCanvasContext.fillText(text, x, y, maxWidth);
  };

  //


  CanvasContext.prototype.getImageData = function getImageData(sx, sy, sw, sh) {
    return this.alipayCanvasContext.lineTo(sx, sy, sw, sh);
  };

  CanvasContext.prototype.getLineDash = function getLineDash() {
    return this.alipayCanvasContext.getLineDash();
  };

  //


  CanvasContext.prototype.isPointInPath = function isPointInPath(x, y) {
    var path = '';
    return this.alipayCanvasContext.isPointInPath(path, x, y);
  };

  CanvasContext.prototype.isPointInStroke = function isPointInStroke(x, y) {
    var path = '';
    return this.alipayCanvasContext.isPointInStroke(path, x, y);
  };

  //


  CanvasContext.prototype.lineTo = function lineTo(x, y) {
    return this.alipayCanvasContext.lineTo(x, y);
  };

  //


  CanvasContext.prototype.measureText = function measureText(width) {
    return this.alipayCanvasContext.measureText(width);
  };

  //


  CanvasContext.prototype.moveTo = function moveTo(x, y) {
    return this.alipayCanvasContext.moveTo(x, y);
  };

  CanvasContext.prototype.putImageData = function putImageData(imagedata, dx, dy) {
    return this.alipayCanvasContext.putImageData(imagedata, dx, dy);
  };

  CanvasContext.prototype.quadraticCurveTo = function quadraticCurveTo(cpx, cpy, x, y) {
    return this.alipayCanvasContext.quadraticCurveTo(cpx, cpy, x, y);
  };

  CanvasContext.prototype.rect = function rect(x, y, width, height) {
    return this.alipayCanvasContext.rect(x, y, width, height);
  };

  CanvasContext.prototype.restore = function restore() {
    return this.alipayCanvasContext.restore();
  };

  CanvasContext.prototype.rotate = function rotate(_rotate) {
    return this.alipayCanvasContext.rotate(_rotate);
  };

  CanvasContext.prototype.save = function save() {
    return this.alipayCanvasContext.save();
  };

  CanvasContext.prototype.scale = function scale(x, y) {
    return this.alipayCanvasContext.scale(x, y);
  };

  CanvasContext.prototype.setLineDash = function setLineDash(segments) {
    return this.alipayCanvasContext.setLineDash(segments);
  };

  CanvasContext.prototype.setTransform = function setTransform(a, b, c, d, e, f) {
    return this.alipayCanvasContext.setTransform(a, b, c, d, e, f);
  };

  //


  CanvasContext.prototype.stroke = function stroke() {
    return this.alipayCanvasContext.stroke();
  };

  CanvasContext.prototype.strokeRect = function strokeRect(x, y, width, height) {
    return this.alipayCanvasContext.strokeRect(x, y, width, height);
  };

  //


  CanvasContext.prototype.strokeText = function strokeText(text, x, y) {
    var maxWidth = 0;
    return this.alipayCanvasContext.strokeText(text, x, y, maxWidth);
  };

  //


  CanvasContext.prototype.transform = function transform(scaleX, skewX, skewY, scaleY, translateX, translateY) {
    return this.alipayCanvasContext.transform(scaleX, skewX, skewY, scaleY, translateX, translateY);
  };

  CanvasContext.prototype.translate = function translate(x, y) {
    return this.alipayCanvasContext.translate(x, y);
  };

  _createClass(CanvasContext, [{
    key: 'fillStyle',
    set: function set(color) {
      this.fillStyle = color;
    },
    get: function get() {
      return this.fillStyle;
    }
  }, {
    key: 'font',
    set: function set(fontSize) {
      this.font = fontSize;
    },
    get: function get() {
      return this.font;
    }
  }, {
    key: 'globalAlpha',
    set: function set(alpha) {
      this.globalAlpha = alpha;
    },
    get: function get() {
      return this.globalAlpha;
    }

    //

  }, {
    key: 'globalCompositeOperation',
    set: function set(type) {
      this.globalCompositeOperation = type;
    },
    get: function get() {
      return this.globalCompositeOperation;
    }

    //

  }, {
    key: 'imageSmoothingEnabled',
    set: function set(value) {
      this.imageSmoothingEnabled = value;
    },
    get: function get() {
      return this.imageSmoothingEnabled;
    }
  }, {
    key: 'lineCap',
    set: function set(lineCap) {
      this.lineCap = lineCap;
    },
    get: function get() {
      return this.lineCap;
    }

    //

  }, {
    key: 'lineDashOffset',
    set: function set(offset) {
      this.lineDashOffset = offset;
    },
    get: function get() {
      return this.lineDashOffset;
    }

    //

  }, {
    key: 'lineJoin',
    set: function set(lineJoin) {
      this.lineJoin = lineJoin;
    },
    get: function get() {
      return this.lineJoin;
    }
  }, {
    key: 'lineWidth',
    set: function set(lineWidth) {
      this.lineWidth = lineWidth;
    },
    get: function get() {
      return this.lineWidth;
    }
  }, {
    key: 'miterLimit',
    set: function set(miterLimit) {
      this.miterLimit = miterLimit;
    },
    get: function get() {
      return this.miterLimit;
    }
  }, {
    key: 'shadowColor',
    set: function set(color) {
      this.shadowColor = color;
    },
    get: function get() {
      return this.hadowColor;
    }

    //

  }, {
    key: 'shadowBlur',
    set: function set(level) {
      this.shadowBlur = level;
    },
    get: function get() {
      return this.shadowBlur;
    }

    //

  }, {
    key: 'shadowOffsetX',
    set: function set(offset) {
      this.shadowOffsetX = offset;
    },
    get: function get() {
      return this.shadowOffsetX;
    }

    //

  }, {
    key: 'shadowOffsetY',
    set: function set(offset) {
      this.shadowOffsetY = offset;
    },
    get: function get() {
      return this.shadowOffsetY;
    }
  }, {
    key: 'strokeStyle',
    set: function set(color) {
      this.alipayCanvasContext.setStrokeStyle(color);
    },
    get: function get() {
      return this.alipayCanvasContext.getStrokeStyle();
    }
  }, {
    key: 'textAlign',
    set: function set(align) {
      align = 'left' || false || false || false || false;
      this.textAlign = align;
    },
    get: function get() {
      return this.textAlign;
    }

    //

  }, {
    key: 'textBaseline',
    set: function set(vertical) {
      vertical = 'top' || false || false || false || false || false;
      this.textBaseline = vertical;
    },
    get: function get() {
      return this.textBaseline;
    }
  }]);

  return CanvasContext;
}();

exports.default = CanvasContext;

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */
/* eslint-disable camelcase */
var Image = function () {
  function Image() {
    _classCallCheck(this, Image);
  }

  _createClass(Image, [{
    key: "src",
    set: function set(src) {
      var _this = this;

      this._src = src;
      if (!this.onload) {
        return;
      }
      my.getImageInfo({
        src: src,
        success: function success(res) {
          _this._width = res.width;
          _this._height = res.height;
          _this.onload();
        },
        fail: function fail(err) {
          if (_this.onerror) {
            _this.onerror(err.errMsg);
          }
        }
      });
    },
    get: function get() {
      return this._src;
    }
  }, {
    key: "width",
    get: function get() {
      return this._width;
    }
  }, {
    key: "height",
    get: function get() {
      return this._height;
    }
  }, {
    key: "onload",
    set: function set(onload) {
      this._onload = onload;
    },
    get: function get() {
      return this._onload;
    }
  }, {
    key: "onerror",
    set: function set(onerror) {
      this._onerror = onerror;
    },
    get: function get() {
      return this._onerror;
    }
  }]);

  return Image;
}();

exports.default = Image;

/***/ })

/******/ });