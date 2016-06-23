function compare(a, b) {
  var length = (a.length > b.length) ? b.length : a.length;
  for (var i = 0; i < length; ++i) {
    if (a[i] > b[i]) {
      return 1;
    } else if (a[i] < b[i]) {
      return -1;
    }
  }
  return Math.sign(a.length - b.length);
};

exports.compare = compare;
