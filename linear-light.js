var min = Math.min

module.exports = function (a, b) {
  return b === 255 ? b : min(255, (a * a / (255 - b)))
}
