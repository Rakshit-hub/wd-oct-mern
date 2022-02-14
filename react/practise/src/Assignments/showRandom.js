import React from 'react'
import {connect} from 'react-redux'
import { addRandom,clearRandom } from '../action/number'



function ShowRandom(props){
    console.log(props)
    const number=Math.round(Math.random()*100)
    const handleClick=()=>{
        props.dispatch(addRandom(number))
        
    }
    const handleCick=()=>{
        props.dispatch(clearRandom())
    }
    return(
        <div>
            <h1>{props.numbers[props.numbers.length-1]}</h1>
            <button onClick={handleClick}>show</button>
            <button onClick={handleCick}>Clear</button>
            {props.numbers.map((num,i)=>{
            return<li key={i}>{num}</li>
            })}
           
        </div>
    )
}
const mapStateTOProps=(state)=>{
    return{
        numbers:state.numbers
    }
}
export default connect(mapStateTOProps) (ShowRandom)