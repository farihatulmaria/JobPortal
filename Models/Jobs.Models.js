const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please give the job a name"]
        trim:true,
        unique:true
    }
    description:{
        type:String,
        required:[true,"Please write something about the job"]
    }
    salary:{
        type:Number,
        required:[true,"Please offer salary for the candidate for the job"],
        min:[0,"Worker should be paid for the hard work"],
        max:[2000,"The range is too high for the company"]
    },
    status:{
        type:String,
        enum:["active","in-active","blocked"],
        default:"active"
    }
},{timestamps:true,})