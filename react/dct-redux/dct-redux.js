const configureStore=()=>{
    const store={
        state:{
            count:0
        },
        getState:function(){
            return this.state
        },
        dispatch:function(action){
            switch(action.type){
                case 'INCREMENT':{
                 this.state.count++
                 break
                }
                case 'DECREMENT':{
                    this.state.count--
                    break
                }
                case 'INCREMENT_BY':{
                    this.state.count += action.payload
                    break
                }
                default:{
                    this.state
                }
            }
        }
    }
    return store
}
const store=configureStore()
console.log(store)//{state:{count:0}}

//console.log(store.state)
//via a method
console.log(store.getState())

//count--> increment
//increment||decrement||reset||incrementBY

//action generator//action creator

const increment=()=>{
    return{type:'INCREMENT'}
}
const decrement=()=>{
    return{type:'DECREMENT'}
}
const incrementBy=(v)=>{
    return{type:'INCREMENT_BY',payload:v}
}

store.dispatch(increment())
console.log(store)
store.dispatch(increment())
console.log(store)
store.dispatch(incrementBy(5))
console.log(store)
store.dispatch(decrement())
console.log(store.getState())