let wd = require('wd')
let serverConfigs = require('../helpers/appium-servers')
let  _ = require('../../node_modules/underscore')
let loginPage = require('../pageObject/loginPage.js')

describe('MyShows', function () {
  let driver
  let logPage

  beforeAll(function() {
    let serverConfig = serverConfigs.local
    driver = wd.promiseChainRemote(serverConfig)

    let desired = _.clone(require("../helpers/caps").android27)
    desired.app = require('../helpers/apps').androidApiDemos
    return driver.init(desired).setImplicitWaitTimeout(30000)
  })

  afterAll(async function () {
    return await driver.quit()
  })

  it ('should login with right credentials', async function () {
    logPage = new loginPage(driver)
    await logPage.enterCredentialsAndSubmit('test_test_test', '123456')
  })
})