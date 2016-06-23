var m = require('./index.js');
var func = m.longestIncreasingSubsequence;

function compareArrays(a0, a1) {
  if (a0.length !== a1.length) {
    return false;
  } else {
    for (var i = 0; i < a0.length; ++i) {
      if (a0[i] !== a1[i]) {
        return false;
      }
    }
    return true;
  }
};

function expect(desc, boolean) {
  console.log(desc+":", (boolean) ? "Yes" : "No");
};

expect("Handles empty arrays",
  compareArrays(func([]), []));
expect("Handles an array of length 1",
  compareArrays(func([1]), [1]));
expect("Handles a more complex case",
  compareArrays(func([2, 1, 1, 3, 6, 1, 7, 2, 2, 2, 4]), [1, 3, 6]));
expect("Handles longest sequence at the end",
  compareArrays(func([1, 1, 1, 1, 2, 3, 4]), [1, 2, 3, 4]));
expect("Multiple increasing sequences?",
  compareArrays(func([1, 2, 3, 100, 101, 102, 99, 200, 201, 209, 211, -8]),
  [1, 2, 3, 100, 101, 102]))
