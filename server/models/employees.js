
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_I = 10
const jwt = require("jsonwebtoken")
require('dotenv').config()


    const employeesSchema = mongoose.Schema({
        id_empleado:{
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

        :{
            type:String,
            required: true,
            maxlength: 100
        },
        civilstatus:{
            type:String,
            required: true,
            maxlength: 100
        },
        civilstatus:{
            type:String,
            required: true,
            maxlength: 100
        },
        civilstatus:{
            type:String,
            required: true,
            maxlength: 100
        },
        civilstatus:{
            type:String,
            required: true,
            maxlength: 100
        },
        civilstatus:{
            type:String,
            required: true,
            maxlength: 100
        },



        token: {
            type: String
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: 1
        }

    })

    const Employees = mongoose.model('Employees', employeesSchema)

    module.exports = { Employees }