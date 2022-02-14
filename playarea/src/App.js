import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import {connect} from 'react-redux'
import configureStore from './component/store/configureStore'
import {increment, decrement,reset,random,clear} from './action/count'
import Display from './Display'
import Btn from './Btn'
import Random from './Random'
import ShowRandom from './assignment/showRandom'

import UsersList from './component/UserList'
import UserShow from './component/UserShow'
import showTask from './assignment/showTask'
import ProductList from './assignment/ProductsList'
import UserList from './assignment/userList'
import userShow from './assignment/userShow'



 function App (props){
     console.log(props)
     
    return(
        <BrowserRouter>
             <div>
                 <ShowRandom/>
                 
                 <h2>Playarea</h2>
                  <h3>{props.count}</h3>
                 <button onClick={()=>{
                     props.dispatch(increment())
                 }}>up</button>

                 {/* <button onClick={()=>{
                     props.dispatch(decrement())
                 }}>Down</button>

                 <button onClick={()=>{
                     props.dispatch(reset())
                 }}>Reset</button> */}

                 <button onClick={()=>{
                     props.dispatch(random())
                 }}>Generte</button>
                 <button onClick={()=>{
                     props.dispatch(clear())
                 }}>clear</button>
                 {/* <Display/>
                 <Btn/> */}
                 {/* <Random/> */}
                 

                 
                 <Link to="/">Home</Link>
                 <Link t0='/show-random-number'>ShowRandom</Link>
                 <Link to='/products'>ProductList</Link>
                 <Link to='/users'>Users</Link>


                 <Route path='/show-random-number' component={ShowRandom}/>
                 <Route path='/products' component={ProductList}/>
                 <Route path ='/users' component={UserList}/>
                 <Route path ='/users/:id' component={userShow}/>
                 
        
             </div>
         </BrowserRouter>

    )
 }
 const mapStateToProps =(state)=>{
     return{
         count:state.count
     }
 }
//  const WrappedComponent=connect()(App)
//  export default WrappedComponent

export default connect(mapStateToProps)(App)