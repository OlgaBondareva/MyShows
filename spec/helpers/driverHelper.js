let wd = require('wd')
let Asserter = wd.Asserter

let keyboardIsShown = new Asserter(
  function (driver, cb) {
    driver.isKeyboardShown(function (err, shown) {
      if (err) {return cb(err)}
      cb(null, shown)
    })
  }
)

module.exports = {keyboardIsShown: keyboardIsShown}