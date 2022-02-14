const error =(n)=>{
    console.log('error',n)
}

const sucess=(n)=>{
    console.log('sucess',n)
}

function randomGenerator(sucess,error){
    setTimeout(()=>{
        const random=Math.round(Math.random()*10)
        if(random%2==0){
            sucess(random)
        }else{
            error(random)
        }
    },3000);
}
randomGenerator(sucess,error)