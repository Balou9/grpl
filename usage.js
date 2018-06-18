var grpl = require('./index.js')
var arr = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']


console.log({logicGrep: grpl(arr, 'Allday', 'bool'),
            indexicalGrep: grpl(arr, 'Allday', 'index')})
