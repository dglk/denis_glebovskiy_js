(function() {
  'use strict';
  var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d');

  var drawRoof = function(ctx, x, y, width, height) {
    ctx.moveTo((x + width) / 2, y);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo((x + width) / 2, y);
  };

  var drawWindow = function(ctx, x, y, width, height) {
    var FRAME_SIZE = 4,
        windowWidth = (width - FRAME_SIZE) / 2,
        windowHeight = (height - FRAME_SIZE) / 2;
    ctx.rect(x, y, windowWidth, windowHeight);
    ctx.rect(x + windowWidth + FRAME_SIZE, y, windowWidth, windowHeight);
    ctx.rect(x, y + windowHeight + FRAME_SIZE, windowWidth, windowHeight);
    ctx.rect(x + windowWidth + FRAME_SIZE, y + windowHeight + FRAME_SIZE,
      windowWidth, windowHeight);
  };

  var drawDoor = function(ctx, x, y, width, height) {
    var ARC_CONST = 0.23333,
        BEZIER_CONST = 0.551784,
        DOORKNOB_RADIUS = 6;
    ctx.moveTo(x + width / 2, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x, y + ARC_CONST * height);
    ctx.bezierCurveTo(x, y + (1 - BEZIER_CONST) * ARC_CONST * height,
      x + (width - BEZIER_CONST * width) / 2, y, x + width / 2, y);
    ctx.lineTo(x + width / 2, y + height);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x + width, y + ARC_CONST * height);
    ctx.bezierCurveTo(x + width, y + (1 - BEZIER_CONST) * ARC_CONST * height,
      x + (width + BEZIER_CONST * width) / 2, y, x + width / 2, y);
    ctx.moveTo(x + 0.36 * width + DOORKNOB_RADIUS, y + 0.7 * height, 0);
    ctx.arc(x + 0.36 * width, y + 0.7 * height, DOORKNOB_RADIUS,
      0, 2 * Math.PI);
    ctx.moveTo(x + 0.64 * width + DOORKNOB_RADIUS, y + 0.7 * height);
    ctx.arc(x + 0.64 * width, y + 0.7 * height, DOORKNOB_RADIUS,
      0, 2 * Math.PI);
    };

  var drawChimney = function(ctx, x, y, width, height) {
    var BEZIER_CONST = 0.551784,
        E_CONST = 0.056;
    ctx.fillRect(x, y + E_CONST * height, width, (1 - E_CONST) * height);
    ctx.moveTo(x, y + height);
    ctx.lineTo(x, y + E_CONST * height);
    ctx.bezierCurveTo(x, y + E_CONST * (1 - BEZIER_CONST) * height,
      x + width * (1 - BEZIER_CONST) / 2, y, x + width / 2, y);
    ctx.bezierCurveTo(x + (1 + BEZIER_CONST) * width / 2, y,
      x + width, y + E_CONST * (1 - BEZIER_CONST) * height,
      x + width, y + E_CONST * height);
    ctx.bezierCurveTo(x + width, y + E_CONST * (1 + BEZIER_CONST) * height,
      x + (1 + BEZIER_CONST) * width / 2, y + 2 * E_CONST * height,
      x + width / 2, y + 2 * E_CONST * height);
    ctx.bezierCurveTo(x + width*(1-BEZIER_CONST)/2, y + 2*E_CONST*height,
      x, y + E_CONST * (1 + BEZIER_CONST) * height, x, y + E_CONST * height);
    ctx.moveTo(x + width, y + height);
    ctx.lineTo(x + width, y + E_CONST * height);
};

  ctx.lineWidth = '4';
  ctx.fillStyle = '#975B5B';
  ctx.strokeStyle = '#000000';
  drawRoof(ctx, 0, 2, 454, 250);
  ctx.rect(2, 250, 450, 339);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = '#000000';
  drawWindow(ctx, 35, 293, 159, 105);
  drawWindow(ctx, 254, 293, 159, 105);
  drawWindow(ctx, 254, 435, 159, 105);
  ctx.fill();

  ctx.beginPath();
  drawDoor(ctx, 45, 439, 124, 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = '#975B5B';
  drawChimney(ctx, 310, 60, 50, 135);
  ctx.stroke();
  ctx.fill();

})();
