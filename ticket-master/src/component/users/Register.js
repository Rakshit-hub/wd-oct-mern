import React from 'react'
import axios from '../../config/axios'

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:''
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
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
            
        }
        axios.post('/users/register',formData)
        .then((response)=>{
            console.log(response)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }else{
                this.props.history.push('/account/login')
            }
        })
        .catch((err)=>{
            alert(err)
        })
    }
    render(){
        return(
            <div>
                <h1>Register With Us</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username
                        <input type="text" value={this.state.username} onChange={this.handleChange} name='username'/>

                    </label>
                    <br/>

                    

                    <label>
                        email
                        <input type="text" value={this.state.email} onChange={this.handleChange} name='email'/>

                    </label>
                    <br/>
                    <label>
                        password
                        <input type="password" value={this.state.password} onChange={this.handleChange} name='password'/>

                    </label>
                    <input type ="submit"/>
                    
                </form>

                </div>
        )
    }
}
export default Register