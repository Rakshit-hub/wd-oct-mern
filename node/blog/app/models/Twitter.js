const mongoose=require('mongoose')
const Schema=mongoose.Schema

const twitterSchema=new Schema({

})

const Twitter=mongoose.model('Twitter',twitterSchema)
module.exports=Twitter