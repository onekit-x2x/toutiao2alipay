/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  mixins: [onekit_behavior, toutiao_behavior],
  data: {},
  props: {
    src: '',
    autoplay: false,
    poster: '',
    loop: false,
    showFullscreenBtn: true,
    showPlayBtn: true,
    controls: true,
    objectFit: 'contain',
    playBtnPosition: 'center',
    // 广告做不了
    preRollUnitId: '',
    postRollUnitId: '',
  },
  didMount() {
    my.createSelectorQuery()
      .select('.onekit-video').boundingClientRect().exec((rect) => {
        this.setData({
          rect: rect[0]
        })
      })
    if (this.props.playBtnPosition === 'center') {
      this.data.showPlayBtn = false
      this.data.showCenterPlayBtn = true
    } else if (this.props.playBtnPosition === 'bottom') {
      this.data.showPlayBtn = true
      this.data.showCenterPlayBtn = false
    }
    this.setData(this.data)
  },
  methods: {
    video_play() {
      if (this.props.onPlay) {
        this.props.onPlay({})
      }
    },
    video_pause() {
      if (this.props.onPause) {
        this.props.onPause({})
      }
    },
    video_end() {
      if (this.props.onEnded) {
        this.props.onEnded({})
      }
    },
    video_error() {
      if (this.props.onError) {
        this.props.onError({})
      }
    },
    video_timeupdate(e) {
      this.currentTime = e.detail.currentTime
      if (this.props.onTimeUpdate) {
        this.props.onTimeUpdate(e.detail)
      }
    },
    video_fullscreenchange() {
      if (this.props.onFullScreenChange) {
        this.props.onFullScreenChange({})
      }
    },
    video_waiting() {
      if (this.props.onLoading) {
        this.props.onLoading({})
      }
    },
    // 广告做不了
    _trigger_adstart({detail}) {
      // eslint-disable-next-line no-bitwise
      detail = {adType: 'preRollAd' | 'postRollAd'}
      if (this.props.onAdstart) {
        this.props.onAdstart({detail})
      }
    },
    _trigger_adended({detail}) {
      // eslint-disable-next-line no-bitwise
      detail = {adType: 'preRollAd' | 'postRollAd'}
      if (this.props.onAdended) {
        this.props.onAdended({detail})
      }
    },
    _trigger_adload({detail}) {
      // eslint-disable-next-line no-bitwise
      detail = {adType: 'preRollAd' | 'postRollAd'}
      if (this.props.onAdload) {
        this.props.onAdload({detail})
      }
    },
    _trigger_adclose({detail}) {
      // eslint-disable-next-line no-bitwise
      detail = {adType: 'preRollAd' | 'postRollAd'}
      if (this.props.onAdclose) {
        this.props.onAdclose({detail})
      }
    },
    _trigger_aderror({detail}) {
      // eslint-disable-next-line no-bitwise
      detail = {adType: 'preRollAd' | 'postRollAd'}
      if (this.props.onAderror) {
        this.props.onAderror({detail})
      }
    },
    //
    video_renderstart(e) {
      console.log('[video.renderstart]', e)
      //   if (this.props.onLoadedmetadata) {
      //     this.props.onLoadedmetadata({})
      //   }
    },
  }
})
