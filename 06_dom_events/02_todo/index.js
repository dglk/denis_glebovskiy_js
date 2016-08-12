(function() {
  'use strict';
  var todo = document.getElementById('todo'),
      todoInput = document.getElementById('todo-input'),
      todoAdd = document.getElementById('todo-add'),
      todoHide = document.getElementById('todo-hide'),
      todoItems = document.getElementById('todo-items'),
      hidden = false;

  todoHide.addEventListener('click', function() {
    todoItems.classList.toggle('todo-hide-items');
    hidden = !hidden;
    todoHide.value = hidden ? "Show completed" : "Hide completed";
  });

  todoAdd.addEventListener('click', function() {
    if (todoInput.value.length !== 0) {
      var domElement = document.createElement('li');
      domElement.classList.add('todo-item');

      var checkbox = document.createElement('span');
      checkbox.classList.add('checkbox');

      var deleteButton = document.createElement('span');
      deleteButton.classList.add('delete');

      var content = document.createElement('span');
      content.innerHTML = todoInput.value;
      todoInput.value = "";
      domElement.appendChild(checkbox);
      domElement.appendChild(deleteButton);
      domElement.appendChild(content);
      todoItems.appendChild(domElement);
    }
  });

  todoItems.addEventListener('click', function(event) {
    if (event.originalTarget.classList.contains('checkbox')) {
      event.originalTarget.parentNode.classList.toggle('completed');
    }
    if (event.originalTarget.classList.contains('delete')) {
      todoItems.removeChild(event.originalTarget.parentNode);
    }
  });
})();
