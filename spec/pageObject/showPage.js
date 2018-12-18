let navDrawer = require('.//navigationDrawer')

class showPage extends navDrawer {
  constructor (driver) {
    super(driver)
  }

  get watchingShowOption () {return this.driver.elementByXPath('//*[@text=\'Watching\']')}

  get removeShowOption () {return this.driver.elementByXPath('//*[@text=\'Remove\']')}

  get okButton () {return this.driver.elementById('android:id/button1')}

  get optionsButton () {return this.driver.elementById('ru.myshows.activity:id/fab_id')}

  async addShowToWatchingCategory () {
    await this.optionsButton.click()
    await this.watchingShowOption.click()
    await this.okButton.click()
  }

  async removeShowFromAnyCategory () {
    await this.optionsButton.click()
    await this.removeShowOption.click()
    await this.okButton.click()
  }
}

module.exports = showPage
