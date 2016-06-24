var m = require('./index.js');
var lastDigit = m.lastDigit;

function expect(desc, boolean) {
  console.log(desc+":", (boolean) ? "Yes" : "No");
};

expect("last of 0", lastDigit(0) === "zero");
expect("last of a positive number", lastDigit(145) === "five");
expect("last of a negative number", lastDigit(-18) === "eight");
