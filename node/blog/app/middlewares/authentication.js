const {User}=require('../models/User')

const authenticateUser=function(req,res,next){
    const token=req.header('x-auth')
         User.findByToken(token)
            .then(function(user){
               if(user){
                req.user=user
                req.token=token
                next()
               }else{
                   res.send('token not available')
               }
            })
            .catch(function(err){
                res.status('401').send(err)
            })
}
 const authorizeUser=(req,res,next)=>{
    if(req.user.role=='admin'){
        next()
    }else{
        res.status('403').json({notice:'you are not authorized'})
    }
 }



module.exports={
    authenticateUser,authorizeUser
}