window.onload = function() {
  window.countDivs = function() {
    return document.getElementsByTagName('div').length;
  };

  console.log("Divs on page", window.countDivs());
};
