var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var songSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    artist: {
        type: String,
        unique: false,
        required: true
    },
    lyrics: {
        type: String,
        required: true
    }
},
    {
        timestamps: true    
});

module.exports = songSchema;