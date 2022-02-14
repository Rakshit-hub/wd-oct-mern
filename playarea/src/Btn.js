import React from 'react'
import {connect} from 'react-redux'
import {increment} from './action/count'


function Btn(props){
    return(
        <div>
            <button onClick={()=>{
                props.dispatch(increment())
            }}>Up</button>
        </div>
    )
}

export default connect()(Btn)