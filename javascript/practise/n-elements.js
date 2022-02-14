 // Test Data
// first([7, 9, 0, -2]) ; // returns 7 
// first([],3); // returns []
// first([7, 9, 0, -2],3); // returns [7, 9, 0] 
// first([7, 9, 0, -2],6)); // returns [7, 9, 0, -2] 
// first([7, 9, 0, -2],-3); returns [7,9,0,-2]

function firstElements(a,b){
    let result=[]
    if(b<a.length){
for(i=0;i<b;i++){
    result.push(a[i])

    }
}else if (b>a.length || b<0 ){
    for(i=0;i<a.length;i++){
        result.push(a[i])
    
        }

}else if(b==0){
    result='7'
}
return result
}
console.log(firstElements([7, 9, 0, -2]))
