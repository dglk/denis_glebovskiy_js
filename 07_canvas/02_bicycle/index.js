(function() {
  'use strict';

  var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d');

  ctx.fillStyle = '#90CAD7';
  ctx.strokeStyle = '#327C8E';
  ctx.lineWidth = '4';

  // left wheel
  ctx.beginPath();
  ctx.arc(95, 245, 90, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  // right wheel
  ctx.beginPath();
  ctx.arc(450, 245, 90, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  // frame
  ctx.beginPath();
  ctx.moveTo(95, 245);
  ctx.lineTo(255, 240);
  ctx.lineTo(425, 130);
  ctx.lineTo(200, 130);
  ctx.closePath();
  ctx.stroke();

  // pedals
  ctx.beginPath();
  ctx.arc(255, 240, 30, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(220, 200);
  ctx.lineTo(236, 218);
  ctx.moveTo(270, 265);
  ctx.lineTo(285, 282);
  ctx.stroke();

  // rudder
  ctx.beginPath();
  ctx.moveTo(450, 245);
  ctx.lineTo(415, 60);
  ctx.lineTo(465, 5);
  ctx.moveTo(415, 60);
  ctx.lineTo(345, 85);
  ctx.stroke();

  // seat
  ctx.beginPath();
  ctx.moveTo(255, 240);
  ctx.lineTo(175, 85);
  ctx.moveTo(140, 85);
  ctx.lineTo(210, 85);
  ctx.stroke();
})();
