let basePage = require('.//basePage')
let locators = require('../properties/locators')

class navigationDrawer extends basePage {
  constructor (driver) {
    super(driver)
    this.navigationDrawerButton = ['xpath', '//android.widget.ImageButton[@content-desc="Open navigation drawer"]']
    this.episodesButton = ['xpath', locators.navigationDrawerXpath + '[1]']
    this.showsButton = ['xpath', locators.navigationDrawerXpath + '[2]']
    this.newsButton = ['xpath', locators.navigationDrawerXpath + '[3]']
    this.settingsButton = ['xpath', locators.navigationDrawerXpath + '[4]']
    this.hideAdvertisingButton = ['xpath', locators.navigationDrawerXpath + '[5]']
    this.logoutButton = ['xpath', locators.navigationDrawerXpath + '[6]']
    this.logoutAlert = ['id', 'ru.myshows.activity:id/alertTitle']
    this.yesOnExit = ['id', 'android:id/button1']
  }

  async logout () {
    await this.driver.element(this.navigationDrawerButton[0], this.navigationDrawerButton[1]).click()
    await this.driver.element(this.logoutButton[0], this.logoutButton[1]).click()
    await this.driver.waitForElement(this.logoutAlert[0], this.logoutAlert[1], 30000)
    return await this.driver.element(this.yesOnExit[0], this.yesOnExit[1]).click()
  }

  async openSettings () {
    await this.driver.element(this.navigationDrawerButton[0], this.navigationDrawerButton[1]).click()
    return await this.driver.element(this.settingsButton[0], this.settingsButton[1]).click()
  }
}

module.exports = navigationDrawer