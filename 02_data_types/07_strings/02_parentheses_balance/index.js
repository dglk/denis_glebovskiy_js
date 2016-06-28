var isBalanced = function(str) {
  var count = 0,
      i = 0,
      c = undefined;
  if (typeof str !== "string") {
    throw new Error("Not a string!");
  };
  for (i = 0; i < str.length; ++i) {
    c = str.charAt(i);
    if (c === "(") {
      count += 1;
    } else if (c === ")") {
      count -= 1;
      if (count < 0) {
        return false;
      }
    }
  }
  return (count === 0);
};

module.exports.isBalanced = isBalanced;
