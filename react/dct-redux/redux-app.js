 const {createStore,combineReducers}=require('redux')
const countReducer=(state=0,action)=>{
    switch(action.type){
        case 'INCREMENT':{
            return state+1
        }
        case 'DECREMENT':{
            return state-1
        }
        case 'RESET':{
            return state=0
        }
        case 'INCREMEBT_BY':{
            return state+ action.payload
        }
    }
    return state
}
const userReducer=(state={},action)=>{
    switch(action.type){
        case 'SET_USER':{
            return{...state, ...action.payload}
            //return Object.assign({},state,action.payload)
        }
        case 'REMOVE_USER':{
            return{}
        }
        default:{
            return{...state}
        }
    }
}

const configureStore=()=>{
    const store=createStore(combineReducers({
        count:countReducer,
        user:userReducer
    }))
    return store
}
const store=configureStore()

store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())

const increment=()=>{
    return {type:'INCREMENT'}
}

const decrement=()=>{
    return {type:'DECREMENT'}
}
const reset=()=>{
    return{type:'RESET'}
}
const incrementBy=(n)=>{
    return {type:'INCREMENT_BY',payload:n}
}
const setUser=(user)=>{
    return{type:'SET_USER',payload:user}
}

const removeUser=(user)=>{
    return{type:'REMOVE_USER'}
}

store.dispatch(increment())
// store.dispatch(incrementBy(5))
// store.dispatch(increment())

// store.dispatch(reset())
store.dispatch(setUser({id:1,name:'mahi'}))
store.dispatch(removeUser())