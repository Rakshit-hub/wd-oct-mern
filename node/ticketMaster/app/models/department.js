const mongoose = require('mongoose')
const Schema=mongoose.Schema
const departmentSchema=new Schema({
    id:{
        type:Number
    },
    name:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})
const Department=mongoose.model('Department',departmentSchema)
module.exports=Department