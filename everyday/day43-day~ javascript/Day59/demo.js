Math[     name   ]     // 读到的是名为（name的求值结果）的属性
Math.name    // 读到的是名为name的属性
数组是值的有序集合
[2,3,5,7,11,13]

对象是值的具名集合
var obj = {
  name: '张三',
  gender: '男',
  age: 28,
}
function indexOf(array, value, fromIndex = 0) {
  for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
          return i
      }
  }
  return -1
}
