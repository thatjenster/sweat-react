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
        default:
            return state;
    }
}

export default authenicationReducer;