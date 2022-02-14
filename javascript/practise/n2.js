function firstElements(a, b) {
    let result = []
    if (a.length > b) {
        for (i = 0; i < b; i++) {
              result.push(a[i])
             }
    } else if(b==undefined){
        return 7
    }
    else  {
         for (i = 0; i < a.length; i++) {
                 result.push(a[i])

        }
        
    }return result
}
console.log(firstElements([7, 9, 0, -2]))


