var mongoose = require ('mongoose');

var todoSchema = mongoose.Schema({
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
