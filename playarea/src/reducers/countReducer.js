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
        case 'INCREMENT_BY':{
            return state+action.payload
        }
        case 'RANDOM':{
            return state=Math.round(Math.random()*100)
        }
        case 'CLEAR':{
            return state=''
        }

        default:{
            return state
        }
    }
}
export default countReducer