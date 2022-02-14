function slice(a,b,c){
    let result=[]
    for(i=b;i<c;i++){
        result.push(a[i])
    }return result
}
console.log(slice([1,2,3,4,5],2,4))