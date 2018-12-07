class basePage {
  constructor (driver) {
    this.driver = driver
  }

  async getCurActivity () {
    return await this.driver.getCurrentActivity()
  }

  getDriver () {
    return this.driver
  }
}

module.exports = basePage