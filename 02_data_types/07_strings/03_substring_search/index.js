var countSubstrings = function(key, string) {
  var key = ("string" === typeof key) ? key : ('' + key),
      string = ("string" === typeof string) ? string : ('' + string),
      regex = new RegExp(key, 'ig'),
      count = 0;

  if (key === '') {
    return null;
  }

  while (regex.exec(string)) {
    count += 1;
  };

  return count;
};

module.exports.countSubstrings = countSubstrings;
