var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    surname: {
        type: String,
        unique: false,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
},
    {
        timestamps: true    
});

module.exports = userSchema;