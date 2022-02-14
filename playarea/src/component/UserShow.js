import React from 'react'
import axios from 'axios'
class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            users:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get("https://jsonplaceholder.typicode.com/users/${id}")
        .then((response)=>{
            const users=response.data
            this.setState({users})
        })
    }
    render(){
        return(
            <div>
        <h2>Show User-{this.props.match.params.id}</h2>
        <p>{this.state.users.name}-{this.state.users.email}</p>
        </div>
        )
    }
}
export default UserShow