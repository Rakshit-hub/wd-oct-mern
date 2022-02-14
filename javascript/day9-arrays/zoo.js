const myzoo=[
['King Kong',['gorilla',42]],
['Nemo',['fish',5]],
['phil',['groundhog',11]]

]
console.log(myzoo)
console.log(myzoo.length)

console.log(myzoo[0]) //['King Kong',['gorilla',42]]
console.log(myzoo[0][0])//'King Kong
console.log(myzoo[0][1])//['gorilla',42]
console.log(myzoo[0][1][0])//gorilla
console.log(myzoo[0][1][1])//42


function zooInventory(myZoo){
    const result=[]
    for(let i=0;i<myzoo.length;i++){
        const str=`${myzoo[i][0] }the ${myzoo[i][1][0]} age ${myzoo[i][1][1]}`
        result.push(str)
    }return result
}
console.log(zooInventory(myzoo))