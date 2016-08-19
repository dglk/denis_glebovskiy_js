(function() {
  'use strict';
  var ctx = document.getElementById('canvas').getContext('2d');

  var ellipse = function(ctx, x, y, rx, ry) {
    var MAGIC = 0.551784, // approximation coefficient
        leftX = x - rx,
        rightX = x + rx,
        topY = y - ry,
        bottomY = y + ry;
    ctx.moveTo(rightX, y);
    ctx.bezierCurveTo(rightX, y + MAGIC * ry, x + MAGIC * rx, bottomY,
      x, bottomY);
    ctx.bezierCurveTo(x - MAGIC * rx, bottomY, leftX, y + MAGIC * ry,
      leftX, y);
    ctx.bezierCurveTo(leftX, y - MAGIC * ry, x - MAGIC * rx, topY,
      x, topY);
    ctx.bezierCurveTo(x + MAGIC * rx, topY, rightX, y - MAGIC * ry,
      rightX, y);
  };

  // face
  ctx.beginPath();
  ctx.lineWidth = '4';
  ctx.fillStyle = '#90CAD7';
  ctx.strokeStyle = '#22545F';
  ellipse(ctx, 134, 261, 113, 92);
  ellipse(ctx, 70, 218, 19, 12);
  ellipse(ctx, 154, 218, 19, 12);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = '#22545F';
  ellipse(ctx, 63, 218, 6, 9);
  ellipse(ctx, 148, 218, 6, 9);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = '#90CAD7';
  ctx.moveTo(108, 219);
  ctx.lineTo(85, 266);
  ctx.lineTo(108, 266);
  ctx.stroke();

  ctx.beginPath();
  ctx.translate(110, 310);
  ctx.rotate(Math.PI / 24);
  ellipse(ctx, 0, 0, 43, 15);
  ctx.stroke();
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  // hat
  ctx.fillStyle = '#396693';
  ctx.strokeStyle = '#262626';
  ctx.beginPath();
  ellipse(ctx, 126, 167, 122, 22);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ellipse(ctx, 136, 144, 67, 23);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.fillRect(69, 24, 134, 120);
  ctx.moveTo(69, 24);
  ctx.lineTo(69, 144);
  ctx.moveTo(203, 24);
  ctx.lineTo(203, 144)
  ctx.stroke();

  ctx.beginPath();
  ellipse(ctx, 136, 25, 67, 23);
  ctx.fill();
  ctx.stroke();
})();
