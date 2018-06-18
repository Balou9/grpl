function grpl (arr, pattern, opts) {

  if (opts === 'index') {
    var result = []
    for (var i = 0; i < arr.length; i++){
      if (pattern === arr[i]) result.push(i)
      else result.push(undefined)
    }
    return result
  }

  if (opts === 'bool') {
    return arr.map(function (each) {
      if (each === pattern) return true
      else return false
    })
  }

  else return 'Third argument should be index or bool'
}


module.exports = grpl
