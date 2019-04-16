
const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
    
    id_empresa:{
        type: Number,
        required: true,
        trim:true,
        unique:1
    },
    nameEmpresa: {
        type: String,
        required: true,
        maxlength: 100
    },
  
    service: {
        type: String,
        required: true,
        maxlength: 100
    },
    position: {
        type: String,
        required: true,
        maxlength: 100
    },
    dateofAdmission:{
        type: Date,
        required: true,
    },
    reEntrDate:{
        type: String,
        required: true,
        maxlength: 100
    },
    immsComny:{
        type:String,
        required: true,
        maxlength: 100
    }
   

})

const Company = mongoose.model('Company', companySchema)

module.exports = { Company }