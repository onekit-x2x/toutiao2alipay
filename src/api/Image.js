/* eslint-disable no-console */
/* eslint-disable camelcase */
export default class Image {
  set src(src) {
    if (src) {
      this.src = my.getImageInfo().src
    }
  }

  get src() {
    return this.src
  }

  get width() {
    if (my.getImageInfo().src) {
      my.getImageInfo({
        success: res => {
          this.width = res.width
        }
      })
    }
    return this.width
  }

  get height() {
    if (my.getImageInfo().src) {
      my.getImageInfo({
        success: res => {
          this.height = res.height
        }
      })
    }
    return this.height
  }

  onload() {
    this.ctx.drawImage()
  }

  onerror(err) {
    return this.onerror(err)
  }
}
