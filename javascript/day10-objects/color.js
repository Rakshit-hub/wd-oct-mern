// const colors=[['green','sucess'],['red','danger'],['orange','warning']]
// function colorAssociation(colors){
//     const object={}
//     let i=0 
//        colors.forEach(function(ele){
//             object[ele[i]]=ele[i+1]
//         })
//     return object
// }
// console.log(colorAssociation(colors))

const colors=['green','sucess','red','danger','orange','warning']
function colorAssociation(colors){
    const object={}
    let i=0 
       colors.forEach(function(ele){
            object[ele[i]]=ele[i+1]
        })
    return object
}
console.log(colorAssociation(colors))