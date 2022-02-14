const express = require('express')
const port =3010
const app=express()
app.use(express.json())

const users=[
    {id:1, name:'jack'},
    {id:2, name:'phil'}
]

app.get('/',function(req,res){
    res.send('Welcome to Website')
})

//Post localhost:3010/users
app.post('/users',function(req,res){
    const body=req.body
    users.push(body)
    res.json(body)
})

app.put('/users/:id',function(req,res){
    const id=req.params.id
    const body=req.body
    console.log('body',body)
    res.send('put method') 
})

app.delete('/users/:id',function(req,res){
    const id=req.params.id
    console.log('id',id)
    res.send('delete method')
})

app.get('/users',function(req,res){
    res.json(users)
})

//localhost:3010/users/:id
app.get('/users/:id',function(req,res){
    const id=req.params.id
    const user=users.find(user => user.id==id)
    if(user){
        res.json(user)
    }else{
        res.json({})
    }
})
app.listen(port,()=>{
    console.log('Listening port',port)
})