const express=require('express')
const setupDB=require('./config/database')
const router=require('./config/routes')
const port =3030
const app=express()

app.use(express.json())

setupDB()
app.use('/',router)



app.listen(port,()=>{
    console.log('connected to port',port)
})