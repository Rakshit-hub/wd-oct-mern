console.log(this) // outside function      
                //{}
function printThis(){
    //inside function
    console.log(this)//global object
}
printThis()

const person={
    name:'manish',
    thisValue:function(){
        //inside method
        return this.name               //current object
    }
}
console.log(person.thisValue())