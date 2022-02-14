function printThis(){
    console.log(this)
}
//object arguement passed to bind method,will now become the value of this keyword inside the function

printThis()
//printThis.bind({name:'rakshit'})()