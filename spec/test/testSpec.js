let wd = require('wd')
let serverConfigs = require('../helpers/appium-server')
let credentials = require('../properties/creds')
let loginPage = require('../pageObject/LoginPage')
let episodesPage = require('../pageObject/ShowsPage')

describe('MyShows', () => {
  let driver
  let login, episodes
  let series1 = 'Big Bang'
  let series2 = 'Death Note'

  beforeAll(async () => {
    let serverConfig = serverConfigs.local
    driver = await wd.promiseChainRemote(serverConfig)
    await driver.sleep(30000)
    let desired = require('../helpers/caps').android27
    desired.app = require('../helpers/app').androidMyShows
    await driver.init(desired).setImplicitWaitTimeout(6000)
  })

  afterAll(async () => {
    await driver.quit()
  })

  it('should have right title on login page', async () => {
    login = await new loginPage(driver)
    let title = await login.getTitle()
    expect(title).toEqual('my shows')
  })

  it('should login with right credentials', async () => {
    await login.enterCredentialsAndSubmit(credentials.login, credentials.pass)
    let isLogged = await login.isLoggedIn()
    expect(isLogged).toBeTrue()
  })

  it('should search requested series', async () => {
    await login.searchShow(series1)
    let results = await login.getSearchResults()
    for (let i = 0; i < results.length; i++) {
      expect(results[i].indexOf(series1) !== -1).toBeTrue()
    }
    await login.doubleClickBack()
  })

  it('should add given series to watching category', async () => {
    episodes = await new episodesPage(driver)
    await episodes.addToWatching(series2)
    let isAdded = await episodes.isSeriesAddedToWatching(series2)
    expect(isAdded).toBeTrue()
    await episodes.removeFromWatching(series2)
  })
})
