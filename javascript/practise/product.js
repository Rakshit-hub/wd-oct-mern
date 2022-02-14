//findProduct([10,20,30]);
function findProduct(a){
    let product=1
    for(i=0;i<a.length;i++){
        product=product*a[i]
    }return product
}
console.log(findProduct([10,20,30]))