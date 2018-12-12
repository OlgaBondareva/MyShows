let navDrawer = require('.//navigationDrawer')

class episodesPage extends navDrawer {
  constructor (driver) {
    super(driver)
  }

  async getRecommendedEpisodes () {
    await (new wd.TouchAction(this.driver)).tap({x: 540, y: 960}).perform()
    await (new wd.TouchAction(this.driver))
      .press({x: 639, y: 593})
      .moveTo({x: 651, y: 361})
      .release()
    await (new wd.TouchAction(this.driver))
      .press({x: 639, y: 593})
      .moveTo({x: 651, y: 361})
      .release()
    await (new wd.TouchAction(this.driver))
      .press({x: 639, y: 593})
      .moveTo({x: 651, y: 361})
      .release()
  }
}