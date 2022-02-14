import React from 'react'
import axios from '../../config/axios'
class EmployeeForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name ? props.name:'',
            email:props.email ? props.email:"",
            mobile:props.mobile?props.mobile:'',
            departments:[],
            department:props.department?props.department:""

        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    componentDidMount(){
        axios.get(`/departments`,{
            headers:{
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const departments=response.data
            this.setState({departments})
        })
        .catch((err)=>{
            alert(err)
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            mobile:this.state.mobile,
            email:this.state.email,
            department:this.state.department
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input type="text" value={this.state.name} onChange={this.handleChange} name='name'/>
                        
                    </label>
                    <br/>
                    <label>
                        Email
                        <input type='text'value={this.state.email} onChange={this.handleChange} name='email'/>
                    </label>
                    <br/>
                    <label>
                        Mobile
                        <input type='text' value={this.state.mobile} onChange={this.handleChange} name='mobile'/>
                    </label>
                    <br/>
                    <label>
                        Department
                        <select name="department" value={this.state.department} onChange={this.handleChange}>
                        <option value=''>select</option>
                            {
                                this.state.departments.map((department)=>{
                                    return(
                                    <option key={department._id} value={department._id}>{department.name}</option>
                                    )
                                })
                            }

                        </select>
                        </label><br/>
                    <input type='Submit'/>
                </form>
            </div>
        )
    }
}
export default EmployeeForm