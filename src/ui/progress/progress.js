/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  mixins: [onekit_behavior, toutiao_behavior],
  data: {},
  props: {
    percent: '',
    strokeWidth: 6,
    // color: '',
    activeColor: '',
    backgroundColor: '#EBEBEB',
    active: false,
    activeMode: '',
  },
  didMount() {
    let activeColor
    let activeMode
    /* if (this.props.color) {
      activeColor = this.props.color
    } else */
    if (this.props.activeColor) {
      activeColor = this.props.activeColor
    } else {
      activeColor = '#F85959'
    }
    //
    if (this.props.activeMode) {
      activeMode = this.props.activeMode
    } else {
      activeMode = 'backwards'
    }
    this.setData({
      activeColor,
      activeMode,
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {},
})
