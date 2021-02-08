/* eslint-disable no-console */
/* eslint-disable max-len */
export default class CanvasContext {
  constructor(alipayCanvasContext) {
    this.alipayCanvasContext = alipayCanvasContext
  }

  arc(x, y, radius, startAngle, endAngle, anticlockwise = 0) {
    this.alipayCanvasContext.arc(x, y, radius, startAngle, endAngle, anticlockwise)
  }

  arcTo(x1, y1, x2, y2, radius) {
    this.alipayCanvasContext.arcTo(x1, y1, x2, y2, radius)
    // this.alipayCanvasContext.draw(true)
  }

  beginPath() {
    this.alipayCanvasContext.beginPath()
    // this.alipayCanvasContext.draw(true)
  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    this.alipayCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
    // this.alipayCanvasContext.draw(true)
  }

  clearRect(x, y, width, height) {
    this.alipayCanvasContext.clearRect(x, y, width, height)
    // this.alipayCanvasContext.draw(true)
  }

  clip(path = '') {
    this.alipayCanvasContext.clip(path)
    // this.alipayCanvasContext.draw(true)
  }

  closePath() {
    this.alipayCanvasContext.closePath()
    // this.alipayCanvasContext.draw(true)
  }

  createImageData(width, height) {
    this.alipayCanvasContext.createImageData(width, height)
    // this.alipayCanvasContext.draw(true)
  }

  createLinearGradient(x0, y0, x1, y1) {
    this.alipayCanvasContext.createLinearGradient(x0, y0, x1, y1)
    // this.alipayCanvasContext.draw(true)
  }

  createPattern(image, repetition) {
    this.alipayCanvasContext.createPattern(image, repetition)
    // this.alipayCanvasContext.draw(true)
  }

  createRadialGradient(x0, y0, r0, x1, y1, r1) {
    this.alipayCanvasContext.createRadialGradient(x0, y0, r0, x1, y1, r1)
    // this.alipayCanvasContext.draw(true)
  }

