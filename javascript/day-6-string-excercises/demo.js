//Write a JavaScript function to check whether an `input` is a string or not.


//Test Data :
//isString('DCT Academy') 
//true
//isString([1, 2, 4, 0])
//false

function isString(a){
const result= typeof a
console.log(result)
if(result==='string'){
    return true
}else{
    return false
}
}
console.log(isString([1,2,3,4,5]))