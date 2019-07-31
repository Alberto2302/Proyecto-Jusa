
const mongoose = require('mongoose')
require('dotenv').config()


    const employeeSchema = mongoose.Schema({

        id_employee:{
            type: Number,
    
            trim:true,
            unique:1
        },
        name: {
            type: String,
    
            maxlength: 100
        },
        lastnamefat: {
            type: String,
    
            maxlength: 100
        },
        lastnamemoth: {
            type: String,
    
            maxlength: 100
        },
        origin: {
            type: String,
    
            maxlength: 100
        },
        birthdate:{
            
            type: Date,
    
        },
        gender:{
            type: String,
            
            maxlength: 100
        },
        civilstatus:{
            type:String,
    
            maxlength: 100
        },
        curp:{
            type:String,
    
            maxlength: 100
        },
        rfc:{
            type:String,
    
            maxlength: 100
        },
        imss:{
            type:String,
    
            maxlength: 100
        },
        scholarship:{
            type:String,
    
            maxlength: 100
        },
        cellphonenumber:{
            type:Number,
    
            maxlength: 100
        },

        email: {
            type: String,
    
            trim: true,
            
        },

        emergencyContact:{
            type:String,
    
            maxlength: 100
        },
        contactRelationship:{
            type:String,
    
            maxlength: 100
        },
        contactNumber:{
            type:String,
    
            maxlength: 100
        },
        homestatus:{
            type:String,
         
            maxlength: 100
        },
        streetandNumber:{
            type:String,
    
            maxlength: 100
        },
        colony:{
            type:String,
    
            maxlength: 100
        },
        townHall:{
            type:String,
    
            maxlength: 100
        },
        cp:{
            type:Number,
    
            maxlength: 100
        },
        
        chronicDiseases:{
            type:String,
    
            maxlength: 100
        },
      
        medicalVoucher:{
            type:String,
    
            maxlength: 100
        },
        
    
        birthCertificate:{
            type:String,
    
            maxlength: 100
        },
        actapdf:{
            type:Object,

        },
        curpStatus:{
            type:String,
    
            maxlength: 100
        },
        proofofAddress:{
            type:String,
    
            maxlength: 100
        }, 

        noCriminalRecord:{
            type:String,
    
            maxlength: 100
        }, 
        primer:{
            type:String,
    
            maxlength: 100
        }, 
        prePrimer:{
            type:String,
    
            maxlength: 100
        }, 
        proofofStudies:{
            type:String,
    
            maxlength: 100
        }, 
        letterOfrecommendation:{
            type:String,
    
            maxlength: 100
        }, 
        copyOfIne:{
            type:String,
    
            maxlength: 100
        }, 
        whoCapturesInformation:{
            type:String,
    
            maxlength: 100
        }, 

            documentsReception:{
            type:String,
    
            maxlength: 100
        }





    })

    const Employee = mongoose.model('Employee', employeeSchema, "employeeSchema")

    module.exports = { Employee }