module.exports = function (a, b) {
  return (a + b < 255) ? 0 : a + b - 255
}
