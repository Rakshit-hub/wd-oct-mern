import React from 'react'
import EmployeeForm from './employeeForm'
import axios from '../../config/axios'

class EmployeeNew extends React.Component{
    handleSubmit=(formData)=>{
        axios.post(`/employees`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.hasOwnProperty("errors")){
                alert(response.data.message)
            }else{
                this.props.history.push(`/employees`)
            }
        })
    }

    render(){
        return(
            <div>
                <h2>Adding New Employee</h2>
                <EmployeeForm handleSubmit={this.handleSubmit}/>

            </div>
        )
    }
}
export default EmployeeNew 