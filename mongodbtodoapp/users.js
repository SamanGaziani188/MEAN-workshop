var mongoose = require ('mongoose');

var userSchema = mongoose.Schema({
    username:{
        type: String,
        required : true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var User = module.exports = mongoose.model('User', userSchema)

module.exports.getUsers = function(callback,limit){
    User.find(callback).limit(limit);
}

module.exports.getUserById = function(id,callback){
    User.findById(id,callback);
}

module.exports.addUser = function(user,callback){
    User.create(user,callback);
}
