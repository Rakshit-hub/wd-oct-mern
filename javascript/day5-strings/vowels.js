function findVowls(str) {
    const vowels = 'aeiou'
    let count =0
    for(let i =0; i<str.length; i++){
        if(vowels.includes(str.charAt(i))){
            count++ //vowels.includes(str[i])
        }
    }
    return count
}

console.log(findVowels('javascript'))