function oneElementOut(a,b,c){
    let truthy = 0
    let result
    if (a) {
    truthy++
    }
    if (b) {
    truthy++
    } if (c) {
    truthy++
    }
    console.log(truthy)
    if (truthy > 1) {
    result=false
    } else {
    result=true
}return result
}
console.log(oneElementOut(0,1,2))