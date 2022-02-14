import React from 'react'
import NoteForm from '../notes/noteForm'
import axios from 'axios'


class NoteNew extends React.Component{
    handleSubmit=(formData)=>{
        axios.post('http://localhost:3015/notes',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }else{
                this.props.history.push(`/notes`)
            }
        })
    }
    render(){
        return(
           <div>
                <h2>Adding New Note</h2>
            <NoteForm handleSubmit={this.handleSubmit}/>
           </div>
        )
    }
}
export default NoteNew