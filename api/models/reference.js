const mongoose = require('mongoose')


const Reference = new mongoose.Schema({
    photo: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
})


module.exports = mongoose.model('Reference', Reference)