import React from 'react'
import { connect } from 'react-redux'

function UserShow(props){
    return(
        <div>
            {
                props.user&&(
                    
                        <div>
                            {props.user.name}<br/>
                            {props.user.email}
                        </div>
                )
            }
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    return{
        user:state.users.find(user=>user.id==props.match.params.id)
    }
}

export default connect(mapStateToProps)(UserShow)