let m = 3, n = 2;
let nums1 = [1, 2, 3];
let nums2 = [4, 5];
let num = new Array(m + n - 3).fill(0);
// for (let i = nums1.length - 1; i >= 0; i--) {
//   num.unshift(nums1[i]);
// }
// for (let j = nums2.length - 1; j >= 0; j--) {
//   num.unshift(nums2[j]);
// }
num = nums1.concat(nums2);
console.log(num);