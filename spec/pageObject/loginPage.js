let basePage = require('.//basePage')

class loginPage extends basePage {

  constructor (driver) {
    super(driver)
    this.loginField = ['id', 'ru.myshows.activity:id/login_field']
    this.loginField = ['id', 'ru.myshows.activity:id/login_field']
    this.passField = ['id', 'ru.myshows.activity:id/password_field']
    this.loginButton = ['id', 'ru.myshows.activity:id/login_button']
  }

  async typeLogin (login) {
    await this.driver.element(this.loginField[0], this.loginField[1]).type(login)
  };

  async typePassword (pass) {
    await this.driver.element(this.passField[0], this.passField[1]).type(pass)
  };

  async clickLoginButton () {
    await this.driver.element(this.loginButton[0], this.loginButton[1]).click()
  };

  async enterCredentialsAndSubmit (login, password) {
    await this.typeLogin(login)
    await this.typePassword(password)
    await this.clickLoginButton()
  }
}

module.exports = loginPage
