let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [
  'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Cursus euismod quis viverra nibh cras pulvinar mattis. Congue nisi vitae suscipit tellus mauris a diam. Sit amet est placerat in egestas.',
];

let outputs = [
  'Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam ut lab\nore et dolore magna aliqua, ut enim ad m\ninim veniam, quis nostrud exercitation.',
  'Ut enim ad minim veniam, quis nostrud ex\nercitation ullamco laboris nisi ut aliqu\nip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit i\nn voluptate velit esse cillum dolore eu \nfugiat nulla pariatur.',
  'Excepteur sint occaecat cupidatat non pr\noident, sunt in culpa qui officia deseru\nnt mollit anim id est laborum.',
  'Cursus euismod quis viverra nibh cras pu\nlvinar mattis. Congue nisi vitae suscipi\nt tellus mauris a diam. Sit amet est pla\ncerat in egestas.',
];

/*
Make this function return the input string wrapped to 40 characters per line. 
This means you'll have to insert a newline \n character after every 40 characters in the input string. 
If the next character after a cut is a space, then do not display it. 

For example with the input:

Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam

the output would be:

Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam

instead of:

Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam

even though there is a space before the a in adipisicing
*/
function f(str) {
  let tempWrap = str.match(/[\s\S]{1,40}/g);
  let wrap = [];
  for (let i = 0; i < tempWrap.length; i++) {
    if (tempWrap[i].charAt(0) === ' ') {
      let wrapTemp2 = tempWrap[i].replace(tempWrap[i].charAt(0), '');
      wrap.push(wrapTemp2);
    } else {
      wrap.push(tempWrap[i]);
    }
  }
  let strWrap = wrap.join('\n');
  return strWrap;
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
