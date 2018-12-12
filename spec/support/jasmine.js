let Jasmine = require('jasmine')
let jasmine = new Jasmine()

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    '../spec/test/mainPageSpec.js',
  ],
  helpers: [
    '../spec/helpers/*Helper.js',
    '../node_modules/jasmine-expect/index.js'
  ]
})

jasmine.randomizeTests(false)
jasmine.execute()