var tape = require('tape')
var grpl = require('./index.js')
var arr = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']

tape('Output', function (t) {
  t.ok(grpl(arr, 'Mikey', 'index'), 'index is true')
  t.ok(grpl(arr, 'Allday', 'bool'), 'boolean is true')
  t.end()
})


// // End test with error how?
// tape.only('Errors Part 1', function (t) {
//
//   t.throws(function () {
//     grpl(arr, 'Mikey', 'schnok')
//   }, 'Enter `bool` as a third argument to return a logical vector')
//   t.end()
// })

tape.only('Error Part 2', function (t) {

  t.throws(grpl.bind(null, arr, 419),
    'Pattern should be string')
  t.end()
})

tape('Index number filtering', function (t) {
  var idcs = grpl(arr, 'Allday', 'index')
  var idct = grpl(arr, 'Everyday')
  console.log({idcs, idct})

  t.ok(typeof idcs[0] === 'number', 'type test true')
  t.ok(idcs.length === 2 & idct.length === 1, 'length test true')
  t.end()
})
