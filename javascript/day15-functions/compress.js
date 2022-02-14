

function compress(str){
    let result={a:0,R:0,g:0,H:0}
    let output=[]
    let result1=''
    for(let i=0;i<str.length;i++){
        if(result.hasOwnProperty(str[i])){
            result[str[i]]++
        }
    }
    for(const ele in result){
        output.push(ele,result[ele])
        
    }
    for(i=0;i<output.length;i++){
        result1=result1+output[i]
    }return result1
}
console.log(compress('aaaaRRggggHH'))



