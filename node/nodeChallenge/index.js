const express=require('express')
const port=3015
const app=express()
const axios=require('axios')

app.get('/split/name',(req,res)=>{
    let fullName=req.query.fullName.split(" ")
    
    console.log(req.query)
    firstName=fullName[0],
    lastName=fullName[fullName.length-1]
    console.log(firstName)
   res.json(  {
       firstName,lastName
   })
})
app.get('/calculate/age',(req,res)=>{
    let dob=req.query.dob
    console.log(dob)
    let value=dob.slice(6,10)
    console.log(value)
    let year=new Date()
    console.log(year)
    const currentYear=year.getFullYear()
    const age=currentYear-value
    res.json({age})

})

app.get('/users',(req,res)=>{
    const name=req.query.name
    const country_id=req.query.country_id
    //console.log(req)
    axios.get(`https://api.genderize.io?name=${name}&countryid=${country_id}
    `)
    .then((response)=>{
       // 
        const gender=response.data.gender
        const country_id=response.data.country_id
        console.log(response.data.country_id)
        res.json({name,gender,country_id})
    })
})

app.listen(port,()=>{
    console.log('connected to port',port)
})