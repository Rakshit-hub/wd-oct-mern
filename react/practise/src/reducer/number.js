const numbersReducer=(state=[],action)=>{
switch(action.type){
    case 'ADD_RANDOM':{
        return [...state,action.payload]
    }
    case 'CLEAR_RANDOM':{
        return []
    }
    default:{
        return [...state]
    }
}
}
export default numbersReducer