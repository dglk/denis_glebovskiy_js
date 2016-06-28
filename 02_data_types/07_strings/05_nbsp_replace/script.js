(function() {
  var replaceNbsp = function(string) {
    var string = (typeof(string) === 'string') ? string : ('' + string),
        regex = /\u00a0/g; // non-breaking space in Unicode
    return string.replace(regex, '&nbsp;');
  };

  window.addEventListener('load', function() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    var button = document.getElementById("submit");

    button.onclick = function() {
      console.log(input.value);
      output.value = replaceNbsp(input.value);
    };
  });
})();
