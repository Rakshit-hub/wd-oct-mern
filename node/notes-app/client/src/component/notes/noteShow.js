import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class NoteShow extends React.Component{
    constructor(){
        super()
        this.state={
            notes:[]
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://localhost:3015/notes/${id}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const notes=response.data
            this.setState({notes})
        })
        .catch((err)=>{
            alert(err)
        })
    }
    render(){
        return(
            <div>
                <h2>ShowPage</h2>
                <h3>{this.state.notes.title}----{this.state.notes.description}</h3>
                <Link to='/notes'>Back</Link>
            </div>
        )
    }
}
export default NoteShow