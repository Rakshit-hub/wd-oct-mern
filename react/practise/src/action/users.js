import axios from 'axios'
export const setUsers=(n)=>{
    return {type:'SET_USERS',payload:n}
}

export const startSetUser=()=>{
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users=response.data
            dispatch(setUsers(users))
        })
        axios.get('https://youtu.be/fmsq1uKOa08',{
            headers:{
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}