let wd = require('wd')
let serverConfigs = require('./appium-server')
let _ = require('underscore')
/*let serverConfig = serverConfigs.local
let driver = wd.promiseChainRemote(serverConfig)*/

beforeAll(async function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000

  /*  let desired = _.clone(require('../helpers/caps').android27)
    desired.app = require('./app').androidApiDemos
    await driver.init(desired)*/
})

exports.driverConfig = async function () {
  let serverConfig = serverConfigs.local
  let driver = wd.promiseChainRemote(serverConfig)

  let desired = _.clone(require('../helpers/caps').android27)
  desired.app = require('./app').androidApiDemos
  await driver.init(desired)
  return driver
}

exports.exitDriver = async function(driver) {
  await driver.quit()
}