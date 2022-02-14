function airthemetic(n1,n2,op){
    if(op=='add'){
        result= n1+n2
    } else if(op=='sub'){
        result=n1-n2

    } else if(op=='mul'){
        result=n1*n2
    }
    return result
}
console.log(airthemetic(5,2,'add'))
console.log(airthemetic(5,2,'sub'))
console.log(airthemetic(5,2,'mul'))