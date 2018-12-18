let basePage = require('.//basePage')

class navigationDrawer extends basePage {
  constructor (driver) {
    super(driver)
    this.navDrawerXPath = '//android.widget.ImageButton[@content-desc="Open navigation drawer"]'
    this.logoutAlertId = 'ru.myshows.activity:id/alertTitle'
  }

  get navigationDrawerButton () {return this.driver.elementByXPath(this.navDrawerXPath)}

  get episodesButton () {return this.driver.elementByXPath('//*[@text=\'Episodes\']')}

  get showsButton () {return this.driver.elementByXPath('//*[@text=\'Shows\']')}

  get newsButton () {return this.driver.elementByXPath('//*[@text=\'News\']')}

  get settingsButton () {return this.driver.elementByXPath('//*[@text=\'Settings\']')}

  get hideAdvertisingButton () {return this.driver.elementByXPath('//*[@text=\'Hide advertising\']')}

  get logoutButton () {return this.driver.elementByXPath('//*[@text=\'Logout\']')}

  get logoutAlert () {return this.driver.elementById(this.logoutAlertId)}

  get yesOnExit () {return this.driver.elementById('android:id/button1')}

  async isLoggedIn () {
    await this.driver.waitForElementByXPath(this.navDrawerXPath, 5000, 500)
    return this.navigationDrawerButton.isDisplayed()
  }

  async logout () {
    await this.navigationDrawerButton.click()
    await this.logoutButton.click()
    await this.driver.waitForElementById(this.logoutAlertId, 5000, 500)
    await this.yesOnExit.click()
  }

  async openSettings () {
    await this.navigationDrawerButton.click()
    await this.settingsButton.click()
  }

  async openEpisodes () {
    await this.navigationDrawerButton.click()
    await this.episodesButton.click()
  }

  async openShows () {
    await this.navigationDrawerButton.click()
    await this.showsButton.click()
  }
}

module.exports = navigationDrawer
