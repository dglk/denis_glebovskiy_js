function lastDigit(n) {
  var numbers = ["zero", "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine"];
  return numbers[Math.abs(n % 10)];
};

module.exports.lastDigit = lastDigit;
