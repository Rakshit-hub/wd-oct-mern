//ed6-coinsize properties and methods(short hand properties)
//es5
var name='sachin',designation='sr developer'
var obj={
    name:name,
    designation:designation

}
console.log(obj)
//-------------------------------------------------------------------------------------------------------------------
//es6
const title='javascript',description='js is awesome'
var obj={
    title,
    description
}
console.log(obj)
//es6 features//
// let and const
// default Parameters 
// arrow functions
// `templete strings`

//es5
var student={
    name:'rakesh',
    details:function(){
        return 'name- '+this.name
    }
}
console.log(student.details())

//es6
const employee={
    name:'tejas',
    code:'DCT123',
    details(){
        return `${this.name}- ${this.code}`
    }
}
console.log(employee.details())









