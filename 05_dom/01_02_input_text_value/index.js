(function() {
  'use strict';
  var logInput = function(domElement) {
    console.log(domElement.value);
  };

  window.logInput = logInput;

  var input = document.getElementById('input');
  var button = document.getElementById('button');

  if (input && button) {
    button.onclick = function() {
      logInput(input);
    }
  };
})();
