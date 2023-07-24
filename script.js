//---------------------------------------------------- 1. reverse ----------------------------------------------------

// function reverseStr(s) {
//   let newS = s.reverse();
//   console.log(newS);
// }
// console.log(reverseStr(["h", "e", "l", "l", "o"]));
// console.log(reverseStr(["H", "a", "n", "n", "a", "h"]));

//---------------------------------------------------- 6. common prefix ----------------------------------------------------

// function commonPrefix(prefix) {
//   const newArr = [];

//   for (let i = 0; i < prefix[0].length; i++) {
//     if (prefix[0][i] === prefix[1][i] && prefix[0][i] === prefix[2][i]) {
//       newArr.push(prefix[0][i]);
//     }
//   }
//   if (newArr.length>0) {
//     return newArr;
//   } else {
//     return ("");
//   }
// }
// console.log(commonPrefix(["flover", "flow", "floight"]));
// console.log(commonPrefix(["dog", "racecar", "car"]));

//---------------------------------------------------- 5. intersection ----------------------------------------------------

// function intersectionFunc(num1, num2) {
//   let numbers = [];
//   num2.forEach(i => {
//     if (num1.includes(i)) {
//         numbers.push(i)
//     }
//   });
//   return numbers;
// }
// console.log(intersectionFunc([1, 2, 2, 1], [2, 2]));

//---------------------------------------------------- 3. choose common numbers ----------------------------------------------------

// function commonNums(nums) {
//     nums=nums.sort()
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i]===nums[i+1]) {
//         return true;
//     }else {
//         return false;
//     }
//   }
// }
// console.log(commonNums([1, 2, 3, 1]));
// console.log(commonNums([1, 2, 3, 4]));
// console.log(commonNums([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

//---------------------------------------------------- 2. pow ----------------------------------------------------

// function powFunc(n) {
//   if (n === 0) {
//     return false;
//   }
//   while (n % 3 === 0) {
//     n = n / 3;
//   }
//   return n === 1;
// }
// console.log(powFunc(27));

//---------------------------------------------------- 4. arr+1  ----------------------------------------------------

// function plusOne(num) {
//   let strNum = num.join("");
//   newNum = parseInt(strNum) + 1;
//   arrNum = newNum.toString().split('');

//   return arrNum;
// }
// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4,3,2,1]));

//---------------------------------------------------- 7. Roman numbers ----------------------------------------------------
function romanNumeral(str) {
  const arr = str.split('')

  let obj ={
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  }
  const keys = Object.keys(obj)

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    
    const element = arr[i];
    for (let k = 0; k < keys.length; k++) {
      const element = keys[k];
      if (arr[i]=== keys[k]) {
        const el=arr[i]
        console.log(el)
        total =obj[arr[i]] +obj[arr[i]]  
      }
    }
    
  }
  return total
}

console.log(romanNumeral("IDI"));
//---------------------------------------------------- 8. ----------------------------------------------------
