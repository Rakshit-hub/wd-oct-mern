class Customer{
    constructor(data){
        this.name=data.name
        this.accNo=data.accNo
        this.balance=data.balance
    }
    getBalance(){
        return `your balance as of today is ${this.balance}`
    }
    transaction(amount,code){
        if(code==1){
            this.balance=this.balance+amount
            return this.getBalance()
        }else{
            if(amount>this.balance){
                return 'insufficent balance'
            }else{
                this.balance=this.balance-amount
                return this.getBalance()
            }
        }
    }
}
const c1=new Customer({accNo:'sbi123',balance:500,name:'rakshit'})
console.log(c1.transaction(500,1))