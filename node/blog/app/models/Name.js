const mongoose=require('mongoose')
const Schema=mongoose.Schema

const nameSchema=new Schema({
    name:{
        type:String
    },
    gender:{
        type:String
    }
})

const Name=mongoose.model('Name',nameSchema)
module.exports=Name