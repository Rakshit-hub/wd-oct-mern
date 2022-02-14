function decompress(str){
let result=str.split('')
let object={}
for(i=0;i<result.length;i++){
    object[result[i]]=result[i+1]
    break

}
return object
}
console.log(decompress('a4g3H2R1'))