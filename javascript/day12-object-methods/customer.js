 const customer={
     accNo:'SBI123',
     name:'roopesh',
     balance:750,
     currentBalance:function(){
         return this.balance
     },
     transaction:function(amount,code){
         if (code==1){
             this.balance= amount+this.balance
             return this.balance
         }else if(code==0){
             if(amount>this.balance){
                 return "the balance is insufficient"
             }else{
                 this.balance=this.balance-amount
             }
             
         }else{ return 'invalid code'} 
     }

 }
 console.log(customer.currentBalance())
 console.log(customer.transaction(500,1))
 console.log(customer.currentBalance(750,0)) 
 console.log(customer.currentBalance(750,1))