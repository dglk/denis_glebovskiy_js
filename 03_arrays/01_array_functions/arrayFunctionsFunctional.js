// array functions implemented in a functional programming style
// this file isn't a part of the assignment

exports.max = (array) =>
  array.reduce((max, current) => (max < current) ? current : max,
    Number.NEGATIVE_INFINITY);

exports.min = (array) =>
  array.reduce((min, current) => (min > current) ? current : min,
    Number.POSITIVE_INFINITY);

exports.sum = (array) => array.reduce((sum, current) => sum + current);

exports.average = (array) => exports.sum(array) / array.length;

exports.filterOdds = (array) => array.filter((x) => x % 2);