  drawImage(image, sx, sy, sWidth = image.width, sHeight = image.height, dx = 0, dy = 0, dWidth = image.width, dHeight = image.height) {
    this.alipayCanvasContext.drawImage(image.src, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    this.alipayCanvasContext.draw(true)
  }

  ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise = false) {
    this.alipayCanvasContext.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)
    // this.alipayCanvasContext.draw(true)
  }

  fill(path = '') {
    this.alipayCanvasContext.fill(path)
    this.alipayCanvasContext.draw(true)
  }

  fillRect(x, y, width, height) {
    this.alipayCanvasContext.fillRect(x, y, width, height)
    this.alipayCanvasContext.draw(true)
  }

  //
  set fillStyle(color) {
    this._fillStyle = color
    this.alipayCanvasContext.setFillStyle(color)
  }

  get fillStyle() {
    return this._fillStyle
  }

  fillText(text, x, y, maxWidth = 0) {
    this.alipayCanvasContext.fillText(text, x, y, maxWidth)
    this.alipayCanvasContext.draw(true)
  }

  //
  set font(value) {
    this._font = value
  }

  get font() {
    return this._font
  }

  getImageData(sx, sy, sw, sh) {
    this.alipayCanvasContext.lineTo(sx, sy, sw, sh)
    // this.alipayCanvasContext.draw(true)
  }

  getLineDash() {
    this.alipayCanvasContext.getLineDash()
    // this.alipayCanvasContext.draw(true)
  }

  //
  set globalAlpha(alpha) {
    this._globalAlpha = alpha
    this.alipayCanvasContext.setGlobalAlpha(alpha)
  }

  get globalAlpha() {
    return this._globalAlpha
  }

  //
  set globalCompositeOperation(type) {
    this._globalCompositeOperation = type
  }

  get globalCompositeOperation() {
    return this._globalCompositeOperation
  }

  //
  set imageSmoothingEnabled(value) {
    this._imageSmoothingEnabled = value
  }

  get imageSmoothingEnabled() {
    return this._imageSmoothingEnabled
  }

  isPointInPath(x, y, path = '') {
    this.alipayCanvasContext.isPointInPath(path, x, y)
    // this.alipayCanvasContext.draw(true)
  }

  isPointInStroke(x, y, path = '') {
    this.alipayCanvasContext.isPointInStroke(path, x, y)
    // this.alipayCanvasContext.draw(true)
  }

  //
  set lineCap(lineCap) {
    this._lineCap = lineCap
    this.alipayCanvasContext.setLineCap(lineCap)
  }

  get lineCap() {
    return this._lineCap
  }

  //
  set lineDashOffset(offset) {
    this._offset = offset
  }

  get lineDashOffset() {
    return this._offset
  }

  //
  set lineJoin(lineJoin) {
    this._lineJoin = lineJoin
  }

  get lineJoin() {
    return this._lineJoin
  }

  lineTo(x, y) {
    this.alipayCanvasContext.lineTo(x, y)
    // this.alipayCanvasContext.draw(true)
  }

  //
  set lineWidth(lineWidth) {
    this._lineWidth = lineWidth
  }

  get lineWidth() {
    return this._lineWidth
  }

  measureText(width) {
    this.alipayCanvasContext.measureText(width)
    // this.alipayCanvasContext.draw(true)
  }

  //
  set miterLimit(miterLimit) {
    this._miterLimit = miterLimit
  }

  get miterLimit() {
    return this._miterLimit
  }

  moveTo(x, y) {
    this.alipayCanvasContext.moveTo(x, y)
    // this.alipayCanvasContext.draw(true)
  }

  putImageData(imagedata, dx, dy) {
    this.alipayCanvasContext.putImageData(imagedata, dx, dy)
    // this.alipayCanvasContext.draw(true)
  }

  quadraticCurveTo(cpx, cpy, x, y) {
    this.alipayCanvasContext.quadraticCurveTo(cpx, cpy, x, y)
    // this.alipayCanvasContext.draw(true)
  }

  rect(x, y, width, height) {
    this.alipayCanvasContext.rect(x, y, width, height)
    // this.alipayCanvasContext.draw(true)
  }

  restore() {
    this.alipayCanvasContext.restore()
  }

  rotate(rotate) {
    this.alipayCanvasContext.rotate(rotate)
    // this.alipayCanvasContext.draw(true)
  }

  save() {
    this.alipayCanvasContext.save()
  }

  scale(x, y) {
    this.alipayCanvasContext.scale(x, y)
    // this.alipayCanvasContext.draw(true)
  }

  setLineDash(segments) {
    this.alipayCanvasContext.setLineDash(segments)
    // this.alipayCanvasContext.draw(true)
  }

  setTransform(a, b, c, d, e, f) {
    this.alipayCanvasContext.setTransform(a, b, c, d, e, f)
    // this.alipayCanvasContext.draw(true)
  }

  //
  set shadowColor(color) {
    this._shadowColor = color
  }

  get shadowColor() {
    return this._hadowColor
  }

  //
  set shadowBlur(level) {
    this._shadowBlur = level
  }

  get shadowBlur() {
    return this._shadowBlur
  }

  //
  set shadowOffsetX(offset) {
    this._shadowOffsetX = offset
  }

  get shadowOffsetX() {
    return this._shadowOffsetX
  }

  //
  set shadowOffsetY(offset) {
    this._shadowOffsetY = offset
  }

  get shadowOffsetY() {
    return this._shadowOffsetY
  }

  stroke() {
    this.alipayCanvasContext.stroke()
    this.alipayCanvasContext.draw(true)
  }

  strokeRect(x, y, width, height) {
    this.alipayCanvasContext.strokeRect(x, y, width, height)
    this.alipayCanvasContext.draw(true)
  }

  //
  set strokeStyle(color) {
    this._strokeStyle = color
  }

  get strokeStyle() {
    return this._strokeStyle
  }

  strokeText(text, x, y, maxWidth = 0) {
    this.alipayCanvasContext.strokeText(text, x, y, maxWidth)
    this.alipayCanvasContext.draw(true)
  }

  //
  set textAlign(align) {
    align = 'left' || 'right' || 'center' || 'start' || 'end'
    this._textAlign = align
  }

  get textAlign() {
    return this._textAlign
  }

  //
  set textBaseline(vertical) {
    vertical = 'top' || 'hanging' || 'middle' || 'alphabetic' || 'ideographic' || 'bottom'
    this._textBaseline = vertical
  }

  get textBaseline() {
    return this._textBaseline
  }

  transform(scaleX, skewX, skewY, scaleY, translateX, translateY) {
    this.alipayCanvasContext.transform(scaleX, skewX, skewY, scaleY, translateX, translateY)
    // this.alipayCanvasContext.draw(true)
  }

  translate(x, y) {
    this.alipayCanvasContext.translate(x, y)
    // this.alipayCanvasContext.draw(true)
  }
}
