function api1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
           resolve([10,20,30]) 
        }, 500);
    })
}

function api2(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
           resolve(['mango','apple']) 
        }, 1500);
    })
}

Promise.all([api1(),api2()])
.then((values)=>{
    const [api1Response,api2Response]=values
    console.log('api1',api1Response)
    console.log('api2',api2Response)
})
.catch((err)=>{
    console.log(err)
})