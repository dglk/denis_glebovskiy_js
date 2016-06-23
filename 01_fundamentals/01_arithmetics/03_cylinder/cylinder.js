window.onload = function() {
	var cylinderVolume = function(r, h) {
		return Math.PI * r * r * h;
	};

	var cylinderArea = function(r, h) {
		return 2 * Math.PI * r * (r + h);
	};

	var cylinderForm = document.getElementById("cylinderForm");
		cylinderForm.elements.namedItem("submit").onclick = function() {
			var height = parseInt(cylinderForm.elements.namedItem("height").value);
			var baseRadius = parseInt(cylinderForm.elements.namedItem("baseRadius").value);
			cylinderForm.elements.namedItem("area").value = cylinderArea(baseRadius, height).toFixed(2);
			cylinderForm.elements.namedItem("volume").value = cylinderVolume(baseRadius, height).toFixed(2);
		};
	};
};