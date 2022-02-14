const n1=[10,20]
const n2=[].concat(n1)//n1.slice(0)

console.log(n1,n2)
n1.push(30)
console.log(n1,n2)


//using for loop
const n3=[10,20]
const n4=[]
for(let i=0;i<n3.length;i++){
    n4.push(n3[i])
}
console.log(n4)
n4.push(30)
console.log(n3,n4 )