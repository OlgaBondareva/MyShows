let wd = require('wd')

class basePage {
  constructor (driver) {
    this.driver = driver
    // id
    this.searchButton = 'ru.myshows.activity:id/action_search'
    this.searchField = 'ru.myshows.activity:id/search_src_text'
    // xpath
    this.searchResults = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[*]/android.widget.TextView'
  }

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
    await this.driver.elementById(this.searchButton).click()
    await this.driver.elementById(this.searchField).sendKeys(serial)
    await (new wd.TouchAction(this.driver))
    // tap the search button on mobile keyboard
      .tap({x: 992, y: 1698}).perform()
  }

  async getSearchResults () {
    let results = []
    let elements = await this.driver.elementsByXPath(this.searchResults)
    for (let i = 0; i < elements.length; i++) {
      results.push(await elements[i].text())
    }
    return results
  }
}

module.exports = basePage