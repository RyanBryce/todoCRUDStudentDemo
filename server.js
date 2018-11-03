//dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var db = require('./models')

var PORT = process.env.PORT || 3000;

var app = express()
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/appCtrl')

app.use(routes)

db.sequelize.sync({force: false}).then(function(){
  
  app.listen(PORT, function(){
    console.log('our server is up and running on port: ' + PORT);
  })
})



// todos{
//   id: 1,
//   todo: 'string',
//   completed: true
// }