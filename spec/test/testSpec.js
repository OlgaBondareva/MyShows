let wd = require('wd')
let serverConfigs = require('../helpers/appium-servers')
let  _ = require('../../node_modules/underscore')

describe('MyShows', function () {
    let driver
    

    beforeAll(function() {
        let serverConfig = serverConfigs.local
        driver = wd.promiseChainRemote(serverConfig)

        let desired = _.clone(require("../helpers/caps").android27)
        desired.app = require('../helpers/apps').androidApiDemos
        return driver.init(desired).setImplicitWaitTimeout(30000)
    })

    it ('should login with right credentials', function () {
        return driver
        .elementByAccessibilityId('android:id/button3')
        .click()
        .elementByAccessibilityId('ru.myshows.activity:id/login_field')
        .type("test_test_test")
    })
})