/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable max-len */
import PROVINCES from './data/provices.json'
import CITYS from './data/citys.json'
import TOWNS from './data/towns.json'

const VALUE = [
  PROVINCES[0].name,
  CITYS[`id${PROVINCES[0].id}`][0].name,
  TOWNS[`id${CITYS[`id${PROVINCES[0].id}`][0].id}`][0].name
]
Component({
  props: {
    onekitStyle: '',
    onekitClass: '',
    onekitId: '',
    headerText: null,
    disabled: false,
    value: VALUE,
    customItem: ''
  },
  methods: {
    _initColumn(data, name) {
      const rows = (this.data.customItem ? [{
        id: '',
        name: this.data.customItem
      }].concat(data) : data)
      let index = 0
      rows.forEach((row, i) => {
        if (row.name === name) {
          index = i
        }
      })
      return {
        rows,
        index
      }
    },
    ragion_show() {
      if (this.props.disabled) {
        return
      }
      if (!this.data.value) {
        this.data.value = VALUE
      }
      const provinces_index = this._initColumn(PROVINCES, this.data.value[0])
      const citys_index = this._initColumn(CITYS[`id${provinces_index.rows[provinces_index.index].id}`], this.data.value[1])
      const towns_index = this._initColumn(TOWNS[`id${citys_index.rows[citys_index.index].id}`], this.data.value[2])
      //
      this.setData({
        show: true,
        provinces: provinces_index.rows,
        provinceIndex: provinces_index.index,
        citys: citys_index.rows,
        cityIndex: citys_index.index,
        towns: towns_index.rows,
        townIndex: towns_index.index
      })
    },
    ragion_cancle() {
      this.setData({
        show: false
      })
      if (this.data.onCancle) {
        this.data.onCancle()
      }
    },
    ragion_confirm() {
      this.setData({
        show: false
      })
      if (this.data.onChange) {
        this.data.onChange({})
      }
    },
    province_change() {
      //  const province = this.data.provinces[e.detail.value[0]]
    },
    city_change() {
      //  const index = e.detail.value[0]
    },
    town_change() {
      //   const index = e.detail.value[0]
    }
  },
})
