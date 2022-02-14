import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

class EmployeeList extends React.Component{
    constructor(){
        super()
        this.state={
            employees:[]
        }
    }
    componentDidMount(){
        axios.get(`/employees`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
            
            
        })
        .then((response)=>{
            const employees=response.data
            this.setState({employees})
        })
        .catch((err)=>{
            alert(err)
        }) 
        console.log(localStorage)
    }
    handleRemove=(id)=>{
        
        axios.delete(`/employees/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            this.setState((prevState)=>{
                return{
                    employees:prevState.employees.filter((employee)=>{
                        return employee._id!==response.data._id
                    })
                }
            })
        })
    }
    render(){
        return(
            <div>
                <h2>Employee List</h2>
               <ul>
               {this.state.employees.map((employee)=>{
                    return <li key={employee._id}>{employee.name} <Link to={`/employees/${employee._id}`}>Show</Link>   <button onClick={()=>{
                        this.handleRemove(employee._id)
                    }}>Remove</button></li>
                })}
                <Link to="/employees/new">Add Employee</Link>
               </ul>
            </div>
        )
    }
}
export default EmployeeList
