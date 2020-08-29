import { getFirebase } from "react-redux-firebase"

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESSFUL' })
        }).catch((error) => {
            dispatch({ type: 'LOGIN_ERROR', error })
        })
    }
}