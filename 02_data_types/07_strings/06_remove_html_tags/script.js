(function() {
  var stripTags = function(string) {
    var string = string || "",
        regex = /<[^>]+>/g;
    return string.replace(regex, '');
  };

  window.addEventListener('load', function() {
    var urlInput = document.getElementById("htmlRemoveInput"),
        urlOutput = document.getElementById("htmlRemoveOutput"),
        urlButton = document.getElementById("htmlRemoveButton");
    urlButton.onclick = function() {
      urlOutput.value = stripTags(urlInput.value);
    };
  });
})();
