//es6 feature
const numbers=[10,20,30,40,50]
const result=numbers.filter(function(ele){
    return ele%2==0 
})
console.log(result)


const result2=numbers.filter(ele=>ele%2==0)
console.log(result2)


//es6 arrow function
const es6=numbers.filter(ele=> ele>25)
console.log(es6)