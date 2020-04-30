import tt from "/onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: '数据存储',
      path: 'page/API/pages/storage/storage'
    }
  },

  data: {
    key: '',
    data: '',
    dialog: {
      title: '',
      content: '',
      hidden: true
    }
  },

  keyChange(e) {
    this.data.key = e.detail.value
  },

  dataChange(e) {
    this.data.data = e.detail.value
  },

  getStorage() {
    const {key, data} = this.data
    let storageData

    if (key.length === 0) {
      tt.showModal({
        key,
        data,
        hidden: false,
        title: '读取数据失败',
        content: 'key 不能为空'
      });
    } else {
      storageData = tt.getStorageSync(key)
      if (storageData === '') {
        tt.showModal({
          key,
          data,
          hidden: false,
          title: '读取数据失败',
          content: '找不到 key 对应的数据'
        });
      } else {
        tt.showModal({
            key,
          data,
          hidden: false,
          title: '读取数据成功',
          // eslint-disable-next-line
          content: "data: '"+ storageData + "'"
        });
      }
    }
  },

  setStorage() {
    const {key, data} = this.data
    if (key.length === 0) {
      tt.showModal({
        key,
        data,
        hidden: false,
        title: '保存数据失败',
        content: 'key 不能为空'
      });
    } else {
     tt.setStorageSync(key, data)
      tt.showModal({
        key,
        data,
        hidden: false,
        title: '存储数据成功',
      });
    }
  },

  clearStorage() {
    tt.clearStorageSync()
    tt.showModal({
      key: '',
      data: '',
      'dialog.hidden': false,
      title: '清除数据成功',
      'dialog.content': ''
    });
  },

  confirm() {
    this.setData({
      'dialog.hidden': true,
      'dialog.title': '',
      'dialog.content': ''
    })
  }
})
