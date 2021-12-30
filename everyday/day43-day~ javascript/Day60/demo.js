function push(array, val) {
  array[array.length] = val;
  return array.length;
}

function pop(array) {
  let end = array[array.length - 1];
  array.length -= 1;
  return end;
}

function slice(array, start, end) {
  let result = [];
  for(i = start; i < end; i++) {
    result.push(array[i]);
  }
  return result;
}

function fill(array, val) {
  for(i = 0; i < array.length; i++) {
    array[i] = val;
  }
  return array;
}

function sum () {
  let result = 0;
  for (i = 0; i < sum.length; i++) {
    result += sum[i];
  }
  return result;
}