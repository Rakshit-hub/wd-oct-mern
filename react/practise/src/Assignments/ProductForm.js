import React from 'react'
import { addProduct } from '../action/product'
import { connect } from 'react-redux'

 
class ProductForm extends React.Component{
    constructor(){
        super()
        this.state={
            
            name:'',
            price:'',
            description:'',
            available:true
        }
        
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick=(e)=>{
        this.setState({
            [e.target.name]:e.target.checked
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:Number(new Date()),
            name:this.state.name,
            price:this.state.price,
            description:this.state.description,
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
                        <input type='text' value={this.state.name} name='name' onChange={this.handleChange}/>
                    </label><br/>
                    <label>
                        Price 
                        <input type='text' name='price' value={this.state.price} onChange={this.handleChange}/> 
                    </label><br/>
                    <label>
                        Description 
                        <input type='text' value={this.state.description} name='description' onChange={this.handleChange}/>
                    </label><br/>
                    <label>
                        Available 
                        <input type='checkbox' value={this.state.available} name='available' onChange={this.handleClick}/> 
                    </label>
                    <label>
                        <input type='submit' value='submit'/>
                    </label>
                </form>
            </div>
        )
    }
}
export default connect() (ProductForm)