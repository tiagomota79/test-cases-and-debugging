let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = ['hello world', 'TAKE ME TO YOUR LEADER', 'aNYONE SEEN MY CAPS LOCK?', 'i ThiNk My KeYBoArD hAS IssUEs', ' What about the space in the beginning of this sentence?'];

let outputs = ['Hello world', 'Take me to your leader', 'Anyone seen my caps lock?', 'I think my keyboard has issues', ' what about the space in the beginning of this sentence?'];

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

HINT:
   - Use a for loop to capitalize the words one by one
   - Use the toUpperCase string method
*/
function f(str) {
  let split = str.split('');
  let cap = [];
  cap.push(str.charAt(0).toUpperCase());
  for (l = 1; l < str.length; l++) {
    cap.push(split[l].toLowerCase());
  }
  return(cap.join(''));
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
