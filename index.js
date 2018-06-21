// add return value to who

function boolGrpl (arr, pattern) {
  return arr.map(function (each) {
    if (each === pattern) return true
    else return false
  })
}

function indexGrpl (arr, pattern) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (pattern === arr[i]) result.push(i)
  }
  return result
}

function grpl (arr, pattern, opts) {
  if (!opts || opts === '' || opts === 'index') {
    return indexGrpl(arr, pattern)
  }
  else {
      if (opts === 'bool') {
      return boolGrpl(arr, pattern)
    }
  }
}

module.exports = {
  grpl,
  boolGrpl,
  indexGrpl
}
