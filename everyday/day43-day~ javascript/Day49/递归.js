// demo1
// function findSolution(target) {
//   function find(start, history) {
//     if (start == target) {
//       return history;
//     } else if (start > target) {
//       return null;
//     } else {
//       return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3)");
//     }
//   }
//   return find(1, "1");
// }
// console.log(findSolution(13));

// demo2
// function printFarmInventory(cows, chickens) {
//   var cowString = String(cows);
//   while (cowString.length < 3) {
//     cowString = "0" + cowString;
//     console.log(cowString + "Cows");
//   }
//   var chickenString = String(chickens);
//   while (chickenString.length < 3) {
//     chickenString = "0" + chickenString;
//     console.log(chickenString + " Chickens");
//   }
// }
// printFarmInventory(7, 11);

// 课后作业1
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else return b;
// }
// console.log(min(20, 10));

// 课后作业2
// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n == -1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }
// console.log(isEven(-1));

// 课后作业3
// function countChar(string, ch) {
//   let counted = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == ch) {
//       counted += 1;
//     }
//   }
//   return counted;
// }

// function countBs(string) {
//   return countChar(string, "B");
// }

// console.log(countBs("BBC"));
// console.log(countChar("kakkerlak", "k"));