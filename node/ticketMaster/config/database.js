const mongoose=require('mongoose')
setupDB=()=>{
    mongoose.connect('mongodb://localhost:27017/oct-ticket-master-app',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('connected to db')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports=setupDB