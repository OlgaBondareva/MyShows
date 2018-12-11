let wd = require('wd')
let serverConfigs = require('../helpers/appium-servers')
let _ = require('../../node_modules/underscore')
let credentials = require('../properties/creds')
let loginPage = require('../pageObject/loginPage')
let mainPage = require('../pageObject/mainPage')

describe('MyShows', function () {
  let driver
  let login, main

  beforeAll(function () {
    let serverConfig = serverConfigs.local
    driver = wd.promiseChainRemote(serverConfig)

    let desired = _.clone(require('../helpers/caps').android27)
    desired.app = require('../helpers/app').androidApiDemos
    return driver.init(desired).setImplicitWaitTimeout(30000)
  })

  afterAll(async function () {
    // await main.logout()
  })

  it('should login with right credentials', async function () {
    login = await new loginPage(driver)
    await login.enterCredentialsAndSubmit(credentials.login, credentials.pass)
    main = await new mainPage(login.getDriver())
    await main.searchSerial('The Big Bang Theory')
  })
})