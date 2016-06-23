window.onload = function() {
	var average3 = function(x, y, z) {
		return (x + y + z) / 3;
	};

	var arg1 = document.getElementById("arg1");
	var arg2 = document.getElementById("arg2");
	var arg3 = document.getElementById("arg3");
	var result = document.getElementById("result");
	var submit = document.getElementById("submit");

	submit.onclick = function() {
		var n1 = parseInt(arg1.value);
		var n2 = parseInt(arg2.value);
		var n3 = parseInt(arg3.value);
		result.value = average3(n1, n2, n3);
	}
};