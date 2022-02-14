 //es5
 function add(n1,n2){
     if(typeof n1=='undefined'){
         n1=0
     }else{
         n1=n1
     }
     if(typeof n2 =='undefined'){
        n2=0
    }else{
        n2=n2
    }return n1+n2
 }
 console.log(add())//0
 console.log(add(10))
 console.log(add(100,200))

 //ternary operator
 //n1=typeof n1=='undefined'?0:n1
 //n2=typeof n2=='undefined'?0:n2 

 //es6
 function total(n1=0,n2=0){
     return n1+n2
 }
 console.log(total())
 console.log(total(10,20))