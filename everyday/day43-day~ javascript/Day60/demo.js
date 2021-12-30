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