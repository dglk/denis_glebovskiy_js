(function() {
  var toConsole = function(arg) {
    console.log(arg);
  };

  var toAlert = function(arg) {
    alert(arg);
  };

  var splitWords = function(msg, callback) {
    var msg = (typeof msg === "string") ? msg : ('' + msg);
    if (callback) {
      callback(msg.split(' '));
    } else {
      return msg.split(' ');
    }
  };

  window.addEventListener('load', function() {
    var input = document.getElementById("input"),
        mode = document.getElementById("mode"),
        output = document.getElementById("output"),
        submit = document.getElementById("submit"),
        result = undefined;

    if (input && mode && output && submit) {
      submit.onclick = function() {
        switch (mode.value) {
          case "alert":
            result = splitWords(input.value, toAlert);
            break;
          case "console":
            result = splitWords(input.value, toConsole);
            break;
          default:
            result = splitWords(input.value);
        };
        output.value = JSON.stringify(result);
      }
    };
  });
})();
