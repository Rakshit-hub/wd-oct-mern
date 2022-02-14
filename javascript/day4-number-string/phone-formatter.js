function phoneFormatter(number){
    let n1 = number.slice(0,3)
    let n2 = number.slice(3,6)
    let n3 = number.slice(6)
    //return '('+ n1 + ')' + '-' + n2 + '-' + n3 
    return `(${n1}) ${n2}-${n3}`

}
console.log(phoneFormatter('1234567890'))

