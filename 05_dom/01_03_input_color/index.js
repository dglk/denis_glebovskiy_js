(function() {
  'use strict';
  var setBackground = function(domElement) {
    document.body.style.background = domElement.value;
  };

  window.setBackground = setBackground;

  var input = document.getElementById('input');
  
  if (input) {
    input.onchange = function() {
      setBackground(this);
    }
  };
})();
