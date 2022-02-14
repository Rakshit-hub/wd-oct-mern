import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'
 class CustomerList extends React.Component{
     constructor(){
         super()
         this.state={
             customers:[]
         }
     }
     componentDidMount(){
        axios.get('/customers',{
            headers:{
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customers=response.data
            this.setState({customers})
        }) 
     }
     handleRemove=(id)=>{
        axios.delete(`/customers/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            this.setState((prevState)=>{
                return{
                    customers:prevState.customers.filter((customer)=>{
                        return customer._id!=response.data._id
                    })
                }
            })
        })
     }
     render(){
         return(
             <div>
                    <h1>Listing Customers-{this.state.customers.length}</h1>    
                    <ul>
                        {this.state.customers.map((customer)=>{
                        return <li key={customer._id}><Link to={`/customers/${customer._id}`}>{customer.name}</Link>-{customer.email}-{customer.mobile}<Link to={`/customers/${customer._id}`}>Show</Link><button onClick={()=>{
                            this.handleRemove(customer._id)
                        }}>Remove</button></li>
                        })}
                    </ul>
                    <Link to="/customers/new">Add customer</Link>
             </div>
         )
     }
 }
 export default CustomerList