var grpl = require('./index.js')
var names = ['Mikey', 'Allday', 'Mikey', 'Everyday', '419', 'Allday', '419']


function testGrpl (arr) {
  return {
    'defaultOpts': grpl(arr, 'Mikey'),
    'specifiyingIndexOpts': grpl(arr, 'Mikey', 'index'),
    'emptyOpts': grpl(arr, 'Mikey', ''),
    'falseOpts': grpl(arr, 'Mikey', 'dsadda'),
    'boolOpts': grpl(arr, 'Mikey', 'bool'),
    'numberPatternError': grpl(arr, 332)
  }
}

console.log(testGrpl(names))
