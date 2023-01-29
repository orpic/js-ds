// helper recursive

//

// let result = [];
// function helpRecursive(inputarray) {
//   if (inputarray.length === 0) return;

//   if (inputarray % 2 !== 0) {
//     result.push(inputarray[0]);
//   }
// }

function isOdd(array) {
  let result = [];

  function helpRecursive(inputarray) {
    if (inputarray.length === 0) return;

    if (inputarray[0] % 2 !== 0) {
      result.push(inputarray[0]);
    }
    helpRecursive(inputarray.slice(1));
  }

  helpRecursive(array);
  return result;
}

const res = isOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(res);
