const numbers=[10,20,30]
//c style
function arrayMap(numbers){
    const result=[]
    for(let i=0;i<numbers.length;i++){
        result.push(numbers[i]+2)
    }
    return result
}
console.log(arrayMap(numbers))


//js style
const result= numbers.map(function(ele){
    return ele + 2
})
console.log(result)

const results=numbers.map((num)=>{
    return num+1
})

console.log(results)
   