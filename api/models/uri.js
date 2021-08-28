const { Schema } = require("mongoose"),
mongoose = require('mongoose');

var URISchema = new Schema({
    token:String,
    code:String,
    pass:String,
    hash:String
});

var URI = mongoose.model("redirects", URISchema);

module.exports = URI