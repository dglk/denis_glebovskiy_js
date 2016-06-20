var x = 6;
var y = 15;
var z = 4;

var printXYZ = function() {
		console.log("// x = " + x + "; y = " + y + "; z = " + z + "\n");
};
	
console.log("var x = 6, y = 15, z = 4;");
printXYZ();

x += y - x++ * z;
console.log("x += y - x++ * z;");
printXYZ();

z = -- x - y * 5;
console.log("z = -- x - y * 5;");
printXYZ();

y /= x + 5 % z;
console.log("y /= x + 5 % z;");
printXYZ();

z = x++ + y * 5;
console.log("z = x++ + y * 5;");
printXYZ();

x = y - x++ * z;
console.log("x = y - x++ * z;");
printXYZ();
