module.exports = function (a, b) {
  return 255 - (((255 - a) * (255 - b)) >> 8)
}
