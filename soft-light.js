module.exports = function (a, b) {
  return b < 128 ?
    (2 * ((a >> 1) + 64)) * (b / 255) :
    255 - (2 * (255 - (( a >> 1) + 64)) * (255 - b) / 255)
}
