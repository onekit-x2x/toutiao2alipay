/* eslint-disable no-console */
/* eslint-disable camelcase */

export default function OnekitApp(tt_object) {
  const my_object = {
    onekit_nodes: {},
    onLaunch() {
      my.onError(my_error => {
        console.error('[my.onError]', my_error)
        const tt_error = my_error
        if (getApp().onekit_onError) {
          getApp().onekit_onError(tt_error)
        }
        if (tt_object.onError) {
          tt_object.onError(tt_error)
        }
      })
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
        tt_object.onLaunch()
      }
    },
    onShow() {
      if (getApp().onekit_onAppShow) {
        getApp().onekit_onAppShow()
      }
      if (tt_object.onShow) {
        tt_object.onShow()
      }
    },
    onHide() {
      if (getApp().onekit_onAppShow) {
        getApp().onekit_onAppShow()
      }
      if (tt_object.onHide) {
        tt_object.onHide()
      }
    },
    onError() {
      if (tt_object.onError) {
        tt_object.onError()
      }
    },
  }
  for (const key of Object.keys(tt_object)) {
    const member = tt_object[key]
    switch (key) {
      case 'onLaunch':
      case 'onShow':
      case 'onHide':
      case 'onError':
      case 'onPageNotFound':
      case 'onUnhandledRejection':
      case 'onThemeChange':
        break
      default:
        my_object[key] = member
        break
    }
  }
  return App(my_object)
}
