var Point = function(x, y) {
  this.x = x;
  this.y = y;
};

var Line = function(p0, p1) {
  this.p0 = p0;
  this.p1 = p1;
  this.distance = function() {
    return Math.sqrt(Math.pow(this.p1.x - this.p0.x, 2) +
      Math.pow(this.p1.y - this.p0.y, 2));
  };
};

var isValidTriangle = function(l0, l1, l2) {
  if (l0.distance() + l1.distance() <= l2.distance()) {
    return false;
  }
  if (l0.distance() + l2.distance() <= l1.distance()) {
    return false;
  }
  if (l1.distance() + l2.distance() <= l0.distance()) {
    return false;
  }
  return true;
};

module.exports.Point = Point;
module.exports.Line = Line;
module.exports.isValidTriangle = isValidTriangle;
