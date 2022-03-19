const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    id: 'string',
    password: 'string',
    name: 'string'
});

module.exports = mongoose.model("user", userSchema);