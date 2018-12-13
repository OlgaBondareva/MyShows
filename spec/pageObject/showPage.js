let navDrawer = require('.//navigationDrawer')

class showPage extends navDrawer {
  constructor (driver) {
    super(driver)
    // xpath
    this.watchingShowOption = '//*[contains (@text, \'Watching\')]'
    this.removeShowOption = '//*[contains (@text, \'Remove\')]'
    // id
    this.okButton = 'android:id/button1'
  }

  async addShowToWatchingCategory () {
    await this.driver.tap({x: 950, y: 650})
    await this.driver.elementByXPath(this.watchingShowOption).click()
    await this.driver.elementById(this.okButton).click()
  }

  async removeShowFromAnyCategory () {
    await this.driver.tap({x: 954, y: 651})
    await this.driver.elementByXPath(this.removeShowOption).click()
    await this.driver.elementById(this.okButton).click()
  }
}

module.exports = showPage