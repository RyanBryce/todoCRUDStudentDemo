module.exports = function(sequelize, DataType){
  var Todo = sequelize.define('todo', {
    todo: {
      type: DataType.STRING,
      allowNull: false
    },
    completed: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
  return Todo;
}