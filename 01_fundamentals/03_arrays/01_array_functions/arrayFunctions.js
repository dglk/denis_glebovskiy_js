exports.max = function(array) {
  var max = Number.NEGATIVE_INFINITY;
  for (var i in array) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

exports.min = function(array) {
  var min = Number.POSITIVE_INFINITY;
  for (var i in array) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
};

exports.sum = function(array) {
  var sum = 0;
  for (var i in array) {
    sum += array[i];
  }
  return sum;
};

exports.average = function(array) {
  return exports.sum(array) / array.length;
};

exports.filterOdds = function(array) {
  var odds = [];
  for (var i in array) {
    if (array[i] % 2) {
      odds.push(array[i]);
    }
  }
  return odds;
};
