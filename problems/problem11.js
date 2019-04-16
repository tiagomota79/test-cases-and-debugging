let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [[1, 2, 3, 4], [2, 5, 10, 20], [1, 2, 'duck', 4], [], [10, 100, 1000, 10000]];

let outputs = [10, 37, undefined, 0, 11110];

/*
  Make this function return the sum of all the numbers in the input array.
  If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
  let sum = (a, b) => a + b;
  function checkType(x) {
    return typeof x === 'number';
  }
  if (arr.length === 0) {
    return 0 ;
  } else if (arr.every(checkType)) {
    return arr.reduce(sum);
    }
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
