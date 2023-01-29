// sorting with recursion
// [2,3,1,4]

// [2,1,3,4]

// [1,2,3,4]

let i = 0;
let j = 1;

let myArray = [2, 3, 1, 4];

let myNewList = [];

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

function sortRec(array) {
  if (isSorted(array)) {
    myNewList = array;
    return;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    sortRec(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    sortRec(array);
  }
}

sortRec(myArray);
console.log(myNewList);
