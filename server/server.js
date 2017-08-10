'use strict';

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  }, 
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Testing Again',
  completed: false,
  completedAt: new Date().getTime()
});

newTodo.save().then((result) => {
  console.log("Saved Todo", result);
}, (err) => {
  console.log('Unable to save ToDo');
});