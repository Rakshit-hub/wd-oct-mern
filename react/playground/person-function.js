//es-constructor function
//Person-
//firstName,lastName
//fillName()

function Person(data){
this.firstNname=data.fname
this.lastName=data.lname
this.fullName=function(){
    return `${this.firstNname} ${this.lastName}`
}
}
const p1= new Person({fname:'ms',lname:'dhoni'})
console.log(p1.fullName()) 