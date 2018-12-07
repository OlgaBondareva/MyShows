let Jasmine = require('jasmine')
let jasmine = new Jasmine()

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    '../spec/test/*Spec.js',
  ],
  helpers: [
    '../spec/helpers/*Helper.js'
  ]
})

jasmine.randomizeTests(false)
jasmine.execute()