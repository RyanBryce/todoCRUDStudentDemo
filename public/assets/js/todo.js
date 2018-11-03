console.log("yo");

$(document).on('click', '.complete', function (event) {
  event.preventDefault();
  console.log('complete has been clicked on');
  var id = $(this).attr('data-id');
  console.log(id);
  $.ajax({
    url: '/api/todo/' + id,
    method: 'PUT',
    data: {
      todo: $('#todo').val().trim()
    }
  }).then(function(serverResponse){
    console.log(serverResponse);
    location.reload();
  })
})

$(document).on('click', '.delete', function (event) {
  event.preventDefault();
  console.log('delete has been clicked on');
  var id = $(this).attr('data-id');
  console.log(id);
  $.ajax({
    url: '/api/todo/' + id,
    method: 'DELETE',
    data: {
      todo: $('#todo').val().trim()
    }
  }).then(function (serverResponse) {
    console.log(serverResponse);
    location.reload();
  })
})

$(document).on('click', '#addTodo', function (event) {
  event.preventDefault();
  console.log('addTodo has been clicked on');
  $.ajax({
    url: '/api/todo',
    method: 'POST',
    data: {
      todo: $('#todo').val().trim()
    }
  }).then(function(serverResponse){
    console.log(serverResponse, 'this is the response from the server');
    location.reload();
  })
})
