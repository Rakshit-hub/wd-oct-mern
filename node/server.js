const http=require('http')
const port =3010
const server=http.createServer(function(request,respone){
    if(request.url=='/'){
        respone.end('welcome to website')
    }else if(request.url=='/users'){
        const users=[{id:1,name:'jack'},{id:2,name:'phil'}]
        respone.end(JSON.stringify(users))
    }else if(request.url=='/products'){
        const products=[{id:1,name:'scale'},{id:2,name:'pencil'}]
        respone.end(JSON.stringify(products))
    }else{
        respone.end('the page is unavailble')
    }
})
server.listen(port,()=>{
    console.log('listening port',port)
})  