/* eslint-disable no-console */
/* eslint-disable max-len */
export default class CanvasContext {
  constructor(alipayCanvasContext) {
    this.alipayCanvasContext = alipayCanvasContext
  }

  arc(x, y, radius, startAngle, endAngle) {
    const anticlockwise = 0
    return this.alipayCanvasContext.arc(x, y, radius, startAngle, endAngle, anticlockwise)
  }

  arcTo(x1, y1, x2, y2, radius) {
    return this.alipayCanvasContext.arcTo(x1, y1, x2, y2, radius)
  }

  beginPath() {
    return this.alipayCanvasContext.beginPath()
  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.alipayCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  }

  clearRect(x, y, width, height) {
    return this.alipayCanvasContext.clearRect(x, y, width, height)
  }

  clip() {
    const path = ''
    return this.alipayCanvasContext.clip(path)
  }

  closePath() {
    return this.alipayCanvasContext.closePath()
  }

  createImageData(width, height) {
    return this.alipayCanvasContext.createImageData(width, height)
  }

  createLinearGradient(x0, y0, x1, y1) {
    return this.alipayCanvasContext.createLinearGradient(x0, y0, x1, y1)
  }

  createPattern(image, repetition) {
    return this.alipayCanvasContext.createPattern(image, repetition)
  }

  createRadialGradient(x0, y0, r0, x1, y1, r1) {
    return this.alipayCanvasContext.createRadialGradient(x0, y0, r0, x1, y1, r1)
  }

  drawImage(image, sx, sy, sWidth = image.width, sHeight = image.height, dx = 0, dy = 0, dWidth = image.width, dHeight = image.height) {
    this.alipayCanvasContext.drawImage(image.src, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    this.alipayCanvasContext.draw()
  }

  ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle) {
    const anticlockwise = false
    return this.alipayCanvasContext.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)
  }

  fill() {
    const path = ''
    return this.alipayCanvasContext.fill(path)
  }

  fillRect(x, y, width, height) {
    return this.alipayCanvasContext.fillRect(x, y, width, height)
  }

  //
  set fillStyle(color) {
    this.fillStyle = color
  }

  get fillStyle() {
    return this.fillStyle
  }

  fillText(text, x, y) {
    const maxWidth = 0
    return this.alipayCanvasContext.fillText(text, x, y, maxWidth)
  }

  //
  set font(fontSize) {
    this.font = fontSize
  }

  get font() {
    return this.font
  }

  getImageData(sx, sy, sw, sh) {
    return this.alipayCanvasContext.lineTo(sx, sy, sw, sh)
  }

  getLineDash() {
    return this.alipayCanvasContext.getLineDash()
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

  isPointInPath(x, y) {
    const path = ''
    return this.alipayCanvasContext.isPointInPath(path, x, y)
  }

  isPointInStroke(x, y) {
    const path = ''
    return this.alipayCanvasContext.isPointInStroke(path, x, y)
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
    return this.alipayCanvasContext.lineTo(x, y)
  }

  //
  set lineWidth(lineWidth) {
    this.lineWidth = lineWidth
  }

  get lineWidth() {
    return this.lineWidth
  }

  measureText(width) {
    return this.alipayCanvasContext.measureText(width)
  }

  //
  set miterLimit(miterLimit) {
    this.miterLimit = miterLimit
  }

  get miterLimit() {
    return this.miterLimit
  }

  moveTo(x, y) {
    return this.alipayCanvasContext.moveTo(x, y)
  }

  putImageData(imagedata, dx, dy) {
    return this.alipayCanvasContext.putImageData(imagedata, dx, dy)
  }

  quadraticCurveTo(cpx, cpy, x, y) {
    return this.alipayCanvasContext.quadraticCurveTo(cpx, cpy, x, y)
  }

  rect(x, y, width, height) {
    return this.alipayCanvasContext.rect(x, y, width, height)
  }

  restore() {
    return this.alipayCanvasContext.restore()
  }

  rotate(rotate) {
    return this.alipayCanvasContext.rotate(rotate)
  }

  save() {
    return this.alipayCanvasContext.save()
  }

  scale(x, y) {
    return this.alipayCanvasContext.scale(x, y)
  }

  setLineDash(segments) {
    return this.alipayCanvasContext.setLineDash(segments)
  }

  setTransform(a, b, c, d, e, f) {
    return this.alipayCanvasContext.setTransform(a, b, c, d, e, f)
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
    return this.alipayCanvasContext.stroke()
  }

  strokeRect(x, y, width, height) {
    return this.alipayCanvasContext.strokeRect(x, y, width, height)
  }

  //
  set strokeStyle(color) {
    this.alipayCanvasContext.setStrokeStyle(color)
  }

  get strokeStyle() {
    return this.alipayCanvasContext.getStrokeStyle()
  }

  strokeText(text, x, y) {
    const maxWidth = 0
    return this.alipayCanvasContext.strokeText(text, x, y, maxWidth)
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
    return this.alipayCanvasContext.transform(scaleX, skewX, skewY, scaleY, translateX, translateY)
  }

  translate(x, y) {
    return this.alipayCanvasContext.translate(x, y)
  }
}
