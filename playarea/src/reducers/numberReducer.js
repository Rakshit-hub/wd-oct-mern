const numberReducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD_RANDOM':{
            return[...state,action.payload]
        }
        default:{
            return[...state]
        }
    }
}
export default numberReducer