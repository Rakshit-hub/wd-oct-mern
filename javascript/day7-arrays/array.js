 // array is oedrs, integer indexed .collection of values

const players=['sachin','saurav','sehwag','rahul']
console.log(player(3))// rahul
console.log(typeof players) // object


const article={
    title:'javascript full stack',
    body:'full stack developer'

}
console.log(typeof article) // object

console.log(Array.isArray(players)) //true

console.log(Array.isArray(article))// false

// methods
console.log(players.push('yuvraj'))//5
console.log(players)

const  numbers = []
numbers.push(10,20,20)
console.log(numbers)

//element/s to the beginning of array



// add elements at specific index
console.log(players.splice(3,0,'dhoni'))
console.log(players)


//remove from end
console.log(players.pop())
console.log(players)

//remove from beggining
console.log(players.shift())
console.log(players)

//remove at specific index

console.log(players.splice(2,1)) //'dhoni'
console.log(players)

//update

players[1]='shikar'
console.log(players)

//read
console.log(players[1]) 















