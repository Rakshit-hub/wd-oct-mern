const players=['virat','sachin','dhoni','shewag']

//reverse the players array
console.log(players.reverse()) 
console.log(players)

//sort the players array
console.log(players.sort())

//find the index of sachin 
console.log(players.indexOf('sachin'))       //1

//use the includes method to check if laxman is present
console.log(players.includes('laxman')) //false

//join the array of players with ','
console.log(players.join(', '))

//
const zeroes=new Array(25)
zeroes.fill(0)
console.log(zeroes)

//+ does not work on arrays
//concat is used for adding 2 arrays
const n1=[10,20],n2=[30,40],a1=50
const n3=n1.concat(n2)
console.log(n3)
console.log(n3.concat(a1))

