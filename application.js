$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
  var fullList = $('.todo_list');
  

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $('.toolbox').on('click','.add',function(e){
      e.preventDefault();
      var task = $('input').val();
      addTodo(buildTodo(task));
    });

    $(fullList).on('click','.delete', function(e) {
      e.preventDefault();
      var $this = $(this).closest('.todo');
      removeTodo($this);
    });

    $(fullList).on('click','.complete', function(e) {
      e.preventDefault();
      var $this = $(this).closest('.todo');
      completeTodo($this);
    });
  }

  //Create functions to add, remove and complete todos
  function addTodo(todo) {
    $(fullList).append(todo);
  }

  function removeTodo(todo) {
   todo.remove();
 }

 function completeTodo(todo) {
  todo.toggleClass("complete");
}


function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }


  bindEvents();
});
