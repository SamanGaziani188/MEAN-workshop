const users = 
[
    {   id: 1,
        name: "Ahsan Ayaz",
        email: "ahsan.ayaz@iomechs.com"
    }, 
    {
        id: 2,
        name: "Siraj Ul Haq",
        email: "sirajulhaq@koderlabs.com"
    }    
]

currentId = 2;


exports.addUser = function(object)
{
    currentId++;
    users.push({"id": currentId, "name": object.name , "email": object.email});
};

exports.deleteUser = function(id)
{
    const user = users.find(user => {
        return user.id === parseInt(id);});
    const index = users.indexOf(user);
    return users.splice(index,1);
};

exports.updateUser = function(id ,object)
{
    const user = users.find(user => {
        return user.id === parseInt(id);});
    user.name = object.name;
    user.email = object.email;
    return user;
};

exports.getUsers = function()
{
    return users;
};

exports.getUserById = function(id)
{
    const user = users.find(user => {
        return user.id === parseInt(id);});
    return user;
};