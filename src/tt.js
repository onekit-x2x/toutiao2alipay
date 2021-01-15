/* eslint-disable no-octal */
/* eslint-disable camelcase */
/* eslint-disable no-console */

import PROMISE from '../node_modules/oneutil/PROMISE'

export default class tt {
  // ///////////  基础 ////////////
  static canIUse(schema) {
    return my.canIUse(schema)
  }

  static base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+')
    const commonContent = Buffer.from(base64, 'base64')
    return commonContent
  }

  static arrayBufferToBase64(arrayBuffer) {
    const base64Content = Buffer.from(arrayBuffer).toString('base64')
    return base64Content
  }

  static canIPutStuffOverComponent() {
    return true
  }

  static getUpdateManager() {
    return my.getUpdateManager()
  }

  static onAppShow(callback) {
    return my.onAppShow(callback)
  }

  static offAppShow(callback) {
    return my.offAppShow(callback)
  }

  static onAppHide(callback) {
    return my.onAppHide(callback)
  }

  static offAppHide(callback) {
    return my.offAppHide(callback)
  }

  static onError(callback) {
    return my.onError(callback)
  }

  static offError(callback) {
    return my.offError(callback)
  }

  static env() {
    const my_res = my.env
    const tt_res = {
      USER_DATA_PATH: my_res.USER_DATA_PATH,
      VERSION: 'development',
      clientName: my_res.clientName,
      clientVersion: my_res.clientVersion,
      language: my_res.language,
      platform: my_res.platform,
    }
    return tt_res
  }

  // ///////////  网络  ////////////
  static downloadFile(tt_object) {
    const tt_url = tt_object.url
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const url = tt_url
    PROMISE((SUCCESS) => {
      my.downloadFile({
        url,
        success: tt_res => {
          const my_res = {
            tempFilePath: tt_res.apFilePath,
            statusCode: 200
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static request(tt_object) {
    const tt_url = tt_object.url
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const url = tt_url
    PROMISE((SUCCESS) => {
      my.request({
        url,
        success: tt_res => {
          const my_res = {
            data: tt_res.data,
            statusCode: tt_res.status,
            header: tt_res.headers
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static uploadFile(tt_object) {
    const tt_url = tt_object.url
    const tt_filePath = tt_object.filePath
    const tt_name = tt_object.name
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const url = tt_url
    const filePath = tt_filePath
    const fileName = tt_name
    const fileType = 'image'
    PROMISE((SUCCESS) => {
      my.uploadFile({
        url,
        filePath,
        fileName,
        fileType,
        success: tt_res => {
          const my_res = {
            data: tt_res.data,
            statusCode: tt_res.statusCode,
            header: tt_res.header
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static connectSocket(tt_object) {
    const tt_url = tt_object.url
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const url = tt_url
    PROMISE((SUCCESS) => {
      my.connectSocket({
        url,
        success: () => {
          const my_res = {
            errMsg: 'connectSocket: ok',
            socketTaskId: 1
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  // ///////////  媒体  ////////////
  // ////// 图片  ///////
  static chooseImage(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.chooseImage({
        success: tt_res => {
          const my_res = {
            tempFiles: tt_res.apFilePaths,
            tempFilePaths: tt_res.tempFilePaths
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static saveImageToPhotosAlbum(tt_object) {
    const url = tt_object.filePath
    const success = tt_object.success
    const fail = tt_object.fail
    const complete = tt_object.complete
    tt_object = null
    const my_object = {
      url,
      success,
      fail,
      complete
    }
    return my.saveImage(my_object)
  }

  static previewImage(object) {
    return my.previewImage(object)
  }

  static getImageInfo(tt_object) {
    const tt_src = tt_object.src
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const src = tt_src
    PROMISE((SUCCESS) => {
      my.getImageInfo({
        src,
        success: tt_res => {
          const my_res = {
            errMsg: 'getImageInfo: ok',
            width: tt_res.width,
            height: tt_res.height,
            type: tt_res.type,
            path: tt_res.path,
            orientation: tt_res.orientation
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static compressImage(tt_object) {
    const tt_src = tt_object.src
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const apFilePaths = [tt_src]
    PROMISE((SUCCESS) => {
      my.compressImage({
        apFilePaths,
        success: tt_res => {
          const my_res = {
            errMsg: 'compressImage: ok',
            tempFilePath: tt_res.apFilePaths[0]
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  // ////// 录音  ///////
  static getRecorderManager() {
    return my.getRecorderManager()
  }

  // ////// 音频  ///////
  static createInnerAudioContext() {
    return my.createInnerAudioContext()
  }

  static getBackgroundAudioManager() {
    return my.getBackgroundAudioManager()
  }

  // ////// 视频  ///////
  static createVideoContext(id) {
    return my.createVideoContext(id)
  }

  static chooseVideo(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.chooseVideo({
        success: tt_res => {
          const my_res = {
            errMsg: 'chooseVideo: ok',
            tempFilePath: tt_res.tempFilePath,
            duration: tt_res.duration,
            size: tt_res.size,
            width: tt_res.width,
            height: tt_res.height,
            apFilePath: tt_res.apFilePath,
            filePath: tt_res.filePath,
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static saveVideoToPhotosAlbum(tt_object) {
    const src = tt_object.filePath
    const success = tt_object.success
    const fail = tt_object.fail
    const complete = tt_object.complete
    tt_object = null
    const my_object = {
      src,
      success,
      fail,
      complete
    }
    return my.saveVideoToPhotosAlbum(my_object)
  }

  static createLivePlayerContext(id) {
    return my.createVideoContext(id)
  }

  // ////// 相机  ///////
  static createCameraContext() {
    return my.createCameraContext()
  }

  // ////// 地图  ///////
  static createMapContext(mapId) {
    return my.createMapContext(mapId)
  }

  // ////// 文件  ///////
  static saveFile(tt_object) {
    const tt_tempFilePath = tt_object.tempFilePath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const apFilePath = tt_tempFilePath
    PROMISE((SUCCESS) => {
      my.saveFile({
        apFilePath,
        success: tt_res => {
          const my_res = {
            errMsg: 'saveFile: ok',
            savedFilePath: tt_res.apFilePath
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static getFileInfo(tt_object) {
    const tt_filePath = tt_object.filePath
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const apFilePath = tt_filePath
    PROMISE((SUCCESS) => {
      my.getFileInfo({
        apFilePath,
        success: tt_res => {
          const my_res = {
            errMsg: 'getFileInfo: ok',
            size: tt_res.size,
            digest: tt_res.digest
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static getSavedFileList(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.getSavedFileList({
        success: tt_res => {
          const tt_fileList = tt_res.fileList.map(file => ({
            size: file.size,
            filePath: file.apFilePath,
            createTime: file.createTime,
          }))
          const my_res = {
            errMsg: 'getSavedFileList: ok',
            fileList: tt_fileList
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static openDocument(tt_object) {
    const tt_filePath = tt_object.filePath
    const tt_fileType = tt_object.fileType || 'pdf'
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const apFilePath = tt_filePath
    const fileType = tt_fileType
    PROMISE((SUCCESS) => {
      my.openDocument({
        apFilePath,
        fileType,
        success: () => {
          const my_res = {
            errMsg: 'openDocument: ok',
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static removeSavedFile(tt_object) {
    const apFilePath = tt_object.filePath
    const success = tt_object.success
    const fail = tt_object.fail
    const complete = tt_object.complete
    tt_object = null
    const my_object = {
      apFilePath,
      success,
      fail,
      complete
    }
    return my.removeSavedFile(my_object)
  }

  static getFileSystemManager() {
    return my.getFileSystemManager()
  }

  // ////// 开放接口  ///////
  static login(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.getAuthCode({
        success: tt_res => {
          const my_res = {
            errMsg: 'login: ok',
            code: tt_res.authCode,
            anonymousCode: null,
            isLogin: true,
            authErrorScopes: tt_res.authErrorScopes,
            authSuccessScopes: tt_res.authSuccessScopes,
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static checkSession() {
    return console.warn('checkSession is not support')
  }

  static getUserInfo(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.getUserInfo({
        success: tt_res => {
          const tt_userInfo = {
            gender: 0,
            nickName: tt_res.nickName,
            avatarUrl: tt_res.avatar,
            city: '',
            province: '',
            country: '',
            language: '',
          }
          const my_res = {
            errMsg: 'getUserInfo: ok',
            userInfo: tt_userInfo,
            rawData: JSON.stringify(tt_userInfo)
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static pay() {
    return console.warn('pay is not support')
  }

  // ////// 广告  ///////
  static createRewardedVideoAd() {
    return console.warn('createRewardedVideoAd is not support')
  }

  static createInterstitialAd() {
    return console.warn('createInterstitialAd is not support')
  }

  // ////// 跳转  ///////
  static navigateToMiniProgram(object) {
    return my.navigateToMiniProgram(object)
  }

  static navigateBackMiniProgram(object) {
    return my.navigateBackMiniProgram(object)
  }

  // ////// 转发  ///////
  static chooseAddress(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.getAddress({
        success: tt_res => {
          const my_res = {
            errMsg: 'chooseAddress: ok',
            userName: tt_res.fullname,
            provinceName: tt_res.prov,
            cityName: tt_res.city,
            countyName: tt_res.country,
            detailInfo: tt_res.address,
            telNumber: tt_res.mobilePhone,
            area: tt_res.area,
            street: tt_res.street,
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  // ////// 设置  ///////
  static getSetting(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.getSetting({
        success: tt_res => {
          const my_res = {
            errMsg: 'getSetting: ok',
            'scope.userInfo': tt_res.userinfo,
            'scope.userLocation': tt_res.location,
            'scope.address': tt_res.aliaddress,
            'scope.record': false,
            'scope.album': tt_res.album,
            'scope.camera': tt_res.camera
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static openSetting(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.openSetting({
        success: tt_res => {
          const my_res = {
            errMsg: 'openSetting: ok',
            'scope.userInfo': tt_res.userinfo,
            'scope.userLocation': tt_res.location,
            'scope.address': false,
            'scope.record': false,
            'scope.album': tt_res.album,
            'scope.camera': tt_res.camera
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  // ////// 授权  ///////
  static authorize(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.getAuthCode({
        success: tt_res => {
          const my_res = {
            errMsg: 'authorize: ok',
            authCode: tt_res.authCode,
            authErrorScopes: tt_res.authErrorScopes,
            authSuccessScopes: tt_res.authSuccessScopes,
          }
          SUCCESS(my_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static reportAnalytics(object) {
    return my.reportAnalytics(object)
  }

  static followOfficialAccount() {
    return console.warn('followOfficialAccount is not support')
  }

  static checkFollowState() {
    return console.warn('checkFollowState is not support')
  }

  static requestSubscribeMessage() {
    return console.warn('requestSubscribeMessage is not support')
  }

  // ////// 数据缓存  ///////
  static getStorage(object) {
    return my.getStorage(object)
  }

  static getStorageSync(key) {
    return my.getStorageSync(key)
  }

  static setStorage(key, data) {
    return my.setStorage(key, data)
  }

  static setStorageSync(key, data) {
    return my.setStorageSync(key, data)
  }

  static removeStorage(key) {
    return my.removeStorage(key)
  }

  static removeStorageSync(key) {
    return my.removeStorageSync(key)
  }

  static clearStorage(object) {
    return my.clearStorage(object)
  }

  static clearStorageSync(object) {
    return my.clearStorageSync(object)
  }

  static getStorageInfo(object) {
    return my.getStorageInfo(object)
  }

  static getStorageInfoSync() {
    return my.getStorageInfoSync()
  }

  // ////// 地理位置  ///////
  static getLocation(object) {
    return my.getLocation(object)
  }

  static chooseLocation(object) {
    return my.chooseLocation(object)
  }

  static openLocation(tt_object) {
    const latitude = tt_object.latitude
    const longitude = tt_object.longitude
    const name = tt_object.name || ''
    const address = tt_object.address || ''
    const success = tt_object.success
    const fail = tt_object.fail
    const complete = tt_object.complete
    tt_object = null
    const ali_res = {
      latitude,
      longitude,
      name,
      address,
      success,
      fail,
      complete
    }
    return my.openLocation(ali_res)
  }

  // ////// 网络状态  ///////
  static getNetworkType(object) {
    return my.getNetworkType(object)
  }

  static onNetworkStatusChange(callback) {
    return my.onNetworkStatusChange(callback)
  }

  static getWifiList(object) {
    return my.getWifiList(object)
  }

  static onGetWifiList(object) {
    return my.onGetWifiList(object)
  }

  static offGetWifiList(object) {
    return my.offGetWifiList(object)
  }

  // ////// 系统信息  ///////
  static getSystemInfo(object) {
    return my.getSystemInfo(object)
  }

  static getSystemInfoSync() {
    return my.getSystemInfoSync()
  }

  static getConnectedWifi(object) {
    return my.getConnectedWifi(object)
  }

  // ////// 加速度计  ///////
  static onAccelerometerChange(callback) {
    my.onAccelerometerChange(function (res) {
      if (tt._stopAccelerometer) {
        return
      }
      callback(res)
    })
  }

  static offAccelerometerChange(callback) {
    my.offAccelerometerChange(function (res) {
      if (tt._stopAccelerometer) {
        return
      }
      callback(res)
    })
  }

  static stopAccelerometer(tt_object) {
    tt._stopAccelerometer = true
    if (tt_object.success) {
      tt_object.success()
    }
    if (tt_object.complete) {
      tt_object.complete()
    }
  }

  static startAccelerometer(tt_object) {
    tt._stopAccelerometer = false
    if (tt_object.success) {
      tt_object.success()
    }
    if (tt_object.complete) {
      tt_object.complete()
    }
  }

  // ////// 罗盘  ///////
  static onCompassChange(callback) {
    my.onCompassChange(function (res) {
      if (tt._stopCompass) {
        return
      }
      callback(res)
    })
  }

  static stopCompass(tt_object) {
    tt._stopCompass = true
    if (tt_object.success) {
      tt_object.success()
    }
    if (tt_object.complete) {
      tt_object.complete()
    }
  }

  static startCompass(tt_object) {
    tt._stopCompass = false
    if (tt_object.success) {
      tt_object.success()
    }
    if (tt_object.complete) {
      tt_object.complete()
    }
  }

  // ////// 拨打电话  ///////
  static makePhoneCall(tt_object) {
    const tt_phoneNumber = tt_object.phoneNumber
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const number = tt_phoneNumber
    PROMISE((SUCCESS) => {
      my.makePhoneCall({
        number,
        success: () => {
          const tt_res = {
            errMsg: 'makePhoneCall: ok'
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  // ////// 扫码  ///////
  static scanCode(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.scan({
        success: my_res => {
          const tt_res = {
            errMsg: 'scanCode: ok',
            result: my_res.code,
            qrCode: my_res.qrCode,
            barCode: my_res.barCode,
            codeType: my_res.codeType,
            codeContent: my_res.codeContent,
            imageChannel: my_res.imageChannel,
            rawData: my_res.rawData,
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  // ////// 剪切板  ///////
  static getClipboardData(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.getClipboard({
        success: my_res => {
          const tt_res = {
            errMsg: 'getClipboardData: ok',
            data: my_res.text
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static setClipboardData(tt_object) {
    const tt_data = tt_object.data
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const text = tt_data
    PROMISE((SUCCESS) => {
      my.setClipboard({
        text,
        success: () => {
          const tt_res = {
            errMsg: 'setClipboardData: ok'
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  // ////// 屏幕  ///////
  static setKeepScreenOn(object) {
    return my.setKeepScreenOn(object)
  }

  static onUserCaptureScreen(callback) {
    return my.onUserCaptureScreen(callback)
  }

  static offUserCaptureScreen(callback) {
    return my.offUserCaptureScreen(callback)
  }

  static getScreenBrightness(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.getScreenBrightness({
        success: my_res => {
          const tt_res = {
            errMsg: 'getScreenBrightness: ok',
            value: my_res.brightness
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static setScreenBrightness(tt_object) {
    const tt_value = tt_object.value
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const brightness = tt_value
    PROMISE((SUCCESS) => {
      my.setScreenBrightness({
        brightness,
        success: () => {
          const tt_res = {
            errMsg: 'setScreenBrightness: ok'
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  // ////// 震动  ///////
  static vibrateShort(object) {
    return my.vibrateShort(object)
  }

  static vibrateLong(object) {
    return my.vibrateLong(object)
  }

  // ////// 性能  ///////
  static onMemoryWarning(callback) {
    return my.onMemoryWarning(callback)
  }

  // ////// 界面  ///////
  static showToast(tt_object) {
    const tt_title = tt_object.title
    const tt_icon = tt_object.icon || 'success'
    const tt_duration = tt_object.duration || 1500
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const content = tt_title
    const type = tt_icon
    const duration = tt_duration
    PROMISE((SUCCESS) => {
      my.showToast({
        content,
        type,
        duration,
        success: () => {
          const tt_res = {
            errMsg: 'showToast: ok',
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static hideToast(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.hideToast({
        success: () => {
          const tt_res = {
            errMsg: 'hideToast: ok',
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static showLoading(tt_object) {
    const tt_title = tt_object.title
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const content = tt_title
    PROMISE((SUCCESS) => {
      my.showLoading({
        content,
        success: () => {
          const tt_res = {
            errMsg: 'showLoading: ok',
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static hideLoading(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.hideLoading({
        success: () => {
          const tt_res = {
            errMsg: 'hideLoading: ok',
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static showModal(tt_object) {
    const tt_title = tt_object.title
    const tt_content = tt_object.content
    const tt_confirmText = tt_object.confirmText || '确定'
    const tt_cancelText = tt_object.cancelText || '取消'
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const title = tt_title
    const content = tt_content
    const confirmButtonText = tt_confirmText
    const cancelButtonText = tt_cancelText
    PROMISE((SUCCESS) => {
      my.confirm({
        title,
        content,
        confirmButtonText,
        cancelButtonText,
        success: my_res => {
          if (my_res.confirm) {
            const tt_res = {
              errMsg: 'showModal: ok',
              confirm: true,
              cancel: false
            }
            SUCCESS(tt_res)
          } else {
            const tt_res = {
              errMsg: 'showModal: ok',
              confirm: false,
              cancel: true
            }
            SUCCESS(tt_res)
          }
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static showActionSheet(tt_object) {
    const tt_itemList = tt_object.itemList
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const items = tt_itemList
    PROMISE((SUCCESS) => {
      my.showActionSheet({
        items,
        success: my_res => {
          const tt_res = {
            errMsg: 'hideLoading: ok',
            tapIndex: my_res.index
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static showFavoriteGuide() {
    return console.warn('showFavoriteGuide is not support')
  }

  static showInteractionBar() {
    return console.warn('showInteractionBar is not support')
  }

  static hideInteractionBar() {
    return console.warn('hideInteractionBar is not support')
  }

  // ////// 导航栏  ///////
  static showNavigationBarLoading(object) {
    return my.showNavigationBarLoading(object)
  }

  static hideNavigationBarLoading(object) {
    return my.hideNavigationBarLoading(object)
  }

  static hideHomeButton(object) {
    return my.hideBackHome(object)
  }

  static setNavigationBarTitle(tt_object) {
    const tt_title = tt_object.title
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const title = tt_title
    PROMISE((SUCCESS) => {
      my.setNavigationBar({
        title,
        success: () => {
          const tt_res = {
            errMsg: 'setNavigationBarTitle: ok'
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static setNavigationBarColor(tt_object) {
    const tt_backgroundColor = tt_object.backgroundColor
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const backgroundColor = tt_backgroundColor
    PROMISE((SUCCESS) => {
      my.setNavigationBar({
        backgroundColor,
        success: () => {
          const tt_res = {
            errMsg: 'setNavigationBarColor: ok'
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static getMenuButtonBoundingClientRect() {
    return my.getMenuButtonBoundingClientRect()
  }

  // ////// 动画  ///////
  static createAnimation(object) {
    return my.createAnimation(object)
  }

  // ////// 页面位置  ///////
  static pageScrollTo(object) {
    return my.pageScrollTo(object)
  }

  // ////// canvas  ///////
  static createCanvasContext(id) {
    return my.createCanvasContext(id)
  }

  static createOffscreenCanvas() {
    return console.warn('createOffscreenCanvas is not support')
  }

  static canvasToTempFilePath(tt_object) {
    const tt_canvasId = tt_object.canvasId
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const canvasId = tt_canvasId
    PROMISE((SUCCESS) => {
      my.canvasToTempFilePath({
        canvasId,
        success: my_res => {
          const tt_res = {
            errMsg: 'canvasToTempFilePath: ok',
            tempFilePath: my_res.apFilePath
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  // ////// 下拉刷新  ///////
  static startPullDownRefresh(object) {
    return my.startPullDownRefresh(object)
  }

  static stopPullDownRefresh(object) {
    return my.stopPullDownRefresh(object)
  }

  // ////// TabBar  ///////
  static showTabBarRedDot(object) {
    return my.showTabBarRedDot(object)
  }

  static showTabBar(object) {
    return my.showTabBar(object)
  }

  static setTabBarStyle(tt_object) {
    const tt_color = tt_object.color || '#ff3377'
    const tt_selectedColor = tt_object.selectedColor || '#ff3377'
    const tt_backgroundColor = tt_object.backgroundColor || '#ffffff'
    const tt_borderStyle = tt_object.borderStyle || 'black'
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const color = tt_color
    const selectedColor = tt_selectedColor
    const backgroundColor = tt_backgroundColor
    const borderStyle = tt_borderStyle
    PROMISE((SUCCESS) => {
      my.setTabBarStyle({
        color,
        selectedColor,
        backgroundColor,
        borderStyle,
        success: () => {
          const tt_res = {
            errMsg: 'setTabBarStyle: ok'
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static setTabBarItem(tt_object) {
    const tt_index = tt_object.index
    const tt_text = tt_object.text || ''
    const tt_iconPath = tt_object.iconPath || ''
    const tt_selectedIconPath = tt_object.selectedIconPath || ''
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    const index = tt_index
    const text = tt_text
    const iconPath = tt_iconPath
    const selectedIconPath = tt_selectedIconPath
    PROMISE((SUCCESS) => {
      my.setTabBarItem({
        index,
        text,
        iconPath,
        selectedIconPath,
        success: () => {
          const tt_res = {
            errMsg: 'setTabBarItem: ok'
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static setTabBarBadge(object) {
    return my.setTabBarBadge(object)
  }

  static removeTabBarBadge(object) {
    return my.removeTabBarBadge(object)
  }

  static hideTabBarRedDot(object) {
    return my.hideTabBarRedDot(object)
  }

  static hideTabBar(object) {
    return my.hideTabBar(object)
  }

  // ////// 导航  ///////
  static navigateTo(object) {
    return my.navigateTo(object)
  }

  static redirectTo(object) {
    return my.redirectTo(object)
  }

  static switchTab(object) {
    return my.switchTab(object)
  }

  static navigateBack(object) {
    return my.navigateBack(object)
  }

  static reLaunch(object) {
    return my.reLaunch(object)
  }

  // ////// 转发  ///////
  static showShareMenu() {

  }

  static hideShareMenu(object) {
    return my.hideShareMenu(object)
  }

  static navigateToVideoView() {
    return console.warn('navigateToVideoView is not support')
  }

  // ////// 第三方平台  ///////
  static getExtConfig(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.getExtConfig({
        success: my_res => {
          const tt_res = {
            errMsg: 'getExtConfig: ok',
            extConfig: my_res.data
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  static getExtConfigSync(tt_object) {
    const tt_success = tt_object.success
    const tt_fail = tt_object.fail
    const tt_complete = tt_object.complete
    tt_object = null
    PROMISE((SUCCESS) => {
      my.getExtConfigSync({
        success: my_res => {
          const tt_res = {
            errMsg: 'getExtConfig: ok',
            extConfig: my_res.data
          }
          SUCCESS(tt_res)
        }
      })
    }, tt_success, tt_fail, tt_complete)
  }

  // ////// TTML  ///////
  static createSelectorQuery() {
    return my.createSelectorQuery()
  }

  static createIntersectionObserver(object) {
    return my.createIntersectionObserver(object)
  }
}
