var Songs = require('./songs.dao');

exports.createSong = function (req, res, next) {
    var song = {
        name: req.body.name,
        artist: req.body.artist,
        lyrics: req.body.lyrics
    };

    Songs.create(song, function(err, song) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Song created successfully"
        })
    })
}

exports.getSongs = function(req, res, next) {
    Songs.get({}, function(err, songs) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            songs: songs
        })
    })
}

exports.getSong = function(req, res, next) {
    Songs.get({name: req.params.name}, function(err, songs) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            songs: songs
        })
    })
}

exports.updateSong = function(req, res, next) {
    var user = {
        name: req.body.name,
        artist: req.body.artist,
        lyrics: req.body.lyrics,
    }
    Songs.update({_id: req.params.id}, song, function(err, song) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Song updated successfully"
        })
    })
}

exports.removeSong = function(req, res, next) {
    Songs.delete({_id: req.params.id}, function(err, song) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Song deleted successfully"
        })
    })
}