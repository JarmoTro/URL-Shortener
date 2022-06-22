const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
    fullURL:{
        type: String
    },
    shortURL:{
        type: String,
        required: true,
        default: Math.floor(100000 + Math.random() * 900000)
    }
});

module.exports = mongoose.model('URL',URLSchema);