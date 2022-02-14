function fakeBinary(number){
    let result = ''
    for( var i=0; i<number.length; i++){
         
        if (number[i]>5){
            result= result + 0
            
        }else{
            result = result + 1

        } 
    }return result

}
console.log(fakeBinary('226633775'))