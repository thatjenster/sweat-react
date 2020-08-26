const initState = {
    programs: [
        {id: '1', title: 'Booty Program', content: 'BLAH BLAH BLAH'},
        {id: '2', title: 'Get Fit Program', content: 'BLAH BLAH BLAH'},
        {id: '3', title: 'Tight Core Program', content: 'BLAH BLAH BLAH'}
    ]
}

const createReducer = (state = initState, action) => {
    return state
}

export default createReducer;