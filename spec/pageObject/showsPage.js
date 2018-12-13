let showPage = require('.//showPage')

class showsPage extends showPage {
  constructor (driver) {
    super(driver)
    // xpath
    this.visibleSerials = '//android.support.v7.widget.RecyclerView//android.widget.TextView[@class=\'android.widget.TextView\']'
  }

  async findAndOpenShowInRecommended (serial) {
    // tap in the center to find more shows
    await this.driver.tap({x: 540, y: 960})
    while (true) {
      let visibleRecommendations = await this.driver.elementsByXPath(this.visibleSerials)
      for (let i = 0; i < visibleRecommendations.length; i++) {
        let nextSerial = await visibleRecommendations[i].text()
        if (nextSerial === serial) {
          return await visibleRecommendations[i].click()
        }
      }
      await this.driver.swipe({
        startX: 830, startY: 1647,
        endX: 830, endY: 223,
        duration: 800
      })
    }
  }

  async addToWatching (serial) {
    await this.findAndOpenShowInRecommended(serial)
    await this.addShowToWatchingCategory()
    await this.driver.back()
    await this.clickHamburgerIcon()
    await this.openEpisodes()
    let added = await this.driver.elementByXPath(`//android.widget.TextView[@text=${serial}]`)
    console.log(`${serial} was added to Watching category.`)
    return added !== undefined
  }
}

module.exports = showsPage