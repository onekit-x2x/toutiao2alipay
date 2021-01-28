/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  mixins: [onekit_behavior, toutiao_behavior],
  data: {},
  props: {
    headerText: '',
    disabled: false,
    mode: 'selector',
    range: [],
    value: null,
    start: '',
    end: '',
    customItem: ''
  },
  methods: {
    picker_Cancle(e) {
      if (this.props.onCancle) {
        this.props.onCancle(e)
      }
    },
    picker_Change(e) {
      if (this.props.onChange) {
        this.props.onChange(e)
      }
    },
    picker_Columnchange(e) {
      if (this.props.onColumnchange) {
        this.props.onColumnchange(e)
      }
    }
  },
})
