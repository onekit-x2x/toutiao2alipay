/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  mixins: [onekit_behavior, toutiao_behavior],
  data: {},
  props: {
    url: '',
    //
    delta: 1,
    openType: 'navigate',
    hoverClass: 'navigator-hover',
    hoverStartTime: 50,
    hoverStayTime: 400,
    hoverStopPropagation: false,
  },
  methods: {
    navigator_tap(e) {
      if (this.props.openType === 'navigateBack') {
        my.navigateBack({
          delta: this.props.delta
        })
      }
      if (this.props.onTap) {
        this.props.onTap(e)
      }
    },
    view_tap(e) {
      if (!this.props.hoverStopPropagation) {
        if (this.props.onTap) {
          this.props.onTap(e)
        }
      }
    },
  },
})
