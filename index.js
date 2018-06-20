// add errorMessage to numberPatternError and test with message
// false Opts should return error; empty opts, index and bool is allowed --> test

function grpl (arr, pattern, opts) {
  // restart with 6 and else go
  if (opts != 'index' || opts != 'bool') throw new TypeError('Enter `bool` as a third argument to return a logical vector')
  if (typeof pattern != 'string') throw new TypeError('Pattern should be string')

  if (!opts || opts === 'index') {
    var result = []
    for (var i = 0; i < arr.length; i++){
      if (pattern === arr[i]) result.push(i)
    }
    return result
  }

  if (opts === 'bool') {
    return arr.map(function (each) {
      if (each === pattern) return true
      else return false
    })
  }

}

module.exports = grpl
