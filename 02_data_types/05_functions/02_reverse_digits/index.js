function reverseDigits(n) {
  var res = 0;
  while (n !== 0) {
    res = res * 10 + (n % 10);
    n = Math.trunc(n / 10);
  }
  return res;
};

module.exports.reverseDigits = reverseDigits;
