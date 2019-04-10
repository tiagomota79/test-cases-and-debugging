let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [[2, 7], [3, 3], ['ten', 9], [2.5, 4], [25, 10]];

let outputs = [14, 9, undefined, 10, 250];

/*
  The input of the function is an array.
  Make this function return the product of the two numbers in the array.
  If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(input) {
  return (typeof input[0] === 'number' && typeof input[1] === 'number') ? input[0] * input[1] : undefined;
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
