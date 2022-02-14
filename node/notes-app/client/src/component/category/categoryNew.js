import React from 'react'
import CategoryForm from './categoryForm'
import axios from 'axios'

class CategoryNew extends React.Component{
    handleSubmit=(formData)=>{
        axios.post(`http://localhost:3015/categories`,formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }else{
                this.props.history.push('/categories')
            }
        })
    }
    render(){
        return(
            <div>
                <h2>Adding New Category</h2>
                <CategoryForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default CategoryNew