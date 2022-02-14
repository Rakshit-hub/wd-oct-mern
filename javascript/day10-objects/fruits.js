const fruits=['apple','mango','kiwi']
function buildObj(fruits){
    const object={}
    for(let i=0;i<fruits.length;i++){
        object[ fruits[i]]=fruits[i].length
    }
    return object
}
console.log(buildObj(fruits))
 