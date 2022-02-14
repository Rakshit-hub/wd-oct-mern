import React from 'react'
import axios from 'axios'
import CategoryForm from './categoryForm'

class CategoryEdit extends React.Component{
    constructor(){
        super()
        this.state={
            categories:{}
        }

        
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://localhost:3015/categories/${id}`)
        .then((response)=>{
            const categories=response.data
            this.setState({categories})
        })
    }
    handleSubmit=(formData)=>{
        const id=this.props.match.params.id
        axios.put(`http://localhost:3015/categories/${id}`,formData)
        .then((response)=>{
            //const categories=response.data
            this.props.history.push('/categories')
        })
    }
    render(){
        return(
            <div>
                <h2>Edit Category</h2>
                {
                    Object.keys(this.state.categories).length !==0 && <CategoryForm
                    {...this.state.categories} handleSubmit={this.handleSubmit}/>
                }
            </div>
        )

    }
}
export default CategoryEdit