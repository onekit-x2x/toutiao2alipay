
import onekit from "./onekit"
import VideoContext from "./api/VideoContext"
import CanvasContext from "./api/CanvasContext"
export default class tt {
  // ///////////////// animation //////////////////////////
  static createAnimation(tt_object) {
    return my.createAnimation(tt_object);
  }
  //////////////////onKeyboardHeightChange//////////////////
  static onKeyboardHeightChange(tt_object) {
    //需要编程支持
  }
  // /////////////// basic ////////////////////////////////
  static canIUse(tt_object) { return true; }
  static _getSystemInfo(tt_res) {
    tt_res.SDKVersion = "2.7.0";
    my.openBluetoothAdapter({
      success: (my_res) => {
        // tt_res.bluetoothEnabled = true;
        my.closeBluetoothAdapter();
      },
      fail: (my_res) => {
        // tt_res.bluetoothEnabled = false;
        my.closeBluetoothAdapter();
      }
    });
    my.getNetworkType({
      success: (my_res) => {
        // tt_res.wifiEnabled = (my_res.networkType === "WIFI");
      },
      fail: (my_res) => {
        // tt_res.wifiEnabled = false;
      }
    });
    my.getSetting({
      success: (my_res) => {
        tt_res.locationAuthorized = (my_res.authSetting.location === true);
        tt_res.cameraAuthorized = (my_res.authSetting.camera === true);
        tt_res.microphoneAuthorized = (my_res.authSetting.audioRecord === true);
        tt_res.albumAuthorized = (my_res.authSetting.album === true);
      },
    });
    return tt_res;
  }
  static getSystemInfo(tt_object) {
    var my_object = {};
    my_object.success = function (my_res) {
      var tt_res = {
        errMsg: "getSystemInfo:ok",
        SDKVersion: "2.4.2",
        brand: my_res.brand,
        fontSizeSetting: my_res.fontSizeSetting,
        language: my_res.language,
        model: my_res.model,
        // notificationAuthorized: notificationAuthorized,
        pixelRatio: my_res.pixelRatio,
        platform: my_res.platform,
        safeArea: { height: my_res.screenHeight, width: my_res.screenWidth, bottom: my_res.screenHeight, top: 0, left: 0, right: my_res.screenWidth },
        screenHeight: my_res.screenHeight,
        screenWidth: my_res.screenWidth,
        statusBarHeight: my_res.statusBarHeight,
        system: my_res.system,
        version: my_res.version,
        windowHeight: my_res.windowWidth,
        windowWidth: my_res.windowHeight,
      };

      tt_res = tt._getSystemInfo(tt_res);
      if (tt_object.success) { tt_object.success(tt_res); }
      if (tt_object.fail) { tt_object.fail(tt_res); }
    };
    my_object.fail = function (my_res) {
      if (tt_object.fail) {
        tt_object.fail(my_res);
      }
      if (tt_object.complete) {
        objec.complete(my_res);
      }
    };

    return my.getSystemInfo(my_object);
  }
  static getSystemInfoSync() {
    return my.getSystemInfoSync();
  }
  static base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+');
    let commonContent = Buffer.from(base64, 'base64');
    return commonContent;
  }
  static arrayBufferToBase64(arrayBuffer) {
    let base64Content = Buffer.from(arrayBuffer).toString('base64');
    return base64Content;
  }
  static getUpdateManager(tt_object) { return my.getUpdateManager(tt_object); }
  static getLaunchOptionsSync(tt_object) { return my.getLaunchOptionsSync(tt_object); }
  static offPageNotFound(tt_object) { return my.offPageNotFound(tt_object); }
  static onPageNotFound(tt_object) { return my.onPageNotFound(tt_object); }
  static offError(tt_object) { return my.offError(tt_object); }
  static onError(tt_object) { return my.onError(tt_object); }
  static offAppShow(tt_object) { return my.offAppShow(tt_object); }
  static onAppShow(tt_object) { return my.onAppShow(tt_object); }
  static offAppHide(tt_object) { return my.offAppHide(tt_object); }
  static onAppHide(tt_object) { return my.onAppHide(tt_object); }
  static setEnableDebug(tt_object) { return my.setEnableDebug(tt_object); }
  static getLogManager(tt_object) { return my.getLogManager(tt_object); }
  // ///////////////// Canvas ///////////////////
  static drawCanvas(tt_object) {
    var canvasId = tt_object.canvasId;
    var actions = tt_object.actions;
    var canvasContext = my.createCanvasContext(canvasId);
    var dt;
    for (const action of actions) {
      var data = action.data;
      switch (action.method) {
        case "save":
          canvasContext.save();
          break;
        case "restore":
          canvasContext.restore();
          break;
        case "setFillStyle":
          canvasContext.setFillStyle({ tt, OnekitPage }.array2str(data[1]));
          break;
        case "setStrokeStyle":
          canvasContext.setStrokeStyle({ tt, OnekitPage }.array2str(data[1]));
          break;
        case "setFontSize":
          canvasContext.setFontSize(data[0]);
          break;
        case "setGlobalAlpha":
          canvasContext.setGlobalAlpha(data[0]);
          break;
        case "setShadow":
          var dat = data[3];
          canvasContext.setShadow(data[0], data[1], data[2], { tt, OnekitPage }.array2str(data[3]));
          break;
        case "setStrokeStyle":
          canvasContext.setStrokeStyle({ tt, OnekitPage }.array2str(data));
          break;
        case "drawImage":
          canvasContext.drawImage.apply(canvasContext, data);
          break;
        case "fillText":
          canvasContext.fillText.apply(canvasContext, data);
          break;
        case "setLineCap": canvasContext.setLineCap(data[0]); break;
        case "setLineJoin": canvasContext.setLineJoin(data[0]); break;
        case "setLineWidth": canvasContext.setLineWidth(data[0]); break;
        case "setMiterLimit": canvasContext.setMiterLimit(data[0]); break;
        case "rotate": canvasContext.rotate(data[0]); break;
        case "scale": canvasContext.scale(data[0], data[1]); break;
        case "translate": canvasContext.translate(data[0], data[1]); break;
        case "strokePath":
          canvasContext.beginPath();
          for (dat of data) {
            dt = dat.data;
            switch (dat.method) {
              case "rect": canvasContext.strokeRect(dt[0], dt[1], dt[2], dt[3]); break;
              case "moveTo": canvasContext.moveTo(dt[0], dt[1]); break;
              case "lineTo": canvasContext.lineTo(dt[0], dt[1]); break;
              case "closePath": canvasContext.closePath(); break;
              case "arc": canvasContext.arc.apply(canvasContext, dt); break;
              case "quadraticCurveTo": canvasContext.quadraticCurveTo.apply(canvasContext, dt); break;
              case "bezierCurveTo": canvasContext.bezierCurveTo.apply(canvasContext, dt); break;

              default:
                console.log("[drawCanvas-strokePath]", dat.method);
                break;
            }
          }
          canvasContext.stroke();
          break;
        case "fillPath":
          for (dat of data) {
            dt = dat.data;
            switch (dat.method) {
              case "rect": canvasContext.fillRect(dt[0], dt[1], dt[2], dt[3]); break;
              case "arc": canvasContext.arc.apply(canvasContext, dt); break;
              default:
                console.log("[drawCanvas-fillPath]", dat.method);
                break;
            }
          }
          canvasContext.fill();
          break;
        case "clearRect": canvasContext.clearRect(data[0], data[1], data[2], data[3]); break;
        default:
          console.log("[drawCanvas]", action.method);
          break;
      }
    }
    canvasContext.draw();
  }
  static createContext() {
    var context = new Context();
    return context;
  }
  static createCanvasContext(canvasId) {
    return new CanvasContext(my.createCanvasContext(canvasId));
  }
  static createVideoContext(videoId, ui) {
    return new VideoContext(my.createVideoContext(videoId));
  }
  // //////////// ttML ///////////////
  static createSelectorQuery() {
    return new SelectorQuery(my.createSelectorQuery());
  }
  static canvasToTempFilePath(tt_object) {
    var my_object = {
      canvasId: tt_object.canvasId
    };
    my_object.success = function (my_res) {
      var tt_res = {
        errMsg: "canvasToTempFilePath:ok",
        tempFilePath: my_res.apFilePath
      };
      if (tt_object.success) {
        tt_object.success(my_res);
      }
      if (tt_object.complete) {
        tt_object.complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (tt_object.fail) {
        tt_object.success(my_res);
      }
      if (tt_object.complete) {
        tt_object.complete(my_res);
      }
    };
    return my.canvasToTempFilePath(my_object);
  }
  static canvasPutImageData(tt_object) { return my.canvasPutImageData(tt_object); }
  static canvasGetImageData(tt_object) { return my.canvasGetImageData(tt_object); }
  // //////////// Device //////////////////
  static onBeaconServiceChange(tt_object) { return my.onBeaconServiceChange(tt_object); }
  static onBeaconUpdate(tt_object) { return my.onBeaconUpdate(tt_object); }
  static getBeacons(tt_object) { return my.getBeacons(tt_object); }
  static stopBeaconDiscovery(tt_object) { return my.stopBeaconDiscovery(tt_object); }
  static startBeaconDiscovery(tt_object) { return my.startBeaconDiscovery(tt_object); }
  static stopWifi(tt_object) { return my.stopWifi(tt_object); }
  static startWifi(tt_object) { return my.startWifi(tt_object); }
  static setWifiList(tt_object) { return my.setWifiList(tt_object); }
  static onWifiConnected(tt_object) { return my.onWifiConnected(tt_object); }
  static onGetWifiList(tt_object) { return my.onGetWifiList(tt_object); }
  static getWifiList(tt_object) { return my.getWifiList(tt_object); }
  static getConnectedWifi(tt_object) { return my.getConnectedWifi(tt_object); }
  static connectWifi(tt_object) { return my.connectWifi(tt_object); }
  // ///////////////////////////////////////////
  static setBackgroundFetchToken(my_object) {
    var tt_token = my_object.token;
    var tt_success = my_object.success;
    var tt_fail = my_object.fail;
    var tt_complete = my_object.complete;
    /////////////////
    my.setStorage({
      key: "tt_token",
      data: {
        tt_token: tt_token,
      },
    })
    my_object.success = function (tt_res) {
      var tt_res = {
        errMsg: "setBackgroundFetchToken:ok"
      };
      if (tt_success) {
        tt_success(tt_res);
      }
      if (tt_success) {
        tt_complete(tt_res);
      }
    };
  };
  static getBackgroundFetchToken(my_object) {
    var tt_success = my_object.success;
    var tt_fail = my_object.fail;
    var tt_complete = my_object.complete;
    console.log(tt_success)
    my.getStorage({
      key: 'tt_token',
      success(my_res) {
        console.log(my_res.data)
      }
    })
    my_object.success = function (tt_res) {
      var tt_res = {
        errMsg: "getBackgroundFetchToken:ok"
      };
      console.log("", tt_res)

      if (tt_success) {
        tt_success(tt_res);
      }
      if (tt_success) {
        tt_complete(tt_res);
      }
    };
  };
  static onBackgroundFetchData(callback) {
//支付宝没有,需要编程
  }

  static onAccelerometerChange(callback) {
    my.onAccelerometerChange(function (my_res) {
      if (tt._stopAccelerometer) {
        return;
      }
      callback(my_res);
    });
  }
  static stopAccelerometer(tt_object) {
    tt._stopAccelerometer = true;
    if (tt_object.success) {
      tt_object.success();
    }
    if (tt_object.complete) {
      tt_object.complete();
    }
  }
  static startAccelerometer(tt_object) {
    tt._stopAccelerometer = false;
    if (tt_object.success) {
      tt_object.success();
    }
    if (tt_object.complete) {
      tt_object.complete();
    }
  }
  static getBatteryInfoSync(tt_object) { return my.getBatteryInfoSync(tt_object); }
  static _getBatteryInfo(tt_res) {
    my.getSystemInfo({
      success: (my_res) => {
        var percent = my_res.currentBattery;
        function toPoint(percent) {
          var str = percent.replace("%", "");
          str = str / 100;
          return str;
        }
        toPoint(percent);
        var results = toPoint(percent);
        tt_res.level = results;
      }
    });
    return tt_res;
  }
  static getBatteryInfo(tt_object) {
    var my_object = {};
    my_object.success = function (my_res) {
      var tt_res = {
        errMsg: "getBatteryInfo:ok",
        isCharging: false,
      };
      tt_res = tt._getBatteryInfo(tt_res);
      if (tt_object.success) { tt_object.success(tt_res); }
      if (tt_object.fail) { tt_object.fail(tt_res); }
    };
    my_object.fail = function (my_res) {
      if (tt_object.success) { tt_object.success(my_res); }
      if (tt_object.fail) { tt_object.fail(my_res); }
    };
    return my.getSystemInfo(my_object);
  }
  //
  static getClipboardData(tt_object) {
    var my_object = {};
    if (tt_object) {
      my_object.success = function (my_res) {
        var tt_res = { data: my_res.text };
        if (tt_object.success) { tt_object.success(tt_res); }
        if (tt_object.fail) { tt_object.fail(tt_res); }
      };
      my_object.fail = function (my_res) {
        if (tt_object.success) { tt_object.success(my_res); }
        if (tt_object.fail) { tt_object.fail(my_res); }
      };
    }
    return my.getClipboard(my_object);
  }
  static setClipboardData(tt_object) {
   
    if (tt_object) {
      var  my_object = {};
      
      for (var key in tt_object) {
        switch (key) {  
          case "data":
            my_object.text = tt_object[key];
            break;
          default:
            my_object[key] = tt_object[key];
            break;
        }
      }
    }
    return my.setClipboard(my_object);
  }
  static onCompassChange(tt_callback) {
    my.onCompassChange(function (my_res) {
      if (!tt._startCompass) {
        return;
      }
      tt_callback(my_res);
    });
  }
  static stopCompass(tt_object) {
    tt._startCompass = false;
    if (tt_object.success) {
      tt_object.success();
    }
    if (tt_object.complete) {
      tt_object.complete();
    }
  }
  static startCompass(tt_object) {
    tt._startCompass = true;
    if (tt_object.success) {
      tt_object.success();
    }
    if (tt_object.complete) {
      tt_object.complete();
    }
  }
  static addPhoneContact(tt_object) {
    var my_object = {};
    var errMsg;
    var tt_res = {
      errMsg: errMsg
    };
    my_object.success = function (my_res) {
      tt_res.errMsg = "addPhoneContact:ok";
      if (tt_object.success) {
        tt_object.success(tt_res);
      }
      if (tt_object.complete) {
        tt_object.complete(tt_res);
      }
    };
    my_object.fail = function (my_res) {
      tt_res.errMsg = "addPhoneContact:fail cancel";
      if (tt_object.fail) {
        tt_object.fail(tt_res);
      }
      if (tt_object.complete) {
        tt_object.complete(tt_res);
      }
    };
    return my.addPhoneContact(my_object);
  }
  static onGyroscopeChange(callback) {
    my.onGyroscopeChange(function (my_res) {
      if (!tt._startGyroscope) {
        return;
      }
      callback(my_res);
    });
  }
  static stopGyroscope(tt_object) {
    tt._startGyroscope = false;
    if (tt_object.success) {
      tt_object.success();
    }
    if (tt_object.complete) {
      tt_object.complete();
    }
  }
  static startGyroscope(tt_object) {
    tt._startGyroscope = true;
    if (tt_object.success) {
      tt_object.success();
    }
    if (tt_object.complete) {
      tt_object.complete();
    }
  }
  //
  static onDeviceMotionChange(tt_object) { return my.onDeviceMotionChange(tt_object); }
  static stopDeviceMotionListening(tt_object) { return my.stopDeviceMotionListening(tt_object); }
  static startDeviceMotionListening(tt_object) { return my.startDeviceMotionListening(tt_object); }
  //
  static getNetworkType(tt_object) {
    if(!tt_object){return} 
    var my_object = {};
    var tt_success=tt_object.success
    var tt_fail=tt_object.fail
    var tt_complete=tt_object.complete
     if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
    my_object.success = function (my_res) {
      var tt_res = { networkType: tt._network(my_res).networkType };
      if (tt_object.success) {
        tt_object.success(tt_res);
      }
      if (tt_object.complete) {
        tt_object.complete(tt_res);
      }
    };
    my_object.fail = function (my_res) {
      if (tt_object.fail) {
        tt_object.success(my_res);
      }
      if (tt_object.complete) {
        tt_object.complete(my_res);
      }
    };

    return my.getNetworkType(my_object);
  }
  static _network(my_res) {
    var networkType;
    if (my_res.networkAvailable) {
      switch (my_res.networkType) {
        case "WWAN":
          networkType = "WIFI";
          break;
        default:
          networkType = my_res.networkType;
          break;
      }
    } else {
      networkType = "NONE";
    }
    return { isConnected: my_res.networkAvailable, networkType: networkType.toLowerCase() };
  }
  static onNetworkStatusChange(callack) {
    my.onNetworkStatusChange(function (my_res) {
      callack(tt._network(my_res));
    });
  }


  //
  static makePhoneCall(tt_object) {
    if (tt_object) {
    var  my_object = {};
    var tt_phoneNumber=tt_object.phoneNumber
    var tt_success=tt_object.success
    var tt_fail=tt_object.fail
    var tt_complete=tt_object.complete
    if(tt_phoneNumber){
     my_object.phoneNumber=tt_phoneNumber
    }
    if(tt_success){
     my_object.success=tt_success
    }
    if(tt_fail){
     my_object.fail=tt_fail
    }
    if(tt_complete){
     my_object.complete=tt_complete
    }
    my_object.success = function (my_res) {
        var tt_res = {
        };
        if (tt_object.success) {
          tt_object.success(tt_res);
        }
        if (tt_object.complete) {
          tt_object.complete(tt_res);
        }
      };
      my_object.fail = function (my_res) {
        if (tt_object.fail) {
          tt_object.fail(tt_res);
        }
        if (tt_object.complete) {
          tt_object.complete(tt_res);
        }
      };
     
    }
     return my.makePhoneCall(my_object);
  }

  static scanCode(tt_object) {//
    var my_object;
    if (tt_object) {
      my_object = {};
      var tt_onlyFromCamera=tt_object.onlyFromCamera||false
      var tt_scanType=tt_object.scanType
       var tt_success=tt_object.success
    var tt_fail=tt_object.fail
    var tt_complete=tt_object.complete
    if(tt_onlyFromCamera){
      my_object.hideAlbum=tt_onlyFromCamera
    }
    if(tt_scanType){
      my_object.scanType=tt_scanType
    }
    if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
      my_object.success = function (my_res) {
        console.log(my_res)
        var tt_res = {};
        if (my_res.code) {
          tt_res.charSet = "UTF-8";
          tt_res.tt_res = my_res.code;
          if (my_res.qrCode) {
            tt_res.scanType = "QR_CODE";
          } else if (my_res.barCode) {
            tt_res.scanType = "EAN_8";
          }
        }
        if (tt_object.success) {
          tt_object.success(tt_res);
        }
        if (tt_object.complete) {
          tt_object.complete(tt_res);
        }
      };
      my_object.fail = function (my_res) {
        console.log(my_res)
        if (tt_object.fail) {
          tt_object.fail(my_res);
        }
        if (tt_object.complete) {
          tt_object.complete(my_res);
        }
      };
    }
    return my.scan(my_object);
  }
  //
  static vibrateLong(tt_object) {
    var my_object = {};
    my_object.success = function (my_res) {
      var tt_res = {
        errMsg: "vibrateLong:ok"
      };
      if (tt_object.success) {
        tt_object.success(tt_res);
      }
      if (tt_object.complete) {
        tt_object.complete(tt_res);
      }
    };
    return my.vibrateLong(my_object);
  }
  static vibrateShort(tt_object) {
    var my_object = {};
    my_object.success = function (my_res) {
      var tt_res = {
        errMsg: "vibrateShort:ok"
      };
      if (tt_object.success) {
        tt_object.success(tt_res);
      }
      if (tt_object.complete) {
        tt_object.complete(tt_res);
      }
    };
    return my.vibrateShort(my_object);
  }
  //
  static onMemoryWarning(tt_object) { return my.onMemoryWarning(tt_object); }
  //
  static writeBLECharacteristicValue(tt_object) { return my.writeBLECharacteristicValue(tt_object); }
  static readBLECharacteristicValue(tt_object) { return my.readBLECharacteristicValue(tt_object); }
  static onBLEConnectionStateChange(tt_object) { return my.onBLEConnectionStateChange(tt_object); }
  static onBLECharacteristicValueChange(tt_object) { return my.onBLECharacteristicValueChange(tt_object); }
  static notifyBLECharacteristicValueChange(tt_object) { return my.notifyBLECharacteristicValueChange(tt_object); }
  static getBLEDeviceServices(tt_object) { return my.getBLEDeviceServices(tt_object); }
  static getBLEDeviceCharacteristics(tt_object) { return my.getBLEDeviceCharacteristics(tt_object); }
  static createBLEConnection(tt_object) { return my.createBLEConnection(tt_object); }
  static closeBLEConnection(tt_object) { return my.closeBLEConnection(tt_object); }
  //
  static stopBluetoothDevicesDiscovery(tt_object) {
    if(!tt_object){return}
    var my_object = {};
    var tt_success=tt_object.success
    var tt_fail=tt_object.fail
    var tt_complete=tt_object.complete
    if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
    my_object.success = function (my_res) {
        var tt_res = {
      
        };
        if (tt_object.success) {
          tt_object.success(tt_res);
        }
        if (tt_object.complete) {
          tt_object.complete(tt_res);
        }
      };
      my_object.fail = function (my_res) {
        if (tt_object.fail) {
          tt_object.fail(tt_res);
        }
        if (tt_object.complete) {
          tt_object.complete(tt_res);
        }
      };

    return my.stopBluetoothDevicesDiscovery(my_object);
  }
  static startBluetoothDevicesDiscovery(tt_object) {
    // tt.openBluetoothAdapter(tt_object);
    return my.startBluetoothDevicesDiscovery(tt_object);
  }
  static openBluetoothAdapter(tt_object) {
    var my_object = {};
    my_object.success = function (my_res) {
      var tt_res = { errMsg: "openBluetoothAdapter:ok" };
      if (tt_object.success) { tt_object.success(tt_res); }
      if (tt_object.complete) { tt_object.complete(tt_res); }
    };
    my_object.fail = function (my_res) {
      if (tt_object.success) { tt_object.success(my_res); }
      if (tt_object.complete) { tt_object.complete(my_res); }
    };
    return my.openBluetoothAdapter(my_object);
  }
  static onBluetoothDeviceFound(tt_object) { return my.onBluetoothDeviceFound(tt_object); }
  static onBluetoothAdapterStateChange(tt_object) { return my.onBluetoothAdapterStateChange(tt_object); }
  static getConnectedBluetoothDevices(tt_object) { return my.getConnectedBluetoothDevices(tt_object); }
  static getBluetoothDevices(tt_object) {
    var my_object = {};
    my_object.success = function (my_res) {
      my.getBluetoothDevices({
        success: (my_res) => {
          // console.log("000", my_res)
          // console.log("000", my_res.devices)
          tt_res.devices = my_res.devices;
        }
      });
      var tt_res = {
        errMsg: "closeBluetoothAdapter:ok"
      };
      if (tt_object.success) { tt_object.success(tt_res); }
      if (tt_object.complete) { tt_object.complete(tt_res); }
    };
    my_object.fail = function (my_res) {
      if (tt_object.success) { tt_object.success(my_res); }
      if (tt_object.complete) { tt_object.complete(my_res); }
    };
    return my.getBluetoothDevices(my_object);
  }
  static getBluetoothAdapterState(tt_object) { return my.getBluetoothAdapterState(tt_object); }
  static closeBluetoothAdapter(tt_object) { return my.closeBluetoothAdapter(tt_object); }
  //
  static stopHCE(tt_object) { return my.stopHCE(tt_object); }
  static startHCE(tt_object) { return my.startHCE(tt_object); }
  static sendHCEMessage(tt_object) { return my.sendHCEMessage(tt_object); }
  static onHCEMessage(tt_object) { return my.onHCEMessage(tt_object); }
  static getHCEState(tt_object) { return my.getHCEState(tt_object); }
  //
  static setScreenBrightness(tt_object) {
    var my_object;
    if (!tt_object) {return}
      my_object = {};
      var tt_value=tt_object_value
      var tt_success=tt_object.success
    var tt_fail=tt_object.fail
    var tt_complete=tt_object.complete
    if(tt_value){
      my_object.brightness=tt_value
    }
     if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
     my_object.success = function (my_res) {
        var tt_res = {
         
        };
        if (tt_object.success) {
          tt_object.success(tt_res);
        }
        if (tt_object.complete) {
          tt_object.complete(tt_res);
        }
      };
      my_object.fail = function (my_res) {
        if (tt_object.fail) {
          tt_object.fail(tt_res);
        }
        if (tt_object.complete) {
          tt_object.complete(tt_res);
        }
      };

    
    return my.setScreenBrightness(my_object);
  }
  static setKeepScreenOn(tt_object) { return my.setKeepScreenOn(tt_object); }
  static onUserCaptureScreen(tt_object) { return my.onUserCaptureScreen(tt_object); }

  static getScreenBrightness(tt_object) {
    var my_object;
    if (!tt_object) {return}
      my_object = {};
       var tt_success=tt_object.success
    var tt_fail=tt_object.fail
    var tt_complete=tt_object.complete
     if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
    my_object.success = function (my_res) {
      var tt_res = { value: my_res.brightness };
      if (tt_object.success) {
        tt_object.success(tt_res);
      }
      if (tt_object.complete) {
        tt_object.complete(tt_res);
      }
    };
    my_object.fail = function (my_res) {
      if (tt_object.fail) {
        tt_object.success(my_res);
      }
      if (tt_object.complete) {
        tt_object.complete(my_res);
      }
    };
    return my.getScreenBrightness(my_object);
  }
  // ///////////////// Ext //////////////
  static getExtConfigSync(tt_object) { return my.getExtConfigSync(tt_object); }
  static getExtConfig(tt_object) { return my.getExtConfig(tt_object); }
  // ////////////////// File //////////
  static getFileSystemManager(tt_object) { return my.getFileSystemManager(tt_object); }
  static getFileInfo(tt_object) { return my.getFileInfo(tt_object); }
  static removeSavedFile(tt_object) { return my.removeSavedFile(tt_object); }
  static getSavedFileInfo(tt_object) { return my.getSavedFileInfo(tt_object); }
  static getSavedFileList(tt_object) { return my.getSavedFileList(tt_object); }
  static openDocument(tt_object) { return my.openDocument(tt_object); }
  static saveFile(tt_object) {
    my.saveFile({
      apFilePath: tt_object.tempFilePath,
      success(my_res) {
        var tt_res = { savedFilePath: my_res.apFilePath };
        if (tt_object.success) {
          tt_object.success(tt_res);
        }
        if (tt_object.complete) {
          tt_object.complete(tt_res);
        }
      }, fail(my_res) {
        if (tt_object.fail) {
          tt_object.fail(my_res);
        }
        if (tt_object.complete) {
          tt_object.complete(my_res);
        }
      }
    });
  }
  // ////////// Location ///////////////
  static openLocation(tt_object) { return my.openLocation(tt_object); }
  static getLocation(tt_object) { return my.getLocation(tt_object); }
  static chooseLocation(tt_object) { return my.chooseLocation(tt_object); }
  // //////// Media ////////////////////
  static createMapContext(tt_object) { return my.createMapContext(tt_object); }
  static compressImage(tt_object) { return my.compressImage(tt_object); }
  static saveImageToPhotosAlbum(tt_object) { return my.saveImageToPhotosAlbum(tt_object); }
  static getImageInfo(tt_object) { return my.getImageInfo(tt_object); }
  static previewImage(tt_object) { return my.previewImage(tt_object); }
  static chooseImage(tt_object) {
    if (!tt_object.count) {
      tt_object.count = 0;
    }
    my.chooseImage({
      conut: tt_object.count,
      sizeType: tt_object.sizeType,
      sourceType: tt_object.scourceType,
      success: (my_res) => {
        var tempFilePaths = [];
        var tempFiles = [];
        for (var path of my_res.apFilePaths) {
          tempFilePaths.push(path);
          tempFiles.push({ path: path, size: 1000000 });
        }
        var tt_res = {
          tempFilePaths: tempFilePaths,
          tempFiles: tempFiles
        };
        if (tt_object.success) {
          tt_object.success(tt_res);
        }
        if (tt_object.complete) {
          tt_object.complete(complete);
        }
      },
      fail: (my_res) => {
        if (tt_object.fail) {
          tt_object.fail(my_res);
        }
        if (tt_object.complete) {
          tt_object.complete(my_res);
        }
      }
    });
  }
  static saveVideoToPhotosAlbum(tt_object) { return my.saveVideoToPhotosAlbum(tt_object); }
  static chooseVideo(tt_object) { return my.chooseVideo(tt_object); }
  static createVideoContext(videoId, ui) { return new VideoContext(my.createVideoContext(videoId)); }
  static stopVoice(tt_object) { return my.stopVoice(tt_object); }
  static pauseVoice(tt_object) { return my.pauseVoice(tt_object); }
  static playVoice(tt_object) { return my.playVoice(tt_object); }
  static setInnerAudioOption(tt_object) { return my.setInnerAudioOption(tt_object); }
  static getAvailableAudioSources(tt_object) { return my.getAvailableAudioSources(tt_object); }
  static createInnerAudioContext(tt_object) { return my.createInnerAudioContext(tt_object); }
  static createAudioContext(tt_object) { return my.createAudioContext(tt_object); }
  static onBackgroundAudioStop(tt_object) { return my.onBackgroundAudioStop(tt_object); }
  static onBackgroundAudioPause(tt_object) { return my.onBackgroundAudioPause(tt_object); }
  static onBackgroundAudioPlay(tt_object) { return my.onBackgroundAudioPlay(tt_object); }
  static stopBackgroundAudio(tt_object) { return my.stopBackgroundAudio(tt_object); }
  static seekBackgroundAudio(tt_object) { return my.seekBackgroundAudio(tt_object); }
  static pauseBackgroundAudio(tt_object) { return my.pauseBackgroundAudio(tt_object); }
  static playBackgroundAudio(tt_object) { return my.playBackgroundAudio(tt_object); }
  static getBackgroundAudioPlayerState(tt_object) { return my.getBackgroundAudioPlayerState(tt_object); }
  static getBackgroundAudioManager(tt_object) { return my.getBackgroundAudioManager(tt_object); }
  static createLivePusherContext(tt_object) { return my.createLivePusherContext(tt_object); }
  static startRecord(tt_object) { return my.startRecord(tt_object); }
  static stopRecord(tt_object) { return my.stopRecord(tt_object); }
  static getRecorderManager(tt_object) { return my.getRecorderManager(tt_object); }
  // ////////////// Network ///////////////
  static request(tt_object) {

    if (!tt_object) {
      return;
    }
    const tt_url = tt_object.url;
    const tt_data = tt_object.data;
    var tt_header=tt_object.header;
    var tt_timeout=tt_object.timeout;
    var tt_dataType=tt_object.dataType||"json"
    var tt_responseType=tt_object.responseType||"text"
    var tt_enableHttp2=tt_object.enableHttp2||false
    var tt_enableQuic=tt_object.enableQuic||false
    var tt_enableCache=tt_object.enableCache||false
    const tt_method = tt_object.method || "GET";
    const tt_success = tt_object.success;
    const tt_fail = tt_object.fail;
    const tt_complete = tt_object.complete;
    //
    var my_object = {};
    //
   if (tt_data) {
      my_object.data = tt_data;
    }
    if (tt_url) {
      my_object.url = tt_url;
    }
    if (tt_header) {
      my_object.header = tt_header;
    }
    if (tt_timeout) {
      my_object.timeout = tt_timeout;
    }
    if (tt_dataType) {
      my_object.dataType = tt_dataType;
    }
    // if (tt_responseType) {
    //   my_object.responseType = tt_responseType;
    // }
    // if (tt_enableHttp2) {
    //   my_object.enableHttp2 = tt_enableHttp2;       //weixin有alipay没有
    // }
    // if (tt_enableQuic) {
    //   my_object.enableQuic = tt_enableQuic;
    // }
    // if (tt_enableCache) {
    //   my_object.enableCache = tt_enableCache;
    // }
    if (tt_method) {
      my_object.method = tt_method;
    }
    if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
    //
    my_object.success = function (my_res) {
      var tt_res = {
        data: my_res.data,
        statusCode: my_res.status,
        header: my_res.headers,
        // cookies:my_res.cookies,  需要编程
        // profile:my_res.profile
      };
      if (tt_object.success) {
        tt_object.success(tt_res);
      }
      if (tt_object.complete) {
        tt_object.complete(tt_res);
      }
    };
    my_object.fail = function (my_res) {
     var tt_res = {

      };
      if (tt_object.fail) {
        tt_object.fail(tt_res);
      }
      if (tt_object.complete) {
        tt_object.complete(tt_res);
      }
    };

     my.httpRequest(my_object);
 
    /**/
    
  }
  //////////////////////////////////////////////////////////////
  static downloadFile(tt_object) { return my.downloadFile(tt_object); }
  static uploadFile(tt_object) {
    my.uploadFile({
      url: tt_object.url,
      filePath: tt_object.filePath,
      fileName: tt_object.name,
      fileType: "image",
      header: tt_object.header,
      formData: tt_object.formData,
      success: tt_object.success,
      fail: tt_object.fail,
      complete: tt_object.complete
    });
  }
  //
  static connectSocket(tt_object) { return my.connectSocket(tt_object); }
  static onSocketError(tt_object) { return my.onSocketError(tt_object); }
  static onSocketMessage(tt_object) { return my.onSocketMessage(tt_object); }
  static onSocketClose(tt_object) { return my.onSocketClose(tt_object); }
  static onSocketOpen(tt_object) { return my.onSocketOpen(tt_object); }
  static sendSocketMessage(tt_object) { return my.sendSocketMessage(tt_object); }
  static closeSocket(tt_object) { return my.closeSocket(tt_object); }
  static offLocalServiceResolveFail(callbck) { return my.offLocalServiceResolveFail(callbck); }
  static onLocalServiceResolveFail(callbck) { return my.onLocalServiceResolveFail(callbck); }
  static onLocalServiceDiscoveryStop(callbck) { return my.onLocalServiceDiscoveryStop(callbck); }
  static offLocalServiceLost(callbck) { return my.offLocalServiceLost(callbck); }
  static onLocalServiceLost(callbck) { return my.onLocalServiceLost(callbck); }
  static offLocalServiceFound(callbck) { return my.offLocalServiceFound(callbck); }
  static onLocalServiceFound(callbck) { return my.onLocalServiceFound(callbck); }
  static stopLocalServiceDiscovery(tt_object) { return my.stopLocalServiceDiscovery(tt_object); }
  static startLocalServiceDiscovery(tt_object) { return my.startLocalServiceDiscovery(tt_object); }

  // /////// Open Interface //////////
  static _checkSession() {
    var now = new Date().getTime();
    return getApp().onekittt._jscode && getApp().onekittt._login && now <= getApp().onekittt._login + 1000 * 60 * 60 * 24 * 3;
  }
  static checkSession(tt_object) {
    if (this._checkSession()) {
      if (tt_object.success) {
        tt_object.success();
      }
      if (tt_object.complete) {
        tt_object.complete();
      }

    } else {
      if (tt_object.fail) {
        tt_object.fail();
      }
      if (tt_object.complete) {
        tt_object.complete();
      }
    }

    /*
       var url = getApp().onekittt.server + "userinfo";
       my.httpRequest({
             url: url,
             header: {
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             method: "POST",
             data: {
               nickname: my_res.nickName,
               avatarUrl: my_res.avatar,
               js_code: jscode
             },
             success(my_res) {
               if (tt_object.success) {
                 tt_object.success(my_res.data);
               }
               if (tt_object.complete) {
                 tt_object.complete(my_res.data);
               }
             }, fail(my_res) {
               console.log(my_res.data);
             }
           });
     }*/

  }

  static login(tt_object) {
    var that = this;
    if (!tt_object) {
      return my.getAuthCode(tt_object);
    }
    var my_object = {
      scopes: "auth_user"
    };
    my_object.success = function (my_res) {
      getApp().onekittt._jscode = my_res.authCode;
      getApp().onekittt._login = new Date().getTime();
      var tt_res = { code: my_res.authCode };
      if (tt_object.success) {
        tt_object.success(tt_res);
      }
      if (tt_object.complete) {
        tt_object.complete(complete);
      }
    }
    my_object.fail = function (my_res) {
      if (tt_object.fail) {
        tt_object.fail(my_res);
      }
      if (tt_object.complete) {
        tt_object.complete(my_res);
      }
    }
    if (tt._checkSession()) {
      my_object.success({ authCode: getApp().onekittt._jscode });
    } else {
      my.getAuthCode(my_object);
    }
  };
  static getUserInfo(tt_object) {


    tt.login({
      success: (my_res) => {
        var jscode = my_res.code;
        var withCredentials = tt_object.withCredentials;
        my.getAuthUserInfo({
          success(my_res) {
            console.log(my_res);
            var url = getApp().onekit.server + "api/userinfo";
            console.log(url);
            my.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                withCredentials: withCredentials === true,
                js_code: jscode
              },
              success(my_res) {
                console.log(my_res.data);
                if (tt_object.success) {
                  tt_object.success(my_res.data);
                }
                if (tt_object.complete) {
                  tt_object.complete(my_res.data);
                }
              }, fail(my_res) {
                console.log(my_res.data);
              }
            });
          }
        });
      }
    });
  }
  static getOpenData(tt_object) {

    if (!getApp().onekit._opendataCallbacks) {
      getApp().onekit._opendataCallbacks = [];
    }
    function success(my_res) {
      var opendata = my_res.userInfo;
      getApp().onekit._opendata = opendata;
      for (var cb = 0; cb < getApp().onekit._opendataCallbacks.length; cb++) {
        getApp().onekit._opendataCallbacks[cb](opendata);
      }
      if (tt_object.success) {
        tt_object.success(opendata);
      }
      if (tt_object.complete) {
        tt_object.complete(opendata);
      }
    }
    var opendata = getApp().onekit._opendata;
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        tt_object.success(opendata);
      } else {
        if (tt_object.success) {
          getApp().onekit._opendataCallbacks.push(tt_object.success);
        }
      }
      return;
    }
    getApp().onekit._opendata = {};
    tt.login({
      success(my_res) {
        var jscode = my_res.code;
        my.getAuthUserInfo({
          success(my_res) {
            var url = getApp().onekit.server + "opendata";
            my.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                nickname: my_res.nickName,
                avatarUrl: my_res.avatar,
                js_code: jscode
              },
              success(my_res) {
                success(my_res.data);
              }, fail(my_res) {
                console.log(my_res);
              }
            });
          }
        });
      }
    });

  }
  static getPhoneNumber(tt_object) {

    tt.login({
      success: (my_res) => {
        var jscode = my_res.code;
        console.log("ssss" + jscode);
        my.getPhoneNumber({
          success(my_res) {
            // var response = {
            // response:
            // "ZOELfBOrmRHNNiiVR4FmNrvV7Dmog5w/KFaNrfLugkDqdkPzlxBCzmfLBrtQlPptWix+1f9I07p5xNfwGgTgVA==",
            // sign:
            // "fD6CyFQeJTTgtM1uviy5uAm4YWiN3s0crGtD1v5XdXuDzFEBPTRYqGODcfzskAMFWNXJAK5Zx0/kk+6e9tn/N3U9RcrTgc6VLw7HM9fPTcz8CzVl1+b6fjsi0wWsADF53vKTurFn6HTSTEJvzbMMD5M2lgazni72tZHCNJSkeG1W+kjX/Mj5tfJXNkn6nlrtu1N6BxgsZdgDdkMQfIrWv2TOFlpx043LMBmk4CxXLpGvRfRcHLjixs5wEO1dfqENn6oj9hAQbPA8itYW4TvGlo5qhnzT+ya1rWcKrjn4zh7uvnr0hB0oPiqLu17txS5uIQIF0DJ2cC0k6kuOQLVwTQ=="
            // }
            // JSON.parse(my_res.response);
            var response = JSON.parse(my_res.response);
            console.log(response);
            var url = getApp().onekit.server + "phonenumber";
            my.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                response: response.response,
                sign: response.sign,
                js_code: jscode
              },
              success(my_res) {
                var data = my_res.data;
                if (tt_object.success) {
                  tt_object.success(data);
                }
                if (tt_object.complete) {
                  tt_object.complete(data);
                }
              }, fail(my_res) {
                console.log(my_res.data);
              }
            });
          }
        });
      },
    });

  }
  static navigateToMiniProgram(tt_object) { return my.navigateToMiniProgram(tt_object); }
  static navigateBackMiniProgram(tt_object) { return my.navigateBackMiniProgram(tt_object); }
  static getAccountInfoSync(tt_object) { return my.getAccountInfoSync(tt_object); }

  static reportMonitor(tt_object) { return my.reportMonitor(tt_object); }
  static reportAnalytics(tt_object) { return my.reportAnalytics(tt_object); }
  static requestPayment(tt_object) {
    var tradeNO = tt_object.package.split("=")[1];
    console.log(tradeNO);
    var my_object = {
      tradeNO: tradeNO,
      success: tt_object.success,
      fail: tt_object.fail,
      complete: tt_object.complete
    };
    return my.tradePay(my_object);
  }
  static authorize(tt_object) { return my.authorize(tt_object); }
  static openSetting(tt_object) { return my.openSetting(tt_object); }
  static getSetting(tt_object) { return my.getSetting(tt_object); }
  static chooseAddress(tt_object) { return my.chooseAddress(tt_object); }
  static openCard(tt_object) {
    my.openCardList();
    if (tt_object.success) {
      tt_object.success();
    }
    if (tt_object.complete) {
      tt_object.complete();
    }
  }
  static addCard(tt_object) {
    var url = getApp().onekit.server + "addcard";
    my.httpRequest({
      url: url,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        cardList: JSON.stringify(tt_object.cardList),
        js_code: tt_object.jscode
      },
      success(my_res) {
        var data = my_res.data;
        if (tt_object.success) {
          tt_object.success(data);
        }
        if (tt_object.complete) {
          tt_object.complete(data);
        }
      }, fail(my_res) {
        console.log(my_res.data);
      }
    });
  }
  static chooseInvoiceTitle(tt_object) { return my.chooseInvoiceTitle(tt_object); }
  static chooseInvoice(tt_object) { return my.chooseInvoice(tt_object); }
  static startSoterAuthentication(tt_object) { return my.startSoterAuthentication(tt_object); }
  static checkIsSupportSoterAuthentication(tt_object) { return my.checkIsSupportSoterAuthentication(tt_object); }
  static checkIsSoterEnrolledInDevice(tt_object) { return my.checkIsSoterEnrolledInDevice(tt_object); }
  static getWeRunData(tt_object) { return my.getWeRunData(tt_object); }

  // //////// Router //////////////
  static navigateBack(tt_object) {
    var my_object;
    if (!tt_object) {return}
      my_object = {};
      var tt_delta=tt_object.tt_delta||1
       var tt_success=tt_object.success
    var tt_fail=tt_object.fail
    var tt_complete=tt_object.complete
    if(tt_delta){
      my_object.delta=tt_delta
    }
    if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
      my_object.success = function (my_res) {
        if (tt_object.success) {
          tt_object.success(tt_res);
        }
        if (tt_object.complete) {
          tt_object.complete(tt_res);
        }
      };
      my_object.fail = function (my_res) {
        if (tt_object.fail) {
          tt_object.success(my_res);
        }
        if (tt_object.complete) {
          tt_object.complete(my_res);
        }
      };
    
    return my.navigateBack(my_object);
  }
  static switchTab(tt_object) {
    var my_object;
    if (!tt_object) {return }
      my_object = {};
      var tt_url=tt_object.url
        var tt_success=tt_object.success
    var tt_fail=tt_object.fail
    var tt_complete=tt_object.complete    
    if(tt_url){
      my_object.url=tt_url
    }
    if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
    my_object.success = function (my_res) {
      if (tt_object.success) {
        tt_object.success(tt_res);
      }
      if (tt_object.complete) {
        tt_object.complete(tt_res);
      }
    };
    my_object.fail = function (my_res) {
      if (tt_object.fail) {
        tt_object.success(my_res);
      }
      if (tt_object.complete) {
        tt_object.complete(my_res);
      }
    };
    return my.switchTab(my_object);
  }
  static navigateTo(tt_object) {
    var my_object;
    if (!tt_object) {return }
      my_object = {};
      var tt_url=tt_object.url
      var tt_events=tt_object.events
      var tt_success=tt_object.success
      var tt_fail=tt_object.fail
      var tt_complete=tt_object.complete
       if(tt_url){
      my_object.url=tt_url
    }
    //    if(tt_events){
    //   my_object.events=tt_events////需要编程
    // }
      if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
    my_object.success = function (my_res) {
      if (tt_object.success) {
        tt_object.success(tt_res);
      }
      if (tt_object.complete) {
        tt_object.complete(tt_res);
      }
    };
    my_object.fail = function (my_res) {
      if (tt_object.fail) {
        tt_object.success(my_res);
      }
      if (tt_object.complete) {
        tt_object.complete(my_res);
      }
    };
    return my.navigateTo(my_object);
  }
  static reLaunch(tt_object) {
    var my_object;
    if (!tt_object) {return }
      my_object = {};
      var tt_url=tt_object.url
    var tt_success=tt_object.success
    var tt_fail=tt_object.fail
    var tt_complete=tt_object.complete
     if(tt_url){
      my_object.url=tt_url
    }
     if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
    my_object.success = function (my_res) {
      if (tt_object.success) {
        tt_object.success(tt_res);
      }
      if (tt_object.complete) {
        tt_object.complete(tt_res);
      }
    };
    my_object.fail = function (my_res) {
      if (tt_object.fail) {
        tt_object.success(my_res);
      }
      if (tt_object.complete) {
        tt_object.complete(my_res);
      }
    };
    return my.reLaunch(my_object);
  }
  static redirectTo(tt_object) {
    var my_object;
    if (tt_object) {return}
      my_object = {};
      var tt_url=tt_object.url
    var tt_success=tt_object.success
    var tt_fail=tt_object.fail
    var tt_complete=tt_object.complete
     if(tt_url){
      my_object.url=tt_url
    }
     if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
    my_object.success = function (my_res) {
      if (tt_object.success) {
        tt_object.success(tt_res);
      }
      if (tt_object.complete) {
        tt_object.complete(tt_res);
      }
    };
    my_object.fail = function (my_res) {
      if (tt_object.fail) {
        tt_object.success(my_res);
      }
      if (tt_object.complete) {
        tt_object.complete(my_res);
      }
    };
    return my.redirectTo(my_object);
  }
  // /////////// Share /////////////
  static updateShareMenu(tt_object) { return my.updateShareMenu(tt_object); }
  static showShareMenu(tt_object) {
    my.navigateTo({
      url: "/tt/page/share/share"
    });
  }
  static hideShareMenu(tt_object) { return my.hideShareMenu(tt_object); }
  static getShareInfo(tt_object) { return my.getShareInfo(tt_object); }
  // ///////////// Storage //////////////
  static getStorageInfoSync(tt_object) { return my.getStorageInfoSync(tt_object); }
  static getStorageInfo(tt_object) { return my.getStorageInfo(tt_object); }
  static clearStorageSync(tt_object) { return my.clearStorageSync(tt_object); }
  static clearStorage(tt_object) { return my.clearStorage(tt_object); }
  static removeStorageSync(tt_object) { return my.removeStorageSync(tt_object); }
  static removeStorage(tt_object) { return my.removeStorage(tt_object); }
  static setStorageSync(key, value) { return my.setStorageSync({ key: key, data: value }); }
  static setStorage(tt_object) { return my.setStorage(tt_object); }
  static getStorageSync(key) {
    var tt_res = my.getStorageSync({ key: key });
    if (!tt_res) {
      return "";
    } else if (tt_res.data) {
      return tt_res.data;
    } else if (tt_res.APDataStorage) {
      return tt_res.APDataStorage;
    } else {
      return "";
    }
  }
  static getStorage(tt_object) { return my.getStorage(tt_object); }
  // //////////// UI ////////////////
  static showActionSheet(tt_object) {
    var my_object;
    if (!tt_object) {return}
      my_object = {};
             var tt_itemList=tt_object.itemList
       var tt_itemColor=tt_object.itemColor
       var tt_success=tt_object.success
    var tt_fail=tt_object.fail
    var tt_complete=tt_object.complete
 if(tt_itemList){
      my_object.items=tt_itemList
    }
    //  if(tt_itemColor){
    //   my_object.itemColor=tt_itemColor weixin有alipay没有
    // }
    if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
     
      my_object.success = function (my_res) {
        var tt_res = { tapIndex: my_res.index };
        if (tt_object.success) {
          tt_object.success(tt_res);
        }
        if (tt_object.complete) {
          tt_object.complete(tt_res);
        }
      };
    
    return my.showActionSheet(my_object);
  }
  // static redirectTo(tt_object) { return my.redirectTo(tt_object); }
  // static redirectTo(tt_object) { return my.redirectTo(tt_object); }
  static hideLoading(tt_object) { return my.hideLoading(tt_object); }
  static showLoading(tt_object) {
    var my_object={};
    if (!tt_object) { return}
        var tt_title=tt_object.title
    var tt_mask=tt_object.mask
    var tt_success=tt_object.success
    var tt_fail=tt_object.fail
    var tt_complete=tt_object.complete
    if(tt_title){
      my_object.content=tt_title
    }
    // if(tt_mask){
    //   my_object.mask=tt_mask//需要编程
    // }
    if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
    my_object.success = function (my_res) {
        var tt_res = {
         

        };
        if (tt_object.success) {
          tt_object.success(tt_res);
        }
        if (tt_object.complete) {
          tt_object.complete(tt_res);
        }
      };
      my_object.fail = function (my_res) {
        if (tt_object.fail) {
          tt_object.fail(tt_res);
        }
        if (tt_object.complete) {
          tt_object.complete(tt_res);
        }
      };
   
    return my.showLoading(my_object);
  }
  static hideToast(tt_object) {
    return my.hideToast(my_object);
  }
  static showToast(tt_object) {
    if (!tt_object) {
      return
    }
    let tt_title = tt_object.title;   // 必填项 现实的文本
    let tt_icon = tt_object.icon || 'success';  // 图片
    let tt_image = tt_object.image;
    let tt_duration = tt_object.duration || 1500 // 间隔时长
    let tt_mask = tt_object.mask;
    let tt_success = tt_object.success;
    let tt_fail = tt_object.fail;
    let tt_complete = tt_object.complete;
    tt_object = null;
    let my_object = {}
    if (tt_title) {
      my_object.content = tt_title
    }
    if (tt_icon) {
      my_object.type = tt_icon
    }
    if (tt_duration) {
      my_object.duration = tt_duration
    }
    //////////////
    my_object.success = function (my_res) {
      if (tt_success) {
        tt_success(my_res);
      }
      if (tt_complete) {
        tt_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (tt_fail) {
        tt_fail(my_res);
      }
      if (tt_complete) {
        tt_complete(my_res);
      }
    };
    return my.showToast(my_object);
  }
  static showModal(my_object) {
    if (my_object === null) {
      return my.confirm();
    }
    var tt_object = {};
    var key;
    if (my_object.showCancel === null || my_object.showCancel) {
      var tt_title=tt_object.title
      var tt_content=tt_object.content
      var tt_cancelText=tt_object.cancelText
      var tt_cancelColor=tt_object.cancelColor
      var tt_confirmText=tt_object.confirmText||"确定"
      var tt_confirmColor=tt_object.confirmColor
  if(tt_title){
      my_object.title=tt_title
    }
    if(tt_content){
      my_object.content=tt_content
    }
    if(tt_cancelText){
      my_object.cancelButtonText=tt_cancelText
    }
    if(tt_confirmText){
      my_object.confirmButtonText=tt_confirmText
    }
      return my.confirm(tt_object);
    } else {
       var tt_title=tt_object.title
      var tt_content=tt_object.content
     var tt_confirmText=tt_object.confirmText||"确定"
    if(tt_title){
      my_object.title=tt_title
    }
    if(tt_content){
      my_object.content=tt_content
    }
    if(tt_confirmText){
      my_object.confirmButtonText=tt_confirmText
    }
      }
      return my.alert(tt_object);
    }
  
  static setNavigationBarColor(tt_object) { return my.setNavigationBarColor(tt_object); }
  static hideNavigationBarLoading(tt_object) {
    return my.hideNavigationBarLoading(my_object);
  }
  static showNavigationBarLoading(tt_object) {
    return my.showNavigationBarLoading(my_object);
  }
  static setNaivgationBarTitle(tt_object) { return my.setNavigationBar(tt_object); }
  static setBackgroundTextStyle(tt_object) { return my.setBackgroundTextStyle(tt_object); }

  static setBackgroundColor(tt_object) { return my.setBackgroundColor(tt_object); }
  static setTabBarItem(tt_object) { return my.setTabBarItem(tt_object); }
  static setTabBarStyle(tt_object) { return my.setTabBarStyle(tt_object); }
  static hideTabBar(tt_object) { return my.hideTabBar(tt_object); }
  static showTabBar(tt_object) { return my.showTabBar(tt_object); }
  static hideTabBarRedDot(tt_object) { return my.hideTabBarRedDot(tt_object); }
  static showTabBarRedDot(tt_object) { return my.showTabBarRedDot(tt_object); }
  static removeTabBarBadge(tt_object) { return my.removeTabBarBadge(tt_object); }
  static setTabBarBadge(tt_object) { return my.setTabBarBadge(tt_object); }

  static loadFontFace(tt_object) { return my.loadFontFace(tt_object); }

  static stopPullDownRefresh(tt_object) {
    var my_object = {};
    if (!tt_object) {return}
     var tt_success=tt_object.success
    var tt_fail=tt_object.fail
    var tt_complete=tt_object.complete
    if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
      my_object.success = function (my_res) {
        if (tt_object.success) {
          tt_object.success(my_res);
        }
        if (tt_object.complete) {
          tt_object.complete(my_res);
        }
      };
      my_object.fail = function (my_res) {
        if (tt_object.fail) {
          tt_object.fail(my_res);
        }
        if (tt_object.complete) {
          tt_object.complete(my_res);
        }
      };
    
    return my.stopPullDownRefresh(my_object);
  }
  static startPullDownRefresh(tt_object) {
    var my_object = {};
    if (!tt_object) {return }
     var tt_success=tt_object.success
    var tt_fail=tt_object.fail
    var tt_complete=tt_object.complete
    if(tt_success){
      my_object.success=tt_success
    }
    if(tt_fail){
      my_object.fail=tt_fail
    }
    if(tt_complete){
      my_object.complete=tt_complete
    }
      my_object.success = function (my_res) {
        if (tt_object.success) {
          tt_object.success(my_res);
        }
        if (tt_object.complete) {
          tt_object.complete(my_res);
        }
      };
      my_object.fail = function (my_res) {
        if (tt_object.fail) {
          tt_object.fail(my_res);
        }
        if (tt_object.complete) {
          tt_object.complete(my_res);
        }
      };
   
    return my.startPullDownRefresh(my_object);
  }
  static pageScrollTo(tt_object) { return my.pageScrollTo(tt_object); }
  static setTopBarText(tt_object) { return my.setTopBarText(tt_object); }
  static nextTick(tt_object) { return my.nextTick(tt_object); }
  static getMenuButtonBoundingClientRect(tt_object) { return my.getMenuButtonBoundingClientRect(tt_object); }
  static offWindowResize(tt_object) { return my.offWindowResize(tt_object); }
  static onWindowResize(tt_object) { return my.onWindowResize(tt_object); }
  // //////////// Worker ///////////////
  static createWorker(tt_object) { return my.createWorker(tt_object); }

  static createIntersectionObserver(tt_object) { return my.createIntersectionObserver(tt_object); }
  // ///////////////////////////////////
  static hideKeyboard(tt_object) { return my.hideKeyboard(tt_object); }
  // /////////// cloud ////////////////
  static get cloud() {
    return new tt_cloud();
  }
}