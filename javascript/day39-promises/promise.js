const myPromise= new Promise ((resolve,reject)=>{
    setTimeout(() => {
        const random=Math.round(Math.random()*10)
        if(random%2==0){
            resolve(random)
        }else{
            reject(random)
        }
    }, 1000);
})

myPromise
.then((n)=>{
    console.log('sucess',n)
})
.catch((n)=>{
    console.log('error',n)
})