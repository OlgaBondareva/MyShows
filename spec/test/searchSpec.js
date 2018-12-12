let wd = require('wd')
let serverConfigs = require('../helpers/appium-server')
let _ = require('../../node_modules/underscore')
let credentials = require('../properties/creds')
let loginPage = require('../pageObject/loginPage')

describe('MyShows', function () {
  let driver
  let login

  beforeAll(async function () {
    let serverConfig = serverConfigs.local
    driver = wd.promiseChainRemote(serverConfig)

    let desired = _.clone(require('../helpers/caps').android27)
    desired.app = require('../helpers/app').androidApiDemos
    driver.init(desired)
  })

  it('should login with right credentials', async function () {
    login = new loginPage(driver)
    await login.enterCredentialsAndSubmit(credentials.login, credentials.pass)
    await login.searchShow('The Big Bang Theory')
    let result = await login.getFirstResult()
    expect(result).toBeNonEmptyObject()
  })
})