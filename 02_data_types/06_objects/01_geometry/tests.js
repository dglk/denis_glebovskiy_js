var m = require('./index.js');
var Point = m.Point;
var Line = m.Line;
var isValidTriangle = m.isValidTriangle;

var p0 = new Point(0, 0);
var p1 = new Point(0, 3);
var p2 = new Point(4, 0);
var p3 = new Point(100, 100);
var p4 = new Point(1, 1);
var l0 = new Line(p0, p1);
var l1 = new Line(p1, p2);
var l2 = new Line(p0, p2);
var l3 = new Line(p2, p3);

function expect(desc, boolean) {
    console.log(desc+":", (boolean) ? "Yes" : "No");
};

expect("Line length", function() {
  return (new Line(p0, p1).distance() === 3);
});

expect("Line length 2", function() {
  return (new Line(p1, p2).distance() === 5);
});

expect("Line length 3", function() {
  return (new Line(p2, p4).distance() - Math.sqrt(10) < 0.001);
});

expect("Valid triangle", isValidTriangle(l0, l1, l2));
expect("Invalid triangle", !(isValidTriangle(l0, l1, l3)));
