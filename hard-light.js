module.exports = function (a, b) {
  return a < 128 ?
    (2 * b * a / 255) :
    (255 - 2 * (255 - b) * (255 - a) / 255)
}
