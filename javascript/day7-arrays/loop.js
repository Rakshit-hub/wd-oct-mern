 let fruits = ['mango','jackfruit','apple']
 const city = 'banglore'

 for(let i=0; i<fruits.length; i++){
     console.log(fruits[i])
 }


 fruits.forEach(function(ele){ // for each can be used only for arrays not strings
     console.log(ele)

 })


 for(let char of city){       //"for of" can be used for both array and strings (NEW ES6 FEATURE)   
     console.log(char)
 }

 for(let fruit of fruits){
     console.log(fruit)
 }  

 fruits.forEach((fruit)=>{
     console.log(fruit)
 })