(function() {
  'use strict';
  var fontColor = document.getElementById('fontColor'),
      backgroundColor = document.getElementById('backgroundColor'),
      textarea = document.getElementById('textarea');

  if (fontColor) {
    fontColor.addEventListener('change', function() {
      if (textarea) {
        textarea.style.color = this.value;
      }
    });
  }

  if (backgroundColor) {
    backgroundColor.addEventListener('change', function() {
      if (textarea) {
        textarea.style['background-color'] = this.value;
      }
    })
  }
})();
