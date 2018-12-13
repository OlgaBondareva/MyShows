let basePage = require('.//basePage')
let locators = require('../properties/locators')

class navigationDrawer extends basePage {
  constructor (driver) {
    super(driver)
  }

  get navigationDrawerButton () {return this.driver.elementByXPath('//android.widget.ImageButton[@content-desc="Open navigation drawer"]')}

  get episodesButton () {return this.driver.elementByXPath(locators.navigationDrawerXpath + '[1]')}

  get showsButton () {return this.driver.elementByXPath(locators.navigationDrawerXpath + '[2]')}

  get newsButton () {return this.driver.elementByXPath(locators.navigationDrawerXpath + '[3]')}

  get settingsButton () {return this.driver.elementByXPath(locators.navigationDrawerXpath + '[4]')}

  get hideAdvertisingButton () {return this.driver.elementByXPath(locators.navigationDrawerXpath + '[5]')}

  get logoutButton () {return this.driver.elementByXPath(locators.navigationDrawerXpath + '[6]')}

  get logoutAlert () {return this.driver.elementById('ru.myshows.activity:id/alertTitle')}

  get yesOnExit () {return this.driver.elementById('android:id/button1')}

  async isLoggedIn () {
    let navDrawer = await this.driver.elementByXPath(this.navigationDrawerButton)
    return navDrawer !== undefined
  }

  async logout () {
    await this.navigationDrawerButton.click()
    await this.logoutButton.click()
    // todo
    // fix. Change wait method or add xpath to constructor
    await this.driver.waitForElementByXPath(this.logoutAlert, 30000)
    return await this.yesOnExit.click()
  }

  async openSettings () {
    await this.navigationDrawerButton.click()
    return await this.settingsButton.click()
  }

  async openEpisodes () {
    await this.navigationDrawerButton.click()
    await this.episodesButton.click()
  }
}

module.exports = navigationDrawer