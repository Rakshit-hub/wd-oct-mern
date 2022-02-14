function stringIndexOf(str,char){
    let count =0
     let i
    for ( i=0; i<str.length; i++){
        
        if(str[i]===char){
           console.log(i)
           break
        }
            
        
    }return i

}
console.log(stringIndexOf('awesome','e '))