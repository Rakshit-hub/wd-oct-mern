import React from 'react'
import {connect} from 'react-redux'
import {randoms} from '../action/random'


function ShowRandom(props){
  const  handleClick=()=>{
        const number=Math.round(Math.random()*100)
        props.dispatch(randoms(number))
    }
return(
    <div>
        <h2>{props.number[props.number.length-1]}</h2>
        <button onClick={handleClick}>Generate</button>
        <ul>
            {props.number.map((num)=>{
            return <li>{num}</li>
            })}
        </ul>
    </div>
)
}
const mapStateToProps=(state)=>{
    return({
        number:state.number
    })
}
export default connect(mapStateToProps)(ShowRandom)