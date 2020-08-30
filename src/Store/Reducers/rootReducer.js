import authenicationReducer from './authenicationReducer'
import createReducer from './createReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authenicationReducer,
    create: createReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;