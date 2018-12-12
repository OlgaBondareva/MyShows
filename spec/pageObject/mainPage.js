let wd = require('wd')
let navDrawer = require('.//navigationDrawer')

class mainPage extends navDrawer {
  constructor (driver) {
    super(driver)
    // id
    this.searchButton = 'ru.myshows.activity:id/action_search'
    this.searchField = 'ru.myshows.activity:id/search_src_text'
    this.resultsContainer = 'ru.myshows.activity:id/shows_list'
    // xpath
    this.searchResult = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout'
    this.firstResult = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[1]'
  }

  async searchSerial (serial) {
    await this.driver.elementById(this.searchButton).click()
    await this.driver.elementById(this.searchField).sendKeys(serial)
    await (new wd.TouchAction(this.driver))
      .tap({x: 992, y: 1698}).perform()
  }

  async getFirstResult () {
    return await this.driver.elementByXPath(this.searchResult)
  }
}

module.exports = mainPage