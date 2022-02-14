const mongoose=require('mongoose')
const faker=require('faker')

const Department=require('../app/models/Department')
const Student=require('../app/models/Student')

mongoose.connect('mongodb://localhost:27017/student-course-oct')
.then(()=>{
    console.log('connected to db')
    const departments=['cs','commerce','mech']

    departments.forEach(function(dept){
        const department=new Department({name:dept})
        department.save()
        .then((dept_id)=>{
            for(let i=0;i<10;i++){
                const student=new Student({
                    name:faker.name.firstName(),
                    department:dept_id,
                    email:faker.internet.email()
                })
                student.save()
                .then(()=>{
                    console.log(student.name)
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        })
        // .catch((err)=>{
        //     console.log(err)
        // })
    })
})
.catch((err)=>{
    console.log(err)
})
