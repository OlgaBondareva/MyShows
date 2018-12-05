"use strict"

let wd = require('wd');
var serverConfig = process.env.npm_package_config_sauce ?
    serverConfigs.sauce : serverConfigs.local;
let driver =  wd.promiseChainRemote(serverConfig)

// let loginPage = function (driver) {
    let loginPage = function () {
    this.loginField = driver.elementByID('ru.myshows.activity:id/login_field')
    this.passField = driver.elementByID('ru.myshows.activity:id/password_field')
    this.loginButton = driver.elementByID('ru.myshows.activity:id/login_button')
}