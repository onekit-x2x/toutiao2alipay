import tt from "/onekit/tt"

Page({
  onShareAppMessage() {
    return {
      title: 'video',
      path: 'page/component/pages/video/video'
    }
  },

    data: {
        fullScreenText: 'requestFullScreen'
    },
    onLoad() {
        const video = tt.createVideoContext('myVideo');
        this.video = video;
    },
    play() {
        this.video.play();
    },
    pause() {
        this.video.pause();
    },
    seek() {
        this.video.seek(10);
    },
 
    fullScreen() {
        if (this.data.fullScreenText === 'requestFullScreen') {
            this.video.requestFullScreen();
            this.setData('fullScreenText', 'exitFullScreen');
        } else {
            this.video.exitFullScreen();
            this.setData('fullScreenText', 'requestFullScreen');
        }
    }

})
