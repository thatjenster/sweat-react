import authenicationReducer from './authenicationReducer'
import createReducer from './createReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authenicationReducer,
    create: createReducer
})

export default rootReducer;