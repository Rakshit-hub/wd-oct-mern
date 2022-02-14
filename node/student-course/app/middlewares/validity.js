const Student=require('../models/Student')

module.exports.checkStudentDepartment=(req,res,next)=>{
    const id=req.params.id
    const departmentId=req.params.departmentId

    Student.findById(id)
    .then((student)=>{
        if(student.department==departmentId){
            next()
        }else{
            res.send('student does not belong to the department')
        }
    })
}