export const createProgram = (program) => {
    return (dispatch, getState) => {
        // making async call to get data from database
        dispatch({
            type: 'CREATE_PROGRAM',
            program: program
        })
    }
};