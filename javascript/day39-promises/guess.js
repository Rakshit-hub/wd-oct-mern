function guess(n){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if(n%2==0){
                resolve(n)
            }else{
                reject(n)
            }
        }, 2000);
    })
}

guess(5)
.then((n)=>{
    console.log('even',n)
})
.catch((n)=>{
    console.log('odd',n)
})

for(i=0;i<5;i++){
    console.log(i)
}