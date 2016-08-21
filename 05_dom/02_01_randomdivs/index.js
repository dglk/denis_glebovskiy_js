(function() {
  'use strict';
  
  var randomInt = function(min, max) {
    min = min || 0;
    max = max || 1;
    return Math.floor(Math.random() * (max - min) + min);
  };

  var randomColor = function() {
    return "rgb(" + randomInt(0, 256) + "," + randomInt(0,256) + ',' +
      randomInt(0, 256) + ")";
  }

  var unit = function(arg, unit) {
    return arg + unit;
  }

  var randomDiv = function(containerWidth, containerHeight) {
    var div = document.createElement('div'),
        width = randomInt(20, 100),
        height = randomInt(20, 100),
        borderWidth = randomInt(1, 20);

    div.style['position'] = 'absolute';
    div.style['left'] = unit(randomInt(0,
      containerWidth - width - 2 * borderWidth), 'px');
    div.style['top'] = unit(randomInt(0,
      containerHeight - height - 2 * borderWidth), 'px');
    div.style['width'] = unit(width, 'px');
    div.style['height'] = unit(height, 'px');

    div.style['background-color'] = randomColor();
    div.style['color'] = randomColor();
    div.style['z-index'] = 1;
    div.style['overflow'] = 'hidden';
    div.style['text-align'] = 'center';
    div.style['line-height'] = unit(height, 'px');

    div.style['border-color'] = randomColor();
    div.style['border-style'] = 'solid';
    div.style['border-radius'] = unit(randomInt(0, 50), '%');
    div.style['border-width'] = unit(borderWidth, 'px');

    div.innerHTML = "<strong>div</strong>";
    return div;
  };

  var target = document.body,
      wrapper = document.createDocumentFragment(),
      containerWidth = window.innerWidth,
      containerHeight = window.innerHeight,
      DIV_COUNT = 64,
      i;
  for (i = 0; i < DIV_COUNT; ++i) {
    wrapper.appendChild(randomDiv(containerWidth, containerHeight));
  };
  target.appendChild(wrapper);

})();
