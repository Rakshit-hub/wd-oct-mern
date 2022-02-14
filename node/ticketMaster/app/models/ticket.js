const mongoose=require('mongoose')
const Schema=mongoose.Schema
const TicketSchema=new Schema({
    code:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true,
        minlength:10,

    },
    customer:{
        type:Schema.Types.ObjectId,
        ref:'Customer',
        required:true
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:'Department',
        required:true
    },
    employee:[{
        type:Schema.Types.ObjectId,
        ref:'Employee',
        required:true

    }]

})
const Ticket=mongoose.model('Ticket',TicketSchema)
module.exports=Ticket