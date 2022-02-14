//add=function name
//n1,n2 -parameters
//function declaration/functio degination
//gets hoisted
console.log(add(10,20))
// a function should return a value if ni value is returned undefined gets returned
function add(n1,n2){
    //n1,n2 are local variables
    return n1+n2
}
//invoking the function,calling the function
//10,20 =arguements
console.log(add(10,20))
