import React from 'react'
import {connect} from 'react-redux'

function UserShow(props){
    return(
        <div>
            {
                props.user && (
                    
                        <div>
                            {props.user.name}
                        </div>
                )
            }
        </div>
    )
}



const mapStateToProps=(state,props)=>{
return{
    user:state.user.find(user=>user.id===parseInt(props.match.params.id))
}
}
export default connect(mapStateToProps)(UserShow)