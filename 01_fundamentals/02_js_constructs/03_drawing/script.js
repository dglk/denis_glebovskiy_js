window.onload = function() {
  var ConsoleCanvas = function(width, height) {
    this.width = width;
    this.height = height;
    var array2d = (function(width, height) {
      var result = [];
      for (var j = 0; j < height; ++j) {
        result.push([]);
        for (var i = 0; i < width; ++i) {
          result[j][i] = '&nbsp;';
        }
      }
      return result;
    }) (width, height);

    this.dot = function(x, y, val) {
      if ((x < this.width) && (x >= 0) && (y < this.height) && (y >= 0)) {
        array2d[y][x] = val;
      }
    };

    /*
		 * https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
		 * http://rosettacode.org/wiki/Bitmap/Bresenham%27s_line_algorithm
		 */
    this.line = function(x1, y1, x2, y2, val) {
			var deltaX = Math.abs(x2 - x1), stepX = (x1 < x2) ? 1 : -1;
			var deltaY = Math.abs(y2 - y1), stepY = (y1 < y2) ? 1 : -1;
			var error = ((deltaX > deltaY) ? deltaX : -deltaY) / 2;
			var x = x1, y = y1;
			while (true) {
				this.dot(x, y, val);
				if (x == x2 && y == y2) {
					break;
				}
				var e2 = error;
				if (e2 > -deltaX) {
					error -= deltaY;
					x += stepX;
				}
				if (e2 < deltaY) {
					error += deltaX;
					y += stepY;
				}
			}
		};

    this.toHTML = function() {
      var result = [];
      for (var j = 0; j < height; ++j) {
        result.push(array2d[j].join(''));
      }
      return result.join('<br>');
    };
  };

  var c = new ConsoleCanvas(80, 25);

  //square
  c.line(4, 4, 12, 4, '*');
  c.line(4, 4, 4, 12, '*');
  c.line(12, 4, 12, 12, '*');
  c.line(4, 12, 12, 12, '*');

  //right triangle
  c.line(25, 10, 25, 16, '@');
  c.line(25, 16, 45, 16, '@');
  c.line(25, 10, 45, 16, '@');

  //equilateral triangle
  c.line(2, 24, 12, 24, '0');
  c.line(2, 24, 7, 19, '0');
  c.line(12, 24, 7, 19, '0');

  //rhombus
  c.line(60, 3, 50, 13, '#');
  c.line(60, 3, 70, 13, '#');
  c.line(50, 13, 60, 23, '#');
  c.line(70, 13, 60, 23, '#');

  document.getElementById('text').innerHTML = c.toHTML();
};
