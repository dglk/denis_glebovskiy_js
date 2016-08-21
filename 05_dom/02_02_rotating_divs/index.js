(function() {
  'use strict';

  var DT = 100;

  var divs = [
    new RotatingDiv(600, 400, 90, 0.0005, 0),
    new RotatingDiv(600, 400, 60, 0.0015, Math.PI),
    new RotatingDiv(600, 400, 250, 0.0001, 0),
    new RotatingDiv(600, 400, 150, -0.0005, Math.PI/5),
    new RotatingDiv(600, 400, 180, 0.0006, 0)
  ];

  var fragment = document.createDocumentFragment();
  for (var i in divs) {
    fragment.appendChild(divs[i].domElement);
  }
  document.body.appendChild(fragment);

  var time = 0;
  setInterval(function() {
    for (var i in divs) {
      divs[i].updateState(time);
    }
    time += DT;
  }, DT);

})();
