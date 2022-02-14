import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

class TicketShow extends React.Component{
    constructor(){
        super()
        this.state={
            ticket:{},
            customer:{},
            department:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
            axios.get(`/tickets/${id}`,{
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then((response)=>{
                const ticket=response.data
                console.log(response.data)
                
                this.setState({ticket})
                axios.get(`customers/${ticket.customer}`,{
                    headers:{
                        'x-auth':localStorage.getItem('authToken')
                    }
                })
                .then((response)=>{
                    const customer=response.data
                    console.log(response.data)
                    
                    this.setState({customer})
                })
                axios.get(`departments/${ticket.department}`,{
                    headers:{
                        'x-auth':localStorage.getItem('authToken')
                    }
                })
                .then((response)=>{
                    const department=response.data
                    console.log(response.data)
                    
                    this.setState({department})
                })
            })
            .catch((err)=>{
                alert(err)
            })
            
            
            
    }
    render(){
        return(
            <div>
                <h2>Ticket Show</h2>
                 <p>Customer----{this.state.customer.name}</p>
                 <p>Department----{this.state.department.name}</p>
                 <p>Code----{this.state.ticket.code}</p>
                 <p>Message----{this.state.ticket.message}</p>
                 <p>Priority----{this.state.ticket.priority }</p>
                 <Link to='/tickets'>Back</Link>
            </div>
        )
    }
}
export default TicketShow