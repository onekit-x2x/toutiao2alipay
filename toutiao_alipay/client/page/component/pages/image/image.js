import tt from "/onekit/tt"

const config = require('../../../../config')

Page({
  onShareAppMessage() {
    return {
      title: 'image',
      path: 'page/component/pages/image/image'
    }
  },
  data: {
    imageUrl:'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'
  }
})
