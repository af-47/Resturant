import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import { restuarantListReducer } from './reducers/restaurantReducer'

//create reducer
const reducers= combineReducers({
 restaurentReducer:restuarantListReducer
})

//create middleware
const middleware=[thunk]

//create store
const store=createStore(reducers,applyMiddleware(...middleware))

export default store


