const mongoose = require('mongoose')

const adminLog = new mongoose.Schema({
    name:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('log', adminLog)