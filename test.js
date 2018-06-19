var tape = require('tape')
var grpl = require('./index.js')
var arr = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']
var returnMessage = 'Third argument should be index or bool'

tape('Output', function (t) {
  t.ok(grpl(arr, 'Mikey', 'index'), 'index is true')
  t.ok(grpl(arr, 'Allday', 'bool'), 'boolean is true')
  t.ok(grpl(arr, '419', 'nono') === returnMessage , 'return message')
  t.end()
})

tape('Index number filtering', function (t) {
  var idcs = grpl(arr, 'Allday', 'index')
  var idct = grpl(arr, 'Everyday', 'index')
  t.ok(typeof idcs[0] === 'number', 'type test true')
  t.ok(idcs.length === 2 & idct.length === 1, 'length test true')
  t.end()
})
