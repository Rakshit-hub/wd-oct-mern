const count={
    value:0,
    up:function(){
        this.value=this.value+1
        return this.value
    },
    down:function(){
        this.value=this.value-1
        return this.value
    },
    reset:function(){
        this.value=0
        return this.value
    },
    incrementBy:function(n){
        this.value=this.value+n
        return this.value
    },
    decrementBy:function(n){
        this.value=this.value-n
        return this.value
    }

        
    }
            count.up()
         console.log(count.value)

        count.up()
       console.log(count.value)
      
       count.incrementBy(4)
       console.log(count.value)
       
       count.reset()
       console.log(count.value)

       count.decrementBy(4)
       console.log(count.value)

       
       
