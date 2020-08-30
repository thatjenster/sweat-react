const initState = {
    authError: null
}

const authenicationReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
            ...state,
            authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESSFUL':
            console.log('login sucess');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout sucessfull');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.error.message
            }
        default:
            return state;
    }
}

export default authenicationReducer;