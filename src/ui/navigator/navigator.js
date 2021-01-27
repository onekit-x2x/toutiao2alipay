/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  mixins: [onekit_behavior, toutiao_behavior],
  data: {},
  props: {
    url: '',
    delta: 0,
    openType: 'navigate',
    hoverClass: 'navigator-hover',
    hoverStartTime: '',
    hoverStayTime: '',
    hoverStopPropagation: false,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {},
})
