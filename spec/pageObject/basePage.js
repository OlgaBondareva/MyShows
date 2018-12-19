let wd = require('wd')
let actions = require('../helpers/actions')
let dHelper = require('../helpers/driverHelper')

class basePage {
  constructor (driver) {
    wd.addPromiseChainMethod('swipe', actions.swipe)
    wd.addPromiseChainMethod('tap', actions.tap)

    this.driver = driver
  }

  get searchButton () { return this.driver.elementById('ru.myshows.activity:id/action_search')}

  get searchField () { return this.driver.elementById('ru.myshows.activity:id/search_src_text')}

  get searchResults () { return this.driver.elementsByXPath('//android.support.v7.widget.RecyclerView/android.widget.RelativeLayout/android.widget.TextView')}

  get backButton () {return this.driver.elementByXPath('//android.widget.ImageButton[@content-desc="Navigate up"]')}

  get collapseButton () {return this.driver.elementByXPath('//android.widget.ImageButton[@content-desc="Collapse"]')}

  getDriver () {
    return this.driver
  }

  async searchShow (serial) {
    await this.searchButton.click()
    await this.searchField.sendKeys(serial)
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
    return results
  }

  async doubleClickBack() {
    await this.backButton.click()
    await this.collapseButton.click()
  }
}

module.exports = basePage
