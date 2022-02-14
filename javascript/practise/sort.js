//rankings([10, 5, 20]); // [2, 3, 1]

//
//rankings([6, 8, 1, 12, 4, 3, 9]); // [4, 3, 7, 1, 5, 6, 2]

//rankings([100]); // [1]

//rankings([4, 2, 3, 1]); // [1, 3, 2, 4]

function rankings(a){
    a.sort()
    var result=[]
    for(let i=1;i<a.length;i++){
        result.push(i)
    }return result
}
console.log(rankings([6,8,1,12,4,3,9]))