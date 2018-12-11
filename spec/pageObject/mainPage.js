let wd = require('wd')
let navDrawer = require('.//navigationDrawer')

class mainPage extends navDrawer {
  constructor (driver) {
    super(driver)

    this.searchButton = ['id', 'ru.myshows.activity:id/action_search']
    this.searchField = ['id', 'ru.myshows.activity:id/search_src_text']
    this.searchResults = ['xpath', '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[*]/android.widget.TextView']
    this.firstResult = ['xpath', '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[1]/android.widget.TextView']

  }

  async searchSerial (serial) {
    await this.driver.element(this.searchButton[0], this.searchButton[1]).click()
    await this.driver.element(this.searchField[0], this.searchField[1])
      .sendKeys(serial, wd.SPECIAL_KEYS.Return).sleep(5000)
  }

}

module.exports = mainPage