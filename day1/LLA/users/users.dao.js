var mongoose = require("mongoose");
var userSchema = require("./users.model");

userSchema.statics = {
    create: function(data, cb) {
        var user = new this(data);
        user.save(cb);
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
var userModel = mongoose.model('Users', userSchema);
module.exports = userModel;