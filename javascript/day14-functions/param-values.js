function add(n1,n2){
    console.log('n1',n1)
    console.log('n2',n2)
    return n1+n2
}
//if arguements dont match the params list,params will be undefined
console.log(add())
console.log(add(10))//nan
//if arguements match the params list,params will be the values passes as args
console.log(add(100,200))//300
//if more arguements are passed,extra will be ignored
console.log(add(150,75,300))//225


function add(n1=0,n2=0){
    console.log('n1',n1)
    console.log('n2',n2)
    return n1+n2
}
console.log(add())
console.log(add(10))
console.log(add(100,200))
console.log(add(150,75,300))