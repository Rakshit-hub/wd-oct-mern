import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startSetUser } from '../action/users'


function UsersList(props){
    if(props.users.length==0){
        props.dispatch(startSetUser())
    }
    return(
        <div>
            
            <h2>UsersList-{props.users.length}</h2>
            {props.users.map(user=>{
            return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
            })}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}
export default connect(mapStateToProps)(UsersList)
