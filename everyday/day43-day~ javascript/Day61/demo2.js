function hanoi(n, from, to, mid) {
  if (n == 1) {
      console.log(from, '->', to)
  } else {
      hanoi(n - 1, from, mid, to)
      hanoi(1, from, to)
      hanoi(n - 1, mid, to, from)
  }
}


hanoi(4, 'A', 'C', 'B')