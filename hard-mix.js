var vivid = require('./vivid-light')

module.exports = function (a, b) {
  return vivid(a, b) < 128 ? 0 : 255
}
