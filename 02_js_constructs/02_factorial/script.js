(function() {
  var factorial = function(n) {
    var result = 1;
    for (var i = result; i <= n; ++i) {
      result *= i;
    }
    return result;
  };

  window.onload = function() {
    var argumentField = document.getElementById('argument'),
        resultField = document.getElementById('result'),
        submitButton = document.getElementById('submit');
    submitButton.onclick = function() {
      var argument = parseInt(argumentField.value);
      resultField.value = factorial(argument);
    };
  };
})();
