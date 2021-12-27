function countBs(str) {
  return countChar(str, 'B');
}

// function countChar(str, char) {
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     fi (str[i] === char) {
//       count++;
//     };
//   };
//   return count;
// }

function min(a, b) {
  return Math.min(a, b);
}

function isEven(n) {
  if (n % 2 == 1) {
    return n = 1;
  }
  if (n % 2 == 0) {
    return n = 0;
  }
  else {
    return isEven(n - 2);
  }
}

function myPow(x, n) {
if (n % 2 == 0) {
  sum = (a ** (n / 2)) ** 2; // 偶数
}
else if (n % 2 == 1) {
  sum = ((a ** (n / 2)) ** 2) * n; // 奇数
}
return myPow(sum);
}