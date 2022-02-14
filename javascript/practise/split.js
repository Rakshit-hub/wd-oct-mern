function reverseStr(str){
    let result = ''
    for(let i=0; i<str.length; i++){
        result= str[i]+result
    }
    return result
}
console.log(reverseStr('javascript'))


var str='rakshit'
var result=''
for(let i=0;i<str.length;i++){
    result=str[i]+result
   

} console.log(result)
var res=str.split('').reverse().join('')
console.log(res) 