function Person(firstName,lastName){
    this.firstName=firstName
    this.lastName=lastName
    this.fullName=function(){
        return this.firstName+" "+this.lastName
    }
    this.greet=function(){
        return 'hello there my name is  '+this.firstName
    }
    this.sayHello=function(user){
        return 'hello'+ user
    }
}
const p1=new Person('sachin','tendulkar')
console.log(p1.fullName())
console.log(p1.greet())
console.log(p1.sayHello(' ani'))

const p2=new Person('','')
console.log(p2.fullName())
console.log(p2.greet())
console.log(p2.sayHello(' ani'))