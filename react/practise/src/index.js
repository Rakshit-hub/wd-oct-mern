import React from 'react'
import App from './App'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import {  startSetUser } from './action/users'


const store=configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())
store.dispatch(startSetUser())

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))