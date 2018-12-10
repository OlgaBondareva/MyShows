let wd = require('wd')
let serverConfigs = require('../helpers/appium-servers')
let _ = require('../../node_modules/underscore')
let credentials = require('../properties/creds')
let loginPage = require('../pageObject/loginPage')
let settingsPage = require('../pageObject/settingsPage')

describe('MyShows', function () {
  let driver
  let login, settings
  let app = '../helpers/app'
  let caps = '../helpers/caps'

  beforeAll(function () {
    let serverConfig = serverConfigs.local
    driver = wd.promiseChainRemote(serverConfig)

    let desired = _.clone(require('../helpers/caps').android27)
    desired.app = require('../helpers/app').androidApiDemos
    return driver.init(desired).setImplicitWaitTimeout(30000)
  })

  afterAll(async function () {
    await settings.logout()
  })

  it('should login with right credentials', async function () {
    login = new loginPage(driver)
    await login.enterCredentialsAndSubmit(credentials.login, credentials.pass)
    settings = new settingsPage(login.getDriver())
    await settings.changeThemeToBlack(serverConfigs.local, app, caps, 30000)
  })
})