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

module.exports.updateUser = function(id, user, options, callback){
    var query = {_id: id};
    var update = {
        username: user.username
    }
    User.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteUser = function(id,callback){
    var query = {_id: id}; 
    User.remove(query,callback);
}
