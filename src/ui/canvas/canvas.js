/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'
import RenderingContext from '../../api/RenderingContext'
import Image from '../../api/Image'

Component({
  mixins: [onekit_behavior, toutiao_behavior],
  data: {},
  props: {
    type: '2d',
    canvasId: '',
  },

  didMount() {
    const onekitId = this.props.canvasId || this.props.onekitId
    this.setData({
      onekitId
    })
  },
  methods: {
    getContext(type) {
      switch (type) {
        case '2d':
          return new RenderingContext(my.createCanvasContext(this.data.onekitId))
        case 'webGL':
          // console.warn('xxx')
          return 'webGL is not support'
        default:
          throw new Error('webGL is not support')
      }
    },
    requestAnimationFrame(callback) {
      return setTimeout(callback, 0)
    },
    cancelAnimationFrame(id) {
      return clearTimeout(id)
    },
    createImage() {
      return new Image()
    },

    canvas_touchstart({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onTouchstart) {
        this.props.onTouchstart({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    canvas_touchmove({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onTouchmove) {
        this.props.onTouchmove({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    canvas_touchend({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onTouchend) {
        this.props.onTouchend({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    canvas_touchcancel({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onTouchcancel) {
        this.props.onTouchcancel({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    }
  },
})
