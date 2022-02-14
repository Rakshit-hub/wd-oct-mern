import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../../config/axios'
import TicketForm from './ticketForm'

class TicketNew extends React.Component{
    handleSubmit=(ticketData)=>{
        console.log(ticketData)
        axios.post('/tickets',ticketData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }else{
                this.props.history.push('/tickets')
            }
        })
    }
    render(){
        return(
            <div>
                <h2>Adding a new Ticket</h2>
                <TicketForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default TicketNew