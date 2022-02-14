const express=require('express')
const port=3015
const router=require('./config/routes')
const setupDB=require('./config/database')
const app=express()
const cors=require('cors')
app.use(express.json())
app.use(cors())
setupDB()

app.get('/',function(req,res){
    res.json({
        notice:'Welcome to website'
    })
})
app.use('/',router)

app.listen(port,()=>{
    console.log('listening port',port)
})    