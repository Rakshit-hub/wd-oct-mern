import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class CategoryList extends React.Component{
    constructor(){
        super()
        this.state={
            categories:[]
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:3015/categories`)
        .then((response)=>{
            const categories=response.data
            this.setState({categories})
        })
    }
    handleRemove=(id)=>{
        axios.delete(`http://localhost:3015/categories/${id}`)
        .then((response)=>{
            this.setState((prevState)=>{
                return{
                    categories:prevState.categories.filter((category)=>{
                        return category._id!=response.data._id
                    })
                }
            })
        })
    }
    render(){
        return(
            <div>
                <h2>Category List</h2>
                <ul>
                {this.state.categories.map((category)=>{
                return <li key={category._id}>{category.name}<button onClick={()=>{
                    this.handleRemove(category._id)
                }}>Remove</button><button><Link to="/categories/edit/:id">Edit</Link ></button></li> 
                })}
                </ul>
                <Link to="/categories/new">Add Category</Link>
            </div>
        )
    }
}
export default CategoryList