let wd = require('wd')
let actions = require('../helpers/actions')

class basePage {
  constructor (driver) {
    wd.addPromiseChainMethod('swipe', actions.swipe)
    wd.addPromiseChainMethod('tap', actions.tap)

    this.driver = driver
  }

  get searchButton () { return this.driver.elementById('ru.myshows.activity:id/action_search')}

  get searchField () { return this.driver.elementById('ru.myshows.activity:id/search_src_text')}

  get searchResults () { return this.driver.elementsByXPath('//android.support.v7.widget.RecyclerView/android.widget.RelativeLayout/android.widget.TextView')}

  getDriver () {
    return this.driver
  }

  async openApp (serverConfig, app, caps, timeout = 30000) {
    this.driver = wd.promiseChainRemote(serverConfig)
    let desired = require(caps).android27
    desired.app = require(app).androidApiDemos
    return this.driver.init(desired).setImplicitWaitTimeout(timeout)
  }

  async restartApp (serverConfig, app, caps, timeout = 30000) {
    await this.driver.closeApp()
    await this.driver.quit()
    return this.openApp(serverConfig, app, caps, timeout)
  }

  async searchShow (serial) {
    await this.searchButton.click()
    await this.searchField.sendKeys(serial)
    // tap the search button on mobile keyboard
    await this.driver.tap({x: 992, y: 1698})
  }

  async getSearchResults () {
    let results = []
    let elements = await this.searchResults
    for (let i = 0; i < elements.length; i++) {
      results.push(await elements[i].text())
    }
    return results
  }
}

module.exports = basePage