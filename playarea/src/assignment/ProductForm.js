import React from 'react'
import {addProduct} from '../action/products'
import {connect} from 'react-redux'

class ProductForm extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            description:'',
            price:'',
            available:false
        }
       
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleCheckBox=(e)=>{
        this.setState({
            [e.target.value]:e.target.checked
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:new Date(),
            name:this.state.name,
            description:this.state.description,
            price:this.state.price,
            available:this.state.available
        }
        console.log(formData)
        this.props.dispatch(addProduct(formData))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input type='text' name='name' onChange={this.handleChange} value={this.state.name}/>
                    </label><br/>
                    <label>
                        Price
                        <input type='text' name='price' onChange={this.handleChange} value={this.state.price}/>
                    </label><br/>
                    <label>
                        Description 
                        <input type='text' name='description' onChange={this.handleChange} value={this.state.description}/>
                    </label><br/>
                    <label>
                        Available 
                        <input type='checkbox' name='available' onChange={this.handleCheckBox} value={this.state.available}/>
                    </label>
                   
                    <input type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}
export default connect() (ProductForm)