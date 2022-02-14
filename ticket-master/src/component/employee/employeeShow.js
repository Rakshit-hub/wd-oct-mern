import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

class EmployeeShow extends React.Component{
    constructor(){
        super()
        this.state={
            employee:{}
        }
    }
    componentDidMount(){
        console.log(this.props)
        const id=this.props.match.params.id
        axios.get(`/employees/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const employee=response.data
            this.setState({employee})
        })
    }
    render(){
        return(
            <div>
                <h2>Employee Show</h2>
        <p>{this.state.employee.name}-----{this.state.employee.email}---{this.state.employee.mobile}</p>
                <Link to="/employees">Back</Link>
                <br/>
                <Link to={`/employees/edit/${this.props.match.params.id}`}>Edit</Link>
            </div>
        )
    }
}
export default EmployeeShow