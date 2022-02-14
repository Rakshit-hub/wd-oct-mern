function strCount(str,char) {
    var count =0;
    for(var i=0; i<str.length; i++){
        if(str[i]== char) {
            count ++
        }
    }

        return count
}
console.log(strCount('hello','x'));


// function count(n){
//  let square=n*n  
//  return square 
// }
// console.log(count(5))

const count=(n)=>{
 let number=n*n
 return number
}

console.log(count(5))

 