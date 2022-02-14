import React from 'react'
import axios from '../../config/axios'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
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
            email:this.state.email,
            password:this.state.password
        }
        axios.post('m/users/login',formData)
    .then((response)=>{
        
        if(response.data.hasOwnProperty('error')){
            alert(response.data.error)
        }else{
            const token=response.data.token
            localStorage.setItem('authToken',token)
            this.props.history.push("/")
            window.location.reload()
        }
    })
    }
    render(){
        return(
            <div>
                <h1>Login With Us</h1>
                <form onSubmit={this.handleSubmit}>
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
export default Login