const express=require('express')
const router=express()
const customersController=require('../app/controllers/customersController')

router.get('/customers',customersController.list)
router.post('/customers',customersController.create)
router.get('/customers/:id',customersController.show)
router.delete('/customers/:id',customersController.destroy)
router.put('/customers/:id',customersController.update)

const departmentController=require('../app/controllers/departmentsController')

router.get('/departments',departmentController.list)
router.post('/departments',departmentController.create)
router.get('/departments/:id',departmentController.show)
router.delete('/departments/:id',departmentController.destroy)
router.put('/departments/:id',departmentController.update)

const employeeController=require('../app/controllers/employeesController')

router.get('/employees',employeeController.list)
router.post('/employees',employeeController.create)
router.get('/employees/:id',employeeController.show)
router.delete('/employess/:id',employeeController.destroy)
router.put('/employees/:id',employeeController.update)

const ticketController=require('../app/controllers/ticketsController')

router.get('/tickets',ticketController.list)
router.post('/tickets',ticketController.create)
router.get('/tickets/:id',ticketController.show)
router.delete('/tickets/:id',ticketController.destroy)
router.put('/tickets/:id',ticketController.update)
  
module.exports=router