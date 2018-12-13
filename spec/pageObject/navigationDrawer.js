let basePage = require('.//basePage')
let locators = require('../properties/locators')

class navigationDrawer extends basePage {
  constructor (driver) {
    super(driver)
    // xpath
    this.navigationDrawerButton = '//android.widget.ImageButton[@content-desc="Open navigation drawer"]'
    this.episodesButton = locators.navigationDrawerXpath + '[1]'
    this.showsButton = locators.navigationDrawerXpath + '[2]'
    this.newsButton = locators.navigationDrawerXpath + '[3]'
    this.settingsButton = locators.navigationDrawerXpath + '[4]'
    this.hideAdvertisingButton = locators.navigationDrawerXpath + '[5]'
    this.logoutButton = locators.navigationDrawerXpath + '[6]'
    // id
    this.logoutAlert = 'ru.myshows.activity:id/alertTitle'
    this.yesOnExit = 'android:id/button1'
  }

  async clickHamburgerIcon () {
    await this.driver.elementByXPath(this.navigationDrawerButton).click()
  }

  async isLoggedIn () {
    let navDrawer = await this.driver.elementByXPath(this.navigationDrawerButton)
    return navDrawer !== undefined
  }

  async logout () {
    await this.clickHamburgerIcon()
    await this.driver.elementByXPath(this.logoutButton).click()
    await this.driver.waitForElementByXPath(this.logoutAlert, 30000)
    return await this.driver.elementById(this.yesOnExit).click()
  }

  async openSettings () {
    await this.clickHamburgerIcon()
    return await this.driver.elementByXPath(this.settingsButton).click()
  }


  async openEpisodes() {
    await this.clickHamburgerIcon()
    await this.driver.elementByXPath(this.episodesButton).click()
  }
}

module.exports = navigationDrawer