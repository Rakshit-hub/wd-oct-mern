import React from 'react'
import {BrowserRouter, Link,Route} from 'react-router-dom'
import NoteList from './component/notes/notes'
import NoteShow from './component/notes/noteShow'
import NoteNew from './component/notes/noteNew'

import CategoryList from './component/category/categoryList'
import CategoryNew from './component/category/categoryNew'
import CategoryEdit from './component/category/categoryEdit'



function App(props){
    return(
        <div>
            <BrowserRouter>
            <h1>NotesApp</h1>
            <Link to="/notes">Notes</Link><br/>
            <Link to="/categories">Categories</Link>

            <Route path="/notes" component={NoteList} exact={true} />
            <Route path="/notes/:id" component={NoteShow} />
            <Route path='/notes/new' component={NoteNew}/>

            <Route path="/categories" component={CategoryList} exact={true}/>
            <Route path="/categories/new" component={CategoryNew}/>
            <Route path="/categories/edit/:id" component={CategoryEdit}/>
            
            </BrowserRouter>
        </div>
    )
}
export default App