//var function scoped
function details(){
    //console.log(name)
    if(true){
        let name = 'arjun'
        console.log(name)
    }console.log(name)
} 
details()



//let||const - block scope
//console.log(name) //reference error
//if(true){
  //  const name = 'arjun'
    //console.log(name) // arjun
//}
//console.log(name)  // will be error becoz const is block scope