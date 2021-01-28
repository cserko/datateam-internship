var Users = require('./users.controller');

module.exports = function(router){
    router.post('/user/create', Users.createUser);
    router.get('/user/get', Users.getUsers);
    router.get('/user/get/:name', Users.getUsers);
    router.put('/user/update/:id', Users.updateUser);
    router.delete('/user/remove/:id', Users.removeUser);
}