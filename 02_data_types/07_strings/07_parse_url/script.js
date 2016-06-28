(function() {
  var parseUrl = function(string) {
    var output = {},
        regex = /\b(\w+):\/\/([^\/]+)(\/.*)?/,
        f = regex.exec(string),
        error = [];
    if (f === null) {
      error.push("URL mismatch");
      return {'error': error};
    }
    if (f[3] === null) {
      f[3] = "/";
    }
    return {protocol: f[1], server: f[2], resource: (f[3]) ? f[3] : "/"};    
  };

  window.onload = function() {
    var urlInput = document.getElementById("urlInput");
    var urlButton = document.getElementById("urlButton");
    var urlOutput = document.getElementById("urlOutput");

    urlButton.onclick = function() {
      var i = urlInput.value;
      urlOutput.value = JSON.stringify(parseUrl(i));
    };
  };
})();
