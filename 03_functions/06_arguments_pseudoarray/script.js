(function() {
  window.parts = function() {
    var result = [],
        match;
    for (var i in arguments) {
      if ('string' === typeof arguments[i]) {
        match = arguments[i].match(/\:\s*(.*)\./);
        result.push((match) ? match[1] : null);
      } else {
        result.push(null);
      }
    }
    return result;
  };

  window.addEventListener('load', function() {
    var button = document.getElementById('submit'),
        input = document.getElementById('input'),
        inputArray;
    button.onclick = function() {
      inputArray = input.value.split('\n');
      console.log(JSON.stringify(parts.apply(null, inputArray)));
    };
  });
})();