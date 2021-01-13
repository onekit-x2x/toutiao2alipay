Component({
  mixins: [],
  data: {
    type: 'primary',
    hideContact: true
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  props: {
    onekitClass: '',
    onekitStyle: '',
    onekitId: '',
  },
  methods: {
    contactBG_tap() {
      this.setData({hideContact: true})
    },
    button_onTap(e) {
      const that = this
      if (this.props.openType) {
        switch (this.props.openType) {
          case 'contact':
            this.setData({hideContact: false})
            break
          case 'share':
            my.showShareMenu({
              success() {

              }
            })
            break
          case 'getUserInfo':
            if (that.props.onGetuserinfo) {
              my.getUserInfo({
                success(res) {
                  e.detail = res
                  that.props.onGetuserinfo(e)
                }
              })
            }
            break
          case 'getPhoneNumber':
            if (that.props.onGetphonenumber) {
              my.getPhoneNumber({
                success(res) {
                  e.detail = res
                  that.props.onGetphonenumber(e)
                }
              })
            }
            break
          case 'launchApp':
            break
          case 'openSetting':
            /* my.navigateTo({
              url:"/onekit/page/setting/setting"
            }); */
            my.openSetting({

            })
            break
          case 'feedback':
            break
          default:
            break
        }
      }
      if (this.props.onTap) { this.props.onTap(e) }
    },
  },
})
