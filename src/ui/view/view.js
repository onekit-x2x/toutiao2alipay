/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  mixins: [onekit_behavior, toutiao_behavior],
  data: {},
  props: {
    hoverClass: '',
    hoverStopPropagation: false,
    hoverStartTime: 0,
    hoverStayTime: 0,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    view_tap() {
      this.props.onTap({})
    }
  },
})
