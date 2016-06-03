module.exports = function (a, b) {
  return b < 128 ?
    (2 * a * b / 255) :
    (255 - 2 * (255 - a) * (255 - b) / 255)
}
