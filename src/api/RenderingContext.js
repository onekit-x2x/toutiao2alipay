/* eslint-disable no-console */
/* eslint-disable max-len */
export default class CanvasContext {
  constructor(alipayCanvasContext) {
    this.alipayCanvasContext = alipayCanvasContext
  }

  arc(x, y, radius, startAngle, endAngle, anticlockwise = 0) {
    this.alipayCanvasContext.arc(x, y, radius, startAngle, endAngle, anticlockwise)
    this.alipayCanvasContext.draw()
  }

  arcTo(x1, y1, x2, y2, radius) {
    this.alipayCanvasContext.arcTo(x1, y1, x2, y2, radius)
    this.alipayCanvasContext.draw()
  }

  beginPath() {
    this.alipayCanvasContext.beginPath()
    this.alipayCanvasContext.draw()
  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    this.alipayCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
    this.alipayCanvasContext.draw()
  }

  clearRect(x, y, width, height) {
    this.alipayCanvasContext.clearRect(x, y, width, height)
    this.alipayCanvasContext.draw()
  }

  clip(path = '') {
    this.alipayCanvasContext.clip(path)
    this.alipayCanvasContext.draw()
  }

  closePath() {
    this.alipayCanvasContext.closePath()
    this.alipayCanvasContext.draw()
  }

  createImageData(width, height) {
    this.alipayCanvasContext.createImageData(width, height)
    this.alipayCanvasContext.draw()
  }

  createLinearGradient(x0, y0, x1, y1) {
    this.alipayCanvasContext.createLinearGradient(x0, y0, x1, y1)
    this.alipayCanvasContext.draw()
  }

  createPattern(image, repetition) {
    this.alipayCanvasContext.createPattern(image, repetition)
    this.alipayCanvasContext.draw()
  }

  createRadialGradient(x0, y0, r0, x1, y1, r1) {
    this.alipayCanvasContext.createRadialGradient(x0, y0, r0, x1, y1, r1)
    this.alipayCanvasContext.draw()
  }

