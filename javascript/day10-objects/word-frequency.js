const str='virat virat sachin virat'
function wordFrequency(str){
    const result={}
    const words=str.split(' ')
    words.forEach(function(ele){
        if(result[ele]){
            result[ele]++
        }else{
            result[ele]=1
        }
    })
    return result
}
console.log(wordFrequency(str))

