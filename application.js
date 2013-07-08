$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
  // var fullList = $('.todo_list');
  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $('.toolbox').on('click','.add',function(e){
      e.preventDefault();
      var inputValue = $('input').val();
      addTodo(buildTodo(inputValue));
    });

    $('.todo_list').on('click','.delete', function(e) {
      e.preventDefault();
      $(this).closest('div.todo').remove();
    });

    $('.todo_list').on('click','.complete', function(e) {
      e.preventDefault();
      $(this).closest('div.todo').toggleClass("complete");
    });
  }

  //Create functions to add, remove and complete todos
  function addTodo(todo) {
    $('.todo_list').append(todo);
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
