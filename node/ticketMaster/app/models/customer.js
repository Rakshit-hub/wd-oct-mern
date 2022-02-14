const mongoose=require('mongoose')
const Schema=mongoose.Schema
const CustomerSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10
    }
})
const Customer=mongoose.model('Customer',CustomerSchema)
module.exports=Customer