(function() {

  window.fibo = function(n) {
    // inner helper function in a tail-recursive style returning a thunk
    var helper = function fibo_(n, current, next) {
      if (n === 0) {
        return current;
      }
      else {
        return function() {
          return fibo_(n - 1, next, current + next);
        }
      }
    };

    // trampoline
    var result = helper(n, 0, 1); 
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  };

  var input = document.getElementById('input'),
      output = document.getElementById('output'),
      button = document.getElementById('submit'),
      n;
  button.onclick = function() {
    n = parseInt(input.value);
    if (n >= 0) {
      output.value = fibo(parseInt(input.value));
    } else {
      alert('Negative positions aren\'t supported.');
      output.value = "error";
    }
  };
})();