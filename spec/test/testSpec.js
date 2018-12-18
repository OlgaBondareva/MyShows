let wd = require('wd')
let serverConfigs = require('../helpers/appium-server')
let credentials = require('../properties/creds')
let loginPage = require('../pageObject/loginPage')
let episodesPage = require('../pageObject/showsPage')

describe('MyShows', function () {
  let driver
  let login, episodes
  let serial1 = 'The Big Bang Theory'
  let serial2 = 'Death Note'

  beforeAll(async function () {
    let serverConfig = serverConfigs.local
    driver = await wd.promiseChainRemote(serverConfig)
    await driver.sleep(30000)
    let desired = require('../helpers/caps').android27
    desired.app = require('../helpers/app').androidMyShows
    await driver.init(desired).setImplicitWaitTimeout(50000)
  })

  afterAll(async function () {
    await driver.quit()
  })

  it('should have right title on login page', async function () {
    login = await new loginPage(driver)
    let title = await login.getTitle()
    expect(title === 'my shows').toBeTrue()
  })

  it('should login with right credentials', async function () {
    await login.enterCredentialsAndSubmit(credentials.login, credentials.pass)
    let isLogged = await login.isLoggedIn()
    expect(isLogged).toBeTrue()
  })

  it('should search requested series', async function () {
    await login.searchShow(serial1)
    let results = await login.getSearchResults()
    for (let i = 0; i < results.length; i++) {
      expect(results[i].indexOf(serial1) !== -1).toBeTrue()
    }
  })

  it('should add given serial to watching category', async function () {
    episodes = await new episodesPage(login.getDriver())
    await episodes.addToWatching(serial2)
    let isAdded = await episodes.checkWatchingEpisodes(serial2)
    expect(isAdded).toBeTrue()
    await episodes.removeFromWatching(serial2)
  })
})
