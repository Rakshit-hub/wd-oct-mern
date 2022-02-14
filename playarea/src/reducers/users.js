

const  userinitialState=[]
const userReducer=(state=userinitialState,action)=>{
    switch(action.type){
        case 'SET_USERS':{
            return [...action.payload]
        }
        default:{
            return {...state}
        }
    }

}
export default userReducer