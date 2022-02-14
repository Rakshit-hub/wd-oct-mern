function underToCamel(str){
    let output = ''
    const words= str.split('_')
    output=output+words[0].toLowerCase()
    for(let i=1; i<words.length;i++){
        output=output+words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()
    }return output
}
console.log(underToCamel("first_name"))