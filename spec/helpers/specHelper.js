let wd = require('wd')
let serverConfigs = require('../helpers/appium-servers')
let _ = require('underscore')
let loginPage = require('../pageObject/loginPage.js')

let serverConfig = serverConfigs.local
let driver = wd.promiseChainRemote(serverConfig)

beforeAll(async function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000

  let desired = _.clone(require('../helpers/caps').android27)
  desired.app = require('../helpers/apps').androidApiDemos
  driver.init(desired).setImplicitWaitTimeout(30000)

  let logPage = new loginPage(driver)
  await logPage.enterCredentialsAndSubmit('test_test_test', '123456')
})

afterAll(async function () {
  await driver.quit()
})

module.exports.driver = driver