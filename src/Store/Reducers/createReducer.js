const initState = {
    programs: [
        {id: '1', title: 'Booty Program', content: 'BLAH BLAH BLAH'},
        {id: '2', title: 'Get Fit Program', content: 'BLAH BLAH BLAH'},
        {id: '3', title: 'Tight Core Program', content: 'BLAH BLAH BLAH'}
    ]
}

const createReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROGRAM':
            console.log('created program', action.program)
            return state;
        case 'CREATE_PROGRAM_ERROR':
            console.log('create project error', action.err);
            return state;
        default: 
            return state;
    }
};

export default createReducer;