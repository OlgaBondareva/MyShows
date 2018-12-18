let showPage = require('.//showPage')

class showsPage extends showPage {
  constructor (driver) {
    super(driver)
    this.visibleSerialsXPath = '//android.support.v7.widget.RecyclerView//android.widget.TextView[@class=\'android.widget.TextView\']'
  }

  get backButton () {return this.driver.elementByXPath('//android.widget.ImageButton[@content-desc="Navigate up"]')}

  async findAndOpenShow (serial) {
    while (true) {
      this.driver.sleep(3000)
      let visibleRecommendations = await this.driver.elementsByXPath(this.visibleSerialsXPath)
      for (let i = 0; i < visibleRecommendations.length; i++) {
        let nextSerial = await visibleRecommendations[i].text()
        if (nextSerial === serial) {
          // some sleep for waiting to stop scrolling. After that you tap to necessary serial, not random
          this.driver.sleep(3000)
          return this.driver.elementByXPath(`//android.widget.TextView[@text='${serial}']`).click()
        }
      }
      await this.driver.swipe({
        startX: 830, startY: 1555,
        endX: 830, endY: 303,
        duration: 800
      })
    }
  }

  async addToWatching (serial) {
    await this.openShows()
    await this.findAndOpenShow(serial)
    await this.addShowToWatchingCategory()
    await this.backButton.click()
  }

  async removeFromWatching (serial) {
    await this.openShows()
    await this.findAndOpenShow(serial)
    await this.removeShowFromAnyCategory()
    await this.backButton.click()
  }

  async checkWatchingEpisodes (serial) {
    await this.openEpisodes()
    await this.driver.waitForElementByXPath(`//android.widget.TextView[@text='${serial}']`, 5000, 500)
    return await this.driver.elementByXPath(`//android.widget.TextView[@text='${serial}']`).isDisplayed()
  }
}

module.exports = showsPage