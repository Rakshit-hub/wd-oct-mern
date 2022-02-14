function hashTag(str){
    let result = '#'
    const words= str.split(' ')
    for(let i=0; i<words.length; i++){
        result= result+words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    }
    
    return result
}
console.log(hashTag('javascript is awesome'))
console.log(hashTag('make in india'))

