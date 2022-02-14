import React from 'react'
import {connect} from 'react-redux'
import {removeProduct,markavailable} from '../action/products'
import ProductForm from './ProductForm'

function ProductList(props){
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm('Are You Sure')
        if(confirmRemove){
            props.dispatch(removeProduct(id))
        }
    }
    const handleClick=(id)=>{
        props.dispatch(markavailable(id))
    }
    return(
        <div>

<h2>Listing Products-{props.products.length}</h2>
        <ul>
            {props.products.map(product=>{
            return <li>{product.name}--{product.price}---{product.description}--{product.available?'available':'not available'}
            <input type='checkbox' checked={product.available} onClick={()=>{
                handleClick(product.id)
            }}/>
            
            <button onClick={()=>{
                handleRemove(product.id)
            }}>remove</button></li>
            })}
        </ul>
        <ProductForm/>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        products:state.products
    }
}
export default connect(mapStateToProps)(ProductList) 