const mongoose=require('mongoose')
const Schema=mongoose.Schema
const EmployeeSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:'Department',
        required:true
    }
})
const Employee=mongoose.model('Employee',EmployeeSchema)
module.exports=Employee