function player(name,country,runs){
    this.name=name
    this.country=country
    this.runs=runs
    this.details=function(){
        return this.name+" "+this.country
    }
    this.avg=function(){
        let total=0
        this.runs.forEach((run)=>{
            total +=run
        })
        return total/this.runs.length
    }
}

const p1=new player('sachin','India',[30,50,60])
const p2=new player('virat','India',[40,50,60])
const p3=new player('pointing','austrialia',[60,50,60])
const p4=new player('ABD','south Africa',[10])

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)

console.log(p1.details())
console.log(p2.details())
console.log(p3.details())
console.log(p4.details())

console.log(p1.avg())
console.log(p4.avg())