const express=require('express')
const router=express.Router()
const {authenticateUser,authorizeUser}=require('../app/middlewares/authentication')

const messageController=require('../app/controllers/MessageController')
const productController=require('../app/controllers/productController')
const NameController=require('../app/controllers/NameController')
router.get('/messages',authenticateUser,messageController.list)
router.post('/messages',authenticateUser,messageController.create)
router.get('/messages/:id',authenticateUser,messageController.show)

router.get('/products',authenticateUser,productController.list)
router.post('/products',authenticateUser,authorizeUser,productController.create)

router.get('/users',NameController.list)

module.exports=router
 