var mongoose = require('mongoose');

var imageSchema = new mangoose.Schema({
    filename: String,
    originalName: String,
    desc: String
  },
{ timestamps: true});

module.exports = mangoose.model('Image', imageSchema);