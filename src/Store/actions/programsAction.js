export const createProgram = (program) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        // making async call to get data from database
        const firestore = getFirestore();
        firestore.collection('programs').add({
            ...program,
            authorFirstName: 'Jenny',
            authorLastName: 'D',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROGRAM', program });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROGRAM_ERROR', err });
        });
    }
};

