 const express=require('express')
 const router=express.Router()
 
 
 const {User} =require('../models/User')
 const {authenticateUser} =require('../middlewares/authentication')


 router.post('/register',function(req,res){
     const body=req.body  
    const user=new User(body)
    user.save()
    .then(function(user){
        res.send(user)
    })
    .catch(function(err){
        res.send(err)
    })
 })
 //users/login
 router.post('/login',function(req,res){
     const body=req.body
    // const ip=req.ip
    // const ip=req.connection.remoteAddress
        // console.log(ip)
     User.findByCredentials(body.email,body.password)
 .then(function(user){
    return user.generateToken()
 })
 .then(function(token){
    res.setHeader('x-auth',token).send({})
 })
 .catch(function(err){
     res.send(err)
 })
 })
 // /users/account
 router.get('/account',authenticateUser,function(req,res){
     const {user}=req
     res.send(user)
 })
 
 // /users/logout 
router.delete('/logout',authenticateUser,function(req,res){
    const {user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(function(){
        res.send({notice:'sucessfully loged out'})
    })
    .catch(function(err){
        res.send(err)
    })
})
    
 module.exports={
     usersRouter:router
 } 