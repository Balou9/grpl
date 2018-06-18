var tape = require('tape')
var grpl = require('./index.js')
var arr = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']
var returnMessage = 'Third argument should be index or bool'

tape('Output', function (t) {
  t.ok(grpl(arr, 'Allday', 'bool'), 'boolean is true')
  t.ok(grpl(arr, 'Mikey', 'index'), 'index is true')
  t.ok(grpl(arr, '419', 'nono') == returnMessage , 'return message')
  t.end()
})
