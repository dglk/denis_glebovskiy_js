(function() {
  'use strict';
  var initList = function(domElement) {
    domElement.addEventListener('click', function(event) {
      var originalTarget = event.originalTarget;
      if (originalTarget.tagName === 'LI') {
        originalTarget.classList.toggle('show');
      }
    })
  };

  var list = document.getElementById('foo');
  initList(list);
})();
