(function() {
  'use strict';
  var carousel = function(domElement) {
    var wrapper = document.createElement('div');
    wrapper.classList.add('carousel-wrapper');
    wrapper.innerHTML = domElement.innerHTML;
    domElement.innerHTML = "";
    domElement.appendChild(wrapper);

    var leftArrow = document.createElement('a');
    leftArrow.innerHTML = '<';
    leftArrow.classList.add('carousel-arrow');
    leftArrow.style.bottom = '0px';
    leftArrow.style.left = '0px';
    domElement.appendChild(leftArrow);

    var rightArrow = document.createElement('span');
    rightArrow.innerHTML = '>';
    rightArrow.classList.add('carousel-arrow');
    rightArrow.style.bottom = '0px';
    rightArrow.style.right = '0px';
    domElement.appendChild(rightArrow);

    var length = wrapper.children.length;
    var index = 0;
    wrapper.children[index].classList.add('active');

    var carouselPrev = function() {
      wrapper.children[index].classList.remove('active');
      index = (index === 0) ? (length - 1) : (index - 1);
      wrapper.children[index].classList.add('active');
    }

    var carouselNext = function() {
      wrapper.children[index].classList.remove('active');
      index = (index + 1) % length;
      wrapper.children[index].classList.add('active');
    }

    leftArrow.addEventListener('click', carouselPrev);
    rightArrow.addEventListener('click', carouselNext);

    var pause = false;

    domElement.onmouseenter = function() {
      pause = true;
    }

    domElement.onmouseleave = function() {
      pause = false;
    }

    setInterval(function() {
      if (!pause) {
        carouselNext();
      }
    }, 2000);
  };

  carousel(document.getElementById('carousel'));
})();
