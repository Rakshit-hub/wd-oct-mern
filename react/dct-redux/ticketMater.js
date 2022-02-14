const {combineReducers,createStore}=require('redux')

const customersReducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD_CUSTOMER':{
            return [...state ,action.payload]
        }
        case 'REMOVE_CUSTOMER':{
            return state.filter(customer=>customer.id!=action.payload)
        }
        default:{
            return[...state]
        }
    }
   
} 

const configureStore=()=>{
  const store=createStore(combineReducers({
      customers:customersReducer
  }))
  return store
}
const store =configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())

const addCustomer=(customer)=>{
    return {type:'ADD_CUSTOMER',payload:customer}
}
const removeCustomer=(id)=>{
    return {type:'REMOVE_CUSTOMER',payload:id}
}
store.dispatch(addCustomer({id:1,name:'Rakshit'}))
store.dispatch(addCustomer({id:2,name:'Rahul'}))
//List customers
console.log(store.getState().customers)
//show cutomer
console.log(store.getState().customers.find(customer=>customer.id==2))
//remove customer
store.dispatch(removeCustomer(2))
//update customer