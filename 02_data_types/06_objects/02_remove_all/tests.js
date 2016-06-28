var m = require("./index.js");

function expect(desc, boolean) {
    console.log(desc+":", (boolean) ? "Yes" : "No");
};

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

expect("Simple case", function() {
  var x = [1, 2, 3, 4, 5, 6];
  x.remove(2);
  x.remove(6);
  return compareArrays(x, [1, 3, 4, 5]);
});

expect("Several elements", function() {
  var x = [1, 2, 2, 3, 2, 4, 2];
  x.remove(2);
  return compareArrays(x, [1, 3, 4]);
});

expect("No match", function() {
  var x = [1, 2, 3, 4, 5];
  x.remove(0);
  return compareArrays(x, [1, 2, 3, 4, 5]);
});

expect("Type correctness", function() {
  var x = [0, null, undefined, "0"];
  x.remove(0);
  return compareArrays(x, [null, undefined, "0"]);
});
