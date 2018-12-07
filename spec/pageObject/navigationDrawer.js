let basePage = require('.//basePage')
let locators = require('../properties/locators')

class navigationDrawer extends basePage {
  constructor (driver) {
    super(driver)
    // accessibility id
    this.navigationDrawerButton = ['Open navigation drawer']

    this.episodesButton = ['xpath', locators.navigationDrawerXpath + '[1]']
    this.showsButton = ['xpath', locators.navigationDrawerXpath + '[2]']
    this.newsButton = ['xpath', locators.navigationDrawerXpath + '[3]']
    this.settingsButton = ['xpath', locators.navigationDrawerXpath + '[4]']
    this.hideAdvertisingButton = ['xpath', locators.navigationDrawerXpath + '[5]']
    this.logoutButton = ['xpath', locators.navigationDrawerXpath + '[6]']
  }
}

module.exports = navigationDrawer