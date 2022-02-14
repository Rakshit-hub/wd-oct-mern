import React from 'react'
import {connect} from 'react-redux'
import ProductForm from './ProductForm'
import { removeProduct } from '../action/product'


function ProductList(props){
    const handleClick=(id)=>{
        props.dispatch(removeProduct(id))
    }
    return(
        <div>
        <h2>ProductList-{props.product.length}</h2>
          {props.product.map((product)=>{
          return<li key={product.id}>{product.id}---{product.name}---{product.description}---{product.available?'avaiable':'not-available'}<button onClick={()=>{
              handleClick(product.id)
          }}>Remove</button></li>
          })}
          



          <ProductForm/>
          
        </div>

    )
}
const mapStateToProps=(state)=>{
    return{
        product:state.product
    }
}

export default connect(mapStateToProps)(ProductList)