var tape = require('tape')
var grpl = require('./index.js')
var names = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']

function isAnIndex (current) {
  return typeof current === 'number'
}

function isABool (current) {
  return typeof current === 'boolean'
}

tape('Base Indexical grpl function', function (t){
  t.ok(grpl.indexGrpl(names, 'Mikey').every(isAnIndex))
  t.end()
})

tape('Base Boolean grpl function', function (t) {
  t.ok(grpl.boolGrpl(names, 'Mikey').every(isABool))
  t.end()
})

tape('Testing boolean opts', function (t) {
  t.ok(grpl.grpl(names, 'Mikey', 'bool').every(isABool))
  t.end()
})

tape('Testing indexical opts', function (t) {
  t.ok(grpl.grpl(names, 'Mikey', '').every(isAnIndex))
  t.ok(grpl.grpl(names, 'Mikey', 'index').every(isAnIndex))
  t.end()
})

tape('Testing errors', function (t) {
  t.throws(grpl.grpl.bind(null, names, '419', 'ssdsd'),
    'Set opts to `bool` for boolean return. Default leads to indexical return.')
  t.end()
})
