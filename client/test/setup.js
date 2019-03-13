require('jsdom-global')(undefined, { pretendToBeVisual: true, url: 'http://localhost' })
global.expect = require('expect')

window.Date = Date
