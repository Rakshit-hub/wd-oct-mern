//check if a element is present in aan array
const numbers=[10,20,30,40,50]

console.log(numbers.indexOf(30))
console.log(numbers.indexOf(300))

console.log(numbers.includes(30))
console.log(numbers.includes(300))

//find record based on condition
//find the first elemnt greater than 25

const result=numbers.find(function(num){
return num > 25
})
console.log(result)

function arrayFind(numbers){
    let result
    for(let i=0;i<numbers.length;i++){
        if (numbers[i]>25){
            result=numbers[i]
            break
        }
    }return result
}
console.log()