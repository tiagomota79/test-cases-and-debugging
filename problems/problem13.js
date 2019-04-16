let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = ['Not a palindrome', 'step on no pets', 'Step on no pets', 'neveroddoreven', 'Never odd or even'];

let outputs = [false, true, false, true, false];

/*
Make this function return true if the input string is a palindrome, and false otherwise. A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
function f(str) {
  let split = str.split('');
  let revArr = [];
  for (l = str.length - 1; l >= 0; l--) {
    revArr.push(split[l]);
  }
  if (str === revArr.join('')) {
    return true
  }
  return false
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
