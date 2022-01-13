_.mapValues(grouped, (peoples) => val * 2);
function every(ary, predicare) {
  for(let i of ary) {
    if (!predicare(ary[i])) {
      return false;
    }
  }
  return true;
}
function some(ary, predicare) {
  for(let i of ary) {
    if (predicare(ary[i])) {
      return true;
    }
  }
  return true;
}