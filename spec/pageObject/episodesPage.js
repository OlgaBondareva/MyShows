let wd = require('wd')
let actions = require("../helpers/actions")
let navDrawer = require('.//navigationDrawer')

class episodesPage extends navDrawer {
  constructor (driver) {
    wd.addPromiseChainMethod('swipe', actions.swipe)
    super(driver)
  }

  async getRecommendedEpisodes () {
    await (new wd.TouchAction(this.driver)).tap({x: 540, y: 960}).perform()

    return this.driver.swipe({
      startX: 610, startY: 1647,
      endX: 640, endY: 150,
      duration: 800
    })
  }
}

module.exports = episodesPage