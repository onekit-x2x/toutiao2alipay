Component({
  mixins: [],
  data: {},
  props: {
    onekitClass:"",
    onekitStyle:"",
    onekitId:"",
    hoverClass:'',
    hoverStopPropagation:false,
    hoverStartTime:0,
    hoverStayTime:0,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    view_tap:function(e){
      this.props.onTap({})
    }
  },
});
