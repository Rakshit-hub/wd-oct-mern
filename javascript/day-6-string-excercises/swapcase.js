function swapCase(letters){
    
    let result = ''
    for(let i=0; i<letters.length; i++){
        if(letters[i]==letters[i].toUpperCase()){
            result= result+ letters[i].toLowerCase()
        }else {
            result=result+letters[i].toUpperCase()
        }
         
    }return result

}
console.log(swapCase('jAvAsCrIpT'))
 