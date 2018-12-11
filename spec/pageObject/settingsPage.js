let navDrawer = require('.//navigationDrawer')
let locators = require('../properties/locators.json')

class settingsPage extends navDrawer {
  async constructor (driver) {
    super(driver)

    this.themeButton = ['xpath', '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.LinearLayout[2]/android.widget.RelativeLayout']
    this.lightButton = ['xpath', locators.themeColorButton + '[1]']
    this.darkButton = ['xpath', '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]']
    this.selectThemeAlert = ['id', 'ru.myshows.activity:id/alertTitle']

    await this.openSettings()
  }

  async changeThemeToBlack (app, caps, timeout = 30000) {
    await this.driver.element(this.themeButton[0], this.themeButton[1]).click()
    await this.driver.waitForElement(this.selectThemeAlert[0], this.selectThemeAlert[1], 30000)
    await this.driver.element(this.darkButton[0], this.darkButton[1]).click()
    // restart the application to apply theme changes
    await this.restartApp(app, caps, timeout)
  }

  async changeThemeToWhite (app, caps, timeout = 30000) {
    await this.driver.element(this.themeButton[0], this.themeButton[1]).click()
    await this.driver.element(this.lightButton[0], this.lightButton[1]).click()
    // restart the application to apply theme changes
    await this.restartApp(app, caps, timeout)
  }
}

module.exports = settingsPage