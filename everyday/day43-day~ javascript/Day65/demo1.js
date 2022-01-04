function range(start, end, step = 1) {
  var argCount = arguments.length
  if (argCount == 1) {
    end = start
    start = 1
  }
  var result = []
  for (var i = start; step > 0 ? i <= end : i >= end; i += step) {
    result.push(i)
  }
  return result
}