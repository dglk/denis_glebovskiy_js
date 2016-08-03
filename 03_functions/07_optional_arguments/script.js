(function() {
  window.find = function(testString, test) {
    var testString = ('string' === typeof testString) ? testString : ('' + testString),
        test = test || testString;
    return testString.search(test);
  };

  window.addEventListener('load', function() {
    var testString = document.getElementById('haystack'),
        test = document.getElementById('needle'),
        button = document.getElementById('submit'); 
    button.onclick = function() {
      alert("Position of '" + test.value + "' in '" + testString.value + "' : " +
        find(testString.value, test.value));
    };
  });
})();