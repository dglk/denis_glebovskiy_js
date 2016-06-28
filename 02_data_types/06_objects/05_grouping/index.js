var group = function(a, groupBy) {
  var i = 0,
      length = a.length
      results = {},
      current = undefined;
  for (i = 0; i < length; ++i) {
    current = a[i];
    if (results[current[groupBy]] === undefined) {
      results[current[groupBy]] = [a[i]];
    } else {
      results[current[groupBy]].push(a[i]);
    }
  };
  return results;
};

module.exports.group = group;
