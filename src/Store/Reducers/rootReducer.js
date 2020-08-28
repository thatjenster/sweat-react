import authenicationReducer from './authenicationReducer'
import createReducer from './createReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authenicationReducer,
    create: createReducer,
    firestore: firestoreReducer
});

export default rootReducer;