const Product=require('../models/Product')

module.exports.list=(req,res)=>{
    Product.find()
    .then((product)=>{
        res.json(product)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const product =new Product(body)
    product.save()
    .then((product)=>{
        res.json(product)
    })

}