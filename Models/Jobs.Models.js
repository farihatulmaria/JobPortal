const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please give the job a name"]
        trim:true,
        unique:true,
        maxLength:100
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
    location:String,
    jobType:{
        type:String,
        required:[true,"Please the type of the job"]
    },
    manager:{
        name:String,
        required:[true,"This is important"],
        id:{
            type:ObjectId,
            ref:"User",
            role:"Hiring Manager"
        }
    },
    candiates:[{
        type:ObjectId,
        ref:"Users"
    }],
    appliedCandiates:{
        type:Number,
        min:[0,"This can't be negative"]
    },
    status:{
        type:String,
        enum:["active","in-active","discon"],
        default:"active"
    }
},{timestamps:true,})



const Jobs = mongoose.model('Jobs',jobSchema);

module.exports = Jobs;