function randomEle(numbers){
    const random= Math.floor(Math.random()*numbers.length)
    return numbers[random]

}


    

console.log(randomEle([10,20,30,40,50]))