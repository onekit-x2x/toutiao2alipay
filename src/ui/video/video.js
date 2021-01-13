Component({
  mixins: [],
  data: {},
  props: {
    onekitClass: '',
    onekitStyle: '',
    onekitId: '',
    src: '',
    duration: '',
    controls: true,
    autoplay: true,
    loop: false,
    muted: false,
    initialTime: Number,
    pageGesture: false,
    direction: '',
    showFullscreenBtn: true,
    showPlayBtn: true,
    showCenterPlayBtn: true,
    enableProgressGesture: true,
    poster: '',
    showMuteBtn: false,
  },
  didMount() {
    // var video = my.createVideoContext("video");
  },
  didUpdate() {},
  didUnmount() {},
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
    video_timeupdate() {
      if (this.props.onTimeUpdate) {
        this.props.onTimeUpdate({})
      }
    },
    video_fullscreenchange() {
      if (this.props.onFullScreenChange) {
        this.props.onFullScreenChange({})
      }
    },
    video_error() {
      if (this.props.onError) {
        this.props.onError({})
      }
    },
  }
})
