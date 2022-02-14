var person={
    name:'ani',
    city:'banglore'
}
//pure function-It is not changing the parametrs passed to the function
function print(person){
    return `${person.name} lives in ${person.city}`
}
console.log(print(person))
console.log(print(person))

//impure function
function print(person){
    person.name='rakshit'               //value of parameter has been changed here
    return `${person.name} lives in ${person.city}`
}
console.log(print(person))
console.log(print(person))
//impure function-a function which changes the values of the parameters passed is an impure function