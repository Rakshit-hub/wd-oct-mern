import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startGetUsers} from '../action/user'

function UserList(props){
    if(props.user.length==0){
        props.dispatch(startGetUsers())
    }
    return(
        <div>
        <h2>Listing Users-{props.user.length}</h2>
        {props.user.map(user=>{
        return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
        })}
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    return{
       user:state.users
    }
}
export default connect(mapStateToProps)(UserList)


