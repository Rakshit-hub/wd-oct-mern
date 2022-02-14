import React from 'react'
import {connect} from 'react-redux'
import Home from './component/Home'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import Increment from './Assignments/increment'
import Random from './Assignments/Random'
import ShowRandom from './Assignments/showRandom'
import ProductList from './Assignments/ProductList'
import usersList from './Assignments/usersList'
import UserShow from './Assignments/UserShow'

function App(props){
    
    return(
        <div>
            
            <BrowserRouter>
            <ul>
                
                <Link to='/home'>Home</Link><br/>
                <Link to='/increment'>Up</Link><br/>
                <Link to='/random'>Random</Link><br/>
                <Link to='/show-random'>ShowRandom</Link><br/>
                <Link to='/products'>Product</Link><br/>
                <Link to='/users'>Users</Link>
               
                
                
            </ul>
            


            <Route Path='/home' component={Home} exact={true}/>
            <Route path='/increment' component={Increment}/>
            <Route path='/random' component={Random}/>
            <Route path='/show-random' component={ShowRandom}/>
            <Route path='/products' component={ProductList}/>
            <Route path='/users' component={usersList} exact={true}/>
            <Route path='/users/:id' component={UserShow}/>
            </BrowserRouter>
        </div>
    )
}
export default connect() (App)