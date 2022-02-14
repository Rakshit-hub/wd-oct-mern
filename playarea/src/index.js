 import React from 'react'
 import ReactDOM from 'react-dom'
 import {Provider} from 'react-redux'
 import App from './App'
 import configureStore from './component/store/configureStore'
import { increment, decrement, incrementBy ,reset} from './action/count'
import {startGetUsers} from './action/user'
 const store=configureStore()
 store.subscribe(()=>{
     console.log(store.getState())
 })
 console.log(store.getState())
 store.dispatch(startGetUsers())
//  store.dispatch(increment())
//  store.dispatch(increment())
//  store.dispatch(increment())
//  store.dispatch(decrement())
//  store.dispatch(incrementBy(10))
//  store.dispatch(reset())
const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)
 ReactDOM.render(jsx,document.getElementById('root'))