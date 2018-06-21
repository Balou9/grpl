var grpl = require('./index.js')
var names = ['Mikey', 'Allday', 'Mikey', 'Everyday', '419', 'Allday', '419']

function testGrpl (arr) {
  return {
    'defaultIndexGrpl': grpl.indexGrpl(arr, 'Mikey'),
    'boolGrpl': grpl.boolGrpl(arr, 'Mikey'),
    'emptyOpts': grpl.grpl(arr, 'Mikey', ''),
    'indexOpts': grpl.grpl(arr, 'Mikey', 'index'),
    'specifyBoolIndex': grpl.grpl(arr, 'Mikey', 'bool'),
    'optsError': grpl.grpl(arr, 'Mikey', 'ssdsd')
  }
}

console.log(testGrpl(names))

// function testGrpl (arr) {
//   return {
//     'defaultOpts': grpl(arr, 'Mikey'),
//     'specifiyingIndexOpts': grpl(arr, 'Mikey', 'index'),
//     'emptyOpts': grpl(arr, 'Mikey', ''),
//     'falseOpts': grpl(arr, 'Mikey', 'dsadda'),
//     'boolOpts': grpl(arr, 'Mikey', 'bool'),
//     'numberPatternError': grpl(arr, 332)
//   }
// }
