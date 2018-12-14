let navigationDrawer = require('.//navigationDrawer')

class loginPage extends navigationDrawer {

  constructor (driver) {
    super(driver)
  }

  get title () {return this.driver.elementByXPath('//android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView')}

  get loginButton () {return this.driver.elementById('ru.myshows.activity:id/login_button')}

  get passField () {return this.driver.elementById('ru.myshows.activity:id/password_field')}

  get loginField () {return this.driver.elementById('ru.myshows.activity:id/login_field')}

  async enterCredentialsAndSubmit (login, password) {
    await this.loginField.type(login)
    await this.passField.type(password)
    await this.loginButton.click()
  }

  async getTitle () {
    return await this.title.text()
  }

}

module.exports = loginPage
