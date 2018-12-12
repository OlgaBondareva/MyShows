let navigationDrawer = require('.//navigationDrawer')

class loginPage extends navigationDrawer {

  constructor (driver) {
    super(driver)
    // id
    this.loginField = 'ru.myshows.activity:id/login_field'
    this.passField = 'ru.myshows.activity:id/password_field'
    this.loginButton = 'ru.myshows.activity:id/login_button'
    // xpath
    this.title = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.support.v4.widget.DrawerLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView'
  }

  async typeLogin (login) {
    await this.driver.elementById(this.loginField).type(login)
  }

  async typePassword (pass) {
    await this.driver.elementById(this.passField).type(pass)
  }

  async clickLoginButton () {
    await this.driver.elementById(this.loginButton).click()
  }

  async enterCredentialsAndSubmit (login, password) {
    await this.typeLogin(login)
    await this.typePassword(password)
    await this.clickLoginButton()
  }

  async getTitle () {
    return await this.driver.elementByXPath(this.title).text()
  }

}

module.exports = loginPage
