import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../../config/axios'

class TicketList extends React.Component{
    constructor(){
        super()
        this.state={
            tickets:[]
        }
    }
    handleRemove=(id)=>{
        axios.delete(`/tickets/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            this.setState((prevState)=>{
               return{
                tickets:prevState.tickets.filter((ticket)=>{
                    return ticket._id!==response.data._id
                })
               }
            })
        })
    }
    componentDidMount(){
        axios.get('/tickets',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const tickets=response.data
            this.setState({tickets})
        })
        .catch((err)=>{
            alert(err)
        })
    }
    render(){
        return(
            <div>
    <h2>Listing Tickets-{this.state.tickets.length}</h2>
               <ul>
               {
                    this.state.tickets.map((ticket)=>{
                    return <li key={ticket._id}>{ticket.code}<button><Link to={`/tickets/${ticket._id}`}>Show</Link></button><button onClick={()=>{
                        this.handleRemove(ticket._id)
                    }}>Remove</button></li>
                    })
                }
                <Link to='/tickets/new'>Add ticket</Link>
               </ul>
            </div>
        )
    }
}
export default TicketList