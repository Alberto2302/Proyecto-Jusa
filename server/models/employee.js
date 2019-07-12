
const mongoose = require('mongoose')
require('dotenv').config()


    const employeeSchema = mongoose.Schema({

        id_employee:{
            type: Number,
            required: true,
            trim:true,
            unique:1
        },
        name: {
            type: String,
            required: true,
            maxlength: 100
        },
        lastnamefat: {
            type: String,
            required: true,
            maxlength: 100
        },
        lastnamemoth: {
            type: String,
            required: true,
            maxlength: 100
        },
        origin: {
            type: String,
            required: true,
            maxlength: 100
        },
        birthdate:{
            type: Date,
            required: true,
        },
        gender:{
            type: String,
            required: true,
            maxlength: 100
        },
        civilstatus:{
            type:String,
            required: true,
            maxlength: 100
        },
        curp:{
            type:String,
            required: true,
            maxlength: 100
        },
        rfc:{
            type:String,
            required: true,
            maxlength: 100
        },
        imss:{
            type:String,
            required: true,
            maxlength: 100
        },
        scholarship:{
            type:String,
            required: true,
            maxlength: 100
        },
        cellphonenumber:{
            type:Number,
            required: true,
            maxlength: 100
        },

        email: {
            type: String,
            required: true,
            trim: true,
            unique: 1
        },

        emergencyContact:{
            type:String,
            required: true,
            maxlength: 100
        },
        contactRelationship:{
            type:String,
            required: true,
            maxlength: 100
        },
        contactNumber:{
            type:String,
            required: true,
            maxlength: 100
        },
        homestatus:{
            type:String,
            required: true,
            maxlength: 100
        },
        streetandNumber:{
            type:String,
            required: true,
            maxlength: 100
        },
        colony:{
            type:String,
            required: true,
            maxlength: 100
        },
        townHall:{
            type:String,
            required: true,
            maxlength: 100
        },
        cp:{
            type:Number,
            required: true,
            maxlength: 100
        },
        chronicDiseases:{
            type:String,
            required: true,
            maxlength: 100
        },
        medicalVoucher:{
            type:String,
            required: true,
            maxlength: 100
        },
        
    
        birthCertificate:{
            type:String,
            required: true,
            maxlength: 100
        },
        curpStatus:{
            type:String,
            required: true,
            maxlength: 100
        },
        proofofAddress:{
            type:String,
            required: true,
            maxlength: 100
        }, 

        noCriminalRecord:{
            type:String,
            required: true,
            maxlength: 100
        }, 
        primer:{
            type:String,
            required: true,
            maxlength: 100
        }, 
        prePrimer:{
            type:String,
            required: true,
            maxlength: 100
        }, 
        proofofStudies:{
            type:String,
            required: true,
            maxlength: 100
        }, 
        letterOfrecommendation:{
            type:String,
            required: true,
            maxlength: 100
        }, 
        copyOfIne:{
            type:String,
            required: true,
            maxlength: 100
        }, 
        whoCapturesInformation:{
            type:String,
            required: true,
            maxlength: 100
        }, 

            documentsReception:{
            type:String,
            required: true,
            maxlength: 100
        }





    })

    const Employee = mongoose.model('Employee', employeeSchema, "employeeSchema")

    module.exports = { Employee }