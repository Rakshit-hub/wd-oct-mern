import React from 'react'
import EmployeeForm from './employeeForm'
import axios from '../../config/axios'

class EmployeeEdit extends React.Component{
    constructor(){
        super()
        this.state={
            employee:{}
        }
    }
    componentDidMount(){
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
    handleSubmit=(formData)=>{
        axios.put(`/employees/${this.props.match.params.id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const employee=response.data
            this.props.history.push(`/employees/${employee._id}`)
        })
    }
    render(){
        return(
            <div>
                <h2>Edit Emoloyee</h2>
                {
                    Object.keys(this.state.employee).length!==0 && <EmployeeForm {...this.state.employee} handleSubmit={this.handleSubmit}/>
                }
            </div>
        )
    }
}
export default EmployeeEdit