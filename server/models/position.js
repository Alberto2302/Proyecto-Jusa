
const mongoose = require('mongoose')



const positionSchema = mongoose.Schema({
    
    namePosition: {
        type: String,
        required: true,
        maxlength: 100
    }



})

const Position = mongoose.model('Position', positionSchema)

module.exports = { Position }