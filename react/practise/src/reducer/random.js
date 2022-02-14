const randomReducer=(state='',action)=>{
switch(action.type){
    case 'GENERATE':{
        return action.payload
    }
    case 'CLEAR':{
        return ''
    }
    default:{
        return state
    }
}
}
export default randomReducer