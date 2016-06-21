var arrayFunctions = require('./arrayFunctions.js');

function sampleRandomArray(size=10) {
  var a = [];
  for (var i=0; i<size; ++i) {
    a.push(Math.trunc(Math.random()*100 - 50));
  }
  return a;
};

var a = sampleRandomArray(15);
console.log('Initial array:');
console.log(a);
console.log('Maximal element of the array =', arrayFunctions.max(a));
console.log('Minimal element of the array =', arrayFunctions.min(a));
console.log('Sum of the elements in the array =', arrayFunctions.sum(a));
console.log('Average of array elements =', arrayFunctions.average(a).toFixed(2));
console.log('Odd array elements:');
console.log(arrayFunctions.filterOdds(a));
