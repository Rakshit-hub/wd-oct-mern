function returnVowels(str){
    let vowels='aeiou'
    let result=''
    for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
        result=result+str[i]
       
     }
 }return result
}
console.log(returnVowels('dct academy'))