function reverseStr(str){
    let result = ''
    for(let i=0; i<str.length; i++){
        result= str[i]+result
    }
    return result
}
console.log(reverseStr('javascript'))


//with buitlinfuctions
const word = 'javascript'
const wordone=console.log(word.split('').reverse().join(''))


//usingdecrementation

