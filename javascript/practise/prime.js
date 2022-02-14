//appendToString("Hello", " World!"); // "Hello World!"
//appendToString("Foo", "bar"); // "Foobar"
//appendToString("bar", "Foo"); // "barFoo"
//appendToString("", "test"); // "test"
//appendToString("other test", ""); // "other test"

function appendToString(a,b){
let result=a+b
return result
}
console.log(appendToString('','test'))