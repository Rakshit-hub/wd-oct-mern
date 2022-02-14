//es5-function-this refers to the global object
//function declaration
console.log(this)//{}

function printThis(){
    console.log(this)//global object
}
printThis()

//function expression
const showThis=function(){
    console.log(this)
}
//showThis()

//es6
const showes6=() =>{
    console.log(this)
}
showes6()