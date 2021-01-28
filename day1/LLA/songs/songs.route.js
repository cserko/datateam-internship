var Songs = require('./songs.controller');

module.exports = function(router){
    router.post('/song/create', Songs.createSong);
    router.get('/song/get', Songs.getSongs);
    router.get('/song/get/:name', Songs.getSongs);
    router.put('/song/update/:id', Songs.updateSong);
    router.delete('/song/remove/:id', Songs.removeSong);
}