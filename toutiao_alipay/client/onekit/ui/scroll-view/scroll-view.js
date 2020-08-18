Component({
  mixins: [],
  data: {},
  props: {
    id:'',
    scrollX:false,
    scrollY:false,
    UpperThreshold:50,
    LowerThreshold:50,
    ScrollIntoView:"",
    ScrollTop:0,
    ScrollLeft:0,
    ScrollWithAnimation:false,
    EnableBackToTop:false,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  onupper(e){
    console.log("sxxxxxxxxxx",e)
  },
  methods: {
   on_toupper(e){
     if(this.props.onScrolltoupper){
     this.props.onScrolltoupper(e)
     }
   },
   on_tolower(e){
     if(this.props.onScrollToLower){
     this.props.onScrollToLower(e)
   }
   },
   on_scroll(e){
     if(this.props.onScroll){
     this.props.onScroll(e)
     }
   }
  },
});
