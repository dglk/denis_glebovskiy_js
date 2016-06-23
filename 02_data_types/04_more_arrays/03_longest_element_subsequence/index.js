function longestSubsequence(array) {
  var length = array.length,
      maxStart = 0,
      maxCount = 1,
      last = 0;
  if (length == 0) {
    return [];
  }
  for (var current = 1; current < length; ++current) {
    if (array[current] !== array[current-1]) {
      if ((current - last) > maxCount) {
        maxStart = last;
        maxCount = current - last;
      }
      last = current;
    }
  };
  return ((length - last) > maxCount) ? array.slice(last)
    : array.slice(maxStart, maxStart + maxCount);
};

module.exports.longestSubsequence = longestSubsequence;
