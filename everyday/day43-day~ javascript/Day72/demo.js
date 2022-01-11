// 把函数f的前若干个参数固定为fixArgs
function bind (f, ...fixedArgs) {

  return function (...args) {
    return f(...fixedArgs, ...args);
  }
}

// 快速排序
function quickSort (ary) {
  let randomIdx = Math.floor (Math.random() * ary.length);
  if (ary.length <= 1) {
    return arr;
  }
  let standPoint = Math.floor(arr.length / 2);
  var sP = splice(standPoint, 1)
  let left = [];
  let right = [];
}