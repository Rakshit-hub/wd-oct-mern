const express=require('express')
const notesController=require('../app/controllers/notesController')
//const categoriesController=require('../app/controllers/categoriesController')
const router=express.Router()

router.get('/notes',notesController.list)
router.get('/notes/:id',notesController.show)
router.post('/notes',notesController.create)
router.put('/notes',notesController.update)
router.delete('/notes/:id',notesController.destroy)

const categoriesController=require('../app/controllers/categoriesController')
router.get('/categories',categoriesController.list)
router.post('/categories/',categoriesController.create)
router.delete('/categories/:id',categoriesController.destroy)
router.get('/categories/:id',categoriesController.show)
router.put('/categories/:id',categoriesController.update)
module.exports=router
