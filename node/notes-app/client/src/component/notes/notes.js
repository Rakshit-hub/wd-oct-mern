import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


class NoteList extends React.Component{
    constructor(){
        super()
        this.state={
            notes:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3015/notes')
        .then((response)=>{
            const notes=response.data
            this.setState({notes})
        })
    }
    handleRemove=(id)=>{
        axios.delete(`http://localhost:3015/notes/${id}`)
        .then((response)=>{
            this.setState((prevState)=>{
                return{
                    notes:prevState.notes.filter((note)=>{
                        return note._id!=response.data._id
                    })
                }
            })
        })
    }
    render(){
        return(
                <div>
                    <h2>Listing Notes</h2>
                    <ul>
                    {this.state.notes.map((note)=>{
                    return <li key={note._id}><Link to={`/notes/${note._id}`}>{note.title}</Link><button onClick={()=>{
                        this.handleRemove(note._id)
                    }}>Remove</button></li>
                    })}
                    <Link to="/notes/new">Add Note</Link>
                    </ul>
                   
                </div>
        )
    }
}
export default NoteList