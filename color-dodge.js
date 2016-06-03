var min = Math.min

module.exports = function (a, b) {
  return b === 255 ? b : min(255, ((a << 8 ) / (255 - b)))
}
