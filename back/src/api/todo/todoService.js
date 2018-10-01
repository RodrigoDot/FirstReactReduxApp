const Todo = require('./todo')

Todo.methods([
  'get',
  'post',
  'put',
  'delete'
])

// Update the object and returns the new values
// And do some validations
Todo.updateOptions({
  new: true,
  runValidators: true
})

module.exports = Todo
