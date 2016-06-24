var m = require('./index.js');
var reverseDigits = m.reverseDigits;

function expect(desc, boolean) {
  console.log(desc+":", (boolean) ? "Yes" : "No");
};

expect("Reverse 0", reverseDigits(0) === 0);
expect("Reverse 1", reverseDigits(1) === 1);
expect("Reverse 125", reverseDigits(125) === 521);
expect("Reverse 9443943", reverseDigits(9443943) === 3493449);
expect("Reverse -1323", reverseDigits(-1323) === -3231);
expect("Reverse 100 (trailing zeros omitted",
  reverseDigits(100) === 1);
expect("Reverse 1004", reverseDigits(10004) === 40001);
