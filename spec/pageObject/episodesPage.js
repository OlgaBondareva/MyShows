let wd = require('wd')
let navDrawer = require('.//navigationDrawer')

class episodesPage extends navDrawer {
  constructor (driver) {
    super(driver)
  }

  async getRecommendedEpisodes () {
    await (new wd.TouchAction(this.driver)).tap({x: 540, y: 960}).perform()
    await (new wd.TouchAction(this.driver))
      .press({x: 639, y: 150})
      .moveTo({x: 639, y: 1647})
      .release()
      .perform ()
    await (new wd.TouchAction(this.driver))
      .press({x: 639, y: 1647})
      .moveTo({x: 639, y: 150})
      .release()
      .perform ()
    await this.driver.sleep(3000)
  }
}

module.exports = episodesPage