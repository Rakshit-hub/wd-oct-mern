//Prototype inheritance

//every object has its prototype
//date objec inherits from date prototpe

function Person(fname, sname) {
    this.firstname = fname
    this.lastname = sname
    // return `Hi ${}`
}

Person.prototype.fullname = function () {
    return `Hi ${this.firstname} ${this.lastname}`
}

const p1 = new Person("Rakshit", "Yalameli")

console.log(p1.fullname())


// Prototypal Inheritamce

class Customer {
    constructor(fname, lname) {
        this.firstname = fname
        this.lastname = lname
    }
    getFullname() {
        return `Hi ${this.firstname} ${this.lastname}`
    }
}

// const c1 = new Customer("ghjkl", "ghjkl")
// console.log(c1.getFullname())

class SuperMan extends Customer{
    constructor(fname, lname){
        super(fname, lname)
        this.isSuperman=true
    }
}

const S1=new SuperMan("hjk","hjk")
console.log(S1.getFullname())

