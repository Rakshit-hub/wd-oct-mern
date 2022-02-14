console.log('hello world');
function word(str){
    let result={}
    const word=str.split(' ')
    word.forEach(function(ele){
        if(result[ele]){
            result[ele]++
        }else{
            result[ele]=1
        }
    })
}
