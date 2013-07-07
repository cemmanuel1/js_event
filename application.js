var fullList =  $('.todo_list')

$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
  
  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $('.toolbox').on('click', '.add',function(){
      var todo = $('.todo').val();
      addTodo(buildTodo(todo));
    });

    $(fullList).on('click', '.delete', function(e){
      e.preventDefault();
      removeTodo(todo);
      });

    $(fullList).on('click', '.complete', function(e){
      e.preventDefault();
      completeTodo(todo);
      });
  }



  //Create functions to add, remove and complete todos


  function addTodo(todo){
    $(fullList).append(todo);
  }

  function removeTodo(todo){
   $(fullList).closest('div.todo').remove();
 }

 function completeTodo(todo){
  $(fullList).closest('div.todo').addClass("complete");
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
