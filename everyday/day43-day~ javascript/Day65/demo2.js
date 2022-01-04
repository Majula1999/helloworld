function deepEqual(a, b) {
  if (a === b) {
    return true
  }
  if (a !== a && b !== b) {
    return true
  }
  // 两个都是数组
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false
    } else {
      for (var i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i])) {
          return false
        }
      }
      return true
    }
  }
  // 两个都是对象
  if (!Array.isArray(a) && !Array.isArray(b) && typeof a === 'object' && typeof b === 'object') {
    for (var key in a) {
      // a的每个属性都要在b里
      // 一旦不在，就返回false
      if (!(key in b)) {
        return false
      }
    }
    for (var key in b) {
      // b的每个属性都要在a里
      // 一旦不在，就返回false
      if (!(key in a)) {
        return false
      }
    }

    for (var key in a) {
      if (!deepEqual(a[key], b[key])) {
        return false
      }
    }
    return true
  }
  return false
}