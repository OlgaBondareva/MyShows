let wd = require('wd')
let serverConfigs = require('../helpers/appium-servers')
let _ = require('underscore')

let serverConfig = serverConfigs.local
let driver = wd.promiseChainRemote(serverConfig)

beforeAll(async function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000

  let desired = _.clone(require('../helpers/caps').android27)
  desired.app = require('./app').androidApiDemos
  driver.init(desired).setImplicitWaitTimeout(30000)
})

afterAll(async function () {
  await driver.quit()
})

module.exports.driver = driver