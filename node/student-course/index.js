const express=require('express')
const port =3055
const setupDB=require('./config/database')
const router=require('./config/routes')
 const app=express()
 setupDB()
//Request Handler

// app.get('/message',(req,res,next)=>{
//     console.log('middleware function 1')
//     next()
// },(req,res)=>{
//     console.log('request handler')
//     res.send('hi there')
// })


app.use('/',router)

 app.listen(port,function(){
     console.log('connected to port',port)
 })