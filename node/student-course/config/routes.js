const express=require('express')
const router=express.Router
const studentController=require('../app/controllers/studentsController')

const {checkStudentDepartment}=require('../app/middlewares/validity')

router.get('/students/:id/departments/:departmentId',checkStudentDepartment,studentController.departmentInfo)
module.exports=router