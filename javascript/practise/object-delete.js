let object={
    name: "Ramesh", 
    city: "bangalore",
     profession: "full stack developer", 
     age: 22,
      greet: function(user){
          return 'hello this is'+user
      }
}
object.color='white'
delete object.name
console.log(object.greet('rakshit'))
console.log(object.color)
console.log(object)