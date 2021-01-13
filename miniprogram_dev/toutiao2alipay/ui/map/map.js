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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
Component({
  mixins: [],
  data: {},
  props: {
    onekitClass: '',
    onekitStyle: '',
    onekitId: '',
    longitude: function longitude(_longitude) {
      this.setData({ longitude: _longitude });
    },
    latitude: function latitude(_latitude) {
      this.setData({ latitude: _latitude });
    },
    scale: function scale(_scale) {
      this.setData({ scale: _scale });
    },
    markers: function markers(_markers) {
      this.setData({ markers: _markers });
    },
    covers: function covers(_covers) {
      this.setData({ markers: _covers });
    },
    polyline: function polyline(_polyline) {
      this.setData({ polyline: _polyline });
    },
    polygons: function polygons(_polygons) {
      this.setData({ polygons: _polygons });
    },
    circles: function circles(_circles) {
      this.setData({ circles: _circles });
    },
    controls: function controls(_controls) {
      this.setData({ controls: _controls });
    },

    'include-points': function includePoints(_includePoints) {
      this.setData({ 'include-points': _includePoints });
    },
    'show-location': function showLocation(_showLocation) {
      this.setData({ 'show-location': _showLocation });
    },
    subkey: function subkey(_subkey) {
      this.setData({ subkey: _subkey });
    },

    'enable-3D': function enable3D() {
      console.log('[onekit]enable-3D');
    },
    'show-compass': function showCompass(_showCompass) {
      this.mapCtx.showsCompass({ isShowCompass: _showCompass });
    },
    'enable-overlooking': function enableOverlooking(_enableOverlooking) {
      this.mapCtx.gestureEnable({ isGestureEnable: _enableOverlooking });
    },
    'enable-zoom': function enableZoom(_enableZoom) {
      this.mapCtx.showsScale({ isShowsScale: _enableZoom });
    },
    'enable-scroll': function enableScroll() {
      console.log('[onekit]enable-scroll');
    },
    'enable-rotate': function enableRotate(_enableRotate) {
      this.mapCtx.gestureEnable({ isGestureEnable: _enableRotate });
    }
  },
  didMount: function didMount() {
    this.mapCtx = my.createMapContext('map');
  },
  didUpdate: function didUpdate() {},
  didUnmount: function didUnmount() {},

  methods: {
    onMarkertap: function onMarkertap() {},
    onCallouttap: function onCallouttap() {},
    onControltap: function onControltap() {},
    onRegionchange: function onRegionchange() {},
    onTap: function onTap() {},
    onUpdated: function onUpdated() {},
    onPoitap: function onPoitap() {}
  }
});

/***/ })

/******/ });