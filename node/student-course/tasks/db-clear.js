const mongoose=require('mongoose')
const Department=require('../app/models/Department')
const Student=require('../app/models/Student')

mongoose.connect('mongodb://localhost:27017/student-course-oct')
.then(()=>{
    console.log('connected to db')
    Department.deleteMany({})
    .then(()=>{
        console.log('delelted')
    })
    Student.deleteMany({})
    .then(()=>{
        console.log('student deleted')
    })
})
.catch(()=>{
    console.log(err)
})
