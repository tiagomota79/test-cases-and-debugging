let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = ['first','second','three','four','six'];

let outputs = ['t','d','e','r','x'];

// Make this function return the last letter of the string that is passed to it. If the string does not have a last letter, return undefined
function f(str) {
  return str.charAt(str.length-1);
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
