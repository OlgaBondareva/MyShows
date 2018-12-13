let navigationDrawer = require('.//navigationDrawer')

class loginPage extends navigationDrawer {

  constructor (driver) {
    super(driver)
  }

  get title () {return this.driver.elementByXPath('//android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView')}

  get loginButton () {return this.driver.elementById('ru.myshows.activity:id/login_button')}

  get passField () {return this.driver.elementById('ru.myshows.activity:id/password_field')}

  get loginField () {return this.driver.elementById('ru.myshows.activity:id/login_field')}

  async typeLogin (login) {
    await this.loginField.type(login)
  }

  async typePassword (pass) {
    await this.passField.type(pass)
  }

  async clickLoginButton () {
    await this.loginButton.click()
  }

  async enterCredentialsAndSubmit (login, password) {
    await this.typeLogin(login)
    await this.typePassword(password)
    await this.clickLoginButton()
  }

  async getTitle () {
    return await this.title.text()
  }

}

module.exports = loginPage
