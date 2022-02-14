function printArray(a){
    for(let i=0;i<a.length;i++){
        console.log('row' + i)
        for(let ele of a[i]){
            console.log(ele)
        } 
       
    }

}
console.log(printArray([[1,2],[8,11]]))