let navDrawer = require('.//navigationDrawer')
let showPage = require('.//showPage')

class showsListPage extends navDrawer, showPage {
  constructor (driver) {
    super(driver)
    // xpath
    this.visibleSerials = '//android.support.v7.widget.RecyclerView//android.widget.TextView[@class=\'android.widget.TextView\']'
  }

  async findShowInRecommended (serial) {
    // tap in the center to find more shows
    await this.driver.tap({x: 540, y: 960})
    while (true) {
      let visibleRecommended = await this.driver.elementsByXPath(this.visibleSerials)
      for (let i = 0; i < visibleRecommended.length; i++) {
        let nextSerial = await visibleRecommended[i].text()
        console.log(nextSerial)
        if (nextSerial === serial) {
          return visibleRecommended[i].click()
        }
      }
      await this.driver.swipe({
        startX: 830, startY: 1640,
        endX: 830, endY: 230,
        duration: 800
      })
    }
  }

  async addToWatching (serial) {
    await this.findShowInRecommended(serial)
    await this.addShowToWatching()
    await this.driver.back()
    await this.clickHamburgerIcon()
    await this.openEpisodes()
    let added = await this.driver.elementByXPath(`//android.widget.TextView[@text=${serial}]`)
    return added !== undefined
  }
}

module.exports = showsListPage