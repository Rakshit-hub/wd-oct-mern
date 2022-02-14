//will call the call back function just once
// setTimeout(function(){
//     console.log(Math.round(Math.random()*10))
// },1000)


//will keep calling the callback function with the given interval
setInterval(function(){
    console.log(Math.round(Math.random()*10))
},500)

const a=[1,2,3,4,56,7]
for(i=0;i<a.length;i++){

}
const p=a.pop()
a.unshift(p)
console.log(a)

