let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [
  [[0, 1, 2, 3], [1, 3, 4, 5]],
  [[1, 2, 3], [1, 2, 3]],
  [2, 3],
  [[2, 4, 6, 8], [1, 2, 3, 4]],
  [[1, 1, 2, 3], [5, 8, 13, 21]],
];

let outputs = [
  [0, 2, 4, 5],
  [],
  undefined,
  [6, 8, 1, 3],
  [1, 1, 2, 3, 5, 8, 13, 21],
];

/*
Make this function return the elements that are unique to array1 and array2.
An element is unique if it only appears once.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([[0,1,2,3], [1,3,4,5]]); // [0,2,4,5]
uniqueElements([[1,2,3], [3,2,1]]); // []
uniqueElements(2); // undefined, not an array

HINTS: 
   - Use a for loop inside another for loop
   - You will need to run your logic 2 times
    - Once to get the unique elements in the first array
    - A second time to get the unique elements in the second array
*/
function getUniqueElements(arr1, arr2) {
  // let unique = [];
  // for (let l = 0; l < arr1.length; l++) {
  //   let curr = arr1[l];
  //   let isUnique = true;
  //   for (let p = 0; p < arr2.length; p++) {
  //     let other = arr2[p];
  //     if (curr === other) {
  //       isUnique = false;
  //     }
  //   }
  //   if (isUnique === true) {
  //     unique.push(curr);
  //   }
  // }
  return arr1.filter(num => arr2.every(otherNum => num !== otherNum));
  // return unique;
}

function f(input) {
  if (!Array.isArray(input[1])) return undefined;
  let unique = getUniqueElements(input[0], input[1]);
  unique = unique.concat(getUniqueElements(input[1], input[0]));
  return unique;
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
