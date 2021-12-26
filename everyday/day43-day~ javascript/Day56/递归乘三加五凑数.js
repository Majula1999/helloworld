function findSolution(target) {

  // var target = 151

  function find(start, history) {
    if (start == target) {
      console.log(history)
      return
    }
    if (start > target) {
      return null
    }
    return find(start * 3, '(' + history + ') * 3') ||
      find(start + 5, history + ' + 5')
  }

  return find(1, '1')
}
// 找到并输出所有可能


function findSolution(target) {

  // var target = 151

  function find(start, history) {
    if (start == target) {
      return history
    }
    if (start > target) {
      return null
    }
    return find(start * 3, '(' + history + ') * 3') ||
      find(start + 5, history + ' + 5')
  }

  return find(1, '1')
}
// 找到并返回第一个可能


function findSolution(target) {

  // var target = 151
  var array = []

  function find(start, history) {
    if (start == target) {
      array.push(history)
      return
    }
    if (start > target) {
      return
    }
    find(start * 3, '(' + history + ') * 3')
    find(start + 5, history + ' + 5')
  }

  find(1, '1')
  return array
}
// 找到并返回（放在数组里）所有的可能


// 可以看出从上往下是怎么走的
function findSolution(numbers) {
  var max = 0
  var maxHistory = null

  function find(x, y, sum, history) {
    if (x == numbers.length - 1) { // 已经走到最后一行了
      if (sum + numbers[x][y] > max) {
        max = sum + numbers[x][y]
        maxHistory = history
      }
      return
    }
    find(x + 1, y, sum + numbers[x][y], history + '左')
    find(x + 1, y + 1, sum + numbers[x][y], history + '右')
  }

  find(0, 0, 0, '')

  return [max, maxHistory]
}

var numbers = [
  [2],
  [3, 1],
  [9, 8, 4],
  [7, 1, 5, 6],
  [3, 0, 4, 9, 8],
  [10, 0, 0, 0, 0, 0],
  [10, 0, 0, 0, 0, 0, 200],
]

// 抽象成从下往上走，因为在倒数第二行的时候，就已经决定最后怎么走了，从下往上直接加就行了，但这种写法无法看出究竟是怎么走的，而上边的写法可以
function maxSum(x, y) {
  if (x == numbers.length - 1) {
    return numbers[x][y]
  }
  return numbers[x][y] + Math.max(maxSum(x + 1, y), maxSum(x + 1, y + 1))
}