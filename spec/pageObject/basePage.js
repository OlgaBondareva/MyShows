let wd = require('wd')
let _ = require('../../node_modules/underscore')

class basePage {
  constructor (driver) {
    this.driver = driver
    // id
    this.searchButton = 'ru.myshows.activity:id/action_search'
    this.searchField = 'ru.myshows.activity:id/search_src_text'
    // xpath
    this.searchResult = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout'
  }

  getDriver () {
    return this.driver
  }

  async openApp (serverConfig, app, caps, timeout = 30000) {
    this.driver = wd.promiseChainRemote(serverConfig)
    let desired = _.clone(require(caps).android27)
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
      .tap({x: 992, y: 1698}).perform()
  }

  async getFirstResult () {
    return await this.driver.elementByXPath(this.searchResult)
  }
}

module.exports = basePage