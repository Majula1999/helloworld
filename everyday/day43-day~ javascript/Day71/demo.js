var ary = [1, 2, 3, 4, 5, 6, 7];
var max = ary[0];
for (i = 0; i < ary.length; i++) {
  max = Math.max(ary[i], max);
  max > ary[i] ? ary[i] : max;
}
console.log(max);

