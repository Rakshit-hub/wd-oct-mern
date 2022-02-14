const Message=require('../models/Message') 

 module.exports.list=(req,res)=>{
    Message.find({user:req.user._id})
    .then((messages)=>{
        res.json(messages)
    })
    .catch((err)=>{
        res.send(err)
    })
 }
  module.exports.create=(req,res)=>{
      const body=req.body
      const message=new Message(body)
      message.user=req.user._id
      message.save()
      
      .then((message)=>{
          res.json(message)
      })
      .catch((err)=>{
          res.json(err)
      })
  }
  module.exports.show=(req,res)=>{
      const id=req.params.id
      Message.findOne({_id: id,user:req.user._id})
      .then((message)=>{
          if(message){
              res.json(message)
          }else{
              res.json({})
          }
      })
      .catch((err)=>{
          res.json(err)
      })
  }