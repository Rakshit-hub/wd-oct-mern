import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

class TicketForm extends React.Component{
    constructor(){
        super()
        this.state={
            code:'',
            customers:[],
            customer:"",
            departments:[],
            department:"",
            employees:[],
            employee:"",
            message:'',
            priorities:[`High`,`Medium`,`Low`],
            priority:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const ticketData = {
            
            code : this.state.code,
            customer : this.state.customer ,
            department : this.state.department, 
            employee : this.state.employee,
            message : this.state.message,
            priority : this.state.priority
         }
 
         this.props.handleSubmit(ticketData)
    }
    componentDidMount(){
        axios.get(`/customers`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        
        .then((response)=>{
            const customers=response.data
            this.setState({customers})
        })
        axios.get(`/departments`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const departments=response.data
            this.setState({departments})
        })
        axios.get(`/employees`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const employees=response.data
            this.setState({employees})
        })
    }
    handleChange=(e)=>{ 
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleCustomerChange=(e)=>{
        const customer=e.target.value
        this.setState({customer})
    }
    handleDepartmentChange=(e)=>{
        const department=e.target.value
        this.setState({department})
    }
    handleEmployeeChange=(e)=>{
        const employee=e.target.value
        this.setState({employee})
    }
    handlePriorityChange=(e)=>{
        const priority=e.target.value
        this.setState({priority})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Code
                        <input type="text" value={this.state.code} onChange={this.handleChange} name='code'/>
                    </label><br/>
                    <label>
                        Customers
                        <select name='customer' value={this.state.customer} onChange={this.handleCustomerChange}>
                            <option value=''>select</option>
                            {
                                this.state.customers.map((customer)=>{
                                return<option key={customer._id} value={customer._id}>{customer.name}</option>
                                })
                            }
                        </select>
                    </label><br/>
                    <label>
                        Department
                        <select name='department' value={this.state.department} onChange={this.handleDepartmentChange}>
                            <option value=''>select</option>
                            {
                                this.state.departments.map((department)=>{
                                return<option key={department._id} value={department._id}>{department.name}</option>
                                })
                            }

                        </select>
                    </label><br/>

                    <label>
                        Employee
                        <select name='employee' value={this.state.employee} onChange={this.handleEmployeeChange}>
                            <option value=''>select</option>
                            {
                                this.state.employees.map((employee)=>{
                                return<option key={employee._id} value={employee._id}>{employee.name}</option>
                                })
                            }
                        </select>
                    </label><br/>
                    <label>
                        Message
                        <input type='text' value={this.state.message} onChange={this.handleChange} name='message' />
                    </label><br/>
                    <label>
                        Priority:
                        {
                            this.state.priorities.map((priority)=>{
                                return(
                                    <label>
                                        <input type="radio" name="radio" key={priority._id} value={priority} onChange={this.handlePriorityChange}/>
                                        {priority}
                                    </label>
                                )
                            })
                        }
                    </label><br/>
                            <input type='Submit'/>
                </form>
            </div>
        )
    }
}
export default TicketForm