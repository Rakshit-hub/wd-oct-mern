//function 
function print(n){
    console.log(n)
}

//randomgenerator is a HOF-the function tht takes another fuction as an arguement is called as HOF
function randomgenerator(callback){
    const random=Math.round(Math.random()*10)
    callback(random)
}

randomgenerator(print)// print here has become callback function

randomgenerator((n)=>{
    console.log('inline',n)
})

function six(callback){
    console.log('rakshit')
    callback()
}
function seven(){
    console.log('rakshitmy')
}
six(seven)