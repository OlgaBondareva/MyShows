class NavigationDrawer {
  constructor (driver) {
    this.driver = driver
  }

  get navigationDrawerButton () {return this.driver.elementByAccessibilityId('Open navigation drawer')}

  get episodesButton () {return this.driver.elementByXPath('//*[@text=\'Episodes\']')}

  get showsButton () {return this.driver.elementByXPath('//*[@text=\'Shows\']')}

  async openEpisodes () {
    await this.navigationDrawerButton.click()
    await this.episodesButton.click()
  }

  async openShows () {
    await this.navigationDrawerButton.click()
    await this.showsButton.click()
  }
}

module.exports = NavigationDrawer
