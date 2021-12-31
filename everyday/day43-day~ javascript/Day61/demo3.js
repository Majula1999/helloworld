function hanoi(n, from, to) {
  var mid = 6 - from - to // 空闲杆的编号
  if (n == 1) {
      console.log(from, '->', to)
  } else {
      hanoi(n - 1, from, mid)
      console.log(from, '->', to)
      hanoi(n - 1, mid, to)
  }
}


hanoi(4, 1, 3)