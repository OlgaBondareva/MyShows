let wd = require('wd')
let serverConfigs = require('../helpers/appium-server')
let credentials = require('../properties/creds')
let loginPage = require('../pageObject/loginPage')
let episodesPage = require('../pageObject/episodesPage')
// let helper = require('../helpers/specHelper')

describe('MyShows', function () {
  let driver
  let login, episodes
  let serial = 'The Big Bang Theory'

  beforeAll(async function () {
    let serverConfig = serverConfigs.local
    driver = await wd.promiseChainRemote(serverConfig)

    let desired = require('../helpers/caps').android27
    desired.app = require('../helpers/app').androidApiDemos
    await driver.init(desired).setImplicitWaitTimeout(30000)
  })

  afterAll(async function () {
    await driver.quit()
  })

  it('should have right title on login page', async function () {
    login = new loginPage(driver)
    let title = await login.getTitle()
    expect(title === 'my shows').toBeTrue()
  })

  it('should login with right credentials', async function () {
    await login.enterCredentialsAndSubmit(credentials.login, credentials.pass)
    let isLogged = await login.isLoggedIn()
    expect(isLogged).toBeTrue()
  })

  xit('should search requested series', async function () {
    await login.searchShow(serial)
    let results = await login.getSearchResults()
    for (let i = 0; i < results.length; i++) {
      expect(results[i].indexOf(serial) !== -1).toBeTrue()
    }
  })

  it('should login with right credentials', async function () {
    episodes = await new episodesPage(login.getDriver())
    await episodes.getRecommendedEpisodes()
  })
})