  drawImage(image, sx, sy, sWidth = image.width, sHeight = image.height, dx = 0, dy = 0, dWidth = image.width, dHeight = image.height) {
    this.alipayCanvasContext.drawImage(image.src, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    this.alipayCanvasContext.draw()
  }

  ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise = false) {
    this.alipayCanvasContext.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)
    this.alipayCanvasContext.draw()
  }

  fill(path = '') {
    this.alipayCanvasContext.fill(path)
    this.alipayCanvasContext.draw()
  }

  fillRect(x, y, width, height) {
    this.alipayCanvasContext.fillRect(x, y, width, height)
    this.alipayCanvasContext.draw()
  }

  //
  set fillStyle(color) {
    this.fillStyle = color
  }

  get fillStyle() {
    return this.fillStyle
  }

  fillText(text, x, y, maxWidth = 0) {
    this.alipayCanvasContext.fillText(text, x, y, maxWidth)
    this.alipayCanvasContext.draw()
  }

  //
  set font(fontSize) {
    this.font = fontSize
  }

  get font() {
    return this.font
  }

  getImageData(sx, sy, sw, sh) {
    this.alipayCanvasContext.lineTo(sx, sy, sw, sh)
    this.alipayCanvasContext.draw()
  }

  getLineDash() {
    this.alipayCanvasContext.getLineDash()
    this.alipayCanvasContext.draw()
  }

  //
  set globalAlpha(alpha) {
    this.globalAlpha = alpha
  }

  get globalAlpha() {
    return this.globalAlpha
  }

  //
  set globalCompositeOperation(type) {
    this.globalCompositeOperation = type
  }

  get globalCompositeOperation() {
    return this.globalCompositeOperation
  }

  //
  set imageSmoothingEnabled(value) {
    this.imageSmoothingEnabled = value
  }

  get imageSmoothingEnabled() {
    return this.imageSmoothingEnabled
  }

  isPointInPath(x, y, path = '') {
    this.alipayCanvasContext.isPointInPath(path, x, y)
    this.alipayCanvasContext.draw()
  }

  isPointInStroke(x, y, path = '') {
    this.alipayCanvasContext.isPointInStroke(path, x, y)
    this.alipayCanvasContext.draw()
  }

  //
  set lineCap(lineCap) {
    this.lineCap = lineCap
  }

  get lineCap() {
    return this.lineCap
  }

  //
  set lineDashOffset(offset) {
    this.lineDashOffset = offset
  }

  get lineDashOffset() {
    return this.lineDashOffset
  }

  //
  set lineJoin(lineJoin) {
    this.lineJoin = lineJoin
  }

  get lineJoin() {
    return this.lineJoin
  }

  lineTo(x, y) {
    this.alipayCanvasContext.lineTo(x, y)
    this.alipayCanvasContext.draw()
  }

  //
  set lineWidth(lineWidth) {
    this.lineWidth = lineWidth
  }

  get lineWidth() {
    return this.lineWidth
  }

  measureText(width) {
    this.alipayCanvasContext.measureText(width)
    this.alipayCanvasContext.draw()
  }

  //
  set miterLimit(miterLimit) {
    this.miterLimit = miterLimit
  }

  get miterLimit() {
    return this.miterLimit
  }

  moveTo(x, y) {
    this.alipayCanvasContext.moveTo(x, y)
    this.alipayCanvasContext.draw()
  }

  putImageData(imagedata, dx, dy) {
    this.alipayCanvasContext.putImageData(imagedata, dx, dy)
    this.alipayCanvasContext.draw()
  }

  quadraticCurveTo(cpx, cpy, x, y) {
    this.alipayCanvasContext.quadraticCurveTo(cpx, cpy, x, y)
    this.alipayCanvasContext.draw()
  }

  rect(x, y, width, height) {
    this.alipayCanvasContext.rect(x, y, width, height)
    this.alipayCanvasContext.draw()
  }

  restore() {
    this.alipayCanvasContext.restore()
    this.alipayCanvasContext.draw()
  }

  rotate(rotate) {
    this.alipayCanvasContext.rotate(rotate)
    this.alipayCanvasContext.draw()
  }

  save() {
    this.alipayCanvasContext.save()
    this.alipayCanvasContext.draw()
  }

  scale(x, y) {
    this.alipayCanvasContext.scale(x, y)
    this.alipayCanvasContext.draw()
  }

  setLineDash(segments) {
    this.alipayCanvasContext.setLineDash(segments)
    this.alipayCanvasContext.draw()
  }

  setTransform(a, b, c, d, e, f) {
    this.alipayCanvasContext.setTransform(a, b, c, d, e, f)
    this.alipayCanvasContext.draw()
  }

  //
  set shadowColor(color) {
    this.shadowColor = color
  }

  get shadowColor() {
    return this.hadowColor
  }

  //
  set shadowBlur(level) {
    this.shadowBlur = level
  }

  get shadowBlur() {
    return this.shadowBlur
  }

  //
  set shadowOffsetX(offset) {
    this.shadowOffsetX = offset
  }

  get shadowOffsetX() {
    return this.shadowOffsetX
  }

  //
  set shadowOffsetY(offset) {
    this.shadowOffsetY = offset
  }

  get shadowOffsetY() {
    return this.shadowOffsetY
  }

  stroke() {
    this.alipayCanvasContext.stroke()
    this.alipayCanvasContext.draw()
  }

  strokeRect(x, y, width, height) {
    this.alipayCanvasContext.strokeRect(x, y, width, height)
    this.alipayCanvasContext.draw()
  }

  //
  set strokeStyle(color) {
    this.strokeStyle = color
  }

  get strokeStyle() {
    return this.strokeStyle
  }

  strokeText(text, x, y, maxWidth = 0) {
    this.alipayCanvasContext.strokeText(text, x, y, maxWidth)
    this.alipayCanvasContext.draw()
  }

  //
  set textAlign(align) {
    align = 'left' || 'right' || 'center' || 'start' || 'end'
    this.textAlign = align
  }

  get textAlign() {
    return this.textAlign
  }

  //
  set textBaseline(vertical) {
    vertical = 'top' || 'hanging' || 'middle' || 'alphabetic' || 'ideographic' || 'bottom'
    this.textBaseline = vertical
  }

  get textBaseline() {
    return this.textBaseline
  }

  transform(scaleX, skewX, skewY, scaleY, translateX, translateY) {
    this.alipayCanvasContext.transform(scaleX, skewX, skewY, scaleY, translateX, translateY)
    this.alipayCanvasContext.draw()
  }

  translate(x, y) {
    this.alipayCanvasContext.translate(x, y)
    this.alipayCanvasContext.draw()
  }
}
