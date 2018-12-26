let ShowPage = require('./ShowPage')
let NavDrawer = require('./NavigationDrawer')

class ShowsPage extends ShowPage {
  constructor (driver) {
    super(driver)
    this.navDrawer = new NavDrawer(this.driver)
  }

  get seriesSelector () { return '//android.widget.TextView[@text=\'*\']'}

  async findAndOpenShow (series) {
    while (true) {
      this.driver.sleep(3000)
      let selector = this.seriesSelector.replace('*', series)
      let element = await this.driver.elementByXPathOrNull(selector)
      if (element != null) {
        return await element.click()
      }
      await this.driver.swipe({
        startX: 830, startY: 1555,
        endX: 830, endY: 303,
        duration: 800
      })
    }
  }

  async addToWatching (series) {
    await this.navDrawer.openShows()
    await this.findAndOpenShow(series)
    await this.addShowToWatchingCategory()
    await this.backButton.click()
  }

  async removeFromWatching (series) {
    await this.navDrawer.openShows()
    await this.findAndOpenShow(series)
    await this.removeShowFromAnyCategory()
    await this.backButton.click()
  }

  async isSeriesAddedToWatching (series) {
    await this.navDrawer.openEpisodes()
    return await this.driver.elementByXPath(`//android.widget.TextView[@text='${series}']`).isDisplayed()
  }
}

module.exports = ShowsPage
