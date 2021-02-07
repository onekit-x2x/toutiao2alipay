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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = require("oneutil");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _PROMISE = __webpack_require__(30);

var _PROMISE2 = _interopRequireDefault(_PROMISE);

var _SelectorQuery = __webpack_require__(31);

var _SelectorQuery2 = _interopRequireDefault(_SelectorQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable no-octal */
/* eslint-disable camelcase */
/* eslint-disable no-console */

var tt = function () {
  function tt() {
    _classCallCheck(this, tt);
  }

  // ///////////  基础 ////////////
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

  tt.canIPutStuffOverComponent = function canIPutStuffOverComponent() {
    return true;
  };

  tt.getUpdateManager = function getUpdateManager() {
    return my.getUpdateManager();
  };

  tt.onAppShow = function onAppShow(callback) {
    return my.onAppShow(callback);
  };

  tt.offAppShow = function offAppShow(callback) {
    return my.offAppShow(callback);
  };

  tt.onAppHide = function onAppHide(callback) {
    return my.onAppHide(callback);
  };

  tt.offAppHide = function offAppHide(callback) {
    return my.offAppHide(callback);
  };

  tt.onError = function onError(callback) {
    return my.onError(callback);
  };

  tt.offError = function offError(callback) {
    return my.offError(callback);
  };

  tt.env = function env() {
    var my_res = my.env;
    var tt_res = {
      USER_DATA_PATH: my_res.USER_DATA_PATH,
      VERSION: 'development',
      clientName: my_res.clientName,
      clientVersion: my_res.clientVersion,
      language: my_res.language,
      platform: my_res.platform
    };
    return tt_res;
  };

  // ///////////  网络  ////////////


  tt.downloadFile = function downloadFile(tt_object) {
    var tt_url = tt_object.url;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var url = tt_url;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.downloadFile({
        url: url,
        success: function success(tt_res) {
          var my_res = {
            tempFilePath: tt_res.apFilePath,
            statusCode: 200
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.request = function request(tt_object) {
    var tt_url = tt_object.url;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var url = tt_url;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.request({
        url: url,
        success: function success(tt_res) {
          var my_res = {
            data: tt_res.data,
            statusCode: tt_res.status,
            header: tt_res.headers
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.uploadFile = function uploadFile(tt_object) {
    var tt_url = tt_object.url;
    var tt_filePath = tt_object.filePath;
    var tt_name = tt_object.name;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var url = tt_url;
    var filePath = tt_filePath;
    var fileName = tt_name;
    var fileType = 'image';
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.uploadFile({
        url: url,
        filePath: filePath,
        fileName: fileName,
        fileType: fileType,
        success: function success(tt_res) {
          var my_res = {
            data: tt_res.data,
            statusCode: tt_res.statusCode,
            header: tt_res.header
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.connectSocket = function connectSocket(tt_object) {
    var tt_url = tt_object.url;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var url = tt_url;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.connectSocket({
        url: url,
        success: function success() {
          var my_res = {
            errMsg: 'connectSocket: ok',
            socketTaskId: 1
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  // ///////////  媒体  ////////////
  // ////// 图片  ///////


  tt.chooseImage = function chooseImage(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.chooseImage({
        success: function success(tt_res) {
          var my_res = {
            tempFiles: tt_res.apFilePaths,
            tempFilePaths: tt_res.tempFilePaths
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.saveImageToPhotosAlbum = function saveImageToPhotosAlbum(tt_object) {
    var url = tt_object.filePath;
    var success = tt_object.success;
    var fail = tt_object.fail;
    var complete = tt_object.complete;
    tt_object = null;
    var my_object = {
      url: url,
      success: success,
      fail: fail,
      complete: complete
    };
    return my.saveImage(my_object);
  };

  tt.previewImage = function previewImage(object) {
    return my.previewImage(object);
  };

  tt.getImageInfo = function getImageInfo(tt_object) {
    var tt_src = tt_object.src;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var src = tt_src;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getImageInfo({
        src: src,
        success: function success(tt_res) {
          var my_res = {
            errMsg: 'getImageInfo: ok',
            width: tt_res.width,
            height: tt_res.height,
            type: tt_res.type,
            path: tt_res.path,
            orientation: tt_res.orientation
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.compressImage = function compressImage(tt_object) {
    var tt_src = tt_object.src;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var apFilePaths = [tt_src];
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.compressImage({
        apFilePaths: apFilePaths,
        success: function success(tt_res) {
          var my_res = {
            errMsg: 'compressImage: ok',
            tempFilePath: tt_res.apFilePaths[0]
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  // ////// 录音  ///////


  tt.getRecorderManager = function getRecorderManager() {
    return my.getRecorderManager();
  };

  // ////// 音频  ///////


  tt.createInnerAudioContext = function createInnerAudioContext() {
    return my.createInnerAudioContext();
  };

  tt.getBackgroundAudioManager = function getBackgroundAudioManager() {
    return my.getBackgroundAudioManager();
  };

  // ////// 视频  ///////


  tt.createVideoContext = function createVideoContext(id) {
    return my.createVideoContext(id);
  };

  tt.chooseVideo = function chooseVideo(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.chooseVideo({
        success: function success(tt_res) {
          var my_res = {
            errMsg: 'chooseVideo: ok',
            tempFilePath: tt_res.tempFilePath,
            duration: tt_res.duration,
            size: tt_res.size,
            width: tt_res.width,
            height: tt_res.height,
            apFilePath: tt_res.apFilePath,
            filePath: tt_res.filePath
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.saveVideoToPhotosAlbum = function saveVideoToPhotosAlbum(tt_object) {
    var src = tt_object.filePath;
    var success = tt_object.success;
    var fail = tt_object.fail;
    var complete = tt_object.complete;
    tt_object = null;
    var my_object = {
      src: src,
      success: success,
      fail: fail,
      complete: complete
    };
    return my.saveVideoToPhotosAlbum(my_object);
  };

  tt.createLivePlayerContext = function createLivePlayerContext(id) {
    return my.createVideoContext(id);
  };

  // ////// 相机  ///////


  tt.createCameraContext = function createCameraContext() {
    return my.createCameraContext();
  };

  // ////// 地图  ///////


  tt.createMapContext = function createMapContext(mapId) {
    return my.createMapContext(mapId);
  };

  // ////// 文件  ///////


  tt.saveFile = function saveFile(tt_object) {
    var tt_tempFilePath = tt_object.tempFilePath;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var apFilePath = tt_tempFilePath;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.saveFile({
        apFilePath: apFilePath,
        success: function success(tt_res) {
          var my_res = {
            errMsg: 'saveFile: ok',
            savedFilePath: tt_res.apFilePath
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.getFileInfo = function getFileInfo(tt_object) {
    var tt_filePath = tt_object.filePath;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var apFilePath = tt_filePath;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getFileInfo({
        apFilePath: apFilePath,
        success: function success(tt_res) {
          var my_res = {
            errMsg: 'getFileInfo: ok',
            size: tt_res.size,
            digest: tt_res.digest
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.getSavedFileList = function getSavedFileList(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getSavedFileList({
        success: function success(tt_res) {
          var tt_fileList = tt_res.fileList.map(function (file) {
            return {
              size: file.size,
              filePath: file.apFilePath,
              createTime: file.createTime
            };
          });
          var my_res = {
            errMsg: 'getSavedFileList: ok',
            fileList: tt_fileList
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.openDocument = function openDocument(tt_object) {
    var tt_filePath = tt_object.filePath;
    var tt_fileType = tt_object.fileType || 'pdf';
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var apFilePath = tt_filePath;
    var fileType = tt_fileType;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.openDocument({
        apFilePath: apFilePath,
        fileType: fileType,
        success: function success() {
          var my_res = {
            errMsg: 'openDocument: ok'
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.removeSavedFile = function removeSavedFile(tt_object) {
    var apFilePath = tt_object.filePath;
    var success = tt_object.success;
    var fail = tt_object.fail;
    var complete = tt_object.complete;
    tt_object = null;
    var my_object = {
      apFilePath: apFilePath,
      success: success,
      fail: fail,
      complete: complete
    };
    return my.removeSavedFile(my_object);
  };

  tt.getFileSystemManager = function getFileSystemManager() {
    return my.getFileSystemManager();
  };

  // ////// 开放接口  ///////


  tt.login = function login(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getAuthCode({
        success: function success(tt_res) {
          var my_res = {
            errMsg: 'login: ok',
            code: tt_res.authCode,
            anonymousCode: null,
            isLogin: true,
            authErrorScopes: tt_res.authErrorScopes,
            authSuccessScopes: tt_res.authSuccessScopes
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.checkSession = function checkSession() {
    return console.warn('checkSession is not support');
  };

  tt.getUserInfo = function getUserInfo(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getUserInfo({
        success: function success(tt_res) {
          var tt_userInfo = {
            gender: 0,
            nickName: tt_res.nickName,
            avatarUrl: tt_res.avatar,
            city: '',
            province: '',
            country: '',
            language: ''
          };
          var my_res = {
            errMsg: 'getUserInfo: ok',
            userInfo: tt_userInfo,
            rawData: JSON.stringify(tt_userInfo)
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.pay = function pay() {
    return console.warn('pay is not support');
  };

  // ////// 广告  ///////


  tt.createRewardedVideoAd = function createRewardedVideoAd() {
    return console.warn('createRewardedVideoAd is not support');
  };

  tt.createInterstitialAd = function createInterstitialAd() {
    return console.warn('createInterstitialAd is not support');
  };

  // ////// 跳转  ///////


  tt.navigateToMiniProgram = function navigateToMiniProgram(object) {
    return my.navigateToMiniProgram(object);
  };

  tt.navigateBackMiniProgram = function navigateBackMiniProgram(object) {
    return my.navigateBackMiniProgram(object);
  };

  // ////// 转发  ///////


  tt.chooseAddress = function chooseAddress(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getAddress({
        success: function success(tt_res) {
          var my_res = {
            errMsg: 'chooseAddress: ok',
            userName: tt_res.fullname,
            provinceName: tt_res.prov,
            cityName: tt_res.city,
            countyName: tt_res.country,
            detailInfo: tt_res.address,
            telNumber: tt_res.mobilePhone,
            area: tt_res.area,
            street: tt_res.street
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  // ////// 设置  ///////


  tt.getSetting = function getSetting(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getSetting({
        success: function success(tt_res) {
          var my_res = {
            errMsg: 'getSetting: ok',
            'scope.userInfo': tt_res.userinfo,
            'scope.userLocation': tt_res.location,
            'scope.address': tt_res.aliaddress,
            'scope.record': false,
            'scope.album': tt_res.album,
            'scope.camera': tt_res.camera
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.openSetting = function openSetting(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.openSetting({
        success: function success(tt_res) {
          var my_res = {
            errMsg: 'openSetting: ok',
            'scope.userInfo': tt_res.userinfo,
            'scope.userLocation': tt_res.location,
            'scope.address': false,
            'scope.record': false,
            'scope.album': tt_res.album,
            'scope.camera': tt_res.camera
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  // ////// 授权  ///////


  tt.authorize = function authorize(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getAuthCode({
        success: function success(tt_res) {
          var my_res = {
            errMsg: 'authorize: ok',
            authCode: tt_res.authCode,
            authErrorScopes: tt_res.authErrorScopes,
            authSuccessScopes: tt_res.authSuccessScopes
          };
          SUCCESS(my_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.reportAnalytics = function reportAnalytics(object) {
    return my.reportAnalytics(object);
  };

  tt.followOfficialAccount = function followOfficialAccount() {
    return console.warn('followOfficialAccount is not support');
  };

  tt.checkFollowState = function checkFollowState() {
    return console.warn('checkFollowState is not support');
  };

  tt.requestSubscribeMessage = function requestSubscribeMessage() {
    return console.warn('requestSubscribeMessage is not support');
  };

  // ////// 数据缓存  ///////


  tt.getStorage = function getStorage(object) {
    return my.getStorage(object);
  };

  tt.getStorageSync = function getStorageSync(key) {
    return my.getStorageSync(key);
  };

  tt.setStorage = function setStorage(key, data) {
    return my.setStorage(key, data);
  };

  tt.setStorageSync = function setStorageSync(key, data) {
    return my.setStorageSync(key, data);
  };

  tt.removeStorage = function removeStorage(key) {
    return my.removeStorage(key);
  };

  tt.removeStorageSync = function removeStorageSync(key) {
    return my.removeStorageSync(key);
  };

  tt.clearStorage = function clearStorage(object) {
    return my.clearStorage(object);
  };

  tt.clearStorageSync = function clearStorageSync(object) {
    return my.clearStorageSync(object);
  };

  tt.getStorageInfo = function getStorageInfo(object) {
    return my.getStorageInfo(object);
  };

  tt.getStorageInfoSync = function getStorageInfoSync() {
    return my.getStorageInfoSync();
  };

  // ////// 地理位置  ///////


  tt.getLocation = function getLocation(object) {
    return my.getLocation(object);
  };

  tt.chooseLocation = function chooseLocation(object) {
    return my.chooseLocation(object);
  };

  tt.openLocation = function openLocation(tt_object) {
    var latitude = tt_object.latitude;
    var longitude = tt_object.longitude;
    var name = tt_object.name || '';
    var address = tt_object.address || '';
    var success = tt_object.success;
    var fail = tt_object.fail;
    var complete = tt_object.complete;
    tt_object = null;
    var ali_res = {
      latitude: latitude,
      longitude: longitude,
      name: name,
      address: address,
      success: success,
      fail: fail,
      complete: complete
    };
    return my.openLocation(ali_res);
  };

  // ////// 网络状态  ///////


  tt.getNetworkType = function getNetworkType(object) {
    return my.getNetworkType(object);
  };

  tt.onNetworkStatusChange = function onNetworkStatusChange(callback) {
    return my.onNetworkStatusChange(callback);
  };

  tt.getWifiList = function getWifiList(object) {
    return my.getWifiList(object);
  };

  tt.onGetWifiList = function onGetWifiList(object) {
    return my.onGetWifiList(object);
  };

  tt.offGetWifiList = function offGetWifiList(object) {
    return my.offGetWifiList(object);
  };

  // ////// 系统信息  ///////


  tt.getSystemInfo = function getSystemInfo(object) {
    return my.getSystemInfo(object);
  };

  tt.getSystemInfoSync = function getSystemInfoSync() {
    return my.getSystemInfoSync();
  };

  tt.getConnectedWifi = function getConnectedWifi(object) {
    return my.getConnectedWifi(object);
  };

  // ////// 加速度计  ///////


  tt.onAccelerometerChange = function onAccelerometerChange(callback) {
    my.onAccelerometerChange(function (res) {
      if (tt._stopAccelerometer) {
        return;
      }
      callback(res);
    });
  };

  tt.offAccelerometerChange = function offAccelerometerChange(callback) {
    my.offAccelerometerChange(function (res) {
      if (tt._stopAccelerometer) {
        return;
      }
      callback(res);
    });
  };

  tt.stopAccelerometer = function stopAccelerometer(tt_object) {
    tt._stopAccelerometer = true;
    if (tt_object.success) {
      tt_object.success();
    }
    if (tt_object.complete) {
      tt_object.complete();
    }
  };

  tt.startAccelerometer = function startAccelerometer(tt_object) {
    tt._stopAccelerometer = false;
    if (tt_object.success) {
      tt_object.success();
    }
    if (tt_object.complete) {
      tt_object.complete();
    }
  };

  // ////// 罗盘  ///////


  tt.onCompassChange = function onCompassChange(callback) {
    my.onCompassChange(function (res) {
      if (tt._stopCompass) {
        return;
      }
      callback(res);
    });
  };

  tt.stopCompass = function stopCompass(tt_object) {
    tt._stopCompass = true;
    if (tt_object.success) {
      tt_object.success();
    }
    if (tt_object.complete) {
      tt_object.complete();
    }
  };

  tt.startCompass = function startCompass(tt_object) {
    tt._stopCompass = false;
    if (tt_object.success) {
      tt_object.success();
    }
    if (tt_object.complete) {
      tt_object.complete();
    }
  };

  // ////// 拨打电话  ///////


  tt.makePhoneCall = function makePhoneCall(tt_object) {
    var tt_phoneNumber = tt_object.phoneNumber;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var number = tt_phoneNumber;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.makePhoneCall({
        number: number,
        success: function success() {
          var tt_res = {
            errMsg: 'makePhoneCall: ok'
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  // ////// 扫码  ///////


  tt.scanCode = function scanCode(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.scan({
        success: function success(my_res) {
          var tt_res = {
            errMsg: 'scanCode: ok',
            result: my_res.code,
            qrCode: my_res.qrCode,
            barCode: my_res.barCode,
            codeType: my_res.codeType,
            codeContent: my_res.codeContent,
            imageChannel: my_res.imageChannel,
            rawData: my_res.rawData
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  // ////// 剪切板  ///////


  tt.getClipboardData = function getClipboardData(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getClipboard({
        success: function success(my_res) {
          var tt_res = {
            errMsg: 'getClipboardData: ok',
            data: my_res.text
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.setClipboardData = function setClipboardData(tt_object) {
    var tt_data = tt_object.data;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var text = tt_data;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.setClipboard({
        text: text,
        success: function success() {
          var tt_res = {
            errMsg: 'setClipboardData: ok'
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  // ////// 屏幕  ///////


  tt.setKeepScreenOn = function setKeepScreenOn(object) {
    return my.setKeepScreenOn(object);
  };

  tt.onUserCaptureScreen = function onUserCaptureScreen(callback) {
    return my.onUserCaptureScreen(callback);
  };

  tt.offUserCaptureScreen = function offUserCaptureScreen(callback) {
    return my.offUserCaptureScreen(callback);
  };

  tt.getScreenBrightness = function getScreenBrightness(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getScreenBrightness({
        success: function success(my_res) {
          var tt_res = {
            errMsg: 'getScreenBrightness: ok',
            value: my_res.brightness
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.setScreenBrightness = function setScreenBrightness(tt_object) {
    var tt_value = tt_object.value;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var brightness = tt_value;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.setScreenBrightness({
        brightness: brightness,
        success: function success() {
          var tt_res = {
            errMsg: 'setScreenBrightness: ok'
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  // ////// 震动  ///////


  tt.vibrateShort = function vibrateShort(object) {
    return my.vibrateShort(object);
  };

  tt.vibrateLong = function vibrateLong(object) {
    return my.vibrateLong(object);
  };

  // ////// 性能  ///////


  tt.onMemoryWarning = function onMemoryWarning(callback) {
    return my.onMemoryWarning(callback);
  };

  // ////// 界面  ///////


  tt.showToast = function showToast(tt_object) {
    var tt_title = tt_object.title;
    var tt_icon = tt_object.icon || 'success';
    var tt_duration = tt_object.duration || 1500;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var content = tt_title;
    var type = tt_icon;
    var duration = tt_duration;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.showToast({
        content: content,
        type: type,
        duration: duration,
        success: function success() {
          var tt_res = {
            errMsg: 'showToast: ok'
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.hideToast = function hideToast(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.hideToast({
        success: function success() {
          var tt_res = {
            errMsg: 'hideToast: ok'
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.showLoading = function showLoading(tt_object) {
    var tt_title = tt_object.title;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var content = tt_title;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.showLoading({
        content: content,
        success: function success() {
          var tt_res = {
            errMsg: 'showLoading: ok'
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.hideLoading = function hideLoading(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.hideLoading({
        success: function success() {
          var tt_res = {
            errMsg: 'hideLoading: ok'
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.showModal = function showModal(tt_object) {
    var tt_title = tt_object.title;
    var tt_content = tt_object.content;
    var tt_confirmText = tt_object.confirmText || '确定';
    var tt_cancelText = tt_object.cancelText || '取消';
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var title = tt_title;
    var content = tt_content;
    var confirmButtonText = tt_confirmText;
    var cancelButtonText = tt_cancelText;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.confirm({
        title: title,
        content: content,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        success: function success(my_res) {
          if (my_res.confirm) {
            var tt_res = {
              errMsg: 'showModal: ok',
              confirm: true,
              cancel: false
            };
            SUCCESS(tt_res);
          } else {
            var _tt_res = {
              errMsg: 'showModal: ok',
              confirm: false,
              cancel: true
            };
            SUCCESS(_tt_res);
          }
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.showActionSheet = function showActionSheet(tt_object) {
    var tt_itemList = tt_object.itemList;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var items = tt_itemList;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.showActionSheet({
        items: items,
        success: function success(my_res) {
          var tt_res = {
            errMsg: 'hideLoading: ok',
            tapIndex: my_res.index
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.showFavoriteGuide = function showFavoriteGuide() {
    return console.warn('showFavoriteGuide is not support');
  };

  tt.showInteractionBar = function showInteractionBar() {
    return console.warn('showInteractionBar is not support');
  };

  tt.hideInteractionBar = function hideInteractionBar() {
    return console.warn('hideInteractionBar is not support');
  };

  // ////// 导航栏  ///////


  tt.showNavigationBarLoading = function showNavigationBarLoading(object) {
    return my.showNavigationBarLoading(object);
  };

  tt.hideNavigationBarLoading = function hideNavigationBarLoading(object) {
    return my.hideNavigationBarLoading(object);
  };

  tt.hideHomeButton = function hideHomeButton(object) {
    return my.hideBackHome(object);
  };

  tt.setNavigationBarTitle = function setNavigationBarTitle(tt_object) {
    var tt_title = tt_object.title;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var title = tt_title;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.setNavigationBar({
        title: title,
        success: function success() {
          var tt_res = {
            errMsg: 'setNavigationBarTitle: ok'
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.setNavigationBarColor = function setNavigationBarColor(tt_object) {
    var tt_backgroundColor = tt_object.backgroundColor;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var backgroundColor = tt_backgroundColor;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.setNavigationBar({
        backgroundColor: backgroundColor,
        success: function success() {
          var tt_res = {
            errMsg: 'setNavigationBarColor: ok'
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.getMenuButtonBoundingClientRect = function getMenuButtonBoundingClientRect() {
    return my.getMenuButtonBoundingClientRect();
  };

  // ////// 动画  ///////


  tt.createAnimation = function createAnimation(object) {
    return my.createAnimation(object);
  };

  // ////// 页面位置  ///////


  tt.pageScrollTo = function pageScrollTo(object) {
    return my.pageScrollTo(object);
  };

  // ////// canvas  ///////


  tt.createCanvasContext = function createCanvasContext(id) {
    return my.createCanvasContext(id);
  };

  tt.createOffscreenCanvas = function createOffscreenCanvas() {
    return console.warn('createOffscreenCanvas is not support');
  };

  tt.canvasToTempFilePath = function canvasToTempFilePath(tt_object) {
    var tt_canvasId = tt_object.canvasId;
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var canvasId = tt_canvasId;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.canvasToTempFilePath({
        canvasId: canvasId,
        success: function success(my_res) {
          var tt_res = {
            errMsg: 'canvasToTempFilePath: ok',
            tempFilePath: my_res.apFilePath
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  // ////// 下拉刷新  ///////


  tt.startPullDownRefresh = function startPullDownRefresh(object) {
    return my.startPullDownRefresh(object);
  };

  tt.stopPullDownRefresh = function stopPullDownRefresh(object) {
    return my.stopPullDownRefresh(object);
  };

  // ////// TabBar  ///////


  tt.showTabBarRedDot = function showTabBarRedDot(object) {
    return my.showTabBarRedDot(object);
  };

  tt.showTabBar = function showTabBar(object) {
    return my.showTabBar(object);
  };

  tt.setTabBarStyle = function setTabBarStyle(tt_object) {
    var tt_color = tt_object.color || '#ff3377';
    var tt_selectedColor = tt_object.selectedColor || '#ff3377';
    var tt_backgroundColor = tt_object.backgroundColor || '#ffffff';
    var tt_borderStyle = tt_object.borderStyle || 'black';
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var color = tt_color;
    var selectedColor = tt_selectedColor;
    var backgroundColor = tt_backgroundColor;
    var borderStyle = tt_borderStyle;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.setTabBarStyle({
        color: color,
        selectedColor: selectedColor,
        backgroundColor: backgroundColor,
        borderStyle: borderStyle,
        success: function success() {
          var tt_res = {
            errMsg: 'setTabBarStyle: ok'
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.setTabBarItem = function setTabBarItem(tt_object) {
    var tt_index = tt_object.index;
    var tt_text = tt_object.text || '';
    var tt_iconPath = tt_object.iconPath || '';
    var tt_selectedIconPath = tt_object.selectedIconPath || '';
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    var index = tt_index;
    var text = tt_text;
    var iconPath = tt_iconPath;
    var selectedIconPath = tt_selectedIconPath;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.setTabBarItem({
        index: index,
        text: text,
        iconPath: iconPath,
        selectedIconPath: selectedIconPath,
        success: function success() {
          var tt_res = {
            errMsg: 'setTabBarItem: ok'
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.setTabBarBadge = function setTabBarBadge(object) {
    return my.setTabBarBadge(object);
  };

  tt.removeTabBarBadge = function removeTabBarBadge(object) {
    return my.removeTabBarBadge(object);
  };

  tt.hideTabBarRedDot = function hideTabBarRedDot(object) {
    return my.hideTabBarRedDot(object);
  };

  tt.hideTabBar = function hideTabBar(object) {
    return my.hideTabBar(object);
  };

  // ////// 导航  ///////


  tt.navigateTo = function navigateTo(object) {
    return my.navigateTo(object);
  };

  tt.redirectTo = function redirectTo(object) {
    return my.redirectTo(object);
  };

  tt.switchTab = function switchTab(object) {
    return my.switchTab(object);
  };

  tt.navigateBack = function navigateBack(object) {
    return my.navigateBack(object);
  };

  tt.reLaunch = function reLaunch(object) {
    return my.reLaunch(object);
  };

  // ////// 转发  ///////


  tt.showShareMenu = function showShareMenu() {};

  tt.hideShareMenu = function hideShareMenu(object) {
    return my.hideShareMenu(object);
  };

  tt.navigateToVideoView = function navigateToVideoView() {
    return console.warn('navigateToVideoView is not support');
  };

  // ////// 第三方平台  ///////


  tt.getExtConfig = function getExtConfig(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getExtConfig({
        success: function success(my_res) {
          var tt_res = {
            errMsg: 'getExtConfig: ok',
            extConfig: my_res.data
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  tt.getExtConfigSync = function getExtConfigSync(tt_object) {
    var tt_success = tt_object.success;
    var tt_fail = tt_object.fail;
    var tt_complete = tt_object.complete;
    tt_object = null;
    (0, _PROMISE2.default)(function (SUCCESS) {
      my.getExtConfigSync({
        success: function success(my_res) {
          var tt_res = {
            errMsg: 'getExtConfig: ok',
            extConfig: my_res.data
          };
          SUCCESS(tt_res);
        }
      });
    }, tt_success, tt_fail, tt_complete);
  };

  // ////// TTML  ///////


  tt.createSelectorQuery = function createSelectorQuery() {
    return new _SelectorQuery2.default();
  };

  tt.createIntersectionObserver = function createIntersectionObserver(object) {
    return my.createIntersectionObserver(object);
  };

  return tt;
}();

exports.default = tt;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.GLOBAL = exports.tt = exports.OnekitPage = exports.OnekitComponent = exports.OnekitBehavior = exports.OnekitApp = void 0;
var OnekitApp_1 = __webpack_require__(28);
exports.OnekitApp = OnekitApp_1.default;
var OnekitBehavior_1 = __webpack_require__(29);
exports.OnekitBehavior = OnekitBehavior_1.default;
var OnekitComponent_1 = __webpack_require__(33);
exports.OnekitComponent = OnekitComponent_1.default;
var OnekitPage_1 = __webpack_require__(34);
exports.OnekitPage = OnekitPage_1.default;
var tt_1 = __webpack_require__(3);
exports.tt = tt_1.default;
var global_1 = __webpack_require__(35);
exports.GLOBAL = global_1.default;

/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitBehavior;

var _oneutil = __webpack_require__(2);

var _oneutil2 = _interopRequireDefault(_oneutil);

var _tt = __webpack_require__(3);

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
/* 30 */
/***/ (function(module, exports) {

module.exports = require("oneutil/PROMISE");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _NodesRef = __webpack_require__(32);

var _NodesRef2 = _interopRequireDefault(_NodesRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable no-console */
/* eslint-disable camelcase */


// import VideoContext from './VideoContext'

function _fix(selector) {
  if (selector.startsWith('#')) {
    return '_' + selector.substring(1);
  } else if (selector.startsWith('.')) {
    return '__' + selector.substring(1);
  } else {
    throw new Error(selector);
  }
}

var SelectorQuery = function () {
  function SelectorQuery() {
    _classCallCheck(this, SelectorQuery);

    this.tasks = [];
  }

  SelectorQuery.prototype.in = function _in() {
    return this;
  };

  SelectorQuery.prototype.select = function select(selector) {
    return new _NodesRef2.default(this, 'select', selector);
  };

  SelectorQuery.prototype.selectAll = function selectAll() {
    return new _NodesRef2.default(this, 'selectAll');
  };

  SelectorQuery.prototype.selectViewport = function selectViewport() {
    return new _NodesRef2.default(this, 'selectViewport');
  };

  SelectorQuery.prototype.exec = function exec(callback) {
    var that = this;
    var results = [];
    var i = 0;

    function done(nodeRef, res) {
      if (nodeRef.callback) {
        nodeRef.callback(res);
      }
      results.push(res);
      if (results.length < that.tasks.length) {
        i++;
        // eslint-disable-next-line no-use-before-define
        next();
        return;
      }

      callback(results);
    }

    function next() {
      var task = that.tasks[i];
      var aliapySelectQuery = my.createSelectorQuery();
      var nodeRef = task.nodeRef;
      var alipayNodeRef = void 0;
      switch (nodeRef.cmd) {
        case 'select':
          alipayNodeRef = aliapySelectQuery.select(nodeRef.selector);
          break;
        case 'selectAll':
          alipayNodeRef = aliapySelectQuery.selectAll();
          break;
        case 'selectViewport':
          alipayNodeRef = aliapySelectQuery.selectViewport();
          break;
        default:
          throw new Error(task.cmd);
      }
      var wx_res = {};
      switch (task.type) {
        case 'boundingClientRect':
          alipayNodeRef.boundingClientRect().exec(function (my_reses) {
            return done(nodeRef, my_reses[0]);
          });
          break;
        case 'context':
          {
            var node = getApp().onekit_nodes[_fix(nodeRef.selector)];
            // const id = node.props.onekitId
            /* let context
            switch (node.is) {
              case '/weixin2alipay/ui/canvas/canvas':
                context = my.createCanvasContext(id)
                break
              case '/weixin2alipay/ui/video/video':
                context = new VideoContext(my.createVideoContext(id), id)
                break
              default:
                throw new Error(node.is)
            } */
            var context = node.getContext();
            wx_res.context = context;
            done(nodeRef, wx_res);
          }
          break;
        case 'fields':
          alipayNodeRef.boundingClientRect().exec(function (my_reses) {
            var my_res = my_reses[0];
            if (nodeRef.fields.size) {
              wx_res.width = my_res.width;
              wx_res.height = my_res.height;
            }
            if (nodeRef.fields.node && nodeRef.selector) {
              wx_res.node = getApp().onekit_nodes[_fix(nodeRef.selector)];
            }
            done(nodeRef, wx_res);
          });
          break;

        case 'node':
          if (nodeRef.selector) {
            wx_res.node = getApp().onekit_nodes[_fix(nodeRef.selector)];
          }
          done(nodeRef, wx_res);
          break;

        case 'scrollOffset':
          alipayNodeRef.scrollOffset().exec(function (my_reses) {
            var my_res = my_reses[0];
            var wx_res = {
              id: nodeRef.selector,
              dataset: {},
              scrollLeft: my_res.scrollLeft,
              scrollTop: my_res.scrollTop,
              scrollWidth: my_res.scroll,
              scrollHeight: my_res.scrollHeight
            };
            done(nodeRef, wx_res);
          });
          break;
        default:
          throw new Error(task.type);
      }
    }
    next();
  };

  return SelectorQuery;
}();

exports.default = SelectorQuery;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */
/* eslint-disable camelcase */
var NodesRef = function () {
  function NodesRef(alipayCameraContext, cmd, selector) {
    _classCallCheck(this, NodesRef);

    this._selectQuery = alipayCameraContext;
    this.cmd = cmd;
    this.selector = selector;
  }

  NodesRef.prototype.boundingClientRect = function boundingClientRect(callback) {
    this.callback = callback;
    this._selectQuery.tasks.push({ type: 'boundingClientRect', nodeRef: this });
    return this._selectQuery;
  };

  NodesRef.prototype.context = function context(callback) {
    this.callback = callback;
    this._selectQuery.tasks.push({ type: 'context', nodeRef: this });
    return this._selectQuery;
  };

  NodesRef.prototype.fields = function fields(_fields, callback) {
    this.fields = _fields;
    this.callback = callback;
    this._selectQuery.tasks.push({ type: 'fields', nodeRef: this });
    return this._selectQuery;
  };

  NodesRef.prototype.node = function node(callback) {
    this.callback = callback;
    this._selectQuery.tasks.push({ type: 'node', nodeRef: this });
    return this._selectQuery;
  };

  NodesRef.prototype.scrollOffset = function scrollOffset(callback) {
    this.callback = callback;
    this._selectQuery.tasks.push({ type: 'scrollOffset', nodeRef: this });
    return this._selectQuery;
  };

  return NodesRef;
}();

exports.default = NodesRef;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitComponent;

var _oneutil = __webpack_require__(2);

var _oneutil2 = _interopRequireDefault(_oneutil);

var _tt = __webpack_require__(3);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitPage;
/* eslint-disable no-console */
/* eslint-disable camelcase */
function OnekitPage(swan_object) {
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
    onLoad: function onLoad(options) {
      this._setData = this.setData;
      this.setData = function (keyOrData, value) {
        if (typeof keyOrData === 'string') {
          var data = {};
          data[keyOrData] = value;
          this._setData(data);
        } else {
          this._setData(keyOrData);
        }
      };
      if (swan_object.onLoad) {
        swan_object.onLoad.call(this, options || {});
      }
    },
    onReady: function onReady() {
      if (swan_object.onLoad) {
        swan_object.onLoad.call(this, this.query);
      }
      if (swan_object.onReady) {
        swan_object.onReady.call(this);
      }
    },
    getData: function getData(key) {
      return this.data[key];
    },
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
  if (swan_object.behaviors) {
    for (var _iterator4 = swan_object.behaviors, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
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
  for (var _iterator7 = Object.keys(swan_object), _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
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

    var value = swan_object[key];
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
/* 35 */
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
/******/ ]);