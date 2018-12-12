let wd = require('wd')
let serverConfigs = require('../helpers/appium-server')
let _ = require('../../node_modules/underscore')
let credentials = require('../properties/creds')
let loginPage = require('../pageObject/loginPage')

describe('MyShows', function () {
  let driver
  let login

  beforeAll(function () {
    let serverConfig = serverConfigs.local
    driver = wd.promiseChainRemote(serverConfig)

    let desired = _.clone(require('../helpers/caps').android27)
    desired.app = require('../helpers/app').androidApiDemos
    driver.init(desired)
  })

  it('should have right title on login page', async function () {
    login = new loginPage(driver)
    let title = await login.getTitle()
    expect(title === 'my shows').toBeTruthy()
  })

  it('should login with right credentials', async function () {
    await login.enterCredentialsAndSubmit(credentials.login, credentials.pass)
    let isLogged = await login.isLoggedIn()
    expect(isLogged).toBeTruthy()
  })
})