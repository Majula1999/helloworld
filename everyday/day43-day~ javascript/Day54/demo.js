function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    return factorial (x - 1) * x;
  }
}

function fibb(n) {
  if (n < 3) {
    return 1
  } else {
  return fibb(n - 1) + fibb(n - 2)
  }
}

function inputAndReverse(n) {
  if (n == 0) {
    return
  }
  var x= Number(prompt());
  inputAndReverse(n - 1);
  console.log(x);
}