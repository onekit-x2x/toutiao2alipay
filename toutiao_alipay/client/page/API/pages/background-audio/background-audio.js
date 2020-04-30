import tt from "/onekit/tt"
const musicUrl = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
let app = getApp();

Page({
    /* eslint-enable */
    data: {
        duration: 261,
        currentTime: '00:00',
        totalTime: '00:00:00',
        play: false,
        sliderValue: 0,
        isStop: true
    },
    onLoad(e) {
        const backgroundAudioManager = tt.getBackgroundAudioManager();
        backgroundAudioManager.title = '演员';
        backgroundAudioManager.epname = '演员';
        backgroundAudioManager.singer = '薛之谦';
        backgroundAudioManager.coverImgUrl = 'http://c.hiphotos.baidu.com/super/pic/item/8b13632762d0f703e34c0f6304fa513d2797c597.jpg';
        backgroundAudioManager.src= 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';

        backgroundAudioManager.onPlay(res => {
            this.setData({
                play: true,
                isStop: false
            });
        });

        backgroundAudioManager.onStop(res => {
            this.setData({'play': false});
        });

        backgroundAudioManager.onPause(res => {
            this.setData({'play': false});
        });

        backgroundAudioManager.onEnded(() => {
            this.backgroundAudioManager.stop();
            this.backgroundAudioManager.src = musicUrl;
            this.resetTimer();
        })

        this.backgroundAudioManager = backgroundAudioManager;
        this.total = 0;
        this.currentTime = 0;
    },
    onShow() {
    },
    onHide() {
    },
    play() {
        var that = this;
        if (that.data.isStop) {
            this.backgroundAudioManager.src = musicUrl;
        } else {
            this.backgroundAudioManager.play();
        }

        this.startTimer();
    },
    stop() {
        this.backgroundAudioManager.stop();
        this.stopTimer();
        this.currentTime = 0;
        this.total = 0;
        this.setData({
            isStop: true,
            totalTime: this.getTime(0, 1),
            currentTime: this.getTime(0),
            sliderValue: 1
        });
    },
    pause() {
        this.backgroundAudioManager.pause();
        this.stopTimer();
    },
    seek(e) {
        const value = e.detail.value;
        this.currentTime = value;
        this.total += value;
        this.setData({
            currentTime: this.getTime(this.currentTime),
            total: this.getTime(this.total)
        });
        this.backgroundAudioManager.seek(this.currentTime);
    },
    startTimer() {
        this.timer = setInterval(() => {
            this.total++;
            this.currentTime++;
            this.setData({
                currentTime: this.getTime(this.currentTime),
                totalTime: this.getTime(this.total, 1),
                sliderValue: this.currentTime
            });
        }, 1000);
    },
    resetTimer() {
        this.currentTime = 0;
        this.setData({
            currentTime: this.getTime(0),
            sliderValue: 1
        });
    },
    stopTimer() {
        this.timer && clearInterval(this.timer);
    },
    getTime(second, showHour) {
        let hour = 0;
        let min = 0;
        let sec = 0;
        if (second >= 3600) {
            hour = parseInt(second / 3600, 10);
            second = second - hour * 3600;
        }

        min = parseInt(second / 60, 10);
        sec = parseInt(second - min * 60, 10);

        if (showHour) {
            return `${this.getTimeData(hour)}:${this.getTimeData(min)}:${this.getTimeData(sec)}`;
        }
        return `${this.getTimeData(min)}:${this.getTimeData(sec)}`;
    },
    getTimeData(data) {
        return data >= 10 ? data : '0' + data;
    }
});