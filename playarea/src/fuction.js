//hof-a function which takes another function as  aarguemnet or a function which returnd a function 

//hof-- forEach() find() filter()

function add(n){
    return (m)=>{
        return n+m
    }
}
console.log(add(5)(10))