let wd = require('wd')
let actions = require('../helpers/actions')
let dHelper = require('../helpers/driverHelper')
let NavDrawer = require('./NavigationDrawer')

class BasePage {
  constructor (driver) {
    wd.addPromiseChainMethod('swipe', actions.swipe)
    wd.addPromiseChainMethod('tap', actions.tap)

    this.driver = driver
    this.navDrawer = new NavDrawer(this.driver)
  }

  get searchButton () { return this.driver.elementById('ru.myshows.activity:id/action_search')}

  get searchField () { return this.driver.elementById('ru.myshows.activity:id/search_src_text')}

  get searchResults () { return this.driver.elementsById('ru.myshows.activity:id/show_name')}

  //todo: do smt 
  get backButton () { return this.driver.elementByAccessibilityId('Navigate up')}

  get collapseButton () { return this.driver.elementByAccessibilityId('Collapse')}

  async isLoggedIn () {
    await this.driver.sleep(3000)
    return this.navDrawer.navigationDrawerButton.isDisplayed()
  }

  async searchShow (series) {
    await this.searchButton.click()
    await this.searchField.sendKeys(series)
    await this.driver.waitFor(dHelper.keyboardIsShown, 3000, 500)
    // tap the search button on mobile keyboard
    await this.driver.tap({x: 992, y: 1698})
    await this.driver.sleep(1000)
  }

  async getSearchResults () {
    let results = []
    let elements = await this.searchResults
    for (let i = 0; i < elements.length; i++) {
      results.push(await elements[i].text())
    }
    console.log(elements)
    return results
  }

  async doubleClickBack () {
    await this.backButton.click()
    await this.collapseButton.click()
  }
}

module.exports = BasePage
