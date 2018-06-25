var mongoose = require ('mongoose');

var todoSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required : true
    },
    completed:{
        type: Boolean,
        required: true
    },
    username:{
        type: String,
        required : true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Todo = module.exports = mongoose.model('Todo', todoSchema)

module.exports.getTodos = function(callback,limit){
    Todo.find(callback).limit(limit);
}

module.exports.getTodoById = function(id,callback){
    Todo.findById(id,callback);
}

module.exports.addTodo = function(todo,callback){
    Todo.create(todo,callback);
}

module.exports.updateTodo = function(id, todo, options, callback){
    var query = {_id: id};
    var update = {
        name : todo.name,
        description : todo.description,
        completed : todo.completed,
        username : todo.username
    }
    Todo.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteTodo = function(id,callback){
    var query = {_id: id}; 
    Todo.remove(query,callback);
}

