function determine(value){
    if ( Array.isArray(value)){
        return "array"
     }
    else{
        return 'object'
    }

}
console.log(determine([10,20])) 
console.log(Array.isArray([10,20]))