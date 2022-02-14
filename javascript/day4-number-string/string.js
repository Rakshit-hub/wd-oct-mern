const source = 'banglore'
const destination = 'mysore'
const player ='ViRat'

console.log(source[0]) //b
console.log(source[1])// a
console.log(source[25])//undefined

//for loop is used to acess a character in string
for(let i=0; i<source.length; i++){
    console.log(i, source[i])
}

console.log(source.toUpperCase()) //BANGLORE
console.log(source.slice(0,3)) //ban
console.log(source.slice(3,7)) //galo
console.log(source.slice(1)) //anglore

const student = 'ravish'
console.log(student[0].toUpperCase()+ student.slice(1))

function pangram(a){
    const alaphabet = 'abcdefghijklmnopqrstuvwxyz'
   let b= a.toLowerCase().split('').join(' ')
  // let c=b.join(' ')
   console.log(b)
    for (i = 0; i < alaphabet.length; i++){
        
        
           if (b.includes(alaphabet[i])) {
               console.log(alaphabet[25])
            return true
           } else {
            return false
        }  
        
        
    }
}
console.log(pangram('This is not panagram'))