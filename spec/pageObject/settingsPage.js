let navDrawer = require('.//navigationDrawer')
let locators = require('../properties/locators.json')

class settingsPage extends navDrawer {
  constructor (driver) {
    super(driver)

    this.themeButton = ['xpath', '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.LinearLayout[2]/android.widget.RelativeLayout']
    this.lightButton = ['xpath', locators.themeColorButton + '[1]']
    this.darkButton = ['xpath', locators.themeColorButton + '[2]']
    this.cancelButton = ['id', 'android:id/button2']
  }

  async changeThemeToBlack () {
    await this.driver.element(this.themeButton[0], this.themeButton[1]).click()
    await this.driver.element(this.darkButton[0], this.darkButton[1]).click()
    // todo
    // add restarting the application
  }

  async changeThemeToWhite () {
    await this.driver.element(this.themeButton[0], this.themeButton[1]).click()
    await this.driver.element(this.lightButton[0], this.lightButton[1]).click()
    // todo
    // add restarting the app
  }
}

module.exports = settingsPage