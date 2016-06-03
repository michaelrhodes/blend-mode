var burn = require('./color-burn')
var dodge = require('./color-dodge')

module.exports = function (a, b) {
  return b < 128 ?
    burn(a, 2 * b) :
    dodge(a, (2 * (b - 128)))
}
