import React from 'react'
import {connect} from 'react-redux'
const random=Math.round(Math.random())
console.log(random)
function Random(props){
    return(
        <div>
          <h1>{props.random}</h1>  
        </div>
    )
}
const mapStateToProps=(state)=>{
     
    return{
        random:state.random
    }
}
export default connect(mapStateToProps) (Random)