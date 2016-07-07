(function() {
  var copyright = function() {
    var symbol = '\u00A9';
    return function(arg) {
      return '' + symbol + ' ' + arg;
    }
  };

  var button = document.getElementById('button'),
      input = document.getElementById('input');
  if (input && button) {
    button.onclick = function() {
      input.value = copyright()(input.value);
    }
  }
})();
