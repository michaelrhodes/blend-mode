var max = Math.max

module.exports = function (a, b) {
  return b === 0 ? b : max(0, (255 - ((255 - a) << 8 ) / b))
}
