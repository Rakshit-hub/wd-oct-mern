//es6 class
//Person
//firstName,lastName
//fullName()

class Person{
    constructor(data){
        this.firstNname=data.fname
        this.lastName=data.lname
    }
    fullName(){
        return `${this.firstNname} ${this.lastName}`
    }
}
const p1=new Person({fname:'rakshit',lname:'yalameli'})
console.log(p1.fullName())