let navDrawer = require('.//navigationDrawer')

class showPage extends navDrawer {
  constructor (driver) {
    super(driver)
  }

  get watchingShowOption () {return this.driver.elementByXPath('//*[contains (@text, \'Watching\')]')}

  get removeShowOption () {return this.driver.elementByXPath('//*[contains (@text, \'Remove\')]')}

  get okButton () {return this.driver.elementById('android:id/button1')}

  async addShowToWatchingCategory () {
    await this.driver.tap({x: 950, y: 650})
    await this.watchingShowOption.click()
    await this.okButton.click()
  }

  async removeShowFromAnyCategory () {
    await this.driver.tap({x: 954, y: 651})
    await this.removeShowOption.click()
    await this.okButton.click()
  }
}

module.exports = showPage