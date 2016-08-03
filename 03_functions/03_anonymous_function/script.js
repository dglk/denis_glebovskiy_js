(function() {
  window.addEventListener('load', function() {
    var button = document.getElementById('button');
    if (button) {
      button.onclick = function() {
        console.log('message in console');
      }
    }
  });
})();
