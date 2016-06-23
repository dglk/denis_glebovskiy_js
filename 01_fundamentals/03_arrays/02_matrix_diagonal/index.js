function sampleRandomMatrix(size) {
  var matrix = [];
  for (var j = 0; j < size; ++j) {
    matrix.push([]);
    for (var i = 0; i < size; ++i) {
      matrix[j][i] = Math.trunc(Math.random() * 50 - 25);
    }
  }
  return matrix;
};

function replaceNumbers(matrix) {
  for (var i = 0; i < matrix.length; ++i) {
    matrix[i][i] = (matrix[i][i] > 0) ? 1 : 0;
  }
};

var sample = sampleRandomMatrix(5);
console.log(sample);

replaceNumbers(sample);
console.log('Matrix with numbers replaced: ');
console.log(sample);
