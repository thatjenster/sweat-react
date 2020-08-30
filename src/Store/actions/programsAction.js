export const createProgram = (program) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        // making async call to get data from database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;  
        const authorId = getState().firebase.auth.uid;
        firestore.collection('programs').add({
            ...program,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROGRAM', program });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROGRAM_ERROR', err });
        });
    }
};

