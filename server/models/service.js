
const mongoose = require('mongoose')



const serviceSchema = mongoose.Schema({
    id_service:{
        type: Number,
        required: true,
        trim:true,
        unique:1
    },
    nameService: {
        type: String,
        required: true,
        maxlength: 100
    },
    template: {
        type: String,
        required: true,
        maxlength: 100
    },
    supervisor: {
        type: String,
        required: true,
        maxlength: 100
    },
    street: {
        type: String,
        required: true,
        maxlength: 100
    }
    





})

const Service = mongoose.model('Service', serviceSchema)

module.exports = { Service }