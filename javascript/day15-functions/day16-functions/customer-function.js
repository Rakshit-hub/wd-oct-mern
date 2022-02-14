function Customer(name,accNo,balance){
    this.name=name
    this.accNo=accNo
    this.balance=balance
    this.getBalance=function(){
        return this.balance
    }
    this.transaction=function(amt,code){
        if(code==1){
            let result=this.balance+amt
            return result
        }else if(code==0){
            if(amt>this.balance){
                return 'insuffient balance'
            }else{
                result=this.balance-amt
                return result
            }
        }

    }
}
const c1=new Customer('m','sbi123',500)
console.log(c1.transaction(500,1))
console.log(c1.transaction(250,0))
console.log(c1.transaction(1000,0))