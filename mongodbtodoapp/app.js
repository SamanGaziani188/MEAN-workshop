var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.json());

User = require('./users.js')
Todo = require('./todos.js')




mongoose.connect('mongodb://localhost/todoapp');
var db = mongoose.connection; 

app.get('/',function(req,res)
{
    res.send('Please use /todo');
});

app.get('/users', function(req,res){
    User.getUsers(function(err,users){
        if (err){
            throw err;
        }
        res.json(users);
    });
});

app.get('/users/:_id', function(req,res){
    User.getUserById(req.params._id , function(err,user){
        if (err){
            throw err;
        }
        res.json(user);
    });
});

app.post('/users', function(req,res){
    var user = req.body;
    User.addUser(user, function(err,user){
        if (err){
            throw err;
        }
        res.json(user);
    });
});

app.put('/users/:_id', function(req,res){
    var id = req.params._id;
    var user = req.body;
    User.updateUser(id, user, {}, function(err,user){
        if (err){
            throw err;
        }
        res.json(user);
    });
});

app.delete('/users/:_id', function(req,res){
    var id = req.params._id;
    User.deleteUser(id, function(err,user){
        if (err){
            throw err;
        }
        res.json(user);
    });
});

app.get('/todo', function(req,res){
    Todo.getTodos(function(err,todos){
        if (err){
            throw err;
        }
        res.json(todos);
    });
});

app.get('/todo/:_id', function(req,res){
    Todo.getTodoById(req.params._id , function(err,todo){
        if (err){
            throw err;
        }
        res.json(todo);
    });
});

app.post('/todo', function(req,res){
    var todo = req.body;
    Todo.addTodo(todo, function(err,todo){
        if (err){
            throw err;
        }
        res.json(todo);
    });
});

app.put('/todo/:_id', function(req,res){
    var id = req.params._id;
    var todo = req.body;
    Todo.updateTodo(id, todo, {}, function(err,todo){
        if (err){
            throw err;
        }
        res.json(todo);
    });
});

app.delete('/todo/:_id', function(req,res){
    var id = req.params._id;
    Todo.deleteTodo(id, function(err,todo){
        if (err){
            throw err;
        }
        res.json(todo);
    });
});


app.listen(3000);
console.log('Running on port 3000')