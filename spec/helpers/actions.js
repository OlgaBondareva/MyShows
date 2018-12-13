let wd = require('wd')

exports.swipe = function (opts) {
  let action = new wd.TouchAction()
  action
    .press({x: opts.startX, y: opts.startY})
    .wait(opts.duration)
    .moveTo({x: opts.endX, y: opts.endY})
    .release()
  return this.performTouchAction(action)
}