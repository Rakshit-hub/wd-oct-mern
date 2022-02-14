const express=require('express')
const router=express()
router.get('/split/name',(req,res)=>{
    let fullName=req.query.split(' ')
    firstName=fullName[0],lastName=fullName[fullName.length-1]


})