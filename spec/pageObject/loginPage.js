let wd = require('wd')

    class loginPage {

        constructor(driver) {
            this.driver = driver 
            this.loginField = wd.Element('id', 'ru.myshows.activity:id/login_field')
            this.loginField = wd.Element('id', 'ru.myshows.activity:id/login_field')
            this.passField = wd.Element('id', 'ru.myshows.activity:id/password_field')
            this.loginButton = wd.Element('id', 'ru.myshows.activity:id/login_button')
        }

        async typeLogin (login){
            this.driver.
            await this.loginField.type(login)
        }; 

        async typePassword (pass) {
            await this.passField.type(pass)
        }; 

        async clickLoginButton() {
            await this.loginButton.click()
        }; 

        async enterCredentialsAndSubmit (login, password) {
            await this.typeLogin(login)
            await this.typePassword(password)
            await this.clickLoginButton()
            await this.driver.sleep(10000)
            let loginActivity = await this.driver.getCurrentActivity()
            console.log(`First activity is ${loginActivity}`)
        }
}

module.exports = loginPage
