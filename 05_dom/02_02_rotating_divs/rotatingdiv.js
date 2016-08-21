(function() {
  'use strict';
  
  var DIV_WIDTH = 30,
      DIV_HEIGHT = 30,
      DIV_BACKGROUND = '#33bb33';

  var RotatingDiv = function(cx, cy, r, s, p) {
    this.centerX = cx;
    this.centerY = cy;
    this.radius = r;
    this.speed = s;
    this.initialPosition = p;
    this.position = p;
    this.domElement = this.createDiv();
  };

  RotatingDiv.prototype.createDiv = function() {
    var div = document.createElement('div');
    div.style.width = DIV_WIDTH + 'px';
    div.style.height = DIV_HEIGHT + 'px';
    div.style.background = DIV_BACKGROUND;
    div.style.position = 'absolute';
    div.style['border-radius'] = '100%';
    div.style['z-index'] = 1;
    return div;
  };

  RotatingDiv.prototype.updateState = function(t) {
    t = t || 0;
    this.position = this.speed * time + this.initialPosition;
    this.domElement.style.left = (this.centerX +
      this.radius * Math.cos(this.position) - DIV_WIDTH/2) + 'px';
    this.domElement.style.top = (this.centerY +
      this.radius * Math.sin(this.position) - DIV_HEIGHT/2) + 'px';
  };

  window.RotatingDiv = RotatingDiv;
})();
