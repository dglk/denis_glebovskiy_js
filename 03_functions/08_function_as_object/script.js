(function() {
  var str = function str(arg) {
    if (str.isNonEmptyStr(arg)) {
      alert("String is not empty");
    } else {
      alert("String is empty");
    }
  };

  str.isNonEmptyStr = function(arg) {
    return (arg.length > 0);
  };

  window.addEventListener('load', function() {
    var input = document.getElementById('input'),
        button = document.getElementById('submit');
    button.onclick = function() {
      str(input.value);
    };
  });
})();