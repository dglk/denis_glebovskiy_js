var m = require('./index.js');

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
  compareArrays(m.longestSubsequence([]), []));
expect("Handles an array of length 1",
  compareArrays(m.longestSubsequence([1]), [1]));
expect("Handles a more complex case",
  compareArrays(m.longestSubsequence([2,1,1,3,6,1,7,2,2,2,4]), [2,2,2]));
expect("Handles longest sequence at the end",
  compareArrays(m.longestSubsequence([1,1,1,2,2,2,2]), [2,2,2,2]));
expect("Handles undefined array elements",
  compareArrays(m.longestSubsequence([undefined, undefined, 2, undefined]),
    [undefined, undefined]));
