import React from 'react'


class CategoryForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name?props.name:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        this.props.handleSubmit(formData)
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/><br/>
                        
                    </label>
                    <input type='Submit'/>
                </form>
            </div>
        )
    }
}
export default CategoryForm