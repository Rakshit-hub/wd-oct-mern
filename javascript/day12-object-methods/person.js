const person={
    name:'mahesh',
    greet:function(){
        return 'hi my bame is'+this.name
    },
    sayHello:function(username){
        return 'hi,i am '+this.name+',hello '+username
    }
}
console.log(person)
console.log(person.name)

console.log(Object.keys(person))
console.log(person.greet())

console.log(person.sayHello('ani'))