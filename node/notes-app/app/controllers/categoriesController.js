 const Category=require('../models/category')

 module.exports.list=(req,res)=>{
    Category.find()
        .then((categories)=>{
            res.json(categories)
        })
        .catch((err)=>{
            res.json(categories)
        })
 }
 module.exports.create=(req,res)=>{
    const body=req.body
    const category=new Category(body)
    category.save()
    .then((category)=>{
        res.json(category)
    })
    .catch((err)=>{
        res.json(err)
    })
 }
module.exports.destroy=(req,res)=>{
    const id=req.params.id
        Category.findByIdAndRemove(id)
        .then((category)=>{
            if(category){
                res.json(category)
            }else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}
module.exports.show=(req,res)=>{
    const id=req.params.id
        Category.findById(id)
        .then((category)=>{
            if(category){
                res.json(category)
            }else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}
module.exports.update=(req,res)=>{
    const body=req.body
    const id=req.params.id
    Category.findByIdAndUpdate(id,body,{runValidators:true,new:true})
    .then((category)=>{
        if(category){
            res.json(category)
        }else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}
