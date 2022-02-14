const express=require('express')
const {mongoose}=require('./config/database')
const axios=require('axios')

const{usersRouter}=require('./app/controllers/UsersController')
const router=require('./config/routes')
const app=express()
const port=3030
app.use(express.json())
app.use('/users',usersRouter)
app.use('/',router)

app.listen(port,function(){
    console.log('listening to port',port)
})

