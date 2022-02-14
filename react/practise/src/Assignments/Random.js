import React from 'react'
import {generate,clear} from '../action/random'
import { connect } from 'react-redux'

function Random(props){
    const number=Math.round(Math.random()*100)
    return(
        <div>
            <h1>{props.random}</h1>
            <button onClick={()=>{
                props.dispatch(generate(number))
                
            }}>Generate</button>

            <button onClick={()=>{
                props.dispatch(clear())
            }}>Clear</button>

        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        random:state.random
    }
}
export default connect(mapStateToProps)(Random)