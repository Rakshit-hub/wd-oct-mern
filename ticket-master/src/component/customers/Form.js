import React from 'react'
class CustomerForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name ? props.name:"",
            email:props.email ? props.email:"",
            mobile:props.mobile ? props.mobile:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            mobile:this.state.mobile,
            email:this.state.email
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        name
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                    </label>
                    <br/>

                    <label>
                        Email
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email"/>
                    </label>
                    <br/>

                    <label>
                        mobile
                        <input type="text" value={this.state.mobile} onChange={this.handleChange} name="mobile"/>
                    </label>
                    <br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}
export default CustomerForm