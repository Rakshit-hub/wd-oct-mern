import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import countReducer from '../reducer/count'
import randomReducer from '../reducer/random'
import numbersReducer from '../reducer/number'
import productReducer from '../reducer/product'
import usersReducer from '../reducer/users'

const configureStore=()=>{
    const store=createStore(combineReducers({
        count:countReducer,
        random:randomReducer,
        numbers:numbersReducer,
        product:productReducer,
        users:usersReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore