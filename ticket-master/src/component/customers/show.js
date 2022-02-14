import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

class CustomerShow extends React.Component{
    constructor(){
        super()
        this.state={
            customer:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/customers/${id}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response)
            const customer=response.data
            this.setState({ customer })
        })
        .catch((err)=>{
            alert(err)
        })
    }
    render(){
        return(
            <div>
                 <h1>Customer Show</h1>
        <p>{this.state.customer.name}---{this.state.customer.mobile}---{this.state.customer.email}</p>
            <Link to ={`/customers/edit/${this.props.match.params.id}`}>Edit|</Link>
                 <Link to="/customer">back</Link>
            </div>
        )
    }
}
export default CustomerShow