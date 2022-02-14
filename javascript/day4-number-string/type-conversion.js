const n1='10', n2='12.5'
console.log(typeof n1) //'string'
console.log(n1+5)

//convert a string to a number
const result= parseInt(n1)
console.log(typeof result) //number
console.log(parseInt(n1)+5) //15

console.log(parseInt(n2)) //12
console.log(parseFloat(n2))//12.5
console.log(parseFloat(n1))//10
console.log(Number(n1)) //10
console.log(Number(n2)) //12.5


//convert a number to syring
const m1=12, m2 = 18.7
console.log(String(m1)) //12
console.log('' + m1) //'12'

console.log(Number(true))
console.log(Number(false))