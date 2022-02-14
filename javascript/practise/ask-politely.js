function askPolitely(a){
    let word = a.split('')
    if (word.pop() == '?') {
        var result = word.join('')
        let output = result.split(' ')
       console.log(output)
        if (output.pop() == 'please?') {
            result = a
        } else { 
           // console.log(output)
        output.push('pencil please?')
       
        result = (output.join(' '))
        

    }
    } else {
    result =a
}return result
}
console.log(askPolitely('May I borrow your pencil?'))