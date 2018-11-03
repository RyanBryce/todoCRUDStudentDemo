var express = require('express');
var db = require('../models');
var router = express.Router();
// console.log(db);

// define the home page route
router.get('/', function (request, response) {
  db.todo.findAll().then(function(data){
    console.log(data);

    var todoObj = {
      todos: data
    }
    response.render('index', todoObj)
  })
})

// define the about route
router.post('/api/todo', function (request, response) {
  console.log(request.body, 'this is request.body');
  var fEData = request.body;
  db.todo.create(fEData).then(function(data){
    console.log(data, 'this is the response from our database insert into');
    response.send("row added to db")
  })
})

router.put('/api/todo/:id', function (request, response) {
    console.log(request.params, 'this is our request.params');
    var id = request.params.id;
    db.todo.update({
      completed: true
    }, {
      where: {
        id: id
      }
    }).then(function(data){
      console.log(data, "row updated");
      response.send('update happemed on ' + id)
    })
})

router.delete('/api/todo/:id', function (request, response) {
  var id = request.params.id
  console.log(id);
  db.todo.destroy({
    where: {
      id: id
    }
  }).then(function(data){
    console.log(data);
    response.send("row deleted")
  })
})

module.exports = router;

// [RowDataPacket {
//   id: 1,
//   todo: 'clean out the gutters',
//   completed: 0
// }]