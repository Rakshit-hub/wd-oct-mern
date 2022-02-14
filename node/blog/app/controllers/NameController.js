const Name=require('../models/Name')
const axios=require('axios')

module.exports.list=(req,res)=>{
    const name=req.query.name
    axios.get(`https://api.genderize.io/?name=${name}`)
    
    .then((response)=>{
        const gender=response.data.gender
        res.json({name,gender})
    })

}