const express = require('express');
const app = express();
const users = require('./users');
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/users',(req,res)=>{
    res.send(users.getUsers());
});

app.get('/users/:id', (req,res)=>
{
    res.send(users.getUserById(req.params.id));
});

app.post('users/', (req,res) =>
{
    users.addUser(req.body);
    res.send(users.getUsers());
});

app.put('users/:id',(req,res)=>
{
    users.updateUser(req.params.id , req.body.user);
    res.send(users.getUsers());
})

app.delete('users/:id', (req,res)=>
{
    const user = users.deleteUser(req.params.id);
    res.send(user);
})

app.listen(3000,()=>
    console.log('Listening to port 3000..')
)