// counting unique elements
//  i j
// [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,7,7,8,8,9,99];

//i=0, j=1 loop goes on

//array[i]!==array[j]
// 1. i++;
// 2. array[i] = array[j]

function countingUnique(array) {
  if (array.length === 0) return "array is empty";

  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}

const result = countingUnique([
  1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9,
]);

console.log(result);
