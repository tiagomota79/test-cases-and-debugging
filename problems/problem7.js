let verifyEquals = require('./verify-equals.js');

// we need 7 test cases.
let inputs = [['ma', 3], ['pa', 2], ['be', 4], ['ha', 6], ['ugh', -1], ['ok', 1], ['fa', 'fu']];

let outputs = ['mamama', 'papa', 'bebebebe', 'hahahahahaha', '', 'ok', undefined];

/*
The function input is an array. The first element of the array is a string. The second is a number.
Make this function return the string repeated as many times as specified by the second element of the array. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // ""
*/
function f(arr) {
  if (arr[1] > 0){
    return arr[0].repeat(arr[1]);
  } else if (arr[1] <= 0) {
    return ''
  } else {
    return undefined
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
runTest(5);
runTest(6);
console.log('All tests passed for ' + __filename);
