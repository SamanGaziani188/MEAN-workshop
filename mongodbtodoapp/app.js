var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
User = require('./users.js')
Todo = require('./todos.js')



mongoose.connect('mongodb://localhost/todoapp');
var db = mongoose.connection; 

app.get('/',function(req,res)
{
    res.send('Please use /api/todo');
});


app.get('/api/todos', function(req,res){
    Todo.getTodos(function(err,todos){
        if (err){
            throw err;
        }
        res.json(todos);
    });
});

app.get('/api/users', function(req,res){
    User.getUsers(function(err,users){
        if (err){
            throw err;
        }
        res.json(users);
    });
});

app.get('/api/users/:id', function(req,res){
    User.getUserById(req.params.id , function(err,user){
        if (err){
            throw err;
        }
        res.json(user);
    });
});

app.post('/api/users', function(req,res){
    var user = req.body;
    User.addUser(user, function(err,user){
        if (err){
            throw err;
        }
        res.json(user);
    });
});

app.listen(3000);
console.log('Running on port 3000')