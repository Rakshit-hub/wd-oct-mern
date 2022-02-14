import React from 'react'

class NoteForm extends React.Component{
    constructor(){
        super()
        this.state={
            title:"",
            description:""
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title:this.state.title,
            description:this.state.description
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
                        Title
                        <input type='text' value={this.state.title} onChange={this.handleChange} name='title'/>
                    </label>
                    <br/>
                    <label>
                        Description
                        <input type='text' value={this.state.description} onChange={this.handleChange} name='description'/>
                    </label>
                    <br/>
                    <input type='Submit'/>
                </form>
            </div>
        )
    }
}
export default NoteForm