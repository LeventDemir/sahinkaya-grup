const mongoose = require('mongoose')


const Admin = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    auth: {
        type: Boolean,
        required: true
    },
    token: {
        type: String,
        required: true,
        unique: true
    }
})


module.exports = mongoose.model('Admin', Admin);