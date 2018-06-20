var grpl = require('./index.js')
var arr = ['Mikey', 'Allday', 'Mikey', 'Everyday', '419', 'Allday', '419']


console.log({logicGrep: grpl(arr, 'Allday', 'bool'),
            indexicalGrep: grpl(arr, 'Allday', 'index'),
            falseGrep: grpl(arr, 'Allday', 'nono')})

console.log({logicGrep: grpl(arr, 'Mikey', 'bool'),
            indexicalGrep: grpl(arr, 'Mikey', 'index'),
            falseGrep: grpl(arr, 'Mikey', 'nono')})

console.log(grpl(arr, 'isdj', 'index'))
