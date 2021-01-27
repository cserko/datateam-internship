var mongoose = require("mongoose");
var songSchema = require("./songs.model");

songSchema.statics = {
    create: function(data, cb) {
        var song = new this(data);
        song.save(cb);
    },
    get: function(query, cb){
        this.find(query, cb);
    },
    getbyName: function(query, cb){
        this.find(query, cb);
    },
    update: function(query, updateData, cb){
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },
    delete: function(query, cb){
        this.findOneAndDelete(query, cb);
    }
}
var songModel = mongoose.model('Songs', songSchema);
module.exports = songModel;