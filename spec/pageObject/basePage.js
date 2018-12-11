let wd = require('wd')
let _ = require('../../node_modules/underscore')

class basePage {
  constructor (driver) {
    this.driver = driver
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
}

module.exports = basePage