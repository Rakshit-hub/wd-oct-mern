import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import countReducers from '../../reducers/countReducer'
import numberReducer from '../../reducers/numberReducer'
import taskReducer from '../../reducers/taskreducer'
import productsReducer from '../../reducers/products'
import usersReducer from '../../reducers/users'


const configureStore=()=>{
    const store=createStore(combineReducers({
        count:countReducers,
        number:numberReducer,
        users:usersReducer,
        products:productsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore
