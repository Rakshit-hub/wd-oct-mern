const str='bangalore'
function findVowels(str){
    const result={a:0,e:0,i:0,o:0,u:0}
    for(let i=0;i<str.length;i++){
        if(result.hasOwnProperty(str[i])){
            console.log(str[i])
            result[str[i]]++
        }
    }return result
}
console.log(findVowels(str))