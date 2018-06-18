# grpl

[![build status](http://img.shields.io/travis/balou9/grpl.svg?style=flat)](http://travis-ci.org/balou9/grpl) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/balou9/grpl?branch=master&svg=true)](https://ci.appveyor.com/project/balou9/grpl)

***

grpl search for matches to argument pattern within each element of a character vector

***

## Get it!

```
npm install --save grpl
```

***

## Usage

``` js
var grpl = require('grpl')
var arr = ['Mikey', 'Allday', 'Mikey', 'Everyday', 'Allday']

console.log(grpl(arr, 'Allday', 'index'))
```

***

## API

### `grpl(arr, pattern, opts)`

***

## License

[MIT](./license.md)
