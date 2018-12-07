let wd = require('wd')
let using = require('jasmine-data-provider')
let dataProvider = require('../properties/credentials')
let serverConfigs = require('../helpers/appium-servers')
let _ = require('../../node_modules/underscore')
let loginPage = require('../pageObject/loginPage.js')

describe('MyShows', function () {
  let driver
  let logPage

  beforeAll(function () {
    let serverConfig = serverConfigs.local
    driver = wd.promiseChainRemote(serverConfig)

    let desired = _.clone(require('../helpers/caps').android27)
    desired.app = require('../helpers/apps').androidApiDemos
    return driver.init(desired).setImplicitWaitTimeout(30000)
  })

  afterAll(async function () {
    return await driver.quit()
  })

  using(dataProvider, function (credentials) {
    it('should login with right credentials', async function () {
      logPage = new loginPage(driver)
      let activity1 = await logPage.getCurActivity()
      await logPage.enterCredentialsAndSubmit(credentials.login, credentials.pass)
      let activity2 = await logPage.getCurActivity()
      console.log(activity1)
      console.log(activity2)
      expect(activity1 === activity2).toBeFalsy()
    })
  })
})