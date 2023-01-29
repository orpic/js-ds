// array
// [1,2,3,4,3,5,4,6,7,8]
// count largest sum of consecutive [num] digits

// let num = 4
//

function largestSum(array, num) {
  if (num > array.length) return "invalid";

  let max = 0;
  for (i = 0; i < array.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += array[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
}

console.log(largestSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 2));
