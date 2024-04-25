import { createStore, combineReducers } from 'redux'
import contact from './reducer'

const rootReducer =  combineReducers({
    contact,
}) 

//Creating global state for application
//createStore(), functionality is responsible to update global state
export const store = createStore(rootReducer);


