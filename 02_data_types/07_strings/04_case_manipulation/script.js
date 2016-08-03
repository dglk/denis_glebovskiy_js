(function () {

var MODES = {
	"default": 0,
	"upcase": 1,
	"downcase": 2,
	"mixcase": 3,
};

var formatText = function(string, mode) {
	switch (mode) {
		case 1:
			return string.toUpperCase();
		case 2:
			return string.toLowerCase();
		case 3:
			return toMixedCase(string);
		default:
			return string;
	};
};

var toMixedCase = function(string) {
	var output = [];
	for (var i = 0; i < string.length; ++i) {
		output.push((Math.round(Math.random())) ? string.charAt(i).toUpperCase() : string.charAt(i).toLowerCase());		
	};
	return output.join('');
};

var processText = function(string) {
	var regex = /<(\/?)(upcase|downcase|mixcase)>/g,
	    match = null,
	    index = 0,
	    modeStack = [MODES.default],
	    output = [];

	while ((match = regex.exec(string)) !== null) {
		if (match[1] === "") {
			// opening tag: push text before to output using a topmost mode and put the new mode on the stack
			output.push(formatText(string.slice(index, match.index), modeStack[modeStack.length - 1]));
			modeStack.push(MODES[match[2]]);			
		} else {
			// closing tag: check if modes match, pop the mode stack, use the value when formatting output
			if (modeStack.pop() !== MODES[match[2]]) {
				throw new Error("Error: mismatched tags!");
			}
			output.push(formatText(string.slice(index, match.index), MODES[match[2]]));			
		}
		index = regex.lastIndex;
	}

	// process the remaining string / handle no tags found
	if (modeStack.pop() !== MODES.default) {
		throw new Error("Error: some tags aren't closed!")
	}
	output.push(string.slice(index));

	return output.join('');
};

window.addEventListener('load', function() {
	var input = document.getElementById("input"),
	    output = document.getElementById("output"),
	    button = document.getElementById("submit"),
	    result = "";
	button.onclick = function() {
		try {
			result = processText(input.value);
		} catch (e) {
			alert(e.toString());
		}
		output.value = result;
	};
});

})();